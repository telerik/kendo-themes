import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
const className = 'k-calendar-navigation';

export const CalendarNavigation: KendoComponent<React.HTMLAttributes<HTMLDivElement>> = (
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

CalendarNavigation.className = className;
CalendarNavigation.moduleName = "calendar";
CalendarNavigation.folderName = "calendar";
