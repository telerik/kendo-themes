import { Icon } from '../../icon';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <span>Interaction States</span>

            <section>
                <div className="k-grid k-grid-md" style={{ height: "500px" }}>
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-md k-grid-header-table" style={{ width: "1180px" }}>
                                <colgroup>
                                    <col width="60px" />
                                    <col width="90px" />
                                    <col width="300px" />
                                    <col width="120px" />
                                    <col width="120px" />
                                    <col width="120px" />
                                    <col width="120px" />
                                    <col width="250px" />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th k-header k-grid-header-sticky" style={{ left: '0px', right: "240px" }}></th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">ID</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Name</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header k-grid-header-sticky" style={{ left: "60px", right: "120px" }}>
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Price</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header k-grid-header-sticky" style={{ left: "180px", right: '0px' }}>
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">In stock</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">On order</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Discontinued</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Additional details</span>
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
                            <div style={{ position: "relative" }}>
                                <table className="k-table k-table-md k-grid-table" style={{ width: "1180px" }}>
                                    <colgroup>
                                        <col width="60px" />
                                        <col width="90px" />
                                        <col width="300px" />
                                        <col width="120px" />
                                        <col width="120px" />
                                        <col width="120px" />
                                        <col width="120px" />
                                        <col width="250px" />
                                    </colgroup>
                                    <tbody className="k-table-tbody">
                                        <tr className="k-table-row k-master-row">
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: '0px', right: "240px" }}><Icon icon="unpin" /></td>
                                            <td className="k-table-td">1</td>
                                            <td className="k-table-td">Normal</td>
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$18.00</td>
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>39</td>
                                            <td className="k-table-td">0</td>
                                            <td className="k-table-td">false</td>
                                            <td className="k-table-td">10 boxes x 20 bags</td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-master-row k-alt">
                                            <td className="k-table-td k-grid-content-sticky k-selected" style={{ left: '0px', right: "240px" }}><Icon icon="unpin" /></td>
                                            <td className="k-table-td k-selected">2</td>
                                            <td className="k-table-td">Drag Selection Alt</td>
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$19.00</td>
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>17</td>
                                            <td className="k-table-td">40</td>
                                            <td className="k-table-td">false</td>
                                            <td className="k-table-td">24 - 12 oz bottles</td>
                                        </tr>
                                        <tr className="k-table-row k-master-row">
                                            <td className="k-table-td k-grid-content-sticky k-selected" style={{ left: '0px', right: "240px" }}><Icon icon="unpin" /></td>
                                            <td className="k-table-td k-selected">3</td>
                                            <td className="k-table-td">Drag Selection</td>
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$10.00</td>
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>13</td>
                                            <td className="k-table-td">70</td>
                                            <td className="k-table-td">false</td>
                                            <td className="k-table-td">12 - 550 ml bottles</td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-master-row k-alt k-selected">
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: '0px', right: "240px" }}><Icon icon="unpin" /></td>
                                            <td className="k-table-td">4</td>
                                            <td className="k-table-td">Row Selection Alt</td>
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$22.00</td>
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>53</td>
                                            <td className="k-table-td">0</td>
                                            <td className="k-table-td">false</td>
                                            <td className="k-table-td">48 - 6 oz jars</td>
                                        </tr>
                                        <tr className="k-table-row k-master-row k-selected">
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: '0px', right: "240px" }}><Icon icon="unpin" /></td>
                                            <td className="k-table-td">5</td>
                                            <td className="k-table-td">Row Selection</td>
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$21.35</td>
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>0</td>
                                            <td className="k-table-td">0</td>
                                            <td className="k-table-td">true</td>
                                            <td className="k-table-td">36 boxes</td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-master-row k-alt k-hover">
                                            <td className="k-table-td k-grid-content-sticky k-selected" style={{ left: '0px', right: "240px" }}><Icon icon="unpin" /></td>
                                            <td className="k-table-td k-selected">6</td>
                                            <td className="k-table-td">Drag Selection Alt Hover</td>
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$25.00</td>
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>120</td>
                                            <td className="k-table-td">0</td>
                                            <td className="k-table-td">false</td>
                                            <td className="k-table-td">12 - 8 oz jars</td>
                                        </tr>
                                        <tr className="k-table-row k-master-row k-hover">
                                            <td className="k-table-td k-grid-content-sticky k-selected" style={{ left: '0px', right: "240px" }}><Icon icon="unpin" /></td>
                                            <td className="k-table-td k-selected">7</td>
                                            <td className="k-table-td">Drag Selection Hover</td>
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$30.00</td>
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>15</td>
                                            <td className="k-table-td">0</td>
                                            <td className="k-table-td">false</td>
                                            <td className="k-table-td">12 - 1 lb pkgs.</td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-master-row k-alt k-hover">
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: '0px', right: "240px" }}><Icon icon="unpin" /></td>
                                            <td className="k-table-td">8</td>
                                            <td className="k-table-td">Hover</td>
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$40.00</td>
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>6</td>
                                            <td className="k-table-td">0</td>
                                            <td className="k-table-td">false</td>
                                            <td className="k-table-td">12 - 12 oz jars</td>
                                        </tr>
                                        <tr className="k-table-row k-master-row">
                                            <td className="k-table-td k-grid-content-sticky k-focus" style={{ left: '0px', right: "240px" }}><Icon icon="unpin" /></td>
                                            <td className="k-table-td">9</td>
                                            <td className="k-table-td">Focus sticky cell</td>
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$97.00</td>
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>29</td>
                                            <td className="k-table-td">0</td>
                                            <td className="k-table-td">true</td>
                                            <td className="k-table-td">18 - 500 g pkgs.</td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-master-row k-alt">
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: '0px', right: "240px" }}><Icon icon="unpin" /></td>
                                            <td className="k-table-td k-focus">10</td>
                                            <td className="k-table-td">Focus normal cell</td>
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$31.00</td>
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>31</td>
                                            <td className="k-table-td">0</td>
                                            <td className="k-table-td">false</td>
                                            <td className="k-table-td">12 - 200 ml jars</td>
                                        </tr>
                                        <tr className="k-table-row k-master-row">
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: '0px', right: "240px" }}><Icon icon="unpin" /></td>
                                            <td className="k-table-td">11</td>
                                            <td className="k-table-td">Queso Cabrales</td>
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$21.00</td>
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>22</td>
                                            <td className="k-table-td">30</td>
                                            <td className="k-table-td">false</td>
                                            <td className="k-table-td">1 kg pkg.</td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-master-row k-alt">
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: '0px', right: "240px" }}><Icon icon="unpin" /></td>
                                            <td className="k-table-td">12</td>
                                            <td className="k-table-td">Queso Manchego La Pastora</td>
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$38.00</td>
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>86</td>
                                            <td className="k-table-td">0</td>
                                            <td className="k-table-td">false</td>
                                            <td className="k-table-td">10 - 500 g pkgs.</td>
                                        </tr>
                                        <tr className="k-table-row k-master-row">
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: '0px', right: "240px" }}><Icon icon="unpin" /></td>
                                            <td className="k-table-td">13</td>
                                            <td className="k-table-td">Konbu</td>
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$6.00</td>
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>24</td>
                                            <td className="k-table-td">0</td>
                                            <td className="k-table-td">false</td>
                                            <td className="k-table-td">2 kg box</td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-master-row k-alt">
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: '0px', right: "240px" }}><Icon icon="unpin" /></td>
                                            <td className="k-table-td">14</td>
                                            <td className="k-table-td">Tofu</td>
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$23.25</td>
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>35</td>
                                            <td className="k-table-td">0</td>
                                            <td className="k-table-td">false</td>
                                            <td className="k-table-td">40 - 100 g pkgs.</td>
                                        </tr>
                                        <tr className="k-table-row k-master-row">
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: '0px', right: "240px" }}><Icon icon="unpin" /></td>
                                            <td className="k-table-td">15</td>
                                            <td className="k-table-td">Genen Shouyu</td>
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$15.50</td>
                                            <td className="k-table-td k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>39</td>
                                            <td className="k-table-td">0</td>
                                            <td className="k-table-td">false</td>
                                            <td className="k-table-td">24 - 250 ml bottles</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="k-height-container">
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="k-grid-footer">
                        <div className="k-grid-footer-wrap">
                            <table className="k-table k-table-md k-grid-footer-table" style={{ width: "1180px" }}>
                                <colgroup>
                                    <col width="60px" />
                                    <col width="90px" />
                                    <col width="300px" />
                                    <col width="120px" />
                                    <col width="120px" />
                                    <col width="120px" />
                                    <col width="120px" />
                                    <col width="250px" />
                                </colgroup>
                                <tfoot className="k-table-tfoot">
                                    <tr className="k-table-row">
                                        <td className="k-table-td k-grid-footer-sticky" style={{ left: '0px', right: "240px" }}></td>
                                        <td className="k-table-td"></td>
                                        <td className="k-table-td"></td>
                                        <td className="k-table-td k-grid-footer-sticky" style={{ left: "60px", right: "120px" }}>avg: X</td>
                                        <td className="k-table-td k-grid-footer-sticky" style={{ left: "180px", right: '0px' }}>total: Y</td>
                                        <td className="k-table-td"></td>
                                        <td className="k-table-td"></td>
                                        <td className="k-table-td"></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
);
