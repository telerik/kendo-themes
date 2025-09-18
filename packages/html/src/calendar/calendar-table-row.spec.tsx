import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { CALENDAR_FOLDER_NAME, CALENDAR_MODULE_NAME } from './constants';
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
CalendarTableRow.moduleName = CALENDAR_MODULE_NAME;
CalendarTableRow.folderName = CALENDAR_FOLDER_NAME;
