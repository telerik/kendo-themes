import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { SegmentedControl, SegmentedControlButton } from '../../segmented-control';
import { Scheduler, SchedulerBody, SchedulerCell, SchedulerContent, SchedulerHead, SchedulerHeader, SchedulerTable, SchedulerToolbar, SchedulerEvent } from '../index';


export const SchedulerMonthHorizontalGrouping = ({ style, ...props }: any) => (
    <Scheduler
        style={style}
        layout="table"
        view="month"
        toolbar={
            <SchedulerToolbar>
                <Button themeColor="primary" icon="plus" aria-label="Add new event">New Event</Button>
                <Button fillMode="flat">Today</Button>
                <ButtonGroup fillMode="flat">
                    <Button icon="chevron-left" fillMode="flat" aria-label="Navigate to previous period"></Button>
                    <Button icon="chevron-right" fillMode="flat" aria-label="Navigate to next period"></Button>
                </ButtonGroup>
                <Button icon="calendar" className="k-nav-current" fillMode="flat" aria-live="polite">
                    June 2024
                </Button>
                <span className="k-spacer"></span>
                <SegmentedControl thumbStyles={{width: "19%", left: "34%"}} className="k-scheduler-views">
                    <SegmentedControlButton>Day</SegmentedControlButton>
                    <SegmentedControlButton>Week</SegmentedControlButton>
                    <SegmentedControlButton selected>Month</SegmentedControlButton>
                    <SegmentedControlButton>Timeline</SegmentedControlButton>
                    <SegmentedControlButton>Agenda</SegmentedControlButton>
                </SegmentedControl>

            </SchedulerToolbar>
        }
        children={
            <>
                <tbody>
                    <SchedulerHead as="tr">
                        <td>
                            <SchedulerHeader>
                                <SchedulerTable>
                                    <tbody>
                                        <tr>
                                            <SchedulerCell as="th" cellType={[ "slot", "group" ]} colspan={7}>Meeting Room 101</SchedulerCell>
                                            <SchedulerCell as="th" cellType={[ "slot", "group" ]} colspan={7}>Meeting Room 201</SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="th">Sunday</SchedulerCell>
                                            <SchedulerCell as="th">Monday</SchedulerCell>
                                            <SchedulerCell as="th">Tuesday</SchedulerCell>
                                            <SchedulerCell as="th">Wednesday</SchedulerCell>
                                            <SchedulerCell as="th">Thursday</SchedulerCell>
                                            <SchedulerCell as="th">Friday</SchedulerCell>
                                            <SchedulerCell as="th">Saturday</SchedulerCell>
                                            <SchedulerCell as="th">Sunday</SchedulerCell>
                                            <SchedulerCell as="th">Monday</SchedulerCell>
                                            <SchedulerCell as="th">Tuesday</SchedulerCell>
                                            <SchedulerCell as="th">Wednesday</SchedulerCell>
                                            <SchedulerCell as="th">Thursday</SchedulerCell>
                                            <SchedulerCell as="th">Friday</SchedulerCell>
                                            <SchedulerCell as="th">Saturday</SchedulerCell>
                                        </tr>
                                    </tbody>
                                </SchedulerTable>
                            </SchedulerHeader>
                        </td>
                    </SchedulerHead>
                    <SchedulerBody as="tr">
                        <td>
                            <SchedulerContent style={{ height: "195px" }} tabIndex={0}>
                                <SchedulerTable>
                                    <tbody>
                                        <tr>
                                            <SchedulerCell as="td" text="26" className="k-other-month" />
                                            <SchedulerCell as="td" text="27" className="k-other-month" />
                                            <SchedulerCell as="td" text="28" className="k-other-month" />
                                            <SchedulerCell as="td" text="29" className="k-other-month" />
                                            <SchedulerCell as="td" text="30" className="k-other-month" />
                                            <SchedulerCell as="td" text="31" className="k-other-month" />
                                            <SchedulerCell as="td" text="Jun 01" />
                                            <SchedulerCell as="td" text="26" className="k-other-month" />
                                            <SchedulerCell as="td" text="27" className="k-other-month" />
                                            <SchedulerCell as="td" text="28" className="k-other-month" />
                                            <SchedulerCell as="td" text="29" className="k-other-month" />
                                            <SchedulerCell as="td" text="30" className="k-other-month" />
                                            <SchedulerCell as="td" text="31" className="k-other-month" />
                                            <SchedulerCell as="td" text="Jun 01" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" text="02" />
                                            <SchedulerCell as="td" text="03" />
                                            <SchedulerCell as="td" text="04" />
                                            <SchedulerCell as="td" text="05" />
                                            <SchedulerCell as="td" text="06" />
                                            <SchedulerCell as="td" text="07" />
                                            <SchedulerCell as="td" text="08" />
                                            <SchedulerCell as="td" text="02" />
                                            <SchedulerCell as="td" text="03" />
                                            <SchedulerCell as="td" text="04" />
                                            <SchedulerCell as="td" text="05" />
                                            <SchedulerCell as="td" text="06" />
                                            <SchedulerCell as="td" text="07" />
                                            <SchedulerCell as="td" text="08" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" text="09" />
                                            <SchedulerCell as="td" text="10" />
                                            <SchedulerCell as="td" text="11" />
                                            <SchedulerCell as="td" text="12" />
                                            <SchedulerCell as="td" text="13" />
                                            <SchedulerCell as="td" text="14" />
                                            <SchedulerCell as="td" text="15" />
                                            <SchedulerCell as="td" text="09" />
                                            <SchedulerCell as="td" text="10" />
                                            <SchedulerCell as="td" text="11" />
                                            <SchedulerCell as="td" text="12" />
                                            <SchedulerCell as="td" text="13" />
                                            <SchedulerCell as="td" text="14" />
                                            <SchedulerCell as="td" text="15" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" text="16" />
                                            <SchedulerCell as="td" text="17" />
                                            <SchedulerCell as="td" text="18" />
                                            <SchedulerCell as="td" text="19" />
                                            <SchedulerCell as="td" text="20" />
                                            <SchedulerCell as="td" text="21" />
                                            <SchedulerCell as="td" text="22" />
                                            <SchedulerCell as="td" text="16" />
                                            <SchedulerCell as="td" text="17" />
                                            <SchedulerCell as="td" text="18" />
                                            <SchedulerCell as="td" text="19" />
                                            <SchedulerCell as="td" text="20" />
                                            <SchedulerCell as="td" text="21" />
                                            <SchedulerCell as="td" text="22" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" text="23" />
                                            <SchedulerCell as="td" text="24" />
                                            <SchedulerCell as="td" text="25" />
                                            <SchedulerCell as="td" text="26" />
                                            <SchedulerCell as="td" text="27" />
                                            <SchedulerCell as="td" text="28" />
                                            <SchedulerCell as="td" text="29" />
                                            <SchedulerCell as="td" text="23" />
                                            <SchedulerCell as="td" text="24" />
                                            <SchedulerCell as="td" text="25" />
                                            <SchedulerCell as="td" text="26" />
                                            <SchedulerCell as="td" text="27" />
                                            <SchedulerCell as="td" text="28" />
                                            <SchedulerCell as="td" text="29" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" text="30" />
                                            <SchedulerCell as="td" text="Jul 01" className="k-other-month" />
                                            <SchedulerCell as="td" text="02" className="k-other-month" />
                                            <SchedulerCell as="td" text="03" className="k-other-month" />
                                            <SchedulerCell as="td" text="04" className="k-other-month" />
                                            <SchedulerCell as="td" text="05" className="k-other-month" />
                                            <SchedulerCell as="td" text="06" className="k-other-month" />
                                            <SchedulerCell as="td" text="30" />
                                            <SchedulerCell as="td" text="Jul 01" className="k-other-month" />
                                            <SchedulerCell as="td" text="02" className="k-other-month" />
                                            <SchedulerCell as="td" text="03" className="k-other-month" />
                                            <SchedulerCell as="td" text="04" className="k-other-month" />
                                            <SchedulerCell as="td" text="05" className="k-other-month" />
                                            <SchedulerCell as="td" text="06" className="k-other-month" />
                                        </tr>
                                    </tbody>
                                </SchedulerTable>
                                <SchedulerEvent resizable="none" style={{ top: "137px", height: "25px", width: "137px" }} title="Event 1 Title" time="9:00 AM - 10:00 AM" />
                            </SchedulerContent>
                        </td>
                    </SchedulerBody>
                </tbody>
            </>
        }
        {...props}
    />
);
