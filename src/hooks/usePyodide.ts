import { useState, useCallback, useRef } from 'react';

declare global {
  interface Window {
    loadPyodide: (config?: Record<string, unknown>) => Promise<PyodideInterface>;
  }
}

interface PyodideInterface {
  runPythonAsync: (code: string) => Promise<unknown>;
  setStdout: (options: { batched: (text: string) => void }) => void;
  setStderr: (options: { batched: (text: string) => void }) => void;
}

export function usePyodide() {
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);
  const pyodideRef = useRef<PyodideInterface | null>(null);

  const init = useCallback(async () => {
    if (pyodideRef.current) return pyodideRef.current;
    setLoading(true);

    // Load script if not already loaded
    if (!window.loadPyodide) {
      await new Promise<void>((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js';
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load Pyodide'));
        document.head.appendChild(script);
      });
    }

    const pyodide = await window.loadPyodide({
      indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/',
    });
    pyodideRef.current = pyodide;
    setReady(true);
    setLoading(false);
    return pyodide;
  }, []);

  const runCode = useCallback(
    async (code: string): Promise<{ output: string; error: string | null }> => {
      const pyodide = await init();
      let output = '';
      let error: string | null = null;

      pyodide.setStdout({
        batched: (text: string) => {
          output += text + '\n';
        },
      });
      pyodide.setStderr({
        batched: (text: string) => {
          error = (error || '') + text + '\n';
        },
      });

      try {
        await pyodide.runPythonAsync(code);
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        // Extract just the last line of the traceback for cleaner errors
        const lines = msg.split('\n').filter((l) => l.trim());
        error = lines[lines.length - 1] || msg;
      }

      // Trim trailing newline
      output = output.replace(/\n$/, '');

      return { output, error };
    },
    [init]
  );

  return { runCode, loading, ready };
}
