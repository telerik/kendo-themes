import { Calendar, CalendarCell, CalendarWithWeeks, CalendarYear } from '../../calendar';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>Calendar cell states</span>
            <span>Calendar range</span>
            <span>Calendar show other month cells</span>

            <section>
                <Calendar className="k-calendar-range" calendarView="month" showWeek showTableHead>
                    <tr className="k-calendar-tr">
                        <CalendarCell text="39" weekCell />
                        <CalendarCell empty />
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
                        <CalendarCell text="8" hover />
                        <CalendarCell text="9" focus />
                        <CalendarCell text="10" selected />
                        <CalendarCell text="11" hover focus />
                        <CalendarCell text="12" hover selected />
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
                        <CalendarCell empty />
                        <CalendarCell empty />
                        <CalendarCell empty />
                    </tr>
                    <tr className="k-calendar-tr">
                        <CalendarCell text="44" weekCell />
                        <CalendarCell empty />
                        <CalendarCell empty />
                        <CalendarCell empty />
                        <CalendarCell empty />
                        <CalendarCell empty />
                        <CalendarCell empty />
                        <CalendarCell empty />
                    </tr>
                </Calendar>
            </section>

            <section>
                <Calendar className="k-calendar-range" calendarView="month" showWeek showTableHead>
                    <tr className="k-calendar-tr">
                        <CalendarCell text="39" weekCell />
                        <CalendarCell empty />
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
                        <CalendarCell text="25" rangeStart selected />
                        <CalendarCell text="26" rangeMid />
                        <CalendarCell text="27" weekend rangeMid />
                    </tr>
                    <tr className="k-calendar-tr">
                        <CalendarCell text="43" weekCell />
                        <CalendarCell text="28" weekend rangeMid />
                        <CalendarCell text="29" rangeEnd focus selected />
                        <CalendarCell text="30" />
                        <CalendarCell text="31" />
                        <CalendarCell empty />
                        <CalendarCell empty />
                        <CalendarCell empty />
                    </tr>
                    <tr className="k-calendar-tr">
                        <CalendarCell text="44" weekCell />
                        <CalendarCell empty />
                        <CalendarCell empty />
                        <CalendarCell empty />
                        <CalendarCell empty />
                        <CalendarCell empty />
                        <CalendarCell empty />
                        <CalendarCell empty />
                    </tr>
                </Calendar>
            </section>

            <section>
                <CalendarWithWeeks showOtherMonth />
            </section>

            <section>
                <CalendarYear>
                    <tr className="k-calendar-tr">
                        <CalendarCell text="Normal" />
                        <CalendarCell text="Hover" hover/>
                        <CalendarCell text="Focus" focus/>
                        <CalendarCell text="Selected" selected/>
                    </tr>
                    <tr className="k-calendar-tr">
                        <CalendarCell text="Hover Focus" hover focus/>
                        <CalendarCell text="Hover Selected" hover selected/>
                        <CalendarCell text="Today" today/>
                        <CalendarCell text="Today focus" today focus/>
                    </tr>
                    <tr className="k-calendar-tr">
                        <CalendarCell text="Today Selected" today selected/>
                        <CalendarCell text="Today Hover" today hover/>
                        <CalendarCell text="Today Hover Focus" today hover focus/>
                        <CalendarCell text="Today Hover Selected" today hover selected/>
                    </tr>
                </CalendarYear>
            </section>

        </div>
    </>
);
