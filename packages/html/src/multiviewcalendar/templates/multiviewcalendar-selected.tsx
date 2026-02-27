import { MultiViewCalendar } from "..";
import { CalendarTable, CalendarTableRow, CalendarCell } from "../../calendar";

export const MultiViewCalendarSelected = (props: any) => (
    <MultiViewCalendar calendarView="month"
        children={
            <>
                <CalendarTable showTableHead>
                    <CalendarTableRow>
                        <CalendarCell empty />
                        <CalendarCell empty />
                        <CalendarCell empty />
                        <CalendarCell empty />
                        <CalendarCell empty />
                        <CalendarCell text="1" />
                        <CalendarCell text="2" weekend />
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="3" weekend />
                        <CalendarCell text="4" />
                        <CalendarCell text="5" />
                        <CalendarCell text="6" />
                        <CalendarCell text="7" />
                        <CalendarCell text="8" />
                        <CalendarCell text="9" weekend />
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="10" weekend />
                        <CalendarCell text="11" />
                        <CalendarCell text="12" today />
                        <CalendarCell text="13" />
                        <CalendarCell text="14" selected />
                        <CalendarCell text="15" />
                        <CalendarCell text="16" weekend />
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="17" weekend />
                        <CalendarCell text="18" />
                        <CalendarCell text="19" />
                        <CalendarCell text="20" />
                        <CalendarCell text="21" />
                        <CalendarCell text="22" />
                        <CalendarCell text="23" weekend />
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="24" weekend />
                        <CalendarCell text="25" />
                        <CalendarCell text="26" />
                        <CalendarCell text="27" disabled />
                        <CalendarCell text="28" disabled />
                        <CalendarCell text="29" disabled />
                        <CalendarCell text="30" weekend disabled />
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="31" weekend disabled />
                        <CalendarCell empty />
                        <CalendarCell empty />
                        <CalendarCell empty />
                        <CalendarCell empty />
                        <CalendarCell empty />
                        <CalendarCell empty />
                    </CalendarTableRow>
                </CalendarTable>
                <CalendarTable showTableHead>
                    <CalendarTableRow>
                        <CalendarCell empty />
                        <CalendarCell text="1" />
                        <CalendarCell text="2" />
                        <CalendarCell text="3" />
                        <CalendarCell text="4" />
                        <CalendarCell text="5" />
                        <CalendarCell text="6" weekend />
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="7" weekend />
                        <CalendarCell text="8" />
                        <CalendarCell text="9" />
                        <CalendarCell text="10" />
                        <CalendarCell text="11" />
                        <CalendarCell text="12" />
                        <CalendarCell text="13" weekend />
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="14" weekend />
                        <CalendarCell text="15" />
                        <CalendarCell text="16" />
                        <CalendarCell text="17" />
                        <CalendarCell text="18" />
                        <CalendarCell text="19" />
                        <CalendarCell text="20" weekend />
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="21" weekend />
                        <CalendarCell text="22" />
                        <CalendarCell text="23" />
                        <CalendarCell text="24" />
                        <CalendarCell text="25" />
                        <CalendarCell text="26" />
                        <CalendarCell text="27" weekend />
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="28" weekend />
                        <CalendarCell text="29" />
                        <CalendarCell text="30" />
                        <CalendarCell empty />
                        <CalendarCell empty />
                        <CalendarCell empty />
                        <CalendarCell empty />
                    </CalendarTableRow>
                </CalendarTable>
            </>
        }
        {...props}
    />
);
