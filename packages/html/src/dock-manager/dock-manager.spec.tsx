import { SplitterPane, SplitterSplitbar } from '..';
import { classNames } from '../misc';
import { DockManagerToolbar } from './dock-manager-toolbar';

export const DOCKMANAGER_CLASSNAME = `k-dock-manager`;

const states = [];

const options = {};

const defaultProps = {};

export type KendoDockManagerProps = {
    toolbarItems?: JSX.Element | JSX.Element[];
    unpinnedPane?: JSX.Element;
};

export const DockManager = (
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
DockManager.defaultProps = defaultProps;

export default DockManager;
