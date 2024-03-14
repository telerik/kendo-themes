import { Calendar, CalendarTableRow, CalendarCell } from "..";

export const CalendarDecade = (props: any) => (
    <Calendar calendarView="decade" calendarHeaderText="2020 - 2029"
        children={
            <>
                <CalendarTableRow>
                    <CalendarCell empty />
                    <CalendarCell text="2020" />
                    <CalendarCell text="2021" today />
                    <CalendarCell text="2022" />
                </CalendarTableRow>
                <CalendarTableRow>
                    <CalendarCell text="2023" />
                    <CalendarCell text="2024" />
                    <CalendarCell text="2025" />
                    <CalendarCell text="2026" />
                </CalendarTableRow>
                <CalendarTableRow>
                    <CalendarCell text="2027" />
                    <CalendarCell text="2028" />
                    <CalendarCell text="2029" />
                    <CalendarCell empty />
                </CalendarTableRow>
            </>
        }
        {...props}
    />
);
