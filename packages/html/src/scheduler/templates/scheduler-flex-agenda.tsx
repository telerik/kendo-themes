import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { SegmentedControl, SegmentedControlButton } from '../../segmented-control';
import { Scheduler, SchedulerHead, SchedulerBody, SchedulerRow, SchedulerToolbar, SchedulerCell, SchedulerGroup, SchedulerTask } from '../index';

export const SchedulerFlexAgenda = ({ style, ...props }: any) => (
    <Scheduler
        style={style}
        layout="flex"
        view="agenda"
        toolbar={
            <SchedulerToolbar>
                <ButtonGroup className="k-scheduler-navigation">
                    <Button className="k-group-start">Today</Button>
                    <Button icon="chevron-left" aria-label="Navigate to previous period"></Button>
                    <Button className="k-group-end" icon="chevron-right" aria-label="Navigate to next period"></Button>
                </ButtonGroup>
                <Button icon="calendar" className="k-nav-current" fillMode="flat" aria-live="polite">
                    6/24/2024 - 6/25/2024
                </Button>
                <span className="k-spacer"></span>
                <SegmentedControl thumbStyles={{ width: "22%", right: "2px" }}  className="k-scheduler-views">
                    <SegmentedControlButton>Day</SegmentedControlButton>
                    <SegmentedControlButton>Week</SegmentedControlButton>
                    <SegmentedControlButton>Month</SegmentedControlButton>
                    <SegmentedControlButton>Timeline</SegmentedControlButton>
                    <SegmentedControlButton selected>Agenda</SegmentedControlButton>
                </SegmentedControl>
            </SchedulerToolbar>
        }
        children={
            <>
                <SchedulerHead as="div" role="rowgroup">
                    <SchedulerGroup orientation="vertical" role="presentation">
                        <SchedulerRow role="presentation">
                            <SchedulerCell as="div" className="k-group-content" role="presentation">
                                <SchedulerRow role="row">
                                    <SchedulerCell as="div" cellType={[ "heading", "group" ]} className="k-scheduler-datecolumn" style={{ minWidth: "168px" }} role="columnheader">
                                        Date
                                    </SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading", "group" ]} className="k-scheduler-timecolumn" style={{ minWidth: "595px" }} role="columnheader">
                                        Time
                                    </SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading", "group" ]} className="k-scheduler-eventcolumn" style={{ minWidth: "168px" }} role="columnheader">
                                        Event
                                    </SchedulerCell>
                                </SchedulerRow>
                            </SchedulerCell>
                        </SchedulerRow>
                    </SchedulerGroup>
                </SchedulerHead>
                <SchedulerBody as="div" role="rowgroup">
                    <SchedulerGroup orientation="vertical" role="presentation">
                        <SchedulerRow className="k-scheduler-content" role="row">
                            <SchedulerCell as="div" cellType={[ "group", "slot" ]} className="k-scheduler-datecolumn" style={{ minWidth: "168px" }} role="rowheader">
                                <div>
                                    <strong className="k-scheduler-agendaday">25</strong>
                                    <em className="k-scheduler-agendaweek">Monday</em>
                                    <span className="k-scheduler-agendadate">Jun 2024</span>
                                </div>
                            </SchedulerCell>
                            <SchedulerCell as="div" className="k-group-content" role="gridcell">
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
                        <SchedulerRow className="k-scheduler-content" role="row">
                            <SchedulerCell as="div" cellType={[ "group", "slot" ]} className="k-scheduler-datecolumn" style={{ minWidth: "168px" }} role="rowheader">
                                <div>
                                    <strong className="k-scheduler-agendaday">25</strong>
                                    <em className="k-scheduler-agendaweek">Tuesday</em>
                                    <span className="k-scheduler-agendadate">Jun 2024</span>
                                </div>
                            </SchedulerCell>
                            <SchedulerCell as="div" className="k-group-content" role="gridcell">
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
