import { MultiViewCalendar } from "..";
import { CalendarCell, CalendarTable } from "../..";
import { CalendarTableRow } from "../..";

export const MultiViewCalendarDecade = ({ showOtherDecade, ...props }: any) => (
    <MultiViewCalendar calendarView="decade" calendarTitleText="2020 - 2039"
        children={
            <>
                <CalendarTable>
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
                <CalendarTable>
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

export default MultiViewCalendarDecade;
