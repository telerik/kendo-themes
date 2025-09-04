import { Icon } from '../icon';
import { classNames, optionClassNames, stateClassNames, variantClassNames, States, Size, Roundness, FillMode, ThemeColor } from '../misc';

import { KendoComponent } from '../_types/component';
export const BUTTON_CLASSNAME = `k-button`;

const BUTTON_VARIANTS = ["icon-button"] as const;

const states = [
    States.hover,
    States.focus,
    States.active,
    States.selected,
    States.disabled,
    'k-generating'
] as const;

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

export type KendoButtonOptions = {
  size?: (typeof options.size)[number] | null;
  rounded?: (typeof options.rounded)[number] | null;
  fillMode?: (typeof options.fillMode)[number] | null;
  themeColor?: (typeof options.themeColor)[number] | null;
  variant?: (typeof BUTTON_VARIANTS)[number] | null;
};

export type KendoButtonProps = KendoButtonOptions & {
  icon?: string;
  text?: string;
  iconClassName?: string;
  showArrow?: boolean;
  arrowIconName?: string;
};

export type KendoButtonState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    size: Size.medium,
    rounded: Roundness.medium,
    fillMode: FillMode.solid,
    themeColor: ThemeColor.base,
    showArrow: false,
    arrowIconName: "caret-alt-down"
};

export const Button: KendoComponent<KendoButtonProps & KendoButtonState & React.HTMLAttributes<HTMLButtonElement>> = (
    props: KendoButtonProps &
        KendoButtonState &
        React.HTMLAttributes<HTMLButtonElement>
) => {
    const {
        size = defaultOptions.size,
        rounded = defaultOptions.rounded,
        fillMode = defaultOptions.fillMode,
        themeColor = defaultOptions.themeColor,
        showArrow = defaultOptions.showArrow,
        arrowIconName = defaultOptions.arrowIconName,
        variant,
        hover,
        focus,
        active,
        selected,
        disabled,
        icon,
        text,
        iconClassName,
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
                variantClassNames(BUTTON_CLASSNAME, variant),
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
                    // @deprecated - Use variant="icon-button" instead
                    ['k-icon-button']: !text && !hasChildren && hasIcon,
                }
            )}
        >
            {icon && (
                <Icon
                    className={classNames(iconClassName, 'k-button-icon')}
                    icon= {icon}
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

            {showArrow && (<span className="k-menu-button-arrow k-button-arrow"><Icon icon= {arrowIconName} /></span>)}

        </button>
    );
};

Button.states = states;
Button.options = options;
Button.variants = BUTTON_VARIANTS;
Button.className = BUTTON_CLASSNAME;
Button.defaultOptions = defaultOptions;
Button.moduleName = "button";
Button.folderName = "button";

export default Button;
