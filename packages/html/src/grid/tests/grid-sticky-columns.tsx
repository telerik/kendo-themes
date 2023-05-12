import { Icon } from '../../icon';
import { Chip, ChipList, ChipAction } from '../../chip';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid">
            <div className="k-grid k-grid-md" role="grid" style={{ height: "400px", width: "500px" }}>
                <div className="k-grid-header">
                    <div className="k-grid-header-wrap">
                        <table className="k-table k-table-md k-grid-header-table" style={{ width: "1100px" }}>
                            <colgroup>
                                <col width="250px" />
                                <col width="150px" />
                                <col width="200px" />
                                <col width="250px" />
                                <col width="250px" />
                            </colgroup>
                            <thead className="k-table-thead">
                                <tr className="k-table-row" role="row" style={{ touchAction: "none" }}>
                                    <th colSpan={1} rowSpan={1} className="k-table-th k-header k-grid-header-sticky" style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Product Name</span>
                                            </span>
                                        </span>
                                    </th>
                                    <th colSpan={1} rowSpan={1} className="k-table-th k-header">
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Units In Stock</span>
                                            </span>
                                        </span>
                                    </th>
                                    <th colSpan={1} rowSpan={1} className="k-table-th k-header">
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Price</span>
                                            </span>
                                        </span>
                                    </th>
                                    <th colSpan={1} rowSpan={1} className="k-table-th k-header k-grid-header-sticky" style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Units On Order</span>
                                            </span>
                                        </span>
                                    </th>
                                    <th colSpan={1} rowSpan={1} className="k-table-th k-header">
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Reorder Level</span>
                                            </span>
                                        </span>
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <div className="k-grid-container">
                    <div className="k-grid-content k-virtual-content">
                        <div style={{ position: "relative" }}>
                            <table className="k-table k-table-md k-grid-table" style={{ width: "1100px" }}>
                                <colgroup>
                                    <col width="250px" />
                                    <col width="150px" />
                                    <col width="200px" />
                                    <col width="250px" />
                                    <col width="250px" />
                                </colgroup>
                                <tbody className="k-table-tbody">
                                    <tr className="k-table-row k-master-row" role="row">
                                        <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Chai</td>
                                        <td className="k-table-td" colSpan={1}>39</td>
                                        <td className="k-table-td" colSpan={1}>18</td>
                                        <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</td>
                                        <td className="k-table-td" colSpan={1}>10</td>
                                    </tr>
                                    <tr className="k-table-row k-table-alt-row k-master-row k-alt" role="row">
                                        <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Chang</td>
                                        <td className="k-table-td" colSpan={1}>17</td>
                                        <td className="k-table-td" colSpan={1}>19</td>
                                        <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>40</td>
                                        <td className="k-table-td" colSpan={1}>25</td>
                                    </tr>
                                    <tr className="k-table-row k-master-row k-selected" role="row">
                                        <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Aniseed Syrup(Selected)</td>
                                        <td className="k-table-td" colSpan={1}>13</td>
                                        <td className="k-table-td" colSpan={1}>10</td>
                                        <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>70</td>
                                        <td className="k-table-td" colSpan={1}>25</td>
                                    </tr>
                                    <tr className="k-table-row k-table-alt-row k-master-row k-alt k-selected" role="row">
                                        <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Chef Anton (Alt Selected)</td>
                                        <td className="k-table-td" colSpan={1}>53</td>
                                        <td className="k-table-td" colSpan={1}>22</td>
                                        <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</td>
                                        <td className="k-table-td" colSpan={1}>0</td>
                                    </tr>
                                    <tr className="k-table-row k-master-row k-selected k-hover" role="row">
                                        <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Chef (Selected+Hover)</td>
                                        <td className="k-table-td" colSpan={1}>0</td>
                                        <td className="k-table-td" colSpan={1}>21.35</td>
                                        <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</td>
                                        <td className="k-table-td" colSpan={1}>0</td>
                                    </tr>
                                    <tr className="k-table-row k-table-alt-row k-master-row k-alt k-selected k-hover" role="row">
                                        <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Gran (Alt Selected+Hover)</td>
                                        <td className="k-table-td" colSpan={1}>120</td>
                                        <td className="k-table-td" colSpan={1}>25</td>
                                        <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</td>
                                        <td className="k-table-td" colSpan={1}>25</td>
                                    </tr>
                                    <tr className="k-table-row k-master-row" role="row">
                                        <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Uncle Bob&apos;s Organic Dried Pears</td>
                                        <td className="k-table-td" colSpan={1}>15</td>
                                        <td className="k-table-td" colSpan={1}>30</td>
                                        <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</td>
                                        <td className="k-table-td" colSpan={1}>10</td>
                                    </tr>
                                    <tr className="k-table-row k-table-alt-row k-master-row k-alt" role="row">
                                        <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Northwoods Cranberry Sauce</td>
                                        <td className="k-table-td" colSpan={1}>6</td>
                                        <td className="k-table-td" colSpan={1}>40</td>
                                        <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</td>
                                        <td className="k-table-td" colSpan={1}>0</td>
                                    </tr>
                                    <tr className="k-table-row k-master-row" role="row">
                                        <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Mishi Kobe Niku</td>
                                        <td className="k-table-td" colSpan={1}>29</td>
                                        <td className="k-table-td" colSpan={1}>97</td>
                                        <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</td>
                                        <td className="k-table-td" colSpan={1}>0</td>
                                    </tr>
                                    <tr className="k-table-row k-table-alt-row k-master-row k-alt" role="row">
                                        <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Ikura</td>
                                        <td className="k-table-td" colSpan={1}>31</td>
                                        <td className="k-table-td" colSpan={1}>31</td>
                                        <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</td>
                                        <td className="k-table-td" colSpan={1}>0</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className="k-height-container"><div></div></div>
                    </div>
                </div>
            </div>

            <div className="k-grid k-grid-md telerik-blazor">
                <div className="k-grouping-header">
                    <ChipList>
                        <Chip actions={ <ChipAction type="remove"/> }>Active Projects</Chip>
                    </ChipList>
                </div>

                <div className="k-grid-header">
                    <div className="k-grid-header-wrap">
                        <table className="k-table k-table-md k-grid-header-table">
                            <colgroup>
                                <col className="k-group-col" />
                                <col style={{ width: "100px" }} />
                                <col style={{ width: "200px" }} />
                                <col style={{ width: "100px" }} />
                                <col style={{ width: "100px" }} />
                                <col style={{ width: "100px" }} />
                            </colgroup>

                            <thead className="k-table-thead">
                                <tr className="k-table-row">
                                    <th colSpan={1} rowSpan={1} className="k-table-th k-group-cell k-header"></th>
                                    <th className="k-table-th k-header" colSpan={1}>
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Name</span>
                                            </span>
                                        </span>
                                    </th>
                                    <th className="k-table-th k-header k-grid-header-sticky" style={{ left: '0px', right: '0px' }} colSpan={1}>
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Team</span>
                                            </span>
                                        </span>
                                    </th>

                                    <th className="k-table-th k-header k-grid-header-sticky" colSpan={1}>
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Active Projects</span>
                                            </span>
                                        </span>
                                    </th>

                                    <th className="k-table-th k-header" colSpan={1}>
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Salary</span>
                                            </span>
                                        </span>
                                    </th>

                                    <th className="k-table-th k-header" colSpan={1}>
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">On Vacation</span>
                                            </span>
                                        </span>
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>

                <div className="k-grid-container">
                    <div className="k-grid-content k-virtual-content">
                        <div style={{ position: "relative" }}>
                            <div className="k-virtual-position">
                                <table className="k-table k-table-md k-grid-table" style={{ height: 'auto' }}>
                                    <colgroup>
                                        <col className="k-group-col" />
                                        <col style={{ width: "100px" }} />
                                        <col style={{ width: "200px" }} />
                                        <col style={{ width: "100px" }} />
                                        <col style={{ width: "100px" }} />
                                        <col style={{ width: "100px" }} />
                                    </colgroup>

                                    <tbody className="k-table-tbody">
                                        <tr className="k-table-row k-table-group-row k-grouping-row">
                                            <td className="k-table-td" colSpan={6}>
                                                <p className="k-reset">
                                                    <Icon icon="caret-alt-down" />
                                                    <span>Currently active projects: 2 &nbsp;</span>
                                                </p>
                                            </td>
                                        </tr>

                                        <tr className="k-table-row k-master-row">
                                            <td className="k-table-td k-table-group-td k-group-cell"></td>
                                            <td className="k-table-td" colSpan={1}>
                                                Employee 0</td>
                                            <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: '0px', right: '0px' }}>
                                                Team 0</td>
                                            <td className="k-table-td k-grid-content-sticky" colSpan={1}>
                                                2</td>
                                            <td className="k-table-td" colSpan={1}>
                                                1429</td>
                                            <td className="k-table-td" colSpan={1}>
                                                True</td>
                                        </tr>

                                        <tr className="k-table-row k-table-alt-row k-master-row k-alt">
                                            <td className="k-table-td k-table-group-td k-group-cell"></td>
                                            <td className="k-table-td" colSpan={1}>
                                                Employee 4</td>
                                            <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: '0px', right: '0px' }}>
                                                Team 1</td>
                                            <td className="k-table-td k-grid-content-sticky" colSpan={1}>
                                                2</td>
                                            <td className="k-table-td" colSpan={1}>
                                                2915</td>
                                            <td className="k-table-td" colSpan={1}>
                                                True</td>
                                        </tr>

                                        <tr className="k-table-row k-group-footer">
                                            <td className="k-table-td k-table-group-td k-group-cell"></td>
                                            <td className="k-table-td">
                                            </td>
                                            <td className="k-table-td k-grid-footer-sticky" style={{ left: '0px', right: '0px' }}>
                                                Team size: 7
                                            </td>
                                            <td className="k-table-td k-grid-footer-sticky">
                                            </td>
                                            <td className="k-table-td">
                                                Total: X
                                            </td>
                                            <td className="k-table-td">
                                            </td>
                                        </tr>

                                        <tr className="k-table-row k-table-group-row k-grouping-row">
                                            <td className="k-table-td" colSpan={6}>
                                                <p className="k-reset">
                                                    <Icon icon="caret-alt-down" />
                                                    <span>Currently active projects: 5 &nbsp;</span>
                                                    <span>These people work on too many projects</span>
                                                </p>
                                            </td>
                                        </tr>

                                        <tr className="k-table-row k-master-row k-hover">
                                            <td className="k-table-td k-table-group-td k-group-cell"></td>
                                            <td className="k-table-td" colSpan={1}>
                                                Employee 1</td>
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: '0px', right: '0px' }}>
                                                Team 1 (Hovered)</td>
                                            <td className="k-table-td k-grid-content-sticky" colSpan={1}>
                                                5</td>
                                            <td className="k-table-td" colSpan={1}>
                                                2307</td>
                                            <td className="k-table-td" colSpan={1}>
                                                False</td>
                                        </tr>

                                        <tr className="k-table-row k-table-alt-row k-master-row k-alt k-selected">
                                            <td className="k-table-td k-table-group-td k-group-cell"></td>
                                            <td className="k-table-td" colSpan={1}>
                                                Employee 2</td>
                                            <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: '0px', right: '0px' }}>
                                                Team 2  (Selected)</td>
                                            <td className="k-table-td k-grid-content-sticky" colSpan={1}>
                                                5</td>
                                            <td className="k-table-td" colSpan={1}>
                                                4225</td>
                                            <td className="k-table-td" colSpan={1}>
                                                True</td>
                                        </tr>

                                        <tr className="k-table-row k-master-row k-hover k-selected">
                                            <td className="k-table-td k-table-group-td k-group-cell"></td>
                                            <td className="k-table-td" colSpan={1}>
                                                Employee 3</td>
                                            <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: '0px', right: '0px' }}>
                                                Team 0 (Selected and Hovered)</td>
                                            <td className="k-table-td k-grid-content-sticky" colSpan={1}>
                                                5</td>
                                            <td className="k-table-td" colSpan={1}>
                                                4593</td>
                                            <td className="k-table-td" colSpan={1}>
                                                False</td>
                                        </tr>

                                        <tr className="k-table-row k-table-alt-row k-master-row k-alt">
                                            <td className="k-table-td k-table-group-td k-group-cell"></td>
                                            <td className="k-table-td" colSpan={1}>
                                                Employee 5</td>
                                            <td className="k-table-td k-grid-content-sticky" colSpan={1} style={{ left: '0px', right: '0px' }}>
                                                Team 2</td>
                                            <td className="k-table-td k-grid-content-sticky" colSpan={1}>
                                                5</td>
                                            <td className="k-table-td" colSpan={1}>
                                                2906</td>
                                            <td className="k-table-td" colSpan={1}>
                                            False</td>
                                        </tr>

                                        <tr className="k-table-row k-group-footer">
                                            <td className="k-table-td k-table-group-td k-group-cell"></td>
                                            <td className="k-table-td">
                                            </td>
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: '0px', right: '0px' }}>
                                                Team size: 18
                                            </td>
                                            <td className="k-table-td k-grid-content-sticky">
                                            </td>
                                            <td className="k-table-td">
                                                Total: Y
                                            </td>
                                            <td className="k-table-td">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="k-height-container">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
