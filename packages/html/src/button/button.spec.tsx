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
  icon?: string;
  text?: string;
  iconClassName?: string;
  showArrow?: boolean;
  arrowIconName?: string;
  /**
   * When true, the button acts as a toggle button with aria-pressed attribute.
   * @aria aria-pressed="true"|"false" based on selected state
   */
  togglable?: boolean;
  /**
   * When true, the button is visually disabled and announced as disabled to AT,
   * but remains focusable (no native `disabled` attribute).
   * @aria aria-disabled="true" and k-disabled class without native disabled
   */
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
 * @accessibility
 * - Uses semantic `<button>` element (role="button" is implicit)
 * - Icon-only buttons MUST have `aria-label` prop for accessible name
 * - Disabled state uses native `disabled` attribute
 *
 * @example
 * ```tsx
 * // Text button - accessible name from content
 * <Button>Save</Button>
 *
 * // Icon-only button - requires aria-label
 * <Button icon="close" aria-label="Close dialog" />
 * ```
 *
 * @wcag 4.1.2 Name, Role, Value - button must have accessible name
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
        text,
        iconClassName,
        className,
        ...other
    } = props;

    const hasIcon = (icon !== undefined);
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
            {...other}
            aria-pressed={togglable ? (selected ? 'true' : 'false') : undefined}
            aria-disabled={ariaDisabled ? 'true' : undefined}
            disabled={disabled || undefined}
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
 * Accessibility specification for Button.
 */
Button.ariaSpec = {
    selector: '.k-button',
    rules: [
        { selector: '.k-button', attribute: 'role=button or nodeName=button', usage: 'The button role is implicit from the native <button> element.' },
        { selector: '.k-button', attribute: 'aria-label (when icon-only)', usage: 'Required for icon-only buttons that have no visible text.' },
        { selector: '.k-button', attribute: 'aria-pressed (when togglable)', usage: 'Indicates the pressed state of a toggle button.' },
        { selector: '.k-button', attribute: 'disabled (when disabled)', usage: 'Rendered when the button is disabled.' },
    ]
};

export default Button;
