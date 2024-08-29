import { classNames } from '../misc';

export const TABSTRIPITEMS_CLASSNAME = `k-tabstrip-items`;

const states = [];

const options = {};

const defaultOptions = {
    tabAlignment: "start",
};

export type KendoTabStripItemsProps = {
    tabAlignment?: string;
};

export const TabStripItems = (
    props: KendoTabStripItemsProps &
        React.HTMLAttributes<HTMLUListElement>
) => {
    const {
        children,
        tabAlignment,
        ...other
    } = props;

    return (
        <ul
            {...other} className={classNames(
                props.className,
                TABSTRIPITEMS_CLASSNAME,
                "k-reset",
                `k-tabstrip-items-${tabAlignment}`
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
