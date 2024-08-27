import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
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
                    <Button icon="caret-alt-left"></Button>
                    <Button className="k-group-end" icon="caret-alt-right"></Button>
                </ButtonGroup>
                <Button icon="calendar" className="k-nav-current" fillMode="flat" >
                    6/23/2022 - 6/29/2022
                </Button>
                <span className="k-spacer"></span>
                <ButtonGroup className="k-scheduler-views">
                    <Button className="k-group-start">Day</Button>
                    <Button selected>Week</Button>
                    <Button>Month</Button>
                    <Button>Timeline</Button>
                    <Button className="k-group-end">Agenda</Button>
                </ButtonGroup>
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
                                    <SchedulerCell as="div" cellType={[ "heading" ]} text="Sun, 6/23"></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} text="Sun, 6/24"></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} text="Sun, 6/25"></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} text="Sun, 6/26"></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} text="Sun, 6/27"></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} text="Sun, 6/28"></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} text="Sun, 6/29"></SchedulerCell>
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
