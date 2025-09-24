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

export default ContextMenu;
