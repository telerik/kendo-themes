import { classNames } from '../misc';

export const TABSTRIPITEMS_CLASSNAME = `k-tabstrip-items`;

const states = [];

const options = {};

const defaultOptions = {};

export const TabStripItems = (
    props: React.HTMLAttributes<HTMLUListElement>
) => {
    const {
        children,
        ...other
    } = props;

    return (
        <ul
            {...other} className={classNames(
                props.className,
                TABSTRIPITEMS_CLASSNAME,
                "k-reset"
            )}>
            {children}
        </ul>
    );
};

TabStripItems.states = states;
TabStripItems.options = options;
TabStripItems.className = TABSTRIPITEMS_CLASSNAME;
TabStripItems.defaultOptions = defaultOptions;

export default TabStripItems;
