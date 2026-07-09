import { Icon } from '../icon';
import { classNames, optionClassNames, stateClassNames, variantClassNames, States, Size, Roundness, FillMode, ThemeColor } from '../misc';

import { KendoComponent, KendoBaseProps } from '../_types/component';
import { BUTTON_FOLDER_NAME, BUTTON_MODULE_NAME } from './constants';
export const BUTTON_CLASSNAME = `k-button`;

const BUTTON_VARIANTS = ["icon-button"] as const;

const states = [
    States.hover,
    States.focus,
    States.active,
    States.selected,
    States.disabled,
    States.generating
] as const;

const options = {
    size: [ Size.undefined, Size.xsmall, Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.undefined, Roundness.none, Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.undefined, FillMode.solid, FillMode.flat, FillMode.outline, FillMode.clear, FillMode.link ],
    themeColor: [
        ThemeColor.undefined,
        ThemeColor.base,
        ThemeColor.primary,
        ThemeColor.secondary,
        ThemeColor.tertiary,
        ThemeColor.success,
        ThemeColor.warning,
        ThemeColor.error,
        ThemeColor.info,
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
  icon?: string | React.ReactNode;
  iconSize?: typeof Size[keyof typeof Size];
  text?: string;
  iconClassName?: string;
  showArrow?: boolean;
  arrowIconName?: string;
  togglable?: boolean;
  ariaDisabled?: boolean;
};

export type KendoButtonState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    showArrow: false,
    arrowIconName: "chevron-down"
};

/**
 * Button component - interactive button element.
 *

 * @aria {role="button"} The button role is implicit from the native <button> element.
 * @aria {aria-label} Required for icon-only buttons that have no visible text.
 * @aria {disabled} Rendered when the button is disabled.
 * @aria {aria-pressed="true"|"false"} Indicates the pressed state; "true" when selected, "false" otherwise.
 * @aria {aria-disabled="true"} Announces as disabled to AT while keeping it in the tab sequence.
 */
export const Button: KendoComponent<KendoButtonProps & KendoButtonState & React.HTMLAttributes<HTMLButtonElement>> = (
    props: KendoButtonProps &
        KendoButtonState &
        KendoBaseProps &
        React.HTMLAttributes<HTMLButtonElement>
) => {
    const {
        as: Component = 'button',
        size,
        rounded,
        fillMode,
        themeColor,
        showArrow = defaultOptions.showArrow,
        arrowIconName = defaultOptions.arrowIconName,
        variant,
        hover,
        focus,
        active,
        selected,
        disabled,
        togglable,
        ariaDisabled,
        icon,
        iconSize,
        text,
        iconClassName,
        className,
        ...other
    } = props;

    const hasIcon = (icon !== undefined && icon !== null);
    const hasChildren = props.children !== undefined;

    return (
        <Component
            className={classNames(
                className,
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
                    disabled: disabled || ariaDisabled,
                    selected,
                }),
                {
                    // @deprecated - Use variant="icon-button" instead
                    ['k-icon-button']: !text && !hasChildren && hasIcon,
                }
            )}
            aria-pressed={togglable ? (selected ? 'true' : 'false') : undefined}
            {...other}
            aria-disabled={ariaDisabled ? 'true' : undefined}
            disabled={disabled || undefined}
        >
            {typeof icon === 'string' && icon && (
                <Icon
                    className={classNames(iconClassName, 'k-button-icon')}
                    icon= {icon}
                    size={iconSize}
                />
            )}

            {icon && typeof icon !== 'string' && (
                <>{icon}</>
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

        </Component>
    );
};

Button.states = states;
Button.options = options;
Button.variants = BUTTON_VARIANTS;
Button.className = BUTTON_CLASSNAME;
Button.defaultOptions = defaultOptions;
Button.moduleName = BUTTON_MODULE_NAME;
Button.folderName = BUTTON_FOLDER_NAME;

/**
 * @keyboard {Enter or Space} Triggers a click action on the Button.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/button/ WAI-ARIA Authoring Practices: Button Pattern
 */

export default Button;
