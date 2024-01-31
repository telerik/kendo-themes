import { classNames } from '../misc';

export const TABSTRIP_CLASSNAME = `k-tabstrip`;

const states = [];

const options = {};

export type KendoTabStripProps = {
    position?: "top" | "bottom" | "left" | "right";
    scrollable?: boolean;
    header?: boolean | null;
};

const defaultProps = {
    position: "top",
    header: true
};

export const TabStrip = (
    props: KendoTabStripProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        scrollable,
        children,
        position = defaultProps.position,
        header,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                TABSTRIP_CLASSNAME,
                props.className,
                {
                    [`${TABSTRIP_CLASSNAME}-${position}`]: position,
                    [`${TABSTRIP_CLASSNAME}-scrollable`]: scrollable,
                    ["k-header"]: header,
                },
            )}>
            {children}
        </div>
    );
};

TabStrip.states = states;
TabStrip.options = options;
TabStrip.className = TABSTRIP_CLASSNAME;
TabStrip.defaultProps = defaultProps;

export default TabStrip;
