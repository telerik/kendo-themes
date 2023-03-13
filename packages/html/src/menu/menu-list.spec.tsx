import { classNames, optionClassNames, Size } from '../utils-new';

export const MENULIST_CLASSNAME = `k-menu-group`;

const states = [];

const options = {
    size: [ Size.small, Size.medium, Size.large ]
};

export type KendoMenuListOptions = {
  size?: (typeof options.size)[number] | null;
};

const defaultProps = {
    size: Size.medium,
};

export const MenuList = (
    props: KendoMenuListOptions &
        React.HTMLAttributes<HTMLUListElement>
) => {
    const {
        size = defaultProps.size,
        ...other
    } = props;


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
            {props.children}
        </ul>
    );
};

MenuList.states = states;
MenuList.options = options;
MenuList.className = MENULIST_CLASSNAME;

export default MenuList;
