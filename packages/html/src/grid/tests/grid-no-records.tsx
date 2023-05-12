

export default () =>(
    <>
        <div id="test-area">
            <div id="grid" className="k-grid k-grid-md k-grid-display-block k-grid-no-scrollbar" style={{ height: "350px" }}>
                <div className="k-grid-header">
                    <div className="k-grid-header-wrap k-auto-scrollable">
                        <table className="k-table k-table-md k-grid-header-table">
                            <colgroup>
                                <col style={{ width: "225px" }} />
                                <col style={{ width: "500px" }} />
                                <col style={{ width: "255px" }} />
                                <col />
                            </colgroup>
                            <thead className="k-table-thead">
                                <tr className="k-table-row">
                                    <th scope="col" className="k-table-th k-header">
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">OrderID</span>
                                            </span>
                                        </span>
                                    </th>
                                    <th scope="col" className="k-table-th k-header">
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Ship Name</span>
                                            </span>
                                        </span>
                                    </th>
                                    <th scope="col" className="k-table-th k-header">
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Freight</span>
                                            </span>
                                        </span>
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <div className="k-grid-content k-auto-scrollable" style={{ height: "280px" }}>
                    <table className="k-table k-table-md k-grid-table" style={{ height: 'auto' }}>
                        <colgroup>
                            <col style={{ width: "225px" }} />
                            <col style={{ width: "500px" }} />
                            <col style={{ width: "255px" }} />
                            <col />
                        </colgroup>
                        <tbody className="k-table-tbody"></tbody>
                    </table>
                    <div className="k-grid-norecords">
                        <div className="k-grid-norecords-template">No records available.</div>
                    </div>
                    <div className="k-grid-content-expander" style={{ width: "982px" }}></div>
                </div>
            </div>
            <h4>Angular Grid</h4>
            <div className="k-grid k-grid-md">
                <div className="k-grid-aria-root">
                    <div className="k-grid-header" style={{ padding: "0px 16px 0px 0px" }}>
                        <colgroup>
                            <col style={{ width: "140px" }} />
                            <col style={{ width: "120px" }} />
                            <col style={{ width: "100px" }} />
                            <col style={{ width: "130px" }} />
                        </colgroup>
                        <table className="k-table k-table-md k-grid-header-table">
                            <thead className="k-table-thead">
                                <tr className="k-table-row">
                                    <th className="k-table-th k-header" rowSpan={1} colSpan={1}>CompanyName</th>
                                    <th className="k-table-th k-header" rowSpan={1} colSpan={1}>ContactName</th>
                                    <th className="k-table-th k-header" rowSpan={1} colSpan={1}>City</th>
                                    <th className="k-table-th k-header" rowSpan={1} colSpan={1}>ContactTitle</th>
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
                                    <col style={{ width: "140px" }} />
                                    <col style={{ width: "120px" }} />
                                    <col style={{ width: "100px" }} />
                                    <col style={{ width: "130px" }} />
                                </colgroup>
                                <tbody className="k-table-tbody">
                                    <tr className="k-grid-norecords">
                                        <td className="k-table-td" colSpan={4}>No records available. </td>
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
