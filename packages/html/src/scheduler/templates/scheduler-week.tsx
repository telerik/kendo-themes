import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { Scheduler, SchedulerBody, SchedulerCell, SchedulerContent, SchedulerHead, SchedulerHeader, SchedulerTable, SchedulerTimes, SchedulerToolbar, SchedulerEvent } from '../index';


export const SchedulerWeek = ({ style, ...props }: any) => (
    <Scheduler
        style={style}
        layout="table"
        view="week"
        toolbar={
            <>
                <SchedulerToolbar>
                    <ButtonGroup className="k-scheduler-navigation">
                        <Button className="k-group-start">Today</Button>
                        <Button icon="caret-alt-left"></Button>
                        <Button className="k-group-end" icon="caret-alt-right"></Button>
                    </ButtonGroup>
                    <Button icon="calendar" className="k-nav-current" fillMode="flat" >
                        10/04/2022 - 10/10/2022
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
            </>
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
                                        <tr style={{ height: "36px" }}>
                                            <SchedulerCell as="th" allDay text="all day" />
                                        </tr>
                                    </tbody>
                                </SchedulerTable>
                            </SchedulerTimes>
                        </td>
                        <td>
                            <SchedulerHeader style={{ paddingRight: "16px" }}>
                                <SchedulerTable>
                                    <tbody>
                                        <tr className="k-scheduler-date-group">
                                            <SchedulerCell as="th" text="Sun 10/04" />
                                            <SchedulerCell as="th" text="Mon 10/05" />
                                            <SchedulerCell as="th" text="Tue 10/06" />
                                            <SchedulerCell as="th" text="Wed 10/07" />
                                            <SchedulerCell as="th" text="Thu 10/08" />
                                            <SchedulerCell as="th" text="Fri 10/09" />
                                            <SchedulerCell as="th" text="Sun 10/10" />
                                        </tr>
                                    </tbody>
                                </SchedulerTable>
                                <div style={{ position: "relative" }}>
                                    <SchedulerTable className="k-scheduler-header-all-day">
                                        <tbody>
                                            <tr style={{ height: "36px" }}>
                                                <SchedulerCell as="td" />
                                                <SchedulerCell as="td" />
                                                <SchedulerCell as="td" />
                                                <SchedulerCell as="td" />
                                                <SchedulerCell as="td" />
                                                <SchedulerCell as="td" />
                                                <SchedulerCell as="td" />
                                            </tr>
                                        </tbody>
                                    </SchedulerTable>
                                </div>
                            </SchedulerHeader>
                        </td>
                    </SchedulerHead>
                    <SchedulerBody as="tr">
                        <td>
                            <SchedulerTimes style={{ height: "195px" }}>
                                <SchedulerTable style={{ height: "400px" }}>
                                    <tbody>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>7:00 AM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={[ "slot" ]} />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>8:00 AM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={[ "slot" ]} />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>9:00 AM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={[ "slot" ]} />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>10:00 AM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={[ "slot" ]} />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>11:00 AM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={[ "slot" ]} />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>12:00 AM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={[ "slot" ]} />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>1:00 PM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={[ "slot" ]} />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>2:00 PM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={[ "slot" ]} />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>3:00 PM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={[ "slot" ]} />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>4:00 PM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={[ "slot" ]} />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>5:00 PM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={[ "slot" ]} />
                                        </tr>
                                    </tbody>
                                </SchedulerTable>
                            </SchedulerTimes>
                        </td>
                        <td>
                            <SchedulerContent style={{ height: "195px" }}>
                                <SchedulerTable>
                                    <tbody>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td" className="k-nonwork-hour">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td" className="k-nonwork-hour">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td" className="k-nonwork-hour">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td" className="k-nonwork-hour">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td" className="k-nonwork-hour">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td" className="k-nonwork-hour">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td" className="k-nonwork-hour">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" className="k-nonwork-hour">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td" className="k-nonwork-hour">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td" className="k-nonwork-hour">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td" className="k-nonwork-hour">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td" className="k-nonwork-hour">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td" className="k-nonwork-hour">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td" className="k-nonwork-hour">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td" className="k-nonwork-hour">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td" className="k-nonwork-hour">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" className="k-nonwork-hour">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td" className="k-nonwork-hour">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" className="k-nonwork-hour">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td" className="k-nonwork-hour">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" className="k-nonwork-hour">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td" className="k-nonwork-hour">&nbsp;</SchedulerCell>
                                        </tr>
                                    </tbody>
                                </SchedulerTable>
                                <SchedulerEvent ongoing style={{ top: "74px", left: "129px", height: "72px", width: "124px" }}>
                                    <div className="k-event-template k-event-time">8:00 AM - 9:00 AM</div>
                                    <div className="k-event-template">Event Title</div>
                                </SchedulerEvent>
                                <SchedulerEvent ongoing resizable="vertical" style={{ top: "147px", left: "255px", height: "72px", width: "378px" }}>
                                    <div className="k-event-template k-event-time">9:00 AM - 10:00 AM</div>
                                    <div className="k-event-template">Event Title</div>
                                </SchedulerEvent>
                                <SchedulerEvent ongoing style={{ top: "74px", left: "636px", height: "72px", width: "124px" }}>
                                    <div className="k-event-template k-event-time">8:00 AM - 9:00 AM</div>
                                    <div className="k-event-template">Event Title</div>
                                </SchedulerEvent>
                            </SchedulerContent>
                        </td>
                    </SchedulerBody>
                </tbody>
            </>
        }
        {...props}
    />
);

export default SchedulerWeek;
