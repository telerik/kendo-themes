import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { Grid } from './grid.spec';
const className = `k-grid-container`;

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
GridContainer.moduleName = Grid.moduleName;
GridContainer.folderName = Grid.folderName;
