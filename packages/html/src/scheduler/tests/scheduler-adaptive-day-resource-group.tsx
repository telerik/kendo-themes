import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { Icon } from '../../icon';
import { Toolbar } from '../../toolbar';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <div className="k-pane-wrapper k-widget">
                <div className="k-pane">
                    <div className="k-view k-widget">
                        <div className="k-stretched-view k-content">
                            <div id="scheduler" className="k-widget k-scheduler k-scheduler-mobile">
                                <Toolbar className="k-scheduler-toolbar">
                                    <ButtonGroup className="k-scheduler-tools">
                                        <Button className="k-pdf k-group-start" icon="file-pdf"></Button>
                                        <Button className="k-nav-calendar" icon="calendar"></Button>
                                        <Button className="k-create-event k-group-end" icon="plus"></Button>
                                    </ButtonGroup>
                                    <span className="k-spacer"></span>
                                    <select className="k-views-dropdown k-picker k-picker-solid k-dropdown-list k-dropdown k-rounded-md">
                                        <option>Day</option>
                                    </select>
                                </Toolbar>
                                <Toolbar className="k-scheduler-toolbar">
                                    <Button className="k-nav-prev" icon="chevron-left"></Button>
                                    <span className="k-spacer"></span>
                                    <Button className="k-nav-current" fillMode="flat" >
                                        Jun 13, 2013
                                    </Button>
                                    <span className="k-spacer"></span>
                                    <Button className="k-nav-next" icon="chevron-right"></Button>
                                </Toolbar>
                                <table className="k-scheduler-layout k-scheduler-dayview k-scrollbar-v">
                                    <tbody>
                                        <tr className="k-mobile-header k-mobile-horizontal-header">
                                            <td>
                                                <div className="k-scheduler-times">
                                                    <table className="k-scheduler-table">
                                                        <tbody>
                                                            <tr style={{ height: "38px" }} >
                                                                <th></th>
                                                            </tr>
                                                            <tr style={{ height: "38px" }} >
                                                                <th></th>
                                                            </tr>
                                                            <tr style={{ height: "37px" }} >
                                                                <th className="k-scheduler-times-all-day">all day</th>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="k-scheduler-header">
                                                    <div className="k-scheduler-header-wrap">
                                                        <table className="k-scheduler-table">
                                                            <tbody>
                                                                <tr className="k-scheduler-date-group">
                                                                    <th><span className="k-link k-nav-day">T</span></th>
                                                                    <th><span className="k-link k-nav-day">T</span></th>
                                                                </tr>
                                                                <tr>
                                                                    <th colSpan={1} className="k-slot-cell k-scheduler-group-cell">Meeting Room 101</th>
                                                                    <th colSpan={1} className="k-slot-cell k-scheduler-group-cell">Meeting Room 201</th>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <div style={{ position: "relative" }}>
                                                            <table className="k-scheduler-table k-scheduler-header-all-day">
                                                                <tbody>
                                                                    <tr style={{ height: "37px" }} >
                                                                        <td>&nbsp;</td>
                                                                        <td> &nbsp;</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="k-scheduler-times" style={{ height: "425px" }} >
                                                    <table className="k-scheduler-table" style={{ height: "1530px" }} >
                                                        <tbody>
                                                            <tr><th><span className="k-time-text">7:00</span> <span className="k-time-period">AM</span></th></tr>
                                                            <tr><th className="k-slot-cell"></th></tr>
                                                            <tr><th><span className="k-time-text">8:00</span> <span className="k-time-period">AM</span></th></tr>
                                                            <tr><th className="k-slot-cell"></th></tr>
                                                            <tr><th><span className="k-time-text">9:00</span> <span className="k-time-period">AM</span></th></tr>
                                                            <tr><th className="k-slot-cell"></th></tr>
                                                            <tr><th><span className="k-time-text">10:00</span> <span className="k-time-period">AM</span></th></tr>
                                                            <tr><th className="k-slot-cell"></th></tr>
                                                            <tr><th><span className="k-time-text">11:00</span> <span className="k-time-period">AM</span></th></tr>
                                                            <tr><th className="k-slot-cell"></th></tr>
                                                            <tr><th><span className="k-time-text">12:00</span> <span className="k-time-period">PM</span></th></tr>
                                                            <tr><th className="k-slot-cell"></th></tr>
                                                            <tr><th><span className="k-time-text">1:00</span> <span className="k-time-period">PM</span></th></tr>
                                                            <tr><th className="k-slot-cell"></th></tr>
                                                            <tr><th><span className="k-time-text">2:00</span> <span className="k-time-period">PM</span></th></tr>
                                                            <tr><th className="k-slot-cell"></th></tr>
                                                            <tr><th><span className="k-time-text">3:00</span> <span className="k-time-period">PM</span></th></tr>
                                                            <tr><th className="k-slot-cell"></th></tr>
                                                            <tr><th><span className="k-time-text">4:00</span> <span className="k-time-period">PM</span></th></tr>
                                                            <tr><th className="k-slot-cell"></th></tr>
                                                            <tr><th><span className="k-time-text">5:00</span> <span className="k-time-period">PM</span></th></tr>
                                                            <tr><th className="k-slot-cell"></th></tr>
                                                            <tr><th><span className="k-time-text">6:00</span> <span className="k-time-period">PM</span></th></tr>
                                                            <tr><th className="k-slot-cell"></th></tr>
                                                            <tr><th><span className="k-time-text">7:00</span> <span className="k-time-period">PM</span></th></tr>
                                                            <tr><th className="k-slot-cell"></th></tr>
                                                            <tr><th><span className="k-time-text">8:00</span> <span className="k-time-period">PM</span></th></tr>
                                                            <tr><th className="k-slot-cell"></th></tr>
                                                            <tr><th><span className="k-time-text">9:00</span> <span className="k-time-period">PM</span></th></tr>
                                                            <tr><th className="k-slot-cell"></th></tr>
                                                            <tr><th><span className="k-time-text">10:00</span> <span className="k-time-period">PM</span></th></tr>
                                                            <tr><th className="k-slot-cell"></th></tr>
                                                            <tr><th><span className="k-time-text">11:00</span> <span className="k-time-period">PM</span></th></tr>
                                                            <tr><th className="k-slot-cell"></th></tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="k-scheduler-content" style={{ height: "425px" }} >
                                                    <table className="k-scheduler-table">
                                                        <tbody>
                                                            <tr className="k-middle-row"><td className=" k-nonwork-hour">&nbsp;</td><td className=" k-nonwork-hour">&nbsp;</td></tr>
                                                            <tr><td className=" k-nonwork-hour">&nbsp;</td><td className=" k-nonwork-hour">&nbsp;</td></tr>
                                                            <tr className="k-middle-row"><td>&nbsp;</td><td></td></tr>
                                                            <tr><td>&nbsp;</td><td>&nbsp;</td></tr>
                                                            <tr className="k-middle-row"><td>&nbsp;</td><td>&nbsp;</td></tr>
                                                            <tr><td>&nbsp;</td><td>&nbsp;</td></tr>
                                                            <tr className="k-middle-row"><td>&nbsp;</td><td>&nbsp;</td></tr>
                                                            <tr><td>&nbsp;</td><td>&nbsp;</td></tr>
                                                            <tr className="k-middle-row"><td>&nbsp;</td><td>&nbsp;</td></tr>
                                                            <tr><td>&nbsp;</td><td>&nbsp;</td></tr>
                                                            <tr className="k-middle-row"><td>&nbsp;</td><td>&nbsp;</td></tr>
                                                            <tr><td>&nbsp;</td><td>&nbsp;</td></tr>
                                                            <tr className="k-middle-row"><td>&nbsp;</td><td>&nbsp;</td></tr>
                                                            <tr><td>&nbsp;</td><td>&nbsp;</td></tr>
                                                            <tr className="k-middle-row"><td>&nbsp;</td><td>&nbsp;</td></tr>
                                                            <tr><td>&nbsp;</td><td>&nbsp;</td></tr>
                                                            <tr className="k-middle-row"><td>&nbsp;</td><td>&nbsp;</td></tr>
                                                            <tr><td>&nbsp;</td><td>&nbsp;</td></tr>
                                                            <tr className="k-middle-row"><td>&nbsp;</td><td>&nbsp;</td></tr>
                                                            <tr><td>&nbsp;</td><td>&nbsp;</td></tr>
                                                            <tr className="k-middle-row"><td className=" k-nonwork-hour">&nbsp;</td><td>&nbsp;</td></tr>
                                                            <tr><td className=" k-nonwork-hour">&nbsp;</td><td>&nbsp;</td></tr>
                                                            <tr className="k-middle-row"><td className=" k-nonwork-hour">&nbsp;</td><td>&nbsp;</td></tr>
                                                            <tr><td className=" k-nonwork-hour">&nbsp;</td><td>&nbsp;</td></tr>
                                                            <tr className="k-middle-row"><td className=" k-nonwork-hour">&nbsp;</td><td>&nbsp;</td></tr>
                                                            <tr><td className=" k-nonwork-hour">&nbsp;</td><td>&nbsp;</td></tr>
                                                            <tr className="k-middle-row"><td className=" k-nonwork-hour">&nbsp;</td><td>&nbsp;</td></tr>
                                                            <tr><td className=" k-nonwork-hour">&nbsp;</td><td>&nbsp;</td></tr>
                                                            <tr className="k-middle-row"><td className=" k-nonwork-hour">&nbsp;</td><td>&nbsp;</td></tr>
                                                            <tr><td className=" k-nonwork-hour">&nbsp;</td><td>&nbsp;</td></tr>
                                                            <tr className="k-middle-row"><td className=" k-nonwork-hour">&nbsp;</td><td>&nbsp;</td></tr>
                                                            <tr><td className=" k-nonwork-hour">&nbsp;</td><td>&nbsp;</td></tr>
                                                            <tr className="k-middle-row"><td className=" k-nonwork-hour">&nbsp;</td><td>&nbsp;</td></tr>
                                                            <tr><td className=" k-nonwork-hour">&nbsp;</td><td>&nbsp;</td></tr>
                                                        </tbody>
                                                    </table>
                                                    <div style={{ backgroundColor: "rgb(248, 163, 152)", borderColor: "rgb(248, 163, 152)", top: "135px", height: "42px", width: "290.1px", left: "2px" }}
                                                        className="k-event k-event-inverse">
                                                        <span className="k-event-actions"></span>
                                                        <div title="(8:30 AM - 9:00 AM): Test">
                                                            <div className="k-event-template k-event-time">8:30 AM - 9:00 AM</div>
                                                            <div className="k-event-template">Test</div>
                                                        </div>
                                                        <span className="k-event-actions">
                                                            <a className="k-link k-event-delete"><Icon icon="x"></Icon></a>
                                                        </span>
                                                        <span className="k-event-top-actions"></span>
                                                        <span className="k-event-bottom-actions"></span>
                                                        <span className="k-resize-handle k-resize-n"></span>
                                                        <span className="k-resize-handle k-resize-s"></span>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Toolbar className="k-scheduler-footer">
                                    <Button className="k-scheduler-today">Today</Button>
                                    <span className="k-spacer"></span>
                                    <Button className="k-scheduler-fullday">Show business hours</Button>
                                </Toolbar>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
);
