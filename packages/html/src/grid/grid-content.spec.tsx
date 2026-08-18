import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { GRID_FOLDER_NAME, GRID_MODULE_NAME } from './constants';
const className = `k-grid-content`;

/**
 * @aria {aria-owns} Locked content rows own cells from the corresponding non-locked content table rows. Group header rows are excluded because the non-locked group header rows are presentational.
 * @aria {role="none"} Non-locked content rows have their semantic role removed when locked columns exist.
 * @aria {role="gridcell"} Non-locked data cells retain gridcell role so they are announced correctly when owned via aria-owns. Cells inside group header rows are excluded as those rows are presentational.
 * @aria {aria-haspopup="menu"} Regular data cells announce context menu when row pinning uses contextual mode.
 * @aria {aria-controls} Points to the ID of the context menu popup for row pinning.
 * @aria {aria-expanded} Indicates whether the context menu popup is open.
 */
export const GridContent: KendoComponent<React.HTMLAttributes<HTMLDivElement>> = (
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

GridContent.className = className;
GridContent.moduleName = GRID_MODULE_NAME;
GridContent.folderName = GRID_FOLDER_NAME;

