import { Icon } from '../icon';
import { classNames, optionClassNames, stateClassNames, States, Size, Roundness, FillMode, ThemeColor } from '../utils';

export const FLOATINGACTIONBUTTON_CLASSNAME = `k-fab`;

const states = [
    States.hover,
    States.focus,
    States.active,
    States.selected,
    States.disabled
];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.solid, FillMode.flat, FillMode.outline, FillMode.clear, FillMode.link ],
    themeColor: [
        ThemeColor.base,
        ThemeColor.primary,
        ThemeColor.secondary,
        ThemeColor.tertiary,
        ThemeColor.success,
        ThemeColor.warning,
        ThemeColor.error,
        ThemeColor.info,
        ThemeColor.light,
        ThemeColor.dark,
        ThemeColor.inverse
    ],
};

export type KendoFloatingActionButtonOptions = {
  size?: (typeof options.size)[number] | null;
  rounded?: (typeof options.rounded)[number] | null;
  fillMode?: (typeof options.fillMode)[number] | null;
  themeColor?: (typeof options.themeColor)[number] | null;
};

export type KendoFloatingActionButtonProps = KendoFloatingActionButtonOptions & {
    text?: string;
    icon?: string;
    type?: 'button' | 'submit' | 'reset';
    position?: null | 'top-start' | 'top-center' | 'top-end' | 'middle-start' | 'middle-end' | 'bottom-start' | 'bottom-center' | 'bottom-end';
};

export type KendoFloatingActionButtonState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    size: Size.medium,
    rounded: Roundness.full,
    fillMode: FillMode.solid,
    themeColor: ThemeColor.primary,
    type: 'button',
} as const;

export const FloatingActionButton = (
    props: KendoFloatingActionButtonProps &
        KendoFloatingActionButtonState &
        React.HTMLAttributes<HTMLButtonElement>
) => {
    const {
        size = defaultProps.size,
        rounded = defaultProps.rounded,
        fillMode = defaultProps.fillMode,
        themeColor = defaultProps.themeColor,
        text,
        icon,
        type = defaultProps.type,
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
                    fillMode,
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
            )}>
            {icon && <Icon className="k-fab-icon" name={icon} /> }
            {text && <span className="k-fab-text">{text}</span>}
        </button>
    );
};

FloatingActionButton.states = states;
FloatingActionButton.options = options;
FloatingActionButton.className = FLOATINGACTIONBUTTON_CLASSNAME;
FloatingActionButton.defaultProps = defaultProps;

export default FloatingActionButton;
