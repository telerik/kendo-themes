import { Button } from '../../button';
import { Scheduler, SchedulerBody, SchedulerCell, SchedulerContent, SchedulerHead, SchedulerHeader, SchedulerTable, SchedulerTimes, SchedulerToolbar, SchedulerEvent } from '../index';

export const SchedulerDay = ({ style, ...props }: any) => (
    <Scheduler
        style={style}
        layout="table"
        view="day"
        toolbar={
            <SchedulerToolbar />
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
                            <SchedulerHeader>
                                <SchedulerTable>
                                    <tbody>
                                        <tr className="k-scheduler-date-group">
                                            <SchedulerCell as="th" text="Mon 6/13" />
                                        </tr>
                                    </tbody>
                                </SchedulerTable>
                                <div style={{ position: "relative" }}>
                                    <SchedulerTable className="k-scheduler-header-all-day">
                                        <tbody>
                                            <tr style={{ height: "36px" }}>
                                                <SchedulerCell as="td"/>
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
                                            <SchedulerCell as="th" cellType={[ "slot" ]}></SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>8:00 AM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={[ "slot" ]}></SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>9:00 AM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={[ "slot" ]}></SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>10:00 AM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={[ "slot" ]}></SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>11:00 AM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={[ "slot" ]}></SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>12:00 PM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={[ "slot" ]}></SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>1:00 PM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={[ "slot" ]}></SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>2:00 PM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={[ "slot" ]}></SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>3:00 PM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={[ "slot" ]}></SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>4:00 PM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={[ "slot" ]}></SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>5:00 PM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={[ "slot" ]}></SchedulerCell>
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
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" className="k-nonwork-hour">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>

                                    </tbody>
                                </SchedulerTable>
                                <SchedulerEvent ongoing style={{ top: "74px", height: "72px", width: "200px" }}>
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
