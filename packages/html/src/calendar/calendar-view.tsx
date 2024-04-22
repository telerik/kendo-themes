import { classNames } from '../misc';

const className = `k-calendar-view`;

export type KendoCalendarViewProps = {
    orientation?: 'vertical' | 'horizontal',
    calendarView?: 'month' | 'year' | 'decade' | 'century';
};

const defaultProps = {
    orientation: 'horizontal',
    calendarView: 'month'
} as const;

export const CalendarView = (
    props: KendoCalendarViewProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        orientation = defaultProps.orientation,
        calendarView = defaultProps.calendarView,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                className,
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

export default CalendarView;
