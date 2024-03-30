import { classNames } from '../misc';

const className = 'k-scheduler-content';

export const SchedulerContent = (
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
