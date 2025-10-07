import { classNames, States, stateClassNames } from "../misc";

import { KendoComponent } from '../_types/component';
import { GRID_FOLDER_NAME, GRID_MODULE_NAME } from './constants';
const GRIDSTACKCELL_CLASSNAME = `k-grid-stack-cell`;

const states = [
    States.focus,
    States.selected,
];

export type KendoGridStackCellProps = {
    cellHeader?: string;
    cellContent?: React.JSX.Element | string;
    edit?: boolean,
    commandCell?: boolean;
    dirty?: boolean;
};

export type KendoGridStackCellState = { [K in (typeof states)[number]]?: boolean };

export const GridStackCell: KendoComponent<KendoGridStackCellProps & KendoGridStackCellState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoGridStackCellProps &
        KendoGridStackCellState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        cellHeader,
        cellContent,
        edit,
        commandCell,
        dirty,
        focus,
        selected,
        ...others
    } = props;

    return (
        <div
            {...others}
            className={classNames(
                props.className,
                GRIDSTACKCELL_CLASSNAME,
                {
                    "k-grid-stack-edit-cell": edit,
                    "k-command-cell": commandCell,
                    "k-dirty-cell": dirty
                },
                stateClassNames(GRIDSTACKCELL_CLASSNAME, {
                    focus,
                    selected,
                })
            )}
        >
            {dirty && <span className="k-dirty"></span>}
            {cellHeader && <div className="k-grid-stack-header">{cellHeader}</div> }
            <div className="k-grid-stack-content">{cellContent}</div>
            {props.children}
        </div>
    );
};

GridStackCell.states = states;
GridStackCell.className = GRIDSTACKCELL_CLASSNAME;
GridStackCell.moduleName = GRID_MODULE_NAME;
GridStackCell.folderName = GRID_FOLDER_NAME;

export default GridStackCell;
