import { classNames } from '../misc';

export const CALENDARINFINITETABLE_CLASSNAME = `k-calendar-table`;

export type KendoCalendarInfiniteTableProps = {
    /** @aria Override the default role ("none") for this table */
    tableRole?: string;
    /** @aria aria-labelledby when table acts as grid */
    ariaLabelledBy?: string;
};

export const CalendarInfiniteTable = (
    props: KendoCalendarInfiniteTableProps &
        React.HTMLAttributes<HTMLTableElement>
) => {
    const {
        tableRole = 'none',
        ariaLabelledBy,
        ...other
    } = props;

    return (
        <table
            {...other}
            className={classNames(
                props.className,
                CALENDARINFINITETABLE_CLASSNAME
            )}
            role={tableRole}
            {...(ariaLabelledBy ? { 'aria-labelledby': ariaLabelledBy } : {})}
            {...(tableRole === 'grid' ? { tabIndex: 0 } : {})}>
            {props.children}
        </table>
    );
};
