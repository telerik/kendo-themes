import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <section>
                <div className="k-widget k-grid k-grid-no-scrollbar" style={{ width: "600px", height: "400px" }}>
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table>
                                <colgroup>
                                    <col className="k-hierarchy-col" /><col />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th className="k-header k-hierarchy-cell">
                                        </th>
                                        <th className="k-header">
                                            <a className="k-link">Title<span></span></a>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-content">
                        <table className="k-grid-table">
                            <colgroup>
                                <col className="k-hierarchy-col" /><col />
                            </colgroup>
                            <tbody>
                                <tr className="k-master-row">
                                    <td className="k-hierarchy-cell">
                                        <Icon name="expand" />
                                    </td>
                                    <td>1</td>
                                </tr>
                                <tr className="k-alt k-master-row k-expanded">
                                    <td className="k-hierarchy-cell">
                                        <Icon name="collapse" />
                                    </td>
                                    <td>2</td>
                                </tr>
                                <tr className="k-detail-row">
                                    <td className="k-hierarchy-cell"></td>
                                    <td className="k-detail-cell" colSpan={1}>
                                        {/* hierarchy child content */}
                                        <div className="k-widget k-grid k-grid-no-scrollbar" style={{ height: "200px" }}>
                                            <div className="k-grid-header">
                                                <div className="k-grid-header-wrap">
                                                    <table>
                                                        <colgroup>
                                                            <col /><col />
                                                        </colgroup>
                                                        <thead>
                                                            <tr>
                                                                <th className="k-header">
                                                                    <a className="k-link">Title<span></span></a>
                                                                </th>
                                                                <th className="k-header">
                                                                    <a className="k-link">Title<span></span></a>
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="k-grid-content">
                                                <table className="k-grid-table">
                                                    <colgroup>
                                                        <col /><col />
                                                    </colgroup>
                                                    <tbody>
                                                        <tr className="k-master-row">
                                                            <td>Text</td>
                                                            <td>Text</td>
                                                        </tr>
                                                        <tr className="k-alt k-master-row">
                                                            <td>Text</td>
                                                            <td>Text</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

        </div>
    </>
);
