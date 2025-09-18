import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { GRID_FOLDER_NAME, GRID_MODULE_NAME } from './constants';
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
GridFooter.moduleName = GRID_MODULE_NAME;
GridFooter.folderName = GRID_FOLDER_NAME;
