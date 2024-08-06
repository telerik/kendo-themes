import { classNames, optionClassNames, Size } from '../misc';
import { MenuListItem, MenuSeparator } from '.';

export const MENULIST_CLASSNAME = `k-menu-group`;

const states = [];

const options = {
    size: [ Size.small, Size.medium, Size.large ]
};

export type KendoMenuListOptions = {
    children?: React.JSX.Element | React.JSX.Element[];
    size?: (typeof options.size)[number] | null;
    dir?: string;
};

export const MenuList = (
    props: KendoMenuListOptions &
        React.HTMLAttributes<HTMLUListElement>
) => {
    const {
        size = Size.medium,
        children,
        dir,
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

export default MenuList;
