import { classNames } from "../misc";

const GRIDSTACKCELL_CLASSNAME = `k-grid-stack-cell`;

export type KendoGridStackCellProps = {
    cellHeader?: string;
    cellContent?: React.JSX.Element | string;
    edit?: boolean,
    commandCell?: boolean;
};


export const GridStackCell = (
    props: KendoGridStackCellProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        cellHeader,
        cellContent,
        edit,
        commandCell,
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
                    "k-command-cell": commandCell
                }
            )}
        >
            {cellHeader && <div className="k-grid-stack-header">{cellHeader}</div> }
            {cellContent && <div className="k-grid-stack-content">{cellContent}</div>}
            {props.children}
        </div>
    );
};

GridStackCell.className = GRIDSTACKCELL_CLASSNAME;

export default GridStackCell;
