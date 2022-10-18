import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Icon } from '../../icon';
import { Pager } from '../../pager';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid">
            <p>React Grid - Sticky columns - RTL</p>
            <div className="k-widget k-grid k-rtl" role="grid" style={{ height: "700px", width: "500px" }}>
                <div className="k-grouping-header k-grouping-header-flex">
                    <div className="k-indicator-container" style={{ touchAction: "none" }}>
                        <div className="k-group-indicator">
                            <a className="k-link" href="#"><Icon name="sort-asc-sm" />shipName</a>
                            <Button fillMode="flat" icon="close"></Button>
                        </div>
                    </div>
                    <div className="k-indicator-container"></div>
                </div>
                <div className="k-grid-header">
                    <div className="k-grid-header-wrap" style={{ borderWidth: '0px' }}>
                        <table style={{ width: "1434px" }}>
                            <colgroup>
                                <col width="32px" />
                                <col width="32px" />
                                <col width="200px" />
                                <col width="300px" />
                                <col width="280px" />
                                <col width="200px" />
                                <col width="300px" />
                                <col width="90px" />
                            </colgroup>
                            <thead>
                                <tr role="row" style={{ touchAction: "none" }}>
                                    <th colSpan={1} rowSpan={1} className="k-header" style={{ left: '0px', right: '0px' }}><a className="k-link"> </a></th>
                                    <th colSpan={1} rowSpan={1} className="k-header k-hierarchy-cell k-header" style={{ left: '0px', right: '0px' }}><a className="k-link"> </a></th>
                                    <th colSpan={1} rowSpan={1} className="k-header k-grid-header-sticky" style={{ left: "90px", right: '0px' }}>
                                        <a className="k-link" href="#">customerID</a>
                                    </th>
                                    <th colSpan={1} rowSpan={1} className="k-header k-sorted">
                                        <a className="k-link" href="#">orderDate<Icon name="sort-desc-sm" /></a>
                                    </th>
                                    <th colSpan={1} rowSpan={1} className="k-header"><a className="k-link" href="#">shipName</a></th>
                                    <th colSpan={1} rowSpan={1} className="k-header"><a className="k-link" href="#">freight</a></th>
                                    <th colSpan={1} rowSpan={1} className="k-header"><a className="k-link" href="#">shippedDate</a></th>
                                    <th colSpan={1} rowSpan={1} className="k-header k-grid-header-sticky" style={{ left: '0px', right: "200px" }}><a className="k-link" href="#">ID</a></th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <div className="k-grid-container">
                    <div className="k-grid-content k-virtual-content">
                        <div style={{ position: "relative" }}>
                            <table className="k-grid-table" style={{ width: "1434px" }}>
                                <colgroup>
                                    <col width="32px" />
                                    <col width="32px" />
                                    <col width="200px" />
                                    <col className="k-sorted" width="300px" />
                                    <col width="280px" />
                                    <col width="200px" />
                                    <col width="300px" />
                                    <col width="90px" />
                                </colgroup>
                                <tbody>
                                    <tr className="k-grouping-row" role="row">
                                        <td colSpan={8} style={{ left: '0px', right: '0px' }}>
                                            <p className="k-reset"><Icon name="collapse" />Lehmanns Marktstand</p>
                                        </td>
                                    </tr>
                                    <tr className="k-master-row" role="row">
                                        <td className="k-group-cell" style={{ left: '0px', right: '0px' }}></td>
                                        <td className="k-hierarchy-cell"><Icon name="plus" /></td>
                                        <td colSpan={1} className="k-grid-content-sticky" style={{ left: "90px", right: '0px' }}>LEHMS</td>
                                        <td colSpan={1}>Saturday, January 13, 1996</td>
                                        <td colSpan={1}>Lehmanns Marktstand</td>
                                        <td colSpan={1}>25.83</td>
                                        <td colSpan={1}>Tuesday, January 16, 1996</td>
                                        <td colSpan={1} className="k-grid-content-sticky" style={{ left: '0px', right: "200px" }}>10279</td>
                                    </tr>
                                    <tr className="k-master-row k-alt" role="row">
                                        <td className="k-group-cell" style={{ left: '0px', right: '0px' }}></td>
                                        <td className="k-hierarchy-cell"><Icon name="plus" /></td>
                                        <td colSpan={1} className="k-grid-content-sticky" style={{ left: "90px", right: '0px' }}>LEHMS</td>
                                        <td colSpan={1}>Saturday, January 13, 1996</td>
                                        <td colSpan={1}>Lehmanns Marktstand</td>
                                        <td colSpan={1}>25.83</td>
                                        <td colSpan={1}>Tuesday, January 16, 1996</td>
                                        <td colSpan={1} className="k-grid-content-sticky" style={{ left: '0px', right: "200px" }}>10279</td>
                                    </tr>
                                    <tr className="k-grouping-row" role="row">
                                        <td colSpan={8} style={{ left: '0px', right: '0px' }}>
                                            <p className="k-reset"><Icon name="collapse" />Split Rail Beer &amp; Ale</p>
                                        </td>
                                    </tr>
                                    <tr className="k-master-row" role="row">
                                        <td className="k-group-cell" style={{ left: '0px', right: '0px' }}></td>
                                        <td className="k-hierarchy-cell"><Icon name="plus" /></td>
                                        <td colSpan={1} className="k-grid-content-sticky" style={{ left: "90px", right: '0px' }}>SPLIR</td>
                                        <td colSpan={1}>Monday, January 1, 1996</td>
                                        <td colSpan={1}>Split Rail Beer &amp; Ale</td>
                                        <td colSpan={1}>4.54</td>
                                        <td colSpan={1}>Tuesday, January 30, 1996</td>
                                        <td colSpan={1} className="k-grid-content-sticky" style={{ left: '0px', right: "200px" }}>10271</td>
                                    </tr>
                                    <tr className="k-master-row k-alt" role="row">
                                        <td className="k-group-cell" style={{ left: '0px', right: '0px' }}></td>
                                        <td className="k-hierarchy-cell"><Icon name="plus" /></td>
                                        <td colSpan={1} className="k-grid-content-sticky" style={{ left: "90px", right: '0px' }}>SPLIR</td>
                                        <td colSpan={1}>Monday, January 1, 1996</td>
                                        <td colSpan={1}>Split Rail Beer &amp; Ale</td>
                                        <td colSpan={1}>4.54</td>
                                        <td colSpan={1}>Tuesday, January 30, 1996</td>
                                        <td colSpan={1} className="k-grid-content-sticky" style={{ left: '0px', right: "200px" }}>10271</td>
                                    </tr>
                                    <tr className="k-grouping-row" role="row">
                                        <td colSpan={8} style={{ left: '0px', right: '0px' }}>
                                            <p className="k-reset"><Icon name="collapse" />Wartian Herkku</p>
                                        </td>
                                    </tr>
                                    <tr className="k-master-row" role="row">
                                        <td className="k-group-cell" style={{ left: '0px', right: '0px' }}></td>
                                        <td className="k-hierarchy-cell"><Icon name="plus" /></td>
                                        <td colSpan={1} className="k-grid-content-sticky" style={{ left: "90px", right: '0px' }}>WARTH</td>
                                        <td colSpan={1}>Friday, January 26, 1996</td>
                                        <td colSpan={1}>Wartian Herkku</td>
                                        <td colSpan={1}>25.73</td>
                                        <td colSpan={1}>Wednesday, January 31, 1996</td>
                                        <td colSpan={1} className="k-grid-content-sticky" style={{ left: '0px', right: "200px" }}>10266</td>
                                    </tr>
                                    <tr className="k-master-row k-alt" role="row">
                                        <td className="k-group-cell" style={{ left: '0px', right: '0px' }}></td>
                                        <td className="k-hierarchy-cell"><Icon name="plus" /></td>
                                        <td colSpan={1} className="k-grid-content-sticky" style={{ left: "90px", right: '0px' }}>WARTH</td>
                                        <td colSpan={1}>Friday, January 26, 1996</td>
                                        <td colSpan={1}>Wartian Herkku</td>
                                        <td colSpan={1}>25.73</td>
                                        <td colSpan={1}>Wednesday, January 31, 1996</td>
                                        <td colSpan={1} className="k-grid-content-sticky" style={{ left: '0px', right: "200px" }}>10266</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="k-height-container"><div></div></div>
                    </div>
                </div>
                <Pager className="k-grid-pager" mobile="small" />
            </div>
        </div>
    </>
);
