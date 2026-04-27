import { useState, useEffect, useCallback } from 'react';
import type { ChallengeExercise } from '../types';
import { CodeEditor } from './CodeEditor';
import { usePyodide } from '../hooks/usePyodide';

interface ChallengeViewProps {
  challenge: ChallengeExercise;
  onComplete: () => void;
  isCompleted: boolean;
}

interface TestResult {
  passed: boolean;
  description: string;
  expected: string;
  actual: string;
  error?: string;
  detail?: string;
}

const difficultyColors = {
  easy: 'text-success bg-success/15 border-success/30',
  medium: 'text-yellow-400 bg-yellow-400/15 border-yellow-400/30',
  hard: 'text-red-400 bg-red-400/15 border-red-400/30',
};

export function ChallengeView({ challenge, onComplete, isCompleted }: ChallengeViewProps) {
  const [code, setCode] = useState(challenge.starterCode);
  const [results, setResults] = useState<TestResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [running, setRunning] = useState(false);
  const [allPassed, setAllPassed] = useState(false);
  const [hintLevel, setHintLevel] = useState(-1);
  const [showSolution, setShowSolution] = useState(false);
  const { runCode, loading } = usePyodide();

  const handleRun = useCallback(async () => {
    if (running || loading) return;
    setRunning(true);
    setError(null);
    setResults([]);
    setAllPassed(false);

    // Count user code lines for error mapping
    const userCodeLines = code.split('\n').length;

    // Build test runner code: define the function, then test each case
    const testCode = `
import json as __json__
import traceback as __tb__

# --- User code ---
${code}

# --- Test runner ---
__results__ = []
__fn__ = ${challenge.functionName}
__tests__ = ${JSON.stringify(challenge.testCases.map(t => ({ input: t.input, expected: t.expected, description: t.description })))}

for __t__ in __tests__:
    try:
        __actual__ = eval(f"__fn__({__t__['input']})")
        __expected__ = eval(__t__["expected"])
        __passed__ = __actual__ == __expected__
        __results__.append({
            "passed": __passed__,
            "description": __t__["description"],
            "expected": repr(__expected__),
            "actual": repr(__actual__),
        })
    except Exception as __e__:
        __err_lines__ = __tb__.format_exception(type(__e__), __e__, __e__.__traceback__)
        __err_detail__ = "".join(__err_lines__)
        __results__.append({
            "passed": False,
            "description": __t__["description"],
            "expected": __t__["expected"],
            "actual": "",
            "error": f"{type(__e__).__name__}: {__e__}",
            "detail": __err_detail__,
        })

print("__CHALLENGE_RESULTS__:" + __json__.dumps(__results__))
`;

    const result = await runCode(testCode);
    setRunning(false);

    if (result.error) {
      // Map line numbers from the wrapper back to user code
      const mapped = result.error.replace(/line (\d+)/g, (_: string, n: string) => {
        const origLine = parseInt(n) - 4; // offset for the wrapper preamble
        if (origLine >= 1 && origLine <= userCodeLines) {
          return `line ${origLine}`;
        }
        return `line ${n}`;
      });
      setError(mapped);
      return;
    }

    // Parse results from output
    const marker = '__CHALLENGE_RESULTS__:';
    const idx = result.output.indexOf(marker);
    if (idx === -1) {
      setError(`Could not run tests. Make sure your function "${challenge.functionName}" is defined correctly.`);
      return;
    }

    try {
      const json = result.output.slice(idx + marker.length).trim();
      const parsed: TestResult[] = JSON.parse(json);
      setResults(parsed);

      const passed = parsed.every(r => r.passed);
      setAllPassed(passed);
      if (passed && !isCompleted) {
        setTimeout(() => onComplete(), 800);
      }
    } catch {
      setError('Error parsing test results.');
    }
  }, [code, challenge, isCompleted, loading, onComplete, runCode, running]);

  // Ctrl+Enter shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        handleRun();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handleRun]);

  const handleReset = () => {
    setCode(challenge.starterCode);
    setResults([]);
    setError(null);
    setAllPassed(false);
    setShowSolution(false);
  };

  const passedCount = results.filter(r => r.passed).length;

  return (
    <div className="flex flex-col lg:flex-row gap-4 h-[calc(100vh-4rem)] p-4 slide-up">
      {/* Left: Problem description */}
      <div className="lg:w-2/5 h-64 lg:h-auto bg-dark-800 rounded-xl border border-dark-600 p-5 overflow-y-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className={`text-xs px-2 py-0.5 rounded-md border font-bold uppercase ${difficultyColors[challenge.difficulty]}`}>
            {challenge.difficulty}
          </span>
          <span className="text-xs text-slate-500">Challenge</span>
        </div>

        <div className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap mb-6">
          {challenge.description}
        </div>

        {/* Examples */}
        <div className="space-y-4 mb-6">
          {challenge.examples.map((ex, i) => (
            <div key={i} className="bg-dark-900 border border-dark-600 rounded-lg p-3">
              <div className="text-xs text-slate-500 mb-2 font-bold">Example {i + 1}</div>
              <div className="font-mono text-xs space-y-1">
                <div><span className="text-slate-500">Input: </span><span className="text-emerald-300">{ex.input}</span></div>
                <div><span className="text-slate-500">Output: </span><span className="text-emerald-300">{ex.output}</span></div>
                {ex.explanation && (
                  <div className="text-slate-400 mt-1 font-sans">{ex.explanation}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Hints */}
        <div className="mb-4">
          <button
            onClick={() => setHintLevel(h => Math.min(h + 1, challenge.hints.length - 1))}
            className="text-sm text-accent hover:text-accent-light transition-colors"
          >
            {hintLevel < 0 ? 'Need a hint?' : `Hint ${hintLevel + 1}/${challenge.hints.length}`}
          </button>
          {hintLevel >= 0 && (
            <div className="mt-2 space-y-2">
              {challenge.hints.slice(0, hintLevel + 1).map((hint, i) => (
                <div key={i} className="bg-accent/10 border border-accent/20 rounded-lg p-3 text-sm text-accent-light">
                  {hint}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Solution */}
        <div>
          <button
            onClick={() => setShowSolution(!showSolution)}
            className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
          >
            {showSolution ? 'Hide solution' : 'Show solution'}
          </button>
          {showSolution && (
            <pre className="mt-2 bg-dark-900 border border-dark-600 rounded-lg p-3 text-xs text-emerald-300 font-mono overflow-x-auto">
              {challenge.solution}
            </pre>
          )}
        </div>
      </div>

      {/* Right: Editor + Test Results */}
      <div className="lg:w-3/5 flex flex-col gap-3 min-h-0 flex-1">
        {/* Editor */}
        <div className="flex-1 min-h-0">
          <CodeEditor value={code} onChange={setCode} />
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={handleRun}
            disabled={running || loading}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-lg font-bold transition-all ${
              running || loading
                ? 'bg-dark-600 text-slate-400 cursor-wait'
                : 'bg-accent hover:bg-accent-light text-dark-900 hover:scale-105'
            }`}
          >
            {running ? 'Testing...' : loading ? 'Loading Python...' : 'Run Tests'}
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-dark-700 transition-colors"
          >
            Reset
          </button>
          <span className="text-xs text-slate-600 hidden sm:inline">Ctrl+Enter to run</span>
          {results.length > 0 && (
            <span className={`ml-auto font-bold text-sm ${allPassed ? 'text-success xp-pop' : 'text-slate-400'}`}>
              {allPassed ? 'All tests passed!' : `${passedCount}/${results.length} passed`}
            </span>
          )}
          {isCompleted && results.length === 0 && (
            <span className="ml-auto text-success/60 text-sm">Previously completed</span>
          )}
        </div>

        {/* Test Results */}
        <div className={`bg-dark-800 rounded-xl border p-4 min-h-[120px] max-h-[250px] overflow-y-auto ${
          error ? 'border-red-500/40' : allPassed ? 'border-success/40' : 'border-dark-600'
        }`}>
          <div className="text-xs text-slate-500 mb-3 uppercase tracking-wider">Test Results</div>

          {error && <pre className="text-red-400 text-sm whitespace-pre-wrap">{error}</pre>}

          {results.length === 0 && !error && (
            <span className="text-slate-600 italic text-sm">Run your code to see test results</span>
          )}

          {results.length > 0 && (
            <div className="space-y-2">
              {results.map((r, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2 text-sm p-2 rounded-lg ${
                    r.passed ? 'bg-success/5' : 'bg-red-500/5'
                  }`}
                >
                  <span className="mt-0.5 shrink-0">{r.passed ? '\u2714' : '\u2718'}</span>
                  <div className="min-w-0">
                    <div className={r.passed ? 'text-success' : 'text-red-400'}>
                      {r.description}
                    </div>
                    {!r.passed && !r.error && (
                      <div className="text-xs text-slate-500 mt-1 font-mono">
                        <span className="text-slate-400">Expected:</span> {r.expected}
                        <br />
                        <span className="text-slate-400">Got:</span> {r.actual}
                      </div>
                    )}
                    {r.error && (
                      <div className="text-xs mt-1 font-mono">
                        <div className="text-red-400">{r.error}</div>
                        {r.detail && (
                          <details className="mt-1">
                            <summary className="text-red-400/50 cursor-pointer hover:text-red-400/80 text-[11px]">
                              Show traceback
                            </summary>
                            <pre className="text-red-400/60 mt-1 whitespace-pre-wrap text-[11px] max-h-[120px] overflow-y-auto">
                              {r.detail}
                            </pre>
                          </details>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
