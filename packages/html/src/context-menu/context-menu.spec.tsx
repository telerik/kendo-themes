import { KendoMenuListOptions, MenuList } from '../menu';
import { classNames } from '../misc';

export const CONTEXTMENU_CLASSNAME = `k-context-menu`;

const states = [];

const options = {};

const defaultOptions = {};

export const ContextMenu = (
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

export default ContextMenu;
