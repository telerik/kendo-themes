import { Icon } from '../../icon';
import { Pager } from '../../pager';
import { Skeleton } from '../../skeleton';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <span>jQuery grid</span>
            <section>
                <div className="k-grid k-grid-md k-grid-no-scrollbar" dir="rtl">
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
                                    <td className="k-table-td">2</td>
                                    <td className="k-table-td">Alt row</td>
                                </tr>
                                <tr className="k-table-row">
                                    <td className="k-table-td">3</td>
                                    <td className="k-table-td">
                                        This text continues to the end of the grid to test overflow behavior of row contents, as well as line height and vertical alignment.
                                    </td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-alt">
                                    <td className="k-table-td">4</td>
                                    <td className="k-table-td"><Skeleton animation={false} /></td>
                                </tr>
                                <tr className="k-table-row">
                                    <td className="k-table-td">5</td>
                                    <td className="k-table-td"><Skeleton animation={false} /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <Pager className="k-grid-pager" dir="rtl" />
                </div>
            </section>

            <span>jQuery -- fixed height, hierarchy, filter menu, sort icon</span>
            <section>
                <div className="k-grid k-grid-md k-grid-no-scrollbar" style={{ height: "250px" }} dir="rtl">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-md k-grid-header-table">
                                <colgroup>
                                    <col className="k-hierarchy-col" /><col /><col /><col /><col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th k-header k-hierarchy-cell">
                                        </th>
                                        <th className="k-table-th k-header k-filterable">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Default</span>
                                                </span>
                                                <a href="#" className="k-grid-filter-menu k-grid-header-menu"><Icon icon="filter" /></a>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header k-filterable k-hover">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Hover</span>
                                                </span>
                                                <a href="#" className="k-grid-filter-menu k-grid-header-menu"><Icon icon="filter" /></a>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header k-filterable k-focus">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Focus</span>
                                                </span>
                                                <a href="#" className="k-grid-filter-menu k-grid-header-menu"><Icon icon="filter" /></a>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header k-filterable k-active">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Active</span>
                                                </span>
                                                <a href="#" className="k-grid-filter-menu k-grid-header-menu k-active"><Icon icon="filter" /></a>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header k-filterable k-sorted">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Sorted</span>
                                                    <span className="k-sort-icon"><Icon icon="sort-asc-small" /></span>
                                                </span>
                                                <a href="#" className="k-grid-filter-menu k-grid-header-menu"><Icon icon="filter" /></a>
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
                                <col className="k-hierarchy-col" /><col /><col /><col /><col />
                            </colgroup>
                            <tbody className="k-table-tbody">
                                <tr className="k-table-row k-master-row k-expanded">
                                    <td className="k-table-td k-hierarchy-cell">
                                        <Icon icon="caret-alt-down" />
                                    </td>
                                    <td className="k-table-td">1</td>
                                    <td className="k-table-td">Text</td>
                                    <td className="k-table-td">Text</td>
                                    <td className="k-table-td">Text</td>
                                    <td className="k-table-td">Text</td>
                                </tr>
                                <tr className="k-table-row k-detail-row">
                                    <td className="k-table-td k-hierarchy-cell"></td>
                                    <td className="k-table-td k-detail-cell" colSpan={5}>
                                        {/* hierarchy child content */}
                                        <div style={{ background: "#ccc", padding: "10px" }}>
                                            Nested content
                                        </div>
                                    </td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-alt k-master-row">
                                    <td className="k-table-td k-hierarchy-cell">
                                        <Icon icon="caret-alt-left" />
                                    </td>
                                    <td className="k-table-td">2</td>
                                    <td className="k-table-td">Text</td>
                                    <td className="k-table-td">Text</td>
                                    <td className="k-table-td">Text</td>
                                    <td className="k-table-td">Text</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    </>
);
