import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    #test-area {
        max-width: 1200px;
    }
    .k-data-table {
        width: 372px;
    }
    .k-table-scroller {
        max-height: 200px;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>Data table small</span>
            <span>Data table medium</span>
            <span>Data table large</span>

            <section>
                <div className="k-data-table k-table-sm">
                    <div className="k-table-header">
                        <div className="k-table-header-wrap">
                            <table className="k-table">
                                <colgroup>
                                    <col style={{ width: '50px' }} />
                                    <col style={{ width: "160px" }} />
                                    <col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th">ID</th>
                                        <th className="k-table-th">Name</th>
                                        <th className="k-table-th">Job Title</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-table-scroller">
                        <table className="k-table">
                            <colgroup>
                                <col style={{ width: '50px' }} />
                                <col style={{ width: "160px" }} />
                                <col />
                            </colgroup>
                            <tbody className="k-table-tbody">
                                <tr className="k-table-group-row">
                                    <th colSpan={3} className="k-table-th">
                                        Group row
                                    </th>
                                </tr>
                                <tr className="k-table-row">
                                    <td className="k-table-td">1</td>
                                    <td className="k-table-td">Data 1.2</td>
                                    <td className="k-table-td">Data 1.3</td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row">
                                    <td className="k-table-td">2</td>
                                    <td className="k-table-td">Data 2.2 (alt)</td>
                                    <td className="k-table-td">Data 2.3</td>
                                </tr>
                                <tr className="k-table-row">
                                    <td className="k-table-td">3</td>
                                    <td className="k-table-td">Data 3.2</td>
                                    <td className="k-table-td">Data 3.3</td>
                                </tr>
                                <tr className="k-table-group-row">
                                    <th colSpan={3} className="k-table-th">
                                        Group row
                                    </th>
                                </tr>
                                <tr className="k-table-row">
                                    <td className="k-table-td">4</td>
                                    <td className="k-table-td">Data 4.2</td>
                                    <td className="k-table-td">Data 4.3</td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row">
                                    <td className="k-table-td">5</td>
                                    <td className="k-table-td">Data 5.2 (alt)</td>
                                    <td className="k-table-td">Data 5.3</td>
                                </tr>
                                <tr className="k-table-row">
                                    <td className="k-table-td">6</td>
                                    <td className="k-table-td">Data 6.2</td>
                                    <td className="k-table-td">Data 6.3</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="k-table-footer">
                        <table className="k-table">
                            <tfoot className="k-table-tfoot">
                                <tr className="k-table-row">
                                    <td className="k-table-td">30 records in total</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-data-table k-table-md">
                    <div className="k-table-header">
                        <div className="k-table-header-wrap">
                            <table className="k-table">
                                <colgroup>
                                    <col style={{ width: '50px' }} />
                                    <col style={{ width: "160px" }} />
                                    <col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th">ID</th>
                                        <th className="k-table-th">Name</th>
                                        <th className="k-table-th">Job Title</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-table-scroller">
                        <table className="k-table">
                            <colgroup>
                                <col style={{ width: '50px' }} />
                                <col style={{ width: "160px" }} />
                                <col />
                            </colgroup>
                            <tbody className="k-table-tbody">
                                <tr className="k-table-group-row">
                                    <th colSpan={3} className="k-table-th">
                                        Group row
                                    </th>
                                </tr>
                                <tr className="k-table-row">
                                    <td className="k-table-td">1</td>
                                    <td className="k-table-td">Data 1.2</td>
                                    <td className="k-table-td">Data 1.3</td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row">
                                    <td className="k-table-td">2</td>
                                    <td className="k-table-td">Data 2.2 (alt)</td>
                                    <td className="k-table-td">Data 2.3</td>
                                </tr>
                                <tr className="k-table-row">
                                    <td className="k-table-td">3</td>
                                    <td className="k-table-td">Data 3.2</td>
                                    <td className="k-table-td">Data 3.3</td>
                                </tr>
                                <tr className="k-table-group-row">
                                    <th colSpan={3} className="k-table-th">
                                        Group row
                                    </th>
                                </tr>
                                <tr className="k-table-row">
                                    <td className="k-table-td">4</td>
                                    <td className="k-table-td">Data 4.2</td>
                                    <td className="k-table-td">Data 4.3</td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row">
                                    <td className="k-table-td">5</td>
                                    <td className="k-table-td">Data 5.2 (alt)</td>
                                    <td className="k-table-td">Data 5.3</td>
                                </tr>
                                <tr className="k-table-row">
                                    <td className="k-table-td">6</td>
                                    <td className="k-table-td">Data 6.2</td>
                                    <td className="k-table-td">Data 6.3</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="k-table-footer">
                        <table className="k-table">
                            <tfoot className="k-table-tfoot">
                                <tr className="k-table-row">
                                    <td className="k-table-td">30 records in total</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-data-table k-table-lg">
                    <div className="k-table-header">
                        <div className="k-table-header-wrap">
                            <table className="k-table">
                                <colgroup>
                                    <col style={{ width: '50px' }} />
                                    <col style={{ width: "160px" }} />
                                    <col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th">ID</th>
                                        <th className="k-table-th">Name</th>
                                        <th className="k-table-th">Job Title</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-table-scroller">
                        <table className="k-table">
                            <colgroup>
                                <col style={{ width: '50px' }} />
                                <col style={{ width: "160px" }} />
                                <col />
                            </colgroup>
                            <tbody className="k-table-tbody">
                                <tr className="k-table-group-row">
                                    <th colSpan={3} className="k-table-th">
                                        Group row
                                    </th>
                                </tr>
                                <tr className="k-table-row">
                                    <td className="k-table-td">1</td>
                                    <td className="k-table-td">Data 1.2</td>
                                    <td className="k-table-td">Data 1.3</td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row">
                                    <td className="k-table-td">2</td>
                                    <td className="k-table-td">Data 2.2 (alt)</td>
                                    <td className="k-table-td">Data 2.3</td>
                                </tr>
                                <tr className="k-table-row">
                                    <td className="k-table-td">3</td>
                                    <td className="k-table-td">Data 3.2</td>
                                    <td className="k-table-td">Data 3.3</td>
                                </tr>
                                <tr className="k-table-group-row">
                                    <th colSpan={3} className="k-table-th">
                                        Group row
                                    </th>
                                </tr>
                                <tr className="k-table-row">
                                    <td className="k-table-td">4</td>
                                    <td className="k-table-td">Data 4.2</td>
                                    <td className="k-table-td">Data 4.3</td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row">
                                    <td className="k-table-td">5</td>
                                    <td className="k-table-td">Data 5.2 (alt)</td>
                                    <td className="k-table-td">Data 5.3</td>
                                </tr>
                                <tr className="k-table-row">
                                    <td className="k-table-td">6</td>
                                    <td className="k-table-td">Data 6.2</td>
                                    <td className="k-table-td">Data 6.3</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="k-table-footer">
                        <table className="k-table">
                            <tfoot className="k-table-tfoot">
                                <tr className="k-table-row">
                                    <td className="k-table-td">30 records in total</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </section>

        </div>
    </>
);
