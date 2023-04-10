import { classNames, optionClassNames, Size } from '../utils';

export const DATATABLE_CLASSNAME = `k-data-table`;

const states = [];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
};

export type KendoDataTableOptions = {
  size?: (typeof options.size)[number] | null;
};

const defaultProps = {
    size: Size.medium,
};

export const DataTable = (
    props: KendoDataTableOptions &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultProps.size,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                DATATABLE_CLASSNAME,
                optionClassNames('k-table', {
                    size,
                }),
            )}
        >
            {props.children}
        </div>
    );
};

DataTable.states = states;
DataTable.options = options;
DataTable.className = DATATABLE_CLASSNAME;
DataTable.defaultProps = defaultProps;

export default DataTable;
