import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { GRID_FOLDER_NAME, GRID_MODULE_NAME } from './constants';

export const GRID_STICKY_CONTAINER_CLASSNAME = `k-grid-sticky-container`;

export type GridStickyContainerProps = React.HTMLAttributes<HTMLDivElement> & {
    position?: 'top' | 'bottom';
};

const defaultProps = {
    position: 'top'
};

export const GridStickyContainer: KendoComponent<GridStickyContainerProps> = (
    props: GridStickyContainerProps
) => {
    const {
        position = defaultProps.position,
        ...others
    } = props;

    return (
        <div
            {...others}
            className={classNames(
                props.className,
                GRID_STICKY_CONTAINER_CLASSNAME,
                {
                    'k-grid-sticky-top-container': position === 'top',
                    'k-grid-sticky-bottom-container': position === 'bottom',
                }
            )}
        >
        {props.children}
        </div>
    );
};

GridStickyContainer.className = GRID_STICKY_CONTAINER_CLASSNAME;
GridStickyContainer.defaultProps = defaultProps;
GridStickyContainer.moduleName = GRID_MODULE_NAME;
GridStickyContainer.folderName = GRID_FOLDER_NAME;
