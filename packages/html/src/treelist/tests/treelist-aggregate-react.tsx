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
                    <table>
                        <colgroup>
                            <col style={{ width: "34%" }} />
                            <col style={{ width: "33%" }} />
                            <col style={{ width: "33%" }} />
                        </colgroup>
                        <thead className="k-grid-header">
                            <tr>
                                <th colSpan={1} rowSpan={1} className="k-header" style={{ top: '0px' }}><a className="k-link">Name</a></th>
                                <th colSpan={1} rowSpan={1} className="k-header" style={{ top: '0px' }}><a className="k-link">Position</a></th>
                                <th colSpan={1} rowSpan={1} className="k-header" style={{ top: '0px' }}><a className="k-link">Hire Date</a></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="k-master-row">
                                <td className="k-text-nowrap" colSpan={1}><Icon name="collapse"></Icon>Daryl Sweeney</td>
                                <td colSpan={1}>CEO</td>
                                <td colSpan={1}>March 7, 2012</td>
                            </tr>
                            <tr className="k-master-row">
                                <td className="k-text-nowrap" colSpan={1}><Icon name="none"></Icon><Icon name="expand"></Icon>Guy Wooten</td>
                                <td colSpan={1}>Chief Technical Officer</td>
                                <td colSpan={1}>April 3, 2010</td>
                            </tr>
                            <tr className="k-master-row">
                                <td className="k-text-nowrap" colSpan={1}><Icon name="none"></Icon><Icon name="expand"></Icon>Priscilla Frank</td>
                                <td colSpan={1}>Chief Product Officer</td>
                                <td colSpan={1}>December 30, 2014</td>
                            </tr>
                            <tr className="k-master-row">
                                <td className="k-text-nowrap" colSpan={1}><Icon name="none"></Icon><Icon name="collapse"></Icon>Anika Vega</td>
                                <td colSpan={1}>Chief Process Officer</td>
                                <td colSpan={1}>March 25, 2010</td>
                            </tr>
                            <tr className="k-master-row">
                                <td className="k-text-nowrap" colSpan={1}><Icon name="none"></Icon><Icon name="none"></Icon><Icon name="expand"></Icon>Vernon Ballard</td>
                                <td colSpan={1}>Director Facilities</td>
                                <td colSpan={1}>July 26, 2015</td>
                            </tr>
                            <tr className="k-group-footer">
                                <td className="k-text-nowrap" colSpan={1}><Icon name="none"></Icon><Icon name="none"></Icon><Icon name="none"></Icon>7 employee(s)</td>
                                <td colSpan={1}></td>
                                <td colSpan={1}>Last employee hired on August 30, 2015</td>
                            </tr>
                            <tr className="k-master-row">
                                <td className="k-text-nowrap" colSpan={1}><Icon name="none"></Icon><Icon name="expand"></Icon>Nevada Hart</td>
                                <td colSpan={1}>Chief Financial Officer</td>
                                <td colSpan={1}>September 17, 2015</td>
                            </tr>
                            <tr className="k-master-row">
                                <td className="k-text-nowrap" colSpan={1}><Icon name="none"></Icon><Icon name="expand"></Icon>Hunter Fry</td>
                                <td colSpan={1}>General Counsel</td>
                                <td colSpan={1}>March 12, 2011</td>
                            </tr>
                            <tr className="k-group-footer">
                                <td className="k-text-nowrap" colSpan={1}><Icon name="none"></Icon><Icon name="none"></Icon>98 employee(s)</td>
                                <td colSpan={1}></td>
                                <td colSpan={1}>Last employee hired on September 17, 2015</td>
                            </tr>
                            <tr className="k-group-footer">
                                <td className="k-text-nowrap" colSpan={1}><Icon name="none"></Icon>99 employee(s)</td>
                                <td colSpan={1}></td>
                                <td colSpan={1}>Last employee hired on September 17, 2015</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    </>
);
