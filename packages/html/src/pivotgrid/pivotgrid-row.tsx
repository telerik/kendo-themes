import { States, classNames, stateClassNames } from '../misc';

export const PIVOTGRIDROW_CLASSNAME = `k-pivotgrid-row`;

const states = [
    States.hover,
    States.selected,
];

const options = {};

export type KendoPivotGridRowProps = {
    columnTotal?: boolean;
};

export type KendoPivotGridRowState = { [K in (typeof states)[number]]?: boolean };

export const PivotGridRow = (
    props: KendoPivotGridRowProps &
        KendoPivotGridRowState &
        React.HTMLAttributes<HTMLTableRowElement>
) => {
    const {
        columnTotal,
        children,
        hover,
        selected,
        ...other
    } = props;

    return (
        <tr
            {...other}
            className={classNames(
                props.className,
                PIVOTGRIDROW_CLASSNAME,
                {
                    ["k-pivotgrid-column-total"]: columnTotal
                },
                stateClassNames(PIVOTGRIDROW_CLASSNAME, {
                    hover,
                    selected,
                })
            )}>
            {children}
        </tr>
    );
};

PivotGridRow.states = states;
PivotGridRow.options = options;
PivotGridRow.className = PIVOTGRIDROW_CLASSNAME;

export default PivotGridRow;
