
import { classNames } from '../misc';

export const DRAWER_CLASSNAME = `k-drawer`;

const states = [];

const options = { };

const defaultProps = {
    mini: false,
    mode: "push",
    position: "start",
    expanded: false
} as const;

export type KendoDrawerProps = {
    items?: JSX.Element | JSX.Element[];
    expanded?: boolean;
    mini?: boolean;
    position?: "start" | "end";
    mode?: "overlay" | "push";
    width?: string;
};

export const Drawer = (
    props: KendoDrawerProps &
    React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        items,
        expanded,
        mini,
        position,
        mode,
        width,
        ...other
    } = props;

    return (
        <div className={classNames(
            "k-drawer-container",
            {
                [`k-drawer-mini`]: mini && !expanded,
                [`k-drawer-${mode}`]: mode,
                [`k-drawer-expanded`]: expanded
            }
        )}>
            { mode === "overlay" &&
                <div className="k-overlay"></div>
            }
            <div {...other}
                className={classNames(
                    props.className,
                    DRAWER_CLASSNAME,
                    {
                        [`k-drawer-${position}`]: position
                    }
                )}>
                <div className="k-drawer-wrapper" style={{ width: width }}>
                    <ul className="k-drawer-items">
                        {items}
                    </ul>
                </div>
            </div>
            {props.children}
        </div>
    );
};

Drawer.states = states;
Drawer.options = options;
Drawer.className = DRAWER_CLASSNAME;
Drawer.defaultProps = defaultProps;

export default Drawer;
