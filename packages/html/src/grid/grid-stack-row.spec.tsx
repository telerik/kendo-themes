import { classNames } from "../misc";

import { KendoComponent } from '../_types/component';
import { GRID_FOLDER_NAME, GRID_MODULE_NAME } from './constants';
const GRIDSTACKROW_CLASSNAME = `k-grid-stack-row`;

export type KendoGridStackRowProps = {
    cols?: number;
};


export const GridStackRow: KendoComponent<KendoGridStackRowProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoGridStackRowProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        cols,
        ...others
    } = props;

    return (
        <div
            {...others}
            className={classNames(
                props.className,
                GRIDSTACKROW_CLASSNAME,
                {
                    [`k-grid-cols-${cols}`]: cols
                }

            )}
        >
            {props.children}
        </div>
    );
};

GridStackRow.className = GRIDSTACKROW_CLASSNAME;
GridStackRow.moduleName = GRID_MODULE_NAME;
GridStackRow.folderName = GRID_FOLDER_NAME;

export default GridStackRow;
