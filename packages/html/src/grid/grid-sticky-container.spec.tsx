import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { GRID_FOLDER_NAME, GRID_MODULE_NAME } from './constants';

export const GRID_STICKY_CONTAINER_CLASSNAME = `k-grid-sticky-container`;

export type GridStickyContainerProps = React.HTMLAttributes<HTMLDivElement> & {
    position?: 'top' | 'bottom';
};

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
