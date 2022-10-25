import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid">

            <section>
                <span>jQuery</span>
                <div id="treelist" className="k-treelist k-grid k-grid-md k-grid-display-block" style={{ height: "650px" }}>
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-md k-grid-header-table">
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th k-header k-filterable" rowSpan={1}>
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Name</span>
                                                </span>
                                                <a href="#" className="k-grid-filter-menu k-grid-header-menu"><Icon name="filter" /></a>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header k-filterable" rowSpan={1} data-index={1}>
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Position</span>
                                                </span>
                                                <a href="#" className="k-grid-filter-menu k-grid-header-menu"><Icon name="filter" /></a>
                                            </span>
                                        </th>
                                        <th data-title="Hire Date" className="k-table-th k-header k-filterable" rowSpan={1}>
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Hire Date</span>
                                                </span>
                                                <a href="#" className="k-grid-filter-menu k-grid-header-menu"><Icon name="filter" /></a>
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-content k-auto-scrollable" style={{ display: "block", height: "591px" }}>
                        <table className="k-table k-table-md k-grid-table">
                            <colgroup>
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <tbody className="k-table-tbody">
                                <tr className="k-table-row k-treelist-group">
                                    <td className="k-table-td" style={{ whiteSpace: "nowrap" }}><Icon name="collapse"></Icon>Daryl Sweeney</td>
                                    <td className="k-table-td">CEO</td>
                                    <td className="k-table-td">February 7, 2012</td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-alt k-treelist-group">
                                    <td className="k-table-td" style={{ whiteSpace: "nowrap" }}><Icon name="none"></Icon><Icon name="expand"></Icon>Guy Wooten</td>
                                    <td className="k-table-td">Chief Technical Officer</td>
                                    <td className="k-table-td">March 3, 2010</td>
                                </tr>
                                <tr className="k-table-row k-treelist-group">
                                    <td className="k-table-td" style={{ whiteSpace: "nowrap" }}><Icon name="none"></Icon><Icon name="expand"></Icon>Priscilla Frank</td>
                                    <td className="k-table-td">Chief Product Officer</td>
                                    <td className="k-table-td">November 30, 2014</td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-alt k-treelist-group">
                                    <td className="k-table-td" style={{ whiteSpace: "nowrap" }}><Icon name="none"></Icon><Icon name="collapse"></Icon>Anika Vega</td>
                                    <td className="k-table-td">Chief Process Officer</td>
                                    <td className="k-table-td">February 25, 2010</td>
                                </tr>
                                <tr className="k-table-row k-treelist-group">
                                    <td className="k-table-td" style={{ whiteSpace: "nowrap" }}><Icon name="none"></Icon><Icon name="none"></Icon><Icon name="expand"></Icon>Vernon Ballard</td>
                                    <td className="k-table-td">Director Facilities</td>
                                    <td className="k-table-td">June 26, 2015</td>
                                </tr>
                                <tr className="k-table-row k-footer-template">
                                    <td className="k-table-td k-focus"><Icon name="none"></Icon><Icon name="none"></Icon><Icon name="none"></Icon>7 employee(s)</td>
                                    <td className="k-table-td"></td>
                                    <td className="k-table-td">Last employee hired on July 30, 2015</td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-alt k-treelist-group">
                                    <td className="k-table-td" style={{ whiteSpace: "nowrap" }}><Icon name="none"></Icon><Icon name="expand"></Icon>Nevada Hart</td>
                                    <td className="k-table-td">Chief Financial Officer</td>
                                    <td className="k-table-td">August 17, 2015</td>
                                </tr>
                                <tr className="k-table-row k-treelist-group">
                                    <td className="k-table-td" style={{ whiteSpace: "nowrap" }}><Icon name="none"></Icon><Icon name="expand"></Icon>Hunter Fry</td>
                                    <td className="k-table-td">General Counsel</td>
                                    <td className="k-table-td">February 12, 2011</td>
                                </tr>
                                <tr className="k-table-row k-footer-template">
                                    <td className="k-table-td"><Icon name="none"></Icon><Icon name="none"></Icon>98 employee(s)</td>
                                    <td className="k-table-td"></td>
                                    <td className="k-table-td">Last employee hired on August 17, 2015</td>
                                </tr>
                                <tr className="k-table-row k-footer-template">
                                    <td className="k-table-td"><Icon name="none"></Icon>99 employee(s)</td>
                                    <td className="k-table-td"></td>
                                    <td className="k-table-td">Last employee hired on August 17, 2015</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section>
                <span>Angular</span>
                <div className="k-grid k-grid-md k-treelist" style={{ height: "410px" }}>
                    <div className="k-grid-aria-root">
                        <div className="k-grid-header">
                            <div className="k-grid-header-wrap">
                                <table className="k-table k-table-md k-grid-header-table">
                                    <colgroup>
                                        <col style={{ width: "250px" }} />
                                        <col style={{ width: "180px" }} />
                                        <col style={{ width: "180px" }} />
                                    </colgroup>
                                    <thead className="k-table-thead">
                                        <tr className="k-table-row">
                                            <th className="k-table-th k-header" rowSpan={1} colSpan={1}>
                                                <span className="k-cell-inner">
                                                    <span className="k-link">
                                                        <span className="k-column-title">Name</span>
                                                    </span>
                                                </span>
                                            </th>
                                            <th className="k-table-th k-header" rowSpan={1} colSpan={1}>
                                                <span className="k-cell-inner">
                                                    <span className="k-link">
                                                        <span className="k-column-title">Title</span>
                                                    </span>
                                                </span>
                                            </th>
                                            <th className="k-table-th k-header" rowSpan={1} colSpan={1}>
                                                <span className="k-cell-inner">
                                                    <span className="k-link">
                                                        <span className="k-column-title">hireDate</span>
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
                                <div className="k-grid-table-wrap">
                                    <table className="k-table k-table-md k-grid-table">
                                        <colgroup>
                                            <col style={{ width: "250px" }} />
                                            <col style={{ width: "180px" }} />
                                            <col style={{ width: "180px" }} />
                                        </colgroup>
                                        <tbody className="k-table-tbody">
                                            <tr className="k-table-row">
                                                <td colSpan={1} className="k-table-td">
                                                    <Icon name="collapse"></Icon>
                                                    Daryl Sweeney
                                                </td>
                                                <td colSpan={1} className="k-table-td">
                                                    Chief Executive Officer
                                                </td>
                                                <td colSpan={1} className="k-table-td">1/15/2019</td>
                                            </tr>
                                            <tr className="k-table-row k-table-alt-row k-alt">
                                                <td colSpan={1} className="k-table-td">
                                                    <Icon name="none"></Icon>
                                                    <Icon name="collapse"></Icon>
                                                    Guy Wooten
                                                </td>
                                                <td colSpan={1} className="k-table-td">
                                                    Chief Technical Officer
                                                </td>
                                                <td colSpan={1} className="k-table-td">2/19/2019</td>
                                            </tr>
                                            <tr className="k-table-row">
                                                <td colSpan={1} className="k-table-td">
                                                    <Icon name="none"></Icon><Icon name="none"></Icon>
                                                    <Icon name="expand"></Icon>
                                                    Buffy Weber
                                                </td>
                                                <td colSpan={1} className="k-table-td">
                                                    VP, Engineering
                                                </td>
                                                <td colSpan={1} className="k-table-td">4/13/2019</td>
                                            </tr>
                                            <tr className="k-table-row k-footer">
                                                <td className="k-table-td k-focus">
                                                    <Icon name="none"></Icon><Icon name="none"></Icon><Icon name="none"></Icon>
                                                    35 employee(s)
                                                </td>
                                                <td className="k-table-td"></td>
                                                <td className="k-table-td">
                                                    Last employee hired on 10/21/2019
                                                </td>
                                            </tr>
                                            <tr className="k-table-row k-table-alt-row k-alt">
                                                <td colSpan={1} className="k-table-td">
                                                    <Icon name="none"></Icon>
                                                    <Icon name="expand"></Icon>
                                                    Priscilla Frank
                                                </td>
                                                <td colSpan={1} className="k-table-td">
                                                    Chief Product Officer
                                                </td>
                                                <td colSpan={1} className="k-table-td">4/22/2019</td>
                                            </tr>
                                            <tr className="k-footer">
                                                <td className="k-table-td">
                                                    <Icon name="none"></Icon><Icon name="none"></Icon>
                                                    42 employee(s)
                                                </td>
                                                <td className="k-table-td"></td>
                                                <td className="k-table-td">
                                                    Last employee hired on 10/21/2019
                                                </td>
                                            </tr>
                                            <tr className="k-table-row k-footer">
                                                <td className="k-table-td">
                                                    <Icon name="none"></Icon>
                                                    43 employee(s)
                                                </td>
                                                <td className="k-table-td"></td>
                                                <td className="k-table-td">
                                                    Last employee hired on 10/21/2019
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="k-height-container">
                                    <div style={{ height: '0px' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    </>
);
