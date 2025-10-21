import { MultiViewCalendar } from "..";
import { CalendarTable, CalendarTableRow, CalendarCell } from "../../calendar";

export const MultiViewCalendarYear = ({ showCaptions, ...props }: any) => (
    <MultiViewCalendar calendarView="year" calendarTitleText="2021"
        children={
            <>
                <CalendarTable calendarCaption={showCaptions && "2021"}>
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
                <CalendarTable calendarCaption={showCaptions && "2022"}>
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
                        <CalendarCell text="Oct" />
                        <CalendarCell text="Nov" />
                        <CalendarCell text="Dec" />
                    </CalendarTableRow>
                </CalendarTable>
            </>
        }
        {...props}
    />
);
