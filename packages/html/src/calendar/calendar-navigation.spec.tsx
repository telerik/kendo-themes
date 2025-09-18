import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { CALENDAR_FOLDER_NAME, CALENDAR_MODULE_NAME } from './constants';
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
CalendarNavigation.moduleName = CALENDAR_MODULE_NAME;
CalendarNavigation.folderName = CALENDAR_FOLDER_NAME;
