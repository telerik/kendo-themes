import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <span>Interaction States</span>

            <section>
                <div className="k-widget k-grid" style={{ height: "500px" }}>
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table style={{ width: "1180px" }}>
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
                                <thead>
                                    <tr>
                                        <th className="k-header k-grid-header-sticky" style={{ left: '0px', right: "240px" }}><a className="k-link"> </a></th>
                                        <th className="k-header"><a className="k-link">ID</a></th>
                                        <th className="k-header " ><a className="k-link">Name</a></th>
                                        <th className="k-header k-grid-header-sticky" style={{ left: "60px", right: "120px" }}><a className="k-link">Price</a></th>
                                        <th className="k-header k-grid-header-sticky" style={{ left: "180px", right: '0px' }}><a className="k-link">In stock</a></th>
                                        <th className="k-header"><a className="k-link">On order</a></th>
                                        <th className="k-header"><a className="k-link">Discontinued</a></th>
                                        <th className="k-header"><a className="k-link">Additional details</a></th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-container">
                        <div className="k-grid-content k-virtual-content">
                            <div style={{ position: "relative" }}>
                                <table className="k-grid-table" style={{ width: "1180px" }}>
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
                                    <tbody>
                                        <tr className="k-master-row">
                                            <td className="k-grid-content-sticky" style={{ left: '0px', right: "240px" }}><Icon name="unpin" /></td>
                                            <td>1</td>
                                            <td >Normal</td>
                                            <td className="k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$18.00</td>
                                            <td className="k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>39</td>
                                            <td>0</td>
                                            <td>false</td>
                                            <td>10 boxes x 20 bags</td>
                                        </tr>
                                        <tr className="k-master-row k-alt">
                                            <td className="k-grid-content-sticky k-state-selected" style={{ left: '0px', right: "240px" }}><Icon name="unpin" /></td>
                                            <td className="k-state-selected">2</td>
                                            <td >Drag Selection Alt</td>
                                            <td className="k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$19.00</td>
                                            <td className="k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>17</td>
                                            <td>40</td>
                                            <td>false</td>
                                            <td>24 - 12 oz bottles</td>
                                        </tr>
                                        <tr className="k-master-row">
                                            <td className="k-grid-content-sticky k-state-selected" style={{ left: '0px', right: "240px" }}><Icon name="unpin" /></td>
                                            <td className="k-state-selected">3</td>
                                            <td >Drag Selection</td>
                                            <td className="k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$10.00</td>
                                            <td className="k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>13</td>
                                            <td>70</td>
                                            <td>false</td>
                                            <td>12 - 550 ml bottles</td>
                                        </tr>
                                        <tr className="k-master-row k-alt k-state-selected">
                                            <td className="k-grid-content-sticky" style={{ left: '0px', right: "240px" }}><Icon name="unpin" /></td>
                                            <td>4</td>
                                            <td >Row Selection Alt</td>
                                            <td className="k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$22.00</td>
                                            <td className="k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>53</td>
                                            <td>0</td>
                                            <td>false</td>
                                            <td>48 - 6 oz jars</td>
                                        </tr>
                                        <tr className="k-master-row k-state-selected">
                                            <td className="k-grid-content-sticky" style={{ left: '0px', right: "240px" }}><Icon name="unpin" /></td>
                                            <td>5</td>
                                            <td >Row Selection</td>
                                            <td className="k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$21.35</td>
                                            <td className="k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>0</td>
                                            <td>0</td>
                                            <td>true</td>
                                            <td>36 boxes</td>
                                        </tr>
                                        <tr className="k-master-row k-alt k-state-hover">
                                            <td className="k-grid-content-sticky k-state-selected" style={{ left: '0px', right: "240px" }}><Icon name="unpin" /></td>
                                            <td className="k-state-selected">6</td>
                                            <td >Drag Selection Alt Hover</td>
                                            <td className="k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$25.00</td>
                                            <td className="k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>120</td>
                                            <td>0</td>
                                            <td>false</td>
                                            <td>12 - 8 oz jars</td>
                                        </tr>
                                        <tr className="k-master-row k-state-hover">
                                            <td className="k-grid-content-sticky k-state-selected" style={{ left: '0px', right: "240px" }}><Icon name="unpin" /></td>
                                            <td className="k-state-selected">7</td>
                                            <td >Drag Selection Hover</td>
                                            <td className="k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$30.00</td>
                                            <td className="k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>15</td>
                                            <td>0</td>
                                            <td>false</td>
                                            <td>12 - 1 lb pkgs.</td>
                                        </tr>
                                        <tr className="k-master-row k-alt k-state-hover">
                                            <td className="k-grid-content-sticky" style={{ left: '0px', right: "240px" }}><Icon name="unpin" /></td>
                                            <td>8</td>
                                            <td >Hover</td>
                                            <td className="k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$40.00</td>
                                            <td className="k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>6</td>
                                            <td>0</td>
                                            <td>false</td>
                                            <td>12 - 12 oz jars</td>
                                        </tr>
                                        <tr className="k-master-row">
                                            <td className="k-grid-content-sticky k-state-focused" style={{ left: '0px', right: "240px" }}><Icon name="unpin" /></td>
                                            <td>9</td>
                                            <td >Focus sticky cell</td>
                                            <td className="k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$97.00</td>
                                            <td className="k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>29</td>
                                            <td>0</td>
                                            <td>true</td>
                                            <td>18 - 500 g pkgs.</td>
                                        </tr>
                                        <tr className="k-master-row k-alt">
                                            <td className="k-grid-content-sticky" style={{ left: '0px', right: "240px" }}><Icon name="unpin" /></td>
                                            <td className="k-state-focused">10</td>
                                            <td >Focus normal cell</td>
                                            <td className="k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$31.00</td>
                                            <td className="k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>31</td>
                                            <td>0</td>
                                            <td>false</td>
                                            <td>12 - 200 ml jars</td>
                                        </tr>
                                        <tr className="k-master-row">
                                            <td className="k-grid-content-sticky" style={{ left: '0px', right: "240px" }}><Icon name="unpin" /></td>
                                            <td>11</td>
                                            <td >Queso Cabrales</td>
                                            <td className="k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$21.00</td>
                                            <td className="k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>22</td>
                                            <td>30</td>
                                            <td>false</td>
                                            <td>1 kg pkg.</td>
                                        </tr>
                                        <tr className="k-master-row k-alt">
                                            <td className="k-grid-content-sticky" style={{ left: '0px', right: "240px" }}><Icon name="unpin" /></td>
                                            <td>12</td>
                                            <td >Queso Manchego La Pastora</td>
                                            <td className="k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$38.00</td>
                                            <td className="k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>86</td>
                                            <td>0</td>
                                            <td>false</td>
                                            <td>10 - 500 g pkgs.</td>
                                        </tr>
                                        <tr className="k-master-row">
                                            <td className="k-grid-content-sticky" style={{ left: '0px', right: "240px" }}><Icon name="unpin" /></td>
                                            <td>13</td>
                                            <td >Konbu</td>
                                            <td className="k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$6.00</td>
                                            <td className="k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>24</td>
                                            <td>0</td>
                                            <td>false</td>
                                            <td>2 kg box</td>
                                        </tr>
                                        <tr className="k-master-row k-alt">
                                            <td className="k-grid-content-sticky" style={{ left: '0px', right: "240px" }}><Icon name="unpin" /></td>
                                            <td>14</td>
                                            <td >Tofu</td>
                                            <td className="k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$23.25</td>
                                            <td className="k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>35</td>
                                            <td>0</td>
                                            <td>false</td>
                                            <td>40 - 100 g pkgs.</td>
                                        </tr>
                                        <tr className="k-master-row">
                                            <td className="k-grid-content-sticky" style={{ left: '0px', right: "240px" }}><Icon name="unpin" /></td>
                                            <td>15</td>
                                            <td >Genen Shouyu</td>
                                            <td className="k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$15.50</td>
                                            <td className="k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>39</td>
                                            <td>0</td>
                                            <td>false</td>
                                            <td>24 - 250 ml bottles</td>
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
                            <table style={{ width: "1180px" }}>
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
                                <tfoot>
                                    <tr>
                                        <td className="k-grid-footer-sticky" style={{ left: '0px', right: "240px" }}></td>
                                        <td></td>
                                        <td ></td>
                                        <td className="k-grid-footer-sticky" style={{ left: "60px", right: "120px" }}>avg: X</td>
                                        <td className="k-grid-footer-sticky" style={{ left: "180px", right: '0px' }}>total: Y</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
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
