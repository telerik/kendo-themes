import { classNames } from '../misc';

const className = `k-calendar-tbody`;

export const CalendarTbody = (
    props: React.HTMLAttributes<HTMLTableSectionElement>
) => {
    const {
        ...other
    } = props;

    return (
        <tbody
            {...other}
            className={classNames(props.className, className)}>
            {props.children}
        </tbody>
    );
};
