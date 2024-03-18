import { classNames } from '../misc';

const className = `k-calendar-caption`;

export type KendoCalendarCaptionCellProps = {
    text?: string;
    scope?: string;
    colSpan?: number;
    rowSpan?: number;
};

export const CalendarCaptionCell = (
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
