import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { CALENDAR_FOLDER_NAME, CALENDAR_MODULE_NAME } from './constants';
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
CalendarTbody.moduleName = CALENDAR_MODULE_NAME;
CalendarTbody.folderName = CALENDAR_FOLDER_NAME;
