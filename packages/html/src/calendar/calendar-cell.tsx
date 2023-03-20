import { classNames, stateClassNames, States } from '../utils';

const states = [
    States.hover,
    States.focus,
    States.active,
    States.selected,
    States.disabled
];

export type KendoCalendarCellProps = {
    text?: string;
    headerCell?: boolean;
    today?: boolean;
    weekend?: boolean;
    otherMonth?: boolean;
    showOtherMonth?: boolean;
    weekCell?: boolean;
    rangeStart?: boolean;
    rangeMid?: boolean;
    rangeEnd?: boolean;
};

export type KendoCalendarCellState = { [K in (typeof states)[number]]?: boolean };

export const CalendarCell = (
    props: KendoCalendarCellProps &
        KendoCalendarCellState &
        React.HTMLAttributes<HTMLElement>
) => {
    const {
        text,
        headerCell,
        today,
        weekend,
        otherMonth,
        showOtherMonth,
        weekCell,
        rangeStart,
        rangeMid,
        rangeEnd,
        hover,
        focus,
        active,
        selected,
        disabled,
        ...other
    } = props;

    const cellType = headerCell ? 'th' : 'td';

    const CALENDARCELL_CLASSNAME = `k-calendar-${cellType}`;

    const calendarCellClasses = [
        props.className,
        CALENDARCELL_CLASSNAME,
        stateClassNames(CALENDARCELL_CLASSNAME, {
            hover,
            focus,
            active,
            selected,
            disabled,
        }),
        {
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
            <th {...other} className={classNames(calendarCellClasses)}>
                {text}
            </th>
        );
    }

    if (weekCell) {
        return (
            <td {...other} className={classNames(calendarCellClasses)}>
                {text}
            </td>
        );
    }

    return (
        <td {...other} className={classNames(calendarCellClasses)}>
            {otherMonth && !showOtherMonth
                ? ''
                : <span className="k-link">{text}</span>
            }
        </td>
    );
};
