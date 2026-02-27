import { classNames } from '../misc';

export const TABSTRIPITEMS_CLASSNAME = `k-tabstrip-items`;

const states = [];

const options = {};

const defaultOptions = {
    tabAlignment: "start",
};

export type KendoTabStripItemsProps = {
    tabAlignment?: string;
    /** @aria When vertical, sets aria-orientation on the tablist */
    orientation?: 'horizontal' | 'vertical';
};

export const TabStripItems = (
    props: KendoTabStripItemsProps &
        React.HTMLAttributes<HTMLUListElement>
) => {
    const {
        children,
        tabAlignment,
        orientation,
        ...other
    } = props;

    return (
        <ul
            {...other} className={classNames(
                props.className,
                TABSTRIPITEMS_CLASSNAME,
                "k-reset",
                `k-tabstrip-items-${tabAlignment}`
            )}
            role="tablist"
            {...(orientation === 'vertical' && { 'aria-orientation': 'vertical' as React.AriaAttributes['aria-orientation'] })}
        >
            {children}
        </ul>
    );
};

TabStripItems.states = states;
TabStripItems.options = options;
TabStripItems.className = TABSTRIPITEMS_CLASSNAME;
TabStripItems.defaultOptions = defaultOptions;

export default TabStripItems;
