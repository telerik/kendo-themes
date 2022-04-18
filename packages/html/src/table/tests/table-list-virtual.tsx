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
        height: 200px;
    }
    .k-virtual-table .k-table-row {
        position: relative;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>Table list virtual</span>

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
                    <div className="k-table-body k-table-scroller">
                        <ul className="k-table k-table-list k-virtual-table">
                            <li className="k-table-row">
                                <span style={{ width: '50px' }} className="k-table-td">1</span>
                                <span style={{ width: "160px" }} className="k-table-td">Data 1.2</span>
                                <span className="k-table-td">Data 1.3</span>
                            </li>
                            <li className="k-table-row k-table-alt-row">
                                <span style={{ width: '50px' }} className="k-table-td">2</span>
                                <span style={{ width: "160px" }} className="k-table-td">Data 2.2 (alt)</span>
                                <span className="k-table-td">Data 2.3</span>
                            </li>
                            <li className="k-table-row">
                                <span style={{ width: '50px' }} className="k-table-td">3</span>
                                <span style={{ width: "160px" }} className="k-table-td">Data 3.2</span>
                                <span className="k-table-td">Data 3.3</span>
                            </li>
                            <li className="k-table-row">
                                <span style={{ width: '50px' }} className="k-table-td">4</span>
                                <span style={{ width: "160px" }} className="k-table-td">Data 4.2</span>
                                <span className="k-table-td">Data 4.3</span>
                            </li>
                            <li className="k-table-row k-table-alt-row">
                                <span style={{ width: '50px' }} className="k-table-td">5</span>
                                <span style={{ width: "160px" }} className="k-table-td">Data 5.2 (alt)</span>
                                <span className="k-table-td">Data 5.3</span>
                            </li>
                            <li className="k-table-row">
                                <span style={{ width: '50px' }} className="k-table-td">6</span>
                                <span style={{ width: "160px" }} className="k-table-td">Data 6.2</span>
                                <span className="k-table-td">Data 6.3</span>
                            </li>
                            <li className="k-table-row">
                                <span style={{ width: '50px' }} className="k-table-td">7</span>
                                <span style={{ width: "160px" }} className="k-table-td">Data 7.2</span>
                                <span className="k-table-td">Data 7.3</span>
                            </li>
                            <li className="k-table-row">
                                <span style={{ width: '50px' }} className="k-table-td">8</span>
                                <span style={{ width: "160px" }} className="k-table-td">Data 8.2</span>
                                <span className="k-table-td">Data 8.3</span>
                            </li>
                            <li className="k-table-row">
                                <span style={{ width: '50px' }} className="k-table-td">9</span>
                                <span style={{ width: "160px" }} className="k-table-td">Data 9.2</span>
                                <span className="k-table-td">Data 9.3</span>
                            </li>
                            <li className="k-table-row">
                                <span style={{ width: '50px' }} className="k-table-td">10</span>
                                <span style={{ width: "160px" }} className="k-table-td">Data 10.2</span>
                                <span className="k-table-td">Data 10.3</span>
                            </li>
                            <li className="k-table-row">
                                <span style={{ width: '50px' }} className="k-table-td">11</span>
                                <span style={{ width: "160px" }} className="k-table-td">Data 11.2</span>
                                <span className="k-table-td">Data 11.3</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </div>
    </>
);
