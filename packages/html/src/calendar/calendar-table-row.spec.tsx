import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { CALENDAR_FOLDER_NAME, CALENDAR_MODULE_NAME } from './constants';
const className = `k-calendar-tr`;

export type KendoCalendarTableRowProps = {
    multiView?: boolean;
};

export const CalendarTableRow: KendoComponent<KendoCalendarTableRowProps & React.HTMLAttributes<HTMLTableRowElement>> = (
    props: KendoCalendarTableRowProps & React.HTMLAttributes<HTMLTableRowElement>
) => {
    const {
        ...other
    } = props;

    return (
        <tr
            {...other}
            role="row"
            className={classNames(props.className, className)}>
            {props.children}
        </tr>
    );
};

CalendarTableRow.className = className;
CalendarTableRow.moduleName = CALENDAR_MODULE_NAME;
CalendarTableRow.folderName = CALENDAR_FOLDER_NAME;
