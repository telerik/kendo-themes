import { classNames } from '../utils';

const className = `k-table-group-sticky-header`;

export const TableGroupStickyHeader = (
    props: React.HTMLAttributes<HTMLDivElement>
) => (
    <div
        className={classNames(
            props.className,
            className,
        )}
    >
        {props.children}
    </div>
);
