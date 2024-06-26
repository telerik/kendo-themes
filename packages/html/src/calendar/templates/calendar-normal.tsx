import { Calendar, CalendarTableRow, CalendarCell, CalendarTable } from "..";

export const CalendarNormal = ({ showCaptions, showOtherMonth, ...props }: any) => (
    <Calendar calendarView="month"
        children={
            <CalendarTable calendarCaption={showCaptions && "October 2021"} showTableHead>
                <CalendarTableRow>
                    <CalendarCell text="26" showOtherMonth={showOtherMonth} empty={!showOtherMonth} weekend={showOtherMonth} />
                    <CalendarCell text="27" showOtherMonth={showOtherMonth} empty={!showOtherMonth} />
                    <CalendarCell text="28" showOtherMonth={showOtherMonth} empty={!showOtherMonth} />
                    <CalendarCell text="29" showOtherMonth={showOtherMonth} empty={!showOtherMonth} />
                    <CalendarCell text="30" showOtherMonth={showOtherMonth} empty={!showOtherMonth} />
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
                    <CalendarCell text="14" />
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
                    <CalendarCell text="27" />
                    <CalendarCell text="28" />
                    <CalendarCell text="29" />
                    <CalendarCell text="30" weekend />
                </CalendarTableRow>
                <CalendarTableRow>
                    <CalendarCell text="31" weekend />
                    <CalendarCell text="1" showOtherMonth={showOtherMonth} empty={!showOtherMonth} />
                    <CalendarCell text="2" showOtherMonth={showOtherMonth} empty={!showOtherMonth} />
                    <CalendarCell text="3" showOtherMonth={showOtherMonth} empty={!showOtherMonth} />
                    <CalendarCell text="4" showOtherMonth={showOtherMonth} empty={!showOtherMonth} />
                    <CalendarCell text="5" showOtherMonth={showOtherMonth} empty={!showOtherMonth} />
                    <CalendarCell text="6" showOtherMonth={showOtherMonth} empty={!showOtherMonth} weekend={showOtherMonth} />
                </CalendarTableRow>
            </CalendarTable>
        }
        {...props}
    />
);
