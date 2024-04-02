import { Button } from "../../button";
import { ButtonGroup } from "../../button-group";
import { Toolbar } from "../../toolbar";
import { SchedulerBody, SchedulerCell, SchedulerContent, SchedulerEvent, SchedulerHead, SchedulerHeader, SchedulerTable, SchedulerTimeline, SchedulerTimes, SchedulerToolbar, SchedulerWeek } from "..";
import { Icon } from "../../icon";

export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <SchedulerWeek
                toolbar={
                    <SchedulerToolbar>
                        <ButtonGroup className="k-scheduler-navigation">
                            <Button className="k-group-start">Today</Button>
                            <Button icon="caret-alt-left"></Button>
                            <Button className="k-group-end" icon="caret-alt-right"></Button>
                        </ButtonGroup>
                        <Button icon="calendar" className="k-nav-current" fillMode="flat" >
                        Monday, June 10, 2013 - Friday, June 14, 2013
                        </Button>
                        <span className="k-spacer"></span>
                        <ButtonGroup className="k-scheduler-views">
                            <Button className="k-group-start">Day</Button>
                            <Button selected>Week</Button>
                            <Button>Month</Button>
                            <Button>Timeline</Button>
                            <Button className="k-group-end">Agenda</Button>
                        </ButtonGroup>
                    </SchedulerToolbar>
                }
                footer={
                    <>
                        <SchedulerToolbar footer>
                            <Button icon="clock" className="k-scheduler-fullday">Show business hours</Button>
                        </SchedulerToolbar>
                    </>
                }
                children={
                    <>
                        <tbody>
                            <SchedulerHead as="tr">
                                <td>
                                    <SchedulerTimes>
                                        <SchedulerTable>
                                            <tbody>
                                                <tr style={{ height: "37px" }}>
                                                    <SchedulerCell as="th" />
                                                </tr>
                                                <tr style={{ height: "72px" }}>
                                                    <SchedulerCell as="th" allDay>all day</SchedulerCell>
                                                </tr>
                                            </tbody>
                                        </SchedulerTable>
                                    </SchedulerTimes>
                                </td>
                                <td>
                                    <SchedulerHeader>
                                        <SchedulerTable>
                                            <tbody>
                                                <tr>
                                                    <SchedulerCell as="th" text="Mon 6/10" colspan={1} />
                                                    <SchedulerCell as="th" text="Tue 6/11" colspan={1} />
                                                    <SchedulerCell as="th" text="Wed 6/12" colspan={1} />
                                                    <SchedulerCell as="th" text="Thu 6/13" colspan={1} />
                                                    <SchedulerCell as="th" text="Fri 6/14" colspan={1} />
                                                </tr>
                                            </tbody>
                                        </SchedulerTable>
                                        <div style={{ position: "relative" }}>
                                            <SchedulerTable className="k-scheduler-header-all-day">
                                                <tbody>
                                                    <tr style={{ height: "72px" }}>
                                                        <SchedulerCell as="td" />
                                                        <SchedulerCell as="td" />
                                                        <SchedulerCell as="td" />
                                                        <SchedulerCell as="td" />
                                                        <SchedulerCell as="td" />
                                                    </tr>
                                                </tbody>
                                            </SchedulerTable>
                                            <SchedulerEvent
                                                resizable="horizontal"
                                                eventPrefix={
                                                    <Icon icon="caret-alt-left"></Icon>
                                                }
                                                eventSuffix={
                                                    <>
                                                        <a className="k-link k-event-delete"><Icon icon="x"></Icon></a>
                                                        <Icon icon="caret-alt-right"></Icon>
                                                    </>
                                                }>
                                                <div>
                                                    <div className="k-event-template">Two Weeks in NZ</div>
                                                </div>
                                            </SchedulerEvent>
                                        </div>
                                    </SchedulerHeader>
                                </td>
                            </SchedulerHead>
                            <SchedulerBody as="tr">
                                <td>
                                    <SchedulerTimes style={{ height: "195px" }}>
                                        <div className="k-current-time k-current-time-arrow-right" style={{ left: "0px", top: "115px" }}></div>
                                        <SchedulerTable style={{ height: "1258px" }} >
                                            <tbody>
                                                <tr>
                                                    <SchedulerCell as="th" rowspan={1}>7:00 AM</SchedulerCell>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th"rowspan={1} cellType={[ "slot" ]} />
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th" rowspan={1}>8:00 AM</SchedulerCell>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th"rowspan={1} cellType={[ "slot" ]} />
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th" rowspan={1}>9:00 AM</SchedulerCell>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th"rowspan={1} cellType={[ "slot" ]} />
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th" rowspan={1}>10:00 AM</SchedulerCell>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th"rowspan={1} cellType={[ "slot" ]} />
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th" rowspan={1}>11:00 AM</SchedulerCell>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th"rowspan={1} cellType={[ "slot" ]} />
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th" rowspan={1}>12:00 PM</SchedulerCell>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th"rowspan={1} cellType={[ "slot" ]} />
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th" rowspan={1}>1:00 PM</SchedulerCell>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th"rowspan={1} cellType={[ "slot" ]} />
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th" rowspan={1}>2:00 PM</SchedulerCell>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th"rowspan={1} cellType={[ "slot" ]} />
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th" rowspan={1}>3:00 PM</SchedulerCell>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th"rowspan={1} cellType={[ "slot" ]} />
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th" rowspan={1}>4:00 PM</SchedulerCell>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th"rowspan={1} cellType={[ "slot" ]} />
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th" rowspan={1}>5:00 PM</SchedulerCell>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th"rowspan={1} cellType={[ "slot" ]} />
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th" rowspan={1}>6:00 PM</SchedulerCell>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th"rowspan={1} cellType={[ "slot" ]} />
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th" rowspan={1}>7:00 PM</SchedulerCell>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th"rowspan={1} cellType={[ "slot" ]} />
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th" rowspan={1}>8:00 PM</SchedulerCell>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th"rowspan={1} cellType={[ "slot" ]} />
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th" rowspan={1}>9:00 PM</SchedulerCell>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th"rowspan={1} cellType={[ "slot" ]} />
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th" rowspan={1}>10:00 PM</SchedulerCell>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th"rowspan={1} cellType={[ "slot" ]} />
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th" rowspan={1}>11:00 PM</SchedulerCell>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th"rowspan={1} cellType={[ "slot" ]} />
                                                </tr>
                                            </tbody>
                                        </SchedulerTable>
                                    </SchedulerTimes>
                                </td>
                                <td>
                                    <SchedulerContent style={{ height: "195px" }} >
                                        <div className="k-current-time" style={{ top: "115px", height: "1px", right: "0px", width: "888px", left: "0px;" }}></div>
                                        <SchedulerTable>
                                            <tbody>
                                                <tr className="k-middle-row">
                                                    <SchedulerCell as="td" className="k-nonwork-hour" />
                                                    <SchedulerCell as="td" className="k-nonwork-hour" />
                                                    <SchedulerCell as="td" className="k-nonwork-hour" />
                                                    <SchedulerCell as="td" className="k-nonwork-hour" />
                                                    <SchedulerCell as="td" className="k-nonwork-hour" />
                                                </tr>
                                                <tr className="k-middle-row">
                                                    <SchedulerCell as="td" className="k-nonwork-hour" />
                                                    <SchedulerCell as="td" className="k-nonwork-hour" />
                                                    <SchedulerCell as="td" className="k-nonwork-hour" />
                                                    <SchedulerCell as="td" className="k-nonwork-hour" />
                                                    <SchedulerCell as="td" className="k-nonwork-hour" />
                                                </tr>
                                                <tr className="k-middle-row">
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                </tr>
                                                <tr className="k-middle-row">
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                </tr>
                                                <tr className="k-middle-row">
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                </tr>
                                                <tr className="k-middle-row">
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                </tr>
                                                <tr className="k-middle-row">
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                </tr>
                                                <tr className="k-middle-row">
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                </tr>
                                                <tr className="k-middle-row">
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                </tr>
                                                <tr className="k-middle-row">
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                </tr>
                                                <tr className="k-middle-row">
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                </tr>
                                                <tr className="k-middle-row">
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                </tr>
                                                <tr className="k-middle-row">
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                </tr>
                                                <tr className="k-middle-row">
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                </tr>
                                                <tr className="k-middle-row">
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                </tr>
                                                <tr className="k-middle-row">
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                </tr>
                                                <tr className="k-middle-row">
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                </tr>
                                                <tr className="k-middle-row">
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                                                </tr>
                                            </tbody>
                                        </SchedulerTable>
                                    </SchedulerContent>
                                </td>
                            </SchedulerBody>
                        </tbody>
                    </>
                }
            />

            <SchedulerTimeline
                toolbar={
                    <>
                        <SchedulerToolbar>
                            <ButtonGroup className="k-scheduler-navigation">
                                <Button className="k-group-start">Today</Button>
                                <Button icon="caret-alt-left"></Button>
                                <Button className="k-group-end" icon="caret-alt-right"></Button>
                            </ButtonGroup>
                            <Button icon="calendar" className="k-nav-current" fillMode="flat" >
                        Monday, February 18, 2019
                            </Button>
                            <span className="k-spacer"></span>
                            <ButtonGroup className="k-scheduler-views">
                                <Button className="k-group-start">Day</Button>
                                <Button>Week</Button>
                                <Button>Month</Button>
                                <Button selected>Timeline</Button>
                                <Button className="k-group-end">Agenda</Button>
                            </ButtonGroup>
                        </SchedulerToolbar>
                    </>
                }
                footer={
                    <>
                        <Toolbar className="k-scheduler-footer">
                            <Button icon="clock" className="k-scheduler-fullday">Show business hours</Button>
                        </Toolbar>
                    </>
                }
                children={
                    <>
                        <tbody>
                            <SchedulerHead as="tr">
                                <td>
                                    <SchedulerTimes>
                                        <SchedulerTable>
                                            <tbody>
                                                <tr style={{ height: "31px" }}>
                                                    <SchedulerCell as="th" />
                                                </tr>
                                                <tr style={{ height: "31px" }}>
                                                    <SchedulerCell as="th" />
                                                </tr>
                                            </tbody>
                                        </SchedulerTable>
                                    </SchedulerTimes>
                                </td>
                                <td>
                                    <SchedulerHeader>
                                        <div className="k-current-time k-current-time-arrow-down" style={{ left: "524.534px", top: "36px" }} ></div>
                                        <SchedulerTable>
                                            <tbody>
                                                <tr>
                                                    <SchedulerCell as="th" text="Monday, February 18, 2019" colspan={8} />
                                                </tr>
                                                <tr>
                                                    <SchedulerCell as="th" text="7:00 AM" colspan={2} />
                                                    <SchedulerCell as="th" text="8:00 AM" colspan={2} />
                                                    <SchedulerCell as="th" text="9:00 AM" colspan={2} />
                                                    <SchedulerCell as="th" text="10:00 AM" colspan={2} />
                                                </tr>
                                            </tbody>
                                        </SchedulerTable>
                                    </SchedulerHeader>
                                </td>
                            </SchedulerHead>
                            <SchedulerBody as="tr">
                                <td>
                                    <SchedulerTimes style={{ height: "100px" }}>
                                        <SchedulerTable>
                                            <tbody>
                                                <tr style={{ height: "50px" }}>
                                                    <SchedulerCell as="th" rowspan={1}>All events</SchedulerCell>
                                                </tr>
                                            </tbody>
                                        </SchedulerTable>
                                    </SchedulerTimes>
                                </td>
                                <td>
                                    <SchedulerContent style={{ height: "100px" }}>
                                        <div className="k-current-time" style={{ left: "528px", width: "1px", height: "100px", top: '0px' }} ></div>
                                        <SchedulerTable style={{ width: '100%' }}>
                                            <tbody>
                                                <tr style={{ height: '50px' }}>
                                                    <SchedulerCell as="td" className="k-today k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-today k-nonwork-hour"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-today"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-today"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-today"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-today"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-today"></SchedulerCell>
                                                    <SchedulerCell as="td" className="k-today"></SchedulerCell>
                                                </tr>
                                            </tbody>
                                        </SchedulerTable>
                                    </SchedulerContent>
                                </td>
                            </SchedulerBody>
                        </tbody>
                    </>
                }

            />
        </div>
    </>
);
