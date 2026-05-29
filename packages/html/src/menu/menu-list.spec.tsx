import { classNames, optionClassNames, Size } from '../misc';

import { KendoComponent } from '../_types/component';
import { MENU_FOLDER_NAME, MENU_MODULE_NAME } from './constants';
export const MENULIST_CLASSNAME = `k-menu-group`;

const states = [];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ]
};

export type KendoMenuListOptions = {
    children?: React.JSX.Element | React.JSX.Element[];
    size?: (typeof options.size)[number] | null;
};

const defaultOptions = {};

export const MenuList: KendoComponent<KendoMenuListOptions & React.HTMLAttributes<HTMLUListElement>> = (
    props: KendoMenuListOptions &
        React.HTMLAttributes<HTMLUListElement>
) => {
    const {
        children,
        size,
        ...other
    } = props;

    return (
        <ul
            role="menu"
            {...other}
            className={classNames(
                props.className,
                MENULIST_CLASSNAME,
                optionClassNames(MENULIST_CLASSNAME, {
                    size,
                })
            )}
        >
            {children}
        </ul>
    );
};

MenuList.states = states;
MenuList.options = options;
MenuList.className = MENULIST_CLASSNAME;
MenuList.defaultOptions = defaultOptions;
MenuList.moduleName = MENU_MODULE_NAME;
MenuList.folderName = MENU_FOLDER_NAME;

export default MenuList;
