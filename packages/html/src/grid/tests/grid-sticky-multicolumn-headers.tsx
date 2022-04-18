import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid">
            <h3>LTR</h3>
            <div className="test-grid k-grid k-widget k-grid-display-block k-grid-no-scrollbar" style={{ height: "300px", width: "800px" }}>
                <div className="k-grid-header">
                    <div className="k-grid-header-wrap k-auto-scrollable">
                        <table>
                            <colgroup>
                                <col style={{ width: "200px" }} />
                                <col style={{ width: "100px" }} />
                                <col style={{ width: "100px" }} />
                                <col style={{ width: "100px" }} />
                                <col style={{ width: "100px" }} />
                                <col style={{ width: "1000px" }} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th rowSpan={4} className="k-header">Contact Name</th>
                                    <th colSpan={4} className="k-grid-header-sticky k-header" style={{ left: '0px', right: '0px' }}>Contact Info</th>
                                    <th rowSpan={4} className="k-header">Phone</th>
                                </tr>
                                <tr>
                                    <th rowSpan={3} className="k-grid-header-sticky k-header k-first" style={{ left: '0px', right: "300px" }}>Contact Title</th>
                                    <th colSpan={3} className="k-grid-no-left-border k-grid-header-sticky k-header"style={{ left: "100px", right: '0px' }}>Location</th>
                                </tr>
                                <tr>
                                    <th colSpan={2} className="k-grid-no-left-border k-grid-header-sticky k-header k-first" style={{ left: "100px", right: "100px" }}>Test</th>
                                    <th rowSpan={2} className="k-grid-no-left-border k-grid-header-sticky k-header" style={{ left: "300px", right: '0px' }}>City</th>
                                </tr>
                                <tr>
                                    <th className="k-grid-no-left-border k-grid-header-sticky k-header k-first" style={{ left: "100px", right: "200px" }}>Fax</th>
                                    <th className="k-grid-no-left-border k-grid-header-sticky k-header" style={{ left: "200px", right: "100px" }}>Country</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>

            <h3>RTL</h3>
            <div className="k-rtl k-d-flex k-justify-content-end">
                <div className="test-grid k-grid k-widget k-grid-display-block k-grid-no-scrollbar" style={{ height: "300px", width: "800px" }}>
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap k-auto-scrollable">
                            <table>
                                <colgroup>
                                    <col style={{ width: "200px" }} />
                                    <col style={{ width: "100px" }} />
                                    <col style={{ width: "100px" }} />
                                    <col style={{ width: "100px" }} />
                                    <col style={{ width: "100px" }} />
                                    <col style={{ width: "1000px" }} />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th rowSpan={4} className="k-header">Contact Name</th>
                                        <th colSpan={4} className="k-grid-header-sticky k-header" style={{ left: '0px', right: '0px' }}>Contact Info</th>
                                        <th rowSpan={4} className="k-header">Phone</th>
                                    </tr>
                                    <tr>
                                        <th rowSpan={3} className="k-grid-header-sticky k-header k-first" style={{ left: "300px", right: '0px' }}>Contact Title</th>
                                        <th colSpan={3} className="k-grid-no-left-border k-grid-header-sticky k-header" style={{ left: '0px', right: "100px" }}>Location</th>
                                    </tr>
                                    <tr>
                                        <th colSpan={2} className="k-grid-no-left-border k-grid-header-sticky k-header k-first" style={{ left: "100px", right: "100px" }}>Test</th>
                                        <th rowSpan={2} className="k-grid-no-left-border k-grid-header-sticky k-header" style={{ left: '0px', right: "300px" }}>City</th>
                                    </tr>
                                    <tr>
                                        <th className="k-grid-no-left-border k-grid-header-sticky k-header k-first" style={{ left: "200px", right: "100px" }}>Fax</th>
                                        <th className="k-grid-no-left-border k-grid-header-sticky k-header" style={{ left: "100px", right: "200px" }}>Country</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
);
