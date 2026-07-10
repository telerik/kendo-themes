import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { ORGCHART_FOLDER_NAME, ORGCHART_MODULE_NAME } from './constants';
export const ORGCHART_CLASSNAME = `k-orgchart`;

const states = [];

const options = {};

export type KendoOrgchartProps = {
    width?: string;
    height?: string;
};

const defaultOptions = {
    width: '100%',
    height: '300px',
};

/**
 * @aria {role="tree"} The root div element of the OrgChart. Contains all its top level items.
 * @aria {aria-orientation="horizontal"} Specifies the orientation of the OrgChart tree.
 * @aria {role="group"} The element that groups nodes visually with a title and expand/collapse button.
 * @aria {role="presentation"} The node container must not break the tree-treeitem relationship.
 * @aria {role="treeitem"} The node wrapper representing the treeitem in the hierarchical structure.
 * @aria {aria-level} Announces the level of the tree node item. The value of level is number-based (>=1).
 * @aria {aria-keyshortcuts="Enter"} Announces that the edit menu of the OrgChart can be activated via the Enter key.
 * @aria {aria-expanded="true"|\"false"} Present when a node has subitems. Announces the expanded state of the node.
 * @aria {aria-owns} Present when a node has subitems. The value is the id of the group containing child nodes.
 * @aria {aria-selected="true"} Announces the selected (focused) item in the OrgChart.
 * @aria {aria-selected="false"} Announces the not selected (focused) items in the OrgChart.
 * @aria {role="button"} Specifies the menu icon of the item is a button.
 * @aria {aria-label="Edit menu"} Provides an accessible name for the edit button.
 * @aria {tabindex="-1"} The Edit menu button must not be part of the page tab sequence.
 * @aria {role="presentation"} The expand/collapse button is decorative.
 * @aria {aria-hidden="true"} Hides the button from assistive technology.
 * @aria {tabindex="-1"} The expand/collapse button must not be part of the page tab sequence.
 * @ux {Node hierarchy} Renders organizational nodes in a top-down tree layout.
 * @ux {Expand / Collapse} Branch nodes can be collapsed to hide their subtree.
 * @ux {Edit mode} Nodes can be added, edited, and removed.
 * @ux {Zoom and pan} The chart canvas supports zooming and panning.
 */
export const Orgchart: KendoComponent<KendoOrgchartProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoOrgchartProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        width = defaultOptions.width,
        height = defaultOptions.height,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                ORGCHART_CLASSNAME,
            )}>

            <div className="k-orgchart-container" style={{ width: width, height: height }}>
                {props.children}
            </div>
        </div>
    );
};

Orgchart.states = states;
Orgchart.options = options;
Orgchart.className = ORGCHART_CLASSNAME;
Orgchart.defaultOptions = defaultOptions;
Orgchart.moduleName = ORGCHART_MODULE_NAME;
Orgchart.folderName = ORGCHART_FOLDER_NAME;

/**
 * @see https://www.w3.org/WAI/ARIA/apg/example-index/treeview/treeview-1/treeview-1a.html ARIA practices File Directory Treeview Example
 */

export default Orgchart;
