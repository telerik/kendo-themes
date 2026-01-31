import {
    CalendarInfiniteNormal,
    CalendarInfiniteYear,
    CalendarInfiniteDecade,
    CalendarInfiniteCentury,
    CalendarInfiniteWeekNumber,
    CalendarTbody,
    CalendarTableRow,
    CalendarCell,
    CalendarCaptionCell } from '../index';


const styles = `
    #test-area {
        max-width: 1240px;
    }

    #empty-cells .k-calendar-table {
        transform: translateY(-35px);
    }

    #empty-cells .k-calendar-navigation .k-scrollable {
        transform: translateY(138px);
    }

`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <div>infinite calendar month</div>
                <CalendarInfiniteNormal id="infinite-1" />
            </section>

            <section>
                <div>infinite calendar month without navigation bar</div>
                <CalendarInfiniteNormal id="infinite-2" showNavigation={false} />
            </section>

            <section>
                <div>infinite calendar - week number column</div>
                <CalendarInfiniteWeekNumber id="infinite-3" />
            </section>

            <section>
                <div>infinite calendar year</div>
                <CalendarInfiniteYear id="infinite-4" activeCellId="infinite-4-active" />
            </section>

            <section>
                <div>infinite calendar decade</div>
                <CalendarInfiniteDecade id="infinite-5" activeCellId="infinite-5-active" />
            </section>

            <section>
                <div>infinite calendar century</div>
                <CalendarInfiniteCentury id="infinite-6" activeCellId="infinite-6-active" />
            </section>

            <section>
                <div>infinite calendar empty cells</div>
                <CalendarInfiniteYear
                    id="empty-cells"
                    activeCellId="empty-cells-active"
                    calendarTitleText="2018"
                    showWeekdays={false}
                    navigationItems={[ '2018', '2019' ]}
                    children={
                        <>
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <CalendarTbody>
                                <CalendarTableRow>
                                    <CalendarCaptionCell text="2018" scope="col" colSpan={4} />
                                </CalendarTableRow>
                                <CalendarTableRow>
                                    <CalendarCell empty />
                                    <CalendarCell empty />
                                    <CalendarCell empty />
                                    <CalendarCell empty />
                                </CalendarTableRow>
                                <CalendarTableRow>
                                    <CalendarCell empty />
                                    <CalendarCell empty />
                                    <CalendarCell empty />
                                    <CalendarCell empty />
                                </CalendarTableRow>
                                <CalendarTableRow>
                                    <CalendarCell empty />
                                    <CalendarCell empty />
                                    <CalendarCell text="Nov" ariaLabel="November" />
                                    <CalendarCell text="Dec" ariaLabel="December" />
                                </CalendarTableRow>
                            </CalendarTbody>
                            <CalendarTbody>
                                <CalendarTableRow>
                                    <CalendarCaptionCell text="2019" scope="col" colSpan={4} />
                                </CalendarTableRow>
                                <CalendarTableRow>
                                    <CalendarCell text="Jan" ariaLabel="January" />
                                    <CalendarCell text="Feb" ariaLabel="February" />
                                    <CalendarCell text="Mar" ariaLabel="March" today />
                                    <CalendarCell empty />
                                </CalendarTableRow>
                                <CalendarTableRow>
                                    <CalendarCell empty />
                                    <CalendarCell empty />
                                    <CalendarCell empty />
                                    <CalendarCell empty />
                                    <CalendarCell empty />
                                </CalendarTableRow>
                                <CalendarTableRow>
                                    <CalendarCell empty />
                                    <CalendarCell empty />
                                    <CalendarCell empty />
                                    <CalendarCell empty />
                                </CalendarTableRow>
                            </CalendarTbody>
                        </>
                    }/>
            </section>

            <section>
                <div>infinite calendar - week number column with selected range</div>
                <CalendarInfiniteWeekNumber
                    id="infinite-7"
                    activeCellId="infinite-7-active"
                    className="k-calendar-range"
                    children={
                        <>
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <CalendarTbody>
                                <CalendarTableRow>
                                    <CalendarCaptionCell scope="col" colSpan={7} text="January 2021"></CalendarCaptionCell>
                                </CalendarTableRow>
                                <CalendarTableRow>
                                    <CalendarCell weekCell text="1"></CalendarCell>
                                    <CalendarCell empty></CalendarCell>
                                    <CalendarCell empty></CalendarCell>
                                    <CalendarCell empty></CalendarCell>
                                    <CalendarCell empty></CalendarCell>
                                    <CalendarCell empty></CalendarCell>
                                    <CalendarCell text="1"></CalendarCell>
                                    <CalendarCell text="2" weekend></CalendarCell>
                                </CalendarTableRow>
                                <CalendarTableRow>
                                    <CalendarCell weekCell text="2"></CalendarCell>
                                    <CalendarCell text="3" weekend></CalendarCell>
                                    <CalendarCell text="4"></CalendarCell>
                                    <CalendarCell text="5"></CalendarCell>
                                    <CalendarCell text="6"></CalendarCell>
                                    <CalendarCell text="7"></CalendarCell>
                                    <CalendarCell text="8"></CalendarCell>
                                    <CalendarCell text="9" weekend></CalendarCell>
                                </CalendarTableRow>
                                <CalendarTableRow>
                                    <CalendarCell weekCell text="3"></CalendarCell>
                                    <CalendarCell text="10" weekend></CalendarCell>
                                    <CalendarCell text="11"></CalendarCell>
                                    <CalendarCell text="12"></CalendarCell>
                                    <CalendarCell text="13"></CalendarCell>
                                    <CalendarCell text="14"></CalendarCell>
                                    <CalendarCell text="15"></CalendarCell>
                                    <CalendarCell text="16" weekend></CalendarCell>
                                </CalendarTableRow>
                                <CalendarTableRow>
                                    <CalendarCell weekCell text="4"></CalendarCell>
                                    <CalendarCell text="17" weekend></CalendarCell>
                                    <CalendarCell text="18"></CalendarCell>
                                    <CalendarCell text="19"></CalendarCell>
                                    <CalendarCell text="20" rangeStart hover selected></CalendarCell>
                                    <CalendarCell text="21" rangeMid></CalendarCell>
                                    <CalendarCell text="22" rangeMid></CalendarCell>
                                    <CalendarCell text="23" weekend rangeMid></CalendarCell>
                                </CalendarTableRow>
                                <CalendarTableRow>
                                    <CalendarCell weekCell text="5"></CalendarCell>
                                    <CalendarCell text="24" weekend rangeMid></CalendarCell>
                                    <CalendarCell text="25" rangeEnd hover selected></CalendarCell>
                                    <CalendarCell text="26"></CalendarCell>
                                    <CalendarCell text="27"></CalendarCell>
                                    <CalendarCell text="28"></CalendarCell>
                                    <CalendarCell text="29"></CalendarCell>
                                    <CalendarCell text="30" weekend></CalendarCell>
                                </CalendarTableRow>
                                <CalendarTableRow>
                                    <CalendarCell weekCell text="6"></CalendarCell>
                                    <CalendarCell text="31" weekend></CalendarCell>
                                    <CalendarCell empty></CalendarCell>
                                    <CalendarCell empty></CalendarCell>
                                    <CalendarCell empty></CalendarCell>
                                    <CalendarCell empty></CalendarCell>
                                    <CalendarCell empty></CalendarCell>
                                    <CalendarCell empty></CalendarCell>
                                </CalendarTableRow>
                            </CalendarTbody>
                            <CalendarTbody>
                                <CalendarTableRow>
                                    <CalendarCaptionCell scope="col" colSpan={7} text="February 2021"></CalendarCaptionCell>
                                </CalendarTableRow>
                            </CalendarTbody>
                        </>
                    }/>
            </section>

        </div>
    </>
);
