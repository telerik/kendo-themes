import * as React from 'react';
import { classNames } from '../utils';
import { CalendarCell } from '../calendar';

export interface CalendarTableHeadProps {
    className?: string;
    showWeek?: boolean,
}

export class CalendarTableHead extends React.Component<CalendarTableHeadProps> {


    render() {
        const {
            className,
            showWeek,
            ...htmlAttributes
        } = this.props;

        return (
            <thead
                {...htmlAttributes}
                className={classNames(
                    className,
                    'k-calendar-thead'
                )}>
                <tr className="k-calendar-tr">
                    {showWeek && <CalendarCell weekCell headerCell /> }
                    <CalendarCell text="Su" headerCell />
                    <CalendarCell text="Mo" headerCell />
                    <CalendarCell text="Tu" headerCell />
                    <CalendarCell text="We" headerCell />
                    <CalendarCell text="Th" headerCell />
                    <CalendarCell text="Fr" headerCell />
                    <CalendarCell text="Sa" headerCell />
                </tr>
            </thead>
        );
    }
}
