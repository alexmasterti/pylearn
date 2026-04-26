import { useState } from 'react';
import { CodeEditor } from './CodeEditor';
import { usePyodide } from '../hooks/usePyodide';

export function Playground() {
  const [code, setCode] = useState('# Python Playground - experiment freely!\n\nprint("Hello from the playground!")\n');
  const [output, setOutput] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [running, setRunning] = useState(false);
  const { runCode, loading } = usePyodide();

  const handleRun = async () => {
    setRunning(true);
    setError(null);
    setOutput(null);
    const result = await runCode(code);
    setRunning(false);
    if (result.error) setError(result.error);
    else setOutput(result.output);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-1rem)] p-4 slide-up">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-white">Code Playground</h2>
          <p className="text-sm text-slate-400">Experiment freely - no rules, no tests!</p>
        </div>
      </div>

      <div className="flex-1 min-h-0 mb-3">
        <CodeEditor value={code} onChange={setCode} />
      </div>

      <div className="flex items-center gap-3 mb-3">
        <button
          onClick={handleRun}
          disabled={running || loading}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold transition-all ${
            running || loading
              ? 'bg-dark-600 text-slate-400 cursor-wait'
              : 'bg-accent hover:bg-accent-light text-dark-900 hover:scale-105'
          }`}
        >
          {running ? 'Running...' : loading ? 'Loading Python...' : '\u25B6 Run Code'}
        </button>
        <button
          onClick={() => { setCode(''); setOutput(null); setError(null); }}
          className="px-4 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-dark-700 transition-colors"
        >
          Clear
        </button>
        <span className="text-xs text-slate-500 ml-auto">Ctrl+Enter to run</span>
      </div>

      <div className={`bg-dark-800 rounded-xl border p-4 min-h-[140px] max-h-[240px] overflow-y-auto font-mono text-sm ${
        error ? 'border-red-500/40' : 'border-dark-600'
      }`}>
        <div className="text-xs text-slate-500 mb-2 uppercase tracking-wider">Output</div>
        {output !== null && <pre className="text-slate-200 whitespace-pre-wrap">{output || '(no output)'}</pre>}
        {error && <pre className="text-red-400 whitespace-pre-wrap">{error}</pre>}
        {output === null && !error && <span className="text-slate-600 italic">Run your code to see output here</span>}
      </div>
    </div>
  );
}
