import { CalendarTableHead } from './calendar-table-head';
import { CalendarTbody } from './calendar-tbody.spec';
import { classNames } from '../misc';

export const CALENDARTABLE_CLASSNAME = `k-calendar-table`;

export type KendoCalendarTableProps = {
    calendarCaption?: string;
    showTableHead?: boolean;
    showWeek?: boolean;
    /** @aria aria-labelledby pointing to the calendar title */
    ariaLabelledBy?: string;
    /** @aria aria-activedescendant pointing to focused cell */
    ariaActiveDescendant?: string;
    /** @aria When true, this table acts as the grid root (standard calendar) */
    gridRole?: boolean;
};

export const CalendarTable = (
    props: KendoCalendarTableProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        calendarCaption,
        showTableHead,
        showWeek,
        ariaLabelledBy,
        ariaActiveDescendant,
        gridRole,
        ...other
    } = props;

    return (
        <table
            {...other}
            className={classNames(
                props.className,
                CALENDARTABLE_CLASSNAME
            )}
            {...(gridRole ? {
                role: 'grid',
                'aria-labelledby': ariaLabelledBy,
                'aria-activedescendant': ariaActiveDescendant,
                tabIndex: 0
            } : {
                role: 'none'
            })}>
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
