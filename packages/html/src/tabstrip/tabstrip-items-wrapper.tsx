import { classNames } from '../misc';

export const TABSTRIPITEMSWRAPPER_CLASSNAME = `k-tabstrip-items-wrapper`;

const states = [];

const options = {};

export type KendoTabStripItemsWrapperProps = {
    orientation?: "horizontal" | "vertical";
};
const defaultProps = {
    orientation: "horizontal"
};

export const TabStripItemsWrapper = (
    props: KendoTabStripItemsWrapperProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        children,
        orientation,
        ...other
    } = props;

    return (
        <div
            {...other} className={classNames(
                props.className,
                TABSTRIPITEMSWRAPPER_CLASSNAME,
                {
                    [`k-hstack`]: orientation === "horizontal",
                    [`k-vstack`]: orientation === "vertical",
                }
            )}>
            {children}
        </div>
    );
};

TabStripItemsWrapper.states = states;
TabStripItemsWrapper.options = options;
TabStripItemsWrapper.className = TABSTRIPITEMSWRAPPER_CLASSNAME;
TabStripItemsWrapper.defaultProps = defaultProps;

export default TabStripItemsWrapper;
