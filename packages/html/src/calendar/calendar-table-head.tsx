import { classNames } from '../misc';
import { CalendarCell } from '../calendar';

const CALEENDARTABLEHEAD_CLASSNAME = `k-calendar-thead`;

export type KendoCalendarTableHeadProps = {
    showWeek?: boolean;
    cellsText?: string[];
};

const defaultOptions = {
    cellsText: [ 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' ]
};

export const CalendarTableHead = (
    props: KendoCalendarTableHeadProps &
        React.HTMLAttributes<HTMLTableSectionElement>
) => {
    const {
        showWeek,
        cellsText = defaultOptions.cellsText,
        ...other
    } = props;

    return (
        <thead
            {...other}
            className={classNames(props.className, CALEENDARTABLEHEAD_CLASSNAME)}>
            <tr className="k-calendar-tr">
                {showWeek && <CalendarCell weekCell headerCell /> }
                {cellsText.map((text, index) => <CalendarCell key={index} text={text} headerCell />)}
            </tr>
        </thead>
    );
};

CalendarTableHead.className = CALEENDARTABLEHEAD_CLASSNAME;
CalendarTableHead.defaultOptions = defaultOptions;

export default CalendarTableHead;
