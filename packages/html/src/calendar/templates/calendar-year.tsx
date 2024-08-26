import { Calendar, CalendarCell, CalendarTable, CalendarTableRow } from "..";

export const CalendarYear = (props: any) => (
    <Calendar calendarView="year" calendarTitleText="2019"
        children={
            <CalendarTable>
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
            </CalendarTable>
        }
        {...props}
    />
);

export default CalendarYear;
