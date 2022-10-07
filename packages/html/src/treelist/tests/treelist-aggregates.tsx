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
                            <table>
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th className="k-header k-with-icon k-filterable" rowSpan={1}>
                                            <a className="k-grid-filter" href="#"><Icon name="filter"></Icon></a><a className="k-link" href="#">Name</a>
                                        </th>
                                        <th className="k-header k-with-icon k-filterable" rowSpan={1} data-index={1}>
                                            <a className="k-grid-filter" href="#"><Icon name="filter"></Icon></a><a className="k-link" href="#">Position</a>
                                        </th>
                                        <th data-title="Hire Date" className="k-header k-with-icon k-filterable" rowSpan={1}>
                                            <a className="k-grid-filter" href="#"><Icon name="filter"></Icon></a><a className="k-link" href="#">Hire Date</a>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-content k-auto-scrollable" style={{ display: "block", height: "591px" }}>
                        <table>
                            <colgroup>
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <tbody>
                                <tr className="k-treelist-group">
                                    <td style={{ whiteSpace: "nowrap" }}><Icon name="collapse"></Icon>Daryl Sweeney</td>
                                    <td>CEO</td>
                                    <td>February 7, 2012</td>
                                </tr>
                                <tr className="k-alt k-treelist-group">
                                    <td style={{ whiteSpace: "nowrap" }}><Icon name="none"></Icon><Icon name="expand"></Icon>Guy Wooten</td>
                                    <td>Chief Technical Officer</td>
                                    <td>March 3, 2010</td>
                                </tr>
                                <tr className="k-treelist-group">
                                    <td style={{ whiteSpace: "nowrap" }}><Icon name="none"></Icon><Icon name="expand"></Icon>Priscilla Frank</td>
                                    <td>Chief Product Officer</td>
                                    <td>November 30, 2014</td>
                                </tr>
                                <tr className="k-alt k-treelist-group">
                                    <td style={{ whiteSpace: "nowrap" }}><Icon name="none"></Icon><Icon name="collapse"></Icon>Anika Vega</td>
                                    <td>Chief Process Officer</td>
                                    <td>February 25, 2010</td>
                                </tr>
                                <tr className="k-treelist-group">
                                    <td style={{ whiteSpace: "nowrap" }}><Icon name="none"></Icon><Icon name="none"></Icon><Icon name="expand"></Icon>Vernon Ballard</td>
                                    <td>Director Facilities</td>
                                    <td>June 26, 2015</td>
                                </tr>
                                <tr className="k-table-row k-footer-template">
                                    <td className="k-focus"><Icon name="none"></Icon><Icon name="none"></Icon><Icon name="none"></Icon>7 employee(s)</td>
                                    <td></td>
                                    <td>Last employee hired on July 30, 2015</td>
                                </tr>
                                <tr className="k-alt k-treelist-group">
                                    <td style={{ whiteSpace: "nowrap" }}><Icon name="none"></Icon><Icon name="expand"></Icon>Nevada Hart</td>
                                    <td>Chief Financial Officer</td>
                                    <td>August 17, 2015</td>
                                </tr>
                                <tr className="k-treelist-group">
                                    <td style={{ whiteSpace: "nowrap" }}><Icon name="none"></Icon><Icon name="expand"></Icon>Hunter Fry</td>
                                    <td>General Counsel</td>
                                    <td>February 12, 2011</td>
                                </tr>
                                <tr className="k-table-row k-footer-template">
                                    <td><Icon name="none"></Icon><Icon name="none"></Icon>98 employee(s)</td>
                                    <td></td>
                                    <td>Last employee hired on August 17, 2015</td>
                                </tr>
                                <tr className="k-table-row k-footer-template">
                                    <td><Icon name="none"></Icon>99 employee(s)</td>
                                    <td></td>
                                    <td>Last employee hired on August 17, 2015</td>
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
                                <table>
                                    <colgroup>
                                        <col style={{ width: "250px" }} />
                                        <col style={{ width: "180px" }} />
                                        <col style={{ width: "180px" }} />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th className="k-header" rowSpan={1} colSpan={1}>Name</th>
                                            <th className="k-header" rowSpan={1} colSpan={1}>Title</th>
                                            <th className="k-header" rowSpan={1} colSpan={1}>hireDate</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                        <div className="k-grid-container">
                            <div className="k-grid-content k-virtual-content">
                                <div className="k-grid-table-wrap">
                                    <table className="k-grid-table">
                                        <colgroup>
                                            <col style={{ width: "250px" }} />
                                            <col style={{ width: "180px" }} />
                                            <col style={{ width: "180px" }} />
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <td colSpan={1}>
                                                    <Icon name="collapse"></Icon>
                                                    Daryl Sweeney
                                                </td>
                                                <td colSpan={1}>
                                                    Chief Executive Officer
                                                </td>
                                                <td colSpan={1}>1/15/2019</td>
                                            </tr>
                                            <tr className="k-alt">
                                                <td colSpan={1}>
                                                    <Icon name="none"></Icon>
                                                    <Icon name="collapse"></Icon>
                                                    Guy Wooten
                                                </td>
                                                <td colSpan={1}>
                                                    Chief Technical Officer
                                                </td>
                                                <td colSpan={1}>2/19/2019</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={1}>
                                                    <Icon name="none"></Icon><Icon name="none"></Icon>
                                                    <Icon name="expand"></Icon>
                                                    Buffy Weber
                                                </td>
                                                <td colSpan={1}>
                                                    VP, Engineering
                                                </td>
                                                <td colSpan={1}>4/13/2019</td>
                                            </tr>
                                            <tr className="k-footer">
                                                <td className="k-focus">
                                                    <Icon name="none"></Icon><Icon name="none"></Icon><Icon name="none"></Icon>
                                                    35 employee(s)
                                                </td>
                                                <td></td>
                                                <td>
                                                    Last employee hired on 10/21/2019
                                                </td>
                                            </tr>
                                            <tr className="k-alt">
                                                <td colSpan={1}>
                                                    <Icon name="none"></Icon>
                                                    <Icon name="expand"></Icon>
                                                    Priscilla Frank
                                                </td>
                                                <td colSpan={1}>
                                                    Chief Product Officer
                                                </td>
                                                <td colSpan={1}>4/22/2019</td>
                                            </tr>
                                            <tr className="k-footer">
                                                <td>
                                                    <Icon name="none"></Icon><Icon name="none"></Icon>
                                                    42 employee(s)
                                                </td>
                                                <td></td>
                                                <td>
                                                    Last employee hired on 10/21/2019
                                                </td>
                                            </tr>
                                            <tr className="k-footer">
                                                <td>
                                                    <Icon name="none"></Icon>
                                                    43 employee(s)
                                                </td>
                                                <td></td>
                                                <td>
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
