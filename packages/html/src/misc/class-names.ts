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

export const responsiveClassNames = (prefix: string, value?: string | number | Array<Record<string, number | string>>): string[] => {
    const classes: string[] = [];
    if (Array.isArray(value)) {
        value.forEach(obj => {
            Object.entries(obj).forEach(([key, val]) => {
                if (typeof val === 'number' || typeof val === 'string') {
                    // If the key is 'all', it applies to all breakpoints
                    // Otherwise, it applies to the specific breakpoint
                    if (key === 'all') {
                        classes.push(`${prefix}-${val}`);
                    } else {
                        classes.push(`${prefix}-${key}-${val}`);
                    }
                }
            });
        });
    } else {
        if (value != null) {
            classes.push(`${prefix}-${value}`);
        }
    }
    return classes;
}
