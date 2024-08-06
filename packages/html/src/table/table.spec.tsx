import { classNames, optionClassNames, Size } from '../misc';

export const TABLE_CLASSNAME = `k-table`;

const states = [];

const options = {
    size: [ Size.small, Size.medium, Size.large ]
};

export type KendoTableOptions = {
  size?: (typeof options.size)[number] | null;
};

export const Table = (
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

export default Table;
