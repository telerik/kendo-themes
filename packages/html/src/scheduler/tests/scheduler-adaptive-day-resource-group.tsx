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
                                    <MenuButton fillMode="flat">Day</MenuButton>
                                </Toolbar>
                                <Toolbar className="k-scheduler-toolbar" aria-label="Scheduler navigation">
                                    <Button className="k-nav-prev" icon="chevron-left" aria-label="Navigate to previous period"></Button>
                                    <span className="k-spacer"></span>
                                    <Button className="k-nav-current" fillMode="flat" aria-live="polite">
                                        Jun 13, 2013
                                    </Button>
                                    <span className="k-spacer"></span>
                                    <Button className="k-nav-next" icon="chevron-right" aria-label="Navigate to next period"></Button>
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
                                                    <SchedulerEvent style={{ top: "135px", height: "42px", width: "290.1px", left: "2px" }} title="Test" time="8:30 AM - 9:00 AM" />
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
