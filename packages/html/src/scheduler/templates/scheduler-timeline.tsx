import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { SegmentedControl, SegmentedControlButton } from '../../segmented-control';
import { Scheduler, SchedulerBody, SchedulerCell, SchedulerContent, SchedulerHead, SchedulerHeader, SchedulerTable, SchedulerToolbar, SchedulerTimes } from '../index';


export const SchedulerTimeline = ({ style, ...props }: any) => (
    <Scheduler
        style={style}
        layout="table"
        view="timeline"
        toolbar={
            <SchedulerToolbar>
                <Button themeColor="primary" icon="plus" aria-label="Add new event">New Event</Button>
                <Button fillMode="flat">Today</Button>
                <ButtonGroup fillMode="flat">
                    <Button icon="chevron-left" fillMode="flat" aria-label="Navigate to previous period"></Button>
                    <Button icon="chevron-right" fillMode="flat" aria-label="Navigate to next period"></Button>
                </ButtonGroup>
                <Button icon="calendar" className="k-nav-current" fillMode="flat" aria-live="polite">
                    13 June
                </Button>
                <span className="k-spacer"></span>
                <SegmentedControl thumbStyles={{width: "23%", left: "54%"}} className="k-scheduler-views">
                    <SegmentedControlButton>Day</SegmentedControlButton>
                    <SegmentedControlButton>Week</SegmentedControlButton>
                    <SegmentedControlButton>Month</SegmentedControlButton>
                    <SegmentedControlButton selected>Timeline</SegmentedControlButton>
                    <SegmentedControlButton>Agenda</SegmentedControlButton>
                </SegmentedControl>

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
                            <SchedulerTable role="none">
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
                            <SchedulerTable role="none">
                                <tbody>
                                    <tr>
                                        <SchedulerCell as="th" rowspan={1}>All Events</SchedulerCell>
                                    </tr>
                                </tbody>
                            </SchedulerTable>
                        </SchedulerTimes>
                    </td>
                    <td>
                        <SchedulerContent style={{ height: "100px" }} tabIndex={0}>
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
