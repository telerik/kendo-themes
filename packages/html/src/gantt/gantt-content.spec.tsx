import { classNames } from '../misc';

const className = `k-gantt-content`;

export const GanttContent = (
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
