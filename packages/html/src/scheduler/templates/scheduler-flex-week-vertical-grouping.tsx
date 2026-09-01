import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { SegmentedControl, SegmentedControlButton } from '../../segmented-control';
import { Scheduler, SchedulerHead, SchedulerBody, SchedulerRow, SchedulerToolbar, SchedulerCell, SchedulerGroup } from '../index';


export const SchedulerFlexWeekVerticalGrouping = ({ style, today = false, ...props }: any) => (
    <Scheduler
        style={style}
        layout="flex"
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
                <SchedulerHead as="div">
                    <SchedulerGroup orientation="vertical">
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "heading", "group" ]} style={{ minWidth: "120px" }} />
                            <SchedulerCell as="div" cellType={[ "side" ]} style={{ minWidth: "65px" }} />
                            <SchedulerCell as="div" className="k-group-content">
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} dayText="Sun" text="12"></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} dayText="Mon" text="13"></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} dayText="Tue" text="14"></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} today={today} dayText="Wed" text="15"></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} dayText="Thu" text="16"></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} dayText="Fri" text="17"></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} dayText="Sat" text="18"></SchedulerCell>
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                    </SchedulerGroup>
                </SchedulerHead>
                <SchedulerBody as="div">
                    <SchedulerGroup orientation="vertical">
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "heading", "group" ]} style={{ minWidth: "120px" }}>Meeting Room 101</SchedulerCell>
                            <SchedulerCell as="div" className="k-group-content k-resource-row">
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "heading", "side" ]} allDay style={{ minWidth: "65px" }}>all day</SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "65px" }}>8:00 AM</SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "65px" }} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "65px" }}>9:00 AM</SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "65px" }} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "heading", "group" ]} style={{ minWidth: "120px" }}>Meeting Room 201</SchedulerCell>
                            <SchedulerCell as="div" className="k-group-content k-resource-row">
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "heading", "side" ]} allDay style={{ minWidth: "65px" }}>all day</SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "65px" }}>8:00 AM</SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "65px" }} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "65px" }}>9:00 AM</SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "65px" }} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                    </SchedulerGroup>
                </SchedulerBody>
            </>
        }
        {...props}
    ></Scheduler>
);
