import { classNames } from '../utils';

const className = `k-table-tfoot`;

export const TableTfoot = (
    props: React.HTMLAttributes<HTMLTableSectionElement>
) => (
    <tfoot
        className={classNames(
            props.className,
            className,
        )}
    >
        {props.children}
    </tfoot>
);
