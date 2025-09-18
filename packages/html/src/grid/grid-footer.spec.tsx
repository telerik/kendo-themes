import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { Grid } from './grid.spec';
const className = `k-grid-footer`;

export const GridFooter: KendoComponent<React.HTMLAttributes<HTMLDivElement>> = (
    props: React.HTMLAttributes<HTMLDivElement>
) => (
    <div
        {...props}
        className={classNames(
            props.className,
            className,
        )}
    >
        {props.children}
    </div>
);

GridFooter.className = className;
GridFooter.moduleName = Grid.moduleName;
GridFooter.folderName = Grid.folderName;
