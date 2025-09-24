import { classNames } from '../misc';
import { Toolbar, KendoToolbarProps } from '../toolbar';

import { KendoComponent } from '../_types/component';
import { GRID_FOLDER_NAME, GRID_MODULE_NAME } from './constants';
const className = `k-grid-toolbar`;

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
