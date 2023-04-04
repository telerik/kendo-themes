import { classNames } from '../utils';

const className = `k-table-group-header`;

export const TableGroupHeader = (
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
