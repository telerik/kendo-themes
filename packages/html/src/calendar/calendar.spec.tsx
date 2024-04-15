import { classNames, optionClassNames, Size } from '../misc';
import { CalendarView, CalendarHeader, CalendarFooter } from '.';

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
    calendarHeaderText?: string;
    showTableHead?: boolean;
    showWeek?: boolean;
    showCalendarHeader?: boolean;
    showCalendarFooter?: boolean;
    calendarFooterText?: string;
    dir?: 'ltr' | 'rtl';
};

const defaultProps = {
    size: Size.medium,
    showCalendarHeader: true,
    orientation: 'horizontal',
    calendarView: 'month',
    calendarHeaderText: 'October 2021',
} as const;

export const Calendar = (
    props: KendoCalendarProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultProps.size,
        orientation = defaultProps.orientation,
        calendarView = defaultProps.calendarView,
        calendarHeaderText = defaultProps.calendarHeaderText,
        showWeek,
        showCalendarHeader,
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
                    showToday={showCalendarFooter ? false : true}
                    calendarHeaderText={calendarHeaderText}
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
Calendar.defaultProps = defaultProps;

export default Calendar;
