import { CalendarTableHead, CalendarTbody } from '..';
import { classNames } from '../misc';

export const CALENDARTABLE_CLASSNAME = `k-calendar-table`;

export type KendoCalendarTableProps = {
    calendarCaption?: string;
    showTableHead?: boolean;
    showWeek?: boolean;
};

export const CalendarTable = (
    props: KendoCalendarTableProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        calendarCaption,
        showTableHead,
        showWeek,
        ...other
    } = props;

    return (
        <table
            {...other}
            role="grid"
            aria-labelledby="calendar-title-id"
            aria-activedescendant="focused-cell-id"
            tabIndex={0}
            className={classNames(
                props.className,
                CALENDARTABLE_CLASSNAME
            )}>
            {calendarCaption &&
                <caption className="k-calendar-caption">{calendarCaption}</caption>
            }
            {showTableHead &&
                <CalendarTableHead showWeek={showWeek} />
            }
            <CalendarTbody>
                {props.children}
            </CalendarTbody>
        </table>
    );
};
