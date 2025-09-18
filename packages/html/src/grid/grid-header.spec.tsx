import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { GRID_FOLDER_NAME, GRID_MODULE_NAME } from './constants';
const className = `k-grid-header`;

export type KendoGridHeaderProps = {
    draggable?: boolean;
};

export const GridHeader: KendoComponent<KendoGridHeaderProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoGridHeaderProps &
    React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        draggable,
        ...other
    } = props;

    return (

        <div
            {...other}
            className={classNames(
                props.className,
                className,
                {[`k-grid-draggable-header`]: draggable},
            )}
        >

            {props.children}

        </div>
    );
};

GridHeader.className = className;
GridHeader.moduleName = GRID_MODULE_NAME;
GridHeader.folderName = GRID_FOLDER_NAME;
