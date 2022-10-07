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

                <div id="treelist" className="k-treelist k-grid k-grid-md k-grid-no-scrollbar">
                    <div className="k-grid-header" style={{ paddingRight: '0px' }}>
                        <div className="k-grid-header-wrap">
                            <table>
                                <colgroup>
                                    <col style={{ width: "250px" }}/>
                                    <col />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th className="k-header k-with-icon"><a className="k-grid-header-menu k-grid-column-menu"><Icon name="more-vertical"></Icon></a><a className="k-link">First
                                                Name</a></th>
                                        <th className="k-header k-with-icon"><a className="k-grid-header-menu k-grid-column-menu"><Icon name="more-vertical"></Icon></a><a className="k-link">Last
                                                Name</a></th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-content k-auto-scrollable">
                        <table>
                            <colgroup>
                                <col style={{ width: "250px" }}/>
                                <col />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td><Icon name="expand"></Icon>Daryl</td>
                                    <td>Sweeney</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>

            <section>
                <div id="treelist" className="k-treelist k-grid k-grid-md">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table>
                                <colgroup>
                                    <col style={{ width: "280px" }} />
                                    <col style={{ width: "160px" }} />
                                    <col />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th className="k-header k-with-icon k-filterable">
                                            <a className="k-grid-filter"><Icon name="filter"></Icon></a>
                                            <a className="k-link">First Name</a>
                                        </th>
                                        <th className="k-header k-with-icon k-filterable">
                                            <a className="k-grid-filter"><Icon name="filter"></Icon></a>
                                            <a className="k-link">Last Name</a>
                                        </th>
                                        <th className="k-header k-with-icon k-filterable">
                                            <a className="k-grid-filter"><Icon name="filter"></Icon></a>
                                            <a className="k-link">Position</a>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-content k-auto-scrollable">
                        <table>
                            <colgroup>
                                <col style={{ width: "280px" }} />
                                <col style={{ width: "160px" }}/>
                                <col />
                            </colgroup>
                            <tbody>
                                <tr className="k-treelist-group">
                                    <td><Icon name="collapse"></Icon>Daryl</td>
                                    <td>Sweeney</td>
                                    <td>CEO</td>
                                </tr>
                                <tr className="k-alt k-treelist-group">
                                    <td><Icon name="none"></Icon><Icon name="collapse"></Icon>Guy
                                    </td>
                                    <td>Wooten</td>
                                    <td>Chief Technical Officer</td>
                                </tr>
                                <tr className="k-treelist-group">
                                    <td><Icon name="none"></Icon><Icon name="none"></Icon><Icon name="collapse"></Icon>Buffy</td>
                                    <td>Weber</td>
                                    <td>VP, Engineering</td>
                                </tr>
                                <tr className="k-alt k-treelist-group">
                                    <td><Icon name="none"></Icon><Icon name="none"></Icon><Icon name="none"></Icon><Icon name="collapse"></Icon>Hyacinth
                                    </td>
                                    <td>Hood</td>
                                    <td>Team Lead</td>
                                </tr>
                                <tr>
                                    <td><Icon name="none"></Icon><Icon name="none"></Icon><Icon name="none"></Icon><Icon name="none"></Icon><Icon name="none"></Icon>Akeem</td>
                                    <td>Carr</td>
                                    <td>Junior Software Developer</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>

    </>
);
