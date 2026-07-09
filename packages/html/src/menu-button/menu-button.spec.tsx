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
  expanded?: boolean;
};

export type KendoMenuButtonState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    showArrow: true,
    arrowIconName: "chevron-down"
};

/**
 * @aria {role="button"} Omitted if the button DOM element is used.
 * @aria {aria-label} Required when no text is visible in the button.
 * @aria {aria-controls=".k-menu-group id"} Points to the popup element. Builds a relationship between the button and the popup.
 * @aria {aria-disabled="true"} Rendered only when the button is disabled.
 * @aria {role="list"} Announces the list role of the popup.
 * @aria {role="listitem"} Announces the listitem role of the popup items.
 * @aria {aria-expanded} state for the popup
 */
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
 * @keyboard {Alt + ArrowDown} Opens the DropDownButton popup and moves the focus to its first `menuitem` element.
 * @keyboard {Enter or Space} Opens the DropDownButton popup and moves the focus to its first `menuitem` element.
 * @keyboard {Alt + ArrowUp} Closes the popup and moves the focus back to the main `button` element.
 * @keyboard {Escape} Closes the popup and moves the focus back to the main button element.
 * @keyboard {ArrowDown} Moves the focus to the next `menuitem` element. If the focus is on the last menu item, moves the focus to the first menu item.
 * @keyboard {ArrowUp} Moves the focus to the previous `menuitem` element. If the focus is on the first menu item, moves the focus to the last menu item.
 * @keyboard {Home} Moves the focus to the first `menuitem` element.
 * @keyboard {End} Moves the focus to the last `menuitem` element.
 * @keyboard {Enter or Space} Clicks (activates) the currently active `menuitem` element and closes the popup.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/ WAI-ARIA Authoring Practices: Menu Button Pattern.
 */

export default MenuButton;
