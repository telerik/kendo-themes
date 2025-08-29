import { classNames } from '../misc';
import { SplitterPane, SplitterSplitbar } from '../splitter';
import { DockManagerToolbar } from './dock-manager-toolbar';

import { KendoComponent } from '../_types/component';
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
            )}>
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

export default DockManager;
