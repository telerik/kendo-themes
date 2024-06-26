import { Calendar, CalendarTableRow, CalendarCell, CalendarTable } from "..";

export const CalendarCentury = ({ showOtherCentury, ...props }: any) => (
    <Calendar calendarView="century" calendarTitleText="2000 - 2099"
        children={
            <CalendarTable>
                <CalendarTableRow>
                    <CalendarCell text="1990 - 1999" />
                    <CalendarCell text="2000 - 2009" />
                    <CalendarCell text="2010 - 2019" today />
                    <CalendarCell text="2020 - 2029" />
                </CalendarTableRow>
                <CalendarTableRow>
                    <CalendarCell text="2030 - 2039" />
                    <CalendarCell text="2040 - 2049" />
                    <CalendarCell text="2050 - 2059" />
                    <CalendarCell text="2060 - 2069" />
                </CalendarTableRow>
                <CalendarTableRow>
                    <CalendarCell text="2070 - 2079" />
                    <CalendarCell text="2080 - 2089" />
                    <CalendarCell text="2090 - 2099" />
                    <CalendarCell text="2100 - 2109" empty={!showOtherCentury} />
                </CalendarTableRow>
            </CalendarTable>
        }
        {...props}
    />
);
