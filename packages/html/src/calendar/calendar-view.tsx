import { classNames } from '../misc';

const CALENDARVIEW_CLASSNAME = `k-calendar-view`;

export type KendoCalendarViewProps = {
    orientation?: 'vertical' | 'horizontal',
    calendarView?: 'month' | 'year' | 'decade' | 'century';
    /** @aria When true, this view acts as the grid root (multiview/range calendar) */
    gridRole?: boolean;
    /** @aria aria-labelledby pointing to the calendar title */
    ariaLabelledBy?: string;
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
        gridRole,
        ariaLabelledBy,
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
            )}
            {...(gridRole ? {
                role: 'grid',
                'aria-labelledby': ariaLabelledBy,
                tabIndex: 0
            } : {})}>
            {props.children}
        </div>
    );
};

CalendarView.className = CALENDARVIEW_CLASSNAME;
CalendarView.defaultOptions = defaultOptions;

export default CalendarView;
