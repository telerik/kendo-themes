import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { Scheduler, SchedulerHead, SchedulerBody, SchedulerRow, SchedulerToolbar, SchedulerCell, SchedulerGroup, SchedulerTask } from '../index';

export const SchedulerFlexAgenda = ({ style, ...props }: any) => (
    <Scheduler
        style={style}
        layout="flex"
        view="agenda"
        toolbar={
            <>
                <SchedulerToolbar>
                    <ButtonGroup className="k-scheduler-navigation">
                        <Button className="k-group-start">Today</Button>
                        <Button icon="caret-alt-left"></Button>
                        <Button className="k-group-end" icon="caret-alt-right"></Button>
                    </ButtonGroup>
                    <Button icon="calendar" className="k-nav-current" fillMode="flat" >
                    6/24/2024 - 6/25/2024
                    </Button>
                    <span className="k-spacer"></span>
                    <ButtonGroup className="k-scheduler-views">
                        <Button className="k-group-start">Day</Button>
                        <Button>Week</Button>
                        <Button>Month</Button>
                        <Button>Timeline</Button>
                        <Button className="k-group-end" selected>Agenda</Button>
                    </ButtonGroup>
                </SchedulerToolbar>
            </>
        }
        children={
            <>
                <SchedulerHead as="div">
                    <SchedulerGroup orientation="vertical">
                        <SchedulerRow>
                            <SchedulerCell as="div" className="k-group-content">
                                <SchedulerRow>
                                    <SchedulerCell as="div" cellType={[ "heading", "group" ]} className="k-scheduler-datecolumn" style={{ minWidth: "168px" }}>
                                        Date
                                    </SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading", "group" ]} className="k-scheduler-timecolumn" style={{ minWidth: "595px" }}>
                                        Time
                                    </SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading", "group" ]} className="k-scheduler-eventcolumn" style={{ minWidth: "168px" }}>
                                        Event
                                    </SchedulerCell>
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                    </SchedulerGroup>
                </SchedulerHead>
                <SchedulerBody as="div">
                    <SchedulerGroup orientation="vertical">
                        <SchedulerRow className="k-scheduler-content">
                            <SchedulerCell as="div" cellType={[ "group", "slot" ]} className="k-scheduler-datecolumn" style={{ minWidth: "168px" }}>
                                <div>
                                    <strong className="k-scheduler-agendaday">25</strong>
                                    <em className="k-scheduler-agendaweek">Monday</em>
                                    <span className="k-scheduler-agendadate">Jun 2024</span>
                                </div>
                            </SchedulerCell>
                            <SchedulerCell as="div" className="k-group-content">
                                <SchedulerRow>
                                    <SchedulerCell as="div" className="k-scheduler-timecolumn" style={{ minWidth: "595px" }}>
                                        <div>11:30 AM-1:00 PM</div>
                                    </SchedulerCell>
                                    <SchedulerCell as="div">
                                        <SchedulerTask text="Task 1 Title" closable />
                                    </SchedulerCell>
                                </SchedulerRow>
                                <SchedulerRow>
                                    <SchedulerCell as="div" className="k-scheduler-timecolumn" style={{ minWidth: "595px" }}>
                                        <div>12:45 PM-2:30 PM</div>
                                    </SchedulerCell>
                                    <SchedulerCell as="div">
                                        <SchedulerTask text="Task 2 Title" recurring closable />
                                    </SchedulerCell>
                                </SchedulerRow>
                                <SchedulerRow>
                                    <SchedulerCell as="div" className="k-scheduler-timecolumn" style={{ minWidth: "595px" }}>
                                        <div>all day</div>
                                    </SchedulerCell>
                                    <SchedulerCell as="div">
                                        <SchedulerTask text="Task 3 Title" closable />
                                    </SchedulerCell>
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                        <SchedulerRow className="k-scheduler-content">
                            <SchedulerCell as="div" cellType={[ "group", "slot" ]} className="k-scheduler-datecolumn" style={{ minWidth: "168px" }}>
                                <div>
                                    <strong className="k-scheduler-agendaday">25</strong>
                                    <em className="k-scheduler-agendaweek">Tuesday</em>
                                    <span className="k-scheduler-agendadate">Jun 2024</span>
                                </div>
                            </SchedulerCell>
                            <SchedulerCell as="div" className="k-group-content">
                                <SchedulerRow>
                                    <SchedulerCell as="div" className="k-scheduler-timecolumn" style={{ minWidth: "595px" }}>
                                        <div>9:30 AM-11:00 AM</div>
                                    </SchedulerCell>
                                    <SchedulerCell as="div">
                                        <SchedulerTask text="Task 1 Title" closable />
                                    </SchedulerCell>
                                </SchedulerRow>
                                <SchedulerRow>
                                    <SchedulerCell as="div" className="k-scheduler-timecolumn" style={{ minWidth: "595px" }}>
                                        <div>3:00 PM-4:30 PM</div>
                                    </SchedulerCell>
                                    <SchedulerCell as="div">
                                        <SchedulerTask text="Task 2 Title" recurring closable />
                                    </SchedulerCell>
                                </SchedulerRow>
                                <SchedulerRow>
                                    <SchedulerCell as="div" className="k-scheduler-timecolumn" style={{ minWidth: "595px" }}>
                                        <div>6:00 PM-7:00 PM</div>
                                    </SchedulerCell>
                                    <SchedulerCell as="div">
                                        <SchedulerTask text="Task 3 Title" closable />
                                    </SchedulerCell>
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                    </SchedulerGroup>
                </SchedulerBody>
            </>
        }
        {...props}
    />
);
