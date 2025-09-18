import { classNames, optionClassNames, Size } from '../misc';
import { MenuListItem, MenuSeparator } from '.';

import { KendoComponent } from '../_types/component';
import { Menu } from './menu.spec';
export const MENULIST_CLASSNAME = `k-menu-group`;

const states = [];

const options = {
    size: [ Size.small, Size.medium, Size.large ]
};

export type KendoMenuListOptions = {
    children?: React.JSX.Element | React.JSX.Element[];
    size?: (typeof options.size)[number] | null;
    dir?: "rtl" | "ltr";
};

const defaultOptions = {
    size: Size.medium,
    dir: 'ltr'
};

export const MenuList: KendoComponent<KendoMenuListOptions & React.HTMLAttributes<HTMLUListElement>> = (
    props: KendoMenuListOptions &
        React.HTMLAttributes<HTMLUListElement>
) => {
    const {
        children,
        size = defaultOptions.size,
        dir = defaultOptions.dir,
        ...other
    } = props;

    const listChildren: React.JSX.Element[] = [];

    if (children) {
        if (Array.isArray(children)) {
            children.map((child, index) => {
                if (child.type === MenuListItem) {
                    listChildren.push(
                        <MenuListItem {...child.props} dir={dir} key={index} />
                    );
                } else if (child.type === MenuSeparator) {
                    listChildren.push(
                        <MenuSeparator />
                    );
                } else {
                    listChildren.push(child);
                }
            });
        }
    }

    return (
        <ul
            {...other}
            className={classNames(
                props.className,
                MENULIST_CLASSNAME,
                optionClassNames(MENULIST_CLASSNAME, {
                    size,
                })
            )}>
            {listChildren}
        </ul>
    );
};

MenuList.states = states;
MenuList.options = options;
MenuList.className = MENULIST_CLASSNAME;
MenuList.defaultOptions = defaultOptions;
MenuList.moduleName = Menu.moduleName;
MenuList.folderName = Menu.folderName;

export default MenuList;
