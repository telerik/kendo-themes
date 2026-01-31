import { Calendar, CalendarCell, CalendarHeader, CalendarTable, CalendarTableRow, CalendarView, CalendarWithWeeks, CalendarYear } from '../../calendar';

const styles = `
    #test-area {
        max-width: 1240px;
    }
    .wrapper {
        display: flex;
        gap: 8px;
    }
`;


export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>Calendar cell states</span>
            <span>Calendar range</span>
            <span>Calendar show other month cells</span>

            <section>
                <Calendar className="k-calendar-range" calendarView="month" showWeek>
                    <CalendarTable showWeek showTableHead>
                        <CalendarTableRow>
                            <CalendarCell text="39" weekCell />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell text="1" />
                            <CalendarCell text="2" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="40" weekCell />
                            <CalendarCell text="3" weekend />
                            <CalendarCell text="4" hover />
                            <CalendarCell text="5" focus />
                            <CalendarCell text="6" selected />
                            <CalendarCell text="7" hover focus />
                            <CalendarCell text="8" hover selected />
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
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                        </CalendarTableRow>
                    </CalendarTable>
                </Calendar>
            </section>

            <section>
                <Calendar className="k-calendar-range" calendarView="month" showWeek titleId="cells-2-title" activeCellId="cells-2-active">
                    <CalendarTable showWeek showTableHead>
                        <CalendarTableRow>
                            <CalendarCell text="39" weekCell />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
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
                            <CalendarCell text="21" rangeStart selected />
                            <CalendarCell text="22" rangeMid />
                            <CalendarCell text="23" weekend rangeMid />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="43" weekCell />
                            <CalendarCell text="24" weekend rangeMid />
                            <CalendarCell text="25" rangeEnd focus selected />
                            <CalendarCell text="26" />
                            <CalendarCell text="27" />
                            <CalendarCell text="28" />
                            <CalendarCell text="29" />
                            <CalendarCell text="30" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="44" weekCell />
                            <CalendarCell text="31" weekend />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                        </CalendarTableRow>
                    </CalendarTable>
                </Calendar>
            </section>

            <section>
                <CalendarWithWeeks showOtherMonth titleId="cells-3-title" activeCellId="cells-3-active" />
            </section>

            <section>
                <CalendarYear titleId="cells-4-title" activeCellId="cells-4-active">
                    <CalendarTable titleId="cells-4-title" ariaActivedescendant="cells-4-active">
                        <CalendarTableRow>
                            <CalendarCell text="Normal" ariaLabel="Normal state" />
                            <CalendarCell text="Hover" ariaLabel="Hover state" hover />
                            <CalendarCell text="Focus" ariaLabel="Focus state" focus />
                            <CalendarCell text="Selected" ariaLabel="Selected state" selected />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="Hover Focus" ariaLabel="Hover and focus state" hover focus />
                            <CalendarCell text="Hover Selected" ariaLabel="Hover and selected state" hover selected />
                            <CalendarCell text="Today" ariaLabel="Today state" today id="cells-4-active" />
                            <CalendarCell text="Today focus" ariaLabel="Today with focus state" today focus />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="Today Selected" ariaLabel="Today and selected state" today selected />
                            <CalendarCell text="Today Hover" ariaLabel="Today and hover state" today hover />
                            <CalendarCell text="Today Hover Focus" ariaLabel="Today, hover, and focus state" today hover focus />
                            <CalendarCell text="Today Hover Selected" ariaLabel="Today, hover, and selected state" today hover selected />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="Disabled" ariaLabel="Disabled state" disabled />
                            <CalendarCell text="Disabled Hover" ariaLabel="Disabled and hover state" disabled hover />
                            <CalendarCell text="Disabled Focus" ariaLabel="Disabled and focus state" disabled focus />
                            <CalendarCell text="Disabled Selected" ariaLabel="Disabled and selected state" disabled selected />
                        </CalendarTableRow>
                    </CalendarTable>
                </CalendarYear>
            </section>

            <span>Disabled navigation buttons</span>
            <span></span>
            <span></span>

            <section>
                <Calendar calendarView="month" showCalendarHeader={false} titleId="cells-5-title" activeCellId="cells-5-active">
                    <CalendarHeader calendarView="month" disablePrev />
                    <CalendarView calendarView="month">
                        <CalendarTable showTableHead titleId="cells-5-title" ariaActivedescendant="cells-5-active">
                            <CalendarTableRow>
                                <CalendarCell text="10" weekend />
                                <CalendarCell text="11" />
                                <CalendarCell text="12" today id="cells-5-active" />
                                <CalendarCell text="13" />
                                <CalendarCell text="14" />
                                <CalendarCell text="15" />
                                <CalendarCell text="16" weekend />
                            </CalendarTableRow>
                        </CalendarTable>
                    </CalendarView>
                </Calendar>
            </section>

            <section>
                <Calendar calendarView="month" showCalendarHeader={false} titleId="cells-6-title" activeCellId="cells-6-active">
                    <CalendarHeader calendarView="month" disableNext />
                    <CalendarView calendarView="month">
                        <CalendarTable showTableHead titleId="cells-6-title" ariaActivedescendant="cells-6-active">
                            <CalendarTableRow>
                                <CalendarCell text="10" weekend />
                                <CalendarCell text="11" />
                                <CalendarCell text="12" today id="cells-6-active" />
                                <CalendarCell text="13" />
                                <CalendarCell text="14" />
                                <CalendarCell text="15" />
                                <CalendarCell text="16" weekend />
                            </CalendarTableRow>
                        </CalendarTable>
                    </CalendarView>
                </Calendar>
            </section>

            <section>
                <Calendar calendarView="month" showCalendarHeader={false} titleId="cells-7-title" activeCellId="cells-7-active">
                    <CalendarHeader calendarView="month" disablePrev disableNext />
                    <CalendarView calendarView="month">
                        <CalendarTable showTableHead titleId="cells-7-title" ariaActivedescendant="cells-7-active">
                            <CalendarTableRow>
                                <CalendarCell text="10" weekend />
                                <CalendarCell text="11" />
                                <CalendarCell text="12" today id="cells-7-active" />
                                <CalendarCell text="13" />
                                <CalendarCell text="14" />
                                <CalendarCell text="15" />
                                <CalendarCell text="16" weekend />
                            </CalendarTableRow>
                        </CalendarTable>
                    </CalendarView>
                </Calendar>
            </section>

        </div>
    </>
);
