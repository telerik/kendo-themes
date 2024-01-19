import { Checkbox } from '../../checkbox';
import { Icon } from '../../icon';


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

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <div className="k-grid k-grid-md k-grid-display-block k-reorderable k-grid-lockedcolumns">
                <div className="k-grid-header">
                    <div className="k-grid-header-locked" style={{ width: "400px" }}>
                        <table className="k-table k-table-md k-grid-header-table">
                            <colgroup>
                                <col style={{ width: "150px" }} />
                                <col style={{ width: "300px" }} />
                            </colgroup>
                            <thead className="k-table-thead">
                                <tr className="k-table-row">
                                    <th className="k-table-th k-header k-filterable">
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Order ID</span>
                                            </span>
                                            <a className="k-grid-header-menu k-grid-column-menu" href="#"><Icon icon="more-vertical" /></a>
                                        </span>
                                    </th>
                                    <th className="k-table-th k-header k-filterable">
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Ship Name</span>
                                            </span>
                                            <a className="k-grid-header-menu k-grid-column-menu" href="#"><Icon icon="more-vertical" /></a>
                                        </span>
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="k-grid-header-wrap k-auto-scrollable" style={{ width: "581px" }}>
                        <table className="k-table k-table-md k-grid-header-table" style={{ width: "1000px" }}>
                            <colgroup>
                                <col style={{ width: "300px" }} />
                                <col style={{ width: "300px" }} />
                                <col style={{ width: "400px" }} />
                            </colgroup>
                            <thead className="k-table-thead">
                                <tr className="k-table-row">
                                    <th className="k-table-th k-header k-filterable">
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Ship Country</span>
                                            </span>
                                            <a className="k-grid-header-menu k-grid-column-menu" href="#"><Icon icon="more-vertical" /></a>
                                        </span>
                                    </th>
                                    <th className="k-table-th k-header k-filterable">
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Ship City</span>
                                            </span>
                                            <a className="k-grid-header-menu k-grid-column-menu" href="#"><Icon icon="more-vertical" /></a>
                                        </span>
                                    </th>
                                    <th className="k-table-th k-header k-filterable">
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Ship Address</span>
                                            </span>
                                            <a className="k-grid-header-menu k-grid-column-menu" href="#"><Icon icon="more-vertical" /></a>
                                        </span>
                                    </th>
                                </tr>
                            </thead>
                        </table>
                        <div className="k-resize-handle" style={{ top: '0px', left: "595.5px", height: "37px", width: "9px" }}>
                            <div className="k-resize-handle-inner"></div>
                        </div>
                    </div>
                </div>
                <div className="k-grid-content-locked" style={{ width: "400px", height: "303px" }}>
                    <table className="k-table k-table-md k-grid-table">
                        <colgroup>
                            <col style={{ width: "150px" }} />
                            <col style={{ width: "300px" }} />
                        </colgroup>
                        <tbody className="k-table-tbody">
                            <tr className="k-table-row">
                                <td className="k-table-td">10248</td>
                                <td className="k-table-td">Vins et alcools Chevalier</td>
                            </tr>
                            <tr className="k-table-row k-table-alt-row k-alt">
                                <td className="k-table-td">10249</td>
                                <td className="k-table-td">Toms Spezialitäten</td>
                            </tr>
                            <tr className="k-table-row">
                                <td className="k-table-td">10250</td>
                                <td className="k-table-td">Hanari Carnes</td>
                            </tr>
                            <tr className="k-table-row k-table-alt-row k-alt k-hover">
                                <td className="k-table-td">10251</td>
                                <td className="k-table-td">Victuailles en stock (Hovered)</td>
                            </tr>
                            <tr className="k-table-row k-selected">
                                <td className="k-table-td">10252</td>
                                <td className="k-table-td">Suprêmes délices (Selected)</td>
                            </tr>
                            <tr className="k-table-row k-table-alt-row k-alt k-hover k-selected">
                                <td className="k-table-td">10253</td>
                                <td className="k-table-td">Hanari (Selected and Hovered)</td>
                            </tr>
                            <tr className="k-table-row">
                                <td className="k-table-td">10254</td>
                                <td className="k-table-td">Chop-suey Chinese</td>
                            </tr>
                            <tr className="k-table-row k-table-alt-row k-alt">
                                <td className="k-table-td">10255</td>
                                <td className="k-table-td">Richter Supermarkt</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="k-grid-content k-auto-scrollable" style={{ width: "597px", height: "320px" }}>
                    <table className="k-table k-table-md k-grid-table" style={{ width: "1000px" }}>
                        <colgroup>
                            <col style={{ width: "300px" }} />
                            <col style={{ width: "300px" }} />
                            <col style={{ width: "400px" }} />
                        </colgroup>
                        <tbody className="k-table-tbody">
                            <tr className="k-table-row">
                                <td className="k-table-td">France</td>
                                <td className="k-table-td">Reims</td>
                                <td className="k-table-td">59 rue de l&apos;Abbaye</td>
                            </tr>
                            <tr className="k-table-row k-table-alt-row k-alt">
                                <td className="k-table-td">Germany</td>
                                <td className="k-table-td">Münster</td>
                                <td className="k-table-td">Luisenstr. 48</td>
                            </tr>
                            <tr className="k-table-row">
                                <td className="k-table-td">Brazil</td>
                                <td className="k-table-td">Rio de Janeiro</td>
                                <td className="k-table-td">Rua do Paço, 67</td>
                            </tr>
                            <tr className="k-table-row k-table-alt-row k-alt k-hover">
                                <td className="k-table-td">France</td>
                                <td className="k-table-td">Lyon</td>
                                <td className="k-table-td">2, rue du Commerce</td>
                            </tr>
                            <tr className="k-table-row k-selected">
                                <td className="k-table-td">Belgium</td>
                                <td className="k-table-td">Charleroi</td>
                                <td className="k-table-td">Boulevard Tirou, 255</td>
                            </tr>
                            <tr className="k-table-row k-table-alt-row k-alt k-selected k-hover">
                                <td className="k-table-td">Brazil</td>
                                <td className="k-table-td">Rio de Janeiro</td>
                                <td className="k-table-td">Rua do Paço, 67</td>
                            </tr>
                            <tr className="k-table-row">
                                <td className="k-table-td">Switzerland</td>
                                <td className="k-table-td">Bern</td>
                                <td className="k-table-td">Hauptstr. 31</td>
                            </tr>
                            <tr className="k-table-row k-table-alt-row k-alt">
                                <td className="k-table-td">Switzerland</td>
                                <td className="k-table-td">Genève</td>
                                <td className="k-table-td">Starenweg 5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <span>jQuery Grid - Frozen columns and sorting</span>
                <div style={{ width: "1000px", height: "200px" }} className="k-grid k-grid-md k-grid-display-block k-grid-lockedcolumns">
                    <div className="k-grid-header">
                        <div className="k-grid-header-locked" style={{ width: "400px" }}>
                            <table className="k-table k-table-md k-grid-header-table">
                                <colgroup>
                                    <col style={{ width: "150px" }} />
                                    <col style={{ width: "250px" }} />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th rowSpan={1} className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Order ID</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th rowSpan={1} className="k-table-th k-header k-sorted">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Ship Name</span>
                                                    <span className="k-sort-icon"><Icon icon="sort-desc-small" /></span>
                                                    <span className="k-sort-order">1</span>
                                                </span>
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="k-grid-header-wrap k-auto-scrollable" style={{ width: "581px" }}>
                            <table className="k-table k-table-md k-grid-header-table" style={{ width: "900px" }}>
                                <colgroup>
                                    <col style={{ width: "400px" }} />
                                    <col style={{ width: "500px" }} />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th rowSpan={1} className="k-table-th k-header k-sorted">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Ship Country</span>
                                                    <span className="k-sort-icon"><Icon icon="sort-asc-small" /></span>
                                                    <span className="k-sort-order">2</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th rowSpan={1} className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Ship City</span>
                                                </span>
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-content-locked" style={{ width: "400px", height: "146px" }}>
                        <table className="k-table k-table-md k-grid-table">
                            <colgroup>
                                <col style={{ width: "150px" }} />
                                <col style={{ width: "250px" }} className="k-sorted" />
                            </colgroup>
                            <tbody className="k-table-tbody">
                                <tr className="k-table-row">
                                    <td className="k-table-td">10374</td>
                                    <td className="k-table-td">Wolski Zajazd</td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-alt">
                                    <td className="k-table-td">10611</td>
                                    <td className="k-table-td">Wolski Zajazd</td>
                                </tr>
                                <tr className="k-table-row">
                                    <td className="k-table-td">10792</td>
                                    <td className="k-table-td">Wolski Zajazd</td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-alt">
                                    <td className="k-table-td">10792</td>
                                    <td className="k-table-td">Wolski Zajazd</td>
                                </tr>
                            </tbody>
                        </table>
                    </div><div className="k-grid-content k-auto-scrollable" style={{ width: "597px", height: "161px" }}>
                        <table className="k-table k-table-md k-grid-table" role="grid" style={{ height: 'auto', width: "900px" }}>
                            <colgroup>
                                <col style={{ width: "400px" }} className="k-sorted" />
                                <col style={{ width: "500px" }} />
                            </colgroup>
                            <tbody className="k-table-tbody">
                                <tr className="k-table-row">
                                    <td className="k-table-td">Poland</td>
                                    <td className="k-table-td">Warszawa</td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-alt">
                                    <td className="k-table-td">Poland</td>
                                    <td className="k-table-td">Warszawa</td>
                                </tr>
                                <tr className="k-table-row">
                                    <td className="k-table-td">Poland</td>
                                    <td className="k-table-td">Warszawa</td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-alt">
                                    <td className="k-table-td">Poland</td>
                                    <td className="k-table-td">Warszawa</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

            <div>
                <span>Angular Grid with locked columns, Grouping and Multiline headers</span>
                <div className="k-grid k-grid-md k-grid-lockedcolumns grid-styling-overrides" style={{ height: "430px" }}>
                    <div className="k-grid-aria-root">
                        <div className="k-grid-header">
                            <div className="k-grid-header-locked" style={{ width: "582px" }}>
                                <table className="k-table k-table-md k-grid-header-table" style={{ width: "582px" }}>
                                    <colgroup>
                                        <col className="k-group-col" />
                                        <col style={{ width: "200px" }} />
                                        <col style={{ width: "350px" }} />
                                    </colgroup>
                                    <thead className="k-table-thead">
                                        <tr className="k-table-row" style={{ height: "38px" }}>
                                            <th className="k-table-th k-group-cell k-header"></th>
                                            <th className="k-table-th k-header" rowSpan={2} colSpan={1}>
                                                <span className="k-cell-inner">
                                                    <span className="k-link">
                                                        <span className="k-column-title">Product ID</span>
                                                    </span>
                                                </span>
                                            </th>
                                            <th className="k-table-th k-header" rowSpan={2} colSpan={1}>
                                                <span className="k-cell-inner">
                                                    <span className="k-link">
                                                        <span className="k-column-title">Product Name</span>
                                                    </span>
                                                </span>
                                            </th>
                                        </tr>
                                        <tr className="k-table-row" style={{ height: "38px" }}>
                                            <th className="k-table-th k-group-cell k-header"></th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <div className="k-grid-header-wrap">
                                <table className="k-table k-table-md k-grid-header-table">
                                    <colgroup>
                                        <col style={{ height: "120px" }} />
                                        <col style={{ height: "120px" }} />
                                        <col style={{ height: "120px" }} />
                                        <col style={{ height: "120px" }} />
                                    </colgroup>
                                    <thead className="k-table-thead">
                                        <tr className="k-table-row" style={{ height: "38px" }}>
                                            <th className="k-table-th k-header" rowSpan={1} colSpan={3}>
                                                <span className="k-cell-inner">
                                                    <span className="k-link">
                                                        <span className="k-column-title">Availability</span>
                                                    </span>
                                                </span>
                                            </th>
                                            <th className="k-table-th k-header" rowSpan={2} colSpan={1}>
                                                <span className="k-cell-inner">
                                                    <span className="k-link">
                                                        <span className="k-column-title">Discontinued</span>
                                                    </span>
                                                </span>
                                            </th>
                                        </tr>
                                        <tr className="k-table-row" style={{ height: "38px" }}>
                                            <th className="k-table-th k-header" rowSpan={1} colSpan={1}>
                                                <span className="k-cell-inner">
                                                    <span className="k-link">
                                                        <span className="k-column-title">Unit Price</span>
                                                    </span>
                                                </span>
                                            </th>
                                            <th className="k-table-th k-header" rowSpan={1} colSpan={1}>
                                                <span className="k-cell-inner">
                                                    <span className="k-link">
                                                        <span className="k-column-title">Units On Order</span>
                                                    </span>
                                                </span>
                                            </th>
                                            <th className="k-table-th k-header" rowSpan={1} colSpan={1}>
                                                <span className="k-cell-inner">
                                                    <span className="k-link">
                                                        <span className="k-column-title">Units In Stock</span>
                                                    </span>
                                                </span>
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                        <div className="k-grid-container">
                            <div className="k-grid-content-locked" style={{ width: "582px", height: "570px" }}>
                                <div className="k-grid-table-wrap">
                                    <table className="k-table k-table-md k-grid-table" style={{ width: "582px" }}>
                                        <colgroup>
                                            <col className="k-group-col" />
                                            <col style={{ width: "200px" }}/>
                                            <col style={{ width: "350px" }} />
                                        </colgroup>
                                        <tbody className="k-table-tbody">
                                            <tr className="k-table-row k-table-group-row k-grouping-row" style={{ height: "37px" }}>
                                                <td className="k-table-td" colSpan={3}>
                                                    <p className="k-reset">
                                                        <Icon icon="caret-alt-down" />

                                                    Discontinued: false
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr className="k-table-row" style={{ height: "38px" }}>
                                                <td className="k-table-td k-table-group-td k-group-cell"></td>
                                                <td className="k-table-td" colSpan={1}></td>
                                                <td className="k-table-td" colSpan={1}>Chai</td>
                                            </tr>
                                            <tr className="k-table-row k-table-alt-row k-alt" style={{ width: "37px" }}>
                                                <td className="k-table-td k-table-group-td k-group-cell"></td>
                                                <td className="k-table-td" colSpan={1}>2</td>
                                                <td className="k-table-td" colSpan={1}>Chang</td>
                                            </tr>
                                            <tr className="k-table-row" style={{ width: "37px" }}>
                                                <td className="k-table-td k-table-group-td k-group-cell"></td>
                                                <td className="k-table-td" colSpan={1}>3</td>
                                                <td className="k-table-td" colSpan={1}>
                                                Aniseed Syrup
                                                </td>
                                            </tr>
                                            <tr className="k-table-row k-table-alt-row k-alt" style={{ width: "37px" }}>
                                                <td className="k-table-td k-table-group-td k-group-cell"></td>
                                                <td className="k-table-td" colSpan={1}>
                                                4
                                                </td>
                                                <td className="k-table-td" colSpan={1}>
                                                Chef Anton&apos;s Cajun Seasoning
                                                </td>
                                            </tr>
                                            <tr className="k-table-row" style={{ width: "37px" }}>
                                                <td className="k-table-td k-table-group-td k-group-cell"></td>
                                                <td className="k-table-td" colSpan={1}>
                                                6
                                                </td>
                                                <td className="k-table-td" colSpan={1}>
                                                Grandma&apos;s Boysenberry Spread
                                                </td>
                                            </tr>
                                            <tr className="k-table-row k-group-footer" style={{ height: "39px" }}>
                                                <td className="k-table-td k-table-group-td k-group-cell"></td>
                                                <td className="k-table-td"></td>
                                                <td className="k-table-td"></td>
                                            </tr>

                                            <tr className="k-table-row k-table-group-row k-grouping-row" style={{ height: "37px" }}>
                                                <td className="k-table-td" colSpan={3}>
                                                    <p className="k-reset">
                                                        <Icon icon="caret-alt-down" />
                                                    Discontinued: true
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr className="k-table-row k-table-alt-row k-alt" style={{ height: "38px" }}>
                                                <td className="k-table-td k-table-group-td k-group-cell"></td>
                                                <td className="k-table-td" colSpan={1}>
                                                5
                                                </td>
                                                <td className="k-table-td" colSpan={1}>
                                                Chef Anton&apos;s Gumbo Mix
                                                </td>
                                            </tr>
                                            <tr className="k-table-row k-group-footer" style={{ height: "39px" }}>
                                                <td className="k-table-td k-table-group-td k-group-cell"></td>
                                                <td className="k-table-td"></td>
                                                <td className="k-table-td"></td>
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
                                    <table className="k-table k-table-md k-grid-table">
                                        <colgroup>
                                            <col style={{ height: "120px" }} />
                                            <col style={{ height: "120px" }} />
                                            <col style={{ height: "120px" }} />
                                            <col style={{ height: "120px" }} />
                                        </colgroup>
                                        <tbody className="k-table-tbody">
                                            <tr className="k-table-row k-table-group-row k-grouping-row" style={{ height: "37px" }}>
                                                <td className="k-table-td" colSpan={4}>
                                                    <p className="k-reset"></p>
                                                </td>
                                            </tr>
                                            <tr className="k-table-row" style={{ height: "38px" }}>
                                                <td className="k-table-td" colSpan={1}>
                                                18
                                                </td>
                                                <td className="k-table-td" colSpan={1}>
                                                0
                                                </td>
                                                <td className="k-table-td" colSpan={1}>
                                                39
                                                </td>
                                                <td className="k-table-td" colSpan={1}>
                                                    <Checkbox />
                                                </td>
                                            </tr>
                                            <tr className="k-table-row k-table-alt-row k-alt" style={{ width: "37px" }}>
                                                <td className="k-table-td" colSpan={1}>
                                                19
                                                </td>
                                                <td className="k-table-td" colSpan={1}>
                                                40
                                                </td>
                                                <td className="k-table-td" colSpan={1}>
                                                17
                                                </td>
                                                <td className="k-table-td" colSpan={1}>
                                                    <Checkbox />
                                                </td>
                                            </tr>
                                            <tr className="k-table-row" style={{ width: "37px" }}>
                                                <td className="k-table-td" colSpan={1}>
                                                10
                                                </td>
                                                <td className="k-table-td" colSpan={1}>
                                                70
                                                </td>
                                                <td className="k-table-td" colSpan={1}>
                                                13
                                                </td>
                                                <td className="k-table-td" colSpan={1}>
                                                    <Checkbox />
                                                </td>
                                            </tr>
                                            <tr className="k-table-row k-table-alt-row k-alt" style={{ width: "37px" }}>
                                                <td className="k-table-td" colSpan={1}>
                                                22
                                                </td>
                                                <td className="k-table-td" colSpan={1}>
                                                0
                                                </td>
                                                <td className="k-table-td" colSpan={1}>
                                                53
                                                </td>
                                                <td className="k-table-td" colSpan={1}>
                                                    <Checkbox />
                                                </td>
                                            </tr>
                                            <tr className="k-table-row" style={{ width: "37px" }}>
                                                <td className="k-table-td" colSpan={1}>
                                                25
                                                </td>
                                                <td className="k-table-td" colSpan={1}>
                                                0
                                                </td>
                                                <td className="k-table-td" colSpan={1}>
                                                120
                                                </td>
                                                <td className="k-table-td" colSpan={1}>
                                                    <Checkbox />
                                                </td>
                                            </tr>
                                            <tr className="k-table-row k-group-footer" style={{ height: "39px" }}>
                                                <td className="k-table-td">
                                                Sum: 94
                                                </td>
                                                <td className="k-table-td"></td>
                                                <td className="k-table-td"></td>
                                                <td className="k-table-td"></td>
                                            </tr>

                                            <tr className="k-table-row k-table-group-row k-grouping-row" style={{ height: "37px" }}>
                                                <td className="k-table-td" colSpan={4}>
                                                    <p className="k-reset"></p>
                                                </td>
                                            </tr>
                                            <tr className="k-table-row k-table-alt-row k-alt" style={{ height: "38px" }}>
                                                <td className="k-table-td" colSpan={1}>21.35</td>
                                                <td className="k-table-td" colSpan={1}>
                                                0
                                                </td>
                                                <td className="k-table-td" colSpan={1}>
                                                0
                                                </td>
                                                <td className="k-table-td" colSpan={1}>
                                                    <Checkbox />
                                                </td>
                                            </tr>
                                            <tr className="k-table-row k-group-footer" style={{ height: "39px" }}>
                                                <td className="k-table-td">
                                                Sum: 24
                                                </td>
                                                <td className="k-table-td"></td>
                                                <td className="k-table-td"></td>
                                                <td className="k-table-td"></td>
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
                                <table className="k-table k-table-md k-grid-footer-table" style={{ width: "582px" }}>
                                    <colgroup>
                                        <col className="k-group-col" />
                                        <col style={{ width: "200px" }}/>
                                        <col style={{ width: "350px" }} />
                                    </colgroup>
                                    <tfoot className="k-table-tfoot">
                                        <tr className="k-table-row k-footer-template">
                                            <td className="k-table-td k-table-group-td k-group-cell"></td>
                                            <td className="k-table-td"></td>
                                            <td className="k-table-td"></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="k-grid-footer-wrap" >
                                <table className="k-table k-table-md k-grid-footer-table">
                                    <colgroup>
                                        <col style={{ height: "120px" }} />
                                        <col style={{ height: "120px" }} />
                                        <col style={{ height: "120px" }} />
                                        <col style={{ height: "120px" }} />
                                    </colgroup>
                                    <tfoot className="k-table-tfoot">
                                        <tr className="k-table-row k-footer-template">
                                            <td className="k-table-td">Total Unit Price: 115.35</td>
                                            <td className="k-table-td"></td>
                                            <td className="k-table-td"></td>
                                            <td className="k-table-td"></td>
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
