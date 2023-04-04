import { classNames } from '../utils';
import { CalendarCell } from '../calendar';

const className = `k-calendar-thead`;

export type KendoCalendarTableHeadProps = {
    showWeek?: boolean,
};

export const CalendarTableHead = (
    props: KendoCalendarTableHeadProps &
        React.HTMLAttributes<HTMLTableSectionElement>
) => {
    const {
        showWeek,
        ...other
    } = props;

    return (
        <thead
            {...other}
            className={classNames(props.className, className)}>
            <tr className="k-calendar-tr">
                {showWeek && <CalendarCell weekCell headerCell /> }
                <CalendarCell text="Su" headerCell />
                <CalendarCell text="Mo" headerCell />
                <CalendarCell text="Tu" headerCell />
                <CalendarCell text="We" headerCell />
                <CalendarCell text="Th" headerCell />
                <CalendarCell text="Fr" headerCell />
                <CalendarCell text="Sa" headerCell />
            </tr>
        </thead>
    );
};

export default CalendarTableHead;
