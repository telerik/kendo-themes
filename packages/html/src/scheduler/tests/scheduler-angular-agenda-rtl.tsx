import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { Icon } from '../../icon';
import { Toolbar } from '../../toolbar';


const style = `
    #test-area {
        max-width: 1200px;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <div className="k-widget k-scheduler k-rtl" dir="rtl">
                <Toolbar className="k-scheduler-toolbar">
                    <div className="k-toolbar-group">
                        <ButtonGroup className="k-scheduler-navigation">
                            <Button className="k-group-start">Today</Button>
                            <Button icon="caret-alt-right"></Button>
                            <Button className="k-group-end" icon="caret-alt-left"></Button>
                        </ButtonGroup>
                        <Button icon="calendar" className="k-nav-current" fillMode="flat" >
                            Sunday, June 23, 2019 - Saturday, June 29, 2019
                        </Button>
                    </div>
                    <span className="k-spacer"></span>
                    <ButtonGroup className="k-scheduler-views">
                        <Button className="k-group-start">Day</Button>
                        <Button>Week</Button>
                        <Button>Month</Button>
                        <Button>Timeline</Button>
                        <Button className="k-group-end" selected>Agenda</Button>
                    </ButtonGroup>
                </Toolbar>
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
                                                        <div><Icon icon="caret-alt-left"></Icon> all day</div>
                                                    </td>
                                                    <td>
                                                        <div className="k-task">
                                                            <span className="k-scheduler-mark" style={{ backgroundColor: "rgb(110, 179, 250)" }} ></span>
                                                            All day event
                                                            <a className="k-link k-event-delete"><Icon icon="x"></Icon></a>
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
                                                            <a className="k-link k-event-delete"><Icon icon="x"></Icon></a>
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
                                                            <a className="k-link k-event-delete"><Icon icon="x"></Icon></a>
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
                                                            <a className="k-link k-event-delete"><Icon icon="x"></Icon></a>
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
                                                            <a className="k-link k-event-delete"><Icon icon="x"></Icon></a>
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
                                                            <a className="k-link k-event-delete"><Icon icon="x"></Icon></a>
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
                                                            <a className="k-link k-event-delete"><Icon icon="x"></Icon></a>
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
                                                            <a className="k-link k-event-delete"><Icon icon="x"></Icon></a>
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
                                                            <a className="k-link k-event-delete"><Icon icon="x"></Icon></a>
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
                                                        <div><Icon icon="caret-alt-left"></Icon> all day</div>
                                                    </td>
                                                    <td>
                                                        <div className="k-task">
                                                            <span className="k-scheduler-mark" style={{ backgroundColor: "rgb(110, 179, 250)" }} ></span>
                                                            All day event
                                                            <a className="k-link k-event-delete"><Icon icon="x"></Icon></a>
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
                                                            <a className="k-link k-event-delete"><Icon icon="x"></Icon></a>
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
                                                            <a className="k-link k-event-delete"><Icon icon="x"></Icon></a>
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
                                                            <a className="k-link k-event-delete"><Icon icon="x"></Icon></a>
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
                                                            <a className="k-link k-event-delete"><Icon icon="x"></Icon></a>
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
                                                            <a className="k-link k-event-delete"><Icon icon="x"></Icon></a>
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
                                                            <a className="k-link k-event-delete"><Icon icon="x"></Icon></a>
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
                                                            <a className="k-link k-event-delete"><Icon icon="x"></Icon></a>
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
                                                            <a className="k-link k-event-delete"><Icon icon="x"></Icon></a>
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
