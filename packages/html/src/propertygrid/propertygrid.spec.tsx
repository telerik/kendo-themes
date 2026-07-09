import { classNames } from '../misc';
import { KendoGridProps } from '../grid';
import { TreeList } from '../treelist';

import { KendoComponent } from '../_types/component';
import { PROPERTYGRID_FOLDER_NAME, PROPERTYGRID_MODULE_NAME } from './constants';
const PROPERTYGRID_CLASSNAME = 'k-property-grid';

const states = [];

const options = {};

const defaultOptions = {};

/**
 * @aria {role="toolbar"} The toolbar is a collection of command buttons and inputs.
 * @aria {aria-label} Clarifies the purpose of the toolbar.
 * @aria {aria-controls=".k-grid-aria-root id"} Points to the id of the element with role=treegrid.
 * @aria {role="treegrid"} Sets the proper role for the PropertyGrid component.
 * @aria {aria-colcount} The total number of columns.
 * @aria {aria-rowcount} The total number of rows in the table.
 * @aria {role="none"} Negates the default semantic role of the <table> element.
 * @aria {role="rowgroup"} Required as the owner <table> element has its semantic role removed.
 * @aria {role="row"} Required as the owner <table> element has its semantic role removed.
 * @aria {aria-rowindex} Row number.
 * @aria {role="gridcell"} Required as the owner <table> element has its semantic role removed.
 * @aria {aria-colindex} Col number.
 * @aria {aria-expanded} Set on the currently expanded row(s).
 * @aria {aria-hidden="true"} Removes the expand/collapse icon from the accessibility tree.
 */
export const PropertyGrid: KendoComponent<KendoGridProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoGridProps &
        React.HTMLAttributes<HTMLDivElement>
) => (
    <TreeList
        {...props}
        className={classNames(
            PROPERTYGRID_CLASSNAME,
            props.className
        )}
    >
        {props.children}
    </TreeList>
);

PropertyGrid.states = states;
PropertyGrid.options = options;
PropertyGrid.className = PROPERTYGRID_CLASSNAME;
PropertyGrid.defaultOptions = defaultOptions;
PropertyGrid.moduleName = PROPERTYGRID_MODULE_NAME;
PropertyGrid.folderName = PROPERTYGRID_FOLDER_NAME;

/**
 * @keyboard {ArrowRight} Moves focus one cell to the right (if any).
 * @keyboard {ArrowLeft} Moves focus one cell to the left (if any).
 * @keyboard {ArrowDown} Moves focus one cell down (if any).
 * @keyboard {ArrowUp} Moves focus one cell up (if any).
 * @keyboard {Enter} When the grid is in InCell EditMode, then EditMode is activated. If the cell contains focusable elements, focus moves to the first focusable element inside.
 * @keyboard {Home} Moves focus to the first cell in the row that contains focus.
 * @keyboard {End} Moves focus to the last cell in the row that contains focus.
 * @keyboard {Control/Cmd(Mac) + Home} Moves focus to the first (top-left) data cell in the PropertyGrid.
 * @keyboard {Control/Cmd(Mac) + End} Moves focus to the last cell in the last row of the PropertyGrid.
 * @keyboard {Alt/Opt(Mac) + ArrowLeft} Collapses the currently focused item.
 * @keyboard {Alt/Opt(Mac) + ArrowRight} Expands the currently focused item.
 * @keyboard {Tab} Moves to the next editor in the row (closing current editor). If focus is already on the last editable cell on the row, focus is moved to the first editable cell on the next row, and it's editor is opened.
 * @keyboard {Shift + Tab} Moves to the previous editor in the row (closing current editor). If focus is already on the first editable cell on the row, focus is moved to the last editable cell on the previous row, and it's editor is opened.
 * @keyboard {Enter} Commits changes for the edited item, and moves focus back to the edited cell.
 * @keyboard {Escape} Cancels the edit. The focus goes to the current cell.
 *
 * @see https://www.w3.org/TR/wai-aria-1.2/#treegrid WAI-ARIA specification for tree grid
 */

export default PropertyGrid;
