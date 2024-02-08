import { MultiViewCalendar } from "..";
import { CalendarCell } from "../..";

export const MultiViewCalendarDecade = (props: any) => (
    <MultiViewCalendar calendarView="decade" calendarHeaderText="2020 - 2029"
        children={
            <>
                <tr className="k-calendar-tr">
                    <CalendarCell className="k-out-of-range" />
                    <CalendarCell text="2020" />
                    <CalendarCell text="2021" today />
                    <CalendarCell text="2022" />
                </tr>
                <tr className="k-calendar-tr">
                    <CalendarCell text="2023" />
                    <CalendarCell text="2024" />
                    <CalendarCell text="2025" />
                    <CalendarCell text="2026" />
                </tr>
                <tr className="k-calendar-tr">
                    <CalendarCell text="2027" />
                    <CalendarCell text="2028" />
                    <CalendarCell text="2029" />
                    <CalendarCell className="k-out-of-range" />
                </tr>
            </>
        }
        {...props}
    />
);
