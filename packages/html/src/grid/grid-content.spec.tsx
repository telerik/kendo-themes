import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { Grid } from './grid.spec';
const className = `k-grid-content`;

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
GridContent.moduleName = Grid.moduleName;
GridContent.folderName = Grid.folderName;
