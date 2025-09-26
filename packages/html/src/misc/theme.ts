export const Size = {
    'xsmall': 'xsmall',
    'small': 'small',
    'medium': 'medium',
    'large': 'large',
    'xlarge': 'xlarge',
    'xxlarge': 'xxlarge',
    'xxxlarge': 'xxxlarge',
} as const;

export const Roundness = {
    'none': 'none',
    'small': 'small',
    'medium': 'medium',
    'large': 'large',
    'full': 'full',
} as const;

export const FillMode = {
    'solid': 'solid',
    'flat': 'flat',
    'outline': 'outline',
    'clear': 'clear',
    'link': 'link',
} as const;

export const ThemeColor = {
    'inherit': 'inherit',
    'base': 'base',
    'primary': 'primary',
    'secondary': 'secondary',
    'tertiary': 'tertiary',
    'info': 'info',
    'success': 'success',
    'warning': 'warning',
    'error': 'error',
    'dark': 'dark',
    'light': 'light',
    'inverse': 'inverse',
} as const;

export const States = {
    'open': 'open',
    'hover': 'hover',
    'focus': 'focus',
    'active': 'active',
    'selected': 'selected',
    'disabled': 'disabled',
    'valid': 'valid',
    'invalid': 'invalid',
    'loading': 'loading',
    'required': 'required',
    'empty': 'empty',
    'indeterminate': 'indeterminate',
    'checked': 'checked',
    'readonly': 'readonly',
    'highlighted': 'highlighted',
    'generating': 'generating',
    'expanded': 'expanded'
} as const;

export const kendoThemeMaps = {
    calloutMap: {
        top: 'n',
        bottom: 's',
        left: 'w',
        right: 'e'
    },
    orientationMap: {
        vertical: 'vstack',
        horizontal: 'hstack',
    },
} as const;
