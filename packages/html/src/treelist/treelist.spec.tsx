import { classNames } from '../misc';
import { Grid, KendoGridProps } from '../grid';

import { KendoComponent } from '../_types/component';
import { TREELIST_FOLDER_NAME, TREELIST_MODULE_NAME } from './constants';
const TREELIST_CLASSNAME = 'k-treelist';

const states = [];

const options = {};

const defaultOptions = {};

/**
 * @aria {role="toolbar"} The toolbar is a collection of command buttons and inputs.
 * @aria {aria-label} Clarifies the purpose of the toolbar.
 * @aria {aria-controls=".k-grid-aria-root id"} Pointing to the id of the element with role=treegrid.
 * @aria {role="treegrid"} The role specifies the element is a TreeGrid.
 * @aria {aria-colcount} The total number of columns.
 * @aria {aria-rowcount} The total number of rows in the table.
 * @aria {role="none"} Negates the default semantic role of the <table> element.
 * @aria {role="rowgroup"} Required as the owner <table> element has its semantic role removed.
 * @aria {role="row"} Required as the owner <table> element has its semantic role removed.
 * @aria {aria-rowindex} Row number.
 * @aria {role="columnheader"} Required as the owner <table> element has its semantic role removed.
 * @aria {aria-sort} Present if sorting is enabled for that column.
 * @aria {aria-colindex} Col number.
 * @aria {aria-haspopup="dialog"} Present if the column has a ColumnMenu or FilterMenu.
 * @aria {role="gridcell"} Required as the owner <table> element has its semantic role removed.
 * @aria {aria-selected="true"} Set on the currently selected row(s) in row selection mode. All cells within the selected row also carry aria-selected=true (without k-selected class).
 * @aria {aria-selected="true"} Set on the currently selected cell(s) in cell selection mode. The k-selected class on cells is only applied in cell selection mode, but aria-selected=true is present on cells regardless of selection mode.
 * @aria {aria-expanded} Set on the currently expanded row(s).
 * @aria {aria-expanded} The cell containing the expand/collapse toggle also carries aria-expanded matching the row value, as it is the navigable focusable element.
 * @aria {aria-hidden="true"} Removes the expand/collapse icon from the accessibility tree.
 * @aria {role="dialog"} The filter menu popup has dialog role.
 * @aria {id} Unique id linked to the header cell aria-controls attribute.
 * @aria {aria-label} Descriptive label for the filter menu.
 * @aria {role="dialog"} The column menu popup has dialog role.
 * @aria {aria-label} Descriptive label for the column menu.
 * @aria {role="button"} Column menu items have button role.
 * @aria {tabindex="0"} Column menu items are focusable.
 * @aria {aria-expanded} Expandable column menu items announce their expanded state.
 * @aria {aria-controls} Expandable items point to the id of the content they control.
 * @aria {role="listbox"} The column list is a listbox.
 * @aria {aria-multiselectable="true"} The column list supports multiple selections.
 * @aria {aria-label} Accessible name for the column list.
 * @aria {role="option"} Column list items are options.
 * @aria {aria-checked} Column list items announce their checked state.
 * @aria {aria-owns} Locked header rows own cells from the corresponding non-locked header table rows.
 * @aria {aria-owns} Locked content rows own cells from the corresponding non-locked content table rows.
 * @aria {role="none"} Non-locked header rows have their semantic role removed when locked columns exist.
 * @aria {role="none"} Non-locked content rows have their semantic role removed when locked columns exist.
 * @aria {role="columnheader"} Non-locked header cells retain columnheader role so they are announced correctly when owned via aria-owns.
 * @aria {role="gridcell"} Non-locked data cells retain gridcell role so they are announced correctly when owned via aria-owns.
 * @aria {aria-label} Must be present in a Drag Row scenario on the cell containing the drag handle.
 * @ux {Expandable rows} Rows can have child rows revealed by expanding the parent.
 * @ux {Sorting} Column headers are clicked to sort data ascending or descending.
 * @ux {Filtering} Column filter inputs narrow the displayed rows.
 * @ux {Row selection} Rows are selected by clicking.
 */
export const TreeList: KendoComponent<KendoGridProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoGridProps &
        React.HTMLAttributes<HTMLDivElement>
) => (
    <Grid
        {...props}
        ariaRole="treegrid"
        className={classNames(
            TREELIST_CLASSNAME,
            props.className
        )}
    >
        {props.children}
    </Grid>
);

TreeList.states = states;
TreeList.options = options;
TreeList.className = TREELIST_CLASSNAME;
TreeList.defaultOptions = defaultOptions;
TreeList.moduleName = TREELIST_MODULE_NAME;
TreeList.folderName = TREELIST_FOLDER_NAME;

/**
 * @keyboard {Enter} In expandable and non-editable cell - expands or collapses the item.
 *
 * @see https://www.w3.org/TR/wai-aria-1.2/#treegrid WAI-ARIA specification for tree grid
 */

export default TreeList;
