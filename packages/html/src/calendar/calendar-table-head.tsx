import { classNames } from '../misc';
import { CalendarCell } from '../calendar';
import { CalendarTableRow } from './calendar-table-row.spec';

const CALEENDARTABLEHEAD_CLASSNAME = `k-calendar-thead`;

export type KendoCalendarTableHeadProps = {
    showWeek?: boolean;
    cellsText?: string[];
    multiView?: boolean;
};

const defaultOptions = {
    cellsText: [ 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' ]
};

const fullDayNames = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];

export const CalendarTableHead = (
    props: KendoCalendarTableHeadProps &
        React.HTMLAttributes<HTMLTableSectionElement>
) => {
    const {
        showWeek,
        cellsText = defaultOptions.cellsText,
        multiView,
        ...other
    } = props;

    return (
        <thead
            {...other}
            role="rowgroup"
            className={classNames(props.className, CALEENDARTABLEHEAD_CLASSNAME)}>
            <CalendarTableRow multiView={multiView}>
                {showWeek && <CalendarCell weekCell headerCell ariaLabel="Week number" multiView={multiView} /> }
                {cellsText.map((text, index) => <CalendarCell key={index} text={text} headerCell ariaLabel={fullDayNames[index]} multiView={multiView} />)}
            </CalendarTableRow>
        </thead>
    );
};

CalendarTableHead.className = CALEENDARTABLEHEAD_CLASSNAME;
CalendarTableHead.defaultOptions = defaultOptions;

export default CalendarTableHead;
