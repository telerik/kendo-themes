import { CalendarTableHead } from './calendar-table-head.spec';
import { CalendarTbody } from './calendar-tbody.spec';
import { classNames } from '../misc';

export const CALENDARTABLE_CLASSNAME = `k-calendar-table`;

export type KendoCalendarTableProps = {
    calendarCaption?: string;
    showTableHead?: boolean;
    showWeek?: boolean;
    ariaLabelledBy?: string;
    ariaActiveDescendant?: string;
    gridRole?: boolean;
};

/**
 * @aria {aria-labelledby} pointing to the calendar title
 * @aria {aria-activedescendant} pointing to focused cell
 * @aria {role="grid"} When true, this table acts as the grid root (standard calendar).
 */
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
