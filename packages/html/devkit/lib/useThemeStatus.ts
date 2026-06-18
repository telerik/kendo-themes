import { useEffect, useRef, useState } from 'react';
import { THEME_EVENTS } from './theme';

export interface ThemeStatus {
    kind: 'loading' | 'error';
    text: string;
}

/**
 * Tracks on-demand theme compilation for the dev bar: shows a "loading" status
 * while CSS compiles and a transient "error" status if a build fails.
 */
export function useThemeStatus(): ThemeStatus | null {
    const [status, setStatus] = useState<ThemeStatus | null>(null);
    const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    useEffect(() => {
        const onLoading = (e: Event) => {
            const { theme, swatch } = (e as CustomEvent).detail ?? {};
            clearTimeout(timer.current);
            setStatus({ kind: 'loading', text: swatch && swatch !== 'all' ? swatch : theme });
        };
        const onLoaded = () => setStatus(s => (s?.kind === 'loading' ? null : s));
        const onError = (e: Event) => {
            const { pkg } = (e as CustomEvent).detail ?? {};
            clearTimeout(timer.current);
            setStatus({ kind: 'error', text: `${pkg} build failed` });
            timer.current = setTimeout(() => setStatus(null), 4000);
        };

        window.addEventListener(THEME_EVENTS.loading, onLoading);
        window.addEventListener(THEME_EVENTS.loaded, onLoaded);
        window.addEventListener(THEME_EVENTS.error, onError);
        return () => {
            window.removeEventListener(THEME_EVENTS.loading, onLoading);
            window.removeEventListener(THEME_EVENTS.loaded, onLoaded);
            window.removeEventListener(THEME_EVENTS.error, onError);
            clearTimeout(timer.current);
        };
    }, []);

    return status;
}
