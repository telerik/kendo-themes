import { CalendarTableHead } from './calendar-table-head';
import { CalendarTbody } from './calendar-tbody.spec';
import { classNames } from '../misc';

export const CALENDARTABLE_CLASSNAME = `k-calendar-table`;

export type KendoCalendarTableProps = {
    calendarCaption?: string;
    showTableHead?: boolean;
    showWeek?: boolean;
    ariaActivedescendant?: string;
};

export const CalendarTable = (
    props: KendoCalendarTableProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        calendarCaption,
        showTableHead,
        showWeek,
        ariaActivedescendant,
        ...other
    } = props;

    return (
        <table
            {...other}
            role="grid"
            aria-labelledby="calendar-title-id"
            {...(ariaActivedescendant && { 'aria-activedescendant': ariaActivedescendant })}
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
