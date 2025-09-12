import { classNames } from '../misc';
import PivotGridConfiguratorButton from './pivotgrid-configurator-button';

import { KendoComponent } from '../_types/component';
export const PIVOTGRID_CLASSNAME = `k-pivotgrid`;

const states = [];

const options = {};

export type KendoPivotGridProps = {
    emptyCell?: React.JSX.Element;
    columnHeaders?: React.JSX.Element;
    rowHeaders?: React.JSX.Element;
    configurator?: React.JSX.Element;
    configuratorDisplay?: "none" | "closed" | "opened";
    configuratorPosition?: "left" | "bottom" | "right" | "top";

};

const defaultOptions = {
    emptyCell: <span className="k-pivotgrid-empty-cell">
                <span className="k-sr-only">PivotGrid component. Use the arrow keys to navigate.</span>
            </span>,
    configuratorDisplay: "none",
    configuratorPosition: "right"
};

export const PivotGrid: KendoComponent<KendoPivotGridProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoPivotGridProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        emptyCell = defaultOptions.emptyCell,
        configuratorDisplay = defaultOptions.configuratorDisplay,
        configuratorPosition = defaultOptions.configuratorPosition,
        configurator,
        columnHeaders,
        rowHeaders,
        children,
        ...other
    } = props;

    const positionMap: Record<string, string> = {
        left: "k-d-flex k-flex-row-reverse k-pos-relative",
        bottom: "k-d-flex k-flex-col k-pos-relative",
        top: "k-d-flex k-flex-col-reverse k-pos-relative",
        right: "k-d-flex k-flex-row k-pos-relative"
    }

    return (
        <div className={positionMap[configuratorPosition]}>
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
            {(configurator && configuratorDisplay === "opened") && configurator}
            {(configuratorDisplay !== "none") && <PivotGridConfiguratorButton />}
        </div>
    );
};

PivotGrid.states = states;
PivotGrid.options = options;
PivotGrid.className = PIVOTGRID_CLASSNAME;
PivotGrid.defaultOptions = defaultOptions;
PivotGrid.moduleName = "pivotgrid";
PivotGrid.folderName = "pivotgrid";

export default PivotGrid;
