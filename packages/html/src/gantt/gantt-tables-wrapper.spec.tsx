import { classNames } from '../misc';

const className = `k-gantt-tables`;

export const GanttTables = (
    props: React.HTMLAttributes<HTMLDivElement>
) => (
    <div
        {...props}
        className={classNames(
            props.className,
            className,
        )}>
        {props.children}
    </div>
);
