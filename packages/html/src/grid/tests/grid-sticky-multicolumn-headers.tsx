

export default () =>(
    <>
        <div id="test-area" className="k-d-grid">
            <span>LTR</span>
            <div className="test-grid k-grid k-grid-md k-grid-display-block k-grid-no-scrollbar" style={{ height: "300px", width: "800px" }}>
                <div className="k-grid-header">
                    <div className="k-grid-header-wrap k-auto-scrollable">
                        <table className="k-table k-table-md k-grid-header-table">
                            <colgroup>
                                <col style={{ width: "200px" }} />
                                <col style={{ width: "100px" }} />
                                <col style={{ width: "100px" }} />
                                <col style={{ width: "100px" }} />
                                <col style={{ width: "100px" }} />
                                <col style={{ width: "1000px" }} />
                            </colgroup>
                            <thead className="k-table-thead">
                                <tr className="k-table-row">
                                    <th rowSpan={4} className="k-table-th k-header">
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Contact Name</span>
                                            </span>
                                        </span>
                                    </th>
                                    <th colSpan={4} className="k-table-th k-grid-header-sticky k-header" style={{ left: '0px', right: '0px' }}>
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Contact Info</span>
                                            </span>
                                        </span>
                                    </th>
                                    <th rowSpan={4} className="k-table-th k-header">
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Phone</span>
                                            </span>
                                        </span>
                                    </th>
                                </tr>
                                <tr className="k-table-row">
                                    <th rowSpan={3} className="k-table-th k-grid-header-sticky k-header k-first" style={{ left: '0px', right: "300px" }}>
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Contact Title</span>
                                            </span>
                                        </span>
                                    </th>
                                    <th colSpan={3} className="k-table-th k-grid-no-left-border k-grid-header-sticky k-header"style={{ left: "100px", right: '0px' }}>
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Location</span>
                                            </span>
                                        </span>
                                    </th>
                                </tr>
                                <tr className="k-table-row">
                                    <th colSpan={2} className="k-table-th k-grid-no-left-border k-grid-header-sticky k-header k-first" style={{ left: "100px", right: "100px" }}>
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Test</span>
                                            </span>
                                        </span>
                                    </th>
                                    <th rowSpan={2} className="k-table-th k-grid-no-left-border k-grid-header-sticky k-header" style={{ left: "300px", right: '0px' }}>
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">City</span>
                                            </span>
                                        </span>
                                    </th>
                                </tr>
                                <tr className="k-table-row">
                                    <th className="k-table-th k-grid-no-left-border k-grid-header-sticky k-header k-first" style={{ left: "100px", right: "200px" }}>
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Fax</span>
                                            </span>
                                        </span>
                                    </th>
                                    <th className="k-table-th k-grid-no-left-border k-grid-header-sticky k-header" style={{ left: "200px", right: "100px" }}>
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Country</span>
                                            </span>
                                        </span>
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>

            <span>RTL</span>
            <div className="k-rtl k-d-flex k-justify-content-end">
                <div className="test-grid k-grid k-grid-md k-grid-display-block k-grid-no-scrollbar" style={{ height: "300px", width: "800px" }}>
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap k-auto-scrollable">
                            <table className="k-table k-table-md k-grid-header-table">
                                <colgroup>
                                    <col style={{ width: "200px" }} />
                                    <col style={{ width: "100px" }} />
                                    <col style={{ width: "100px" }} />
                                    <col style={{ width: "100px" }} />
                                    <col style={{ width: "100px" }} />
                                    <col style={{ width: "1000px" }} />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th rowSpan={4} className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Contact Name</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th colSpan={4} className="k-table-th k-grid-header-sticky k-header" style={{ left: '0px', right: '0px' }}>
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Contact Info</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th rowSpan={4} className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Phone</span>
                                                </span>
                                            </span>
                                        </th>
                                    </tr>
                                    <tr className="k-table-row">
                                        <th rowSpan={3} className="k-table-th k-grid-header-sticky k-header k-first" style={{ left: "300px", right: '0px' }}>
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Contact Title</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th colSpan={3} className="k-table-th k-grid-no-left-border k-grid-header-sticky k-header" style={{ left: '0px', right: "100px" }}>
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Location</span>
                                                </span>
                                            </span>
                                        </th>
                                    </tr>
                                    <tr className="k-table-row">
                                        <th colSpan={2} className="k-table-th k-grid-no-left-border k-grid-header-sticky k-header k-first" style={{ left: "100px", right: "100px" }}>
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Test</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th rowSpan={2} className="k-table-th k-grid-no-left-border k-grid-header-sticky k-header" style={{ left: '0px', right: "300px" }}>
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">City</span>
                                                </span>
                                            </span>
                                        </th>
                                    </tr>
                                    <tr className="k-table-row">
                                        <th className="k-table-th k-grid-no-left-border k-grid-header-sticky k-header k-first" style={{ left: "200px", right: "100px" }}>
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Fax</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-grid-no-left-border k-grid-header-sticky k-header" style={{ left: "100px", right: "200px" }}>
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Country</span>
                                                </span>
                                            </span>
                                        </th>
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
