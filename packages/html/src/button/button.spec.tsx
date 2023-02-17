import { Icon } from '../icon';
import { classNames, optionClassNames, stateClassNames, States } from '../utils-new';

export const BUTTON_CLASSNAME = `k-button`;

const states = [
    States.hover,
    States.focus,
    States.active,
    States.selected,
    States.disabled
];

const options = {
    size: [ "small", "medium", "large" ],
    rounded: [ "small", "medium", "large", "full" ],
    fillMode: [ "solid", "flat", "outline", "clear", "link" ],
    themeColor: [
        "base",
        "primary",
        "secondary",
        "tertiary",
        "success",
        "warning",
        "error",
        "info",
        "light",
        "dark"
    ],
};

export type KendoButtonOptions = {
  size?: (typeof options.size)[number] | null;
  rounded?: (typeof options.rounded)[number] | null;
  fillMode?: (typeof options.fillMode)[number] | null;
  themeColor?: (typeof options.themeColor)[number] | null;
};

export type KendoButtonProps = KendoButtonOptions & {
  icon?: string;
  text?: string;
  iconClassName?: string;
  showArrow?: boolean;
  arrowIconName?: string;
};

export type KendoButtonState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    size: "medium",
    rounded: "medium",
    fillMode: "solid",
    themeColor: "base",
    showArrow: false,
    arrowIconName: "arrow-s"
};

export const Button = (
    props: KendoButtonProps &
        KendoButtonState &
        React.HTMLAttributes<HTMLButtonElement>
) => {
    const {
        size = defaultProps.size,
        rounded = defaultProps.rounded,
        fillMode = defaultProps.fillMode,
        themeColor = defaultProps.themeColor,
        hover,
        focus,
        active,
        selected,
        disabled,
        icon,
        text,
        iconClassName,
        showArrow = defaultProps.showArrow,
        arrowIconName = defaultProps.arrowIconName,
        ...other
    } = props;

    const hasIcon = (icon !== undefined);
    const hasChildren = props.children !== undefined;

    return (
        <button
            {...other}
            className={classNames(
                props.className,
                BUTTON_CLASSNAME,
                optionClassNames(BUTTON_CLASSNAME, {
                    size,
                    rounded,
                    fillMode,
                    themeColor,
                }),
                stateClassNames(BUTTON_CLASSNAME, {
                    hover,
                    focus,
                    active,
                    disabled,
                    selected,
                }),
                {
                    ['k-icon-button']: !text && !hasChildren && hasIcon,
                }
            )}
        >
            {icon && (
                <Icon
                    className={classNames(iconClassName, 'k-button-icon')}
                    name= {icon}
                />
            )}

            {text
                ?
                <>
                    {text && <span className="k-button-text">{text}</span>}
                    {props.children}
                </>
                : props.children && <span className="k-button-text">{props.children}</span>
            }

            {showArrow && (<span className="k-menu-button-arrow k-button-arrow"><Icon name= {arrowIconName} /></span>)}

        </button>
    );
};

Button.states = states;
Button.options = options;
Button.className = BUTTON_CLASSNAME;

export default Button;
