import { classNames } from '../misc';
import { Toolbar, KendoToolbarProps } from '../toolbar';

import { KendoComponent } from '../_types/component';
import { GRID_FOLDER_NAME, GRID_MODULE_NAME } from './constants';
const className = `k-grid-toolbar`;

/**
 * @aria {role="toolbar"} The toolbar is a collection of command buttons and inputs.
 * @aria {aria-label} Clarifies the purpose of the toolbar.
 * @aria {aria-controls=".k-grid-aria-root id"} Pointing to the id of the element with role=grid.
 */
export const GridToolbar: KendoComponent<KendoToolbarProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoToolbarProps &
        React.HTMLAttributes<HTMLDivElement>
) => (
    <Toolbar
        {...props}
        className={classNames(
            props.className,
            className,
        )}
    >
        {props.children}
    </Toolbar>
);

GridToolbar.className = className;
GridToolbar.moduleName = GRID_MODULE_NAME;
GridToolbar.folderName = GRID_FOLDER_NAME;

