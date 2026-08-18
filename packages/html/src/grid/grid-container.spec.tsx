import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { GRID_FOLDER_NAME, GRID_MODULE_NAME } from './constants';
const className = `k-grid-container`;

/**
 * @aria {aria-selected="true"} Set on the currently selected row(s) in row selection mode. All cells within the selected row also carry aria-selected=true (without k-selected class). Applies to both regular and pinned rows.
 * @aria {aria-selected="true"} Set on the currently selected cell(s) in cell selection mode. The k-selected class on cells is only applied in cell selection mode, but aria-selected=true is present on cells regardless of selection mode.
 * @aria {aria-expanded} For cells holding grouping criteria values and for Master row cells in Detail template scenario.
 * @aria {role="presentation"} Group offset cells (header and content) are non-interactive placeholders with no semantic role.
 * @aria {aria-label} Must be present in a Drag Row scenario on the cell containing the drag handle.
 * @aria {role="rowgroup"} Required as the owner <table> element has its semantic role removed.
 * @aria {role="row"} Required as the owner <table> element has its semantic role removed.
 * @aria {aria-rowindex} Row number. Needed for Paging, Virtual rows, or Master/Detail rows scenarios.
 * @aria {role="gridcell"} Required as the owner <table> element has its semantic role removed.
 * @aria {aria-colindex} Col number. Needed for Virtual columns and Hidden columns scenarios.
 * @aria {aria-hidden="true"} Pin/unpin icon inside the dedicated column is decorative and must be hidden from assistive technologies.
 */
export const GridContainer: KendoComponent<React.HTMLAttributes<HTMLDivElement>> = (
    props: React.HTMLAttributes<HTMLDivElement>
) => (
    <div
        {...props}
        className={classNames(
            props.className,
            className,
        )}>
        {props.children}
    </div>
);

GridContainer.className = className;
GridContainer.moduleName = GRID_MODULE_NAME;
GridContainer.folderName = GRID_FOLDER_NAME;
