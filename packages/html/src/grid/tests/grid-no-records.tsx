import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area">
            <div id="grid" className="k-grid k-widget k-grid-display-block k-grid-no-scrollbar" style={{ height: "350px" }}>
                <div className="k-grid-header">
                    <div className="k-grid-header-wrap k-auto-scrollable">
                        <table>
                            <colgroup>
                                <col style={{ width: "225px" }} />
                                <col style={{ width: "500px" }} />
                                <col style={{ width: "255px" }} />
                                <col />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col" className="k-header">OrderID</th>
                                    <th scope="col" className="k-header">Ship Name</th>
                                    <th scope="col" className="k-header">Freight</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <div className="k-grid-content k-auto-scrollable" style={{ height: "280px" }}>
                    <table style={{ height: 'auto' }}>
                        <colgroup>
                            <col style={{ width: "225px" }} />
                            <col style={{ width: "500px" }} />
                            <col style={{ width: "255px" }} />
                            <col />
                        </colgroup>
                        <tbody></tbody>
                    </table>
                    <div className="k-grid-norecords">
                        <div className="k-grid-norecords-template">No records available.</div>
                    </div>
                    <div className="k-grid-content-expander" style={{ width: "982px" }}></div>
                </div>
            </div>
            <h4>Angular Grid</h4>
            <div className="k-widget k-grid">
                <div className="k-grid-aria-root">
                    <div className="k-grid-header" style={{ padding: "0px 16px 0px 0px" }}>
                        <colgroup>
                            <col style={{ width: "140px" }} />
                            <col style={{ width: "120px" }} />
                            <col style={{ width: "100px" }} />
                            <col style={{ width: "130px" }} />
                        </colgroup>
                        <table>
                            <thead>
                                <tr>
                                    <th className="k-header" rowSpan={1} colSpan={1}>CompanyName</th>
                                    <th className="k-header" rowSpan={1} colSpan={1}>ContactName</th>
                                    <th className="k-header" rowSpan={1} colSpan={1}>City</th>
                                    <th className="k-header" rowSpan={1} colSpan={1}>ContactTitle</th>
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
                                    <col style={{ width: "140px" }} />
                                    <col style={{ width: "120px" }} />
                                    <col style={{ width: "100px" }} />
                                    <col style={{ width: "130px" }} />
                                </colgroup>
                                <tbody>
                                    <tr className="k-grid-norecords">
                                        <td colSpan={4}>No records available. </td>
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
    </>
);
