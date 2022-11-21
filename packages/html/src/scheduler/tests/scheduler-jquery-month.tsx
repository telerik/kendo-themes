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

    .k-event {
        --col: 1;
        --row: 1;
        --span: 1;
        --slot: 1;
        width: calc( ( (100% / 7) * var(--span) ) - 2px );
        left: calc( ( (100% / 7) * (var(--col) - 1) ) + 1px );
        top: calc( ( (100% / 6) * (var(--row) - 1) ) );
        transform: translateY( calc( (100% * var( --slot )) + (1px * var( --slot )) ) );
    }
    .k-scheduler-monthview .k-scheduler-table td {
        height: auto;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <div className="k-widget k-scheduler">
                <div className="k-scheduler-toolbar k-toolbar">
                    <span className="k-scheduler-navigation k-button-group">
                        <Button>Today</Button>
                        <Button icon="caret-alt-left"></Button>
                        <Button icon="caret-alt-right"></Button>
                    </span>
                    <Button icon="calendar" className="k-nav-current" fillMode="flat" >
                        June, 2013
                    </Button>
                    <span className="k-spacer"></span>
                    <span className="k-scheduler-views-wrapper">
                        <select className="k-views-dropdown k-picker k-dropdown-list k-dropdown k-rounded-md">
                            <option>Month</option>
                        </select>
                        <span className="k-scheduler-views k-button-group">
                            <Button>Day</Button>
                            <Button>Week</Button>
                            <Button selected>Month</Button>
                            <Button>Timeline</Button>
                            <Button>Agenda</Button>
                        </span>
                    </span>
                </div>
                <table className="k-scheduler-layout k-scheduler-monthview k-scrollbar-v">
                    <tbody>
                        <tr>
                            <td>
                                <div className="k-scheduler-header">
                                    <div className="k-scheduler-header-wrap">
                                        <table className="k-scheduler-table">
                                            <tbody>
                                                <tr>
                                                    <th>Sunday</th>
                                                    <th>Monday</th>
                                                    <th>Tuesday</th>
                                                    <th>Wednesday</th>
                                                    <th>Thursday</th>
                                                    <th>Friday</th>
                                                    <th>Saturday</th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="k-scheduler-content" style={{ height: "480px" }} >
                                    <table className="k-scheduler-table">
                                        <tbody>
                                            <tr>
                                                <td className="k-other-month">
                                                    <span className="k-link k-nav-day">26</span>
                                                </td>
                                                <td className="k-other-month">
                                                    <span className="k-link k-nav-day">27</span>
                                                </td>
                                                <td className="k-other-month">
                                                    <span className="k-link k-nav-day">28</span>
                                                </td>
                                                <td className="k-other-month">
                                                    <span className="k-link k-nav-day">29</span>
                                                </td>
                                                <td className="k-other-month">
                                                    <span className="k-link k-nav-day">30</span>
                                                </td>
                                                <td className="k-other-month">
                                                    <span className="k-link k-nav-day">31</span>
                                                </td>
                                                <td>
                                                    <span className="k-link k-nav-day">01</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="k-link k-nav-day">02</span>
                                                </td>
                                                <td>
                                                    <span className="k-link k-nav-day">03</span>
                                                </td>
                                                <td>
                                                    <span className="k-link k-nav-day">04</span>
                                                </td>
                                                <td>
                                                    <span className="k-link k-nav-day">05</span>
                                                </td>
                                                <td>
                                                    <span className="k-link k-nav-day">06</span>
                                                </td>
                                                <td>
                                                    <span className="k-link k-nav-day">07</span>
                                                </td>
                                                <td>
                                                    <span className="k-link k-nav-day">08</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="k-link k-nav-day">09</span>
                                                </td>
                                                <td>
                                                    <span className="k-link k-nav-day">10</span>
                                                </td>
                                                <td>
                                                    <span className="k-link k-nav-day">11</span>
                                                </td>
                                                <td>
                                                    <span className="k-link k-nav-day">12</span>
                                                </td>
                                                <td>
                                                    <span className="k-link k-nav-day">13</span>
                                                </td>
                                                <td>
                                                    <span className="k-link k-nav-day">14</span>
                                                </td>
                                                <td>
                                                    <span className="k-link k-nav-day">15</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="k-link k-nav-day">16</span>
                                                </td>
                                                <td>
                                                    <span className="k-link k-nav-day">17</span>
                                                </td>
                                                <td>
                                                    <span className="k-link k-nav-day">18</span>
                                                </td>
                                                <td>
                                                    <span className="k-link k-nav-day">19</span>
                                                </td>
                                                <td>
                                                    <span className="k-link k-nav-day">20</span>
                                                </td>
                                                <td>
                                                    <span className="k-link k-nav-day">21</span>
                                                </td>
                                                <td>
                                                    <span className="k-link k-nav-day">22</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="k-link k-nav-day">23</span>
                                                </td>
                                                <td>
                                                    <span className="k-link k-nav-day">24</span>
                                                </td>
                                                <td>
                                                    <span className="k-link k-nav-day">25</span>
                                                </td>
                                                <td>
                                                    <span className="k-link k-nav-day">26</span>
                                                </td>
                                                <td>
                                                    <span className="k-link k-nav-day">27</span>
                                                </td>
                                                <td>
                                                    <span className="k-link k-nav-day">28</span>
                                                </td>
                                                <td>
                                                    <span className="k-link k-nav-day">29</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="k-link k-nav-day">30</span>
                                                </td>
                                                <td className=" k-other-month">
                                                    <span className="k-link k-nav-day">01</span>
                                                </td>
                                                <td className=" k-other-month">
                                                    <span className="k-link k-nav-day">02</span>
                                                </td>
                                                <td className=" k-other-month">
                                                    <span className="k-link k-nav-day">03</span>
                                                </td>
                                                <td className=" k-other-month">
                                                    <span className="k-link k-nav-day">04</span>
                                                </td>
                                                <td className=" k-other-month">
                                                    <span className="k-link k-nav-day">05</span>
                                                </td>
                                                <td className=" k-other-month">
                                                    <span className="k-link k-nav-day">06</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div style={{ "--span": "1", "--col": "2", "--row": "2", "--slot": "1", height: "25px" } as React.CSSProperties} className="k-event">
                                        <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                                        <div><div className="k-event-template">Dance Practice</div></div>
                                    </div>
                                    <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", "--span": "1", "--col": "3", "--row": "2", "--slot": "1", height: "25px" } as React.CSSProperties} className="k-event">
                                        <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                                        <div><div className="k-event-template">HR Lecture</div></div>
                                    </div>
                                    <div style={{ "--span": "1", "--col": "4", "--row": "2", "--slot": "1", height: "25px" } as React.CSSProperties} className="k-event">
                                        <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                                        <div><div className="k-event-template">Dance Practice</div></div>
                                    </div>
                                    <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", "--span": "3", "--col": "5", "--row": "2", "--slot": "1", height: "25px" } as React.CSSProperties} className="k-event">
                                        <span className="k-event-actions"></span>
                                        <div><div className="k-event-template">Attending HR Conference</div></div>
                                    </div>
                                    <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", "--span": "1", "--col": "3", "--row": "2", "--slot": "2", height: "25px" } as React.CSSProperties} className="k-event">
                                        <span className="k-event-actions"></span>
                                        <div><div className="k-event-template">Software updates</div></div>
                                    </div>
                                    <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", "--span": "1", "--col": "4", "--row": "2", "--slot": "2", height: "25px" } as React.CSSProperties} className="k-event">
                                        <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                                        <div><div className="k-event-template">Helpdesk weekly meeting</div></div>
                                    </div>
                                    <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", "--span": "3", "--col": "5", "--row": "2", "--slot": "2", height: "25px" } as React.CSSProperties} className="k-event">
                                        <span className="k-event-actions"></span>
                                        <div><div className="k-event-template">Grand Canyon tour</div></div>
                                    </div>
                                    <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", "--span": "2", "--col": "1", "--row": "3", "--slot": "1", height: "25px" } as React.CSSProperties} className="k-event">
                                        <span className="k-event-actions"><Icon name="arrow-w"></Icon></span>
                                        <div><div className="k-event-template">Attending HR Conference</div></div>
                                    </div>
                                    <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", "--span": "1", "--col": "3", "--row": "3", "--slot": "1", height: "25px" } as React.CSSProperties} className="k-event">
                                        <span className="k-event-actions"></span>
                                        <div><div className="k-event-template">Business Lunch with Gregory Watkins</div></div>
                                    </div>
                                    <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", "--span": "2", "--col": "4", "--row": "3", "--slot": "1", height: "25px" } as React.CSSProperties} className="k-event">
                                        <span className="k-event-actions"></span>
                                        <div><div className="k-event-template">Server maintenance</div></div>
                                    </div>
                                    <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", "--span": "1", "--col": "6", "--row": "3", "--slot": "1", height: "25px" } as React.CSSProperties} className="k-event">
                                        <span className="k-event-actions"></span>
                                        <div><div className="k-event-template">Dentist</div></div>
                                    </div>
                                    <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", "--span": "1", "--col": "7", "--row": "3", "--slot": "1", height: "25px" } as React.CSSProperties} className="k-event">
                                        <span className="k-event-actions"></span>
                                        <div><div className="k-event-template">Bob&apos;s Birthday Party</div></div>
                                    </div>
                                    <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", "--span": "1", "--col": "1", "--row": "3", "--slot": "2", height: "25px" } as React.CSSProperties} className="k-event">
                                        <span className="k-event-actions"><Icon name="arrow-w"></Icon></span>
                                        <div><div className="k-event-template">Grand Canyon tour</div></div>
                                    </div>
                                    <div style={{ "--span": "1", "--col": "2", "--row": "3", "--slot": "2", height: "25px" } as React.CSSProperties} className="k-event">
                                        <span className="k-event-actions"></span>
                                        <div><div className="k-event-template">Car Service</div></div>
                                    </div>
                                    <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", "--span": "1", "--col": "3", "--row": "3", "--slot": "2", height: "25px" } as React.CSSProperties} className="k-event">
                                        <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                                        <div><div className="k-event-template">HR Lecture</div></div>
                                    </div>
                                    <div style={{ "--span": "1", "--col": "4", "--row": "3", "--slot": "2", height: "25px" } as React.CSSProperties} className="k-event">
                                        <span className="k-event-actions"></span>
                                        <div><div className="k-event-template">Banking</div></div>
                                    </div>
                                    <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", "--span": "1", "--col": "5", "--row": "3", "--slot": "2", height: "25px" } as React.CSSProperties} className="k-event">
                                        <span className="k-event-actions"></span>
                                        <div><div className="k-event-template">Breakfast with CFO and COO</div></div>
                                    </div>
                                    <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", "--span": "1", "--col": "6", "--row": "3", "--slot": "2", height: "25px" } as React.CSSProperties} className="k-event">
                                        <span className="k-event-actions"></span>
                                        <div><div className="k-event-template">Job Interview - Laura Bailey</div></div>
                                    </div>
                                    <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", "--span": "1", "--col": "7", "--row": "3", "--slot": "2", height: "25px" } as React.CSSProperties} className="k-event">
                                        <span className="k-event-actions"></span>
                                        <div><div className="k-event-template">Bob&apos;s Birthday</div></div>
                                    </div>
                                </div>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </>
);
