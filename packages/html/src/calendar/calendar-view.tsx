import { classNames } from '../misc';
import { CalendarTable } from './calendar-table';

const className = `k-calendar-view`;

export type KendoCalendarViewProps = {
    orientation?: 'vertical' | 'horizontal',
    calendarView?: 'month' | 'year' | 'decade' | 'century';
    viewsCount?: number;
};

const defaultProps = {
    viewsCount: 1,
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
        viewsCount = defaultProps.viewsCount,
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

            {[ ...Array(viewsCount) ].map((_e, i) =>
                <CalendarTable key={i}>
                    {props.children}
                </CalendarTable>
            )}
        </div>
    );
};

export default CalendarView;
