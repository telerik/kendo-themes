import { Chip, ChipAction } from '../../chip';
import { Icon } from '../../icon';
import { Toolbar } from '../../toolbar';


export default () =>(
    <>
        <div id="test-area">

            <div className="hidden-on-narrow k-widget k-pivot" style={{ height: "580px" }}>
                <table className="k-pivot-layout">
                    <tbody>
                        <tr>
                            <td>
                                <div className="k-pivot-rowheaders" style={{ width: "163px" }}>
                                    <Toolbar className="k-pivot-toolbar k-settings-measures k-pivot-setting" style={{ height: "72px" }}>
                                        <Chip
                                            text="[Measures].[Reseller Freight Cost]"
                                            actions={
                                                <>
                                                    <ChipAction type="more"/>
                                                    <ChipAction type="remove"/>
                                                </>
                                            }
                                        />
                                    </Toolbar>
                                    <Toolbar className="k-pivot-toolbar k-settings-rows k-pivot-setting" style={{ height: "94px" }}>
                                        <Chip
                                            text="[Geography].[City]"
                                            actions={
                                                <>
                                                    <ChipAction type="more"/>
                                                    <ChipAction type="remove"/>
                                                </>
                                            }
                                        />
                                    </Toolbar>
                                    <div className="k-grid k-grid-md" style={{ height: "363px" }}>
                                        <table className="k-table k-table-md">
                                            <colgroup>
                                                <col />
                                            </colgroup>
                                            <tbody className="k-table-tbody">
                                                <tr className="k-table-row">
                                                    <td className="k-table-td k-first"><Icon icon="caret-alt-right" /><span>All Geographies</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="k-pivot-table">
                                    <Toolbar className="k-pivot-toolbar k-settings-columns k-pivot-setting" style={{ height: "72px" }}>
                                        <Chip
                                            text="[Date].[Calendar]"
                                            actions={
                                                <>
                                                    <ChipAction type="more"/>
                                                    <ChipAction type="remove"/>
                                                </>
                                            }
                                        />
                                        <Chip
                                            text="[Product].[Category]"
                                            actions={
                                                <>
                                                    <ChipAction type="more"/>
                                                    <ChipAction type="remove"/>
                                                </>
                                            }
                                        />
                                    </Toolbar>
                                    <div className="k-grid k-grid-md">
                                        <div className="k-grid-header">
                                            <div className="k-grid-header-wrap" style={{ height: "110px" }}>
                                                <table className="k-table k-table-md k-grid-header-table" style={{ width: "199%" }}>
                                                    <colgroup>
                                                        <col />
                                                        <col />
                                                        <col />
                                                        <col />
                                                        <col />
                                                    </colgroup>
                                                    <tbody className="k-table-tbody">
                                                        <tr className="k-table-row">
                                                            <th className="k-table-th k-header" colSpan={4}>
                                                                <span className="k-cell-inner">
                                                                    <span className="k-link">
                                                                        <Icon icon="caret-alt-down" />
                                                                        <span className="k-column-title">All Periods</span>
                                                                    </span>
                                                                </span>
                                                            </th>
                                                            <th className="k-table-th k-header" colSpan={1} rowSpan={2}>
                                                                <span className="k-cell-inner">
                                                                    <span className="k-link">
                                                                        <span className="k-column-title">All Periods</span>
                                                                    </span>
                                                                </span>
                                                            </th>
                                                        </tr>
                                                        <tr className="k-table-row">
                                                            <th className="k-table-th k-header">
                                                                <span className="k-cell-inner">
                                                                    <span className="k-link">
                                                                        <Icon icon="caret-alt-right" />
                                                                        <span className="k-column-title">CY 2005</span>
                                                                    </span>
                                                                </span>
                                                            </th>
                                                            <th className="k-table-th k-header">
                                                                <span className="k-cell-inner">
                                                                    <span className="k-link">
                                                                        <Icon icon="caret-alt-right" />
                                                                        <span className="k-column-title">CY 2006</span>
                                                                    </span>
                                                                </span>
                                                            </th>
                                                            <th className="k-table-th k-header">
                                                                <span className="k-cell-inner">
                                                                    <span className="k-link">
                                                                        <Icon icon="caret-alt-right" />
                                                                        <span className="k-column-title">CY 2007</span>
                                                                    </span>
                                                                </span>
                                                            </th>
                                                            <th className="k-table-th k-header">
                                                                <span className="k-cell-inner">
                                                                    <span className="k-link">
                                                                        <Icon icon="caret-alt-right" />
                                                                        <span className="k-column-title">CY 2008</span>
                                                                    </span>
                                                                </span>
                                                            </th>
                                                        </tr>
                                                        <tr className="k-table-row">
                                                            <th className="k-table-th k-header">
                                                                <span className="k-cell-inner">
                                                                    <span className="k-link">
                                                                        <Icon icon="caret-alt-right" />
                                                                        <span className="k-column-title">All Products</span>
                                                                    </span>
                                                                </span>
                                                            </th>
                                                            <th className="k-table-th k-header">
                                                                <span className="k-cell-inner">
                                                                    <span className="k-link">
                                                                        <Icon icon="caret-alt-right" />
                                                                        <span className="k-column-title">All Products</span>
                                                                    </span>
                                                                </span>
                                                            </th>
                                                            <th className="k-table-th k-header">
                                                                <span className="k-cell-inner">
                                                                    <span className="k-link">
                                                                        <Icon icon="caret-alt-right" />
                                                                        <span className="k-column-title">All Products</span>
                                                                    </span>
                                                                </span>
                                                            </th>
                                                            <th className="k-table-th k-header">
                                                                <span className="k-cell-inner">
                                                                    <span className="k-link">
                                                                        <Icon icon="caret-alt-right" />
                                                                        <span className="k-column-title">All Products</span>
                                                                    </span>
                                                                </span>
                                                            </th>
                                                            <th className="k-table-th k-header">
                                                                <span className="k-cell-inner">
                                                                    <span className="k-link">
                                                                        <Icon icon="caret-alt-right" />
                                                                        <span className="k-column-title">All Products</span>
                                                                    </span>
                                                                </span>
                                                            </th>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="k-grid-content" style={{ height: "380px" }}>
                                            <table className="k-table k-table-md k-grid-table" style={{ width: "199%" }}>
                                                <colgroup>
                                                    <col />
                                                    <col />
                                                    <col />
                                                    <col />
                                                    <col />
                                                </colgroup>
                                                <tbody className="k-table-tbody">
                                                    <tr className="k-table-row">
                                                        <td className="k-table-td">$201,635.92</td>
                                                        <td className="k-table-td">$603,610.94</td>
                                                        <td className="k-table-td">$805,067.19</td>
                                                        <td className="k-table-td">$400,951.86</td>
                                                        <td className="k-table-td">$2,011,265.92</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </>
);
