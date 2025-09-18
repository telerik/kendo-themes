import { classNames } from '../misc';
import { Toolbar, KendoToolbarProps } from '../toolbar';

import { KendoComponent } from '../_types/component';
import { Grid } from './grid.spec';
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
GridToolbar.moduleName = Grid.moduleName;
GridToolbar.folderName = Grid.folderName;
