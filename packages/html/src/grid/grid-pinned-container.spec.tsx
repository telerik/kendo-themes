import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { GRID_FOLDER_NAME, GRID_MODULE_NAME } from './constants';

export const GRID_PINNED_CONTAINER_CLASSNAME = `k-grid-pinned-container`;

export type GridPinnedContainerProps = React.HTMLAttributes<HTMLDivElement> & {
    position?: 'top' | 'bottom';
};

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
