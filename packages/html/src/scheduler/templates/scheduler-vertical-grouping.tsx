import { Button } from '../../button';
import { Scheduler, SchedulerBody, SchedulerCell, SchedulerContent, SchedulerHead, SchedulerHeader, SchedulerTable, SchedulerTimes, SchedulerToolbar } from '../index';

export const SchedulerVerticalGrouping = (...props) => (
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
                                <SchedulerTable>
                                    <tbody>
                                        <tr style={{ height: "37px" }}>
                                            <SchedulerCell as="th" />
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
                            </SchedulerHeader>
                        </td>
                    </SchedulerHead>
                    <SchedulerBody as="tr">
                        <td>
                            <SchedulerTimes style={{ height: "469px" }}>
                                <SchedulerTable style={{ height: "1200px" }}>
                                    <tbody>
                                        <tr style={{ height: "36px" }}>
                                            <SchedulerCell as="th" cellType={["slot", "group"]} rowspan={36}>Meeting Room 101</SchedulerCell>
                                            <SchedulerCell as="th" cellType={["slot", "group"]} rowspan={9}>Alex</SchedulerCell>
                                            <SchedulerCell as="th" allDay>all day</SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>7:00 AM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={["slot"]} />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>8:00 AM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={["slot"]} />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>9:00 AM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={["slot"]} />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>10:00 AM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={["slot"]} />
                                        </tr>
                                        <tr style={{ height: "36px" }}>
                                            <SchedulerCell as="th" cellType={["slot", "group"]} rowspan={8}>Bob</SchedulerCell>
                                            <SchedulerCell as="th" allDay>all day</SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>7:00 AM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={["slot"]} />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>8:00 AM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={["slot"]} />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>9:00 AM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={["slot"]} />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>10:00 AM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={["slot"]} />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>11:00 AM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={["slot"]} />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>12:00 PM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={["slot"]} />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>1:00 PM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={["slot"]} />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>2:00 PM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={["slot"]} />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>3:00 PM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={["slot"]} />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>4:00 PM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={["slot"]} />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>5:00 PM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={["slot"]} />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">
                                                <span>6:00 PM</span>
                                            </SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th" cellType={["slot"]} />
                                        </tr>
                                    </tbody>
                                </SchedulerTable>
                            </SchedulerTimes>
                        </td>
                        <td>
                            <SchedulerContent style={{ height: "469px" }}>
                                <SchedulerTable>
                                    <tbody>
                                        <tr className="k-scheduler-header-all-day" style={{ height: "36px" }}>
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td" className="k-nonwork-hour" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" className="k-nonwork-hour" />
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr className="k-scheduler-header-all-day" style={{ height: "36px" }}>
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr className="k-scheduler-header-all-day" style={{ height: "36px" }}>
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" />
                                        </tr>
                                    </tbody>
                                </SchedulerTable>
                            </SchedulerContent>
                        </td>
                    </SchedulerBody>
                </tbody>
            </>
        }
        {...props}
    />
);
