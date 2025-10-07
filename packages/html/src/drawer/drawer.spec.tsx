
import { classNames } from '../misc';
import { DrawerContainer } from './drawer-container.spec';

import { KendoComponent } from '../_types/component';
import { DRAWER_FOLDER_NAME, DRAWER_MODULE_NAME } from './constants';
export const DRAWER_CLASSNAME = `k-drawer`;

const states = [];

const options = { };

const defaultOptions = {
    mini: false,
    mode: "push",
    position: "start",
    expanded: false
} as const;

export type KendoDrawerProps = {
    items?: React.JSX.Element | React.JSX.Element[];
    expanded?: boolean;
    mini?: boolean;
    position?: "start" | "end";
    mode?: "overlay" | "push";
    width?: string;
};

export const Drawer: KendoComponent<KendoDrawerProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoDrawerProps &
    React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        expanded = defaultOptions.expanded,
        mini = defaultOptions.mini,
        position = defaultOptions.position,
        mode = defaultOptions.mode,
        items,
        width,
        ...other
    } = props;

    return (
        <DrawerContainer
            className={classNames(
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
        </DrawerContainer>
    );
};

Drawer.states = states;
Drawer.options = options;
Drawer.className = DRAWER_CLASSNAME;
Drawer.defaultOptions = defaultOptions;
Drawer.moduleName = DRAWER_MODULE_NAME;
Drawer.folderName = DRAWER_FOLDER_NAME;

export default Drawer;
