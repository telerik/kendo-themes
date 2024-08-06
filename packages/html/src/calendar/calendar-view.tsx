import { classNames } from '../misc';

const className = `k-calendar-view`;

export type KendoCalendarViewProps = {
    orientation?: 'vertical' | 'horizontal',
    calendarView?: 'month' | 'year' | 'decade' | 'century';
};

export const CalendarView = (
    props: KendoCalendarViewProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        orientation = 'horizontal',
        calendarView = 'month',
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
