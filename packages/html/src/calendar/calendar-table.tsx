import { classNames } from '../misc';

export const CALENDARTABLE_CLASSNAME = `k-calendar-table`;

export const CalendarTable = (
    props: React.HTMLAttributes<HTMLTableElement>
) => {
    const {
        ...other
    } = props;

    return (
        <table
            {...other}
            className={classNames(
                props.className,
                CALENDARTABLE_CLASSNAME
            )}>
            {props.children}
        </table>
    );
};
