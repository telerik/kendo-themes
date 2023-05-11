import { classNames } from '../misc';

const className = `k-table-tbody`;

export const TableTbody = (
    props: React.HTMLAttributes<HTMLTableSectionElement>
) => (
    <tbody
        className={classNames(
            props.className,
            className,
        )}
    >
        {props.children}
    </tbody>
);
