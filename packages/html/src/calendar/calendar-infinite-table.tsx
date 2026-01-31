import { classNames } from '../misc';

export const CALENDARINFINITETABLE_CLASSNAME = `k-calendar-table`;

export type KendoCalendarInfiniteTableProps = {
    ariaLabel?: string;
};

export const CalendarInfiniteTable = (
    props:
        KendoCalendarInfiniteTableProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ariaLabel,
        ...other
    } = props;

    return (
        <table
            {...other}
            className={classNames(
                props.className,
                CALENDARINFINITETABLE_CLASSNAME
            )}
            role="grid"
            {...(ariaLabel && { 'aria-label': ariaLabel })}
            tabIndex={0}>
            {props.children}
        </table>
    );
};
