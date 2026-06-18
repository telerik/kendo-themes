import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { applyParams, readParams, type DevKitParams } from './lib/theme';

export type { DevKitParams } from './lib/theme';

interface DevKitContextValue {
    params: DevKitParams;
    setParams: (update: Partial<DevKitParams>) => void;
}

const DevKitContext = createContext<DevKitContextValue>(null!);

export function useDevKit(): DevKitContextValue {
    return useContext(DevKitContext);
}

export function DevKitProvider({ children }: { children: React.ReactNode }) {
    const [params, setParamsState] = useState<DevKitParams>(readParams);

    // Keep state in sync when the user navigates back/forward.
    useEffect(() => {
        const onPopState = () => {
            const next = readParams();
            setParamsState(next);
            applyParams(next);
        };
        window.addEventListener('popstate', onPopState);
        return () => window.removeEventListener('popstate', onPopState);
    }, []);

    const setParams = useCallback((update: Partial<DevKitParams>) => {
        setParamsState(prev => {
            const next: DevKitParams = { ...prev, ...update };
            // Reset swatch when the theme changes unless the caller set one explicitly.
            if (update.theme && update.theme !== prev.theme && update.swatch === undefined) {
                next.swatch = 'all';
            }
            applyParams(next);
            return next;
        });
    }, []);

    return (
        <DevKitContext.Provider value={{ params, setParams }}>
            {children}
        </DevKitContext.Provider>
    );
}
