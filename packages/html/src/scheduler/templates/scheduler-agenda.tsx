import { ButtonGroup } from '../../button-group';
import { Button } from '../../button';
import { Scheduler, SchedulerBody, SchedulerCell, SchedulerContent, SchedulerHead, SchedulerHeader, SchedulerTable, SchedulerToolbar } from '../index';
import SchedulerTask from '../scheduler-task.spec';

export const SchedulerAgenda = ({ style, ...props }: any) => (
    <Scheduler
        style={style}
        layout="table"
        view="agenda"
        toolbar={
            <SchedulerToolbar>
                <ButtonGroup className="k-scheduler-navigation">
                    <Button className="k-group-start">Today</Button>
                    <Button icon="caret-alt-left" aria-label="Navigate to previous period"></Button>
                    <Button className="k-group-end" icon="caret-alt-right" aria-label="Navigate to next period"></Button>
                </ButtonGroup>
                <Button icon="calendar" className="k-nav-current" fillMode="flat" aria-live="polite">
                    06/13/2022 - 06/20/2022
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
        }
        children={
            <tbody role="none">
                <SchedulerHead as="tr">
                    <td>
                        <SchedulerHeader>
                            <SchedulerTable role="none">
                                <tbody role="rowgroup">
                                    <tr role="row">
                                        <SchedulerCell as="th" className="k-scheduler-datecolumn" role="columnheader">Date</SchedulerCell>
                                        <SchedulerCell as="th" className="k-scheduler-timecolumn" role="columnheader">Time</SchedulerCell>
                                        <SchedulerCell as="th" role="columnheader">Event</SchedulerCell>
                                    </tr>
                                </tbody>
                            </SchedulerTable>
                        </SchedulerHeader>
                    </td>
                </SchedulerHead>
                <SchedulerBody as="tr">
                    <td>
                        <SchedulerContent>
                            <SchedulerTable role="none">
                                <tbody role="rowgroup">
                                    <tr role="row">
                                        <SchedulerCell as="td" className="k-scheduler-datecolumn k-first k-selected" role="rowheader" aria-selected="true">
                                            <strong className="k-scheduler-agendaday">13</strong>
                                            <em className="k-scheduler-agendaweek">Monday</em>
                                            <span className="k-scheduler-agendadate">June, 2022</span>
                                        </SchedulerCell>
                                        <SchedulerCell as="td" className="k-scheduler-timecolumn" role="gridcell">
                                            <div>7:00 PM-9:00 PM</div>
                                        </SchedulerCell>
                                        <SchedulerCell as="td" role="gridcell">
                                            <SchedulerTask text="Task 1 Title" closable />
                                        </SchedulerCell>
                                    </tr>
                                    <tr role="row">
                                        <SchedulerCell as="td" className="k-scheduler-datecolumn k-first" role="rowheader">
                                            <strong className="k-scheduler-agendaday">14</strong>
                                            <em className="k-scheduler-agendaweek">Tuesday</em>
                                            <span className="k-scheduler-agendadate">June, 2013</span>
                                        </SchedulerCell>
                                        <SchedulerCell as="td" className="k-scheduler-timecolumn" role="gridcell">
                                            <div>all day</div>
                                        </SchedulerCell>
                                        <SchedulerCell as="td" role="gridcell">
                                            <SchedulerTask text="Task 2 Title" closable />
                                        </SchedulerCell>
                                    </tr>
                                    <tr role="row">
                                        <SchedulerCell as="td" className="k-scheduler-datecolumn k-first" role="rowheader">
                                            <strong className="k-scheduler-agendaday">15</strong>
                                            <em className="k-scheduler-agendaweek">Wednesday</em>
                                            <span className="k-scheduler-agendadate">June, 2013</span>
                                        </SchedulerCell>
                                        <SchedulerCell as="td" className="k-scheduler-timecolumn" role="gridcell">
                                            <div>6:30 PM-8:00 PM</div>
                                        </SchedulerCell>
                                        <SchedulerCell as="td" role="gridcell">
                                            <SchedulerTask text="Task 3 Title" closable />
                                        </SchedulerCell>
                                    </tr>
                                    <tr role="row">
                                        <SchedulerCell as="td" className="k-scheduler-datecolumn k-first" role="rowheader">
                                            <strong className="k-scheduler-agendaday">16</strong>
                                            <em className="k-scheduler-agendaweek">Wednesday</em>
                                            <span className="k-scheduler-agendadate">June, 2013</span>
                                        </SchedulerCell>
                                        <SchedulerCell as="td" className="k-scheduler-timecolumn" role="gridcell">
                                            <div>7:30 AM-8:30 AM</div>
                                        </SchedulerCell>
                                        <SchedulerCell as="td" role="gridcell">
                                            <SchedulerTask text="Task 4 Title" recurring />
                                        </SchedulerCell>
                                    </tr>
                                </tbody>
                            </SchedulerTable>
                        </SchedulerContent>
                    </td>
                </SchedulerBody>
            </tbody>
        }
        {...props}
    ></Scheduler>
);
