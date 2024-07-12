export const classNames = (...args: any[]): string => {
    return args
        .filter((arg) => arg !== true && Boolean(arg))
        .map((arg: any) => {
            return Array.isArray(arg)
                ? classNames(...arg)
                : typeof arg === 'object'
                    ? Object.keys(arg)
                        .map((key, idx) => arg[idx] || (arg[key] && key) || null)
                        .filter((el) => el !== null)
                        .join(' ')
                    : arg;
        })
        .filter((arg) => Boolean(arg))
        .join(' ');
};
