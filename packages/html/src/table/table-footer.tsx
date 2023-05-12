import { classNames } from '../misc';

const className = `k-table-footer`;

export const TableFooter = (
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
