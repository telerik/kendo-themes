import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    #test-area {
        max-width: 1200px;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <div className="k-widget k-scheduler">
                <div className="k-scheduler-toolbar k-toolbar">
                    <div className="k-toolbar-group">
                        <div className="k-scheduler-navigation">
                            <div className="k-button-group">
                                <Button>Today</Button>
                                <Button icon="arrow-60-left"></Button>
                                <Button icon="arrow-60-right"></Button>
                            </div>
                        </div>
                        <a className="k-nav-current" href="#">
                            <Icon name="calendar"></Icon>
                            <span className="k-sm-date-format">6/23/2019 - 6/29/2019</span>
                            <span className="k-lg-date-format">Sunday, June 23, 2019 - Saturday, June 29, 2019</span>
                        </a>
                    </div>
                    <span className="k-spacer"></span>
                    <div className="k-scheduler-views-wrapper">
                        <select className="k-views-dropdown k-picker k-dropdown-list k-dropdown k-rounded-md"></select>
                        <div className="k-scheduler-views k-button-group">
                            <Button>Day</Button>
                            <Button>Week</Button>
                            <Button>Month</Button>
                            <Button>Timeline</Button>
                            <Button selected>Agenda</Button>
                        </div>
                    </div>
                </div>
                <div>
                    <table className="k-scheduler-layout k-scheduler-agendaview k-scheduler-agenda">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="k-scheduler-header">
                                        <div className="k-scheduler-header-wrap">
                                            <table className="k-scheduler-table">
                                                <tbody>
                                                    <tr>
                                                        <th className="k-scheduler-datecolumn">Date</th>
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
                                    <div className="k-scheduler-content" style={{ height: "508px" }} >
                                        <table className="k-scheduler-table">
                                            <tbody>
                                                <tr>
                                                    <td className="k-scheduler-datecolumn" rowSpan={9}>
                                                        <strong className="k-scheduler-agendaday">24</strong>
                                                        <em className="k-scheduler-agendaweek">Monday</em>
                                                        <span className="k-scheduler-agendadate">Jun 2013</span>
                                                    </td>
                                                    <td className="k-scheduler-timecolumn">
                                                        <div><Icon name="arrow-w"></Icon> all day</div>
                                                    </td>
                                                    <td>
                                                        <div className="k-task">
                                                            <span className="k-scheduler-mark" style={{ backgroundColor: "rgb(110, 179, 250)" }} ></span>
                                                            All day event
                                                            <a className="k-link k-event-delete"><Icon name="x"></Icon></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="k-scheduler-timecolumn">
                                                        <div>8:30 AM-2:30 PM</div>
                                                    </td>
                                                    <td>
                                                        <div className="k-task">
                                                            <span className="k-scheduler-mark" style={{ backgroundColor: "rgb(245, 138, 138)" }} ></span>
                                                            Event 1
                                                            <a className="k-link k-event-delete"><Icon name="x"></Icon></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="k-scheduler-timecolumn">
                                                        <div>8:30 AM-2:30 PM</div>
                                                    </td>
                                                    <td>
                                                        <div className="k-task">
                                                            <span className="k-scheduler-mark" style={{ backgroundColor: "rgb(245, 138, 138)" }} ></span>
                                                            Event 2
                                                            <a className="k-link k-event-delete"><Icon name="x"></Icon></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="k-scheduler-timecolumn">
                                                        <div>8:30 AM-2:30 PM</div>
                                                    </td>
                                                    <td>
                                                        <div className="k-task">
                                                            <span className="k-scheduler-mark" style={{ backgroundColor: "rgb(245, 138, 138)" }} ></span>
                                                            Event 3
                                                            <a className="k-link k-event-delete"><Icon name="x"></Icon></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="k-scheduler-timecolumn">
                                                        <div>8:30 AM-2:30 PM</div>
                                                    </td>
                                                    <td>
                                                        <div className="k-task">
                                                            <span className="k-scheduler-mark" style={{ backgroundColor: "rgb(245, 138, 138)" }} ></span>
                                                            Event 4
                                                            <a className="k-link k-event-delete"><Icon name="x"></Icon></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="k-scheduler-timecolumn">
                                                        <div>8:30 AM-2:30 PM</div>
                                                    </td>
                                                    <td>
                                                        <div className="k-task">
                                                            <span className="k-scheduler-mark" style={{ backgroundColor: "rgb(110, 179, 250)" }} ></span>
                                                            Event 5
                                                            <a className="k-link k-event-delete"><Icon name="x"></Icon></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="k-scheduler-timecolumn">
                                                        <div>8:30 AM-2:30 PM</div>
                                                    </td>
                                                    <td>
                                                        <div className="k-task">
                                                            <span className="k-scheduler-mark" style={{ backgroundColor: "rgb(110, 179, 250)" }} ></span>
                                                            Event 6
                                                            <a className="k-link k-event-delete"><Icon name="x"></Icon></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="k-scheduler-timecolumn">
                                                        <div>8:30 AM-2:30 PM</div>
                                                    </td>
                                                    <td>
                                                        <div className="k-task">
                                                            <span className="k-scheduler-mark" style={{ backgroundColor: "rgb(110, 179, 250)" }} ></span>
                                                            Event 7
                                                            <a className="k-link k-event-delete"><Icon name="x"></Icon></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="k-scheduler-timecolumn">
                                                        <div>8:30 AM-2:30 PM</div>
                                                    </td>
                                                    <td>
                                                        <div className="k-task">
                                                            <span className="k-scheduler-mark" style={{ backgroundColor: "rgb(110, 179, 250)" }} ></span>
                                                            Event 8
                                                            <a className="k-link k-event-delete"><Icon name="x"></Icon></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="k-scheduler-datecolumn" rowSpan={9}>
                                                        <strong className="k-scheduler-agendaday">25</strong>
                                                        <em className="k-scheduler-agendaweek">Tuesday</em>
                                                        <span className="k-scheduler-agendadate">Jun 2013</span>
                                                    </td>
                                                    <td className="k-scheduler-timecolumn">
                                                        <div><Icon name="arrow-w"></Icon> all day</div>
                                                    </td>
                                                    <td>
                                                        <div className="k-task">
                                                            <span className="k-scheduler-mark" style={{ backgroundColor: "rgb(110, 179, 250)" }} ></span>
                                                            All day event
                                                            <a className="k-link k-event-delete"><Icon name="x"></Icon></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="k-scheduler-timecolumn">
                                                        <div>8:30 AM-2:30 PM</div>
                                                    </td>
                                                    <td>
                                                        <div className="k-task">
                                                            <span className="k-scheduler-mark" style={{ backgroundColor: "rgb(245, 138, 138)" }} ></span>
                                                            Event 1
                                                            <a className="k-link k-event-delete"><Icon name="x"></Icon></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="k-scheduler-timecolumn">
                                                        <div>8:30 AM-2:30 PM</div>
                                                    </td>
                                                    <td>
                                                        <div className="k-task">
                                                            <span className="k-scheduler-mark" style={{ backgroundColor: "rgb(245, 138, 138)" }} ></span>
                                                            Event 2
                                                            <a className="k-link k-event-delete"><Icon name="x"></Icon></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="k-scheduler-timecolumn">
                                                        <div>8:30 AM-2:30 PM</div>
                                                    </td>
                                                    <td>
                                                        <div className="k-task">
                                                            <span className="k-scheduler-mark" style={{ backgroundColor: "rgb(245, 138, 138)" }} ></span>
                                                            Event 3
                                                            <a className="k-link k-event-delete"><Icon name="x"></Icon></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="k-scheduler-timecolumn">
                                                        <div>8:30 AM-2:30 PM</div>
                                                    </td>
                                                    <td>
                                                        <div className="k-task">
                                                            <span className="k-scheduler-mark" style={{ backgroundColor: "rgb(245, 138, 138)" }} ></span>
                                                            Event 4
                                                            <a className="k-link k-event-delete"><Icon name="x"></Icon></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="k-scheduler-timecolumn">
                                                        <div>8:30 AM-2:30 PM</div>
                                                    </td>
                                                    <td>
                                                        <div className="k-task">
                                                            <span className="k-scheduler-mark" style={{ backgroundColor: "rgb(110, 179, 250)" }} ></span>
                                                            Event 5
                                                            <a className="k-link k-event-delete"><Icon name="x"></Icon></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="k-scheduler-timecolumn">
                                                        <div>8:30 AM-2:30 PM</div>
                                                    </td>
                                                    <td>
                                                        <div className="k-task">
                                                            <span className="k-scheduler-mark" style={{ backgroundColor: "rgb(110, 179, 250)" }} ></span>
                                                            Event 6
                                                            <a className="k-link k-event-delete"><Icon name="x"></Icon></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="k-scheduler-timecolumn">
                                                        <div>8:30 AM-2:30 PM</div>
                                                    </td>
                                                    <td>
                                                        <div className="k-task">
                                                            <span className="k-scheduler-mark" style={{ backgroundColor: "rgb(110, 179, 250)" }} ></span>
                                                            Event 7
                                                            <a className="k-link k-event-delete"><Icon name="x"></Icon></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="k-scheduler-timecolumn">
                                                        <div>8:30 AM-2:30 PM</div>
                                                    </td>
                                                    <td>
                                                        <div className="k-task">
                                                            <span className="k-scheduler-mark" style={{ backgroundColor: "rgb(110, 179, 250)" }} ></span>
                                                            Event 8
                                                            <a className="k-link k-event-delete"><Icon name="x"></Icon></a>
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
                </div>
            </div>
        </div>
    </>
);
