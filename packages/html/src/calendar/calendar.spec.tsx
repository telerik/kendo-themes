import { classNames, optionClassNames, Size } from '../misc';
import { CalendarView, CalendarHeader, CalendarFooter } from '.';

import { KendoComponent } from '../_types/component';
const CALENDAR_CLASSNAME = `k-calendar`;

const states = [];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
};

export type KendoCalendarOptions = {
    size?: (typeof options.size)[number] | null;
};

export type KendoCalendarProps = KendoCalendarOptions & {
    orientation?: 'vertical' | 'horizontal';
    calendarView?: 'month' | 'year' | 'decade' | 'century';
    calendarTitleText?: string;
    showTableHead?: boolean;
    showWeek?: boolean;
    showCalendarHeader?: boolean;
    showCalendarFooter?: boolean;
    calendarFooterText?: string;
    dir?: 'ltr' | 'rtl';
};

const defaultOptions = {
    size: Size.medium,
    showCalendarHeader: true,
    orientation: 'horizontal',
    calendarView: 'month',
    calendarTitleText: 'October 2021',
} as const;

export const Calendar: KendoComponent<KendoCalendarProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoCalendarProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultOptions.size,
        orientation = defaultOptions.orientation,
        calendarView = defaultOptions.calendarView,
        calendarTitleText = defaultOptions.calendarTitleText,
        showCalendarHeader = defaultOptions.showCalendarHeader,
        showWeek,
        showCalendarFooter,
        calendarFooterText,
        dir,
        ...other
    } = props;

    return (
        <div
            {...other}
            dir={dir}
            className={classNames(
                props.className,
                CALENDAR_CLASSNAME,
                optionClassNames(CALENDAR_CLASSNAME, {
                    size
                }),
                {
                    'k-week-number': showWeek,
                }
            )}>
            {showCalendarHeader &&
                <CalendarHeader
                    calendarView={calendarView}
                    showToday={showCalendarFooter ? false : true}
                    calendarTitleText={calendarTitleText}
                    orientation={orientation}
                    size={size}
                    dir={dir}
                />
            }

            <CalendarView
                calendarView={calendarView}
                orientation={orientation}
            >
                {props.children}
            </CalendarView>

            {showCalendarFooter && <CalendarFooter calendarFooterText={calendarFooterText} size={size}/>}
        </div>
    );
};

Calendar.states = states;
Calendar.options = options;
Calendar.className = CALENDAR_CLASSNAME;
Calendar.defaultOptions = defaultOptions;
Calendar.moduleName = "calendar";
Calendar.folderName = "calendar";

export default Calendar;
