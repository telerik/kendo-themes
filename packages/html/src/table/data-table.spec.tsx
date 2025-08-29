import { classNames, optionClassNames, Size } from '../misc';

import { KendoComponent } from '../_types/component';
export const DATATABLE_CLASSNAME = `k-data-table`;

const states = [];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
};

export type KendoDataTableOptions = {
  size?: (typeof options.size)[number] | null;
};

const defaultOptions = {
    size: Size.medium,
};

export const DataTable: KendoComponent<KendoDataTableOptions & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoDataTableOptions &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultOptions.size,
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
DataTable.defaultOptions = defaultOptions;

export default DataTable;
