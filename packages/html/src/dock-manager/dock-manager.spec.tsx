import { classNames } from '../misc';
import { SplitterPane, SplitterSplitbar } from '../splitter';
import { DockManagerToolbar } from './dock-manager-toolbar';

import { KendoComponent } from '../_types/component';
import { DOCK_MANAGER_FOLDER_NAME, DOCK_MANAGER_MODULE_NAME } from './constants';
export const DOCKMANAGER_CLASSNAME = `k-dock-manager`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoDockManagerProps = {
    toolbarItems?: React.JSX.Element | React.JSX.Element[];
    unpinnedPane?: React.JSX.Element;
};

/**
 * @aria {role="application"} Indicates that the DockManager has its own keyboard navigation implemented.
 * @aria {aria-live="polite"} Defines dynamic content changes within the DockManager container.
 * @ux {Panels} Contains independent panels that can be docked to fixed positions or floated.
 * @ux {Drag and drop} Panels are repositioned by dragging their tab headers.
 * @ux {Tab groups} Multiple panels docked to the same position form a tabbed group.
 * @ux {Floating panels} Panels can be detached and float freely above the layout.
 * @ux {Resize} Panel sizes are adjusted by dragging the splitter between dock zones.
 */
export const DockManager: KendoComponent<KendoDockManagerProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoDockManagerProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        toolbarItems,
        unpinnedPane,
        children,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                DOCKMANAGER_CLASSNAME
            )}
            role="application"
            aria-live="polite">
            {toolbarItems &&
                <DockManagerToolbar className="k-toolbar-left" toolbarItems={toolbarItems} />
            }
            {unpinnedPane &&
                <div className="k-dock-manager-unpinned-container" style={{ left: "43px" }}>
                    <SplitterPane flex unpinned>
                        {unpinnedPane}
                    </SplitterPane>
                    <SplitterSplitbar />
                </div>
            }
            <div className="k-dock-manager-pane-container">
                {children}
            </div>
        </div>
    );
};

DockManager.states = states;
DockManager.options = options;
DockManager.className = DOCKMANAGER_CLASSNAME;
DockManager.defaultOptions = defaultOptions;
DockManager.moduleName = DOCK_MANAGER_MODULE_NAME;
DockManager.folderName = DOCK_MANAGER_FOLDER_NAME;

/**
 * @keyboard {Alt/Opt(Mac) + ArrowUp} Maximizes the active pane.
 * @keyboard {Alt/Opt(Mac) + ArrowDown} Minimizes the active pane.
 * @keyboard {Escape} Closes the active pane.
 * @keyboard {Alt/Opt(Mac) + ArrowLeft} Unpins the active pane.
 * @keyboard {Alt/Opt(Mac) + ArrowRight} Pins the active pane.
 * @keyboard {Control/Cmd(Mac) + ArrowRight} Focuses the next content pane.
 * @keyboard {Control/Cmd(Mac) + ArrowLeft} Focuses the previous content pane.
 * @keyboard {Control/Cmd(Mac) + Shift + ArrowUp} Docks the active pane to the global top.
 * @keyboard {Control/Cmd(Mac) + Shift + ArrowDown} Docks the active pane to the global bottom.
 * @keyboard {Control/Cmd(Mac) + Shift + ArrowLeft} Docks the active pane to the global left.
 * @keyboard {Control/Cmd(Mac) + Shift + ArrowRight} Docks the active pane to the global right.
 */

export default DockManager;
