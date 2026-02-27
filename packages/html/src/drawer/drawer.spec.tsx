
import { classNames } from '../misc';
import { DrawerContainer } from './drawer-container.spec';

import { KendoComponent } from '../_types/component';
import { DRAWER_FOLDER_NAME, DRAWER_MODULE_NAME } from './constants';
import { Overlay } from '../overlay';
export const DRAWER_CLASSNAME = `k-drawer`;

const states = [];

const options = {
    position: ['start', 'end'],
    mode: ['overlay', 'push'],
};

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
                <Overlay />
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
                    <ul className="k-drawer-items" role="menubar" aria-orientation="vertical">
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

/**
 * Accessibility specification for Drawer.
 *
 * @accessibility
 * - Drawer list has role=menubar with aria-orientation=vertical
 * - Drawer items have role=menuitem
 * - Drawer separators have role=separator
 * - Mini mode items need aria-label for accessible name
 *
 * @wcag 4.1.2 Name, Role, Value - menubar pattern for navigation
 */
Drawer.ariaSpec = {
    selector: '.k-drawer',
    rules: [
        { selector: '.k-drawer ul', attribute: 'role=menubar', usage: 'Indicates that the list of drawer items is a menubar.' },
        { selector: '.k-drawer ul', attribute: 'aria-orientation=vertical', usage: 'Indicates that the orientation of the drawer is vertical.' },
        { selector: '.k-drawer-item:not(.k-drawer-separator)', attribute: 'role=menuitem', usage: 'Indicates that the item of a drawer serves as a menuitem.' },
        { selector: '.k-drawer-item.k-drawer-separator', attribute: 'role=separator', usage: 'Indicates that the item of a drawer serves as a separator.' },
    ]
};

export default Drawer;
