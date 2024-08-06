import { classNames } from '../misc';

export const PIVOTGRID_CLASSNAME = `k-pivotgrid`;

const states = [];

const options = {};

export type KendoPivotGridProps = {
    emptyCell?: React.JSX.Element;
    columnHeaders?: React.JSX.Element;
    rowHeaders?: React.JSX.Element;
};

export const PivotGrid = (
    props: KendoPivotGridProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        emptyCell = <span className="k-pivotgrid-empty-cell" />,
        columnHeaders,
        rowHeaders,
        children,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                PIVOTGRID_CLASSNAME,
            )}>
            {emptyCell}
            <div className="k-pivotgrid-column-headers">
                {columnHeaders}
            </div>
            <div className="k-pivotgrid-row-headers">
                {rowHeaders}
            </div>
            <div className="k-pivotgrid-values">
                {children}
            </div>
        </div>
    );
};

PivotGrid.states = states;
PivotGrid.options = options;
PivotGrid.className = PIVOTGRID_CLASSNAME;

export default PivotGrid;
