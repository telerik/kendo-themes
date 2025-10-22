import { MultiViewCalendar } from "..";
import { CalendarTable, CalendarTableRow, CalendarCell } from "../../calendar";

export const MultiViewCalendarWithWeeks = ({ showCaptions, showOtherMonth, ...other }: any) => (
    <MultiViewCalendar calendarView="month" showWeek
        children={
            <>
                <CalendarTable calendarCaption={showCaptions && "October 2021"} showTableHead showWeek>
                    <CalendarTableRow>
                        <CalendarCell text="39" weekCell />
                        <CalendarCell text="26" showOtherMonth={showOtherMonth} empty={!showOtherMonth} weekend={showOtherMonth} />
                        <CalendarCell text="27" showOtherMonth={showOtherMonth} empty={!showOtherMonth} />
                        <CalendarCell text="28" showOtherMonth={showOtherMonth} empty={!showOtherMonth} />
                        <CalendarCell text="29" showOtherMonth={showOtherMonth} empty={!showOtherMonth} />
                        <CalendarCell text="30" showOtherMonth={showOtherMonth} empty={!showOtherMonth} />
                        <CalendarCell text="1" />
                        <CalendarCell text="2" weekend />
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="40" weekCell />
                        <CalendarCell text="3" weekend />
                        <CalendarCell text="4" />
                        <CalendarCell text="5" />
                        <CalendarCell text="6" />
                        <CalendarCell text="7" />
                        <CalendarCell text="8" />
                        <CalendarCell text="9" weekend />
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="41" weekCell />
                        <CalendarCell text="10" weekend />
                        <CalendarCell text="11" />
                        <CalendarCell text="12" today />
                        <CalendarCell text="13" />
                        <CalendarCell text="14" />
                        <CalendarCell text="15" />
                        <CalendarCell text="16" weekend />
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="42" weekCell />
                        <CalendarCell text="17" weekend />
                        <CalendarCell text="18" />
                        <CalendarCell text="19" />
                        <CalendarCell text="20" />
                        <CalendarCell text="21" />
                        <CalendarCell text="22" />
                        <CalendarCell text="23" weekend />
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="43" weekCell />
                        <CalendarCell text="24" weekend />
                        <CalendarCell text="25" />
                        <CalendarCell text="26" />
                        <CalendarCell text="27" />
                        <CalendarCell text="28" />
                        <CalendarCell text="29" />
                        <CalendarCell text="30" weekend />
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="44" weekCell />
                        <CalendarCell text="31" weekend />
                        <CalendarCell text="1" showOtherMonth={showOtherMonth} empty={!showOtherMonth} />
                        <CalendarCell text="2" showOtherMonth={showOtherMonth} empty={!showOtherMonth} />
                        <CalendarCell text="3" showOtherMonth={showOtherMonth} empty={!showOtherMonth} />
                        <CalendarCell text="4" showOtherMonth={showOtherMonth} empty={!showOtherMonth} />
                        <CalendarCell text="5" showOtherMonth={showOtherMonth} empty={!showOtherMonth} />
                        <CalendarCell text="6" showOtherMonth={showOtherMonth} empty={!showOtherMonth} weekend={showOtherMonth} />
                    </CalendarTableRow>
                </CalendarTable>
                <CalendarTable calendarCaption={showCaptions && "November 2021"} showTableHead showWeek>
                    <CalendarTableRow>
                        <CalendarCell text="45" weekCell />
                        <CalendarCell text="31" showOtherMonth={showOtherMonth} empty={!showOtherMonth} weekend={showOtherMonth} />
                        <CalendarCell text="1" />
                        <CalendarCell text="2" />
                        <CalendarCell text="3" />
                        <CalendarCell text="4" />
                        <CalendarCell text="5" />
                        <CalendarCell text="6" weekend />
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="46" weekCell />
                        <CalendarCell text="7" weekend />
                        <CalendarCell text="8" />
                        <CalendarCell text="9" />
                        <CalendarCell text="10" />
                        <CalendarCell text="11" />
                        <CalendarCell text="12" />
                        <CalendarCell text="13" weekend />
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="47" weekCell />
                        <CalendarCell text="14" weekend />
                        <CalendarCell text="15" />
                        <CalendarCell text="16" />
                        <CalendarCell text="17" />
                        <CalendarCell text="18" />
                        <CalendarCell text="19" />
                        <CalendarCell text="20" weekend />
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="48" weekCell />
                        <CalendarCell text="21" weekend />
                        <CalendarCell text="22" />
                        <CalendarCell text="23" />
                        <CalendarCell text="24" />
                        <CalendarCell text="25" />
                        <CalendarCell text="26" />
                        <CalendarCell text="27" weekend />
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="49" weekCell />
                        <CalendarCell text="28" weekend />
                        <CalendarCell text="29" />
                        <CalendarCell text="30" />
                        <CalendarCell text="1" showOtherMonth={showOtherMonth} empty={!showOtherMonth} />
                        <CalendarCell text="2" showOtherMonth={showOtherMonth} empty={!showOtherMonth} />
                        <CalendarCell text="3" showOtherMonth={showOtherMonth} empty={!showOtherMonth} />
                        <CalendarCell text="4"showOtherMonth={showOtherMonth} empty={!showOtherMonth} weekend={showOtherMonth} />
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="50" weekCell />
                        <CalendarCell text="5" showOtherMonth={showOtherMonth} empty={!showOtherMonth} weekend={showOtherMonth} />
                        <CalendarCell text="6" showOtherMonth={showOtherMonth} empty={!showOtherMonth} />
                        <CalendarCell text="7" showOtherMonth={showOtherMonth} empty={!showOtherMonth} />
                        <CalendarCell text="8" showOtherMonth={showOtherMonth} empty={!showOtherMonth} />
                        <CalendarCell text="9" showOtherMonth={showOtherMonth} empty={!showOtherMonth} />
                        <CalendarCell text="10" showOtherMonth={showOtherMonth} empty={!showOtherMonth} />
                        <CalendarCell text="11" showOtherMonth={showOtherMonth} empty={!showOtherMonth} weekend={showOtherMonth} />
                    </CalendarTableRow>
                </CalendarTable>
            </>
        }
        {...other}
    />
);
