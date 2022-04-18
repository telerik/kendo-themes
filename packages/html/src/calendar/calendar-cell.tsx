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
    selected?: boolean
    disabled?: boolean;
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
