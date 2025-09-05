import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
const className = `k-calendar-tr`;

export const CalendarTableRow: KendoComponent<React.HTMLAttributes<HTMLTableRowElement>> = (
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

CalendarTableRow.className = className;
CalendarTableRow.moduleName = "calendar";
CalendarTableRow.folderName = "calendar";
