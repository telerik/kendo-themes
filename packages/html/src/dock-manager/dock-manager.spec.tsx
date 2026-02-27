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
 * Accessibility specification for DockManager.
 *
 * @accessibility
 * - DockManager has role=application with aria-live=polite
 * - DockNavigator is aria-hidden=true (only appears on drag)
 * - Inner components (Toolbar, TabStrip, Splitter, Window) follow their own ARIA specs
 *
 * @wcag 4.1.2 Name, Role, Value - application pattern with custom keyboard navigation
 */
DockManager.ariaSpec = {
    selector: '.k-dock-manager',
    rules: [
        { selector: '.k-dock-manager', attribute: 'role=application', usage: 'Indicates that the DockManager has its own keyboard navigation implemented.' },
        { selector: '.k-dock-manager', attribute: 'aria-live=polite', usage: 'Defines dynamic content changes within the DockManager container.' },
    ]
};

export default DockManager;
