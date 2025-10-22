import { MultiViewCalendar } from "..";
import { CalendarTable, CalendarTableRow, CalendarCell } from "../../calendar";

export const MultiViewCalendarDecade = ({ showCaptions, showOtherDecade, ...props }: any) => (
    <MultiViewCalendar calendarView="decade" calendarTitleText="2020 - 2039"
        children={
            <>
                <CalendarTable calendarCaption={showCaptions && "2020 - 2029"}>
                    <CalendarTableRow>
                        <CalendarCell text="2019" empty={!showOtherDecade} />
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
                        <CalendarCell text="2030" empty={!showOtherDecade} />
                    </CalendarTableRow>
                </CalendarTable>
                <CalendarTable calendarCaption={showCaptions && "2030 - 2039"}>
                    <CalendarTableRow>
                        <CalendarCell text="2029" empty={!showOtherDecade} />
                        <CalendarCell text="2030" />
                        <CalendarCell text="2031" />
                        <CalendarCell text="2032" />
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="2033" />
                        <CalendarCell text="2034" />
                        <CalendarCell text="2035" />
                        <CalendarCell text="2036" />
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="2037" />
                        <CalendarCell text="2038" />
                        <CalendarCell text="2039" />
                        <CalendarCell text="2040" empty={!showOtherDecade} />
                    </CalendarTableRow>
                </CalendarTable>
            </>
        }
        {...props}
    />
);
