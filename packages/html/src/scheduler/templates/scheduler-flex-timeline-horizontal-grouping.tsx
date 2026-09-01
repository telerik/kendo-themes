import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { SegmentedControl, SegmentedControlButton } from '../../segmented-control';
import { Scheduler, SchedulerHead, SchedulerBody, SchedulerRow, SchedulerToolbar, SchedulerCell, SchedulerStickyCell, SchedulerGroup } from '../index';


export const SchedulerFlexTimelineHorizontalGrouping = ({ style, ...props }: any) => (
    <Scheduler
        style={style}
        layout="flex"
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
                    21 June
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
            <>
                <SchedulerHead as="div" style={{ width: "1874px" }}>
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerStickyCell>
                                <SchedulerCell as="div" cellType={[ "side" ]} style={{ minWidth: '72px' }}></SchedulerCell>
                            </SchedulerStickyCell>
                            <SchedulerCell as="div" cellType={[ "heading" ]}>Meeting Room 101</SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "heading" ]}>Meeting Room 201</SchedulerCell>
                        </SchedulerRow>
                        <SchedulerRow>
                            <SchedulerStickyCell>
                                <SchedulerCell as="div" cellType={[ "side" ]} style={{ minWidth: '72px' }}></SchedulerCell>
                            </SchedulerStickyCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} text="June 21"/>
                                </SchedulerRow>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} >8:00 AM</SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} >9:00 AM</SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} >10:00 AM</SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} >11:00 AM</SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} >12:00 PM</SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} >1:00 PM</SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} >2:00 PM</SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} >3:00 PM</SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} >4:00 PM</SchedulerCell>
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} text="June 21"/>
                                </SchedulerRow>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} >8:00 AM</SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} >9:00 AM</SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} >10:00 AM</SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} >11:00 AM</SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} >12:00 PM</SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} >1:00 PM</SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} >2:00 PM</SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} >3:00 PM</SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} >4:00 PM</SchedulerCell>
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                    </SchedulerGroup>
                </SchedulerHead>
                <SchedulerBody as="div" style={{ width: "1874px", minHeight: "100px" }}>
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerStickyCell>
                                <SchedulerCell as="div" cellType={[ "heading", "side" ]} allDay style={{ minWidth: "72px" }} >All events</SchedulerCell>
                            </SchedulerStickyCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} className="k-nonwork-hour"></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} className="k-nonwork-hour"></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} className="k-nonwork-hour"></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} className="k-nonwork-hour"></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
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
