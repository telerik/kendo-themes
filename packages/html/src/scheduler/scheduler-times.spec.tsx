import { classNames } from '../misc';

const className = 'k-scheduler-times';

export const SchedulerTimes = (
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
