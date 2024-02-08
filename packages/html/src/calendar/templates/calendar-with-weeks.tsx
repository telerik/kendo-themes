import { Calendar, CalendarCell } from "..";

export const CalendarWithWeeks = ({ showOtherMonth, ...props }: any) => (
    <Calendar calendarView="month" showTableHead showWeek
        children={
            <>
                <tr className="k-calendar-tr">
                    <CalendarCell text="39" weekCell />
                    <CalendarCell text="30" showOtherMonth={showOtherMonth} otherMonth weekend />
                    <CalendarCell text="1" />
                    <CalendarCell text="2" />
                    <CalendarCell text="3" />
                    <CalendarCell text="4" />
                    <CalendarCell text="5" />
                    <CalendarCell text="6" weekend />
                </tr>
                <tr className="k-calendar-tr">
                    <CalendarCell text="40" weekCell />
                    <CalendarCell text="7" weekend />
                    <CalendarCell text="8" />
                    <CalendarCell text="9" />
                    <CalendarCell text="10" />
                    <CalendarCell text="11" />
                    <CalendarCell text="12" />
                    <CalendarCell text="13" weekend />
                </tr>
                <tr className="k-calendar-tr">
                    <CalendarCell text="41" weekCell />
                    <CalendarCell text="14" weekend />
                    <CalendarCell text="15" />
                    <CalendarCell text="16" today />
                    <CalendarCell text="17" />
                    <CalendarCell text="18" />
                    <CalendarCell text="19" />
                    <CalendarCell text="20" weekend />
                </tr>
                <tr className="k-calendar-tr">
                    <CalendarCell text="42" weekCell />
                    <CalendarCell text="21" weekend />
                    <CalendarCell text="22" />
                    <CalendarCell text="23" />
                    <CalendarCell text="24" />
                    <CalendarCell text="25" />
                    <CalendarCell text="26" />
                    <CalendarCell text="27" weekend />
                </tr>
                <tr className="k-calendar-tr">
                    <CalendarCell text="43" weekCell />
                    <CalendarCell text="28" weekend />
                    <CalendarCell text="29" />
                    <CalendarCell text="30" />
                    <CalendarCell text="31" />
                    <CalendarCell text="1" showOtherMonth={showOtherMonth} otherMonth />
                    <CalendarCell text="2" showOtherMonth={showOtherMonth} otherMonth />
                    <CalendarCell text="3" showOtherMonth={showOtherMonth} otherMonth weekend />
                </tr>
                <tr className="k-calendar-tr">
                    <CalendarCell text="44" weekCell />
                    <CalendarCell text="4" showOtherMonth={showOtherMonth} otherMonth weekend />
                    <CalendarCell text="5" showOtherMonth={showOtherMonth} otherMonth />
                    <CalendarCell text="6" showOtherMonth={showOtherMonth} otherMonth />
                    <CalendarCell text="7" showOtherMonth={showOtherMonth} otherMonth />
                    <CalendarCell text="8" showOtherMonth={showOtherMonth} otherMonth />
                    <CalendarCell text="9" showOtherMonth={showOtherMonth} otherMonth />
                    <CalendarCell text="10" showOtherMonth={showOtherMonth} otherMonth weekend />
                </tr>
            </>
        }
        {...props}
    />
);
