import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { SegmentedControl, SegmentedControlButton } from '../../segmented-control';
import { Scheduler, SchedulerHead, SchedulerBody, SchedulerRow, SchedulerToolbar, SchedulerCell, SchedulerGroup, SchedulerEvent } from '../index';

export const SchedulerFlexDay = ({ style, today = false, ...props }: any) => (
    <Scheduler
        style={style}
        layout="flex"
        view="day"
        toolbar={
            <SchedulerToolbar>
                <Button themeColor="primary" icon="plus" aria-label="Add new event">New Event</Button>
                <Button fillMode="flat">Today</Button>
                <ButtonGroup fillMode="flat">
                    <Button icon="chevron-left" fillMode="flat" aria-label="Navigate to previous period"></Button>
                    <Button icon="chevron-right" fillMode="flat" aria-label="Navigate to next period"></Button>
                </ButtonGroup>
                <Button icon="calendar" className="k-nav-current" fillMode="flat" aria-live="polite">
                    24 June
                </Button>
                <span className="k-spacer"></span>
                <SegmentedControl thumbStyles={{width: "15%"}} className="k-scheduler-views">
                    <SegmentedControlButton selected>Day</SegmentedControlButton>
                    <SegmentedControlButton>Week</SegmentedControlButton>
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
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "side" ]} style={{ minWidth: "65px" }} />
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} today={today} dayText="Mon" text="24"/>
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                    </SchedulerGroup>
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} allDay style={{ minWidth: "65px" }}>all day</SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                    </SchedulerGroup>
                </SchedulerHead>
                <SchedulerBody as="div">
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "65px" }}>8:00 AM</SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow className="k-middle-row">
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                    </SchedulerGroup>
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "65px" }}/>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                    </SchedulerGroup>
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "65px" }}>9:00 AM</SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow className="k-middle-row">
                                    <SchedulerCell as="div" cellType={[ "slot" ]}/>
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                    </SchedulerGroup>
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "65px" }}/>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                    </SchedulerGroup>
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "65px" }}>10:00 AM</SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow className="k-middle-row">
                                    <SchedulerCell as="div" cellType={[ "slot" ]}/>
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                    </SchedulerGroup>
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "65px" }}/>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                    </SchedulerGroup>
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "65px" }}>11:00 AM</SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow className="k-middle-row">
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                    </SchedulerGroup>
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "65px" }}/>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                    </SchedulerGroup>
                    <SchedulerEvent style={{ top: "0px", left: "80px", height: "72px", width: "200px" }} title="Event Title" time="8:00 AM - 9:00 AM" />
                </SchedulerBody>
            </>
        }
        {...props}
    ></Scheduler>
);
