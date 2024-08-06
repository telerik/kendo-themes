import { classNames } from '../misc';
import { CalendarCell } from '../calendar';

const className = `k-calendar-thead`;

export type KendoCalendarTableHeadProps = {
    showWeek?: boolean;
    cellsText?: string[];
};

export const CalendarTableHead = (
    props: KendoCalendarTableHeadProps &
        React.HTMLAttributes<HTMLTableSectionElement>
) => {
    const {
        showWeek,
        cellsText = [ 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' ],
        ...other
    } = props;

    return (
        <thead
            {...other}
            className={classNames(props.className, className)}>
            <tr className="k-calendar-tr">
                {showWeek && <CalendarCell weekCell headerCell /> }
                {cellsText.map((text, index) => <CalendarCell key={index} text={text} headerCell />)}
            </tr>
        </thead>
    );
};

export default CalendarTableHead;
