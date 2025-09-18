import { classNames, optionClassNames, Size } from '../misc';

import { KendoComponent } from '../_types/component';
import { TABLE_FOLDER_NAME, TABLE_MODULE_NAME } from './constants';
export const TABLE_CLASSNAME = `k-table`;

const states = [];

const options = {
    size: [ Size.small, Size.medium, Size.large ]
};

const defaultOptions = {};

export type KendoTableOptions = {
  size?: (typeof options.size)[number] | null;
};

export const Table: KendoComponent<KendoTableOptions & React.HTMLAttributes<HTMLTableElement>> = (
    props: KendoTableOptions &
        React.HTMLAttributes<HTMLTableElement>
) => {
    const {
        size,
        ...other
    } = props;

    return (
        <table
            {...other}
            className={classNames(
                props.className,
                TABLE_CLASSNAME,
                optionClassNames(TABLE_CLASSNAME, {
                    size,
                }),
            )}
        >
            {props.children}
        </table>
    );
};

Table.states = states;
Table.options = options;
Table.className = TABLE_CLASSNAME;
Table.defaultOptions = defaultOptions;
Table.moduleName = TABLE_MODULE_NAME;
Table.folderName = TABLE_FOLDER_NAME;

export default Table;
