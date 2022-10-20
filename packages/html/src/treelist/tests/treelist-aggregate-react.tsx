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
                <span>React</span>
                <div className="k-grid k-grid-md k-treelist-scrollable">
                    <table className="k-table k-table-md">
                        <colgroup>
                            <col style={{ width: "34%" }} />
                            <col style={{ width: "33%" }} />
                            <col style={{ width: "33%" }} />
                        </colgroup>
                        <thead className="k-table-thead k-grid-header">
                            <tr className="k-table-row">
                                <th colSpan={1} rowSpan={1} className="k-table-th k-header" style={{ top: '0px' }}><a className="k-link">Name</a></th>
                                <th colSpan={1} rowSpan={1} className="k-table-th k-header" style={{ top: '0px' }}><a className="k-link">Position</a></th>
                                <th colSpan={1} rowSpan={1} className="k-table-th k-header" style={{ top: '0px' }}><a className="k-link">Hire Date</a></th>
                            </tr>
                        </thead>
                        <tbody className="k-table-tbody">
                            <tr className="k-table-row k-master-row">
                                <td className="k-table-td k-text-nowrap" colSpan={1}><Icon name="collapse"></Icon>Daryl Sweeney</td>
                                <td colSpan={1} className="k-table-td">CEO</td>
                                <td colSpan={1} className="k-table-td">March 7, 2012</td>
                            </tr>
                            <tr className="k-table-row k-master-row">
                                <td className="k-table-td k-text-nowrap" colSpan={1}><Icon name="none"></Icon><Icon name="expand"></Icon>Guy Wooten</td>
                                <td colSpan={1} className="k-table-td">Chief Technical Officer</td>
                                <td colSpan={1} className="k-table-td">April 3, 2010</td>
                            </tr>
                            <tr className="k-table-row k-master-row">
                                <td className="k-table-td k-text-nowrap" colSpan={1}><Icon name="none"></Icon><Icon name="expand"></Icon>Priscilla Frank</td>
                                <td colSpan={1} className="k-table-td">Chief Product Officer</td>
                                <td colSpan={1} className="k-table-td">December 30, 2014</td>
                            </tr>
                            <tr className="k-table-row k-master-row">
                                <td className="k-table-td k-text-nowrap" colSpan={1}><Icon name="none"></Icon><Icon name="collapse"></Icon>Anika Vega</td>
                                <td colSpan={1} className="k-table-td">Chief Process Officer</td>
                                <td colSpan={1} className="k-table-td">March 25, 2010</td>
                            </tr>
                            <tr className="k-table-row k-master-row">
                                <td className="k-table-td k-text-nowrap" colSpan={1}><Icon name="none"></Icon><Icon name="none"></Icon><Icon name="expand"></Icon>Vernon Ballard</td>
                                <td colSpan={1} className="k-table-td">Director Facilities</td>
                                <td colSpan={1} className="k-table-td">July 26, 2015</td>
                            </tr>
                            <tr className="k-table-row k-group-footer">
                                <td className="k-table-td k-text-nowrap" colSpan={1}><Icon name="none"></Icon><Icon name="none"></Icon><Icon name="none"></Icon>7 employee(s)</td>
                                <td colSpan={1} className="k-table-td"></td>
                                <td colSpan={1} className="k-table-td">Last employee hired on August 30, 2015</td>
                            </tr>
                            <tr className="k-table-row k-master-row">
                                <td className="k-table-td k-text-nowrap" colSpan={1}><Icon name="none"></Icon><Icon name="expand"></Icon>Nevada Hart</td>
                                <td colSpan={1} className="k-table-td">Chief Financial Officer</td>
                                <td colSpan={1} className="k-table-td">September 17, 2015</td>
                            </tr>
                            <tr className="k-table-row k-master-row">
                                <td className="k-table-td k-text-nowrap" colSpan={1}><Icon name="none"></Icon><Icon name="expand"></Icon>Hunter Fry</td>
                                <td colSpan={1} className="k-table-td">General Counsel</td>
                                <td colSpan={1} className="k-table-td">March 12, 2011</td>
                            </tr>
                            <tr className="k-table-row k-group-footer">
                                <td className="k-table-td k-text-nowrap" colSpan={1}><Icon name="none"></Icon><Icon name="none"></Icon>98 employee(s)</td>
                                <td colSpan={1} className="k-table-td"></td>
                                <td colSpan={1} className="k-table-td">Last employee hired on September 17, 2015</td>
                            </tr>
                            <tr className="k-table-row k-group-footer">
                                <td className="k-table-td k-text-nowrap" colSpan={1}><Icon name="none"></Icon>99 employee(s)</td>
                                <td colSpan={1} className="k-table-td"></td>
                                <td colSpan={1} className="k-table-td">Last employee hired on September 17, 2015</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    </>
);
