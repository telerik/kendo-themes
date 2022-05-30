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
            <span>Angular Grid with locked columns, Grouping and Multiline headers</span>
            <div dir="rtl" className="k-widget k-grid k-grid-lockedcolumns grid-styling-overrides" style={{ height: "700px" }}>
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
    </>
);
