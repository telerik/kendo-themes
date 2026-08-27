import { Button } from '../../button';
import { Scheduler, SchedulerBody, SchedulerCell, SchedulerHead, SchedulerToolbar, SchedulerEvent, SchedulerGroup, SchedulerRow } from '../index';


export const SchedulerFlexDayHorizontalGrouping = ({ today = false, ...props }: any) => (
    <Scheduler
        layout="flex"
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
                <SchedulerHead as="div">
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "side" ]} style={{ minWidth: "61px" }} />
                            <SchedulerCell as="div" cellType={[ "heading" ]}>Meeting Room 101</SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "heading" ]}>Meeting Room 201</SchedulerCell>
                        </SchedulerRow>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "side" ]} style={{ minWidth: "61px" }} />
                            <SchedulerCell as="div" cellType={[ "heading" ]}>Peter</SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "heading" ]}>Alex</SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "heading" ]}>Peter</SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "heading" ]}>Alex</SchedulerCell>
                        </SchedulerRow>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "side" ]} style={{ minWidth: "61px" }} />
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} dayText="Mon" text="13" />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} today={today} dayText="Tue" text="14" />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} dayText="Mon" text="13" />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} today={today} dayText="Tue" text="14" />
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                    </SchedulerGroup>
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerCell as="div" allDay cellType={[ "heading", "side" ]} style={{ minWidth: "61px" }}>all day</SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                    </SchedulerGroup>
                </SchedulerHead>
                <SchedulerBody as="div" >
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "61px" }}>
                                8:00 AM
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow className="k-middle-row">
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow className="k-middle-row">
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow className="k-middle-row">
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow className="k-middle-row">
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                    </SchedulerGroup>
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "61px" }} />
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                    </SchedulerGroup>
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "61px" }}>
                                9:00 AM
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow className="k-middle-row">
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow className="k-middle-row">
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow className="k-middle-row">
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow className="k-middle-row">
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                    </SchedulerGroup>
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "61px" }} />
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                    </SchedulerGroup>
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "61px" }}>
                                10:00 AM
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow className="k-middle-row">
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow className="k-middle-row">
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow className="k-middle-row">
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow className="k-middle-row">
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                    </SchedulerGroup>
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "61px" }} />
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                    </SchedulerGroup>
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "61px" }}>
                                11:00 AM
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow className="k-middle-row">
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow className="k-middle-row">
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow className="k-middle-row">
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow className="k-middle-row">
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                    </SchedulerGroup>
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "61px" }} />
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                    </SchedulerGroup>
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "61px" }}>
                                12:00 PM
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow className="k-middle-row">
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow className="k-middle-row">
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow className="k-middle-row">
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow className="k-middle-row">
                                    <SchedulerCell as="div" cellType={[ "slot" ]} />
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                    </SchedulerGroup>
                    <SchedulerEvent style={{ top: "100px", left: "88px", height: "194px", width: "200px" }} title="Event 1 Title" time="8:00 AM - 9:00 AM" />
                    <SchedulerEvent style={{ top: "100px", left: "293px", height: "194px", width: "200px" }} title="Event 2 Title" time="8:00 AM - 9:00 AM" />
                </SchedulerBody>
            </>
        }
        {...props}
    />
);

/** @deprecated Use `SchedulerFlexDayHorizontalGrouping` instead. */
export const SchedulerFlexHorizontalGrouping = SchedulerFlexDayHorizontalGrouping;
