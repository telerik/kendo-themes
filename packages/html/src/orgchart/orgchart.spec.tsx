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
 * @ariaSpec
 * OrgChart represents a tree structure with nodes that can be expanded/collapsed.
 *
 * - Root group (level-1): role="tree", aria-orientation="horizontal"
 * - Child groups: role="group"
 * - Node groups: role="group"
 * - Nodes: role="treeitem", aria-level, aria-keyshortcuts="Enter"
 * - Expanded nodes: aria-expanded, aria-owns
 * - Focused node: aria-selected="true"
 * - Avatar images: alt attribute
 * - Card menu: role="button", aria-label, tabindex=-1
 * - Expand/collapse button: role="presentation", aria-hidden, tabindex=-1
 */
Orgchart.ariaSpec = {
    selector: '.k-orgchart',
    rules: [
        // Root tree
        { selector: '.k-orgchart-level-1', attribute: 'role=tree', usage: 'The root div element of the OrgChart. Contains all its top level items.' },
        { selector: '.k-orgchart-level-1', attribute: 'aria-orientation=horizontal', usage: 'Specifies the orientation of the OrgChart tree.' },

        // Child groups
        { selector: '.k-orgchart-group:not(.k-orgchart-level-1)', attribute: 'role=group', usage: 'The element that wraps child nodes.' },

        // Node groups
        { selector: '.k-orgchart-node-group', attribute: 'role=group', usage: 'The element that groups nodes visually with a title and expand/collapse button.' },

        // Node containers
        { selector: '.k-orgchart-node-container', attribute: 'role=presentation', usage: 'The node container must not break the tree-treeitem relationship.' },

        // Nodes
        { selector: '.k-orgchart-node', attribute: 'role=treeitem', usage: 'The node wrapper representing the treeitem in the hierarchical structure.' },
        { selector: '.k-orgchart-node', attribute: 'aria-level', usage: 'Announces the level of the tree node item. The value of level is number-based (>=1).' },
        { selector: '.k-orgchart-node', attribute: 'aria-keyshortcuts=Enter', usage: 'Announces that the edit menu of the OrgChart can be activated via the Enter key.' },

        // Expanded nodes
        { selector: '.k-orgchart-node', attribute: 'aria-expanded=true or aria-expanded=false (when present)', usage: 'Present when a node has subitems. Announces the expanded state of the node.' },
        { selector: '.k-orgchart-node', attribute: 'aria-owns (when present)', usage: 'Present when a node has subitems. The value is the id of the group containing child nodes.' },

        // Selected/focused nodes
        { selector: '.k-orgchart-node.k-focus', attribute: 'aria-selected=true', usage: 'Announces the selected (focused) item in the OrgChart.' },
        { selector: '.k-orgchart-node:not(.k-focus)', attribute: 'aria-selected=false', usage: 'Announces the not selected (focused) items in the OrgChart.' },

        // Avatar images
        { selector: '.k-avatar-image img', attribute: 'alt', usage: 'Describes the avatar image of an item.' },

        // Card menu
        { selector: '.k-orgchart-card-menu', attribute: 'role=button', usage: 'Specifies the menu icon of the item is a button.' },
        { selector: '.k-orgchart-card-menu', attribute: 'aria-label=Edit menu', usage: 'Provides an accessible name for the edit button.' },
        { selector: '.k-orgchart-card-menu', attribute: 'tabindex=-1', usage: 'The Edit menu button must not be part of the page tab sequence.' },

        // Expand/collapse button
        { selector: '.k-orgchart-button', attribute: 'role=presentation', usage: 'The expand/collapse button is decorative.' },
        { selector: '.k-orgchart-button', attribute: 'aria-hidden=true', usage: 'Hides the button from assistive technology.' },
        { selector: '.k-orgchart-button', attribute: 'tabindex=-1', usage: 'The expand/collapse button must not be part of the page tab sequence.' },
    ]
};

export default Orgchart;
