import { classNames } from '../misc';

const className = 'k-scheduler-row';

export const SchedulerRow = (
    props: React.HTMLAttributes<HTMLDivElement>
) => (
    <div
        {...props}
        className={classNames(
            className,
            props.className
        )}
    >
        {props.children}
    </div>
);
