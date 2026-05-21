import { Icon } from '../icon';
import { classNames, optionClassNames, stateClassNames, States, Size, Roundness, ThemeColor } from '../misc';

import { KendoComponent } from '../_types/component';
import { FAB_FOLDER_NAME, FAB_MODULE_NAME } from './constants';
import a11ySpec from './behavior/accessibility.json';
export const FLOATINGACTIONBUTTON_CLASSNAME = `k-fab`;

const states = [
    States.hover,
    States.focus,
    States.active,
    States.selected,
    States.disabled
];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.undefined, Roundness.none, Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    themeColor: [
        ThemeColor.undefined,
        ThemeColor.base,
        ThemeColor.primary,
        ThemeColor.secondary,
        ThemeColor.tertiary
    ],
};

export type KendoFloatingActionButtonOptions = {
  size?: (typeof options.size)[number] | null;
  rounded?: (typeof options.rounded)[number] | null;
  themeColor?: (typeof options.themeColor)[number] | null;
};

export type KendoFloatingActionButtonProps = KendoFloatingActionButtonOptions & {
    text?: string;
    icon?: string;
    type?: 'button' | 'submit' | 'reset';
    position?: null | 'top-start' | 'top-center' | 'top-end' | 'middle-start' | 'middle-end' | 'bottom-start' | 'bottom-center' | 'bottom-end';
};

export type KendoFloatingActionButtonState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    type: 'button',
} as const;

export const FloatingActionButton: KendoComponent<KendoFloatingActionButtonProps & KendoFloatingActionButtonState & React.HTMLAttributes<HTMLButtonElement>> = (
    props: KendoFloatingActionButtonProps &
        KendoFloatingActionButtonState &
        React.HTMLAttributes<HTMLButtonElement>
) => {
    const {
        size,
        rounded,
        themeColor,
        text,
        icon,
        type = defaultOptions.type,
        position,
        hover,
        focus,
        active,
        selected,
        disabled,
        ...other
    } = props;

    return (
        <button
            {...other}
            type={type}
            className={classNames(
                props.className,
                FLOATINGACTIONBUTTON_CLASSNAME,
                optionClassNames(FLOATINGACTIONBUTTON_CLASSNAME, {
                    size,
                    rounded,
                    themeColor,
                }),
                stateClassNames(FLOATINGACTIONBUTTON_CLASSNAME, {
                    hover,
                    focus,
                    active,
                    disabled,
                    selected,
                }),
                {
                    [`!k-pos-absolute k-${position}`]: position,
                }
            )}
            {...(!text && icon && !props['aria-label'] && { 'aria-label': 'Action' })}
            {...(disabled && { 'aria-disabled': 'true' })}
            disabled={disabled || undefined}
        >
            {icon && <Icon className="k-fab-icon" icon={icon} /> }
            {text && <span className="k-fab-text">{text}</span>}
        </button>
    );
};

FloatingActionButton.states = states;
FloatingActionButton.options = options;
FloatingActionButton.className = FLOATINGACTIONBUTTON_CLASSNAME;
FloatingActionButton.defaultOptions = defaultOptions;
FloatingActionButton.moduleName = FAB_MODULE_NAME;
FloatingActionButton.folderName = FAB_FOLDER_NAME;

FloatingActionButton.ariaSpec = a11ySpec.ariaSpec;

export default FloatingActionButton;
