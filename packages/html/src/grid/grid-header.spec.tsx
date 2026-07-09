import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { GRID_FOLDER_NAME, GRID_MODULE_NAME } from './constants';
const className = `k-grid-header`;

export type KendoGridHeaderProps = {
    draggable?: boolean;
};

/**
 * @aria {role="none"} Negates the default semantic role of the <table> element.
 * @aria {role="rowgroup"} Required as the owner <table> element has its semantic role removed.
 * @aria {role="row"} Required as the owner <table> element has its semantic role removed.
 * @aria {aria-rowindex} Row number. Needed for Paging, Virtual rows, or Master/Detail rows scenarios.
 * @aria {role="columnheader"} Required as the owner <table> element has its semantic role removed.
 * @aria {aria-sort} Present if sorting is enabled for that column.
 * @aria {aria-colindex} Col number. Needed for Virtual columns and Hidden columns scenarios.
 * @aria {aria-haspopup="dialog"} Present if the column has a ColumnMenu or FilterMenu.
 * @aria {role="gridcell"} Required as the owner <table> element has its semantic role removed.
 * @aria {aria-label} Has a label indicating that the cell is part of a filter row.
 * @aria {aria-owns} Locked header rows own cells from the corresponding non-locked header table rows.
 * @aria {role="none"} Non-locked header rows have their semantic role removed when locked columns exist.
 * @aria {role="columnheader"} Non-locked header cells retain columnheader role so they are announced correctly when owned via aria-owns.
 */
export const GridHeader: KendoComponent<KendoGridHeaderProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoGridHeaderProps &
    React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        draggable,
        ...other
    } = props;

    return (

        <div
            {...other}
            className={classNames(
                props.className,
                className,
                {[`k-grid-draggable-header`]: draggable},
            )}
        >

            {props.children}

        </div>
    );
};

GridHeader.className = className;
GridHeader.moduleName = GRID_MODULE_NAME;
GridHeader.folderName = GRID_FOLDER_NAME;

