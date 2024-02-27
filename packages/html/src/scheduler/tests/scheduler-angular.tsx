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
            <div className="k-widget k-scheduler k-readonly-scheduler">
                <Toolbar className="k-scheduler-toolbar">
                    <div className="k-toolbar-group">
                        <ButtonGroup className="k-scheduler-navigation">
                            <Button className="k-group-start">Today</Button>
                            <Button icon="caret-alt-left"></Button>
                            <Button className="k-group-end"icon="caret-alt-right"></Button>
                        </ButtonGroup>
                        <Button icon="calendar" className="k-nav-current" fillMode="flat" >
                            Sunday, June 23, 2019 - Saturday, June 29, 2019
                        </Button>
                    </div>
                    <span className="k-spacer"></span>
                    <ButtonGroup className="k-scheduler-views">
                        <Button className="k-group-start">Day</Button>
                        <Button selected>Week</Button>
                        <Button>Month</Button>
                        <Button>Timeline</Button>
                        <Button className="k-group-end">Agenda</Button>
                    </ButtonGroup>
                </Toolbar>
                <div style={{ display: "block" }} >
                    <div className="k-scheduler-layout k-scheduler-flex-layout k-scheduler-weekview">
                        <div className="k-scheduler-pane">
                            <div className="k-scheduler-times" style={{ width: "79px" }} >
                                <table className="k-scheduler-table">
                                    <tbody>
                                        <tr><th>&#8203;</th></tr>
                                        <tr><th className="k-scheduler-times-all-day" style={{ height: "46px" }} >all day</th></tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="k-scheduler-header">
                                <div className="k-scheduler-header-wrap">
                                    <table className="k-scheduler-table">
                                        <tbody>
                                            <tr>
                                                <th><span className="k-link k-nav-day">Sun, 6/23</span></th>
                                                <th><span className="k-link k-nav-day">Mon, 6/24</span></th>
                                                <th><span className="k-link k-nav-day">Tue, 6/25</span></th>
                                                <th><span className="k-link k-nav-day">Wed, 6/26</span></th>
                                                <th><span className="k-link k-nav-day">Thu, 6/27</span></th>
                                                <th><span className="k-link k-nav-day">Fri, 6/28</span></th>
                                                <th><span className="k-link k-nav-day">Sat, 6/29</span></th>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div style={{ position: "relative" }} >
                                        <table className="k-scheduler-table k-scheduler-header-all-day">
                                            <tbody>
                                                <tr>
                                                    <td style={{ height: "46px" }} ></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="k-event" style={{ width: "300px", left: "304px", top: '0px', height: "25px" }} >
                                            <span className="k-event-actions"></span>
                                            <div><div className="k-event-template">Attending HR Conference</div></div>
                                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon icon="x"></Icon></a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-pane">
                            <div className="k-scheduler-times" style={{ height: "356px" }} >
                                <table className="k-scheduler-table">
                                    <tbody>
                                        <tr><th>7:00 AM</th></tr>
                                        <tr><th className="k-slot-cell"></th></tr>
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
                                    </tbody>
                                </table>
                            </div>
                            <div className="k-scheduler-content" style={{ height: "405px" }} >
                                <table className="k-scheduler-table">
                                    <tbody>
                                        <tr className="k-middle-row">
                                            <td className="k-nonwork-hour"></td>
                                            <td className="k-nonwork-hour"></td>
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
                                            <td className="k-nonwork-hour"></td>
                                            <td className="k-nonwork-hour"></td>
                                        </tr>
                                        <tr className="k-middle-row">
                                            <td className="k-nonwork-hour"></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className="k-nonwork-hour"></td>
                                        </tr>
                                        <tr>
                                            <td className="k-nonwork-hour"></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className="k-nonwork-hour"></td>
                                        </tr>
                                        <tr className="k-middle-row">
                                            <td className="k-nonwork-hour"></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className="k-nonwork-hour"></td>
                                        </tr>
                                        <tr>
                                            <td className="k-nonwork-hour"></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className="k-nonwork-hour"></td>
                                        </tr>
                                        <tr className="k-middle-row">
                                            <td className="k-nonwork-hour"></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className="k-nonwork-hour"></td>
                                        </tr>
                                        <tr>
                                            <td className="k-nonwork-hour"></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className="k-nonwork-hour"></td>
                                        </tr>
                                        <tr className="k-middle-row">
                                            <td className="k-nonwork-hour"></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className="k-nonwork-hour"></td>
                                        </tr>
                                        <tr>
                                            <td className="k-nonwork-hour"></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className="k-nonwork-hour"></td>
                                        </tr>
                                        <tr className="k-middle-row">
                                            <td className="k-nonwork-hour"></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className="k-nonwork-hour"></td>
                                        </tr>
                                        <tr>
                                            <td className="k-nonwork-hour"></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className="k-nonwork-hour"></td>
                                        </tr>
                                        <tr className="k-middle-row">
                                            <td className="k-nonwork-hour"></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className="k-nonwork-hour"></td>
                                        </tr>
                                        <tr>
                                            <td className="k-nonwork-hour"></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className="k-nonwork-hour"></td>
                                        </tr>
                                        <tr className="k-middle-row">
                                            <td className="k-nonwork-hour"></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className="k-nonwork-hour"></td>
                                        </tr>
                                        <tr>
                                            <td className="k-nonwork-hour"></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className="k-nonwork-hour"></td>
                                        </tr>
                                        <tr className="k-middle-row">
                                            <td className="k-nonwork-hour"></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className="k-nonwork-hour"></td>
                                        </tr>
                                        <tr>
                                            <td className="k-nonwork-hour"></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className="k-nonwork-hour"></td>
                                        </tr>
                                        <tr className="k-middle-row">
                                            <td className="k-nonwork-hour"></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className="k-nonwork-hour"></td>
                                        </tr>
                                        <tr>
                                            <td className="k-nonwork-hour"></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className="k-nonwork-hour"></td>
                                        </tr>
                                        <tr className="k-middle-row">
                                            <td className="k-nonwork-hour"></td>
                                            <td className="k-nonwork-hour"></td>
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
                                            <td className="k-nonwork-hour"></td>
                                            <td className="k-nonwork-hour"></td>
                                        </tr>
                                        <tr className="k-middle-row">
                                            <td className="k-nonwork-hour"></td>
                                            <td className="k-nonwork-hour"></td>
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
                                            <td className="k-nonwork-hour"></td>
                                            <td className="k-nonwork-hour"></td>
                                        </tr>
                                        <tr className="k-middle-row">
                                            <td className="k-nonwork-hour"></td>
                                            <td className="k-nonwork-hour"></td>
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
                                            <td className="k-nonwork-hour"></td>
                                            <td className="k-nonwork-hour"></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="k-event" style={{ width: "150px", left: "306px", top: '0px', height: "73px" }} >
                                    <span className="k-event-actions"><Icon icon="arrow-rotate-cw"></Icon></span>
                                    <div>
                                        <div className="k-event-template k-event-time">7:00 AM - 8:00 AM</div>
                                        <div className="k-event-template">HR Lecture</div>
                                    </div>
                                    <span className="k-event-actions"><a className="k-link k-event-delete"><Icon icon="x"></Icon></a></span>
                                </div>

                                <div className="k-event k-event-drag-hint" style={{ width: "150px", left: "631px", top: '0px', height: "73px" }} >
                                    <span className="k-event-actions"><Icon icon="arrow-rotate-cw"></Icon></span>
                                    <div>
                                        <div className="k-event-template k-event-time">7:00 AM - 8:00 AM</div>
                                        <div className="k-event-template">HR Lecture</div>
                                    </div>
                                    <span className="k-event-actions"><a className="k-link k-event-delete"><Icon icon="x"></Icon></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Toolbar className="k-scheduler-footer">
                    <Button icon="clock" className="k-scheduler-fullday">Show business hours</Button>
                </Toolbar>
            </div>
        </div>
    </>
);
