import { classNames } from '../misc';

const className = `k-table-group-row`;

export const TableListGroupRow = (
    props: React.HTMLAttributes<HTMLLIElement>
) => (
    <li
        className={classNames(
            props.className,
            className,
        )}
    >
        {props.children}
    </li>
);
