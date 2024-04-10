import { Button } from '../../button';
import { Scheduler, SchedulerBody, SchedulerCell, SchedulerContent, SchedulerHead, SchedulerHeader, SchedulerTable, SchedulerTimes, SchedulerToolbar, SchedulerEvent } from '../index';

export const SchedulerHorizontalGrouping = (...props) => (
    <Scheduler
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
                                        <tr style={{ height: "37px" }}>
                                            <SchedulerCell as="th" />
                                        </tr>
                                        <tr style={{ height: "36px" }}>
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
                                            <SchedulerCell as="th" cellType={[ "slot", "group" ]}>Meeting Room 101</SchedulerCell>
                                            <SchedulerCell as="th" cellType={[ "slot", "group" ]}>Meeting Room 201</SchedulerCell>
                                        </tr>
                                        <tr className="k-scheduler-date-group">
                                            <SchedulerCell as="th" text="Mon 6/13" />
                                            <SchedulerCell as="th" text="Mon 6/13" />
                                        </tr>
                                    </tbody>
                                </SchedulerTable>
                                <div style={{ position: "relative" }}>
                                    <SchedulerTable className="k-scheduler-header-all-day">
                                        <tbody>
                                            <tr style={{ height: "36px" }}>
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
                            <SchedulerTimes style={{ height: "395px" }}>
                                <SchedulerTable style={{ height: "900px" }}>
                                    <tbody>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>7:00 AM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th"/>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>8:00 AM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th"/>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>9:00 AM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th"/>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>10:00 AM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th"/>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>11:00 AM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th"/>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>12:00 PM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th"/>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>1:00 PM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th"/>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>2:00 PM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th"/>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>3:00 PM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th"/>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>4:00 PM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th"/>
                                        </tr>
                                    </tbody>
                                </SchedulerTable>
                            </SchedulerTimes>
                        </td>
                        <td>
                            <SchedulerContent style={{ height: "395px" }}>
                                <SchedulerTable>
                                    <tbody>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td" className="k-nonwork-hour">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td" className="k-nonwork-hour">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" className="k-nonwork-hour">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td" className="k-nonwork-hour">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                    </tbody>
                                </SchedulerTable>
                                <SchedulerEvent eventPrefix={null} style={{ top: "148px", left: "445px", height: "590px", width: "120px" }}>
                                    <div className="k-event-template k-event-time">9:00 AM - 4:00 PM</div>
                                    <div className="k-event-template">Event 1 Title</div>
                                </SchedulerEvent>
                                <SchedulerEvent style={{ top: "298px", left: "567px", height: "72px", width: "120px" }}>
                                    <div className="k-event-template k-event-time">10:00 AM - 11:00 AM</div>
                                    <div className="k-event-template">Event 2 Title</div>
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
