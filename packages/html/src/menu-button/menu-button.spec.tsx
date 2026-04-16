import { Button } from '../button';
import { classNames, States, Size, Roundness, FillMode, ThemeColor } from '../misc';

import { KendoComponent } from '../_types/component';
import { MENU_BUTTON_FOLDER_NAME, MENU_BUTTON_MODULE_NAME } from './constants';
export const MENUBUTTON_CLASSNAME = `k-menu-button`;

const states = [
    States.hover,
    States.focus,
    States.active,
    States.selected,
    States.disabled
];

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
        ThemeColor.light,
        ThemeColor.dark,
        ThemeColor.inverse
    ]
};

export type KendoMenuButtonOptions = {
  size?: (typeof options.size)[number] | null;
  rounded?: (typeof options.rounded)[number] | null;
  fillMode?: (typeof options.fillMode)[number] | null;
  themeColor?: (typeof options.themeColor)[number] | null;
};

export type KendoMenuButtonProps = KendoMenuButtonOptions & {
  icon?: string;
  text?: string;
  showArrow?: boolean;
  arrowIconName?: string;
  /** @aria aria-expanded state for the popup */
  expanded?: boolean;
};

export type KendoMenuButtonState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    showArrow: true,
    arrowIconName: "caret-alt-down"
};

export const MenuButton: KendoComponent<KendoMenuButtonProps & KendoMenuButtonState & React.HTMLAttributes<HTMLButtonElement>> = (
    props: KendoMenuButtonProps &
        KendoMenuButtonState &
        React.HTMLAttributes<HTMLButtonElement>
) => {
    const {
        size,
        rounded,
        fillMode,
        themeColor,
        hover,
        focus,
        active,
        selected,
        disabled,
        icon,
        text,
        showArrow = defaultOptions.showArrow,
        arrowIconName = defaultOptions.arrowIconName,
        expanded,
        ...other
    } = props;

    return (
        <Button
            {...other}
            className={classNames(
                props.className,
                MENUBUTTON_CLASSNAME,
            )}
            text={text}
            size={size}
            rounded={rounded}
            fillMode={fillMode}
            themeColor={themeColor}
            hover={hover}
            focus={focus}
            active={active}
            selected={selected}
            disabled={disabled}
            ariaDisabled={disabled || undefined}
            icon={icon}
            showArrow={showArrow}
            arrowIconName={arrowIconName}
            aria-expanded={expanded ? 'true' : 'false'}
            {...(!text && icon && !props['aria-label'] && { 'aria-label': 'Menu' })}
        />
    );
};

MenuButton.states = states;
MenuButton.options = options;
MenuButton.className = MENUBUTTON_CLASSNAME;
MenuButton.defaultOptions = defaultOptions;
MenuButton.moduleName = MENU_BUTTON_MODULE_NAME;
MenuButton.folderName = MENU_BUTTON_FOLDER_NAME;

/**
 * @ariaSpec
 * MenuButton follows the DropDownButton accessibility specification.
 *
 * - Button: role="button" (implicit), aria-expanded, aria-label for icon-only
 * - When disabled: aria-disabled="true"
 * - Popup list: role="list", items: role="listitem"
 */
MenuButton.ariaSpec = {
    selector: '.k-menu-button',
    rules: [
        { selector: '.k-menu-button', attribute: 'role=button or nodeName=button', usage: 'Omitted if the button DOM element is used.' },
        { selector: '.k-menu-button', attribute: 'aria-label (when icon-only)', usage: 'Required when no text is visible in the button.' },
        { selector: '.k-menu-button', attribute: 'aria-expanded=true/false', usage: 'Announces the state of the popup visibility.' },
        { selector: '.k-menu-button', attribute: 'aria-controls=.k-menu-group id (when open)', usage: 'Points to the popup element. Builds a relationship between the button and the popup.' },
        { selector: '.k-menu-button.k-disabled', attribute: 'aria-disabled=true', usage: 'Rendered only when the button is disabled.' },
        { selector: '.k-menu-group', attribute: 'role=list', usage: 'Announces the list role of the popup.' },
        { selector: '.k-menu-item', attribute: 'role=listitem', usage: 'Announces the listitem role of the popup items.' },
    ]
};

export default MenuButton;
