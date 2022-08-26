import React from 'react';
import ReactDOM from 'react-dom/client';
import { Checkbox } from '../../checkbox';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    /* These overrides are needed for the "Angular Grid with locked columns, Grouping and Multiline headers" example ->
    they ensure the Grid layout is not broken in neither of the themes */
    .grid-styling-overrides .k-header,
    .grid-styling-overrides .k-grouping-row td,
    .grid-styling-overrides .k-group-footer td {
        padding-top: 0;
        padding-bottom: 0;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <div className="k-widget k-grid k-grid-display-block k-reorderable k-grid-lockedcolumns">
                <div className="k-grid-header">
                    <div className="k-grid-header-locked" style={{ width: "400px" }}>
                        <table>
                            <colgroup>
                                <col style={{ width: "150px" }} />
                                <col style={{ width: "300px" }} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th className="k-header k-with-icon"><a className="k-grid-header-menu k-grid-column-menu" href="#"><Icon name="more-vertical" /></a><a className="k-link" href="/aspnet-mvc/Grid/FrozenColumns_Read?Grid-sort=OrderID-asc">Order ID</a></th>
                                    <th className="k-header k-with-icon"><a className="k-grid-header-menu k-grid-column-menu" href="#"><Icon name="more-vertical" /></a><a className="k-link" href="/aspnet-mvc/Grid/FrozenColumns_Read?Grid-sort=ShipName-asc">Ship Name</a></th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="k-grid-header-wrap k-auto-scrollable" style={{ width: "581px" }}>
                        <table style={{ width: "1000px" }}>
                            <colgroup>
                                <col style={{ width: "300px" }} />
                                <col style={{ width: "300px" }} />
                                <col style={{ width: "400px" }} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th className="k-header k-with-icon"><a className="k-grid-header-menu k-grid-column-menu" href="#"><Icon name="more-vertical" /></a><a className="k-link" href="/aspnet-mvc/Grid/FrozenColumns_Read?Grid-sort=ShipCountry-asc">Ship Country</a></th>
                                    <th className="k-header k-with-icon"><a className="k-grid-header-menu k-grid-column-menu" href="#"><Icon name="more-vertical" /></a><a className="k-link" href="/aspnet-mvc/Grid/FrozenColumns_Read?Grid-sort=ShipCity-asc">Ship City</a></th>
                                    <th className="k-header k-with-icon"><a className="k-grid-header-menu k-grid-column-menu" href="#"><Icon name="more-vertical" /></a><a className="k-link" href="/aspnet-mvc/Grid/FrozenColumns_Read?Grid-sort=ShipAddress-asc">Ship Address</a></th>
                                </tr>
                            </thead>
                        </table>
                        <div className="k-resize-handle" style={{ top: '0px', left: "595.5px", height: "37px", width: "9px" }}>
                            <div className="k-resize-handle-inner"></div>
                        </div>
                    </div>
                </div>
                <div className="k-grid-content-locked" style={{ width: "400px", height: "303px" }}>
                    <table>
                        <colgroup>
                            <col style={{ width: "150px" }} />
                            <col style={{ width: "300px" }} />
                        </colgroup>
                        <tbody>
                            <tr>
                                <td>10248</td>
                                <td>Vins et alcools Chevalier</td>
                            </tr>
                            <tr className="k-alt">
                                <td>10249</td>
                                <td>Toms Spezialitäten</td>
                            </tr>
                            <tr>
                                <td>10250</td>
                                <td>Hanari Carnes</td>
                            </tr>
                            <tr className="k-alt k-hover">
                                <td>10251</td>
                                <td>Victuailles en stock (Hovered)</td>
                            </tr>
                            <tr className="k-selected">
                                <td>10252</td>
                                <td>Suprêmes délices (Selected)</td>
                            </tr>
                            <tr className="k-alt k-hover k-selected">
                                <td>10253</td>
                                <td>Hanari (Selected and Hovered)</td>
                            </tr>
                            <tr>
                                <td>10254</td>
                                <td>Chop-suey Chinese</td>
                            </tr>
                            <tr className="k-alt">
                                <td>10255</td>
                                <td>Richter Supermarkt</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="k-grid-content k-auto-scrollable" style={{ width: "597px", height: "320px" }}>
                    <table style={{ width: "1000px" }}>
                        <colgroup>
                            <col style={{ width: "300px" }} />
                            <col style={{ width: "300px" }} />
                            <col style={{ width: "400px" }} />
                        </colgroup>
                        <tbody>
                            <tr>
                                <td>France</td>
                                <td>Reims</td>
                                <td>59 rue de l&apos;Abbaye</td>
                            </tr>
                            <tr className="k-alt">
                                <td>Germany</td>
                                <td>Münster</td>
                                <td>Luisenstr. 48</td>
                            </tr>
                            <tr>
                                <td>Brazil</td>
                                <td>Rio de Janeiro</td>
                                <td>Rua do Paço, 67</td>
                            </tr>
                            <tr className="k-alt k-hover">
                                <td>France</td>
                                <td>Lyon</td>
                                <td>2, rue du Commerce</td>
                            </tr>
                            <tr className="k-selected">
                                <td>Belgium</td>
                                <td>Charleroi</td>
                                <td>Boulevard Tirou, 255</td>
                            </tr>
                            <tr className="k-alt k-selected k-hover">
                                <td>Brazil</td>
                                <td>Rio de Janeiro</td>
                                <td>Rua do Paço, 67</td>
                            </tr>
                            <tr>
                                <td>Switzerland</td>
                                <td>Bern</td>
                                <td>Hauptstr. 31</td>
                            </tr>
                            <tr className="k-alt">
                                <td>Switzerland</td>
                                <td>Genève</td>
                                <td>Starenweg 5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <span>jQuery Grid - Frozen columns and sorting</span>
                <div style={{ width: "1000px", height: "200px" }} className="k-grid k-widget k-grid-display-block k-grid-lockedcolumns">
                    <div className="k-grid-header">
                        <div className="k-grid-header-locked" style={{ width: "400px" }}>
                            <table>
                                <colgroup>
                                    <col style={{ width: "150px" }} />
                                    <col style={{ width: "250px" }} />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th rowSpan={1} className="k-header">
                                            <a className="k-link" href="#">Order ID</a>
                                        </th>
                                        <th rowSpan={1} className="k-header k-sorted">
                                            <a className="k-link" href="#">Ship Name<Icon name="sort-desc-sm" /><span className="k-sort-order">1</span></a>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="k-grid-header-wrap k-auto-scrollable" style={{ width: "581px" }}>
                            <table style={{ width: "900px" }}>
                                <colgroup>
                                    <col style={{ width: "400px" }} />
                                    <col style={{ width: "500px" }} />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th rowSpan={1} className="k-header k-sorted">
                                            <a className="k-link" href="#">Ship Country<Icon name="sort-asc-sm" /><span className="k-sort-order">2</span></a>
                                        </th>
                                        <th rowSpan={1} className="k-header">
                                            <a className="k-link" href="#">Ship City</a>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-content-locked" style={{ width: "400px", height: "146px" }}>
                        <table>
                            <colgroup>
                                <col style={{ width: "150px" }} />
                                <col style={{ width: "250px" }} className="k-sorted" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>10374</td>
                                    <td>Wolski Zajazd</td>
                                </tr>
                                <tr className="k-alt">
                                    <td>10611</td>
                                    <td>Wolski Zajazd</td>
                                </tr>
                                <tr>
                                    <td>10792</td>
                                    <td>Wolski Zajazd</td>
                                </tr>
                                <tr className="k-alt">
                                    <td>10792</td>
                                    <td>Wolski Zajazd</td>
                                </tr>
                            </tbody>
                        </table>
                    </div><div className="k-grid-content k-auto-scrollable" style={{ width: "597px", height: "161px" }}>
                        <table role="grid" style={{ height: 'auto', width: "900px" }}>
                            <colgroup>
                                <col style={{ width: "400px" }} className="k-sorted" />
                                <col style={{ width: "500px" }} />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>Poland</td>
                                    <td>Warszawa</td>
                                </tr>
                                <tr className="k-alt">
                                    <td>Poland</td>
                                    <td>Warszawa</td>
                                </tr>
                                <tr>
                                    <td>Poland</td>
                                    <td>Warszawa</td>
                                </tr>
                                <tr className="k-alt">
                                    <td>Poland</td>
                                    <td>Warszawa</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

            <div>
                <span>Angular Grid with locked columns, Grouping and Multiline headers</span>
                <div className="k-widget k-grid k-grid-lockedcolumns grid-styling-overrides" style={{ height: "430px" }}>
                    <div className="k-grid-aria-root">
                        <div className="k-grid-header">
                            <div className="k-grid-header-locked" style={{ width: "582px" }}>
                                <table style={{ width: "582px" }}>
                                    <colgroup>
                                        <col className="k-group-col" />
                                        <col style={{ width: "200px" }} />
                                        <col style={{ width: "350px" }} />
                                    </colgroup>
                                    <thead>
                                        <tr style={{ height: "38px" }}>
                                            <th className="k-group-cell k-header"></th>
                                            <th className="k-header" rowSpan={2} colSpan={1}>Product ID</th>
                                            <th className="k-header" rowSpan={2} colSpan={1}>Product Name</th>
                                        </tr>
                                        <tr style={{ height: "38px" }}>
                                            <th className="k-group-cell k-header"></th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <div className="k-grid-header-wrap">
                                <table>
                                    <colgroup>
                                        <col style={{ height: "120px" }} />
                                        <col style={{ height: "120px" }} />
                                        <col style={{ height: "120px" }} />
                                        <col style={{ height: "120px" }} />
                                    </colgroup>
                                    <thead>
                                        <tr style={{ height: "38px" }}>
                                            <th className="k-header" rowSpan={1} colSpan={3}>
                                            Availability
                                            </th>
                                            <th className="k-header" rowSpan={2} colSpan={1}>
                                            Discontinued
                                            </th>
                                        </tr>
                                        <tr style={{ height: "38px" }}>
                                            <th className="k-header" rowSpan={1} colSpan={1}>
                                            Unit Price
                                            </th>
                                            <th className="k-header" rowSpan={1} colSpan={1}>
                                            Units On Order
                                            </th>
                                            <th className="k-header" rowSpan={1} colSpan={1}>Units In Stock</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                        <div className="k-grid-container">
                            <div className="k-grid-content-locked" style={{ width: "582px", height: "570px" }}>
                                <div className="k-grid-table-wrap">
                                    <table className="k-grid-table" style={{ width: "582px" }}>
                                        <colgroup>
                                            <col className="k-group-col" />
                                            <col style={{ width: "200px" }}/>
                                            <col style={{ width: "350px" }} />
                                        </colgroup>
                                        <tbody>
                                            <tr className="k-grouping-row" style={{ height: "37px" }}>
                                                <td colSpan={3}>
                                                    <p className="k-reset">
                                                        <Icon name="collapse" />

                                                    Discontinued: false
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr style={{ height: "38px" }}>
                                                <td className="k-group-cell"></td>
                                                <td colSpan={1}></td>
                                                <td colSpan={1}>Chai</td>
                                            </tr>
                                            <tr className="k-alt" style={{ width: "37px" }}>
                                                <td className="k-group-cell"></td>
                                                <td colSpan={1}>2</td>
                                                <td colSpan={1}>Chang</td>
                                            </tr>
                                            <tr style={{ width: "37px" }}>
                                                <td className="k-group-cell"></td>
                                                <td colSpan={1}>3</td>
                                                <td colSpan={1}>
                                                Aniseed Syrup
                                                </td>
                                            </tr>
                                            <tr className="k-alt" style={{ width: "37px" }}>
                                                <td className="k-group-cell"></td>
                                                <td colSpan={1}>
                                                4
                                                </td>
                                                <td colSpan={1}>
                                                Chef Anton&apos;s Cajun Seasoning
                                                </td>
                                            </tr>
                                            <tr style={{ width: "37px" }}>
                                                <td className="k-group-cell"></td>
                                                <td colSpan={1}>
                                                6
                                                </td>
                                                <td colSpan={1}>
                                                Grandma&apos;s Boysenberry Spread
                                                </td>
                                            </tr>
                                            <tr className="k-group-footer" style={{ height: "39px" }}>
                                                <td className="k-group-cell"></td>
                                                <td></td>
                                                <td></td>
                                            </tr>

                                            <tr className="k-grouping-row" style={{ height: "37px" }}>
                                                <td colSpan={3}>
                                                    <p className="k-reset">
                                                        <Icon name="collapse" />
                                                    Discontinued: true
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr className="k-alt" style={{ height: "38px" }}>
                                                <td className="k-group-cell"></td>
                                                <td colSpan={1}>
                                                5
                                                </td>
                                                <td colSpan={1}>
                                                Chef Anton&apos;s Gumbo Mix
                                                </td>
                                            </tr>
                                            <tr className="k-group-footer" style={{ height: "39px" }}>
                                                <td className="k-group-cell"></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div></div>
                                </div>
                                <div className="k-height-container">
                                    <div></div>
                                </div>
                            </div>
                            <div className="k-grid-content k-virtual-content">
                                <div className="k-grid-table-wrap">
                                    <table className="k-grid-table">
                                        <colgroup>
                                            <col style={{ height: "120px" }} />
                                            <col style={{ height: "120px" }} />
                                            <col style={{ height: "120px" }} />
                                            <col style={{ height: "120px" }} />
                                        </colgroup>
                                        <tbody>
                                            <tr className="k-grouping-row" style={{ height: "37px" }}>
                                                <td colSpan={4}>
                                                    <p className="k-reset"></p>
                                                </td>
                                            </tr>
                                            <tr style={{ height: "38px" }}>
                                                <td colSpan={1}>
                                                18
                                                </td>
                                                <td colSpan={1}>
                                                0
                                                </td>
                                                <td colSpan={1}>
                                                39
                                                </td>
                                                <td colSpan={1}>
                                                    <Checkbox />
                                                </td>
                                            </tr>
                                            <tr className="k-alt" style={{ width: "37px" }}>
                                                <td colSpan={1}>
                                                19
                                                </td>
                                                <td colSpan={1}>
                                                40
                                                </td>
                                                <td colSpan={1}>
                                                17
                                                </td>
                                                <td colSpan={1}>
                                                    <Checkbox />
                                                </td>
                                            </tr>
                                            <tr style={{ width: "37px" }}>
                                                <td colSpan={1}>
                                                10
                                                </td>
                                                <td colSpan={1}>
                                                70
                                                </td>
                                                <td colSpan={1}>
                                                13
                                                </td>
                                                <td colSpan={1}>
                                                    <Checkbox />
                                                </td>
                                            </tr>
                                            <tr className="k-alt" style={{ width: "37px" }}>
                                                <td colSpan={1}>
                                                22
                                                </td>
                                                <td colSpan={1}>
                                                0
                                                </td>
                                                <td colSpan={1}>
                                                53
                                                </td>
                                                <td colSpan={1}>
                                                    <Checkbox />
                                                </td>
                                            </tr>
                                            <tr style={{ width: "37px" }}>
                                                <td colSpan={1}>
                                                25
                                                </td>
                                                <td colSpan={1}>
                                                0
                                                </td>
                                                <td colSpan={1}>
                                                120
                                                </td>
                                                <td colSpan={1}>
                                                    <Checkbox />
                                                </td>
                                            </tr>
                                            <tr className="k-group-footer" style={{ height: "39px" }}>
                                                <td>
                                                Sum: 94
                                                </td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>

                                            <tr className="k-grouping-row" style={{ height: "37px" }}>
                                                <td colSpan={4}>
                                                    <p className="k-reset"></p>
                                                </td>
                                            </tr>
                                            <tr className="k-alt" style={{ height: "38px" }}>
                                                <td colSpan={1}>21.35</td>
                                                <td colSpan={1}>
                                                0
                                                </td>
                                                <td colSpan={1}>
                                                0
                                                </td>
                                                <td colSpan={1}>
                                                    <Checkbox />
                                                </td>
                                            </tr>
                                            <tr className="k-group-footer" style={{ height: "39px" }}>
                                                <td>
                                                Sum: 24
                                                </td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div></div>
                                <div className="k-height-container">
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        <div className="k-grid-footer">
                            <div className="k-grid-footer-locked" style={{ width: "582px" }}>
                                <table style={{ width: "582px" }}>
                                    <colgroup>
                                        <col className="k-group-col" />
                                        <col style={{ width: "200px" }}/>
                                        <col style={{ width: "350px" }} />
                                    </colgroup>
                                    <tfoot>
                                        <tr className="k-footer-template">
                                            <td className="k-group-cell"></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="k-grid-footer-wrap" >
                                <table>
                                    <colgroup>
                                        <col style={{ height: "120px" }} />
                                        <col style={{ height: "120px" }} />
                                        <col style={{ height: "120px" }} />
                                        <col style={{ height: "120px" }} />
                                    </colgroup>
                                    <tfoot>
                                        <tr className="k-footer-template">
                                            <td>Total Unit Price: 115.35</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
