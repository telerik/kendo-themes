import { Icon } from '../../icon';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <section>
                <div className="k-d-flex k-flex-row k-pos-relative">
                    <div className="k-pivotgrid">
                        <span className="k-pivotgrid-empty-cell k-focus"></span>

                        {/* Pivot Multi Column Headers */}
                        <div className="k-pivotgrid-column-headers">

                            <table className="k-pivotgrid-table">
                                <tbody className="k-pivotgrid-tbody">
                                    {/* Four Rows for Date.Calendar Column grouping field */}
                                    <tr className="k-pivotgrid-row k-pivotgrid-column-total">
                                        <th colSpan={10} className="k-pivotgrid-cell k-pivotgrid-expanded k-pivotgrid-header-root">
                                            <Icon className="k-pivotgrid-toggle" icon="chevron-up" />
                                            <span className="k-pivotgrid-header-title">All Periods</span>
                                        </th>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <th colSpan={5} className="k-pivotgrid-cell">
                                            Beverages
                                        </th>
                                        <th colSpan={5} className="k-pivotgrid-cell">
                                            Seafood
                                        </th>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <th colSpan={10} className="k-pivotgrid-cell k-pivotgrid-expanded">
                                            <Icon className="k-pivotgrid-toggle" icon="chevron-up" />
                                            <span className="k-pivotgrid-header-title">CY 2010</span>
                                        </th>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        {/* Pivot Multi Row Headers */}
                        <div className="k-pivotgrid-row-headers">
                            <table className="k-pivotgrid-table">
                                <tbody className="k-pivotgrid-tbody">
                                    <tr className="k-pivotgrid-row">
                                        <th colSpan={1} rowSpan={9} className="k-pivotgrid-cell k-pivotgrid-row-total k-pivotgrid-expanded k-pivotgrid-header-root">
                                            <Icon className="k-pivotgrid-toggle" icon="chevron-up" />
                                            <span className="k-pivotgrid-header-title">All Geographies</span>
                                        </th>
                                        <th colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-header-title">Austell</span>
                                        </th>
                                    </tr>
                                    <tr className="k-pivotgrid-row k-hover">
                                        <th colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-header-title">Biloxi</span>
                                        </th>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <th colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-header-title">Braintree</span>
                                        </th>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <th colSpan={1} className="k-pivotgrid-cell k-selected">
                                            <span className="k-pivotgrid-header-title">Casper</span>
                                        </th>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <th colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-header-title">Clearwater</span>
                                        </th>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <th colSpan={1} className="k-pivotgrid-cell k-focus">
                                            <span className="k-pivotgrid-header-title">Destin</span>
                                        </th>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <th colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-header-title">Euclid</span>
                                        </th>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <th colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-header-title">Everett</span>
                                        </th>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <th colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-header-title">Fort Wayne</span>
                                        </th>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <th colSpan={2} className="k-pivotgrid-cell k-pivotgrid-header-total">
                                            <span className="k-pivotgrid-header-title">All Geographies</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Details */}
                        <div className="k-pivotgrid-values">
                            <table className="k-pivotgrid-table">
                                <tbody className="k-pivotgrid-tbody">
                                    <tr className="k-pivotgrid-row">
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$514.14</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$2.02</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$2451.14</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$2919.53</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$10567.67</span>
                                        </td>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$344.69</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$2.52</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$105.70</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content"></span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$1911.60</span>
                                        </td>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$96.89</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content"></span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$0.72</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content"></span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$816.16</span>
                                        </td>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$1070.34</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$3.03</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$6621.86</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$5156.51</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$17520.10</span>
                                        </td>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$514.14</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$2.02</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$4.00</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$2919.53</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$10567.67</span>
                                        </td>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$344.69</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$2.52</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$105.70</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content"></span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$1911.60</span>
                                        </td>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$96.89</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content"></span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content"></span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content"></span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$816.16</span>
                                        </td>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$1070.34</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$3.03</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$6621.86</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$5156.51</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$17520.10</span>
                                        </td>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$96.89</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$96.89</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content"></span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content"></span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$816.16</span>
                                        </td>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$9336.89</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$9546.89</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$4719.27</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$4719.27</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$88816.16</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    </>
);
