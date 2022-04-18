import React from 'react';
import ReactDOM from 'react-dom/client';
import { Checkbox } from '../../checkbox';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <span>Basic Grid</span>
            <section>
                <div className="k-widget k-grid" style={{ height: "500px" }}>
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table>
                                <colgroup>
                                    <col width="40px" />
                                    <col width="300px" />
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th colSpan={1} rowSpan={1} className="k-header"><span className="k-link">ID</span></th>
                                        <th colSpan={1} rowSpan={1} className="k-header"><span className="k-link">Name</span></th>
                                        <th colSpan={1} rowSpan={1} className="k-header"><span className="k-link">CategoryName</span></th>
                                        <th colSpan={1} rowSpan={1} className="k-header"><span className="k-link">Price</span></th>
                                        <th colSpan={1} rowSpan={1} className="k-header"><span className="k-link">In stock</span></th>
                                        <th colSpan={1} rowSpan={1} className="k-header"><span className="k-link">Discontinued</span></th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-container">
                        <div className="k-grid-content k-virtual-content">
                            <div style={{ position: "relative" }}>
                                <table className="k-grid-table">
                                    <colgroup>
                                        <col width="40px"/>
                                        <col width="300px" />
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody>
                                        <tr className="k-master-row">
                                            <td colSpan={1}>1</td>
                                            <td colSpan={1}>Chai</td>
                                            <td colSpan={1}>Beverages</td>
                                            <td colSpan={1}>18</td>
                                            <td colSpan={1}>39</td>
                                            <td><Checkbox /></td>
                                        </tr>
                                        <tr className="k-master-row k-alt">
                                            <td colSpan={1}>2</td>
                                            <td colSpan={1}>Chang</td>
                                            <td colSpan={1}>Beverages</td>
                                            <td colSpan={1}>19</td>
                                            <td colSpan={1}>17</td>
                                            <td><Checkbox /></td>
                                        </tr>
                                        <tr className="k-master-row">
                                            <td colSpan={1}>3</td>
                                            <td colSpan={1}>Aniseed Syrup</td>
                                            <td colSpan={1}>Condiments</td>
                                            <td colSpan={1}>10</td>
                                            <td colSpan={1}>13</td>
                                            <td><Checkbox /></td>
                                        </tr>
                                        <tr className="k-master-row k-alt">
                                            <td colSpan={1}>4</td>
                                            <td colSpan={1}>Chef Anton&apos;s Cajun Seasoning</td>
                                            <td colSpan={1}>Condiments</td>
                                            <td colSpan={1}>22</td>
                                            <td colSpan={1}>53</td>
                                            <td><Checkbox /></td>
                                        </tr>
                                        <tr className="k-master-row">
                                            <td colSpan={1}>5</td>
                                            <td colSpan={1}>Chef Anton&apos;s Gumbo Mix</td>
                                            <td colSpan={1}>Condiments</td>
                                            <td colSpan={1}>21.35</td>
                                            <td colSpan={1}>0</td>
                                            <td><Checkbox /></td>
                                        </tr>
                                        <tr className="k-master-row k-alt">
                                            <td colSpan={1}>6</td>
                                            <td colSpan={1}>Grandma&apos;s Boysenberry Spread</td>
                                            <td colSpan={1}>Condiments</td>
                                            <td colSpan={1}>25</td>
                                            <td colSpan={1}>120</td>
                                            <td><Checkbox /></td>
                                        </tr>
                                        <tr className="k-master-row">
                                            <td colSpan={1}>7</td>
                                            <td colSpan={1}>Uncle Bob&apos;s Organic Dried Pears</td>
                                            <td colSpan={1}>Produce</td>
                                            <td colSpan={1}>30</td>
                                            <td colSpan={1}>15</td>
                                            <td><Checkbox /></td>
                                        </tr>
                                        <tr className="k-master-row k-alt">
                                            <td colSpan={1}>8</td>
                                            <td colSpan={1}>Northwoods Cranberry Sauce</td>
                                            <td colSpan={1}>Condiments</td>
                                            <td colSpan={1}>40</td>
                                            <td colSpan={1}>6</td>
                                            <td><Checkbox /></td>
                                        </tr>
                                        <tr className="k-master-row">
                                            <td colSpan={1}>9</td>
                                            <td colSpan={1}>Mishi Kobe Niku</td>
                                            <td colSpan={1}>Meat/Poultry</td>
                                            <td colSpan={1}>97</td>
                                            <td colSpan={1}>29</td>
                                            <td><Checkbox /></td>
                                        </tr>
                                        <tr className="k-master-row k-alt">
                                            <td colSpan={1}>10</td>
                                            <td colSpan={1}>Ikura</td>
                                            <td colSpan={1}>Seafood</td>
                                            <td colSpan={1}>31</td>
                                            <td colSpan={1}>31</td>
                                            <td><Checkbox /></td>
                                        </tr>
                                        <tr className="k-master-row">
                                            <td colSpan={1}>11</td>
                                            <td colSpan={1}>Queso Cabrales</td>
                                            <td colSpan={1}>Dairy Products</td>
                                            <td colSpan={1}>21</td>
                                            <td colSpan={1}>22</td>
                                            <td><Checkbox /></td>
                                        </tr>
                                        <tr className="k-master-row k-alt">
                                            <td colSpan={1}>12</td>
                                            <td colSpan={1}>Queso Manchego La Pastora</td>
                                            <td colSpan={1}>Dairy Products</td>
                                            <td colSpan={1}>38</td>
                                            <td colSpan={1}>86</td>
                                            <td><Checkbox /></td>
                                        </tr>
                                        <tr className="k-master-row">
                                            <td colSpan={1}>13</td>
                                            <td colSpan={1}>Konbu</td>
                                            <td colSpan={1}>Seafood</td>
                                            <td colSpan={1}>6</td>
                                            <td colSpan={1}>24</td>
                                            <td><Checkbox /></td>
                                        </tr>
                                        <tr className="k-master-row k-alt">
                                            <td colSpan={1}>14</td>
                                            <td colSpan={1}>Tofu</td>
                                            <td colSpan={1}>Produce</td>
                                            <td colSpan={1}>23.25</td>
                                            <td colSpan={1}>35</td>
                                            <td><Checkbox /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="k-height-container">
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
);
