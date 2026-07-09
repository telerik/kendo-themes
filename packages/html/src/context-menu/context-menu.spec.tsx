import { KendoMenuListOptions, MenuList } from '../menu';
import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { CONTEXT_MENU_FOLDER_NAME, CONTEXT_MENU_MODULE_NAME } from './constants';
export const CONTEXTMENU_CLASSNAME = `k-context-menu`;

const states = [];

const options = {};

const defaultOptions = {};

/**
 * @aria {role="menu"} The context menu implements the menu role.
 * @aria {role="menuitem"} Announces the Menu item role.
 * @aria {aria-haspopup="menu"} Indicates a popup menu is associated with the item.
 * @aria {aria-expanded="true"|\"false"} Indicates whether the submenu is expanded.
 * @aria {aria-disabled="true"} Informs assistive technologies that a Menu item is disabled.
 * @aria {aria-hidden="true"} Expand arrow elements are hidden from assistive technologies.
 * @aria {tabindex="0"} The focused item has tabindex 0.
 * @aria {aria-controls="ul.k-menu-group id"} Points to the ID of the submenu.
 * @aria {id} Each nested menu has an id linked to parent aria-controls.
 */
export const ContextMenu: KendoComponent<KendoMenuListOptions & React.HTMLAttributes<HTMLUListElement>> = (
    props: KendoMenuListOptions &
        React.HTMLAttributes<HTMLUListElement>
) => {
    const {
        children,
        ...other
    } = props;

    return (
        <MenuList
            {...other}
            className={classNames(
                props.className,
                CONTEXTMENU_CLASSNAME,
            )}
            role="menu"
        >
            {children}
        </MenuList>
    );
};

ContextMenu.states = states;
ContextMenu.options = options;
ContextMenu.className = CONTEXTMENU_CLASSNAME;
ContextMenu.defaultOptions = defaultOptions;
ContextMenu.moduleName = CONTEXT_MENU_MODULE_NAME;
ContextMenu.folderName = CONTEXT_MENU_FOLDER_NAME;

/**
 * @keyboard {Shift + F10} When applied to a target, the command opens the ContextMenu.
 * @keyboard {ArrowUp} Focuses the previous item.
 * @keyboard {ArrowDown} Focuses the next item.
 * @keyboard {ArrowLeft} (For root items) opens the item and focuses the last child.; (For child items) closes and focuses the parent.
 * @keyboard {ArrowRight} If the item has children, opens the item and focuses the first child. For child items without children, focuses and opens the next root item.
 * @keyboard {Escape} Closes the ContextMenu and returns the focus to the target.
 * @keyboard {Home} Focuses the first item.
 * @keyboard {End} Focuses the last item.
 * @keyboard {Enter} Selects the focused item. If the item has children, opens the item and focuses the first child. If the item does not have children and has a URL, navigates to the specified URL.
 * @keyboard {Space} Selects the focused item. If the item has children, opens the item and focuses the first child. If the item does not have children and has a URL, navigates to the specified URL.
 * @keyboard {Alphanumeric character} Focuses the next item with text starting with the character.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/menu/ ARIA patterns Menu
 */

export default ContextMenu;
