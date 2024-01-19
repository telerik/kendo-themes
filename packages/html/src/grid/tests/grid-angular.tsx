import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Icon } from '../../icon';
import { Pager } from '../../pager';
import { Popup } from '../../popup';
import { SkeletonNormal } from '../../skeleton';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span className="col-3">Angular grid</span>

            <section className="col-3">
                <div className="k-grid k-grid-md k-grid-no-scrollbar">
                    <div className="k-grid-aria-root">
                        {/* add padding-left or -right for scrollbar width */}
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

                        <div className="k-grid-container">
                            <div className="k-grid-content k-virtual-content">
                                <div>
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
                                                <td className="k-table-td"><SkeletonNormal animation={false}/></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="k-height-container">
                                    {/* set height to scroll height (virtual scrolling) */}
                                    <div style={{ height: '0px' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Pager className="k-grid-pager" />
                </div>
            </section>

            <span className="col-3">Angular -- fixed height, hierarchy, filter menu, sort icon</span>
            <section className="col-3">
                <div className="k-grid k-grid-md k-grid-no-scrollbar" style={{ height: "240px" }}>
                    <div className="k-grid-aria-root">
                        <div className="k-grid-header">
                            <div className="k-grid-header-wrap">
                                <table className="k-table k-table-md k-grid-header-table">
                                    <colgroup>
                                        <col className="k-hierarchy-col" />
                                        <col style={{ width: "80px" }} />
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <thead className="k-table-thead">
                                        <tr className="k-table-row">
                                            <th className="k-table-th k-header k-hierarchy-cell"></th>
                                            <th className="k-table-th k-header"></th>
                                            <th className="k-table-th k-header k-filterable">
                                                <span className="k-cell-inner">
                                                    <span className="k-link">
                                                        <span className="k-column-title">Default</span>
                                                    </span>
                                                    <a className="k-grid-filter-menu k-grid-header-menu">
                                                        <Icon icon="filter" />
                                                    </a>
                                                </span>
                                            </th>
                                            <th className="k-table-th k-header k-filterable">
                                                <span className="k-cell-inner">
                                                    <span className="k-link">
                                                        <span className="k-column-title">Hover</span>
                                                    </span>
                                                    <a className="k-grid-filter-menu k-grid-header-menu">
                                                        <Icon icon="filter" />
                                                    </a>
                                                </span>
                                            </th>
                                            <th className="k-table-th k-header k-filterable k-focus">
                                                <span className="k-cell-inner">
                                                    <span className="k-link">
                                                        <span className="k-column-title">Focus</span>
                                                    </span>
                                                    <a className="k-grid-filter-menu k-grid-header-menu">
                                                        <Icon icon="filter" />
                                                    </a>
                                                </span>
                                            </th>
                                            <th className="k-table-th k-header k-filterable">
                                                <span className="k-cell-inner">
                                                    <span className="k-link">
                                                        <span className="k-column-title">Active</span>
                                                    </span>
                                                    <a className="k-grid-filter-menu k-grid-header-menu k-active">
                                                        <Icon icon="filter" />
                                                    </a>
                                                </span>
                                            </th>
                                            <th className="k-table-th k-header k-filterable k-sorted">
                                                <span className="k-cell-inner">
                                                    <span className="k-link">
                                                        <span className="k-column-title">Sorted</span>
                                                        <span className="k-sort-icon">
                                                            <Icon icon="sort-asc-small" />
                                                        </span>
                                                    </span>
                                                    <a className="k-grid-filter-menu k-grid-header-menu">
                                                        <Icon icon="filter" />
                                                    </a>
                                                </span>
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                        <div className="k-grid-container">
                            <div className="k-grid-content k-virtual-content">
                                <div>
                                    <table className="k-table k-table-md k-grid-table">
                                        <colgroup>
                                            <col className="k-hierarchy-col" />
                                            <col style={{ width: "80px" }} />
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                        </colgroup>
                                        <tbody className="k-table-tbody">
                                            <tr className="k-table-row k-master-row k-expanded">
                                                <td className="k-table-td k-hierarchy-cell"><Icon icon="minus" /></td>
                                                <td className="k-table-td"><Checkbox /><label className="k-checkbox-label"></label></td>
                                                <td className="k-table-td">1</td>
                                                <td className="k-table-td">Text</td>
                                                <td className="k-table-td">Text</td>
                                                <td className="k-table-td">Text</td>
                                                <td className="k-table-td">Text</td>
                                            </tr>
                                            <tr className="k-table-row k-detail-row">
                                                <td className="k-table-td k-hierarchy-cell"></td>
                                                <td className="k-table-td k-detail-cell" colSpan={6}>
                                                    {/* hierarchy child content */}
                                                    <div style={{ padding: "10px" }}>
                                                        Nested content
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="k-table-row k-table-alt-row k-alt k-master-row">
                                                <td className="k-table-td k-hierarchy-cell">
                                                    <Icon icon="plus" />
                                                </td>
                                                <td className="k-table-td"><Checkbox /><label className="k-checkbox-label"></label></td>
                                                <td className="k-table-td">2</td>
                                                <td className="k-table-td">Text</td>
                                                <td className="k-table-td">Text</td>
                                                <td className="k-table-td">Text</td>
                                                <td className="k-table-td">Text</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="k-height-container">
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <span className="col-3">Angular -- standalone column chooser</span>
            <section className="col-2">
                <div className="k-grid k-grid-md">
                    <div className="k-toolbar k-grid-toolbar">
                        <div className="k-spacer"></div>
                        <div className="k-grid-column-chooser">
                            <Button fillMode="flat" icon="columns"></Button>
                        </div>
                    </div>
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-md k-grid-header-table">
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Product</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Unit Price</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Qty Per Unit</span>
                                                </span>
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-container">
                        <div className="k-grid-content k-virtual-content">
                            <div className="k-grid-table-wrap">
                                <table className="k-table k-table-md k-grid-table">
                                    <colgroup>
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody className="k-table-tbody">
                                        <tr className="k-table-row k-master-row k-expanded">
                                            <td className="k-table-td">Chai</td>
                                            <td className="k-table-td">18</td>
                                            <td className="k-table-td">10 boxes x 20 bags</td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-alt k-master-row">
                                            <td className="k-table-td">Chang</td>
                                            <td className="k-table-td">19</td>
                                            <td className="k-table-td">24 - 12 oz bottles</td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-alt k-master-row">
                                            <td className="k-table-td">Aniseed Syrup</td>
                                            <td className="k-table-td">20</td>
                                            <td className="k-table-td">24 - 12 oz bottles</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="k-height-container">
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="col-1">
                <Popup>
                    <span className="k-column-chooser-title">Columns</span>
                    <div className="k-column-list-wrapper">
                        <div className="k-column-list">
                            <label className="k-column-list-item">
                                <Checkbox />
                                <span className="k-checkbox-label">ID</span>
                            </label>
                            <label className="k-column-list-item">
                                <Checkbox />
                                <span className="k-checkbox-label">Name</span>
                            </label>
                            <label className="k-column-list-item">
                                <Checkbox />
                                <span className="k-checkbox-label">Category</span>
                            </label>
                        </div>
                        <ActionButtons>
                            <Button>Reset</Button>
                            <Button themeColor="primary">Apply</Button>
                        </ActionButtons>
                    </div>
                </Popup>
            </section>

        </div>
    </>
);
