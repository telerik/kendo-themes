import { classNames, optionClassNames, Size } from '../misc';

import { KendoComponent } from '../_types/component';
import { COLUMN_MENU_FOLDER_NAME, COLUMN_MENU_MODULE_NAME } from './constants';
export const COLUMNMENU_CLASSNAME = `k-column-menu`;

const states = [];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ]
};

export type KendoColumnMenuOptions = {
    size?: (typeof options.size)[number] | null;
}

export type KendoColumnMenuProps = KendoColumnMenuOptions & {
    view?: 'list' | 'tabbed';
};

const defaultOptions = {
    view: 'list'
};

export const ColumnMenu: KendoComponent<KendoColumnMenuProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoColumnMenuProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        view = defaultOptions.view,
        size,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                COLUMNMENU_CLASSNAME,
                optionClassNames(COLUMNMENU_CLASSNAME, {
                    size,
                }),
                {
                    'k-column-menu-tabbed': view === 'tabbed'
                },
            )}>
            { props.children }
        </div>
    );
};

ColumnMenu.states = states;
ColumnMenu.options = options;
ColumnMenu.className = COLUMNMENU_CLASSNAME;
ColumnMenu.defaultOptions = defaultOptions;
ColumnMenu.moduleName = COLUMN_MENU_MODULE_NAME;
ColumnMenu.folderName = COLUMN_MENU_FOLDER_NAME;

/**
 * @keyboard {Tab} Navigates to the next focusable element in the Popup. If current focus is on the last element, moves focus to the first focusable item in the Popup.
 * @keyboard {Shift + Tab} Navigates to the previous focusable element in the Popup. If current focus is on the first element, moves focus to the last focusable item in the Popup.
 * @keyboard {Enter} For column menu items, executes the currently focused item action. If item is expandable, expands or collapses the item.
 * @keyboard {Escape} When focus is inside a focusable element in the item content, returns focus to the parent menu item. When focus is on a menu item, closes the ColumnMenu Popup and returns focus to the element from which the menu was opened.
 * @keyboard {ArrowDown or ArrowUp} Moves the focus to the next/previous item when focus is in the ColumnChooser list of options.
 * @keyboard {Space} Toggles the checked state of the focused ColumnChooser option.
 * @keyboard {Escape} When focus is inside a sub-view, returns to the main view and focuses the item that opened the sub-view. When focus is on the main view, closes the ActionSheet and returns focus to the element from which the menu was opened.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role MDN reference for the dialog role
 */

export default ColumnMenu;
