import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { Icon } from '../../icon';
import { Toolbar } from '../../toolbar';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <div className="k-widget k-scheduler">
                <Toolbar className="k-scheduler-toolbar">
                    <ButtonGroup className="k-scheduler-navigation">
                        <Button className="k-group-start">Today</Button>
                        <Button icon="caret-alt-left"></Button>
                        <Button className="k-group-end" icon="caret-alt-right"></Button>
                    </ButtonGroup>
                    <Button icon="calendar" className="k-nav-current" fillMode="flat" >
                        Monday, June 10, 2013 - Friday, June 14, 2013
                    </Button>
                    <span className="k-spacer"></span>
                    <ButtonGroup className="k-scheduler-views">
                        <Button className="k-group-start">Day</Button>
                        <Button selected>Week</Button>
                        <Button>Month</Button>
                        <Button>Timeline</Button>
                        <Button className="k-group-end">Agenda</Button>
                    </ButtonGroup>


                </Toolbar>
                <table className="k-scheduler-layout k-scheduler-workWeekview k-scrollbar-v">
                    <tbody>
                        <tr>
                            <td>
                                <div className="k-scheduler-times">
                                    <table className="k-scheduler-table">
                                        <tbody>
                                            <tr style={{ height: "37px" }}><th></th></tr>
                                            <tr style={{ height: "72px" }}><th className="k-scheduler-times-all-day">all day</th></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                            <td>
                                <div className="k-scheduler-header">
                                    <div className="k-scheduler-header-wrap">
                                        <table className="k-scheduler-table">
                                            <tbody>
                                                <tr>
                                                    <th colSpan={1}><span className="k-link k-nav-day">Mon 6/10</span></th>
                                                    <th colSpan={1}><span className="k-link k-nav-day">Tue 6/11</span></th>
                                                    <th colSpan={1}><span className="k-link k-nav-day">Wed 6/12</span></th>
                                                    <th colSpan={1}><span className="k-link k-nav-day">Thu 6/13</span></th>
                                                    <th colSpan={1}><span className="k-link k-nav-day">Fri 6/14</span></th>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div style={{ position: "relative" }}>
                                            <table className="k-scheduler-table k-scheduler-header-all-day">
                                                <tbody>
                                                    <tr style={{ height: "72px" }}>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div style={{ backgroundColor: "rgb(81, 160, 237)", borderColor: "rgb(81, 160, 237)", left: '0px', width: "888px", top: '0px' }} className="k-event k-event-inverse">
                                                <span className="k-event-actions">
                                                    <Icon icon="caret-alt-left"></Icon>
                                                </span>
                                                <div>
                                                    <div className="k-event-template">Two Weeks in NZ</div>
                                                </div>
                                                <span className="k-event-actions">
                                                    <a className="k-link k-event-delete"><Icon icon="x"></Icon></a>
                                                    <Icon icon="caret-alt-right"></Icon>
                                                </span>
                                                <span className="k-resize-handle k-resize-w"></span>
                                                <span className="k-resize-handle k-resize-e"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="k-scheduler-times" style={{ height: "195px" }} >
                                    <div className="k-current-time k-current-time-arrow-right" style={{ left: '0px', top: "115px" }} ></div>
                                    <table className="k-scheduler-table" style={{ height: "1258px" }} >
                                        <tbody>
                                            <tr>
                                                <th rowSpan={1}>7:00 AM</th>
                                            </tr>
                                            <tr>
                                                <th className="k-slot-cell" rowSpan={1}></th>
                                            </tr>
                                            <tr>
                                                <th rowSpan={1}>8:00 AM</th>
                                            </tr>
                                            <tr>
                                                <th className="k-slot-cell" rowSpan={1}></th>
                                            </tr>
                                            <tr>
                                                <th rowSpan={1}>9:00 AM</th>
                                            </tr>
                                            <tr>
                                                <th className="k-slot-cell" rowSpan={1}></th>
                                            </tr>
                                            <tr>
                                                <th rowSpan={1}>10:00 AM</th>
                                            </tr>
                                            <tr>
                                                <th className="k-slot-cell" rowSpan={1}></th>
                                            </tr>
                                            <tr>
                                                <th rowSpan={1}>11:00 AM</th>
                                            </tr>
                                            <tr>
                                                <th className="k-slot-cell" rowSpan={1}></th>
                                            </tr>
                                            <tr>
                                                <th rowSpan={1}>12:00 PM</th>
                                            </tr>
                                            <tr>
                                                <th className="k-slot-cell" rowSpan={1}></th>
                                            </tr>
                                            <tr>
                                                <th rowSpan={1}>1:00 PM</th>
                                            </tr>
                                            <tr>
                                                <th className="k-slot-cell" rowSpan={1}></th>
                                            </tr>
                                            <tr>
                                                <th rowSpan={1}>2:00 PM</th>
                                            </tr>
                                            <tr>
                                                <th className="k-slot-cell" rowSpan={1}></th>
                                            </tr>
                                            <tr>
                                                <th rowSpan={1}>3:00 PM</th>
                                            </tr>
                                            <tr>
                                                <th className="k-slot-cell" rowSpan={1}></th>
                                            </tr>
                                            <tr>
                                                <th rowSpan={1}>4:00 PM</th>
                                            </tr>
                                            <tr>
                                                <th className="k-slot-cell" rowSpan={1}></th>
                                            </tr>
                                            <tr>
                                                <th rowSpan={1}>5:00 PM</th>
                                            </tr>
                                            <tr>
                                                <th className="k-slot-cell" rowSpan={1}></th>
                                            </tr>
                                            <tr>
                                                <th rowSpan={1}>6:00 PM</th>
                                            </tr>
                                            <tr>
                                                <th className="k-slot-cell" rowSpan={1}></th>
                                            </tr>
                                            <tr>
                                                <th rowSpan={1}>7:00 PM</th>
                                            </tr>
                                            <tr>
                                                <th className="k-slot-cell" rowSpan={1}></th>
                                            </tr>
                                            <tr>
                                                <th rowSpan={1}>8:00 PM</th>
                                            </tr>
                                            <tr>
                                                <th className="k-slot-cell" rowSpan={1}></th>
                                            </tr>
                                            <tr>
                                                <th rowSpan={1}>9:00 PM</th>
                                            </tr>
                                            <tr>
                                                <th className="k-slot-cell" rowSpan={1}></th>
                                            </tr>
                                            <tr>
                                                <th rowSpan={1}>10:00 PM</th>
                                            </tr>
                                            <tr>
                                                <th className="k-slot-cell" rowSpan={1}></th>
                                            </tr>
                                            <tr>
                                                <th rowSpan={1}>11:00 PM</th>
                                            </tr>
                                            <tr>
                                                <th className="k-slot-cell" rowSpan={1}></th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                            <td>
                                <div className="k-scheduler-content" style={{ height: "195px" }} >
                                    <div className="k-current-time" style={{ top: "115px", height: "1px", right: '0px', width: "861px", left: '0px' }} ></div>
                                    <table className="k-scheduler-table">
                                        <tbody>
                                            <tr className="k-middle-row">
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                            </tr>
                                            <tr>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour k-selected"></td>
                                            </tr>
                                            <tr className="k-middle-row">
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td className="k-selected"></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr className="k-middle-row">
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr className="k-middle-row">
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr className="k-middle-row">
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr className="k-middle-row">
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr className="k-middle-row">
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr className="k-middle-row">
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr className="k-middle-row">
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr className="k-middle-row">
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr className="k-middle-row">
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                            </tr>
                                            <tr>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                            </tr>
                                            <tr className="k-middle-row">
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                            </tr>
                                            <tr>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                            </tr>
                                            <tr className="k-middle-row">
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                            </tr>
                                            <tr>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                            </tr>
                                            <tr className="k-middle-row">
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                            </tr>
                                            <tr>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                            </tr>
                                            <tr className="k-middle-row">
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                            </tr>
                                            <tr>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                            </tr>
                                            <tr className="k-middle-row">
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                            </tr>
                                            <tr>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                            </tr>
                                            <tr className="k-middle-row">
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                            </tr>
                                            <tr>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                                <td className="k-nonwork-hour"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div style={{ top: '0px', height: "71px", width: "166px", left: "2px" }} className="k-event">
                                        <span className="k-event-actions"></span>
                                        <div>
                                            <div className="k-event-template k-event-time">7:00 AM - 8:00 AM</div>
                                            <div className="k-event-template">Event title</div>
                                        </div>
                                        <span className="k-event-actions">
                                            <a className="k-link k-event-delete"><Icon icon="x"></Icon></a>
                                        </span>
                                        <span className="k-resize-handle k-resize-n"></span>
                                        <span className="k-resize-handle k-resize-s"></span>
                                    </div>
                                    <div style={{ top: "111px", height: "34px", width: "166px", left: "2px" }} className="k-event k-event-ongoing">
                                        <span className="k-event-actions"></span>
                                        <div>
                                            <div className="k-event-template k-event-time">8:30 AM - 9:00 AM</div>
                                            <div className="k-event-template">Event title that is long and overflows, testing multiline and overflow styles</div>
                                        </div>
                                        <span className="k-event-actions">
                                            <a className="k-link k-event-delete"><Icon icon="x"></Icon></a>
                                        </span>
                                        <span className="k-resize-handle k-resize-n"></span>
                                        <span className="k-resize-handle k-resize-s"></span>
                                    </div>
                                    <div style={{ top: "36px", height: "108px", width: "166px", left: "348px" }} className="k-event k-hover k-event-ongoing">
                                        <span className="k-event-actions">
                                            <Icon icon="arrow-rotate-cw"></Icon>
                                        </span>
                                        <div>
                                            <div className="k-event-template k-event-time">7:30 AM - 9:00 AM</div>
                                            <div className="k-event-template">Hovered Recurring event</div>
                                        </div>
                                        <span className="k-event-actions">
                                            <a className="k-link k-event-delete"><Icon icon="x"></Icon></a>
                                        </span>
                                        <span className="k-resize-handle k-resize-n"></span>
                                        <span className="k-resize-handle k-resize-s"></span>
                                    </div>
                                    <div style={{ top: "110px", height: "71px", width: "166px", left: "520px" }} className="k-event k-selected k-event-ongoing">
                                        <span className="k-event-actions"></span>
                                        <div>
                                            <div className="k-event-template k-event-time">8:30 AM - 9:30 AM</div>
                                            <div className="k-event-template">Selected event</div>
                                        </div>
                                        <span className="k-event-actions">
                                            <a className="k-link k-event-delete"><Icon icon="x"></Icon></a>
                                        </span>
                                        <span className="k-resize-handle k-resize-n"></span>
                                        <span className="k-resize-handle k-resize-s"></span>
                                    </div>
                                    <div style={{ top: '0px', height: "71px", width: "166px", left: "520px", color: "#333", backgroundColor: "#ddf", borderColor: "#fff" }} className="k-event">
                                        <span className="k-event-actions"></span>
                                        <div>
                                            <div className="k-event-template k-event-time">7:00 AM - 8:00 AM</div>
                                            <div className="k-event-template">Custom color event</div>
                                        </div>
                                        <span className="k-event-actions">
                                            <a className="k-link k-event-delete"><Icon icon="x"></Icon></a>
                                        </span>
                                        <span className="k-resize-handle k-resize-n"></span>
                                        <span className="k-resize-handle k-resize-s"></span>
                                    </div>
                                    <div className="k-event k-event-drag-hint" style={{ left: "175px", top: '0px', height: "71px", width: "166px" }} >
                                        <span className="k-event-actions"></span>
                                        <div>
                                            <div className="k-event-template k-event-time">8:00 AM - 9:00 AM</div>
                                            <div className="k-event-template">Drag hint</div>
                                        </div>
                                        <span className="k-event-actions">
                                            <a className="k-link k-event-delete"><Icon icon="x"></Icon></a>
                                        </span>
                                        <span className="k-resize-handle k-resize-n"></span>
                                        <span className="k-resize-handle k-resize-s"></span>
                                    </div>
                                    <div style={{ backgroundColor: "rgb(248, 163, 152)", borderColor: "rgb(248, 163, 152)", left: "175px", top: "100px", height: "71px", width: "166px" }} className="k-event k-event-inverse k-event-ongoing">
                                        <span className="k-event-actions">
                                        </span>
                                        <div>
                                            <div className="k-event-template k-event-time">10:00 AM - 11:00 AM</div>
                                            <div className="k-event-template">Inverse Background</div>
                                        </div>
                                        <span className="k-event-actions">
                                            <a className="k-link k-event-delete">
                                                <Icon icon="x"></Icon>
                                            </a>
                                        </span>
                                        <span className="k-resize-handle k-resize-n"></span>
                                        <span className="k-resize-handle k-resize-s"></span>
                                    </div>
                                    <div style={{ top: "110px", height: "71px", width: "166px", left: "708px" }} className="k-event k-event-ongoing">
                                        <span className="k-event-actions"></span>
                                        <div>
                                            <div className="k-event-template k-event-time">8:30 AM - 9:30 AM</div>
                                            <div className="k-event-template">Multi-Day event</div>
                                        </div>
                                        <span className="k-event-actions">
                                            <a className="k-link k-event-delete"><Icon icon="x"></Icon></a>
                                        </span>
                                        <span className="k-event-top-actions"><Icon icon="caret-alt-up"></Icon></span>
                                        <span className="k-event-bottom-actions"><Icon icon="caret-alt-down"></Icon></span>
                                        <span className="k-resize-handle k-resize-n"></span>
                                        <span className="k-resize-handle k-resize-s"></span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Toolbar className="k-scheduler-footer">
                    <Button icon="clock" className="k-scheduler-fullday">Show business hours</Button>
                </Toolbar>
            </div>

            <div id="scheduler" className="k-widget k-scheduler">
                <Toolbar className="k-scheduler-toolbar">
                    <ButtonGroup className="k-scheduler-navigation">
                        <Button className="k-group-start">Today</Button>
                        <Button icon="caret-alt-left"></Button>
                        <Button className="k-group-end" icon="caret-alt-right"></Button>
                    </ButtonGroup>
                    <Button icon="calendar" className="k-nav-current" fillMode="flat" >
                        Monday, February 18, 2019
                    </Button>
                    <span className="k-spacer"></span>
                    <ButtonGroup className="k-scheduler-views">
                        <Button className="k-group-start">Day</Button>
                        <Button>Week</Button>
                        <Button>Month</Button>
                        <Button className="k-group-end" selected>Agenda</Button>
                    </ButtonGroup>
                </Toolbar>
                <table className="k-scheduler-layout k-scheduler-timelineview k-scrollbar-h">
                    <tbody>
                        <tr>
                            <td>
                                <div className="k-scheduler-times">
                                    <table className="k-scheduler-table">
                                        <tbody>
                                            <tr style={{ height: "31px" }} >
                                                <th></th>
                                            </tr>
                                            <tr style={{ height: "31px" }} >
                                                <th></th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                            <td>
                                <div className="k-scheduler-header">
                                    <div className="k-scheduler-header-wrap">
                                        <div className="k-current-time k-current-time-arrow-down" style={{ left: "524.534px", top: "36px" }} ></div>
                                        <table className="k-scheduler-table" style={{ width: '100%' }} >
                                            <tbody>
                                                <tr>
                                                    <th colSpan={8} className="k-slot-cell"><span className="k-link k-nav-day">February 18</span></th>
                                                </tr>
                                                <tr>
                                                    <th colSpan={2}>7:00 AM</th>
                                                    <th colSpan={2}>8:00 AM</th>
                                                    <th colSpan={2}>9:00 AM</th>
                                                    <th colSpan={2}>10:00 AM</th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="k-scheduler-times" style={{ height: "100px" }} >
                                    <table className="k-scheduler-table" style={{ height: '50px' }} >
                                        <tbody>
                                            <tr style={{ height: '50px' }} >
                                                <th rowSpan={1}>All events</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                            <td>
                                <div className="k-scheduler-content" style={{ height: "100px" }} >
                                    <div className="k-current-time" style={{ left: "528px", width: "1px", height: "100px", top: '0px' }} ></div>
                                    <table className="k-scheduler-table" style={{ width: '100%' }} >
                                        <tbody>
                                            <tr style={{ height: '50px' }} >
                                                <td className="k-today k-nonwork-hour"></td>
                                                <td className="k-today k-nonwork-hour"></td>
                                                <td className="k-today"></td>
                                                <td className="k-today"></td>
                                                <td className="k-today"></td>
                                                <td className="k-today"></td>
                                                <td className="k-today"></td>
                                                <td className="k-today"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Toolbar className="k-scheduler-footer">
                    <Button icon="clock" className="k-scheduler-fullday">Show business hours</Button>
                </Toolbar>
            </div>

        </div>
    </>
);
