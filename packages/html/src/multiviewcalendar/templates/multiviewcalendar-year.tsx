import { MultiViewCalendar } from "..";
import { CalendarCell } from "../..";
import { CalendarTableRow } from "../..";

export const MultiViewCalendarYear = (props: any) => (
    <MultiViewCalendar calendarView="year" calendarHeaderText="2019"
        children={
            <>
                <CalendarTableRow>
                    <CalendarCell text="Jan" />
                    <CalendarCell text="Feb" />
                    <CalendarCell text="Mar" />
                    <CalendarCell text="Apr" />
                </CalendarTableRow>
                <CalendarTableRow>
                    <CalendarCell text="May" />
                    <CalendarCell text="Jun" />
                    <CalendarCell text="Jul" />
                    <CalendarCell text="Au" />
                </CalendarTableRow>
                <CalendarTableRow>
                    <CalendarCell text="Sep" />
                    <CalendarCell text="Oct" today />
                    <CalendarCell text="Nov" />
                    <CalendarCell text="Dec" />
                </CalendarTableRow>
            </>
        }
        {...props}
    />
);
