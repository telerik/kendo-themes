import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { SchedulerBody, SchedulerCell, SchedulerContent, SchedulerEvent, SchedulerHead, SchedulerHeader, SchedulerTable, SchedulerTimes, SchedulerToolbar, SchedulerWeek } from '..';
import { Icon } from '../../icon';

export default () =>(
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
                                                    <SchedulerCell as="td" className="k-nonwork-hour k-selected" />
                                                </tr>
                                                <tr className="k-middle-row">
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td"/>
                                                    <SchedulerCell as="td" className="k-selected" />
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
                                        <SchedulerEvent eventPrefix={null} style={{ top: '0px', height: "71px", width: "166px", left: "2px" }} >
                                            <div>
                                                <div className="k-event-template k-event-time">7:00 AM - 8:00 AM</div>
                                                <div className="k-event-template">Event title</div>
                                            </div>
                                        </SchedulerEvent>
                                        <SchedulerEvent eventPrefix={null} style={{ top: "111px", height: "34px", width: "166px", left: "2px" }} ongoing>
                                            <div>
                                                <div className="k-event-template k-event-time">8:30 AM - 9:00 AM</div>
                                                <div className="k-event-template">Event title that is long and overflows, testing multiline and overflow styles</div>
                                            </div>
                                        </SchedulerEvent>
                                        <SchedulerEvent style={{ top: "36px", height: "108px", width: "166px", left: "348px" }} hover ongoing>
                                            <div>
                                                <div className="k-event-template k-event-time">7:30 AM - 9:00 AM</div>
                                                <div className="k-event-template">Hovered Recurring event</div>
                                            </div>
                                        </SchedulerEvent>
                                        <SchedulerEvent eventPrefix={null} style={{ top: "110px", height: "71px", width: "166px", left: "520px" }} selected ongoing>
                                            <div>
                                                <div className="k-event-template k-event-time">8:30 AM - 9:30 AM</div>
                                                <div className="k-event-template">Selected event</div>
                                            </div>
                                        </SchedulerEvent>
                                        <SchedulerEvent eventPrefix={null} style={{ top: '0px', height: "71px", width: "166px", left: "520px", color: "#333", backgroundColor: "#ddf", borderColor: "#fff" }} >
                                            <div>
                                                <div className="k-event-template k-event-time">7:00 AM - 8:00 AM</div>
                                                <div className="k-event-template">Custom color event</div>
                                            </div>
                                        </SchedulerEvent>
                                        <SchedulerEvent eventPrefix={null} className="k-event-drag-hint" style={{ left: "175px", top: '0px', height: "71px", width: "166px" }} >
                                            <div>
                                                <div className="k-event-template k-event-time">8:00 AM - 9:00 AM</div>
                                                <div className="k-event-template">Drag hint</div>
                                            </div>
                                        </SchedulerEvent>
                                        <SchedulerEvent eventPrefix={null} style={{ backgroundColor: "rgb(248, 163, 152)", borderColor: "rgb(248, 163, 152)", left: "175px", top: "100px", height: "71px", width: "166px" }} inverse ongoing>
                                            <div>
                                                <div className="k-event-template k-event-time">10:00 AM - 11:00 AM</div>
                                                <div className="k-event-template">Inverse Background</div>
                                            </div>
                                        </SchedulerEvent>
                                        <SchedulerEvent eventPrefix={null} style={{ top: "110px", height: "71px", width: "166px", left: "708px" }} ongoing multiDay>
                                            <div>
                                                <div className="k-event-template k-event-time">8:30 AM - 9:30 AM</div>
                                                <div className="k-event-template">Multi-Day event</div>
                                            </div>
                                        </SchedulerEvent>
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
