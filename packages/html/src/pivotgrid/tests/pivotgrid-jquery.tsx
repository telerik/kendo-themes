import React from 'react';
import ReactDOM from 'react-dom/client';
import { Chip, ChipAction } from '../../chip';
import { Icon } from '../../icon';
import { Toolbar } from '../../toolbar';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
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
                                    <div className="k-grid k-grid-md k-alt" style={{ height: "363px" }}>
                                        <table>
                                            <colgroup>
                                                <col />
                                            </colgroup>
                                            <tbody>
                                                <tr>
                                                    <td className="k-first"><Icon name="expand" /><span>All Geographies</span></td>
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
                                                <table style={{ width: "199%" }}>
                                                    <colgroup>
                                                        <col />
                                                        <col />
                                                        <col />
                                                        <col />
                                                        <col />
                                                    </colgroup>
                                                    <tbody>
                                                        <tr>
                                                            <th className="k-header" colSpan={4}><Icon name="collapse" /><span>All Periods</span></th>
                                                            <th className="k-header k-alt" colSpan={1} rowSpan={2}><span>All Periods</span></th>
                                                        </tr>
                                                        <tr>
                                                            <th className="k-header"><Icon name="expand" /><span>CY 2005</span></th>
                                                            <th className="k-header"><Icon name="expand" /><span>CY 2006</span></th>
                                                            <th className="k-header"><Icon name="expand" /><span>CY 2007</span></th>
                                                            <th className="k-header"><Icon name="expand" /><span>CY 2008</span></th>
                                                        </tr>
                                                        <tr>
                                                            <th className="k-header"><Icon name="expand" /><span>All Products</span></th>
                                                            <th className="k-header"><Icon name="expand" /><span>All Products</span></th>
                                                            <th className="k-header"><Icon name="expand" /><span>All Products</span></th>
                                                            <th className="k-header"><Icon name="expand" /><span>All Products</span></th>
                                                            <th className="k-header"><Icon name="expand" /><span>All Products</span></th>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="k-grid-content" style={{ height: "380px" }}>
                                            <table style={{ width: "199%" }}>
                                                <colgroup>
                                                    <col />
                                                    <col />
                                                    <col />
                                                    <col />
                                                    <col />
                                                </colgroup>
                                                <tbody>
                                                    <tr>
                                                        <td>$201,635.92</td>
                                                        <td>$603,610.94</td>
                                                        <td>$805,067.19</td>
                                                        <td>$400,951.86</td>
                                                        <td className="k-alt">$2,011,265.92</td>
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
