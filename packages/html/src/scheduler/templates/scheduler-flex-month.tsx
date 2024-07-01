import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { Scheduler, SchedulerHead, SchedulerBody, SchedulerRow, SchedulerToolbar, SchedulerCell, SchedulerGroup, SchedulerEvent } from '../index';


export const SchedulerFlexMonth = ({ style, ...props } :any) => (
    <Scheduler
        style={style}
        layout="flex"
        view="month"
        toolbar={
            <>
                <SchedulerToolbar>
                    <ButtonGroup className="k-scheduler-navigation">
                        <Button className="k-group-start">Today</Button>
                        <Button icon="caret-alt-left"></Button>
                        <Button className="k-group-end" icon="caret-alt-right"></Button>
                    </ButtonGroup>
                    <Button icon="calendar" className="k-nav-current" fillMode="flat" >
                    June 23 2024
                    </Button>
                    <span className="k-spacer"></span>
                    <ButtonGroup className="k-scheduler-views">
                        <Button className="k-group-start">Day</Button>
                        <Button>Week</Button>
                        <Button selected>Month</Button>
                        <Button>Timeline</Button>
                        <Button className="k-group-end">Agenda</Button>
                    </ButtonGroup>
                </SchedulerToolbar>
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
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} text="Sunday"></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} text="Monday"></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} text="Tuesday"></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} text="Wednesday"></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} text="Tuesday"></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} text="Friday"></SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]} text="Saturday"></SchedulerCell>
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                    </SchedulerGroup>
                </SchedulerHead>
                <SchedulerBody as="div">
                    <SchedulerGroup>
                        <SchedulerRow>
                            <SchedulerCell as="div" cellType={[ "group" ]}>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="26" className="k-other-month" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="27" className="k-other-month" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="28" className="k-other-month" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="29" className="k-other-month" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="30" className="k-other-month" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="31" className="k-other-month" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="01" />
                                </SchedulerRow>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]}>
                                        <span className="k-link k-nav-day">02</span>
                                        <Button className="k-more-events" icon="more-horizontal"></Button>
                                    </SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="03" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="04" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="05" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="06" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="07" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="08" />
                                </SchedulerRow>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="09" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="10" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="11" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="12" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="13" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="14" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="15" />
                                </SchedulerRow>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="16" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="17" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="18" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="19" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="20" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="21" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="22" />
                                </SchedulerRow>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="23" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="24" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="25" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="26" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="27" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="28" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="29" />
                                </SchedulerRow>
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="30" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="31" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="01" className="k-other-month" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="02" className="k-other-month" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="03" className="k-other-month" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="04" className="k-other-month" />
                                    <SchedulerCell as="div" cellType={[ "slot" ]} text="05" className="k-other-month" />
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                    </SchedulerGroup>
                    <SchedulerEvent eventPrefix={null} eventSuffix={null} resizable="none" style={{ top: "137px", width: "138px" }}>
                        <div>
                            <div className="k-event-template">
                                            Event 1 Title
                            </div>
                        </div>
                    </SchedulerEvent>
                    <SchedulerEvent eventPrefix={null} eventSuffix={null} resizable="none" style={{ top: "137px", left: "141px", width: "138px" }}>
                        <div>
                            <div className="k-event-template">
                                            Event 2 Title
                            </div>
                        </div>
                    </SchedulerEvent>
                    <SchedulerEvent eventPrefix={null} eventSuffix={null} resizable="none" style={{ top: "165px", left: "141px", width: "138px" }}>
                        <div>
                            <div className="k-event-template">
                                            Event 3 Title
                            </div>
                        </div>
                    </SchedulerEvent>
                    <SchedulerEvent eventSuffix={null} resizable="none" style={{ top: "137px", left: "282px", width: "410px" }}>
                        <div>
                            <div className="k-event-template">
                                            Event 4 Title
                            </div>
                        </div>
                    </SchedulerEvent>
                </SchedulerBody>
            </>
        }
        {...props}
    ></Scheduler>
);

export default SchedulerFlexMonth;
