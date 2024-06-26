import { classNames } from '../misc';

export const PIVOTGRID_CLASSNAME = `k-pivotgrid`;

const states = [];

const options = {};

export type KendoPivotGridProps = {
    emptyCell?: JSX.Element;
    columnHeaders?: JSX.Element;
    rowHeaders?: JSX.Element;
};

const defaultProps = {
    emptyCell: <span className="k-pivotgrid-empty-cell" />
};

export const PivotGrid = (
    props: KendoPivotGridProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        emptyCell,
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
PivotGrid.defaultProps = defaultProps;

export default PivotGrid;
