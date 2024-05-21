import { classNames } from '../misc';

export const PIVOTGRIDTABLE_CLASSNAME = `k-pivotgrid-table`;

const states = [];

const options = {};

const defaultProps = {};

export const PivotGridTable = (
    props: React.HTMLAttributes<HTMLTableElement>
) => {
    const {
        children,
        ...other
    } = props;

    return (
        <table
            {...other}
            className={classNames(
                props.className,
                PIVOTGRIDTABLE_CLASSNAME,
            )}>
            {children}
        </table>
    );
};

PivotGridTable.states = states;
PivotGridTable.options = options;
PivotGridTable.className = PIVOTGRIDTABLE_CLASSNAME;
PivotGridTable.defaultProps = defaultProps;

export default PivotGridTable;
