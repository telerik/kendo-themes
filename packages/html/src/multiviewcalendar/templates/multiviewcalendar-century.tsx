import { MultiViewCalendar } from "..";
import { CalendarTable, CalendarTableRow, CalendarCell } from "../../calendar";

export const MultiViewCalendarCentury = ({ showCaptions ,showOtherCentury, ...props }: any) => (
    <MultiViewCalendar calendarView="century" calendarTitleText="1900 - 2099"
        children={
            <>
                <CalendarTable calendarCaption={showCaptions && "1900 - 1999"}>
                    <CalendarTableRow>
                        <CalendarCell text="1890 - 1899" empty={!showOtherCentury}/>
                        <CalendarCell text="1900 - 1909" />
                        <CalendarCell text="1910 - 1919" />
                        <CalendarCell text="1920 - 1929" />
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="1930 - 1939" />
                        <CalendarCell text="1940 - 1949" />
                        <CalendarCell text="1950 - 1959" />
                        <CalendarCell text="1960 - 1969" />
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="1970 - 1979" />
                        <CalendarCell text="1980 - 1989" />
                        <CalendarCell text="1990 - 1999" />
                        <CalendarCell text="2000 - 2009" empty={!showOtherCentury} />
                    </CalendarTableRow>
                </CalendarTable>
                <CalendarTable calendarCaption={showCaptions && "2000 - 2099"}>
                    <CalendarTableRow>
                        <CalendarCell text="1990 - 1999" empty={!showOtherCentury}/>
                        <CalendarCell text="2000 - 2009" />
                        <CalendarCell text="2010 - 2019" />
                        <CalendarCell text="2020 - 2029" today />
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
            </>
        }
        {...props}
    />
);
