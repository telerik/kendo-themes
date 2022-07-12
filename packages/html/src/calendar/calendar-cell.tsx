import * as React from 'react';
import { classNames } from '../utils';


export interface CalendarCellProps {
    className?: string;
    text?: string;
    headerCell?: boolean;
    today?: boolean;
    weekend?: boolean;
    otherMonth?: boolean;
    showOtherMonth?: boolean;
    weekCell?: boolean;
    hover?: boolean;
    focus?: boolean;
    active?: boolean;
    selected?: boolean;
    disabled?: boolean;
    rangeStart?: boolean;
    rangeMid?: boolean;
    rangeEnd?: boolean;
}

export class CalendarCell extends React.Component<CalendarCellProps> {

    render() {
        const {
            className,
            text,
            headerCell,
            today,
            weekend,
            otherMonth,
            showOtherMonth,
            weekCell,
            hover,
            focus,
            active,
            selected,
            disabled,
            rangeStart,
            rangeMid,
            rangeEnd,
            ...htmlAttributes
        } = this.props;

        const cellType = headerCell ? 'th' : 'td';

        const calendarCellClasses = [
            className,
            `k-calendar-${cellType}`,
            {
                'k-hover': hover,
                'k-focus': focus,
                'k-active': active,
                'k-selected': selected,
                'k-disabled': disabled,
                'k-today': today,
                'k-weekend': weekend,
                'k-other-month': otherMonth,
                'k-alt': weekCell,
                'k-range-start': rangeStart,
                'k-range-mid': rangeMid,
                'k-range-end': rangeEnd
            }
        ];

        if (headerCell) {
            return (
                <th {...htmlAttributes} className={classNames(calendarCellClasses)}>
                    {text}
                </th>
            );
        }

        if (weekCell) {
            return (
                <td {...htmlAttributes} className={classNames(calendarCellClasses)}>
                    {text}
                </td>
            );
        }

        return (
            <td {...htmlAttributes} className={classNames(calendarCellClasses)}>
                {otherMonth && !showOtherMonth
                    ? ''
                    : <span className="k-link">{text}</span>
                }
            </td>
        );

    }
}
