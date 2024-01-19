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
            <span>Angular Grid with locked columns, Grouping and Multiline headers</span>
            <div dir="rtl" className="k-grid k-grid-md k-grid-lockedcolumns grid-styling-overrides" style={{ height: "700px" }}>
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
                                        <th className="k-table-th k-header" rowSpan={2} colSpan={1}>Product ID</th>
                                        <th className="k-table-th k-header" rowSpan={2} colSpan={1}>Product Name</th>
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
    </>
);
