import { classNames } from '../misc';

export const TABSTRIPITEMS_CLASSNAME = `k-tabstrip-items`;

const states = [];

const options = {};

const defaultOptions = {
    tabAlignment: "start",
};

export type KendoTabStripItemsProps = {
    tabAlignment?: string;
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

    const ariaOrientation = orientation === 'vertical' ? 'vertical' : undefined;

    return (
        <ul
            {...other} className={classNames(
                props.className,
                TABSTRIPITEMS_CLASSNAME,
                "k-reset",
                `k-tabstrip-items-${tabAlignment}`
            )}
            role="tablist"
            aria-orientation={ariaOrientation}>
            {children}
        </ul>
    );
};

TabStripItems.states = states;
TabStripItems.options = options;
TabStripItems.className = TABSTRIPITEMS_CLASSNAME;
TabStripItems.defaultOptions = defaultOptions;

export default TabStripItems;
