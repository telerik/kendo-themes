import { Icon } from '../icon';
import { States, classNames, stateClassNames } from '../misc';

export const PIVOTGRIDCELL_CLASSNAME = `k-pivotgrid-cell`;

const states = [
    States.focus,
    States.selected,
];

const options = {};

export type KendoPivotGridCellProps = {
    as?: "th" | "td";
    colSpan?: number;
    rowSpan?: number;
    toggle?: "up" | "down";
    headerTitle?: string;
    content?: string;

    headerRootCell?: boolean;
    totalCell?: boolean;
    headerTotalCell?: boolean;
    rowTotalCell?: boolean;

    cellType?: 'columnheader' | 'rowheader' | 'gridcell' | 'emptycell';
    'aria-expanded'?: 'true' | 'false';
    'aria-colspan'?: number;
    'aria-rowspan'?: number;
    'aria-describedby'?: string;
};

export type KendoPivotGridCellState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {};

export const PivotGridCell = (
    props: KendoPivotGridCellProps &
        KendoPivotGridCellState &
        React.HTMLAttributes<HTMLTableCellElement>
) => {
    const {
        as: Component = "td",
        toggle,
        headerTitle,
        content,
        headerRootCell,
        totalCell,
        headerTotalCell,
        rowTotalCell,
        cellType,
        'aria-expanded': ariaExpanded,
        'aria-colspan': ariaColspan,
        'aria-rowspan': ariaRowspan,
        'aria-describedby': ariaDescribedby,
        focus,
        selected,
        ...other
    } = props;

    const iconMap = {
        up: "up",
        down: "down"
    };

    return (
        <Component
            {...other}
            className={classNames(
                props.className,
                PIVOTGRIDCELL_CLASSNAME,
                {
                    ["k-pivotgrid-expanded"]: toggle === "up",
                    ["k-pivotgrid-header-root"]: headerRootCell,
                    ["k-pivotgrid-total"]: totalCell,
                    ["k-pivotgrid-header-total"]: headerTotalCell,
                    ["k-pivotgrid-row-total"]: rowTotalCell
                },
                stateClassNames(PIVOTGRIDCELL_CLASSNAME, {
                    focus,
                    selected,
                })
            )}
            {...(cellType && { role: cellType })}
            {...(ariaExpanded && { 'aria-expanded': ariaExpanded })}
            {...(ariaColspan && { 'aria-colspan': ariaColspan })}
            {...(ariaRowspan && { 'aria-rowspan': ariaRowspan })}
            {...(ariaDescribedby && { 'aria-describedby': ariaDescribedby })}
        >
            {toggle &&
                <Icon className="k-pivotgrid-toggle" icon={`chevron-${iconMap[toggle]}`} aria-hidden="true" />
            }
            {headerTitle && <span className="k-pivotgrid-header-title">{headerTitle}</span>}
            {(content || content === "") && <span className="k-pivotgrid-content">{content}</span>}
        </Component>
    );
};

PivotGridCell.states = states;
PivotGridCell.options = options;
PivotGridCell.className = PIVOTGRIDCELL_CLASSNAME;
PivotGridCell.defaultOptions = defaultOptions;

export default PivotGridCell;
