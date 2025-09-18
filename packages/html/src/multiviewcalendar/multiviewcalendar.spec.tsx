import { classNames, Size } from '../misc';
import { Calendar } from '../calendar';

import { KendoComponent } from '../_types/component';
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

const defaultOptions = {
    size: Size.medium,
    calendarTitleText: 'October 2021 - November 2021',
    orientation: 'horizontal',
    calendarView: 'month'
} as const;

export const MultiViewCalendar: KendoComponent<KendoMultiViewCalendarProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoMultiViewCalendarProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultOptions.size,
        orientation = defaultOptions.orientation,
        calendarView = defaultOptions.calendarView,
        calendarTitleText = defaultOptions.calendarTitleText,
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
MultiViewCalendar.defaultOptions = defaultOptions;
MultiViewCalendar.moduleName = "calendar";
MultiViewCalendar.folderName = MultiViewCalendar.moduleName;

export default MultiViewCalendar;
