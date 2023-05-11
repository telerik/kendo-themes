import { classNames } from '../misc';

const className = `k-table-body`;

export const TableBody = (
    props: React.HTMLAttributes<HTMLDivElement>
) => (
    <div
        className={classNames(
            props.className,
            className,
            'k-table-scroller'
        )}
    >
        {props.children}
    </div>
);
