import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { Calendar, CalendarTable, CalendarTableRow, CalendarCell } from '../../calendar';
import { Toolbar } from '../../toolbar';
import { Scheduler, SchedulerBody } from '../index';


export const SchedulerFlexYear = ({ style, ...props }: any) => (
    <Scheduler
        style={style}
        layout="flex"
        view="year"
        toolbar={
            <>
                <Toolbar className="k-scheduler-toolbar">
                    <ButtonGroup className="k-scheduler-navigation">
                        <Button className="k-group-start">Today</Button>
                        <Button icon="caret-alt-left"></Button>
                        <Button className="k-group-end" icon="caret-alt-right"></Button>
                    </ButtonGroup>
                    <Button icon="calendar" className="k-nav-current" fillMode="flat">
                        2021
                    </Button>
                    <span className="k-spacer"></span>
                    <ButtonGroup className="k-scheduler-views">
                        <Button className="k-group-start">Day</Button>
                        <Button>Week</Button>
                        <Button>Month</Button>
                        <Button className="k-group-end" selected>Year</Button>
                    </ButtonGroup>
                </Toolbar>
            </>
        }
        children={
            <SchedulerBody as="div">
                <Calendar showCalendarHeader={false} calendarView="month" className="k-calendar-range">
                    <CalendarTable showTableHead calendarCaption="January 2020">
                        <CalendarTableRow>
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell dayIndicator text="1" />
                            <CalendarCell dayIndicator text="2" />
                            <CalendarCell dayIndicator text="3" />
                            <CalendarCell text="4" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell dayIndicator text="5" weekend />
                            <CalendarCell text="6" />
                            <CalendarCell text="7" />
                            <CalendarCell dayIndicator text="8" />
                            <CalendarCell text="9" />
                            <CalendarCell text="10" />
                            <CalendarCell text="11" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="12" weekend />
                            <CalendarCell dayIndicator text="13" />
                            <CalendarCell text="14" />
                            <CalendarCell text="15" />
                            <CalendarCell text="16" />
                            <CalendarCell text="17" />
                            <CalendarCell text="18" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="19" weekend />
                            <CalendarCell text="20" />
                            <CalendarCell dayIndicator text="21" />
                            <CalendarCell text="22" />
                            <CalendarCell text="23" />
                            <CalendarCell text="24" />
                            <CalendarCell text="25" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="26" weekend />
                            <CalendarCell text="27" />
                            <CalendarCell text="28" />
                            <CalendarCell text="29" />
                            <CalendarCell text="30" />
                            <CalendarCell dayIndicator text="31" />
                            <CalendarCell empty />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                        </CalendarTableRow>
                    </CalendarTable>
                    <CalendarTable showTableHead calendarCaption="February 2020">
                        <CalendarTableRow>
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell text="1" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="2" weekend />
                            <CalendarCell text="3" />
                            <CalendarCell text="4" />
                            <CalendarCell text="5" />
                            <CalendarCell text="6" />
                            <CalendarCell text="7" />
                            <CalendarCell text="8" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="9" weekend />
                            <CalendarCell text="10" />
                            <CalendarCell text="11" />
                            <CalendarCell text="12" />
                            <CalendarCell text="13" />
                            <CalendarCell text="14" />
                            <CalendarCell text="15" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="16" weekend />
                            <CalendarCell text="17" />
                            <CalendarCell text="18" />
                            <CalendarCell text="19" />
                            <CalendarCell text="20" />
                            <CalendarCell text="21" />
                            <CalendarCell text="22" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="23" weekend />
                            <CalendarCell text="24" />
                            <CalendarCell text="25" />
                            <CalendarCell text="26" />
                            <CalendarCell text="27" />
                            <CalendarCell text="28" />
                            <CalendarCell text="29" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                        </CalendarTableRow>
                    </CalendarTable>
                    <CalendarTable showTableHead calendarCaption="March 2020">
                        <CalendarTableRow>
                            <CalendarCell text="1" weekend />
                            <CalendarCell text="2" />
                            <CalendarCell text="3" />
                            <CalendarCell text="4" />
                            <CalendarCell text="5" />
                            <CalendarCell text="6" />
                            <CalendarCell text="7" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="8" weekend />
                            <CalendarCell text="9" />
                            <CalendarCell text="10" />
                            <CalendarCell text="11" />
                            <CalendarCell text="12" />
                            <CalendarCell text="13" />
                            <CalendarCell text="14" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="15" weekend />
                            <CalendarCell text="16" />
                            <CalendarCell text="17" />
                            <CalendarCell text="18" />
                            <CalendarCell text="19" />
                            <CalendarCell text="20" />
                            <CalendarCell text="21" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="22" weekend />
                            <CalendarCell text="23" />
                            <CalendarCell text="24" />
                            <CalendarCell text="25" />
                            <CalendarCell text="26" />
                            <CalendarCell text="27" />
                            <CalendarCell text="28" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="29" weekend />
                            <CalendarCell text="30" />
                            <CalendarCell text="31" />
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
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                        </CalendarTableRow>
                    </CalendarTable>
                    <CalendarTable showTableHead calendarCaption="April 2020">
                        <CalendarTableRow>
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell text="1" />
                            <CalendarCell text="2" />
                            <CalendarCell text="3" />
                            <CalendarCell text="4" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="5" weekend />
                            <CalendarCell text="6" />
                            <CalendarCell text="7" />
                            <CalendarCell text="8" />
                            <CalendarCell text="9" />
                            <CalendarCell text="10" />
                            <CalendarCell text="11" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="12" weekend />
                            <CalendarCell text="13" />
                            <CalendarCell text="14" />
                            <CalendarCell text="15" />
                            <CalendarCell text="16" />
                            <CalendarCell text="17" />
                            <CalendarCell text="18" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="19" weekend />
                            <CalendarCell text="20" />
                            <CalendarCell text="21" />
                            <CalendarCell text="22" />
                            <CalendarCell text="23" />
                            <CalendarCell text="24" />
                            <CalendarCell text="25" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="26" weekend />
                            <CalendarCell text="27" />
                            <CalendarCell text="28" />
                            <CalendarCell text="29" />
                            <CalendarCell text="30" />
                            <CalendarCell empty />
                            <CalendarCell empty />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                        </CalendarTableRow>
                    </CalendarTable>
                    <CalendarTable showTableHead calendarCaption="May 2020">
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
                            <CalendarCell text="12" />
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
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                        </CalendarTableRow>
                    </CalendarTable>
                    <CalendarTable showTableHead calendarCaption="June 2020">
                        <CalendarTableRow>
                            <CalendarCell empty />
                            <CalendarCell text="1" />
                            <CalendarCell text="2" />
                            <CalendarCell text="3" />
                            <CalendarCell text="4" />
                            <CalendarCell text="5" />
                            <CalendarCell text="6" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="7" weekend />
                            <CalendarCell text="8" />
                            <CalendarCell text="9" />
                            <CalendarCell text="10" />
                            <CalendarCell text="11" />
                            <CalendarCell text="12" />
                            <CalendarCell text="13" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="14" weekend />
                            <CalendarCell text="15" />
                            <CalendarCell text="16" />
                            <CalendarCell text="17" />
                            <CalendarCell text="18" />
                            <CalendarCell text="19" />
                            <CalendarCell text="20" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="21" weekend />
                            <CalendarCell text="22" />
                            <CalendarCell text="23" />
                            <CalendarCell text="24" />
                            <CalendarCell text="25" />
                            <CalendarCell text="26" />
                            <CalendarCell text="27" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="28" weekend />
                            <CalendarCell text="29" />
                            <CalendarCell text="30" />
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
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                        </CalendarTableRow>
                    </CalendarTable>
                    <CalendarTable showTableHead calendarCaption="July 2020">
                        <CalendarTableRow>
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell text="1" />
                            <CalendarCell text="2" />
                            <CalendarCell text="3" />
                            <CalendarCell text="4" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="5" weekend />
                            <CalendarCell text="6" />
                            <CalendarCell text="7" />
                            <CalendarCell text="8" />
                            <CalendarCell text="9" />
                            <CalendarCell text="10" />
                            <CalendarCell text="11" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="12" weekend />
                            <CalendarCell text="13" />
                            <CalendarCell text="14" />
                            <CalendarCell text="15" />
                            <CalendarCell text="16" />
                            <CalendarCell text="17" />
                            <CalendarCell text="18" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="19" weekend />
                            <CalendarCell text="20" />
                            <CalendarCell text="21" />
                            <CalendarCell text="22" />
                            <CalendarCell text="23" />
                            <CalendarCell text="24" />
                            <CalendarCell text="25" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="26" weekend />
                            <CalendarCell text="27" />
                            <CalendarCell text="28" />
                            <CalendarCell text="29" />
                            <CalendarCell text="30" />
                            <CalendarCell text="31" />
                            <CalendarCell empty />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                        </CalendarTableRow>
                    </CalendarTable>
                    <CalendarTable showTableHead calendarCaption="August 2020">
                        <CalendarTableRow>
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell text="1" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="2" weekend />
                            <CalendarCell text="3" />
                            <CalendarCell text="4" />
                            <CalendarCell text="5" />
                            <CalendarCell text="6" />
                            <CalendarCell text="7" />
                            <CalendarCell text="8" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="9" weekend />
                            <CalendarCell text="10" />
                            <CalendarCell text="11" />
                            <CalendarCell text="12" />
                            <CalendarCell text="13" />
                            <CalendarCell text="14" />
                            <CalendarCell text="15" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="16" weekend />
                            <CalendarCell text="17" />
                            <CalendarCell text="18" />
                            <CalendarCell text="19" />
                            <CalendarCell text="20" />
                            <CalendarCell text="21" />
                            <CalendarCell text="22" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="23" weekend />
                            <CalendarCell text="24" />
                            <CalendarCell text="25" />
                            <CalendarCell text="26" />
                            <CalendarCell text="27" />
                            <CalendarCell text="28" />
                            <CalendarCell text="29" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="30" weekend />
                            <CalendarCell text="31" />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                        </CalendarTableRow>
                    </CalendarTable>
                    <CalendarTable showTableHead calendarCaption="September 2020">
                        <CalendarTableRow>
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell text="1" />
                            <CalendarCell text="2" />
                            <CalendarCell text="3" />
                            <CalendarCell text="4" />
                            <CalendarCell text="5" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="6" weekend />
                            <CalendarCell text="7" />
                            <CalendarCell text="8" />
                            <CalendarCell text="9" />
                            <CalendarCell text="10" />
                            <CalendarCell text="11" />
                            <CalendarCell text="12" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="13" weekend />
                            <CalendarCell text="14" />
                            <CalendarCell text="15" />
                            <CalendarCell text="16" />
                            <CalendarCell text="17" />
                            <CalendarCell text="18" />
                            <CalendarCell text="19" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="20" weekend />
                            <CalendarCell text="21" />
                            <CalendarCell text="22" />
                            <CalendarCell text="23" />
                            <CalendarCell text="24" />
                            <CalendarCell text="25" />
                            <CalendarCell text="26" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="27" weekend />
                            <CalendarCell text="28" />
                            <CalendarCell text="29" />
                            <CalendarCell text="30" />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                        </CalendarTableRow>
                    </CalendarTable>
                    <CalendarTable showTableHead calendarCaption="October 2020">
                        <CalendarTableRow>
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell text="1" />
                            <CalendarCell text="2" />
                            <CalendarCell text="3" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="4" weekend />
                            <CalendarCell text="5" />
                            <CalendarCell text="6" />
                            <CalendarCell text="7" />
                            <CalendarCell text="8" />
                            <CalendarCell text="9" />
                            <CalendarCell text="10" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="11" weekend />
                            <CalendarCell text="12" />
                            <CalendarCell text="13" />
                            <CalendarCell text="14" />
                            <CalendarCell text="15" />
                            <CalendarCell text="16" />
                            <CalendarCell text="17" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="18" weekend />
                            <CalendarCell text="19" />
                            <CalendarCell text="20" />
                            <CalendarCell text="21" />
                            <CalendarCell text="22" />
                            <CalendarCell text="23" />
                            <CalendarCell text="24" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="25" weekend />
                            <CalendarCell text="26" />
                            <CalendarCell text="27" />
                            <CalendarCell text="28" />
                            <CalendarCell text="29" />
                            <CalendarCell text="30" />
                            <CalendarCell text="31" />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                        </CalendarTableRow>
                    </CalendarTable>
                    <CalendarTable showTableHead calendarCaption="November 2020">
                        <CalendarTableRow>
                            <CalendarCell text="1" weekend />
                            <CalendarCell text="2" />
                            <CalendarCell text="3" />
                            <CalendarCell text="4" />
                            <CalendarCell text="5" />
                            <CalendarCell text="6" />
                            <CalendarCell text="7" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="8" weekend />
                            <CalendarCell text="9" />
                            <CalendarCell text="10" />
                            <CalendarCell text="11" />
                            <CalendarCell text="12" />
                            <CalendarCell text="13" />
                            <CalendarCell text="14" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="15" weekend />
                            <CalendarCell text="16" />
                            <CalendarCell text="17" />
                            <CalendarCell text="18" />
                            <CalendarCell text="19" />
                            <CalendarCell text="20" />
                            <CalendarCell text="21" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="22" weekend />
                            <CalendarCell text="23" />
                            <CalendarCell text="24" />
                            <CalendarCell text="25" />
                            <CalendarCell text="26" />
                            <CalendarCell text="27" />
                            <CalendarCell text="28" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="29" weekend />
                            <CalendarCell text="30" />
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
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                        </CalendarTableRow>
                    </CalendarTable>
                    <CalendarTable showTableHead calendarCaption="December 2020">
                        <CalendarTableRow>
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell text="1" />
                            <CalendarCell text="2" />
                            <CalendarCell text="3" />
                            <CalendarCell text="4" />
                            <CalendarCell text="5" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="6" weekend />
                            <CalendarCell text="7" />
                            <CalendarCell text="8" />
                            <CalendarCell text="9" />
                            <CalendarCell text="10" />
                            <CalendarCell text="11" />
                            <CalendarCell text="12" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="13" weekend />
                            <CalendarCell text="14" />
                            <CalendarCell text="15" />
                            <CalendarCell text="16" />
                            <CalendarCell text="17" />
                            <CalendarCell text="18" />
                            <CalendarCell text="19" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="20" weekend />
                            <CalendarCell text="21" />
                            <CalendarCell text="22" />
                            <CalendarCell text="23" />
                            <CalendarCell text="24" />
                            <CalendarCell text="25" />
                            <CalendarCell text="26" weekend />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell text="27" weekend />
                            <CalendarCell text="28" />
                            <CalendarCell text="29" />
                            <CalendarCell text="30" />
                            <CalendarCell text="31" />
                            <CalendarCell empty />
                            <CalendarCell empty />
                        </CalendarTableRow>
                        <CalendarTableRow>
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                            <CalendarCell empty />
                        </CalendarTableRow>
                    </CalendarTable>
                </Calendar>
            </SchedulerBody>
        }
        {...props}
    />
);

export default SchedulerFlexYear;
