import { classNames, optionClassNames, Size } from '../misc';
import { CalendarView, CalendarHeader, CalendarFooter, CalendarTableHead } from '.';

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
    viewsCount?: number;
    showTableHead?: boolean;
    calendarCaption?: string;
    showWeek?: boolean;
    showCalendarFooter?: boolean;
    dir?: 'ltr' | 'rtl';
};

const defaultProps = {
    size: Size.medium,
    viewsCount: 1,
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
        viewsCount = defaultProps.viewsCount,
        calendarCaption,
        showWeek,
        showCalendarFooter,
        showTableHead,
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
            <CalendarHeader
                showToday={showCalendarFooter ? false : true}
                calendarHeaderText={calendarHeaderText}
                orientation={orientation}
                size={size}
                dir={dir}
            />

            <CalendarView
                calendarView={calendarView}
                viewsCount={viewsCount}
                orientation={orientation}
            >
                {calendarCaption &&
                    <caption className="k-calendar-caption">{calendarCaption}</caption>
                }
                {showTableHead &&
                    <CalendarTableHead showWeek={showWeek} />
                }
                <tbody className="k-calendar-tbody">
                    {props.children}
                </tbody>
            </CalendarView>

            {showCalendarFooter && <CalendarFooter />}
        </div>
    );
};

Calendar.states = states;
Calendar.options = options;
Calendar.className = CALENDAR_CLASSNAME;
Calendar.defaultProps = defaultProps;

export default Calendar;
