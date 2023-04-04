import { classNames } from '../utils';

const className = `k-table-thead`;

export const TableThead = (
    props: React.HTMLAttributes<HTMLTableSectionElement>
) => (
    <thead
        className={classNames(
            props.className,
            className,
        )}
    >
        {props.children}
    </thead>
);
