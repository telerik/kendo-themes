import { Button } from '../../button';
import { Scheduler, SchedulerBody, SchedulerCell, SchedulerContent, SchedulerHead, SchedulerHeader, SchedulerTable, SchedulerTimes, SchedulerToolbar, SchedulerEvent } from '../index';

export const SchedulerDayHorizontalGrouping = (...props) => (
    <Scheduler
        layout="table"
        view="day"
        toolbar={
            <SchedulerToolbar />
        }
        footer={
            <SchedulerToolbar footer>
                <Button icon="clock" className="k-scheduler-fullday">Show business hours</Button>
            </SchedulerToolbar>
        }
        children={
            <>
                <tbody>
                    <SchedulerHead as="tr">
                        <td>
                            <SchedulerTimes>
                                <SchedulerTable role="none">
                                    <tbody>
                                        <tr style={{ height: "37px" }}>
                                            <SchedulerCell as="th" />
                                        </tr>
                                        <tr style={{ height: "55px" }}>
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
                                            <SchedulerCell as="th" cellType={["slot", "group"]}>Meeting Room 101</SchedulerCell>
                                            <SchedulerCell as="th" cellType={["slot", "group"]}>Meeting Room 201</SchedulerCell>
                                        </tr>
                                        <tr className="k-scheduler-date-group">
                                            <SchedulerCell as="th" dayText="Mon" text="13" />
                                            <SchedulerCell as="th" dayText="Mon" text="13" />
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
                                <SchedulerTable role="none" style={{ height: "900px" }}>
                                    <tbody>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>7:00 AM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>8:00 AM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>9:00 AM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>10:00 AM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>11:00 AM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>12:00 PM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>1:00 PM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>2:00 PM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>3:00 PM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>4:00 PM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" />
                                        </tr>
                                    </tbody>
                                </SchedulerTable>
                            </SchedulerTimes>
                        </td>
                        <td>
                            <SchedulerContent style={{ height: "395px" }} tabIndex={0}>
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
                                <SchedulerEvent style={{ top: "148px", left: "445px", height: "590px", width: "120px" }} title="Event 1 Title" time="9:00 AM - 4:00 PM" />
                                <SchedulerEvent style={{ top: "298px", left: "567px", height: "72px", width: "120px" }} title="Event 2 Title" time="10:00 AM - 11:00 AM" />
                            </SchedulerContent>
                        </td>
                    </SchedulerBody>
                </tbody>
            </>
        }
        {...props}
    />
);

/** @deprecated Use `SchedulerDayHorizontalGrouping` instead. */
export const SchedulerHorizontalGrouping = SchedulerDayHorizontalGrouping;
