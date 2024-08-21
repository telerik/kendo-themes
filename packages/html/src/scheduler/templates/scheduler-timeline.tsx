import { ButtonGroup } from '../../button-group';
import { Button } from '../../button';
import { Scheduler, SchedulerBody, SchedulerCell, SchedulerContent, SchedulerHead, SchedulerHeader, SchedulerTable, SchedulerToolbar, SchedulerTimes } from '../index';


export const SchedulerTimeline = ({ style, ...props }: any) => (
    <Scheduler
        style={style}
        layout="table"
        view="timeline"
        toolbar={
            <SchedulerToolbar>
                <ButtonGroup className="k-scheduler-navigation">
                    <Button className="k-group-start">Today</Button>
                    <Button icon="caret-alt-left"></Button>
                    <Button className="k-group-end" icon="caret-alt-right"></Button>
                </ButtonGroup>
                <Button icon="calendar" className="k-nav-current" fillMode="flat" >
                    Monday, June 13, 2024
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
        }
        footer={
            <SchedulerToolbar footer>
                <Button icon="clock" className="k-scheduler-fullday">Show business hours</Button>
            </SchedulerToolbar>
        }
        children={
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
                                </tbody>
                            </SchedulerTable>
                        </SchedulerTimes>
                    </td>
                    <td>
                        <SchedulerHeader>
                            <SchedulerTable style={{ width: "495%" }}>
                                <tbody>
                                    <tr className="k-scheduler-date-group">
                                        <SchedulerCell cellType={[ "slot" ]} as="th" colspan={34} text="June 13" />
                                    </tr>
                                    <tr>
                                        <SchedulerCell as="th" colspan={2}>7:00 AM</SchedulerCell>
                                        <SchedulerCell as="th" colspan={2}>8:00 AM</SchedulerCell>
                                        <SchedulerCell as="th" colspan={2}>9:00 AM</SchedulerCell>
                                        <SchedulerCell as="th" colspan={2}>10:00 AM</SchedulerCell>
                                        <SchedulerCell as="th" colspan={2}>11:00 AM</SchedulerCell>
                                        <SchedulerCell as="th" colspan={2}>12:00 PM</SchedulerCell>
                                        <SchedulerCell as="th" colspan={2}>1:00 PM</SchedulerCell>
                                        <SchedulerCell as="th" colspan={2}>2:00 PM</SchedulerCell>
                                        <SchedulerCell as="th" colspan={2}>3:00 PM</SchedulerCell>
                                        <SchedulerCell as="th" colspan={2}>4:00 PM</SchedulerCell>
                                        <SchedulerCell as="th" colspan={2}>5:00 PM</SchedulerCell>
                                    </tr>
                                </tbody>
                            </SchedulerTable>
                        </SchedulerHeader>
                    </td>
                </SchedulerHead>
                <SchedulerBody as="tr">
                    <td>
                        <SchedulerTimes>
                            <SchedulerTable>
                                <tbody>
                                    <tr>
                                        <SchedulerCell as="th" rowspan={1}>All Events</SchedulerCell>
                                    </tr>
                                </tbody>
                            </SchedulerTable>
                        </SchedulerTimes>
                    </td>
                    <td>
                        <SchedulerContent style={{ height: "100px" }}>
                            <SchedulerTable>
                                <tbody>
                                    <tr>
                                        <SchedulerCell as="td" className="k-nonwork-hour" />
                                        <SchedulerCell as="td" className="k-nonwork-hour" />
                                        <SchedulerCell as="td" />
                                        <SchedulerCell as="td" />
                                        <SchedulerCell as="td" />
                                        <SchedulerCell as="td" />
                                        <SchedulerCell as="td" />
                                    </tr>
                                </tbody>
                            </SchedulerTable>
                        </SchedulerContent>
                    </td>
                </SchedulerBody>
            </tbody>
        }
        {...props}
    ></Scheduler>
);
