import * as React from 'react';
import { classNames } from '../utils';
import { CalendarCell, CalendarTableHead } from '../calendar';

export interface CalendarTableProps {
    className?: string;
    calendarView?: 'month' | 'year' | 'decade' | 'century';
    showOtherMonth?: boolean;
    showWeek?: boolean;
    showCalendarCaption?: boolean;
}

export class CalendarTable extends React.Component<CalendarTableProps> {


    render() {
        const {
            className,
            calendarView,
            showOtherMonth,
            showWeek,
            showCalendarCaption,
            ...htmlAttributes
        } = this.props;

        if (calendarView === 'year') {
            return (
                <table
                    {...htmlAttributes}
                    className={classNames(
                        className,
                        'k-calendar-table',
                    )}>
                    {showCalendarCaption && <caption className="k-calendar-caption">2022</caption> }
                    <tbody className="k-calendar-tbody">
                        <tr className="k-calendar-tr">
                            <CalendarCell text="Jan" />
                            <CalendarCell text="Feb" />
                            <CalendarCell text="Mar" />
                            <CalendarCell text="Apr" />
                        </tr>
                        <tr className="k-calendar-tr">
                            <CalendarCell text="May" />
                            <CalendarCell text="Jun" hover />
                            <CalendarCell text="Jul" focus />
                            <CalendarCell text="Au" selected />
                        </tr>
                        <tr className="k-calendar-tr">
                            <CalendarCell text="Sep" />
                            <CalendarCell text="Oct" today />
                            <CalendarCell text="Nov" />
                            <CalendarCell text="Dec" />
                        </tr>
                    </tbody>
                </table>
            );
        }

        if (calendarView === 'decade') {
            return (
                <table
                    {...htmlAttributes}
                    className={classNames(
                        className,
                        'k-calendar-table',
                    )}>
                    {showCalendarCaption && <caption className="k-calendar-caption">2020 - 2029</caption> }
                    <tbody className="k-calendar-tbody">
                        <tr className="k-calendar-tr">
                            <CalendarCell className="k-out-of-range" />
                            <CalendarCell text="2020" />
                            <CalendarCell text="2021" today />
                            <CalendarCell text="2022" />
                        </tr>
                        <tr className="k-calendar-tr">
                            <CalendarCell text="2023" />
                            <CalendarCell text="2024" hover />
                            <CalendarCell text="2025" focus />
                            <CalendarCell text="2026" selected />
                        </tr>
                        <tr className="k-calendar-tr">
                            <CalendarCell text="2027" />
                            <CalendarCell text="2028" />
                            <CalendarCell text="2029" />
                            <CalendarCell className="k-out-of-range" />
                        </tr>
                    </tbody>
                </table>
            );
        }

        if (calendarView === 'century') {
            return (
                <table
                    {...htmlAttributes}
                    className={classNames(
                        className,
                        'k-calendar-table',
                    )}>
                    {showCalendarCaption && <caption className="k-calendar-caption">2000 - 2099</caption> }
                    <tbody className="k-calendar-tbody">
                        <tr className="k-calendar-tr">
                            <CalendarCell text="1990 - 1999" />
                            <CalendarCell text="2000 - 2009" />
                            <CalendarCell text="2010 - 2019" today />
                            <CalendarCell text="2020 - 2029" />
                        </tr>
                        <tr className="k-calendar-tr">
                            <CalendarCell text="2030 - 2039" />
                            <CalendarCell text="2040 - 2049" hover />
                            <CalendarCell text="2050 - 2059" focus />
                            <CalendarCell text="2060 - 2069" selected />
                        </tr>
                        <tr className="k-calendar-tr">
                            <CalendarCell text="2070 - 2079" />
                            <CalendarCell text="2080 - 2089" />
                            <CalendarCell text="2090 - 2099" />
                            <CalendarCell className="k-out-of-range" />
                        </tr>
                    </tbody>
                </table>
            );
        }

        return (
            <table
                {...htmlAttributes}
                className={classNames(
                    className,
                    'k-calendar-table',
                )}>
                {showCalendarCaption && <caption className="k-calendar-caption">October 2021</caption> }
                <CalendarTableHead showWeek={showWeek} />
                <tbody className="k-calendar-tbody">
                    <tr className="k-calendar-tr">
                        {showWeek && <CalendarCell text="39" weekCell /> }
                        <CalendarCell text="30" otherMonth showOtherMonth={showOtherMonth} />
                        <CalendarCell text="1" />
                        <CalendarCell text="2" />
                        <CalendarCell text="3" />
                        <CalendarCell text="4" />
                        <CalendarCell text="5" />
                        <CalendarCell text="6" weekend />
                    </tr>
                    <tr className="k-calendar-tr">
                        {showWeek && <CalendarCell text="40" weekCell /> }
                        <CalendarCell text="7" weekend />
                        <CalendarCell text="8" />
                        <CalendarCell text="9" hover />
                        <CalendarCell text="10" focus />
                        <CalendarCell text="11" selected />
                        <CalendarCell text="12" />
                        <CalendarCell text="13" weekend />
                    </tr>
                    <tr className="k-calendar-tr">
                        {showWeek && <CalendarCell text="41" weekCell /> }
                        <CalendarCell text="14" weekend />
                        <CalendarCell text="15" />
                        <CalendarCell text="16" hover focus />
                        <CalendarCell text="17" selected />
                        <CalendarCell text="18" selected />
                        <CalendarCell text="19" />
                        <CalendarCell text="20" weekend />
                    </tr>
                    <tr className="k-calendar-tr">
                        {showWeek && <CalendarCell text="42" weekCell /> }
                        <CalendarCell text="21" weekend />
                        <CalendarCell text="22" />
                        <CalendarCell text="23" />
                        <CalendarCell text="24" />
                        <CalendarCell text="25" />
                        <CalendarCell text="26" />
                        <CalendarCell text="27" weekend />
                    </tr>
                    <tr className="k-calendar-tr">
                        {showWeek && <CalendarCell text="43" weekCell /> }
                        <CalendarCell text="28" weekend />
                        <CalendarCell text="29" today />
                        <CalendarCell text="30" />
                        <CalendarCell text="31" />
                        <CalendarCell text="1" otherMonth showOtherMonth={showOtherMonth} />
                        <CalendarCell text="2" otherMonth showOtherMonth={showOtherMonth} />
                        <CalendarCell text="3" otherMonth weekend showOtherMonth={showOtherMonth} />
                    </tr>
                    <tr className="k-calendar-tr">
                        {showWeek && <CalendarCell text="44" weekCell /> }
                        <CalendarCell text="4" otherMonth weekend showOtherMonth={showOtherMonth} />
                        <CalendarCell text="5" otherMonth showOtherMonth={showOtherMonth} />
                        <CalendarCell text="6" otherMonth showOtherMonth={showOtherMonth} />
                        <CalendarCell text="7" otherMonth showOtherMonth={showOtherMonth} />
                        <CalendarCell text="8" otherMonth showOtherMonth={showOtherMonth} />
                        <CalendarCell text="9" otherMonth showOtherMonth={showOtherMonth} />
                        <CalendarCell text="10" otherMonth weekend showOtherMonth={showOtherMonth} />
                    </tr>
                </tbody>
            </table>
        );
    }
}
