import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid">
            <div className="k-widget k-grid" role="grid" style={{ height: "400px", width: "500px" }}>
                <div className="k-grid-header">
                    <div className="k-grid-header-wrap">
                        <table style={{ width: "1100px" }}>
                            <colgroup>
                                <col width="250px" />
                                <col width="150px" />
                                <col width="200px" />
                                <col width="250px" />
                                <col width="250px" />
                            </colgroup>
                            <thead>
                                <tr role="row" style={{ touchAction: "none" }}>
                                    <th colSpan={1} rowSpan={1} className="k-header k-grid-header-sticky" style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>
                                        <a className="k-link">Product Name</a>
                                    </th>
                                    <th colSpan={1} rowSpan={1} className="k-header"><a className="k-link">Units In Stock</a></th>
                                    <th colSpan={1} rowSpan={1} className="k-header"><a className="k-link">Price</a></th>
                                    <th colSpan={1} rowSpan={1} className="k-header k-grid-header-sticky" style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>
                                        <a className="k-link">Units On Order</a>
                                    </th>
                                    <th colSpan={1} rowSpan={1} className="k-header"><a className="k-link">Reorder Level</a></th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <div className="k-grid-container">
                    <div className="k-grid-content k-virtual-content">
                        <div style={{ position: "relative" }}>
                            <table className="k-grid-table" style={{ width: "1100px" }}>
                                <colgroup>
                                    <col width="250px" />
                                    <col width="150px" />
                                    <col width="200px" />
                                    <col width="250px" />
                                    <col width="250px" />
                                </colgroup>
                                <tbody>
                                    <tr className="k-master-row" role="row">
                                        <td colSpan={1} className="k-grid-content-sticky" style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Chai</td>
                                        <td colSpan={1}>39</td>
                                        <td colSpan={1}>18</td>
                                        <td colSpan={1} className="k-grid-content-sticky" style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</td>
                                        <td colSpan={1}>10</td>
                                    </tr>
                                    <tr className="k-master-row k-alt" role="row">
                                        <td colSpan={1} className="k-grid-content-sticky" style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Chang</td>
                                        <td colSpan={1}>17</td>
                                        <td colSpan={1}>19</td>
                                        <td colSpan={1} className="k-grid-content-sticky" style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>40</td>
                                        <td colSpan={1}>25</td>
                                    </tr>
                                    <tr className="k-master-row k-selected" role="row">
                                        <td colSpan={1} className="k-grid-content-sticky" style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Aniseed Syrup(Selected)</td>
                                        <td colSpan={1}>13</td>
                                        <td colSpan={1}>10</td>
                                        <td colSpan={1} className="k-grid-content-sticky" style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>70</td>
                                        <td colSpan={1}>25</td>
                                    </tr>
                                    <tr className="k-master-row k-alt k-selected" role="row">
                                        <td colSpan={1} className="k-grid-content-sticky" style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Chef Anton (Alt Selected)</td>
                                        <td colSpan={1}>53</td>
                                        <td colSpan={1}>22</td>
                                        <td colSpan={1} className="k-grid-content-sticky" style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</td>
                                        <td colSpan={1}>0</td>
                                    </tr>
                                    <tr className="k-master-row k-selected k-hover" role="row">
                                        <td colSpan={1} className="k-grid-content-sticky" style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Chef (Selected+Hover)</td>
                                        <td colSpan={1}>0</td>
                                        <td colSpan={1}>21.35</td>
                                        <td colSpan={1} className="k-grid-content-sticky" style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</td>
                                        <td colSpan={1}>0</td>
                                    </tr>
                                    <tr className="k-master-row k-alt k-selected k-hover" role="row">
                                        <td colSpan={1} className="k-grid-content-sticky" style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Gran (Alt Selected+Hover)</td>
                                        <td colSpan={1}>120</td>
                                        <td colSpan={1}>25</td>
                                        <td colSpan={1} className="k-grid-content-sticky" style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</td>
                                        <td colSpan={1}>25</td>
                                    </tr>
                                    <tr className="k-master-row" role="row">
                                        <td colSpan={1} className="k-grid-content-sticky" style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Uncle Bob&apos;s Organic Dried Pears</td>
                                        <td colSpan={1}>15</td>
                                        <td colSpan={1}>30</td>
                                        <td colSpan={1} className="k-grid-content-sticky" style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</td>
                                        <td colSpan={1}>10</td>
                                    </tr>
                                    <tr className="k-master-row k-alt" role="row">
                                        <td colSpan={1} className="k-grid-content-sticky" style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Northwoods Cranberry Sauce</td>
                                        <td colSpan={1}>6</td>
                                        <td colSpan={1}>40</td>
                                        <td colSpan={1} className="k-grid-content-sticky" style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</td>
                                        <td colSpan={1}>0</td>
                                    </tr>
                                    <tr className="k-master-row" role="row">
                                        <td colSpan={1} className="k-grid-content-sticky" style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Mishi Kobe Niku</td>
                                        <td colSpan={1}>29</td>
                                        <td colSpan={1}>97</td>
                                        <td colSpan={1} className="k-grid-content-sticky" style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</td>
                                        <td colSpan={1}>0</td>
                                    </tr>
                                    <tr className="k-master-row k-alt" role="row">
                                        <td colSpan={1} className="k-grid-content-sticky" style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Ikura</td>
                                        <td colSpan={1}>31</td>
                                        <td colSpan={1}>31</td>
                                        <td colSpan={1} className="k-grid-content-sticky" style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</td>
                                        <td colSpan={1}>0</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className="k-height-container"><div></div></div>
                    </div>
                </div>
            </div>

            <div className="k-grid k-widget telerik-blazor">
                <div className="k-grouping-header k-grouping-header-flex">
                    <div className="k-indicator-container">
                        <div className="k-group-indicator">
                            <span className="k-link" style={{ cursor: "default" }}>
                                Active Projects
                            </span>
                            <Button fillMode="flat" icon="close"></Button>
                        </div>
                    </div>
                    <div className="k-indicator-container" style={{ touchAction: "none" }}></div>
                </div>

                <div className="k-grid-header">
                    <div className="k-grid-header-wrap">
                        <table>
                            <colgroup>
                                <col className="k-group-col" />
                                <col style={{ width: "100px" }} />
                                <col style={{ width: "200px" }} />
                                <col style={{ width: "100px" }} />
                                <col style={{ width: "100px" }} />
                                <col style={{ width: "100px" }} />
                            </colgroup>

                            <thead>
                                <tr>
                                    <th colSpan={1} rowSpan={1} className="k-group-cell k-header"></th>
                                    <th className="k-header" colSpan={1}>
                                        Name
                                    </th>
                                    <th className="k-header k-grid-header-sticky" style={{ left: '0px', right: '0px' }} colSpan={1}>
                                        Team
                                    </th>

                                    <th className="k-header k-grid-header-sticky" colSpan={1}>
                                        Active Projects
                                    </th>

                                    <th className="k-header" colSpan={1}>
                                        Salary
                                    </th>

                                    <th className="k-header" colSpan={1}>
                                        On Vacation
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
                                <table className="k-grid-table" style={{ height: 'auto' }}>
                                    <colgroup>
                                        <col className="k-group-col" />
                                        <col style={{ width: "100px" }} />
                                        <col style={{ width: "200px" }} />
                                        <col style={{ width: "100px" }} />
                                        <col style={{ width: "100px" }} />
                                        <col style={{ width: "100px" }} />
                                    </colgroup>

                                    <tbody>
                                        <tr className="k-grouping-row">
                                            <td colSpan={6}>
                                                <p className="k-reset">
                                                    <Icon name="collapse" />
                                                    <span>Currently active projects: 2 &nbsp;</span>
                                                </p>
                                            </td>
                                        </tr>

                                        <tr className="k-master-row">
                                            <td className="k-group-cell"></td>
                                            <td colSpan={1}>
                                                Employee 0</td>
                                            <td colSpan={1} className="k-grid-content-sticky" style={{ left: '0px', right: '0px' }}>
                                                Team 0</td>
                                            <td colSpan={1} className="k-grid-content-sticky">
                                                2</td>
                                            <td colSpan={1}>
                                                1429</td>
                                            <td colSpan={1}>
                                                True</td>
                                        </tr>

                                        <tr className="k-master-row k-alt">
                                            <td className="k-group-cell"></td>
                                            <td colSpan={1}>
                                                Employee 4</td>
                                            <td colSpan={1} className="k-grid-content-sticky" style={{ left: '0px', right: '0px' }}>
                                                Team 1</td>
                                            <td colSpan={1} className="k-grid-content-sticky">
                                                2</td>
                                            <td colSpan={1}>
                                                2915</td>
                                            <td colSpan={1}>
                                                True</td>
                                        </tr>

                                        <tr className="k-group-footer">
                                            <td className="k-group-cell"></td>
                                            <td>
                                            </td>
                                            <td className="k-grid-footer-sticky" style={{ left: '0px', right: '0px' }}>
                                                Team size: 7
                                            </td>
                                            <td className="k-grid-footer-sticky">
                                            </td>
                                            <td>
                                                Total: X
                                            </td>
                                            <td>
                                            </td>
                                        </tr>

                                        <tr className="k-grouping-row">
                                            <td colSpan={6}>
                                                <p className="k-reset">
                                                    <Icon name="collapse" />
                                                    <span>Currently active projects: 5 &nbsp;</span>
                                                    <span className="warning">These people work on too many projects</span>
                                                </p>
                                            </td>
                                        </tr>

                                        <tr className="k-master-row k-hover">
                                            <td className="k-group-cell"></td>
                                            <td colSpan={1}>
                                                Employee 1</td>
                                            <td colSpan={1} className="k-grid-content-sticky  " style={{ left: '0px', right: '0px' }}>
                                                Team 1 (Hovered)</td>
                                            <td colSpan={1} className="k-grid-content-sticky">
                                                5</td>
                                            <td colSpan={1}>
                                                2307</td>
                                            <td colSpan={1}>
                                                False</td>
                                        </tr>

                                        <tr className="k-master-row k-alt k-selected">
                                            <td className="k-group-cell"></td>
                                            <td colSpan={1}>
                                                Employee 2</td>
                                            <td colSpan={1} className="k-grid-content-sticky" style={{ left: '0px', right: '0px' }}>
                                                Team 2  (Selected)</td>
                                            <td colSpan={1} className="k-grid-content-sticky">
                                                5</td>
                                            <td colSpan={1}>
                                                4225</td>
                                            <td colSpan={1}>
                                                True</td>
                                        </tr>

                                        <tr className="k-master-row k-hover k-selected">
                                            <td className="k-group-cell"></td>
                                            <td colSpan={1}>
                                                Employee 3</td>
                                            <td colSpan={1} className="k-grid-content-sticky  " style={{ left: '0px', right: '0px' }}>
                                                Team 0 (Selected and Hovered)</td>
                                            <td colSpan={1} className="k-grid-content-sticky">
                                                5</td>
                                            <td colSpan={1}>
                                                4593</td>
                                            <td colSpan={1}>
                                                False</td>
                                        </tr>

                                        <tr className="k-master-row k-alt">
                                            <td className="k-group-cell"></td>
                                            <td colSpan={1}>
                                                Employee 5</td>
                                            <td colSpan={1} className="k-grid-content-sticky" style={{ left: '0px', right: '0px' }}>
                                                Team 2</td>
                                            <td colSpan={1} className="k-grid-content-sticky">
                                                5</td>
                                            <td colSpan={1}>
                                                2906</td>
                                            <td colSpan={1}>
                                            False</td>
                                        </tr>

                                        <tr className="k-group-footer">
                                            <td className="k-group-cell"></td>
                                            <td>
                                            </td>
                                            <td className="k-grid-content-sticky" style={{ left: '0px', right: '0px' }}>
                                                Team size: 18
                                            </td>
                                            <td className="k-grid-content-sticky">
                                            </td>
                                            <td>
                                                Total: Y
                                            </td>
                                            <td>
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
