import { Calendar, CalendarCell } from "..";

export const CalendarCentury = (props: any) => (
    <Calendar calendarView="century" calendarHeaderText="2000 - 2099"
        children={
            <>
                <tr className="k-calendar-tr">
                    <CalendarCell text="1990 - 1999" />
                    <CalendarCell text="2000 - 2009" />
                    <CalendarCell text="2010 - 2019" today />
                    <CalendarCell text="2020 - 2029" />
                </tr>
                <tr className="k-calendar-tr">
                    <CalendarCell text="2030 - 2039" />
                    <CalendarCell text="2040 - 2049" />
                    <CalendarCell text="2050 - 2059" />
                    <CalendarCell text="2060 - 2069" />
                </tr>
                <tr className="k-calendar-tr">
                    <CalendarCell text="2070 - 2079" />
                    <CalendarCell text="2080 - 2089" />
                    <CalendarCell text="2090 - 2099" />
                    <CalendarCell className="k-out-of-range" />
                </tr>
            </>
        }
        {...props}
    />
);
