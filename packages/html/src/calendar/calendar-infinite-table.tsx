import { classNames } from '../misc';

export const CALENDARINFINITETABLE_CLASSNAME = `k-calendar-table`;

export const CalendarInfiniteTable = (
    props:
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <table
            {...other}
            className={classNames(
                props.className,
                CALENDARINFINITETABLE_CLASSNAME
            )}>
            {props.children}
        </table>
    );
};
