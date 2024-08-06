import { classNames, optionClassNames, Size } from '../misc';

export const TABLELIST_CLASSNAME = `k-table-list`;

const states = [];

const options = {
    size: [ Size.small, Size.medium, Size.large ]
};

export type KendoTableListOptions = {
  size?: (typeof options.size)[number] | null;
};

export type KendoTableListProps = KendoTableListOptions & {
    virtualization?: boolean;
};

export const TableList = (
    props: KendoTableListProps &
        React.HTMLAttributes<HTMLUListElement>
) => {
    const {
        size,
        virtualization,
        ...other
    } = props;

    return (
        <ul
            {...other}
            className={classNames(
                props.className,
                'k-table',
                TABLELIST_CLASSNAME,
                optionClassNames(TABLELIST_CLASSNAME, {
                    size,
                }),
                {
                    'k-virtual-table': virtualization,
                }
            )}
        >
            {props.children}
        </ul>
    );
};

TableList.states = states;
TableList.options = options;
TableList.className = TABLELIST_CLASSNAME;

export default TableList;
