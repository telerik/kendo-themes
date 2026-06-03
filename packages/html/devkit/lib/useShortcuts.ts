import { useEffect, useRef, useState } from 'react';
import type { DevKitParams } from './theme';
import { isEditable } from './dom';

interface QuickCycleOptions {
    params: DevKitParams;
    setParams: (update: Partial<DevKitParams>) => void;
    themes: string[];
    swatches: string[];
}

export interface Toast {
    id: number;
    label: string;
    value: string;
}

function step<T>(list: T[], current: T, dir: 1 | -1): T {
    if (!list.length) return current;
    const i = list.indexOf(current);
    const next = (i + dir + list.length) % list.length;
    return list[next];
}

/**
 * Global power-user shortcuts (Ctrl/Cmd+Shift+…):
 *   ← / →  cycle theme   ↑ / ↓  cycle swatch   M  toggle motion
 * Returns the most recent change as a transient toast for on-screen feedback.
 */
export function useQuickCycle(opts: QuickCycleOptions): Toast | null {
    const [toast, setToast] = useState<Toast | null>(null);
    const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    // Keep the latest options without re-binding the listener each render.
    const ref = useRef(opts);
    ref.current = opts;

    const fire = (label: string, value: string) => {
        setToast({ id: Date.now(), label, value });
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setToast(null), 1400);
    };

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (!(e.ctrlKey || e.metaKey) || !e.shiftKey) return;
            if (isEditable(e.target)) return;

            const { params, setParams, themes, swatches } = ref.current;
            const key = e.key.toLowerCase();

            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                e.preventDefault();
                const theme = step(themes, params.theme, e.key === 'ArrowRight' ? 1 : -1);
                setParams({ theme });
                fire('Theme', theme);
            } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                e.preventDefault();
                const swatch = step(swatches, params.swatch, e.key === 'ArrowDown' ? 1 : -1);
                setParams({ swatch });
                fire('Swatch', swatch);
            } else if (key === 'm') {
                e.preventDefault();
                const animations = !params.animations;
                setParams({ animations });
                fire('Motion', animations ? 'on' : 'off');
            }
        }

        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    useEffect(() => () => clearTimeout(timer.current), []);

    return toast;
}
