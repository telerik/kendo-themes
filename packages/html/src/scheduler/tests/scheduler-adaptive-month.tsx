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
                                        <option>Month</option>
                                    </select>
                                </Toolbar>
                                <Toolbar className="k-scheduler-toolbar">
                                    <Button className="k-nav-prev" icon="chevron-left"></Button>
                                    <span className="k-spacer"></span>
                                    <Button className="k-nav-current" fillMode="flat" >
                                        June, 2013
                                    </Button>
                                    <span className="k-spacer"></span>
                                    <Button className="k-nav-next" icon="chevron-right"></Button>
                                </Toolbar>
                                <table className="k-scheduler-layout k-scheduler-monthview">
                                    <tbody>
                                        <tr className="k-mobile-header">
                                            <td>
                                                <div className="k-scheduler-header">
                                                    <div className="k-scheduler-header-wrap">
                                                        <table className="k-scheduler-table">
                                                            <tbody>
                                                                <tr>
                                                                    <th>S</th>
                                                                    <th>M</th>
                                                                    <th>T</th>
                                                                    <th>W</th>
                                                                    <th>T</th>
                                                                    <th>F</th>
                                                                    <th>S</th>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="k-scheduler-content" style={{ height: "425px" }}>
                                                    <table className="k-scheduler-table">
                                                        <tbody>
                                                            <tr>
                                                                <td className=" k-other-month"><span className="k-link k-nav-day">26</span></td>
                                                                <td className=" k-other-month"><span className="k-link k-nav-day">27</span></td>
                                                                <td className=" k-other-month"><span className="k-link k-nav-day">28</span></td>
                                                                <td className=" k-other-month"><span className="k-link k-nav-day">29</span></td>
                                                                <td className=" k-other-month"><span className="k-link k-nav-day">30</span></td>
                                                                <td className=" k-other-month"><span className="k-link k-nav-day">31</span></td>
                                                                <td><span className="k-link k-nav-day">01</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td><span className="k-link k-nav-day">02</span></td>
                                                                <td><span className="k-link k-nav-day">03</span></td>
                                                                <td><span className="k-link k-nav-day">04</span></td>
                                                                <td><span className="k-link k-nav-day">05</span></td>
                                                                <td><span className="k-link k-nav-day">06</span></td>
                                                                <td><span className="k-link k-nav-day">07</span></td>
                                                                <td><span className="k-link k-nav-day">08</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td><span className="k-link k-nav-day">09</span></td>
                                                                <td><span className="k-link k-nav-day">10</span></td>
                                                                <td><span className="k-link k-nav-day">11</span></td>
                                                                <td><span className="k-link k-nav-day">12</span></td>
                                                                <td><span className="k-link k-nav-day">13</span></td>
                                                                <td><span className="k-link k-nav-day">14</span></td>
                                                                <td><span className="k-link k-nav-day">15</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td><span className="k-link k-nav-day">16</span></td>
                                                                <td><span className="k-link k-nav-day">17</span></td>
                                                                <td><span className="k-link k-nav-day">18</span></td>
                                                                <td><span className="k-link k-nav-day">19</span></td>
                                                                <td><span className="k-link k-nav-day">20</span></td>
                                                                <td><span className="k-link k-nav-day">21</span></td>
                                                                <td><span className="k-link k-nav-day">22</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td><span className="k-link k-nav-day">23</span></td>
                                                                <td><span className="k-link k-nav-day">24</span></td>
                                                                <td><span className="k-link k-nav-day">25</span></td>
                                                                <td><span className="k-link k-nav-day">26</span></td>
                                                                <td><span className="k-link k-nav-day">27</span></td>
                                                                <td><span className="k-link k-nav-day">28</span></td>
                                                                <td><span className="k-link k-nav-day">29</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td><span className="k-link k-nav-day">30</span></td>
                                                                <td className=" k-other-month"><span className="k-link k-nav-day">01</span></td>
                                                                <td className=" k-other-month"><span className="k-link k-nav-day">02</span></td>
                                                                <td className=" k-other-month"><span className="k-link k-nav-day">03</span></td>
                                                                <td className=" k-other-month"><span className="k-link k-nav-day">04</span></td>
                                                                <td className=" k-other-month"><span className="k-link k-nav-day">05</span></td>
                                                                <td className=" k-other-month"><span className="k-link k-nav-day">06</span></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <div className="k-events-container" style={{ top: "97px", left: "140px", width: "140px" }}>
                                                        <div style={{ backgroundColor: "#51a0ed", borderColor: "#51a0ed" }} className="k-event">
                                                            <span className="k-event-actions"><Icon icon="arrow-rotate-cw"></Icon></span>
                                                            <div><div className="k-event-template">Dance Practice</div></div>
                                                            <span className="k-event-actions"></span>
                                                        </div>
                                                    </div>
                                                    <div className="k-events-container" style={{ top: "97px", left: "280px", width: "140px" }}>
                                                        <div style={{ backgroundColor: "#f8a398", borderColor: "#f8a398" }} className="k-event">
                                                            <span className="k-event-actions"></span>
                                                            <div><div className="k-event-template">Breakfast at Starbucks</div></div>
                                                            <span className="k-event-actions"></span>
                                                        </div>
                                                        <div style={{ backgroundColor: "#56ca85", borderColor: "#56ca85" }} className="k-event">
                                                            <span className="k-event-actions"></span>
                                                            <div><div className="k-event-template">Software updates</div></div>
                                                            <span className="k-event-actions"></span>
                                                        </div>
                                                    </div>
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
