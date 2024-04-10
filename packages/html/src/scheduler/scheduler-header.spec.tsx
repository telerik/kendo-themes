import { classNames } from '../misc';

const className = 'k-scheduler-header';

export const SchedulerHeader = (
    props: React.HTMLAttributes<HTMLDivElement>
) => (
    <div
        {...props}
        className={classNames(
            className,
            props.className
        )}
    >
        <div className="k-scheduler-header-wrap">
            {props.children}
        </div>
    </div>
);
