import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { SegmentedControl, SegmentedControlButton } from '../../segmented-control';
import { Scheduler, SchedulerHead, SchedulerBody, SchedulerRow, SchedulerToolbar, SchedulerCell, SchedulerGroup } from '../index';


export const SchedulerFlexWeek = ({ style, ...props }: any) => (
    <Scheduler
        style={style}
        layout="flex"
        view="week"
        toolbar={
            <SchedulerToolbar>
                <ButtonGroup className="k-scheduler-navigation">
                    <Button className="k-group-start">Today</Button>
                    <Button icon="chevron-left" aria-label="Navigate to previous period"></Button>
                    <Button className="k-group-end" icon="chevron-right" aria-label="Navigate to next period"></Button>
                </ButtonGroup>
                <Button icon="calendar" className="k-nav-current" fillMode="flat" aria-live="polite">
                    6/12/2022 - 6/18/2022
                </Button>
                <span className="k-spacer"></span>
                <SegmentedControl thumbStyles={{ width: "18%", left: "16%" }} className="k-scheduler-views">
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
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "side" ]} style={{ minWidth: "65px" }} />
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} text="Sun, 6/12"></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} text="Mon, 6/13"></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} text="Tue, 6/14"></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} text="Wed, 6/15"></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} text="Thu, 6/16"></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} text="Fri, 6/17"></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} text="Sat, 6/18"></SchedulerCell>
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
                </SchedulerHead>
                <SchedulerBody as="div">
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "65px" }}>8:00 AM</SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow className="k-middle-row">
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
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "65px" }}/>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
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
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "65px" }}>9:00 AM</SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow className="k-middle-row">
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
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "65px" }}/>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
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
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "65px" }}>10:00 AM</SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow className="k-middle-row">
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
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "65px" }}/>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
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
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "65px" }}>11:00 AM</SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow className="k-middle-row">
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
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "65px" }}/>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
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
