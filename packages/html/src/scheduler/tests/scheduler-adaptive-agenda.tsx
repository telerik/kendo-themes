import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { Icon } from '../../icon';
import MenuButton from '../../menu-button/menu-button.spec';
import { Toolbar } from '../../toolbar';

const style = `
    #test-area {
        max-width: 1080px;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <div className="k-pane-wrapper">
                <div className="k-pane">
                    <div className="k-view">
                        <div className="k-stretched-view k-content">
                            <div id="scheduler" className="k-scheduler k-scheduler-mobile">
                                <Toolbar className="k-scheduler-toolbar" aria-label="Scheduler toolbar">
                                    <ButtonGroup className="k-scheduler-tools">
                                        <Button className="k-pdf k-group-start" icon="file-pdf" aria-label="Export to PDF"></Button>
                                        <Button className="k-nav-calendar" icon="calendar" aria-label="Open calendar"></Button>
                                        <Button className="k-create-event k-group-end" icon="plus" aria-label="Create event"></Button>
                                    </ButtonGroup>
                                    <span className="k-spacer"></span>
                                    <MenuButton fillMode="flat">Agenda</MenuButton>
                                </Toolbar>
                                <Toolbar className="k-scheduler-toolbar" aria-label="Scheduler navigation">
                                    <Button className="k-nav-prev" icon="chevron-left" aria-label="Navigate to previous period"></Button>
                                    <span className="k-spacer"></span>
                                    <Button className="k-nav-current" fillMode="flat" aria-live="polite">
                                        13 – 20 Jun 2013
                                    </Button>
                                    <span className="k-spacer"></span>
                                    <Button className="k-nav-next" icon="chevron-right" aria-label="Navigate to next period"></Button>
                                </Toolbar>
                                <table className="k-scheduler-layout k-scheduler-agendaview k-scheduler-agenda k-scrollbar-v">
                                    <tbody>
                                        <tr className="k-mobile-header">
                                            <td>
                                                <div className="k-scheduler-header">
                                                    <div className="k-scheduler-header-wrap">
                                                        <table className="k-scheduler-table">
                                                            <tbody>
                                                                <tr>
                                                                    <th className="k-scheduler-timecolumn">Time</th>
                                                                    <th>Event</th>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="k-scheduler-content" style={{ height: "463px" }} >
                                                    <table className="k-scheduler-table">
                                                        <tbody>
                                                            <tr>
                                                                <td className="k-scheduler-datecolumn k-first" colSpan={2}>
                                                                    <div className="k-scheduler-datecolumn-wrap">
                                                                        <span className="k-mobile-scheduler-agendadate">
                                                                            <span className="k-mobile-scheduler-agendaday">13</span>&nbsp;
                                                                            <span className="k-mobile-scheduler-agendamonth">June</span>
                                                                        </span>
                                                                        <span className="k-mobile-scheduler-agendaweekday">Thursday</span>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="k-scheduler-timecolumn k-first">
                                                                    <div>7:00 PM-9:00 PM</div>
                                                                </td>
                                                                <td>
                                                                    <div className="k-task">
                                                                        <span className="k-scheduler-mark" style={{ backgroundColor: "#f8a398" }}></span>
                                                                        <Icon icon="arrow-rotate-cw"></Icon>
                                                                        <span className="k-scheduler-task-text">HR Lecture</span>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="k-scheduler-datecolumn k-first" colSpan={2}>
                                                                    <div className="k-scheduler-datecolumn-wrap">
                                                                        <span className="k-mobile-scheduler-agendadate">
                                                                            <span className="k-mobile-scheduler-agendaday">14</span>&nbsp;
                                                                            <span className="k-mobile-scheduler-agendamonth">June</span>
                                                                        </span>
                                                                        <span className="k-mobile-scheduler-agendaweekday">Friday</span>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="k-scheduler-timecolumn k-first">
                                                                    <div>all day</div>
                                                                </td>
                                                                <td>
                                                                    <div className="k-task">
                                                                        <span className="k-scheduler-mark" style={{ backgroundColor: "#51a0ed" }}></span>
                                                                        <span className="k-scheduler-task-text">Alex&apos;s Birthday</span>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Toolbar className="k-scheduler-footer">
                                    <Button className="k-scheduler-today">Today</Button>
                                </Toolbar>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
);
