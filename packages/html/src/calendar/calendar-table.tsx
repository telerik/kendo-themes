import { CalendarTableHead } from './calendar-table-head';
import { CalendarTbody } from './calendar-tbody.spec';
import { classNames } from '../misc';

export const CALENDARTABLE_CLASSNAME = `k-calendar-table`;

export type KendoCalendarTableProps = {
    calendarCaption?: string;
    showTableHead?: boolean;
    showWeek?: boolean;
    ariaActivedescendant?: string;
    titleId?: string;
    multiView?: boolean;
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
        titleId = 'k-calendar-title',
        multiView,
        ...other
    } = props;

    return (
        <table
            {...other}
            {...(multiView ? { role: 'none' } : {
                role: 'grid',
                'aria-labelledby': titleId,
                ...(ariaActivedescendant && { 'aria-activedescendant': ariaActivedescendant }),
                tabIndex: 0
            })}
            className={classNames(
                props.className,
                CALENDARTABLE_CLASSNAME
            )}>
            {calendarCaption &&
                <caption className="k-calendar-caption">{calendarCaption}</caption>
            }
            {showTableHead &&
                <CalendarTableHead showWeek={showWeek} multiView={multiView} />
            }
            <CalendarTbody multiView={multiView}>
                {props.children}
            </CalendarTbody>
        </table>
    );
};
