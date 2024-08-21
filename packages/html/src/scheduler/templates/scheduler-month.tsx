import { ButtonGroup } from '../../button-group';
import { Button } from '../../button';
import { Scheduler, SchedulerBody, SchedulerCell, SchedulerContent, SchedulerHead, SchedulerHeader, SchedulerTable, SchedulerToolbar, SchedulerEvent } from '../index';


export const SchedulerMonth = ({ style, ...props }: any) => (
    <Scheduler
        style={style}
        layout="table"
        view="month"
        toolbar={
            <SchedulerToolbar>
                <ButtonGroup className="k-scheduler-navigation">
                    <Button className="k-group-start">Today</Button>
                    <Button icon="caret-alt-left"></Button>
                    <Button className="k-group-end" icon="caret-alt-right"></Button>
                </ButtonGroup>
                <Button icon="calendar" className="k-nav-current" fillMode="flat" >
                        Jun, 2024
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
        }
        children={
            <>
                <tbody>
                    <SchedulerHead as="tr">
                        <td>
                            <SchedulerHeader>
                                <SchedulerTable>
                                    <tbody>
                                        <tr>
                                            <SchedulerCell as="th">Sunday</SchedulerCell>
                                            <SchedulerCell as="th">Monday</SchedulerCell>
                                            <SchedulerCell as="th">Tuesday</SchedulerCell>
                                            <SchedulerCell as="th">Wednesday</SchedulerCell>
                                            <SchedulerCell as="th">Thursday</SchedulerCell>
                                            <SchedulerCell as="th">Friday</SchedulerCell>
                                            <SchedulerCell as="th">Saturday</SchedulerCell>
                                        </tr>
                                    </tbody>
                                </SchedulerTable>
                            </SchedulerHeader>
                        </td>
                    </SchedulerHead>
                    <SchedulerBody as="tr">
                        <td>
                            <SchedulerContent style={{ height: "195px" }}>
                                <SchedulerTable>
                                    <tbody>
                                        <tr>
                                            <SchedulerCell as="td" text="26" className="k-other-month" />
                                            <SchedulerCell as="td" text="27" className="k-other-month" />
                                            <SchedulerCell as="td" text="28" className="k-other-month" />
                                            <SchedulerCell as="td" text="29" className="k-other-month" />
                                            <SchedulerCell as="td" text="30" className="k-other-month" />
                                            <SchedulerCell as="td" text="31" className="k-other-month" />
                                            <SchedulerCell as="td" text="Jun 01" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" text="02" />
                                            <SchedulerCell as="td" text="03" />
                                            <SchedulerCell as="td" text="04" />
                                            <SchedulerCell as="td" text="05" />
                                            <SchedulerCell as="td" text="06" />
                                            <SchedulerCell as="td" text="07" />
                                            <SchedulerCell as="td" text="08" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" text="09" />
                                            <SchedulerCell as="td" text="10" />
                                            <SchedulerCell as="td" text="11" />
                                            <SchedulerCell as="td" text="12" />
                                            <SchedulerCell as="td" text="13" />
                                            <SchedulerCell as="td" text="14" />
                                            <SchedulerCell as="td" text="15" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" text="16" />
                                            <SchedulerCell as="td" text="17" />
                                            <SchedulerCell as="td" text="18" />
                                            <SchedulerCell as="td" text="19" />
                                            <SchedulerCell as="td" text="20" />
                                            <SchedulerCell as="td" text="21" />
                                            <SchedulerCell as="td" text="22" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" text="23" />
                                            <SchedulerCell as="td" text="24" />
                                            <SchedulerCell as="td" text="25" />
                                            <SchedulerCell as="td" text="26" />
                                            <SchedulerCell as="td" text="27" />
                                            <SchedulerCell as="td" text="28" />
                                            <SchedulerCell as="td" text="29" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" text="30" />
                                            <SchedulerCell as="td" text="Jul 01" className="k-other-month" />
                                            <SchedulerCell as="td" text="02" className="k-other-month" />
                                            <SchedulerCell as="td" text="03" className="k-other-month" />
                                            <SchedulerCell as="td" text="04" className="k-other-month" />
                                            <SchedulerCell as="td" text="05" className="k-other-month" />
                                            <SchedulerCell as="td" text="06" className="k-other-month" />
                                        </tr>
                                        <tr>
                                            <SchedulerCell as="td" text="07" className="k-other-month" />
                                            <SchedulerCell as="td" text="08" className="k-other-month" />
                                            <SchedulerCell as="td" text="09" className="k-other-month" />
                                            <SchedulerCell as="td" text="10" className="k-other-month" />
                                            <SchedulerCell as="td" text="11" className="k-other-month" />
                                            <SchedulerCell as="td" text="12" className="k-other-month" />
                                            <SchedulerCell as="td" text="13" className="k-other-month" />
                                        </tr>
                                    </tbody>
                                </SchedulerTable>
                                <SchedulerEvent eventPrefix={null} eventSuffix={null} resizable="none" style={{ top: "137px", width: "137px" }}>
                                    <div>
                                        <div className="k-event-template">
                                            Event 1 Title
                                        </div>
                                    </div>
                                </SchedulerEvent>
                                <SchedulerEvent eventPrefix={null} eventSuffix={null} resizable="none" style={{ top: "137px", left: "138px", width: "137px" }}>
                                    <div>
                                        <div className="k-event-template">
                                            Event 2 Title
                                        </div>
                                    </div>
                                </SchedulerEvent>
                                <SchedulerEvent eventPrefix={null} eventSuffix={null} resizable="none" style={{ top: "165px", left: "138px", width: "137px" }}>
                                    <div>
                                        <div className="k-event-template">
                                            Event 3 Title
                                        </div>
                                    </div>
                                </SchedulerEvent>
                                <SchedulerEvent eventSuffix={null} resizable="none" style={{ top: "137px", left: "276px", width: "410px" }}>
                                    <div>
                                        <div className="k-event-template">
                                            Event 4 Title
                                        </div>
                                    </div>
                                </SchedulerEvent>
                            </SchedulerContent>
                        </td>
                    </SchedulerBody>
                </tbody>
            </>
        }
        {...props}
    />
);
