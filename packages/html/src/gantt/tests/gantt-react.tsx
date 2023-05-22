import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { Icon } from '../../icon';
import { Toolbar } from '../../toolbar';


const styles = `
    .k-gantt {
        height: 700px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area">

            <div className="k-gantt">
                <Toolbar className="k-gantt-toolbar k-gantt-header">
                    <span className="k-spacer"></span>
                    <span className="k-gantt-views">
                        <div className="k-gantt-views-wrapper">
                            <ButtonGroup className="k-gantt-views">
                                <Button>Day</Button>
                                <Button selected>Week</Button>
                                <Button>Month</Button>
                            </ButtonGroup>
                            <select className="k-picker k-picker-solid k-dropdown-list k-dropdown k-views-dropdown k-rounded-md">
                                <option value="day">Day</option>
                                <option value="week">Week</option>
                                <option value="month">Month</option>
                            </select>
                        </div>
                    </span>
                </Toolbar>
                <div className="k-gantt-content">
                    <div className="k-grid k-grid-md k-treelist-scrollable">
                        <table className="k-table k-table-md k-table-layout-fixed" style={{ width: "4500px" }}>
                            <colgroup>
                                <col style={{ width: "100px" }} />
                                <col style={{ width: "200px" }} />
                                <col style={{ width: "4200px" }} />
                            </colgroup>
                            <thead className="k-table-thead k-grid-header">
                                <tr className="k-table-row">
                                    <th colSpan={2} rowSpan={1} className="k-table-th k-header k-grid-header-sticky" style={{ left: '0px', right: '0px', borderRightWidth: "1px; top: 0px" }}><a className="k-link">summary</a></th>
                                    <th colSpan={1} rowSpan={2} className="k-table-th k-header" style={{ top: '0px' }}>
                                        <table className="k-table k-table-md">
                                            <tbody className="k-table-tbody">
                                                <tr className="k-table-row">
                                                    <td colSpan={7} className="k-table-td k-header k-nonwork-hour">Sun, 6/1 - Sun, 6/8</td>
                                                    <td colSpan={7} className="k-table-td k-header k-nonwork-hour">Sun, 6/8 - Sun, 6/15</td>
                                                    <td colSpan={7} className="k-table-td k-header k-nonwork-hour">Sun, 6/15 - Sun, 6/22</td>
                                                    <td colSpan={7} className="k-table-td k-header k-nonwork-hour">Sun, 6/22 - Sun, 6/29</td>
                                                    <td colSpan={7} className="k-table-td k-header k-nonwork-hour">Sun, 6/29 - Sun, 7/6</td>
                                                    <td colSpan={7} className="k-table-td k-header k-nonwork-hour">Sun, 7/6 - Sun, 7/13</td>
                                                </tr>
                                                <tr className="k-table-row">
                                                    <td colSpan={1} className="k-table-td k-header k-nonwork-hour">Sun, 6/1</td>
                                                    <td colSpan={1} className="k-table-td k-header">Mon, 6/2</td>
                                                    <td colSpan={1} className="k-table-td k-header">Tue, 6/3</td>
                                                    <td colSpan={1} className="k-table-td k-header">Wed, 6/4</td>
                                                    <td colSpan={1} className="k-table-td k-header">Thu, 6/5</td>
                                                    <td colSpan={1} className="k-table-td k-header">Fri, 6/6</td>
                                                    <td colSpan={1} className="k-table-td k-header k-nonwork-hour">Sat, 6/7</td>
                                                    <td colSpan={1} className="k-table-td k-header k-nonwork-hour">Sun, 6/8</td>
                                                    <td colSpan={1} className="k-table-td k-header">Mon, 6/9</td>
                                                    <td colSpan={1} className="k-table-td k-header">Tue, 6/10</td>
                                                    <td colSpan={1} className="k-table-td k-header">Wed, 6/11</td>
                                                    <td colSpan={1} className="k-table-td k-header">Thu, 6/12</td>
                                                    <td colSpan={1} className="k-table-td k-header">Fri, 6/13</td>
                                                    <td colSpan={1} className="k-table-td k-header k-nonwork-hour">Sat, 6/14</td>
                                                    <td colSpan={1} className="k-table-td k-header k-nonwork-hour">Sun, 6/15</td>
                                                    <td colSpan={1} className="k-table-td k-header">Mon, 6/16</td>
                                                    <td colSpan={1} className="k-table-td k-header">Tue, 6/17</td>
                                                    <td colSpan={1} className="k-table-td k-header">Wed, 6/18</td>
                                                    <td colSpan={1} className="k-table-td k-header">Thu, 6/19</td>
                                                    <td colSpan={1} className="k-table-td k-header">Fri, 6/20</td>
                                                    <td colSpan={1} className="k-table-td k-header k-nonwork-hour">Sat, 6/21</td>
                                                    <td colSpan={1} className="k-table-td k-header k-nonwork-hour">Sun, 6/22</td>
                                                    <td colSpan={1} className="k-table-td k-header">Mon, 6/23</td>
                                                    <td colSpan={1} className="k-table-td k-header">Tue, 6/24</td>
                                                    <td colSpan={1} className="k-table-td k-header">Wed, 6/25</td>
                                                    <td colSpan={1} className="k-table-td k-header">Thu, 6/26</td>
                                                    <td colSpan={1} className="k-table-td k-header">Fri, 6/27</td>
                                                    <td colSpan={1} className="k-table-td k-header k-nonwork-hour">Sat, 6/28</td>
                                                    <td colSpan={1} className="k-table-td k-header k-nonwork-hour">Sun, 6/29</td>
                                                    <td colSpan={1} className="k-table-td k-header">Mon, 6/30</td>
                                                    <td colSpan={1} className="k-table-td k-header">Tue, 7/1</td>
                                                    <td colSpan={1} className="k-table-td k-header">Wed, 7/2</td>
                                                    <td colSpan={1} className="k-table-td k-header">Thu, 7/3</td>
                                                    <td colSpan={1} className="k-table-td k-header">Fri, 7/4</td>
                                                    <td colSpan={1} className="k-table-td k-header k-nonwork-hour">Sat, 7/5</td>
                                                    <td colSpan={1} className="k-table-td k-header k-nonwork-hour">Sun, 7/6</td>
                                                    <td colSpan={1} className="k-table-td k-header">Mon, 7/7</td>
                                                    <td colSpan={1} className="k-table-td k-header">Tue, 7/8</td>
                                                    <td colSpan={1} className="k-table-td k-header">Wed, 7/9</td>
                                                    <td colSpan={1} className="k-table-td k-header">Thu, 7/10</td>
                                                    <td colSpan={1} className="k-table-td k-header">Fri, 7/11</td>
                                                    <td colSpan={1} className="k-table-td k-header k-nonwork-hour">Sat, 7/12</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </th>
                                </tr>
                                <tr className="k-table-row">
                                    <th colSpan={1} rowSpan={1} className="k-table-th k-header k-grid-header-sticky" style={{ left: '0px', right: "200px; top: 37px" }}>
                                        <a className="k-link">id title</a>
                                    </th>
                                    <th colSpan={1} rowSpan={1} className="k-table-th k-header k-grid-header-sticky" style={{ left: "100px", right: '0px', borderRightWidth: "1px; top: 37px" }}>
                                        <a className="k-link">title</a>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="k-table-tbody">
                                <tr className="k-table-row k-master-row" style={{ height: "40px" }}>
                                    <td className="k-table-td k-grid-content-sticky k-text-nowrap" colSpan={1} style={{ left: '0px', right: "200px" }}>
                                        <Icon icon="caret-alt-down" />7
                                    </td>
                                    <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: "100px", right: '0px', borderRightWidth: "1px" }}>
                                        Software validation, research and implementation
                                    </td>
                                    <td className="k-table-td">
                                        <div className="k-task k-task-summary" style={{ left: "83px", top: "15px", width: "4000px" }}>
                                            <div className="k-task-summary-progress" style={{ width: "1828px" }}>
                                                <div className="k-task-summary-complete"></div>
                                            </div>
                                            <div className="k-task-dot k-task-start"></div>
                                            <div className="k-task-dot k-task-end"></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-master-row k-alt" style={{ height: "40px" }}>
                                    <td className="k-table-td k-grid-content-sticky k-text-nowrap" colSpan={1} style={{ left: '0px', right: "200px" }}>
                                        <Icon icon="none" />
                                        <Icon icon="none" />18
                                    </td>
                                    <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: "100px", right: '0px', borderRightWidth: "1px" }}>
                                        Project Kickoff
                                    </td>
                                    <td className="k-table-td">
                                        <div className="k-task k-task-milestone" style={{ left: "77px", top: "13px" }}>
                                            <div className="k-task-milestone-content"></div>
                                            <div className="k-task-dot k-task-start"></div>
                                            <div className="k-task-dot k-task-end"></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="k-table-row k-master-row" style={{ height: "40px" }}>
                                    <td className="k-table-td k-grid-content-sticky k-text-nowrap" colSpan={1} style={{ left: '0px', right: "200px" }}>
                                        <Icon icon="none" /><Icon icon="caret-alt-down" />11
                                    </td>
                                    <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: "100px", right: '0px', borderRightWidth: "1px" }}>
                                        Research
                                    </td>
                                    <td className="k-table-td">
                                        <div className="k-task k-task-summary" style={{ left: "83px", top: "15px", width: "500px" }}>
                                            <div className="k-task-summary-progress" style={{ width: "288px" }}>
                                                <div className="k-task-summary-complete"></div>
                                            </div>
                                            <div className="k-task-dot k-task-start"></div>
                                            <div className="k-task-dot k-task-end"></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-master-row k-alt" style={{ height: "40px" }}>
                                    <td className="k-table-td k-grid-content-sticky k-text-nowrap" colSpan={1} style={{ left: '0px', right: "200px" }}>
                                        <Icon icon="none" />
                                        <Icon icon="none" />
                                        <Icon icon="none" />19
                                    </td>
                                    <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: "100px", right: '0px', borderRightWidth: "1px" }}>
                                        Validation with Customers
                                    </td>
                                    <td className="k-table-td">
                                        <div className="k-task k-task-single" style={{ left: "83px", top: "8px", width: "200px" }}>
                                            <div className="k-task-complete" style={{ width: '50px' }}></div>
                                            <div className="k-task-content">Validation with Customers</div>
                                            <span className="k-task-actions">
                                                <a className="k-link k-task-delete">
                                                    <Icon icon="x" />
                                                </a>
                                            </span>
                                            <span className="k-resize-handle k-resize-w"></span>
                                            <span className="k-resize-handle k-resize-e"></span>
                                            <div className="k-task-draghandle"></div>
                                            <div className="k-task-dot k-task-start"></div>
                                            <div className="k-task-dot k-task-end"></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="k-table-row k-master-row" style={{ height: "40px" }}>
                                    <td className="k-table-td k-grid-content-sticky k-text-nowrap" colSpan={1} style={{ left: '0px', right: "200px" }}>
                                        <Icon icon="none" />
                                        <Icon icon="none" />
                                        <Icon icon="none" />20
                                    </td>
                                    <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: "100px", right: '0px', borderRightWidth: "1px" }}>
                                        Market Research
                                    </td>
                                    <td className="k-table-td">
                                        <div className="k-task k-task-single" style={{ left: "83px", top: "8px", width: "200px" }}>
                                            <div className="k-task-complete" style={{ width: '50px' }}></div>
                                            <div className="k-task-content">Market Research</div>
                                            <span className="k-task-actions">
                                                <a className="k-link k-task-delete">
                                                    <Icon icon="x" />
                                                </a>
                                            </span>
                                            <span className="k-resize-handle k-resize-w"></span>
                                            <span className="k-resize-handle k-resize-e"></span>
                                            <div className="k-task-draghandle"></div>
                                            <div className="k-task-dot k-task-start"></div>
                                            <div className="k-task-dot k-task-end"></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-master-row k-alt" style={{ height: "40px" }}>
                                    <td className="k-table-td k-grid-content-sticky k-text-nowrap" colSpan={1} style={{ left: '0px', right: "200px" }}>
                                        <Icon icon="none" />
                                        <Icon icon="none" />
                                        <Icon icon="none" />39
                                    </td>
                                    <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: "100px", right: '0px', borderRightWidth: "1px" }}>
                                        Functional and Technical Specification
                                    </td>
                                    <td className="k-table-td">
                                        <div className="k-task k-task-single" style={{ left: "283px", top: "8px", width: "300px" }}>
                                            <div className="k-task-complete" style={{ width: "198px" }}></div>
                                            <div className="k-task-content">Functional and Technical Specification</div>
                                            <span className="k-task-actions">
                                                <a className="k-link k-task-delete">
                                                    <Icon icon="x" />
                                                </a>
                                            </span>
                                            <span className="k-resize-handle k-resize-w"></span>
                                            <span className="k-resize-handle k-resize-e"></span>
                                            <div className="k-task-draghandle"></div>
                                            <div className="k-task-dot k-task-start"></div>
                                            <div className="k-task-dot k-task-end"></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="k-table-row k-master-row" style={{ height: "40px" }}>
                                    <td className="k-table-td k-grid-content-sticky k-text-nowrap" colSpan={1} style={{ left: '0px', right: "200px" }}>
                                        <Icon icon="none" />
                                        <Icon icon="caret-alt-down" />12
                                    </td>
                                    <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: "100px", right: '0px', borderRightWidth: "1px" }}>Design</td>
                                    <td className="k-table-td">
                                        <div className="k-task k-task-summary" style={{ left: "783px", top: "15px", width: "500px" }}>
                                            <div className="k-task-summary-progress" style={{ width: "300px" }}>
                                                <div className="k-task-summary-complete"></div>
                                            </div>
                                            <div className="k-task-dot k-task-start"></div>
                                            <div className="k-task-dot k-task-end"></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-master-row k-alt" style={{ height: "40px" }}>
                                    <td className="k-table-td k-grid-content-sticky k-text-nowrap" colSpan={1} style={{ left: '0px', right: "200px" }}>
                                        <Icon icon="none" />
                                        <Icon icon="none" />
                                        <Icon icon="none" />22
                                    </td>
                                    <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: "100px", right: '0px', borderRightWidth: "1px" }}>UI Design</td>
                                    <td className="k-table-td">
                                        <div className="k-task k-task-single" style={{ left: "783px", top: "8px", width: "200px" }}>
                                            <div className="k-task-complete" style={{ width: "112px" }}></div>
                                            <div className="k-task-content">UI Design</div>
                                            <span className="k-task-actions">
                                                <a className="k-link k-task-delete">
                                                    <Icon icon="x" />
                                                </a>
                                            </span>
                                            <span className="k-resize-handle k-resize-w"></span>
                                            <span className="k-resize-handle k-resize-e"></span>
                                            <div className="k-task-draghandle"></div>
                                            <div className="k-task-dot k-task-start"></div>
                                            <div className="k-task-dot k-task-end"></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="k-table-row k-master-row k-selected" style={{ height: "40px" }}>
                                    <td className="k-table-td k-grid-content-sticky k-text-nowrap" colSpan={1} style={{ left: '0px', right: "200px" }}>
                                        <Icon icon="none" />
                                        <Icon icon="none" />
                                        <Icon icon="none" />23
                                    </td>
                                    <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: "100px", right: '0px', borderRightWidth: "1px" }}>HTML Prototype</td>
                                    <td className="k-table-td">
                                        <div className="k-task k-task-single" style={{ left: "983px", top: "8px", width: "300px" }}>
                                            <div className="k-task-complete" style={{ width: "192px" }}></div>
                                            <div className="k-task-content">HTML Prototype</div>
                                            <span className="k-task-actions">
                                                <a className="k-link k-task-delete">
                                                    <Icon icon="x" />
                                                </a>
                                            </span>
                                            <span className="k-resize-handle k-resize-w"></span>
                                            <span className="k-resize-handle k-resize-e"></span>
                                            <div className="k-task-draghandle"></div>
                                            <div className="k-task-dot k-task-start"></div>
                                            <div className="k-task-dot k-task-end"></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-master-row k-alt" style={{ height: "40px" }}>
                                    <td className="k-table-td k-grid-content-sticky k-text-nowrap" colSpan={1} style={{ left: '0px', right: "200px" }}>
                                        <Icon icon="none" />
                                        <Icon icon="caret-alt-down" />13
                                    </td>
                                    <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: "100px", right: '0px', borderRightWidth: "1px" }}>Implementation</td>
                                    <td className="k-table-td">
                                        <div className="k-task k-task-summary" style={{ left: "983px", top: "15px", width: "2100px" }}>
                                            <div className="k-task-summary-progress" style={{ width: "1617px" }}>
                                                <div className="k-task-summary-complete"></div>
                                            </div>
                                            <div className="k-task-dot k-task-start"></div>
                                            <div className="k-task-dot k-task-end"></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="k-table-row k-master-row" style={{ height: "40px" }}>
                                    <td className="k-table-td k-grid-content-sticky k-text-nowrap" colSpan={1} style={{ left: '0px', right: "200px" }}>
                                        <Icon icon="none" />
                                        <Icon icon="none" />
                                        <Icon icon="none" />24
                                    </td>
                                    <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: "100px", right: '0px', borderRightWidth: "1px" }}>Prototype</td>
                                    <td className="k-table-td">
                                        <div className="k-task k-task-single" style={{ left: "983px", top: "8px", width: "600px" }}>
                                            <div className="k-task-complete" style={{ width: "462px" }}></div>
                                            <div className="k-task-content">Prototype</div>
                                            <span className="k-task-actions">
                                                <a className="k-link k-task-delete">
                                                    <Icon icon="x" />
                                                </a>
                                            </span>
                                            <span className="k-resize-handle k-resize-w"></span>
                                            <span className="k-resize-handle k-resize-e"></span>
                                            <div className="k-task-draghandle"></div>
                                            <div className="k-task-dot k-task-start"></div>
                                            <div className="k-task-dot k-task-end"></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-master-row k-alt" style={{ height: "40px" }}>
                                    <td className="k-table-td k-grid-content-sticky k-text-nowrap" colSpan={1} style={{ left: '0px', right: "200px" }}>
                                        <Icon icon="none" />
                                        <Icon icon="none" />
                                        <Icon icon="none" />26
                                    </td>
                                    <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: "100px", right: '0px', borderRightWidth: "1px" }}>Architecture</td>
                                    <td className="k-table-td">
                                        <div className="k-task k-task-single" style={{ left: "1583px", top: "8px", width: "100px" }}>
                                            <div className="k-task-complete" style={{ width: "82px" }}></div>
                                            <div className="k-task-content">Architecture</div>
                                            <span className="k-task-actions">
                                                <a className="k-link k-task-delete">
                                                    <Icon icon="x" />
                                                </a>
                                            </span>
                                            <span className="k-resize-handle k-resize-w"></span>
                                            <span className="k-resize-handle k-resize-e"></span>
                                            <div className="k-task-draghandle"></div>
                                            <div className="k-task-dot k-task-start"></div>
                                            <div className="k-task-dot k-task-end"></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="k-table-row k-master-row" style={{ height: "40px" }}>
                                    <td className="k-table-td k-grid-content-sticky k-text-nowrap" colSpan={1} style={{ left: '0px', right: "200px" }}>
                                        <Icon icon="none" />
                                        <Icon icon="none" />
                                        <Icon icon="none" />27
                                    </td>
                                    <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: "100px", right: '0px', borderRightWidth: "1px" }}>Data Layer</td>
                                    <td className="k-table-td">
                                        <div className="k-task k-task-single" style={{ left: "1683px", top: "8px", width: "600px" }}>
                                            <div className="k-task-complete" style={{ width: "300px" }}></div>
                                            <div className="k-task-content">Data Layer</div>
                                            <span className="k-task-actions">
                                                <a className="k-link k-task-delete">
                                                    <Icon icon="x" />
                                                </a>
                                            </span>
                                            <span className="k-resize-handle k-resize-w"></span>
                                            <span className="k-resize-handle k-resize-e"></span>
                                            <div className="k-task-draghandle"></div>
                                            <div className="k-task-dot k-task-start"></div>
                                            <div className="k-task-dot k-task-end"></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-master-row k-alt" style={{ height: "40px" }}>
                                    <td className="k-table-td k-grid-content-sticky k-text-nowrap" colSpan={1} style={{ left: '0px', right: "200px" }}>
                                        <Icon icon="none" />
                                        <Icon icon="none" />
                                        <Icon icon="none" />29
                                    </td>
                                    <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: "100px", right: '0px', borderRightWidth: "1px" }}>
                                        UI and Interaction
                                    </td>
                                    <td className="k-table-td">
                                        <div className="k-task k-task-single" style={{ left: "2583px", top: "8px", width: "500px" }}>
                                            <div className="k-task-complete" style={{ width: "300px" }}></div>
                                            <div className="k-task-content">UI and Interaction</div>
                                            <span className="k-task-actions">
                                                <a className="k-link k-task-delete">
                                                    <Icon icon="x" />
                                                </a>
                                            </span>
                                            <span className="k-resize-handle k-resize-w"></span>
                                            <span className="k-resize-handle k-resize-e"></span>
                                            <div className="k-task-draghandle"></div>
                                            <div className="k-task-dot k-task-start"></div>
                                            <div className="k-task-dot k-task-end"></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="k-table-row k-master-row" style={{ height: "40px" }}>
                                    <td className="k-table-td k-grid-content-sticky k-text-nowrap" colSpan={1} style={{ left: '0px', right: "200px" }}>
                                        <Icon icon="none" />
                                        <Icon icon="none" />
                                        <Icon icon="none" />28
                                    </td>
                                    <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: "100px", right: '0px', borderRightWidth: "1px" }}>Unit Tests</td>
                                    <td className="k-table-td">
                                        <div className="k-task k-task-single" style={{ left: "1683px", top: "8px", width: "900px" }}>
                                            <div className="k-task-complete" style={{ width: "612px" }}></div>
                                            <div className="k-task-content">Unit Tests</div>
                                            <span className="k-task-actions">
                                                <a className="k-link k-task-delete">
                                                    <Icon icon="x" />
                                                </a>
                                            </span>
                                            <span className="k-resize-handle k-resize-w"></span>
                                            <span className="k-resize-handle k-resize-e"></span>
                                            <div className="k-task-draghandle"></div>
                                            <div className="k-task-dot k-task-start"></div>
                                            <div className="k-task-dot k-task-end"></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-master-row k-alt" style={{ height: "40px" }}>
                                    <td className="k-table-td k-grid-content-sticky k-text-nowrap" colSpan={1} style={{ left: '0px', right: "200px" }}>
                                        <Icon icon="none" />
                                        <Icon icon="caret-alt-right" />14
                                    </td>
                                    <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: "100px", right: '0px', borderRightWidth: "1px" }}>Testing</td>
                                    <td className="k-table-td">
                                        <div className="k-task k-task-summary" style={{ left: "2883px", top: "15px", width: "500px" }}>
                                            <div className="k-task-summary-progress" style={{ width: "260px" }}>
                                                <div className="k-task-summary-complete"></div>
                                            </div>
                                            <div className="k-task-dot k-task-start"></div>
                                            <div className="k-task-dot k-task-end"></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="k-table-row k-master-row" style={{ height: "40px" }}>
                                    <td className="k-table-td k-grid-content-sticky k-text-nowrap" colSpan={1} style={{ left: '0px', right: "200px" }}>
                                        <Icon icon="none" />
                                        <Icon icon="caret-alt-right" />30
                                    </td>
                                    <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: "100px", right: '0px', borderRightWidth: "1px" }}>Documentation</td>
                                    <td className="k-table-td">
                                        <div className="k-task k-task-summary" style={{ left: "2183px", top: "15px", width: "1200px" }}>
                                            <div className="k-task-summary-progress" style={{ width: "168px" }}>
                                                <div className="k-task-summary-complete"></div>
                                            </div>
                                            <div className="k-task-dot k-task-start"></div>
                                            <div className="k-task-dot k-task-end"></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-master-row k-alt" style={{ height: "40px" }}>
                                    <td className="k-table-td k-grid-content-sticky k-text-nowrap" colSpan={1} style={{ left: '0px', right: "200px" }}>
                                        <Icon icon="none" />
                                        <Icon icon="caret-alt-right" />31
                                    </td>
                                    <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: "100px", right: '0px', borderRightWidth: "1px" }}>Demos</td>
                                    <td className="k-table-td">
                                        <div className="k-task k-task-summary" style={{ left: "2883px", top: "15px", width: "1200px" }}>
                                            <div className="k-task-summary-progress" style={{ width: "984px" }}>
                                                <div className="k-task-summary-complete"></div>
                                            </div>
                                            <div className="k-task-dot k-task-start"></div>
                                            <div className="k-task-dot k-task-end"></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="k-table-row k-master-row" style={{ height: "40px" }}>
                                    <td className="k-table-td k-grid-content-sticky k-text-nowrap" colSpan={1} style={{ left: '0px', right: "200px" }}>
                                        <Icon icon="none" />
                                        <Icon icon="none" />17
                                    </td>
                                    <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: "100px", right: '0px', borderRightWidth: "1px" }}>Release</td>
                                    <td className="k-table-td">
                                        <div className="k-task k-task-milestone" style={{ left: "4077px", top: "13px" }}>
                                            <div className="k-task-milestone-content"></div>
                                            <div className="k-task-dot k-task-start"></div>
                                            <div className="k-task-dot k-task-end"></div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <svg className="k-gantt-dependencies-svg">
                            <polyline points="391,135 401,135 401,155 373,155 373,214 379,214 379,216 382,214 379,212 379,214"></polyline>
                            <polyline points="1283,374 1293,374 1293,394 1273,394 1273,414 1279,414 1279,416 1282,414 1279,412 1279,414"></polyline>
                            <polyline points="1583,414 1593,414 1593,434 1273,434 1273,494 1279,494 1279,496 1282,494 1279,492 1279,494"></polyline>
                            <polyline points="1883,494 1893,494 1893,514 1873,514 1873,534 1879,534 1879,536 1882,534 1879,532 1879,534"></polyline>
                            <polyline points="1983,534 1993,534 1993,554 1973,554 1973,574 1979,574 1979,576 1982,574 1979,572 1979,574"></polyline>
                            <polyline points="1983,534 1993,534 1993,554 1973,554 1973,654 1979,654 1979,656 1982,654 1979,652 1979,654"></polyline>
                            <polyline points="2583,574 2593,574 2593,614 2879,614 2879,616 2882,614 2879,612 2879,614"></polyline>
                            <polyline points="2883,654 3393,654 3393,614 3387,614 3387,612 3384,614 3387,616 3387,614"></polyline>
                            <polyline points="3383,454 3393,454 3393,614 3387,614 3387,612 3384,614 3387,616 3387,614"></polyline>
                            <polyline points="391,135 401,135 401,155 373,155 373,254 379,254 379,256 382,254 379,252 379,254"></polyline>
                            <polyline points="391,254 401,254 401,294 579,294 579,296 582,294 579,292 579,294"></polyline>
                            <polyline points="583,214 593,214 593,234 573,234 573,294 579,294 579,296 582,294 579,292 579,294"></polyline>
                            <polyline points="883,294 893,294 893,374 1079,374 1079,376 1082,374 1079,372 1079,374"></polyline>
                            <polyline points="2883,614 1973,614 1973,654 1979,654 1979,656 1982,654 1979,652 1979,654"></polyline>
                            <polyline points="383,94 373,94 373,114 893,114 893,174 887,174 887,172 884,174 887,176 887,174"></polyline>
                        </svg>
                        <table className="k-table k-table-md k-gantt-columns" style={{ top: "74px", left: "300px", width: "4200px", height: "760px" }}>
                            <tbody className="k-table-tbody">
                                <tr className="k-table-row">
                                    <td colSpan={1} className="k-table-td k-nonwork-hour"></td>
                                    <td colSpan={1} className="k-table-td"></td>
                                    <td colSpan={1} className="k-table-td"></td>
                                    <td colSpan={1} className="k-table-td"></td>
                                    <td colSpan={1} className="k-table-td"></td>
                                    <td colSpan={1} className="k-table-td"></td>
                                    <td colSpan={1} className="k-table-td k-nonwork-hour"></td>
                                    <td colSpan={1} className="k-table-td k-nonwork-hour"></td>
                                    <td colSpan={1} className="k-table-td"></td>
                                    <td colSpan={1} className="k-table-td"></td>
                                    <td colSpan={1} className="k-table-td"></td>
                                    <td colSpan={1} className="k-table-td"></td>
                                    <td colSpan={1} className="k-table-td"></td>
                                    <td colSpan={1} className="k-table-td k-nonwork-hour"></td>
                                    <td colSpan={1} className="k-table-td k-nonwork-hour"></td>
                                    <td colSpan={1} className="k-table-td"></td>
                                    <td colSpan={1} className="k-table-td"></td>
                                    <td colSpan={1} className="k-table-td"></td>
                                    <td colSpan={1} className="k-table-td"></td>
                                    <td colSpan={1} className="k-table-td"></td>
                                    <td colSpan={1} className="k-table-td k-nonwork-hour"></td>
                                    <td colSpan={1} className="k-table-td k-nonwork-hour"></td>
                                    <td colSpan={1} className="k-table-td"></td>
                                    <td colSpan={1} className="k-table-td"></td>
                                    <td colSpan={1} className="k-table-td"></td>
                                    <td colSpan={1} className="k-table-td"></td>
                                    <td colSpan={1} className="k-table-td"></td>
                                    <td colSpan={1} className="k-table-td k-nonwork-hour"></td>
                                    <td colSpan={1} className="k-table-td k-nonwork-hour"></td>
                                    <td colSpan={1} className="k-table-td"></td>
                                    <td colSpan={1} className="k-table-td"></td>
                                    <td colSpan={1} className="k-table-td"></td>
                                    <td colSpan={1} className="k-table-td"></td>
                                    <td colSpan={1} className="k-table-td"></td>
                                    <td colSpan={1} className="k-table-td k-nonwork-hour"></td>
                                    <td colSpan={1} className="k-table-td k-nonwork-hour"></td>
                                    <td colSpan={1} className="k-table-td"></td>
                                    <td colSpan={1} className="k-table-td"></td>
                                    <td colSpan={1} className="k-table-td"></td>
                                    <td colSpan={1} className="k-table-td"></td>
                                    <td colSpan={1} className="k-table-td"></td>
                                    <td colSpan={1} className="k-table-td k-nonwork-hour"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
);
