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

/**
 * @aria {aria-orientation="vertical"} Set on the tablist when the tabstrip is vertical.
 */
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
TabStripItems.moduleName = null;
TabStripItems.folderName = null;
TabStripItems.defaultOptions = defaultOptions;

export default TabStripItems;
