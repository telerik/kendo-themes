import { Checkbox } from '../../checkbox';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <span>Basic Grid</span>
            <section>
                <div className="k-grid k-grid-md" style={{ height: "500px" }}>
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-md k-grid-header-table">
                                <colgroup>
                                    <col width="40px" />
                                    <col width="300px" />
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th colSpan={1} rowSpan={1} className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">ID</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th colSpan={1} rowSpan={1} className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Name</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th colSpan={1} rowSpan={1} className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">CategoryName</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th colSpan={1} rowSpan={1} className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Price</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th colSpan={1} rowSpan={1} className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">In stock</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th colSpan={1} rowSpan={1} className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Discontinued</span>
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
                                <table className="k-table k-table-md k-grid-table">
                                    <colgroup>
                                        <col width="40px"/>
                                        <col width="300px" />
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody className="k-table-tbody">
                                        <tr className="k-table-row k-master-row">
                                            <td className="k-table-td" colSpan={1}>1</td>
                                            <td className="k-table-td" colSpan={1}>Chai</td>
                                            <td className="k-table-td" colSpan={1}>Beverages</td>
                                            <td className="k-table-td" colSpan={1}>18</td>
                                            <td className="k-table-td" colSpan={1}>39</td>
                                            <td className="k-table-td"><Checkbox /></td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-master-row k-alt">
                                            <td className="k-table-td" colSpan={1}>2</td>
                                            <td className="k-table-td" colSpan={1}>Chang</td>
                                            <td className="k-table-td" colSpan={1}>Beverages</td>
                                            <td className="k-table-td" colSpan={1}>19</td>
                                            <td className="k-table-td" colSpan={1}>17</td>
                                            <td className="k-table-td"><Checkbox /></td>
                                        </tr>
                                        <tr className="k-table-row k-master-row">
                                            <td className="k-table-td" colSpan={1}>3</td>
                                            <td className="k-table-td" colSpan={1}>Aniseed Syrup</td>
                                            <td className="k-table-td" colSpan={1}>Condiments</td>
                                            <td className="k-table-td" colSpan={1}>10</td>
                                            <td className="k-table-td" colSpan={1}>13</td>
                                            <td className="k-table-td"><Checkbox /></td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-master-row k-alt">
                                            <td className="k-table-td" colSpan={1}>4</td>
                                            <td className="k-table-td" colSpan={1}>Chef Anton&apos;s Cajun Seasoning</td>
                                            <td className="k-table-td" colSpan={1}>Condiments</td>
                                            <td className="k-table-td" colSpan={1}>22</td>
                                            <td className="k-table-td" colSpan={1}>53</td>
                                            <td className="k-table-td"><Checkbox /></td>
                                        </tr>
                                        <tr className="k-table-row k-master-row">
                                            <td className="k-table-td" colSpan={1}>5</td>
                                            <td className="k-table-td" colSpan={1}>Chef Anton&apos;s Gumbo Mix</td>
                                            <td className="k-table-td" colSpan={1}>Condiments</td>
                                            <td className="k-table-td" colSpan={1}>21.35</td>
                                            <td className="k-table-td" colSpan={1}>0</td>
                                            <td className="k-table-td"><Checkbox /></td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-master-row k-alt">
                                            <td className="k-table-td" colSpan={1}>6</td>
                                            <td className="k-table-td" colSpan={1}>Grandma&apos;s Boysenberry Spread</td>
                                            <td className="k-table-td" colSpan={1}>Condiments</td>
                                            <td className="k-table-td" colSpan={1}>25</td>
                                            <td className="k-table-td" colSpan={1}>120</td>
                                            <td className="k-table-td"><Checkbox /></td>
                                        </tr>
                                        <tr className="k-table-row k-master-row">
                                            <td className="k-table-td" colSpan={1}>7</td>
                                            <td className="k-table-td" colSpan={1}>Uncle Bob&apos;s Organic Dried Pears</td>
                                            <td className="k-table-td" colSpan={1}>Produce</td>
                                            <td className="k-table-td" colSpan={1}>30</td>
                                            <td className="k-table-td" colSpan={1}>15</td>
                                            <td className="k-table-td"><Checkbox /></td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-master-row k-alt">
                                            <td className="k-table-td" colSpan={1}>8</td>
                                            <td className="k-table-td" colSpan={1}>Northwoods Cranberry Sauce</td>
                                            <td className="k-table-td" colSpan={1}>Condiments</td>
                                            <td className="k-table-td" colSpan={1}>40</td>
                                            <td className="k-table-td" colSpan={1}>6</td>
                                            <td className="k-table-td"><Checkbox /></td>
                                        </tr>
                                        <tr className="k-table-row k-master-row">
                                            <td className="k-table-td" colSpan={1}>9</td>
                                            <td className="k-table-td" colSpan={1}>Mishi Kobe Niku</td>
                                            <td className="k-table-td" colSpan={1}>Meat/Poultry</td>
                                            <td className="k-table-td" colSpan={1}>97</td>
                                            <td className="k-table-td" colSpan={1}>29</td>
                                            <td className="k-table-td"><Checkbox /></td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-master-row k-alt">
                                            <td className="k-table-td" colSpan={1}>10</td>
                                            <td className="k-table-td" colSpan={1}>Ikura</td>
                                            <td className="k-table-td" colSpan={1}>Seafood</td>
                                            <td className="k-table-td" colSpan={1}>31</td>
                                            <td className="k-table-td" colSpan={1}>31</td>
                                            <td className="k-table-td"><Checkbox /></td>
                                        </tr>
                                        <tr className="k-table-row k-master-row">
                                            <td className="k-table-td" colSpan={1}>11</td>
                                            <td className="k-table-td" colSpan={1}>Queso Cabrales</td>
                                            <td className="k-table-td" colSpan={1}>Dairy Products</td>
                                            <td className="k-table-td" colSpan={1}>21</td>
                                            <td className="k-table-td" colSpan={1}>22</td>
                                            <td className="k-table-td"><Checkbox /></td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-master-row k-alt">
                                            <td className="k-table-td" colSpan={1}>12</td>
                                            <td className="k-table-td" colSpan={1}>Queso Manchego La Pastora</td>
                                            <td className="k-table-td" colSpan={1}>Dairy Products</td>
                                            <td className="k-table-td" colSpan={1}>38</td>
                                            <td className="k-table-td" colSpan={1}>86</td>
                                            <td className="k-table-td"><Checkbox /></td>
                                        </tr>
                                        <tr className="k-table-row k-master-row">
                                            <td className="k-table-td" colSpan={1}>13</td>
                                            <td className="k-table-td" colSpan={1}>Konbu</td>
                                            <td className="k-table-td" colSpan={1}>Seafood</td>
                                            <td className="k-table-td" colSpan={1}>6</td>
                                            <td className="k-table-td" colSpan={1}>24</td>
                                            <td className="k-table-td"><Checkbox /></td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-master-row k-alt">
                                            <td className="k-table-td" colSpan={1}>14</td>
                                            <td className="k-table-td" colSpan={1}>Tofu</td>
                                            <td className="k-table-td" colSpan={1}>Produce</td>
                                            <td className="k-table-td" colSpan={1}>23.25</td>
                                            <td className="k-table-td" colSpan={1}>35</td>
                                            <td className="k-table-td"><Checkbox /></td>
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
