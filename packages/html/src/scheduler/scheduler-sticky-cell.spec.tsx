import { classNames } from '../misc';

const className = 'k-sticky-cell';

export const SchedulerStickyCell = (
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

