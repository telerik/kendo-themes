import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Native table</span>
            <span></span>

            <section>
                <table className="k-table k-table-md">
                    <colgroup>
                        <col style={{ width: '50px' }} />
                        <col />
                        <col />
                    </colgroup>
                    <thead className="k-table-thead">
                        <tr className="k-table-row">
                            <th className="k-table-th">ID</th>
                            <th className="k-table-th">Name</th>
                            <th className="k-table-th">Job Title</th>
                        </tr>
                    </thead>
                    <tbody className="k-table-tbody">
                        <tr className="k-table-row">
                            <td className="k-table-td">1</td>
                            <td className="k-table-td">Normal</td>
                            <td className="k-table-td">Data 1.3</td>
                        </tr>
                        <tr className="k-table-row k-table-alt-row">
                            <td className="k-table-td">2</td>
                            <td className="k-table-td">Normal (alt)</td>
                            <td className="k-table-td">Data 2.3</td>
                        </tr>
                        <tr className="k-table-row k-hover">
                            <td className="k-table-td">3</td>
                            <td className="k-table-td">Hover</td>
                            <td className="k-table-td">Data 3.3</td>
                        </tr>
                        <tr className="k-table-row k-hover k-table-alt-row">
                            <td className="k-table-td">4</td>
                            <td className="k-table-td">Hover (alt)</td>
                            <td className="k-table-td">Data 4.3</td>
                        </tr>
                        <tr className="k-table-row k-focus">
                            <td className="k-table-td">5</td>
                            <td className="k-table-td">Focus (alt)</td>
                            <td className="k-table-td">Data 5.3</td>
                        </tr>
                        <tr className="k-table-row k-focus k-table-alt-row">
                            <td className="k-table-td">6</td>
                            <td className="k-table-td">Focus (even)</td>
                            <td className="k-table-td">Data 6.3</td>
                        </tr>
                        <tr className="k-table-row k-selected">
                            <td className="k-table-td">7</td>
                            <td className="k-table-td">Selected</td>
                            <td className="k-table-td">Data 7.3</td>
                        </tr>
                        <tr className="k-table-row k-selected k-table-alt-row">
                            <td className="k-table-td">8</td>
                            <td className="k-table-td">Selected (alt)</td>
                            <td className="k-table-td">Data 8.3</td>
                        </tr>
                        <tr className="k-table-row k-focus k-selected">
                            <td className="k-table-td">9</td>
                            <td className="k-table-td">Focus selected</td>
                            <td className="k-table-td">Data 9.3</td>
                        </tr>
                        <tr className="k-table-row k-focus k-selected k-table-alt-row">
                            <td className="k-table-td">10</td>
                            <td className="k-table-td">Focus selected (alt)</td>
                            <td className="k-table-td">Data 10.3</td>
                        </tr>
                    </tbody>
                </table>
            </section>

        </div>
    </>
);
