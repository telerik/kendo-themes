import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
const className = `k-calendar-tbody`;

export const CalendarTbody: KendoComponent<React.HTMLAttributes<HTMLTableSectionElement>> = (
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

CalendarTbody.className = className;
