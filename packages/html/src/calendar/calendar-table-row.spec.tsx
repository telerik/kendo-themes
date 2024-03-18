import { classNames } from '../misc';

const className = `k-calendar-tr`;

export const CalendarTableRow = (
    props: React.HTMLAttributes<HTMLTableRowElement>
) => {
    const {
        ...other
    } = props;

    return (
        <tr
            {...other}
            className={classNames(props.className, className)}>
            {props.children}
        </tr>
    );
};
