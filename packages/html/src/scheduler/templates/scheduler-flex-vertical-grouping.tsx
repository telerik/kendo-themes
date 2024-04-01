import { Button } from '../../button';
import { Scheduler, SchedulerBody, SchedulerCell, SchedulerHead, SchedulerToolbar, SchedulerEvent, SchedulerGroup, SchedulerRow } from '../index';


export const SchedulerFlexVerticalGrouping = ({ style, ...props }: any) => (
    <Scheduler
        style={style}
        layout="flex"
        view="day"
        toolbar={
            <>
                <SchedulerToolbar />
            </>
        }
        footer={
            <>
                <SchedulerToolbar footer>
                    <Button icon="clock" className="k-scheduler-fullday">Show business hours</Button>
                </SchedulerToolbar>
            </>
        }
        children={
            <>
                <SchedulerHead as="div">
                    <SchedulerGroup orientation="vertical">
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "heading", "group" ]} style={{ minWidth: "120px" }} />
                            <SchedulerCell as="div" cellType={[ "heading", "group" ]} style={{ minWidth: "36px" }} />
                            <SchedulerCell as="div" cellType={[ "side" ]} style={{ minWidth: "61px" }} />
                            <SchedulerCell as="div" className="k-group-content">
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} text="Mon, 6/13" />
                                    <SchedulerCell as="div" cellType={[ "heading" ]} text="Tue, 6/14" />
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
                                    <SchedulerCell as="div" cellType={[ "heading", "group" ]} style={{ minWidth: "36px" }}>Peter</SchedulerCell>
                                    <SchedulerCell as="div" className="k-group-content k-resource-row">
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "61px" }} allDay>all day</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} className="k-scheduler-alldays-slot" />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} className="k-scheduler-alldays-slot" />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "61px" }}>
                                                8:00 AM
                                            </SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "61px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "61px" }}>
                                                9:00 AM
                                            </SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "61px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "61px" }}>
                                                10:00 AM
                                            </SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "61px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "61px" }}>
                                                11:00 AM
                                            </SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "61px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "61px" }}>
                                                12:00 PM
                                            </SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "61px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                    </SchedulerCell>
                                </SchedulerRow>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "heading", "group" ]} style={{ minWidth: "36px" }}>Alex</SchedulerCell>
                                    <SchedulerCell as="div" className="k-group-content k-resource-row">
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "61px" }} allDay>all day</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} className="k-scheduler-alldays-slot" />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} className="k-scheduler-alldays-slot" />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "61px" }}>
                                                8:00 AM
                                            </SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "61px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "61px" }}>
                                                9:00 AM
                                            </SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "61px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "61px" }}>
                                                10:00 AM
                                            </SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "61px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "61px" }}>
                                                11:00 AM
                                            </SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "61px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "61px" }}>
                                                12:00 PM
                                            </SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "61px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                    </SchedulerCell>
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "heading", "group" ]} style={{ minWidth: "120px" }}>Meeting Room 201</SchedulerCell>
                            <SchedulerCell as="div" className="k-group-content k-resource-row">
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "heading", "group" ]} style={{ minWidth: "36px" }}>Peter</SchedulerCell>
                                    <SchedulerCell as="div" className="k-group-content k-resource-row">
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "61px" }} allDay>all day</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} className="k-scheduler-alldays-slot" />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} className="k-scheduler-alldays-slot" />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "61px" }}>
                                                8:00 AM
                                            </SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "61px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "61px" }}>
                                                9:00 AM
                                            </SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "61px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "61px" }}>
                                                10:00 AM
                                            </SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "61px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "61px" }}>
                                                11:00 AM
                                            </SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "61px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "61px" }}>
                                                12:00 PM
                                            </SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "61px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                    </SchedulerCell>
                                </SchedulerRow>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "heading", "group" ]} style={{ minWidth: "36px" }}>Alex</SchedulerCell>
                                    <SchedulerCell as="div" className="k-group-content k-resource-row">
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "61px" }} allDay>all day</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} className="k-scheduler-alldays-slot" />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} className="k-scheduler-alldays-slot" />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "61px" }}>
                                                8:00 AM
                                            </SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "61px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "61px" }}>
                                                9:00 AM
                                            </SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "61px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "61px" }}>
                                                10:00 AM
                                            </SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "61px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "61px" }}>
                                                11:00 AM
                                            </SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "61px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side", "major" ]} style={{ minWidth: "61px" }}>
                                                12:00 PM
                                            </SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading", "side" ]} style={{ minWidth: "61px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                        </SchedulerRow>
                                    </SchedulerCell>
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                    </SchedulerGroup>
                    <SchedulerEvent eventPrefix={null} style={{ top: "39px", left: "269px", height: "149px", width: "345px" }}>
                        <div className="k-event-template k-event-time">8:00 AM - 10:00 AM</div>
                        <div className="k-event-template">Event 1 Title</div>
                    </SchedulerEvent>
                    <SchedulerEvent style={{ top: "39px", left: "618px", height: "194px", width: "342px" }}>
                        <div className="k-event-template k-event-time">8:00 AM - 10:30 AM</div>
                        <div className="k-event-template">Event 2 Title</div>
                    </SchedulerEvent>
                </SchedulerBody>
            </>
        }
        {...props}
    />
);
