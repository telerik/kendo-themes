import { classNames } from '../misc';

const CALENDARVIEW_CLASSNAME = `k-calendar-view`;

export type KendoCalendarViewProps = {
    orientation?: 'vertical' | 'horizontal',
    calendarView?: 'month' | 'year' | 'decade' | 'century';
};

const defaultOptions = {
    orientation: 'horizontal',
    calendarView: 'month'
} as const;

export const CalendarView = (
    props: KendoCalendarViewProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        orientation = defaultOptions.orientation,
        calendarView = defaultOptions.calendarView,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                CALENDARVIEW_CLASSNAME,
                `k-calendar-${calendarView}view`,
                'k-align-items-start',
                'k-justify-content-center',
                {
                    'k-hstack': orientation === 'horizontal',
                    'k-vstack': orientation === 'vertical',
                }
            )}>
            {props.children}
        </div>
    );
};

CalendarView.className = CALENDARVIEW_CLASSNAME;
CalendarView.defaultOptions = defaultOptions;

export default CalendarView;
