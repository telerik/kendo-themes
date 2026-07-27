import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import MenuButton from '../../menu-button/menu-button.spec';
import { Toolbar } from '../../toolbar';
import { SchedulerEvent } from '..';

const style = `
    #test-area {
        max-width: 1080px;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <div className="k-pane-wrapper">
                <div className="k-pane">
                    <div className="k-view">
                        <div className="k-stretched-view k-content">
                            <div id="scheduler" className="k-scheduler k-scheduler-mobile">
                                <Toolbar className="k-scheduler-toolbar" aria-label="Scheduler toolbar">
                                    <ButtonGroup className="k-scheduler-tools">
                                        <Button className="k-pdf k-group-start" icon="file-pdf" aria-label="Export to PDF"></Button>
                                        <Button className="k-nav-calendar" icon="calendar" aria-label="Open calendar"></Button>
                                        <Button className="k-create-event k-group-end" icon="plus" aria-label="Create event"></Button>
                                    </ButtonGroup>
                                    <span className="k-spacer"></span>
                                    <MenuButton fillMode="flat">Month</MenuButton>
                                </Toolbar>
                                <Toolbar className="k-scheduler-toolbar" aria-label="Scheduler navigation">
                                    <Button className="k-nav-prev" icon="chevron-left" aria-label="Navigate to previous period"></Button>
                                    <span className="k-spacer"></span>
                                    <Button className="k-nav-current" fillMode="flat" aria-live="polite">
                                        Jun 2013
                                    </Button>
                                    <span className="k-spacer"></span>
                                    <Button className="k-nav-next" icon="chevron-right" aria-label="Navigate to next period"></Button>
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
                                                        <SchedulerEvent recurring="recurring" resizable="none" style={{ backgroundColor: "#51a0ed", borderColor: "#51a0ed" }} title="Dance Practice" />
                                                    </div>
                                                    <div className="k-events-container" style={{ top: "97px", left: "280px", width: "140px" }}>
                                                        <SchedulerEvent resizable="none" style={{ backgroundColor: "#f8a398", borderColor: "#f8a398" }} title="Breakfast at Starbucks" />
                                                        <SchedulerEvent resizable="none" style={{ backgroundColor: "#56ca85", borderColor: "#56ca85" }} title="Software updates" />
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
