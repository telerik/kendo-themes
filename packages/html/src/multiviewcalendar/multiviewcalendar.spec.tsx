import { classNames, Size } from '../misc';
import { Calendar } from '../calendar';

const MULTIVIEWCALENDAR_CLASSNAME = `k-calendar-range`;

const states = [];

const options = {
    size: [ Size.small, Size.medium, Size.large ]
};

export type KendoMultiViewCalendarOptions = {
    size?: (typeof options.size)[number] | null;
};

export type KendoMultiViewCalendarProps = KendoMultiViewCalendarOptions & {
    calendarTitleText?: string;
    calendarView?: 'month' | 'year' | 'decade' | 'century';
    orientation?: 'horizontal' | 'vertical';
    showCalendarFooter?: boolean;
    calendarCaption?: string;
    showTableHead?: boolean;
    showWeek?: boolean;
    dir?: 'ltr' | 'rtl';
};

const defaultProps = {
    size: Size.medium,
    calendarTitleText: 'October 2021 - November 2021',
    orientation: 'horizontal',
    calendarView: 'month'
} as const;

export const MultiViewCalendar = (
    props: KendoMultiViewCalendarProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultProps.size,
        orientation = defaultProps.orientation,
        calendarView = defaultProps.calendarView,
        calendarTitleText = defaultProps.calendarTitleText,
        showCalendarFooter,
        showWeek,
        dir,
        ...other
    } = props;

    return (
        <Calendar
            {...other}
            className={classNames(
                props.className,
                MULTIVIEWCALENDAR_CLASSNAME,
            )}
            size={size}
            calendarTitleText={calendarTitleText}
            calendarView={calendarView}
            orientation={orientation}
            showCalendarFooter={showCalendarFooter}
            showWeek={showWeek}
            dir={dir}
        />
    );
};

MultiViewCalendar.states = states;
MultiViewCalendar.options = options;
MultiViewCalendar.className = MULTIVIEWCALENDAR_CLASSNAME;
MultiViewCalendar.defaultProps = defaultProps;

export default MultiViewCalendar;
