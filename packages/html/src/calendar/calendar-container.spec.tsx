import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import Calendar from './calendar.spec';

export const CALENDAR_CONTAINER_CLASSNAME = `k-calendar-container`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoCalendarContainerOptions = {};

export type KendoCalendarContainerProps = KendoCalendarContainerOptions & {};

export const CalendarContainer: KendoComponent<KendoCalendarContainerProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoCalendarContainerProps & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                CALENDAR_CONTAINER_CLASSNAME,
            )}>
            {props.children}
        </div>
    );
};

CalendarContainer.states = states;
CalendarContainer.options = options;
CalendarContainer.className = CALENDAR_CONTAINER_CLASSNAME;
CalendarContainer.defaultOptions = defaultOptions;
CalendarContainer.moduleName = Calendar.moduleName;
CalendarContainer.folderName = Calendar.folderName;

export default CalendarContainer;
