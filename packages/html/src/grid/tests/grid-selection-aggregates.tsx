import { Pager } from '../../pager';
import { SkeletonNormal } from '../../skeleton';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span className="col-2">Grid with selection aggregates container</span>
            <section className="col-2">
                <div className="k-grid k-grid-md k-grid-no-scrollbar">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-md k-grid-header-table">
                                <colgroup>
                                    <col style={{ width: "100px" }} />
                                    <col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">100px</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">no width</span>
                                                </span>
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-content">
                        <table className="k-table k-table-md k-grid-table">
                            <colgroup>
                                <col style={{ width: "100px" }} />
                                <col />
                            </colgroup>
                            <tbody className="k-table-tbody">
                                <tr className="k-table-row">
                                    <td className="k-table-td">1</td>
                                    <td className="k-table-td">Row</td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-alt">
                                    <td className="k-table-td k-selected">2</td>
                                    <td className="k-table-td k-selected">Alt row</td>
                                </tr>
                                <tr className="k-table-row">
                                    <td className="k-table-td k-selected">3</td>
                                    <td className="k-table-td">
                                        This text continues to the end of the grid to test overflow behavior of row contents, as well as line height and vertical alignment.
                                    </td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-alt">
                                    <td className="k-table-td k-selected">4</td>
                                    <td className="k-table-td"><SkeletonNormal animation={false} /></td>
                                </tr>
                                <tr className="k-table-row">
                                    <td className="k-table-td">5</td>
                                    <td className="k-table-td"><SkeletonNormal animation={false} /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="k-selection-aggregates k-grid-selection-aggregates">
                        <div className="k-selection-aggregates-item">
                            <span className="k-selection-aggregates-item-text">Sum: </span>
                            <span className="k-selection-aggregates-item-value">9.00</span>
                        </div>
                        <div className="k-selection-aggregates-item">
                            <span className="k-selection-aggregates-item-text">Avg: </span>
                            <span className="k-selection-aggregates-item-value">3.00</span>
                        </div>
                        <div className="k-selection-aggregates-item">
                            <span className="k-selection-aggregates-item-text">Min: </span>
                            <span className="k-selection-aggregates-item-value">2.00</span>
                        </div>
                        <div className="k-selection-aggregates-item">
                            <span className="k-selection-aggregates-item-text">Max: </span>
                            <span className="k-selection-aggregates-item-value">4.00</span>
                        </div>
                        <div className="k-selection-aggregates-item">
                            <span className="k-selection-aggregates-item-text">Count: </span>
                            <span className="k-selection-aggregates-item-value">4</span>
                        </div>
                    </div>
                    <Pager className="k-grid-pager" />
                </div>
            </section>

            <span className="col-2">Grid with selection aggregates container (RTL)</span>
            <section className="col-2 k-rtl">
                <div className="k-grid k-grid-md k-grid-no-scrollbar">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-md k-grid-header-table">
                                <colgroup>
                                    <col style={{ width: "100px" }} />
                                    <col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">100px</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">no width</span>
                                                </span>
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-content">
                        <table className="k-table k-table-md k-grid-table">
                            <colgroup>
                                <col style={{ width: "100px" }} />
                                <col />
                            </colgroup>
                            <tbody className="k-table-tbody">
                                <tr className="k-table-row">
                                    <td className="k-table-td">1</td>
                                    <td className="k-table-td">Row</td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-alt">
                                    <td className="k-table-td k-selected">2</td>
                                    <td className="k-table-td k-selected">Alt row</td>
                                </tr>
                                <tr className="k-table-row">
                                    <td className="k-table-td k-selected">3</td>
                                    <td className="k-table-td">
                                        This text continues to the end of the grid to test overflow behavior of row contents, as well as line height and vertical alignment.
                                    </td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-alt">
                                    <td className="k-table-td k-selected">4</td>
                                    <td className="k-table-td"><SkeletonNormal animation={false} /></td>
                                </tr>
                                <tr className="k-table-row">
                                    <td className="k-table-td">5</td>
                                    <td className="k-table-td"><SkeletonNormal animation={false} /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="k-selection-aggregates k-grid-selection-aggregates">
                        <div className="k-selection-aggregates-item">
                            <span className="k-selection-aggregates-item-text">Sum: </span>
                            <span className="k-selection-aggregates-item-value">9.00</span>
                        </div>
                        <div className="k-selection-aggregates-item">
                            <span className="k-selection-aggregates-item-text">Avg: </span>
                            <span className="k-selection-aggregates-item-value">3.00</span>
                        </div>
                        <div className="k-selection-aggregates-item">
                            <span className="k-selection-aggregates-item-text">Min: </span>
                            <span className="k-selection-aggregates-item-value">2.00</span>
                        </div>
                        <div className="k-selection-aggregates-item">
                            <span className="k-selection-aggregates-item-text">Max: </span>
                            <span className="k-selection-aggregates-item-value">4.00</span>
                        </div>
                        <div className="k-selection-aggregates-item">
                            <span className="k-selection-aggregates-item-text">Count: </span>
                            <span className="k-selection-aggregates-item-value">4</span>
                        </div>
                    </div>
                    <Pager className="k-grid-pager" dir="rtl" />
                </div>
            </section>

        </div>
    </>
);
