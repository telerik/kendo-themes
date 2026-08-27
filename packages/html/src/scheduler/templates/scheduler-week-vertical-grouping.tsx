import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { SegmentedControl, SegmentedControlButton } from '../../segmented-control';
import { Scheduler, SchedulerBody, SchedulerCell, SchedulerContent, SchedulerHead, SchedulerHeader, SchedulerTable, SchedulerTimes, SchedulerToolbar, SchedulerEvent } from '../index';


export const SchedulerWeekVerticalGrouping = ({ style, today = false, ...props }: any) => (
    <Scheduler
        style={style}
        layout="table"
        view="week"
        toolbar={
            <SchedulerToolbar>
                <Button themeColor="primary" icon="plus" aria-label="Add new event">New Event</Button>
                <Button fillMode="flat">Today</Button>
                <ButtonGroup fillMode="flat">
                    <Button icon="chevron-left" fillMode="flat" aria-label="Navigate to previous period"></Button>
                    <Button icon="chevron-right" fillMode="flat" aria-label="Navigate to next period"></Button>
                </ButtonGroup>
                <Button icon="calendar" className="k-nav-current" fillMode="flat" aria-live="polite">
                    31 May – 6 June
                </Button>
                <span className="k-spacer"></span>
                <SegmentedControl thumbStyles={{ width: "19%", left: "15%" }} className="k-scheduler-views">
                    <SegmentedControlButton>Day</SegmentedControlButton>
                    <SegmentedControlButton selected>Week</SegmentedControlButton>
                    <SegmentedControlButton>Month</SegmentedControlButton>
                    <SegmentedControlButton>Timeline</SegmentedControlButton>
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
            <>
                <tbody>
                    <SchedulerHead as="tr">
                        <td>
                            <SchedulerTimes>
                                <SchedulerTable role="none">
                                    <tbody>
                                        <tr style={{ height: "55px" }}>
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
                                            <SchedulerCell as="th" dayText="Sun" text="12" />
                                            <SchedulerCell as="th" dayText="Mon" text="13" />
                                            <SchedulerCell as="th" dayText="Tue" text="14" />
                                            <SchedulerCell as="th" today={today} dayText="Wed" text="15" />
                                            <SchedulerCell as="th" dayText="Thu" text="16" />
                                            <SchedulerCell as="th" dayText="Fri" text="17" />
                                            <SchedulerCell as="th" dayText="Sat" text="18" />
                                        </tr>
                                    </tbody>
                                </SchedulerTable>
                            </SchedulerHeader>
                        </td>
                    </SchedulerHead>
                    <SchedulerBody as="tr">
                        <td>
                            <SchedulerTimes style={{ height: "390px" }}>
                                <SchedulerTable role="none" style={{ height: "800px" }}>
                                    <tbody>
                                        <tr style={{ height: "36px" }}>
                                            <SchedulerCell as="th" cellType={[ "slot", "group" ]} rowspan={5}>Meeting Room 101</SchedulerCell>
                                            <SchedulerCell as="th" allDay>all day</SchedulerCell>
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
                                        <tr style={{ height: "36px" }}>
                                            <SchedulerCell as="th" cellType={[ "slot", "group" ]} rowspan={5}>Meeting Room 201</SchedulerCell>
                                            <SchedulerCell as="th" allDay>all day</SchedulerCell>
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
                                    </tbody>
                                </SchedulerTable>
                            </SchedulerTimes>
                        </td>
                        <td>
                            <SchedulerContent style={{ height: "390px" }} tabIndex={0}>
                                <SchedulerTable>
                                    <tbody>
                                        <tr className="k-scheduler-header-all-day" style={{ height: "36px" }}>
                                            <SchedulerCell as="td" />
                                            <SchedulerCell as="td" />
                                            <SchedulerCell as="td" />
                                            <SchedulerCell as="td" />
                                            <SchedulerCell as="td" />
                                            <SchedulerCell as="td" />
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr className="k-scheduler-header-all-day" style={{ height: "36px" }}>
                                            <SchedulerCell as="td" />
                                            <SchedulerCell as="td" />
                                            <SchedulerCell as="td" />
                                            <SchedulerCell as="td" />
                                            <SchedulerCell as="td" />
                                            <SchedulerCell as="td" />
                                            <SchedulerCell as="td" />
                                        </tr>
                                        <tr className="k-middle-row">
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                            <SchedulerCell as="td">&nbsp;</SchedulerCell>
                                        </tr>
                                    </tbody>
                                </SchedulerTable>
                                <SchedulerEvent style={{ top: "36px", left: "129px", height: "72px", width: "124px" }} title="Event Title" time="8:00 AM - 9:00 AM" />
                            </SchedulerContent>
                        </td>
                    </SchedulerBody>
                </tbody>
            </>
        }
        {...props}
    />
);
