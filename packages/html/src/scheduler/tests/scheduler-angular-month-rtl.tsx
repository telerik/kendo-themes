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
            <div className="k-widget k-scheduler k-rtl" dir="rtl">
                <div className="k-scheduler-toolbar k-toolbar">
                    <div className="k-toolbar-group">
                        <div className="k-scheduler-navigation">
                            <div className="k-button-group">
                                <Button>Today</Button>
                                <Button icon="caret-alt-left"></Button>
                                <Button icon="caret-alt-right"></Button>
                            </div>
                        </div>
                        <Button icon="calendar" className="k-nav-current" fillMode="flat" >
                            June 2013
                        </Button>
                    </div>
                    <span className="k-spacer"></span>
                    <div className="k-scheduler-views-wrapper">
                        <select className="k-views-dropdown k-picker k-dropdown-list k-dropdown k-rounded-md"></select>
                        <div className="k-scheduler-views k-button-group">
                            <Button>Day</Button>
                            <Button>Week</Button>
                            <Button selected>Month</Button>
                            <Button>Timeline</Button>
                            <Button>Agenda</Button>
                        </div>
                    </div>
                </div>
                <div style={{ display: "block" }} >
                    <div className="k-scheduler-layout k-scheduler-monthview k-scheduler-flex-layout">
                        <div className="k-scheduler-pane">
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
                        </div>
                        <div className="k-scheduler-pane">
                            <div className="k-scheduler-content" style={{ height: "508px" }} >
                                <table className="k-scheduler-table">
                                    <tbody>
                                        <tr>
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
                                            <td>
                                                <span className="k-link k-nav-day">30</span>
                                            </td>
                                            <td>
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
                                                <Button className="k-more-events" icon="more-horizontal" style={{ width: "162px", right: "327px", top: "177px" }} ></Button>
                                            </td>
                                            <td>
                                                <span className="k-link k-nav-day">05</span>
                                                <Button className="k-more-events" icon="more-horizontal" style={{ width: "162px", right: "490px", top: "177px" }} ></Button>
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
                                            <td>
                                                <span className="k-link k-nav-day">01</span>
                                            </td>
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
                                        </tr>
                                    </tbody>
                                </table>

                                <div style={{ width: "162px", right: "163px", top: "123px", height: "25px" }} className="k-event">
                                    <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                                    <div><div className="k-event-template">Dance Practice</div></div>
                                    <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span>
                                    <span className="k-resize-handle k-resize-w"></span>
                                    <span className="k-resize-handle k-resize-e"></span>
                                </div>
                                <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", width: "162px", right: "327px", top: "123px", height: "25px" }} className="k-event">
                                    <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                                    <div><div className="k-event-template">HR Lecture</div></div>
                                </div>
                                <div style={{ width: "162px", right: "490px", top: "123px", height: "25px" }} className="k-event">
                                    <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                                    <div><div className="k-event-template">Dance Practice</div></div>
                                </div>
                                <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", width: "488px", right: "653px", top: "123px", height: "25px" }} className="k-event">
                                    <span className="k-event-actions"></span>
                                    <div><div className="k-event-template">Attending HR Conference</div></div>
                                </div>
                                <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", width: "162px", right: "327px", top: "150px", height: "25px" }} className="k-event">
                                    <span className="k-event-actions"></span>
                                    <div><div className="k-event-template">Software updates</div></div>
                                </div>
                                <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", width: "162px", right: "490px", top: "150px", height: "25px" }} className="k-event">
                                    <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                                    <div><div className="k-event-template">Helpdesk weekly meeting</div></div>
                                </div>
                                <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", width: "488px", right: "653px", top: "150px", height: "25px" }} className="k-event">
                                    <span className="k-event-actions"></span>
                                    <div><div className="k-event-template">Grand Canyon tour</div></div>
                                </div>
                                <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", width: "325px", right: '0px', top: "220px", height: "25px" }} className="k-event">
                                    <span className="k-event-actions"><Icon name="arrow-e"></Icon></span>
                                    <div><div className="k-event-template">Attending HR Conference</div></div>
                                </div>
                                <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", width: "162px", right: "327px", top: "220px", height: "25px" }} className="k-event">
                                    <span className="k-event-actions"></span>
                                    <div><div className="k-event-template">Business Lunch with Gregory Watkins</div></div>
                                </div>
                                <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", width: "325px", right: "490px", top: "220px", height: "25px" }} className="k-event">
                                    <span className="k-event-actions"></span>
                                    <div><div className="k-event-template">Server maintenance</div></div>
                                </div>
                                <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", width: "162px", right: "816px", top: "220px", height: "25px" }} className="k-event">
                                    <span className="k-event-actions"></span>
                                    <div><div className="k-event-template">Dentist</div></div>
                                </div>
                                <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", width: "162px", right: "981px", top: "220px", height: "25px" }} className="k-event">
                                    <span className="k-event-actions"></span>
                                    <div><div className="k-event-template">Bob&apos;s Birthday Party</div></div>
                                </div>
                                <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", width: "162px", right: '0px', top: "247px", height: "25px" }} className="k-event">
                                    <span className="k-event-actions"><Icon name="arrow-e"></Icon></span>
                                    <div><div className="k-event-template">Grand Canyon tour</div></div>
                                </div>
                                <div style={{ width: "162px", right: "163px", top: "247px", height: "25px" }} className="k-event">
                                    <span className="k-event-actions"></span>
                                    <div><div className="k-event-template">Car Service</div></div>
                                </div>
                                <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", width: "162px", right: "327px", top: "247px", height: "25px" }} className="k-event">
                                    <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                                    <div><div className="k-event-template">HR Lecture</div></div>
                                </div>
                                <div style={{ width: "162px", right: "490px", top: "247px", height: "25px" }} className="k-event">
                                    <span className="k-event-actions"></span>
                                    <div><div className="k-event-template">Banking</div></div>
                                </div>
                                <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", width: "162px", right: "653px", top: "247px", height: "25px" }} className="k-event">
                                    <span className="k-event-actions"></span>
                                    <div><div className="k-event-template">Breakfast with CFO and COO</div></div>
                                </div>
                                <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", width: "162px", right: "816px", top: "247px", height: "25px" }} className="k-event">
                                    <span className="k-event-actions"></span>
                                    <div><div className="k-event-template">Job Interview - Laura Bailey</div></div>
                                </div>
                                <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", width: "162px", right: "981px", top: "247px", height: "25px" }} className="k-event">
                                    <span className="k-event-actions"></span>
                                    <div><div className="k-event-template">Bob&apos;s Birthday</div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
