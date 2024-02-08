import { MultiViewCalendar } from "..";
import { CalendarCell } from "../..";

export const MultiViewCalendarYear = (props: any) => (
    <MultiViewCalendar calendarView="year" calendarHeaderText="2019"
        children={
            <>
                <tr className="k-calendar-tr">
                    <CalendarCell text="Jan" />
                    <CalendarCell text="Feb" />
                    <CalendarCell text="Mar" />
                    <CalendarCell text="Apr" />
                </tr>
                <tr className="k-calendar-tr">
                    <CalendarCell text="May" />
                    <CalendarCell text="Jun" />
                    <CalendarCell text="Jul" />
                    <CalendarCell text="Au" />
                </tr>
                <tr className="k-calendar-tr">
                    <CalendarCell text="Sep" />
                    <CalendarCell text="Oct" today />
                    <CalendarCell text="Nov" />
                    <CalendarCell text="Dec" />
                </tr>
            </>
        }
        {...props}
    />
);
