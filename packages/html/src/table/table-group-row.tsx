import { classNames } from '../misc';

const className = `k-table-group-row`;

export const TableGroupRow = (
    props: React.HTMLAttributes<HTMLTableRowElement>
) => (
    <tr
        className={classNames(
            props.className,
            className,
        )}
    >
        {props.children}
    </tr>
);
