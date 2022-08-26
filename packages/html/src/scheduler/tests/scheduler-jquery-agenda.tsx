import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    .k-scheduler-mark {
        background: gold;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <div className="k-widget k-scheduler">
                <div className="k-scheduler-toolbar k-toolbar">
                    <span className="k-button-group k-scheduler-navigation">
                        <Button>Today</Button>
                        <Button icon="caret-alt-left"></Button>
                        <Button icon="caret-alt-right"></Button>
                    </span>
                    <Button icon="calendar" className="k-nav-current" fillMode="flat" >
                        Monday, June 10, 2013 - Friday, June 14, 2013
                    </Button>
                    <span className="k-spacer"></span>
                    <span className="k-scheduler-views-wrapper">
                        <select className="k-views-dropdown k-picker k-dropdown-list k-dropdown k-rounded-md">
                            <option>Agenda</option>
                        </select>
                        <span className="k-button-group k-scheduler-views">
                            <Button >Day</Button>
                            <Button >Week</Button>
                            <Button >Month</Button>
                            <Button >Timeline</Button>
                            <Button selected>Agenda</Button>
                        </span>
                    </span>
                </div>
                <table className="k-scheduler-layout k-scheduler-agendaview k-scheduler-agenda k-scrollbar-h">
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
                                <div className="k-scheduler-content">
                                    <table className="k-scheduler-table">
                                        <tbody>
                                            <tr>
                                                <td className="k-scheduler-datecolumn k-first"><strong className="k-scheduler-agendaday">13</strong><em className="k-scheduler-agendaweek">Thursday</em><span className="k-scheduler-agendadate">June, 2013</span></td>
                                                <td className="k-scheduler-timecolumn"><div>7:00 PM-9:00 PM</div></td>
                                                <td>
                                                    <div className="k-task">
                                                        <span className="k-scheduler-mark"></span>
                                                        <span className="k-scheduler-task-text">Normal</span>
                                                        <a className="k-link k-event-delete"><Icon name="x"></Icon></a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="k-hover">
                                                <td className="k-scheduler-datecolumn k-first"><strong className="k-scheduler-agendaday">14</strong><em className="k-scheduler-agendaweek">Friday</em><span className="k-scheduler-agendadate">June, 2013</span></td>
                                                <td className="k-scheduler-timecolumn"><div>all day</div></td>
                                                <td>
                                                    <div className="k-task">
                                                        <span className="k-scheduler-mark"></span>
                                                        <span className="k-scheduler-task-text">Hover</span>
                                                        <a className="k-link k-event-delete"><Icon name="x"></Icon></a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="k-selected">
                                                <td className="k-scheduler-datecolumn k-first"><strong className="k-scheduler-agendaday">17</strong><em className="k-scheduler-agendaweek">Monday</em><span className="k-scheduler-agendadate">June, 2013</span></td>
                                                <td className="k-scheduler-timecolumn"><div>6:30 PM-8:00 PM</div></td>
                                                <td>
                                                    <div className="k-task">
                                                        <span className="k-scheduler-mark"></span>
                                                        <span className="k-scheduler-task-text">Selected</span>
                                                        <a className="k-link k-event-delete"><Icon name="x"></Icon></a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="k-scheduler-datecolumn k-first"><strong className="k-scheduler-agendaday">18</strong><em className="k-scheduler-agendaweek">Tuesday</em><span className="k-scheduler-agendadate">June, 2013</span></td>
                                                <td className="k-scheduler-timecolumn"><div>7:00 PM-9:00 PM</div></td>
                                                <td>
                                                    <div className="k-task">
                                                        <span className="k-scheduler-mark"></span>
                                                        <Icon name="arrow-rotate-cw"></Icon>
                                                        <span className="k-scheduler-task-text">Recurring</span>
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
                <div className="k-scheduler-footer k-toolbar">
                    <Button icon="clock">Show business hours</Button>
                </div>
            </div>

        </div>
    </>
);
