import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import Calendar from './calendar.spec';
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
CalendarCaptionCell.moduleName = Calendar.moduleName;
CalendarCaptionCell.folderName = Calendar.folderName;
