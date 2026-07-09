import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { GRID_FOLDER_NAME, GRID_MODULE_NAME } from './constants';

export const GRID_STICKY_CONTAINER_CLASSNAME = `k-grid-sticky-container`;

export type GridStickyContainerProps = React.HTMLAttributes<HTMLDivElement> & {
    position?: 'top' | 'bottom';
};

/**
 * @aria {role="none"} Sticky group container has no semantic role.
 * @aria {role="none"} Negates the default semantic role of the sticky group <table> element.
 * @aria {role="rowgroup"} Required as the owner <table> element has its semantic role removed.
 * @aria {role="row"} Required as the owner <table> element has its semantic role removed.
 * @aria {aria-rowindex} Matches the aria-rowindex of the real group header/footer row it mirrors.
 * @aria {role="gridcell"} Required as the owner <table> element has its semantic role removed. Group offset cells are excluded as they retain role=presentation.
 * @aria {aria-expanded} Mirrors the expanded/collapsed state of the real group header row.
 * @aria {tabindex} Receives tabindex 0 when focused, -1 otherwise, for keyboard navigation. Group offset cells are excluded as they are presentational.
 * @aria {aria-colindex} Col number. Typically 1 for the group header cell spanning all columns.
 */
export const GridStickyContainer: KendoComponent<GridStickyContainerProps> = (
    props: GridStickyContainerProps
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
                GRID_STICKY_CONTAINER_CLASSNAME,
                {
                    'k-pos-bottom': position === 'bottom',
                }
            )}
        >
        {props.children}
        </div>
    );
};

GridStickyContainer.className = GRID_STICKY_CONTAINER_CLASSNAME;
GridStickyContainer.moduleName = GRID_MODULE_NAME;
GridStickyContainer.folderName = GRID_FOLDER_NAME;

