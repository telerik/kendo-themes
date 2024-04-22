import { Calendar, CalendarCell, CalendarTable, CalendarTableRow, CalendarWithWeeks, CalendarYear } from '../../calendar';


export default () => (
    <>
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
                <CalendarWithWeeks showOtherMonth />
            </section>

            <section>
                <CalendarYear>
                    <CalendarTable>
                        <CalendarTableRow>
                            <CalendarCell text="Normal" />
                            <CalendarCell text="Hover" hover />
                            <CalendarCell text="Focus" focus />
                            <CalendarCell text="Selected" selected />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="Hover Focus" hover focus />
                            <CalendarCell text="Hover Selected" hover selected />
                            <CalendarCell text="Today" today />
                            <CalendarCell text="Today focus" today focus />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="Today Selected" today selected />
                            <CalendarCell text="Today Hover" today hover />
                            <CalendarCell text="Today Hover Focus" today hover focus />
                            <CalendarCell text="Today Hover Selected" today hover selected />
                        </CalendarTableRow>
                    </CalendarTable>
                </CalendarYear>
            </section>

        </div>
    </>
);
