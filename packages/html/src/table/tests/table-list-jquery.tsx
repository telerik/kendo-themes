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

            <span>Table list small</span>
            <span>Table list medium</span>
            <span>Table list large</span>

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
                                    <tr className="k-table-group-header">
                                        <td colSpan={3} className="k-table-th">
                                            Initial group
                                        </td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-table-scroller">
                        <ul className="k-table k-table-list">
                            <li className="k-table-row">
                                <span style={{ width: '50px' }} className="k-table-td">1</span>
                                <span style={{ width: "160px" }} className="k-table-td">Data 1.2</span>
                                <span className="k-table-td">Data 1.3</span>
                                <span className="k-table-td k-table-spacer-td"></span>
                            </li>
                            <li className="k-table-row k-table-alt-row">
                                <span style={{ width: '50px' }} className="k-table-td">2</span>
                                <span style={{ width: "160px" }} className="k-table-td">Data 2.2 (alt)</span>
                                <span className="k-table-td">Data 2.3</span>
                                <span className="k-table-td k-table-spacer-td"></span>
                            </li>
                            <li className="k-table-row k-first">
                                <span style={{ width: '50px' }} className="k-table-td">3</span>
                                <span style={{ width: "160px" }} className="k-table-td">Data 3.2</span>
                                <span className="k-table-td">Data 3.3</span>
                                <span className="k-table-td k-table-group-td"><span>Group</span></span>
                            </li>
                            <li className="k-table-row k-table-alt-row">
                                <span style={{ width: '50px' }} className="k-table-td">4</span>
                                <span style={{ width: "160px" }} className="k-table-td">Data 4.2 (alt)</span>
                                <span className="k-table-td">Data 4.3</span>
                                <span className="k-table-td k-table-spacer-td"></span>
                            </li>
                            <li className="k-table-row">
                                <span style={{ width: '50px' }} className="k-table-td">5</span>
                                <span style={{ width: "160px" }} className="k-table-td">Data 5.2</span>
                                <span className="k-table-td">Data 5.3</span>
                                <span className="k-table-td k-table-spacer-td"></span>
                            </li>
                            <li className="k-table-row k-table-alt-row">
                                <span style={{ width: '50px' }} className="k-table-td">6</span>
                                <span style={{ width: "160px" }} className="k-table-td">Data 6.2 (alt)</span>
                                <span className="k-table-td">Data 6.3</span>
                                <span className="k-table-td k-table-spacer-td"></span>
                            </li>
                        </ul>
                    </div>
                    <div className="k-table-footer">
                        <span className="k-table-td">30 records in total</span>
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
                                    <tr className="k-table-group-header">
                                        <td colSpan={3} className="k-table-th">
                                            Initial group
                                        </td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-table-scroller">
                        <ul className="k-table k-table-list">
                            <li className="k-table-row">
                                <span style={{ width: '50px' }} className="k-table-td">1</span>
                                <span style={{ width: "160px" }} className="k-table-td">Data 1.2</span>
                                <span className="k-table-td">Data 1.3</span>
                                <span className="k-table-td k-table-spacer-td"></span>
                            </li>
                            <li className="k-table-row k-table-alt-row">
                                <span style={{ width: '50px' }} className="k-table-td">2</span>
                                <span style={{ width: "160px" }} className="k-table-td">Data 2.2 (alt)</span>
                                <span className="k-table-td">Data 2.3</span>
                                <span className="k-table-td k-table-spacer-td"></span>
                            </li>
                            <li className="k-table-row k-first">
                                <span style={{ width: '50px' }} className="k-table-td">3</span>
                                <span style={{ width: "160px" }} className="k-table-td">Data 3.2</span>
                                <span className="k-table-td">Data 3.3</span>
                                <span className="k-table-td k-table-group-td"><span>Group</span></span>
                            </li>
                            <li className="k-table-row k-table-alt-row">
                                <span style={{ width: '50px' }} className="k-table-td">4</span>
                                <span style={{ width: "160px" }} className="k-table-td">Data 4.2 (alt)</span>
                                <span className="k-table-td">Data 4.3</span>
                                <span className="k-table-td k-table-spacer-td"></span>
                            </li>
                            <li className="k-table-row">
                                <span style={{ width: '50px' }} className="k-table-td">5</span>
                                <span style={{ width: "160px" }} className="k-table-td">Data 5.2</span>
                                <span className="k-table-td">Data 5.3</span>
                                <span className="k-table-td k-table-spacer-td"></span>
                            </li>
                            <li className="k-table-row k-table-alt-row">
                                <span style={{ width: '50px' }} className="k-table-td">6</span>
                                <span style={{ width: "160px" }} className="k-table-td">Data 6.2 (alt)</span>
                                <span className="k-table-td">Data 6.3</span>
                                <span className="k-table-td k-table-spacer-td"></span>
                            </li>
                        </ul>
                    </div>
                    <div className="k-table-footer">
                        <span className="k-table-td">30 records in total</span>
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
                                    <tr className="k-table-group-header">
                                        <td colSpan={3} className="k-table-th">
                                            Initial group
                                        </td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-table-scroller">
                        <ul className="k-table k-table-list">
                            <li className="k-table-row">
                                <span style={{ width: '50px' }} className="k-table-td">1</span>
                                <span style={{ width: "160px" }} className="k-table-td">Data 1.2</span>
                                <span className="k-table-td">Data 1.3</span>
                                <span className="k-table-td k-table-spacer-td"></span>
                            </li>
                            <li className="k-table-row k-table-alt-row">
                                <span style={{ width: '50px' }} className="k-table-td">2</span>
                                <span style={{ width: "160px" }} className="k-table-td">Data 2.2 (alt)</span>
                                <span className="k-table-td">Data 2.3</span>
                                <span className="k-table-td k-table-spacer-td"></span>
                            </li>
                            <li className="k-table-row k-first">
                                <span style={{ width: '50px' }} className="k-table-td">3</span>
                                <span style={{ width: "160px" }} className="k-table-td">Data 3.2</span>
                                <span className="k-table-td">Data 3.3</span>
                                <span className="k-table-td k-table-group-td"><span>Group</span></span>
                            </li>
                            <li className="k-table-row k-table-alt-row">
                                <span style={{ width: '50px' }} className="k-table-td">4</span>
                                <span style={{ width: "160px" }} className="k-table-td">Data 4.2 (alt)</span>
                                <span className="k-table-td">Data 4.3</span>
                                <span className="k-table-td k-table-spacer-td"></span>
                            </li>
                            <li className="k-table-row">
                                <span style={{ width: '50px' }} className="k-table-td">5</span>
                                <span style={{ width: "160px" }} className="k-table-td">Data 5.2</span>
                                <span className="k-table-td">Data 5.3</span>
                                <span className="k-table-td k-table-spacer-td"></span>
                            </li>
                            <li className="k-table-row k-table-alt-row">
                                <span style={{ width: '50px' }} className="k-table-td">6</span>
                                <span style={{ width: "160px" }} className="k-table-td">Data 6.2 (alt)</span>
                                <span className="k-table-td">Data 6.3</span>
                                <span className="k-table-td k-table-spacer-td"></span>
                            </li>
                        </ul>
                    </div>
                    <div className="k-table-footer">
                        <span className="k-table-td">30 records in total</span>
                    </div>
                </div>
            </section>

        </div>
    </>
);
