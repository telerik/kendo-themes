import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { Icon } from '../../icon';
import { Toolbar } from '../../toolbar';

const styles = `
    .k-gantt {
        height: 700px;
    }
    .k-gantt-treelist {
        width: 250px;
    }
    .k-gantt-timeline-pane {
        flex: 1;
        overflow: auto;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area">

            <div id="gantt" className="k-widget k-gantt">
                <Toolbar className="k-gantt-toolbar k-gantt-header">
                    <Button className="k-gantt-toggle" icon="layout-1-by-4"></Button>
                    <Button className="k-gantt-create" icon="plus">Add Task</Button>
                    <span className="k-spacer"></span>
                    <div className="k-gantt-views-wrapper">
                        <select className="k-picker k-picker-solid k-dropdown-list k-dropdown k-views-dropdown k-rounded-md">
                            <option value="day">Day</option>
                            <option value="week">Week</option>
                            <option value="month">Month</option>
                        </select>
                        <ButtonGroup className="k-gantt-views">
                            <Button className="k-view-day">Day</Button>
                            <Button className="k-view-week" selected>Week</Button>
                            <Button className="k-view-month">Month</Button>
                        </ButtonGroup>
                    </div>
                </Toolbar>
                <div className="k-gantt-content">
                    <div className="k-gantt-treelist">
                        <div className="k-treelist k-grid k-grid-md k-grid-display-block">
                            <div className="k-table-thead k-grid-header">
                                <div className="k-grid-header-wrap">
                                    <table className="k-table k-table-md k-grid-header-table" style={{ minWidth: "250px" }}>
                                        <colgroup>
                                            <col className="k-drag-col"/>
                                            <col style={{ width: '50px' }} />
                                            <col />
                                        </colgroup>
                                        <thead className="k-table-thead">
                                            <tr className="k-table-row">
                                                <th className="k-table-th k-header k-drag-cell"></th>
                                                <th className="k-table-th k-header" rowSpan={1}>
                                                    <span className="k-cell-inner">
                                                        <span className="k-link">
                                                            <span className="k-column-title">ID</span>
                                                        </span>
                                                    </span>
                                                </th>
                                                <th className="k-table-th k-header" rowSpan={1}>
                                                    <span className="k-cell-inner">
                                                        <span className="k-link">
                                                            <span className="k-column-title">Title</span>
                                                        </span>
                                                    </span>
                                                </th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                            <div className="k-grid-content k-auto-scrollable" style={{ height: "530px", display: "block" }}>
                                <table className="k-table k-table-md k-grid-table k-selectable" style={{ minWidth: "250px" }}>
                                    <colgroup>
                                        <col className="k-drag-col" />
                                        <col style={{ width: '50px' }} />
                                        <col />
                                    </colgroup>
                                    <tbody className="k-table-tbody">
                                        <tr className="k-table-row k-treelist-group">
                                            <td className="k-table-td k-drag-cell"><Icon icon="reorder" /></td>
                                            <td className="k-table-td">7</td>
                                            <td style={{ whiteSpace: "nowrap" }} className="k-table-td"><Icon className="k-treelist-toggle" icon="caret-alt-down" />Software validation, research and implementation</td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-alt">
                                            <td className="k-table-td k-drag-cell"><Icon icon="reorder" /></td>
                                            <td className="k-table-td">18</td>
                                            <td style={{ whiteSpace: "nowrap" }} className="k-table-td"><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="none" />Project Kickoff</td>
                                        </tr>
                                        <tr className="k-table-row k-treelist-group">
                                            <td className="k-table-td k-drag-cell"><Icon icon="reorder" /></td>
                                            <td className="k-table-td">11</td>
                                            <td style={{ whiteSpace: "nowrap" }} className="k-table-td"><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="caret-alt-down" />Research</td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-alt">
                                            <td className="k-table-td k-drag-cell"><Icon icon="reorder" /></td>
                                            <td className="k-table-td">19</td>
                                            <td style={{ whiteSpace: "nowrap" }} className="k-table-td"><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="none" />Validation with Customers</td>
                                        </tr>
                                        <tr className="k-table-row">
                                            <td className="k-table-td k-drag-cell"><Icon icon="reorder" /></td>
                                            <td className="k-table-td">20</td>
                                            <td style={{ whiteSpace: "nowrap" }} className="k-table-td"><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="none" />Market Research</td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-alt">
                                            <td className="k-table-td k-drag-cell"><Icon icon="reorder" /></td>
                                            <td className="k-table-td">39</td>
                                            <td style={{ whiteSpace: "nowrap" }} className="k-table-td"><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="none" />Functional and Technical Specification</td>
                                        </tr>
                                        <tr className="k-table-row k-treelist-group">
                                            <td className="k-table-td k-drag-cell"><Icon icon="reorder" /></td>
                                            <td className="k-table-td">12</td>
                                            <td style={{ whiteSpace: "nowrap" }} className="k-table-td"><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="caret-alt-down" />Design</td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-alt">
                                            <td className="k-table-td k-drag-cell"><Icon icon="reorder" /></td>
                                            <td className="k-table-td">22</td>
                                            <td style={{ whiteSpace: "nowrap" }} className="k-table-td"><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="none" />UI Design</td>
                                        </tr>
                                        <tr className="k-table-row">
                                            <td className="k-table-td k-drag-cell"><Icon icon="reorder" /></td>
                                            <td className="k-table-td">23</td>
                                            <td style={{ whiteSpace: "nowrap" }} className="k-table-td"><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="none" />HTML Prototype</td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-alt k-treelist-group">
                                            <td className="k-table-td k-drag-cell"><Icon icon="reorder" /></td>
                                            <td className="k-table-td">13</td>
                                            <td style={{ whiteSpace: "nowrap" }} className="k-table-td"><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="caret-alt-down" />Implementation</td>
                                        </tr>
                                        <tr className="k-table-row">
                                            <td className="k-table-td k-drag-cell"><Icon icon="reorder" /></td>
                                            <td className="k-table-td">24</td>
                                            <td style={{ whiteSpace: "nowrap" }} className="k-table-td"><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="none" />Prototype</td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-alt">
                                            <td className="k-table-td k-drag-cell"><Icon icon="reorder" /></td>
                                            <td className="k-table-td">26</td>
                                            <td style={{ whiteSpace: "nowrap" }} className="k-table-td"><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="none" />Architecture</td>
                                        </tr>
                                        <tr className="k-table-row">
                                            <td className="k-table-td k-drag-cell"><Icon icon="reorder" /></td>
                                            <td className="k-table-td">27</td>
                                            <td style={{ whiteSpace: "nowrap" }} className="k-table-td"><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="none" />Data Layer</td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-alt">
                                            <td className="k-table-td k-drag-cell"><Icon icon="reorder" /></td>
                                            <td className="k-table-td">29</td>
                                            <td style={{ whiteSpace: "nowrap" }} className="k-table-td"><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="none" />UI and Interaction</td>
                                        </tr>
                                        <tr className="k-table-row">
                                            <td className="k-table-td k-drag-cell"><Icon icon="reorder" /></td>
                                            <td className="k-table-td">28</td>
                                            <td style={{ whiteSpace: "nowrap" }} className="k-table-td"><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="none" />Unit Tests</td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-alt k-treelist-group">
                                            <td className="k-table-td k-drag-cell"><Icon icon="reorder" /></td>
                                            <td className="k-table-td">14</td>
                                            <td style={{ whiteSpace: "nowrap" }} className="k-table-td"><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="caret-alt-down" />Testing</td>
                                        </tr>
                                        <tr className="k-table-row">
                                            <td className="k-table-td k-drag-cell"><Icon icon="reorder" /></td>
                                            <td className="k-table-td">32</td>
                                            <td style={{ whiteSpace: "nowrap" }} className="k-table-td"><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="none" />Integration Testing</td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-alt">
                                            <td className="k-table-td k-drag-cell"><Icon icon="reorder" /></td>
                                            <td className="k-table-td">33</td>
                                            <td style={{ whiteSpace: "nowrap" }} className="k-table-td"><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="none" />Load Testing</td>
                                        </tr>
                                        <tr className="k-table-row k-treelist-group">
                                            <td className="k-table-td k-drag-cell"><Icon icon="reorder" /></td>
                                            <td className="k-table-td">30</td>
                                            <td style={{ whiteSpace: "nowrap" }} className="k-table-td"><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="caret-alt-down" />Documentation</td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-alt">
                                            <td className="k-table-td k-drag-cell"><Icon icon="reorder" /></td>
                                            <td className="k-table-td">34</td>
                                            <td style={{ whiteSpace: "nowrap" }} className="k-table-td"><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="none" />Structure</td>
                                        </tr>
                                        <tr className="k-table-row">
                                            <td className="k-table-td k-drag-cell"><Icon icon="reorder" /></td>
                                            <td className="k-table-td">35</td>
                                            <td style={{ whiteSpace: "nowrap" }} className="k-table-td"><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="none" />Articles</td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-alt k-treelist-group">
                                            <td className="k-table-td k-drag-cell"><Icon icon="reorder" /></td>
                                            <td className="k-table-td">31</td>
                                            <td style={{ whiteSpace: "nowrap" }} className="k-table-td"><Icon className="k-treelist-toggle" icon="none" /><Icon icon="caret-alt-right" />Demos</td>
                                        </tr>
                                        <tr className="k-table-row">
                                            <td className="k-table-td k-drag-cell"><Icon icon="reorder" /></td>
                                            <td className="k-table-td">17</td>
                                            <td style={{ whiteSpace: "nowrap" }} className="k-table-td"><Icon className="k-treelist-toggle" icon="none" /><Icon className="k-treelist-toggle" icon="none" />Release</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="k-splitbar k-splitbar-horizontal k-splitbar-draggable-horizontal" style={{ height: "604px" }}>
                        <div className="k-resize-handle"></div>
                    </div>
                    <div className="k-gantt-timeline-pane">
                        <div className="k-gantt-timeline k-grid k-grid-md">
                            <div className="k-grid-header">
                                <div className="k-grid-header-wrap">
                                    <table className="k-table k-table-md k-grid-header-table" style={{ width: "4200px" }}>
                                        <colgroup>
                                            <col /><col /><col /><col /><col /><col /><col />
                                            <col /><col /><col /><col /><col /><col /><col />
                                            <col /><col /><col /><col /><col /><col /><col />
                                            <col /><col /><col /><col /><col /><col /><col />
                                            <col /><col /><col /><col /><col /><col /><col />
                                            <col /><col /><col /><col /><col /><col /><col />
                                        </colgroup>
                                        <tbody className="k-table-tbody">
                                            <tr className="k-table-row">
                                                <td colSpan={7} className="k-table-td k-header">Sun 6/01 - Sat 6/07</td>
                                                <td colSpan={7} className="k-table-td k-header">Sun 6/08 - Sat 6/14</td>
                                                <td colSpan={7} className="k-table-td k-header">Sun 6/15 - Sat 6/21</td>
                                                <td colSpan={7} className="k-table-td k-header">Sun 6/22 - Sat 6/28</td>
                                                <td colSpan={7} className="k-table-td k-header">Sun 6/29 - Sat 7/05</td>
                                                <td colSpan={7} className="k-table-td k-header">Sun 7/06 - Sat 7/12</td>
                                            </tr>
                                            <tr className="k-table-row">
                                                <td colSpan={1} className="k-table-td k-header k-nonwork-hour">Sun 6/01</td>
                                                <td colSpan={1} className="k-table-td k-header">Mon 6/02</td>
                                                <td colSpan={1} className="k-table-td k-header">Tue 6/03</td>
                                                <td colSpan={1} className="k-table-td k-header">Wed 6/04</td>
                                                <td colSpan={1} className="k-table-td k-header">Thu 6/05</td>
                                                <td colSpan={1} className="k-table-td k-header">Fri 6/06</td>
                                                <td colSpan={1} className="k-table-td k-header k-nonwork-hour">Sat 6/07</td>
                                                <td colSpan={1} className="k-table-td k-header k-nonwork-hour">Sun 6/08</td>
                                                <td colSpan={1} className="k-table-td k-header">Mon 6/09</td>
                                                <td colSpan={1} className="k-table-td k-header">Tue 6/10</td>
                                                <td colSpan={1} className="k-table-td k-header">Wed 6/11</td>
                                                <td colSpan={1} className="k-table-td k-header">Thu 6/12</td>
                                                <td colSpan={1} className="k-table-td k-header">Fri 6/13</td>
                                                <td colSpan={1} className="k-table-td k-header k-nonwork-hour">Sat 6/14</td>
                                                <td colSpan={1} className="k-table-td k-header k-nonwork-hour">Sun 6/15</td>
                                                <td colSpan={1} className="k-table-td k-header">Mon 6/16</td>
                                                <td colSpan={1} className="k-table-td k-header">Tue 6/17</td>
                                                <td colSpan={1} className="k-table-td k-header">Wed 6/18</td>
                                                <td colSpan={1} className="k-table-td k-header">Thu 6/19</td>
                                                <td colSpan={1} className="k-table-td k-header">Fri 6/20</td>
                                                <td colSpan={1} className="k-table-td k-header k-nonwork-hour">Sat 6/21</td>
                                                <td colSpan={1} className="k-table-td k-header k-nonwork-hour">Sun 6/22</td>
                                                <td colSpan={1} className="k-table-td k-header">Mon 6/23</td>
                                                <td colSpan={1} className="k-table-td k-header">Tue 6/24</td>
                                                <td colSpan={1} className="k-table-td k-header">Wed 6/25</td>
                                                <td colSpan={1} className="k-table-td k-header">Thu 6/26</td>
                                                <td colSpan={1} className="k-table-td k-header">Fri 6/27</td>
                                                <td colSpan={1} className="k-table-td k-header k-nonwork-hour">Sat 6/28</td>
                                                <td colSpan={1} className="k-table-td k-header k-nonwork-hour">Sun 6/29</td>
                                                <td colSpan={1} className="k-table-td k-header">Mon 6/30</td>
                                                <td colSpan={1} className="k-table-td k-header">Tue 7/01</td>
                                                <td colSpan={1} className="k-table-td k-header">Wed 7/02</td>
                                                <td colSpan={1} className="k-table-td k-header">Thu 7/03</td>
                                                <td colSpan={1} className="k-table-td k-header">Fri 7/04</td>
                                                <td colSpan={1} className="k-table-td k-header k-nonwork-hour">Sat 7/05</td>
                                                <td colSpan={1} className="k-table-td k-header k-nonwork-hour">Sun 7/06</td>
                                                <td colSpan={1} className="k-table-td k-header">Mon 7/07</td>
                                                <td colSpan={1} className="k-table-td k-header">Tue 7/08</td>
                                                <td colSpan={1} className="k-table-td k-header">Wed 7/09</td>
                                                <td colSpan={1} className="k-table-td k-header">Thu 7/10</td>
                                                <td colSpan={1} className="k-table-td k-header">Fri 7/11</td>
                                                <td colSpan={1} className="k-table-td k-header k-nonwork-hour">Sat 7/12</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="k-grid-content" style={{ height: "530px" }}>
                                <div className="k-gantt-tables">
                                    <table className="k-table k-table-md k-grid-table k-gantt-rows" style={{ width: "4200px" }}>
                                        <colgroup>
                                            <col />
                                        </colgroup>
                                        <tbody className="k-table-tbody">
                                            <tr className="k-table-row"><td className="k-table-td"></td></tr>
                                            <tr className="k-table-row k-table-alt-row k-alt"><td className="k-table-td"></td></tr>
                                            <tr className="k-table-row"><td className="k-table-td"></td></tr>
                                            <tr className="k-table-row k-table-alt-row k-alt"><td className="k-table-td"></td></tr>
                                            <tr className="k-table-row"><td className="k-table-td"></td></tr>
                                            <tr className="k-table-row k-table-alt-row k-alt"><td className="k-table-td"></td></tr>
                                            <tr className="k-table-row"><td className="k-table-td"></td></tr>
                                            <tr className="k-table-row k-table-alt-row k-alt"><td className="k-table-td"></td></tr>
                                            <tr className="k-table-row"><td className="k-table-td"></td></tr>
                                            <tr className="k-table-row k-table-alt-row k-alt"><td className="k-table-td"></td></tr>
                                            <tr className="k-table-row"><td className="k-table-td"></td></tr>
                                            <tr className="k-table-row k-table-alt-row k-alt"><td className="k-table-td"></td></tr>
                                            <tr className="k-table-row"><td className="k-table-td"></td></tr>
                                            <tr className="k-table-row k-table-alt-row k-alt"><td className="k-table-td"></td></tr>
                                            <tr className="k-table-row"><td className="k-table-td"></td></tr>
                                            <tr className="k-table-row k-table-alt-row k-alt"><td className="k-table-td"></td></tr>
                                            <tr className="k-table-row"><td className="k-table-td"></td></tr>
                                            <tr className="k-table-row k-table-alt-row k-alt"><td className="k-table-td"></td></tr>
                                            <tr className="k-table-row"><td className="k-table-td"></td></tr>
                                            <tr className="k-table-row k-table-alt-row k-alt"><td className="k-table-td"></td></tr>
                                            <tr className="k-table-row"><td className="k-table-td"></td></tr>
                                            <tr className="k-table-row k-table-alt-row k-alt"><td className="k-table-td"></td></tr>
                                            <tr className="k-table-row"><td className="k-table-td"></td></tr>
                                        </tbody>
                                    </table>
                                    <table className="k-table k-table-md k-gantt-columns" style={{ width: "4200px", height: "828px" }}>
                                        <colgroup>
                                            <col /><col /><col /><col /><col /><col /><col />
                                            <col /><col /><col /><col /><col /><col /><col />
                                            <col /><col /><col /><col /><col /><col /><col />
                                            <col /><col /><col /><col /><col /><col /><col />
                                            <col /><col /><col /><col /><col /><col /><col />
                                            <col /><col /><col /><col /><col /><col /><col />
                                        </colgroup>
                                        <tbody className="k-table-tbody">
                                            <tr className="k-table-row">
                                                <td className="k-table-td k-nonwork-hour"></td>
                                                <td className="k-table-td"></td><td className="k-table-td"></td><td className="k-table-td"></td><td className="k-table-td"></td><td className="k-table-td"></td>
                                                <td className="k-table-td k-nonwork-hour"></td>
                                                <td className="k-table-td k-nonwork-hour"></td>
                                                <td className="k-table-td"></td><td className="k-table-td"></td><td className="k-table-td"></td><td className="k-table-td"></td><td className="k-table-td"></td>
                                                <td className="k-table-td k-nonwork-hour"></td>
                                                <td className="k-table-td k-nonwork-hour"></td>
                                                <td className="k-table-td"></td><td className="k-table-td"></td><td className="k-table-td"></td><td className="k-table-td"></td><td className="k-table-td"></td>
                                                <td className="k-table-td k-nonwork-hour"></td>
                                                <td className="k-table-td k-nonwork-hour"></td>
                                                <td className="k-table-td"></td><td className="k-table-td"></td><td className="k-table-td"></td><td className="k-table-td"></td><td className="k-table-td"></td>
                                                <td className="k-table-td k-nonwork-hour"></td>
                                                <td className="k-table-td k-nonwork-hour"></td>
                                                <td className="k-table-td"></td><td className="k-table-td"></td><td className="k-table-td"></td><td className="k-table-td"></td><td className="k-table-td"></td>
                                                <td className="k-table-td k-nonwork-hour"></td>
                                                <td className="k-table-td k-nonwork-hour"></td>
                                                <td className="k-table-td"></td><td className="k-table-td"></td><td className="k-table-td"></td><td className="k-table-td"></td><td className="k-table-td"></td>
                                                <td className="k-table-td k-nonwork-hour"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table className="k-table k-table-md k-gantt-tasks" style={{ width: "4200px" }}>
                                        <colgroup>
                                            <col />
                                        </colgroup>
                                        <tbody className="k-table-tbody">
                                            <tr className="k-table-row">
                                                <td className="k-table-td">
                                                    <div className="k-task-wrap k-summary-wrap" style={{ left: "113px" }}>
                                                        <div className="k-task k-task-summary" style={{ width: "4000px" }}>
                                                            <div className="k-task-summary-progress" style={{ width: "1720px" }}>
                                                                <div className="k-task-summary-complete" style={{ width: "4000px" }}></div>
                                                            </div>
                                                        </div>
                                                        <div className="k-task-dot k-task-start"></div>
                                                        <div className="k-task-dot k-task-end" style={{ right: '0px' }}></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="k-table-row">
                                                <td className="k-table-td">
                                                    <div className="k-task-wrap k-milestone-wrap" style={{ left: "113px" }}>
                                                        <div className="k-task k-task-milestone"></div>
                                                        <div className="k-task-dot k-task-start"></div>
                                                        <div className="k-task-dot k-task-end" style={{ right: '0px' }}></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="k-table-row">
                                                <td className="k-table-td">
                                                    <div className="k-task-wrap k-summary-wrap" style={{ left: "113px" }}>
                                                        <div className="k-task k-task-summary" style={{ width: "500px" }}>
                                                            <div className="k-task-summary-progress" style={{ width: "215px" }}>
                                                                <div className="k-task-summary-complete" style={{ width: "500px" }}></div>
                                                            </div>
                                                        </div>
                                                        <div className="k-task-dot k-task-start"></div>
                                                        <div className="k-task-dot k-task-end" style={{ right: '0px' }}></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="k-table-row">
                                                <td className="k-table-td">
                                                    <div className="k-task-wrap" style={{ left: "113px" }}>
                                                        <div className="k-task k-task-single" style={{ width: "200px" }}>
                                                            <div className="k-task-complete" style={{ width: '50px' }}></div>
                                                            <div className="k-task-content">
                                                                <div className="k-task-template">Validation with Customers</div>
                                                                <span className="k-task-actions"><a className="k-link k-task-delete"><Icon icon="x" /></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                                                            </div>
                                                        </div>
                                                        <div className="k-task-dot k-task-start"></div>
                                                        <div className="k-task-dot k-task-end" style={{ right: '0px' }}></div>
                                                        <div className="k-task-draghandle" style={{ left: '50px' }}></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="k-table-row">
                                                <td className="k-table-td">
                                                    <div className="k-task-wrap" style={{ left: "113px" }}>
                                                        <div className="k-task k-task-single" style={{ width: "200px" }}>
                                                            <div className="k-task-complete" style={{ width: "164px" }}></div>
                                                            <div className="k-task-content">
                                                                <div className="k-task-template">Market Research</div>
                                                                <span className="k-task-actions"><a className="k-link k-task-delete"><Icon icon="x" /></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                                                            </div>
                                                        </div>
                                                        <div className="k-task-dot k-task-start"></div>
                                                        <div className="k-task-dot k-task-end" style={{ right: '0px' }}></div>
                                                        <div className="k-task-draghandle" style={{ left: "164px" }}></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="k-table-row">
                                                <td className="k-table-td">
                                                    <div className="k-task-wrap" style={{ left: "313px" }}>
                                                        <div className="k-task k-task-single" style={{ width: "300px" }}>
                                                            <div className="k-task-complete" style={{ width: "69px" }}></div>
                                                            <div className="k-task-content">
                                                                <div className="k-task-template">Functional and Technical Specification</div>
                                                                <span className="k-task-actions"><a className="k-link k-task-delete"><Icon icon="x" /></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                                                            </div>
                                                        </div>
                                                        <div className="k-task-dot k-task-start"></div>
                                                        <div className="k-task-dot k-task-end" style={{ right: '0px' }}></div>
                                                        <div className="k-task-draghandle" style={{ left: "69px" }}></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="k-table-row">
                                                <td className="k-table-td">
                                                    <div className="k-task-wrap k-summary-wrap" style={{ left: "813px" }}>
                                                        <div className="k-task k-task-summary" style={{ width: "500px" }}>
                                                            <div className="k-task-summary-progress" style={{ width: "300px" }}>
                                                                <div className="k-task-summary-complete" style={{ width: "500px" }}></div>
                                                            </div>
                                                        </div>
                                                        <div className="k-task-dot k-task-start"></div>
                                                        <div className="k-task-dot k-task-end" style={{ right: '0px' }}></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="k-table-row">
                                                <td className="k-table-td">
                                                    <div className="k-task-wrap" style={{ left: "813px" }}>
                                                        <div className="k-task k-task-single" style={{ width: "200px" }}>
                                                            <div className="k-task-complete" style={{ width: "112px" }}></div>
                                                            <div className="k-task-content">
                                                                <div className="k-task-template">UI Design</div>
                                                                <span className="k-task-actions"><a className="k-link k-task-delete"><Icon icon="x" /></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                                                            </div>
                                                        </div>
                                                        <div className="k-task-dot k-task-start"></div>
                                                        <div className="k-task-dot k-task-end" style={{ right: '0px' }}></div>
                                                        <div className="k-task-draghandle" style={{ left: "112px" }}></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="k-table-row">
                                                <td className="k-table-td">
                                                    <div className="k-task-wrap" style={{ left: "1013px" }}>
                                                        <div className="k-task k-task-single" style={{ width: "300px" }}>
                                                            <div className="k-task-complete" style={{ width: "192px" }}></div>
                                                            <div className="k-task-content">
                                                                <div className="k-task-template">HTML Prototype</div>
                                                                <span className="k-task-actions"><a className="k-link k-task-delete"><Icon icon="x" /></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                                                            </div>
                                                        </div>
                                                        <div className="k-task-dot k-task-start"></div>
                                                        <div className="k-task-dot k-task-end" style={{ right: '0px' }}></div>
                                                        <div className="k-task-draghandle" style={{ left: "192px" }}></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="k-table-row">
                                                <td className="k-table-td">
                                                    <div className="k-task-wrap k-summary-wrap" style={{ left: "1013px" }}>
                                                        <div className="k-task k-task-summary" style={{ width: "2100px" }}>
                                                            <div className="k-task-summary-progress" style={{ width: "1617px" }}>
                                                                <div className="k-task-summary-complete" style={{ width: "2100px" }}></div>
                                                            </div>
                                                        </div>
                                                        <div className="k-task-dot k-task-start"></div>
                                                        <div className="k-task-dot k-task-end" style={{ right: '0px' }}></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="k-table-row">
                                                <td className="k-table-td">
                                                    <div className="k-task-wrap" style={{ left: "1013px" }}>
                                                        <div className="k-task k-task-single" style={{ width: "600px" }}>
                                                            <div className="k-task-complete" style={{ width: "462px" }}></div>
                                                            <div className="k-task-content">
                                                                <div className="k-task-template">Prototype</div>
                                                                <span className="k-task-actions"><a className="k-link k-task-delete"><Icon icon="x" /></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                                                            </div>
                                                        </div>
                                                        <div className="k-task-dot k-task-start"></div>
                                                        <div className="k-task-dot k-task-end" style={{ right: '0px' }}></div>
                                                        <div className="k-task-draghandle" style={{ left: "462px" }}></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="k-table-row">
                                                <td className="k-table-td">
                                                    <div className="k-task-wrap" style={{ left: "1613px" }}>
                                                        <div className="k-task k-task-single" style={{ width: "100px" }}>
                                                            <div className="k-task-complete" style={{ width: "82px" }}></div>
                                                            <div className="k-task-content">
                                                                <div className="k-task-template">Architecture</div>
                                                                <span className="k-task-actions"><a className="k-link k-task-delete"><Icon icon="x" /></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                                                            </div>
                                                        </div>
                                                        <div className="k-task-dot k-task-start"></div>
                                                        <div className="k-task-dot k-task-end" style={{ right: '0px' }}></div>
                                                        <div className="k-task-draghandle" style={{ left: "82px" }}></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="k-table-row">
                                                <td className="k-table-td">
                                                    <div className="k-task-wrap" style={{ left: "1713px" }}>
                                                        <div className="k-task k-task-single" style={{ width: "600px" }}>
                                                            <div className="k-task-complete" style={{ width: "600px" }}></div>
                                                            <div className="k-task-content">
                                                                <div className="k-task-template">Data Layer</div>
                                                                <span className="k-task-actions"><a className="k-link k-task-delete"><Icon icon="x" /></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                                                            </div>
                                                        </div>
                                                        <div className="k-task-dot k-task-start"></div>
                                                        <div className="k-task-dot k-task-end" style={{ right: '0px' }}></div>
                                                        <div className="k-task-draghandle" style={{ left: "600px" }}></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="k-table-row">
                                                <td className="k-table-td">
                                                    <div className="k-task-wrap" style={{ left: "2613px" }}>
                                                        <div className="k-task k-task-single" style={{ width: "500px" }}>
                                                            <div className="k-task-complete" style={{ width: "300px" }}></div>
                                                            <div className="k-task-content">
                                                                <div className="k-task-template">UI and Interaction</div>
                                                                <span className="k-task-actions"><a className="k-link k-task-delete"><Icon icon="x" /></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                                                            </div>
                                                        </div>
                                                        <div className="k-task-dot k-task-start"></div>
                                                        <div className="k-task-dot k-task-end" style={{ right: '0px' }}></div>
                                                        <div className="k-task-draghandle" style={{ left: "300px" }}></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="k-table-row">
                                                <td className="k-table-td">
                                                    <div className="k-task-wrap" style={{ left: "1713px" }}>
                                                        <div className="k-task k-task-single" style={{ width: "900px" }}>
                                                            <div className="k-task-complete" style={{ width: "612px" }}></div>
                                                            <div className="k-task-content">
                                                                <div className="k-task-template">Unit Tests</div>
                                                                <span className="k-task-actions"><a className="k-link k-task-delete"><Icon icon="x" /></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                                                            </div>
                                                        </div>
                                                        <div className="k-task-dot k-task-start"></div>
                                                        <div className="k-task-dot k-task-end" style={{ right: '0px' }}></div>
                                                        <div className="k-task-draghandle" style={{ left: "612px" }}></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="k-table-row">
                                                <td className="k-table-td">
                                                    <div className="k-task-wrap k-summary-wrap" style={{ left: "2913px" }}>
                                                        <div className="k-task k-task-summary" style={{ width: "500px" }}>
                                                            <div className="k-task-summary-progress" style={{ width: "260px" }}>
                                                                <div className="k-task-summary-complete" style={{ width: "500px" }}></div>
                                                            </div>
                                                        </div>
                                                        <div className="k-task-dot k-task-start"></div>
                                                        <div className="k-task-dot k-task-end" style={{ right: '0px' }}></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="k-table-row">
                                                <td className="k-table-td">
                                                    <div className="k-task-wrap" style={{ left: "2913px" }}>
                                                        <div className="k-task k-task-single" style={{ width: "500px" }}>
                                                            <div className="k-task-complete" style={{ width: "470px" }}></div>
                                                            <div className="k-task-content">
                                                                <div className="k-task-template">Integration Testing</div>
                                                                <span className="k-task-actions"><a className="k-link k-task-delete"><Icon icon="x" /></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                                                            </div>
                                                        </div>
                                                        <div className="k-task-dot k-task-start"></div>
                                                        <div className="k-task-dot k-task-end" style={{ right: '0px' }}></div>
                                                        <div className="k-task-draghandle" style={{ left: "470px" }}></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="k-table-row">
                                                <td className="k-table-td">
                                                    <div className="k-task-wrap" style={{ left: "2913px" }}>
                                                        <div className="k-task k-task-single" style={{ width: "500px" }}>
                                                            <div className="k-task-complete" style={{ width: '50px' }}></div>
                                                            <div className="k-task-content">
                                                                <div className="k-task-template">Load Testing</div>
                                                                <span className="k-task-actions"><a className="k-link k-task-delete"><Icon icon="x" /></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                                                            </div>
                                                        </div>
                                                        <div className="k-task-dot k-task-start"></div>
                                                        <div className="k-task-dot k-task-end" style={{ right: '0px' }}></div>
                                                        <div className="k-task-draghandle" style={{ left: '50px' }}></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="k-table-row">
                                                <td className="k-table-td">
                                                    <div className="k-task-wrap k-summary-wrap" style={{ left: "2213px" }}>
                                                        <div className="k-task k-task-summary" style={{ width: "1200px" }}>
                                                            <div className="k-task-summary-progress" style={{ width: "168px" }}>
                                                                <div className="k-task-summary-complete" style={{ width: "1200px" }}></div>
                                                            </div>
                                                        </div>
                                                        <div className="k-task-dot k-task-start"></div>
                                                        <div className="k-task-dot k-task-end" style={{ right: '0px' }}></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="k-table-row">
                                                <td className="k-table-td">
                                                    <div className="k-task-wrap" style={{ left: "2213px" }}>
                                                        <div className="k-task k-task-single" style={{ width: "300px" }}>
                                                            <div className="k-task-complete" style={{ width: "84px" }}></div>
                                                            <div className="k-task-content">
                                                                <div className="k-task-template">Structure</div>
                                                                <span className="k-task-actions"><a className="k-link k-task-delete"><Icon icon="x" /></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                                                            </div>
                                                        </div>
                                                        <div className="k-task-dot k-task-start"></div>
                                                        <div className="k-task-dot k-task-end" style={{ right: '0px' }}></div>
                                                        <div className="k-task-draghandle" style={{ left: "84px" }}></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="k-table-row">
                                                <td className="k-table-td">
                                                    <div className="k-task-wrap" style={{ left: "2513px" }}>
                                                        <div className="k-task k-task-single" style={{ width: "900px" }}>
                                                            <div className="k-task-complete" style={{ width: '0px' }}></div>
                                                            <div className="k-task-content">
                                                                <div className="k-task-template">Articles</div>
                                                                <span className="k-task-actions"><a className="k-link k-task-delete"><Icon icon="x" /></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                                                            </div>
                                                        </div>
                                                        <div className="k-task-dot k-task-start"></div>
                                                        <div className="k-task-dot k-task-end" style={{ right: '0px' }}></div>
                                                        <div className="k-task-draghandle" style={{ left: '0px' }}></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="k-table-row">
                                                <td className="k-table-td">
                                                    <div className="k-task-wrap k-summary-wrap" style={{ left: "2913px" }}>
                                                        <div className="k-task k-task-summary" style={{ width: "1200px" }}>
                                                            <div className="k-task-summary-progress" style={{ width: "984px" }}>
                                                                <div className="k-task-summary-complete" style={{ width: "1200px" }}></div>
                                                            </div>
                                                        </div>
                                                        <div className="k-task-dot k-task-start"></div>
                                                        <div className="k-task-dot k-task-end" style={{ right: '0px' }}></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="k-table-row">
                                                <td className="k-table-td">
                                                    <div className="k-task-wrap k-milestone-wrap" style={{ left: "4113px" }}>
                                                        <div className="k-task k-task-milestone"></div>
                                                        <div className="k-task-dot k-task-start"></div>
                                                        <div className="k-task-dot k-task-end" style={{ right: '0px' }}></div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="k-gantt-dependencies" style={{ width: "4200px" }}>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "124.5px", top: "53px", width: "10px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-v" style={{ left: "132.5px", top: "53px", height: "18px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "103px", top: "71px", width: "31.5px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-v" style={{ left: "103px", top: "71px", height: "54px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "103px", top: "125px", width: "9px" }}><span className="k-arrow-e"></span></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "1013px", top: "269px", width: "10px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-v" style={{ left: "1021px", top: "269px", height: "18px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "1003px", top: "287px", width: "20px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-v" style={{ left: "1003px", top: "287px", height: "18px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "1003px", top: "305px", width: "9px" }}><span className="k-arrow-e"></span></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "1313px", top: "305px", width: "10px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-v" style={{ left: "1321px", top: "305px", height: "18px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "1003px", top: "323px", width: "320px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-v" style={{ left: "1003px", top: "323px", height: "54px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "1003px", top: "377px", width: "9px" }}><span className="k-arrow-e"></span></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "1613px", top: "377px", width: "10px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-v" style={{ left: "1621px", top: "377px", height: "18px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "1603px", top: "395px", width: "20px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-v" style={{ left: "1603px", top: "395px", height: "18px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "1603px", top: "413px", width: "9px" }}><span className="k-arrow-e"></span></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "1713px", top: "413px", width: "10px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-v" style={{ left: "1721px", top: "413px", height: "18px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "1703px", top: "431px", width: "20px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-v" style={{ left: "1703px", top: "431px", height: "18px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "1703px", top: "449px", width: "9px" }}><span className="k-arrow-e"></span></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "1713px", top: "413px", width: "10px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-v" style={{ left: "1721px", top: "413px", height: "18px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "1703px", top: "431px", width: "20px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-v" style={{ left: "1703px", top: "431px", height: "90px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "1703px", top: "521px", width: "9px" }}><span className="k-arrow-e"></span></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "2313px", top: "449px", width: "10px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-v" style={{ left: "2321px", top: "449px", height: "36px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "2321px", top: "485px", width: "291px" }}><span className="k-arrow-e"></span></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "2613px", top: "521px", width: "510px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-v" style={{ left: "3121px", top: "485px", height: "38px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "3114px", top: "485px", width: "7px" }}><span className="k-caret-alt-left"></span></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "3113px", top: "485px", width: "10px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-v" style={{ left: "3121px", top: "485px", height: "18px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "2903px", top: "503px", width: "220px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-v" style={{ left: "2903px", top: "503px", height: "90px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "2903px", top: "593px", width: "9px" }}><span className="k-arrow-e"></span></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "3113px", top: "485px", width: "10px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-v" style={{ left: "3121px", top: "485px", height: "18px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "2903px", top: "503px", width: "220px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-v" style={{ left: "2903px", top: "503px", height: "126px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "2903px", top: "629px", width: "9px" }}><span className="k-arrow-e"></span></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "2513px", top: "701px", width: "10px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-v" style={{ left: "2521px", top: "701px", height: "18px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "2503px", top: "719px", width: "20px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-v" style={{ left: "2503px", top: "719px", height: "18px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "2503px", top: "737px", width: "9px" }}><span className="k-arrow-e"></span></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "3413px", top: "593px", width: "10px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-v" style={{ left: "3421px", top: "593px", height: "38px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "3414px", top: "629px", width: "7px" }}><span className="k-caret-alt-left"></span></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "3413px", top: "629px", width: "10px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-v" style={{ left: "3421px", top: "629px", height: "180px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "3421px", top: "809px", width: "679.5px" }}><span className="k-arrow-e"></span></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "3413px", top: "737px", width: "10px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-v" style={{ left: "3421px", top: "737px", height: "72px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "3421px", top: "809px", width: "679.5px" }}><span className="k-arrow-e"></span></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "3113px", top: "341px", width: "10px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-v" style={{ left: "3121px", top: "341px", height: "146px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "3114px", top: "485px", width: "7px" }}><span className="k-caret-alt-left"></span></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "124.5px", top: "53px", width: "10px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-v" style={{ left: "132.5px", top: "53px", height: "18px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "103px", top: "71px", width: "31.5px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-v" style={{ left: "103px", top: "71px", height: "90px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "103px", top: "161px", width: "9px" }}><span className="k-arrow-e"></span></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "313px", top: "161px", width: "10px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-v" style={{ left: "321px", top: "161px", height: "18px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "303px", top: "179px", width: "20px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-v" style={{ left: "303px", top: "179px", height: "18px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "303px", top: "197px", width: "9px" }}><span className="k-arrow-e"></span></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "313px", top: "125px", width: "10px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-v" style={{ left: "321px", top: "125px", height: "18px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "303px", top: "143px", width: "20px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-v" style={{ left: "303px", top: "143px", height: "54px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "303px", top: "197px", width: "9px" }}><span className="k-arrow-e"></span></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "613px", top: "197px", width: "10px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-v" style={{ left: "621px", top: "197px", height: "72px" }}></div>
                                    <div className="k-gantt-line k-gantt-line-h" style={{ left: "621px", top: "269px", width: "191px" }}><span className="k-arrow-e"></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Toolbar className="k-gantt-toolbar k-gantt-footer">
                    <Button className="k-gantt-create" icon="plus">Add Task</Button>
                </Toolbar>
            </div>

        </div>
    </>
);
