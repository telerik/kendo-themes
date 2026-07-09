import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { GRID_FOLDER_NAME, GRID_MODULE_NAME } from './constants';

export const GRID_PINNED_CONTAINER_CLASSNAME = `k-grid-pinned-container`;

export type GridPinnedContainerProps = React.HTMLAttributes<HTMLDivElement> & {
    position?: 'top' | 'bottom';
};

/**
 * @aria {role="none"} Negates the default semantic role of the <table> element.
 * @aria {role="rowgroup"} Required as the owner <table> element has its semantic role removed.
 * @aria {role="row"} Required as the owner <table> element has its semantic role removed.
 * @aria {aria-rowindex} Row number. Needed for Paging, Virtual rows, or Master/Detail rows scenarios.
 * @aria {role="gridcell"} Required as the owner <table> element has its semantic role removed.
 * @aria {aria-colindex} Col number. Needed for Virtual columns and Hidden columns scenarios.
 * @aria {role="none"} Container for pinned rows has no semantic role.
 * @aria {role="none"} Inner wrapper for the pinned rows table has no semantic role.
 * @aria {aria-label} Describes the purpose of the pinned rows group, e.g. "Top pinned rows" or "Bottom pinned rows".
 * @aria {aria-haspopup="menu"} Pinned row cells announce the context menu for row pinning operations.
 * @aria {aria-controls} Points to the ID of the context menu popup for row pinning.
 * @aria {aria-expanded} Indicates whether the context menu popup is open.
 */
export const GridPinnedContainer: KendoComponent<GridPinnedContainerProps> = (
    props: GridPinnedContainerProps
) => {
    const {
        position,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                GRID_PINNED_CONTAINER_CLASSNAME,
                {
                    'k-pos-bottom': position === 'bottom',
                }
            )}
        >
        {props.children}
        </div>
    );
};

GridPinnedContainer.className = GRID_PINNED_CONTAINER_CLASSNAME;
GridPinnedContainer.moduleName = GRID_MODULE_NAME;
GridPinnedContainer.folderName = GRID_FOLDER_NAME;

