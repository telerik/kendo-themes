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

ColumnMenu.ariaSpec = {
    selector: '.k-column-menu',
    rules: [
        { selector: '.k-columnmenu-item', attribute: 'role=button', usage: 'Sets column menu item role to button.' },
        { selector: '.k-columnmenu-item', attribute: 'tabindex=0', usage: 'Sets column menu item tabindex.' },
        { selector: '.k-expander .k-columnmenu-item', attribute: 'aria-expanded=true/false', usage: 'Sets the expanded state of an expandable item.' },
        { selector: '.k-expander .k-columnmenu-item', attribute: 'aria-controls', usage: 'Points to id attribute of the content whose visibility the expandable item controls.' },
        { selector: '.k-expander .k-columnmenu-item-content', attribute: 'id', usage: 'Unique and deterministic id linked to the aria-controls attribute of the corresponding expandable item.' },
        { selector: '.k-column-list', attribute: 'role=listbox', usage: 'Sets the listbox role of the list of columns wrapper.' },
        { selector: '.k-column-list', attribute: 'aria-multiselectable=true', usage: 'Specifies that the list is multiselectable.' },
        { selector: '.k-column-list', attribute: 'aria-label', usage: 'Accessible name for the column list.' },
        { selector: '.k-column-list .k-column-list-item', attribute: 'role=option', usage: 'Sets the option role of the list item.' },
        { selector: '.k-column-list .k-column-list-item', attribute: 'aria-checked=true/false', usage: 'Sets the checked state of list item.' },
    ]
};

export default ColumnMenu;
