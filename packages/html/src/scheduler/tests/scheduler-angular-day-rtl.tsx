import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
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
                            Monday, June 24, 2013
                        </Button>
                    </div>
                    <span className="k-spacer"></span>
                    <div className="k-scheduler-views-wrapper">
                        <select className="k-views-dropdown k-picker k-dropdown-list k-dropdown k-rounded-md"></select>
                        <div className="k-scheduler-views k-button-group">
                            <Button selected>Day</Button>
                            <Button>Week</Button>
                            <Button>Month</Button>
                            <Button>Timeline</Button>
                            <Button>Agenda</Button>
                        </div>
                    </div>
                </div>
                <div style={{ display: "block" }}>
                    <div className="k-scheduler-layout k-scheduler-flex-layout k-scheduler-dayview">
                        <div className="k-scheduler-pane">
                            <div className="k-scheduler-times" style={{ width: "79px" }}>
                                <table className="k-scheduler-table">
                                    <tbody>
                                        <tr><th></th></tr>
                                        <tr><th className="k-scheduler-times-all-day" style={{ height: "46px" }}>all day</th></tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="k-scheduler-header">
                                <div className="k-scheduler-header-wrap">
                                    <table className="k-scheduler-table">
                                        <tbody>
                                            <tr><th><span className="k-link k-nav-day">Mon, 6/24</span></th></tr>
                                        </tbody>
                                    </table>
                                    <div style={{ position: "relative" }}>
                                        <table className="k-scheduler-table k-scheduler-header-all-day">
                                            <tbody>
                                                <tr><td style={{ height: "46px" }}></td></tr>
                                            </tbody>
                                        </table>
                                        <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", width: "454px", right: "1px", top: '0px', height: "25px" }} className="k-event">
                                            <span className="k-event-actions"><Icon name="arrow-e"></Icon></span>
                                            <div><div className="k-event-template">Attending HR Conference</div></div>
                                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span>
                                            <span className="k-resize-handle k-resize-w"></span>
                                            <span className="k-resize-handle k-resize-e"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-pane">
                            <div className="k-scheduler-times" style={{ height: "404px" }}>
                                <table className="k-scheduler-table">
                                    <tbody>
                                        <tr><th>8:00 AM</th></tr>
                                        <tr><th className="k-slot-cell"></th></tr>
                                        <tr><th>9:00 AM</th></tr>
                                        <tr><th className="k-slot-cell"></th></tr>
                                        <tr><th>10:00 AM</th></tr>
                                        <tr><th className="k-slot-cell"></th></tr>
                                        <tr><th>11:00 AM</th></tr>
                                        <tr><th className="k-slot-cell"></th></tr>
                                        <tr><th>12:00 PM</th></tr>
                                        <tr><th className="k-slot-cell"></th></tr>
                                        <tr><th>1:00 PM</th></tr>
                                        <tr><th className="k-slot-cell"></th></tr>
                                        <tr><th>2:00 PM</th></tr>
                                        <tr><th className="k-slot-cell"></th></tr>
                                        <tr><th>3:00 PM</th></tr>
                                        <tr><th className="k-slot-cell"></th></tr>
                                        <tr><th>4:00 PM</th></tr>
                                        <tr><th className="k-slot-cell"></th></tr>
                                        <tr><th>5:00 PM</th></tr>
                                        <tr><th className="k-slot-cell"></th></tr>
                                        <tr><th>6:00 PM</th></tr>
                                        <tr><th className="k-slot-cell"></th></tr>
                                        <tr><th>7:00 PM</th></tr>
                                        <tr><th className="k-slot-cell"></th></tr>
                                        <tr><th>8:00 PM</th></tr>
                                        <tr><th className="k-slot-cell"></th></tr>
                                        <tr><th>9:00 PM</th></tr>
                                        <tr><th className="k-slot-cell"></th></tr>
                                        <tr><th>10:00 PM</th></tr>
                                        <tr><th className="k-slot-cell"></th></tr>
                                        <tr><th>11:00 PM</th></tr>
                                        <tr><th className="k-slot-cell"></th></tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="k-scheduler-content" style={{ height: "404px" }}>

                                <table className="k-scheduler-table">
                                    <tbody>
                                        <tr className="k-middle-row"><td></td></tr>
                                        <tr><td></td></tr>
                                        <tr className="k-middle-row"><td></td></tr>
                                        <tr><td></td></tr>
                                        <tr className="k-middle-row"><td></td></tr>
                                        <tr><td></td></tr>
                                        <tr className="k-middle-row"><td></td></tr>
                                        <tr><td></td></tr>
                                        <tr className="k-middle-row"><td></td></tr>
                                        <tr><td></td></tr>
                                        <tr className="k-middle-row"><td></td></tr>
                                        <tr><td></td></tr>
                                        <tr className="k-middle-row"><td></td></tr>
                                        <tr><td></td></tr>
                                        <tr className="k-middle-row"><td></td></tr>
                                        <tr><td></td></tr>
                                        <tr className="k-middle-row"><td></td></tr>
                                        <tr><td></td></tr>
                                        <tr className="k-middle-row"><td className="k-nonwork-hour"></td></tr>
                                        <tr><td className="k-nonwork-hour"></td></tr>
                                        <tr className="k-middle-row"><td className="k-nonwork-hour"></td></tr>
                                        <tr><td className="k-nonwork-hour"></td></tr>
                                        <tr className="k-middle-row"><td className="k-nonwork-hour"></td></tr>
                                        <tr><td className="k-nonwork-hour"></td></tr>
                                        <tr className="k-middle-row"><td className="k-nonwork-hour"></td></tr>
                                        <tr><td className="k-nonwork-hour"></td></tr>
                                        <tr className="k-middle-row"><td className="k-nonwork-hour"></td></tr>
                                        <tr><td className="k-nonwork-hour"></td></tr>
                                        <tr className="k-middle-row"><td className="k-nonwork-hour"></td></tr>
                                        <tr><td className="k-nonwork-hour"></td></tr>
                                        <tr className="k-middle-row"><td className="k-nonwork-hour"></td></tr>
                                        <tr><td className="k-nonwork-hour"></td></tr>
                                    </tbody>
                                </table>

                                <div style={{ width: "56px", right: "3px", top: "37px", height: "443px" }} className="k-event">
                                    <span className="k-event-actions"></span>
                                    <div>
                                        <div className="k-event-template k-event-time">8:30 AM - 2:30 PM</div>
                                        <div className="k-event-template">Car Service</div>
                                    </div>
                                    <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span>
                                    <span className="k-resize-handle k-resize-n"></span>
                                    <span className="k-resize-handle k-resize-s"></span>
                                </div>
                                <div style={{ width: "54px", right: "61px", top: "259px", height: "73px" }} className="k-event">
                                    <span className="k-event-actions"></span>
                                    <div>
                                        <div className="k-event-template k-event-time">11:30 AM - 12:30 PM</div>
                                        <div className="k-event-template">Event 4</div>
                                    </div>
                                    <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span>
                                    <span className="k-resize-handle k-resize-n"></span>
                                    <span className="k-resize-handle k-resize-s"></span>
                                </div>
                                <div style={{ width: "54px", right: "117px", top: "259px", height: "73px" }} className="k-event">
                                    <span className="k-event-actions"></span>
                                    <div>
                                        <div className="k-event-template k-event-time">11:30 AM - 12:30 PM</div>
                                        <div className="k-event-template">Event 5</div>
                                    </div>
                                    <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span>
                                    <span className="k-resize-handle k-resize-n"></span>
                                    <span className="k-resize-handle k-resize-s"></span>
                                </div>
                                <div style={{ width: "54px", right: "173px", top: "259px", height: "73px" }} className="k-event">
                                    <span className="k-event-actions"></span>
                                    <div>
                                        <div className="k-event-template k-event-time">11:30 AM - 12:30 PM</div>
                                        <div className="k-event-template">Event 6</div>
                                    </div>
                                    <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span>
                                    <span className="k-resize-handle k-resize-n"></span>
                                    <span className="k-resize-handle k-resize-s"></span>
                                </div>
                                <div style={{ width: "54px", right: "229px", top: "259px", height: "73px" }} className="k-event">
                                    <span className="k-event-actions"></span>
                                    <div>
                                        <div className="k-event-template k-event-time">11:30 AM - 12:30 PM</div>
                                        <div className="k-event-template">Event 1</div>
                                    </div>
                                    <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span>
                                    <span className="k-resize-handle k-resize-n"></span>
                                    <span className="k-resize-handle k-resize-s"></span>
                                </div>
                                <div style={{ width: "54px", right: "285px", top: "259px", height: "73px" }} className="k-event">
                                    <span className="k-event-actions"></span>
                                    <div>
                                        <div className="k-event-template k-event-time">11:30 AM - 12:30 PM</div>
                                        <div className="k-event-template">Event 2</div>
                                    </div>
                                    <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span>
                                    <span className="k-resize-handle k-resize-n"></span>
                                    <span className="k-resize-handle k-resize-s"></span>
                                </div>
                                <div style={{ width: "54px", right: "341px", top: "259px", height: "73px" }} className="k-event">
                                    <span className="k-event-actions"></span>
                                    <div>
                                        <div className="k-event-template k-event-time">11:30 AM - 12:30 PM</div>
                                        <div className="k-event-template">Event 3</div>
                                    </div>
                                    <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span>
                                    <span className="k-resize-handle k-resize-n"></span>
                                    <span className="k-resize-handle k-resize-s"></span>
                                </div>
                                <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", width: "393px", right: "61px", top: "370px", height: "73px" }} className="k-event">
                                    <span className="k-event-actions"></span>
                                    <div>
                                        <div className="k-event-template k-event-time">1:00 PM - 2:00 PM</div>
                                        <div className="k-event-template">Replace the printer on the 1st floor</div>
                                    </div>
                                    <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span>
                                    <span className="k-resize-handle k-resize-n"></span>
                                    <span className="k-resize-handle k-resize-s"></span>
                                </div>
                                <div style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)", width: "54px", right: "397px", top: "259px", height: "36px" }} className="k-event">
                                    <span className="k-event-actions"></span>
                                    <div>
                                        <div className="k-event-template k-event-time">11:30 AM - 12:00 PM</div>
                                        <div className="k-event-template">Breakfast with Tom</div>
                                    </div>
                                    <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span>
                                    <span className="k-resize-handle k-resize-n"></span>
                                    <span className="k-resize-handle k-resize-s"></span>
                                </div>
                                <div style={{ width: "393px", right: "61px", top: "333px", height: "36px" }} className="k-event">
                                    <span className="k-event-actions"></span>
                                    <div>
                                        <div className="k-event-template k-event-time">12:30 PM - 1:00 PM</div>
                                        <div className="k-event-template">Team planning meeting</div>
                                    </div>
                                    <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span>
                                    <span className="k-resize-handle k-resize-n"></span>
                                    <span className="k-resize-handle k-resize-s"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="k-scheduler-footer k-toolbar">
                    <Button icon="clock" className="k-scheduler-fullday">Show business hours</Button>
                </div>
            </div>
        </div>
    </>
);
