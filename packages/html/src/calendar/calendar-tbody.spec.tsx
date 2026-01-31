import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { CALENDAR_FOLDER_NAME, CALENDAR_MODULE_NAME } from './constants';
const className = `k-calendar-tbody`;

export type KendoCalendarTbodyProps = {
    multiView?: boolean;
};

export const CalendarTbody: KendoComponent<KendoCalendarTbodyProps & React.HTMLAttributes<HTMLTableSectionElement>> = (
    props: KendoCalendarTbodyProps & React.HTMLAttributes<HTMLTableSectionElement>
) => {
    const {
        ...other
    } = props;

    return (
        <tbody
            {...other}
            role="rowgroup"
            className={classNames(props.className, className)}>
            {props.children}
        </tbody>
    );
};

CalendarTbody.className = className;
CalendarTbody.moduleName = CALENDAR_MODULE_NAME;
CalendarTbody.folderName = CALENDAR_FOLDER_NAME;
