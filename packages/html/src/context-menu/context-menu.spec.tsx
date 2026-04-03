import { KendoMenuListOptions, MenuList } from '../menu';
import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { CONTEXT_MENU_FOLDER_NAME, CONTEXT_MENU_MODULE_NAME } from './constants';
export const CONTEXTMENU_CLASSNAME = `k-context-menu`;

const states = [];

const options = {};

const defaultOptions = {};

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
 * @ariaSpec
 * ContextMenu implements the WAI-ARIA menu pattern.
 *
 * - Uses role="menu" on the root element
 * - Items use role="menuitem" (inherited from MenuListItem)
 */
ContextMenu.ariaSpec = {
    selector: '.k-context-menu',
    rules: [
        { selector: '.k-context-menu', attribute: 'role=menu', usage: 'The context menu implements the menu role.' },
        { selector: '.k-menu-item', attribute: 'role=menuitem', usage: 'Announces the Menu item role.' },
        { selector: '.k-menu-item', attribute: 'aria-haspopup=menu (when present)', usage: 'Indicates a popup menu is associated with the item.' },
        { selector: '.k-menu-item', attribute: 'aria-expanded=true/false (when present)', usage: 'Indicates whether the submenu is expanded.' },
        { selector: '.k-menu-item.k-disabled', attribute: 'aria-disabled=true', usage: 'Informs assistive technologies that a Menu item is disabled.' },
        { selector: '.k-menu-expand-arrow', attribute: 'aria-hidden=true', usage: 'Expand arrow elements are hidden from assistive technologies.' },
        { selector: '.k-menu-item.k-focus', attribute: 'tabindex=0', usage: 'The focused item has tabindex 0.' },
        { selector: '.k-menu-item', attribute: 'aria-controls=ul.k-menu-group id (when present)', usage: 'Points to the ID of the submenu.' },
        { selector: '.k-menu-popup .k-menu-group', attribute: 'id', usage: 'Each nested menu has an id linked to parent aria-controls.' },
    ]
};

export default ContextMenu;
