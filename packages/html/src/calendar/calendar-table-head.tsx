import { classNames } from '../misc';
import { CalendarCell } from '../calendar';

const CALENDARTABLEHEAD_CLASSNAME = `k-calendar-thead`;

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
            className={classNames(props.className, CALENDARTABLEHEAD_CLASSNAME)}
            role="rowgroup">
            <tr className="k-calendar-tr" role="row">
                {showWeek && <CalendarCell weekCell headerCell text="W" /> }
                {cellsText.map((text, index) => <CalendarCell key={index} text={text} headerCell />)}
            </tr>
        </thead>
    );
};

CalendarTableHead.className = CALENDARTABLEHEAD_CLASSNAME;
CalendarTableHead.defaultOptions = defaultOptions;

export default CalendarTableHead;
