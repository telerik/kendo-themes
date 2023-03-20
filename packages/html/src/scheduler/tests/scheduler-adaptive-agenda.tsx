import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Icon } from '../../icon';
import { Toolbar } from '../../toolbar';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <div className="k-pane-wrapper k-widget">
                <div className="k-pane">
                    <div className="k-view k-widget">
                        <div className="k-stretched-view k-content">
                            <div id="scheduler" className="k-widget k-scheduler k-scheduler-mobile">
                                <Toolbar className="k-scheduler-toolbar">
                                    <span className="k-scheduler-tools k-button-group">
                                        <Button className="k-pdf" icon="file-pdf"></Button>
                                        <Button className="k-nav-calendar" icon="calendar"></Button>
                                        <Button className="k-create-event" icon="add"></Button>
                                    </span>
                                    <span className="k-spacer"></span>
                                    <span className="k-scheduler-views-wrapper">
                                        <select className="k-views-dropdown k-picker k-dropdown-list k-dropdown k-rounded-md">
                                            <option>Agenda</option>
                                        </select>
                                    </span>
                                </Toolbar>
                                <Toolbar className="k-scheduler-toolbar">
                                    <span className="k-scheduler-navigation">
                                        <Button className="k-nav-prev" icon="arrow-chevron-left"></Button>
                                        <Button className="k-nav-current" fillMode="flat" >
                                            Jun 13 - 20, 2013
                                        </Button>
                                        <Button className="k-nav-next" icon="arrow-chevron-right"></Button>
                                    </span>
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
                                                                        <Icon name="arrow-rotate-cw"></Icon>
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
