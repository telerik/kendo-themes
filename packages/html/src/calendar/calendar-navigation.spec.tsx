import { classNames } from '../misc';

const className = 'k-calendar-navigation';

export const CalendarNavigation = (
    props: React.HTMLAttributes<HTMLDivElement>
) => (
    <div
        {...props}
        className={classNames(
            props.className,
            className
        )}
    >
        <span className="k-calendar-navigation-highlight"></span>
        <div className="k-content k-scrollable">
            <ul className="k-reset">
                {props.children}
            </ul>
            <div className="k-scrollable-placeholder" style={{ height: "1000px" }}></div>
        </div>
    </div>
);
