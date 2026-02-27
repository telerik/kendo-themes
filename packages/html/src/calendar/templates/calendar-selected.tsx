import { Calendar, CalendarTableRow, CalendarCell, CalendarTable } from "..";

export const CalendarSelected = (props: any) => (
    <Calendar calendarView="month"
        children={
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
        }
        {...props}
    />
);
