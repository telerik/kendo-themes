import { Pager } from '../../pager';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>jQuery grid</span>
            <span>Angular grid</span>

            <section>
                <div className="k-grid k-grid-md k-grid-no-scrollbar">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-md k-grid-header-table">
                                <colgroup>
                                    <col style={{ width: "100px" }} />
                                    <col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">100px</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">no width</span>
                                                </span>
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-content">
                        <table className="k-table k-table-md k-grid-table">
                            <colgroup>
                                <col style={{ width: "100px" }} />
                                <col />
                            </colgroup>
                            <tbody className="k-table-tbody">
                                <tr className="k-table-row">
                                    <td className="k-table-td">1</td>
                                    <td className="k-table-td">Row</td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-alt">
                                    <td className="k-table-td">2</td>
                                    <td className="k-table-td">Alt row</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <Pager className="k-grid-pager" focus />
                </div>
            </section>

            <section>
                <div className="k-grid k-grid-md k-grid-no-scrollbar">
                    <div className="k-grid-aria-root">
                        {/* add padding-left or -right for scrollbar width */}
                        <div className="k-grid-header">
                            <div className="k-grid-header-wrap">
                                <table className="k-table k-table-md k-grid-header-table">
                                    <colgroup>
                                        <col style={{ width: "100px" }} />
                                        <col />
                                    </colgroup>
                                    <thead className="k-table-thead">
                                        <tr className="k-table-row">
                                            <th className="k-table-th k-header">
                                                <span className="k-cell-inner">
                                                    <span className="k-link">
                                                        <span className="k-column-title">100px</span>
                                                    </span>
                                                </span>
                                            </th>
                                            <th className="k-table-th k-header">
                                                <span className="k-cell-inner">
                                                    <span className="k-link">
                                                        <span className="k-column-title">no width</span>
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
                                <div>
                                    <table className="k-table k-table-md k-grid-table">
                                        <colgroup>
                                            <col style={{ width: "100px" }} />
                                            <col />
                                        </colgroup>
                                        <tbody className="k-table-tbody">
                                            <tr className="k-table-row">
                                                <td className="k-table-td">1</td>
                                                <td className="k-table-td">Row</td>
                                            </tr>
                                            <tr className="k-table-row k-table-alt-row k-alt">
                                                <td className="k-table-td">2</td>
                                                <td className="k-table-td">Alt row</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="k-height-container">
                                    {/* set height to scroll height (virtual scrolling) */}
                                    <div style={{ height: '0px' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Pager className="k-grid-pager" focus />
                </div>
            </section>


            <span>jQuery grid pager top</span>
            <span>Angular grid pager top</span>

            <section>
                <div className="k-grid k-grid-md k-grid-no-scrollbar">
                    <Pager className="k-grid-pager k-grid-pager-top" />
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-md k-grid-header-table">
                                <colgroup>
                                    <col style={{ width: "100px" }} />
                                    <col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">100px</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">no width</span>
                                                </span>
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-content">
                        <table className="k-table k-table-md k-grid-table">
                            <colgroup>
                                <col style={{ width: "100px" }} />
                                <col />
                            </colgroup>
                            <tbody className="k-table-tbody">
                                <tr className="k-table-row">
                                    <td className="k-table-td">1</td>
                                    <td className="k-table-td">Row</td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-alt">
                                    <td className="k-table-td">2</td>
                                    <td className="k-table-td">Alt row</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-grid k-grid-md k-grid-no-scrollbar">
                    <Pager className="k-grid-pager k-grid-pager-top" />
                    <div className="k-grid-aria-root">
                        {/* add padding-left or -right for scrollbar width */}
                        <div className="k-grid-header">
                            <div className="k-grid-header-wrap">
                                <table className="k-table k-table-md k-grid-header-table">
                                    <colgroup>
                                        <col style={{ width: "100px" }} />
                                        <col />
                                    </colgroup>
                                    <thead className="k-table-thead">
                                        <tr className="k-table-row">
                                            <th className="k-table-th k-header">
                                                <span className="k-cell-inner">
                                                    <span className="k-link">
                                                        <span className="k-column-title">100px</span>
                                                    </span>
                                                </span>
                                            </th>
                                            <th className="k-table-th k-header">
                                                <span className="k-cell-inner">
                                                    <span className="k-link">
                                                        <span className="k-column-title">no width</span>
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
                                <div>
                                    <table className="k-table k-table-md k-grid-table">
                                        <colgroup>
                                            <col style={{ width: "100px" }} />
                                            <col />
                                        </colgroup>
                                        <tbody className="k-table-tbody">
                                            <tr className="k-table-row">
                                                <td className="k-table-td">1</td>
                                                <td className="k-table-td">Row</td>
                                            </tr>
                                            <tr className="k-table-row k-table-alt-row k-alt">
                                                <td className="k-table-td">2</td>
                                                <td className="k-table-td">Alt row</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="k-height-container">
                                    {/* set height to scroll height (virtual scrolling) */}
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
