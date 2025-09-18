import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { CALENDAR_FOLDER_NAME, CALENDAR_MODULE_NAME } from './constants';
const className = `k-calendar-caption`;

export type KendoCalendarCaptionCellProps = {
    text?: string;
    scope?: string;
    colSpan?: number;
    rowSpan?: number;
};

export const CalendarCaptionCell: KendoComponent<KendoCalendarCaptionCellProps & React.HTMLAttributes<HTMLTableCellElement>> = (
    props: KendoCalendarCaptionCellProps &
        React.HTMLAttributes<HTMLTableCellElement>
) => {
    const { text, scope, colSpan, rowSpan, ...other } = props;

    return (
        <th
            {...other}
            scope={scope}
            colSpan={colSpan}
            rowSpan={rowSpan}
            className={classNames(
                props.className,
                className
            )}>
            {text}
        </th>
    );
};

CalendarCaptionCell.className = className;
CalendarCaptionCell.moduleName = CALENDAR_MODULE_NAME;
CalendarCaptionCell.folderName = CALENDAR_FOLDER_NAME;
