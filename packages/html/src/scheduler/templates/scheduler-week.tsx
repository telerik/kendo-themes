import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { SegmentedControl, SegmentedControlButton } from '../../segmented-control';
import { Scheduler, SchedulerBody, SchedulerCell, SchedulerContent, SchedulerHead, SchedulerHeader, SchedulerTable, SchedulerTimes, SchedulerToolbar, SchedulerEvent } from '../index';


export const SchedulerWeek = ({ style, today = false, ...props }: any) => (
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
                                <SchedulerTable role="none" style={{ height: "400px" }}>
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
                            <SchedulerContent style={{ height: "195px" }} tabIndex={0}>
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
                                <SchedulerEvent style={{ top: "74px", left: "129px", height: "72px", width: "124px" }} title="Event Title" time="8:00 AM - 9:00 AM" />
                                <SchedulerEvent resizable="vertical" style={{ top: "147px", left: "255px", height: "72px", width: "378px" }} title="Event Title" time="9:00 AM - 10:00 AM" />
                                <SchedulerEvent style={{ top: "74px", left: "636px", height: "72px", width: "124px" }} title="Event Title" time="8:00 AM - 9:00 AM" />
                            </SchedulerContent>
                        </td>
                    </SchedulerBody>
                </tbody>
            </>
        }
        {...props}
    />
);
