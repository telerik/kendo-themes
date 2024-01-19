import { Icon } from '../../icon';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <section>
                <div className="k-grid k-grid-md k-grid-no-scrollbar" style={{ width: "600px", height: "400px" }}>
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-md k-grid-header-table">
                                <colgroup>
                                    <col className="k-hierarchy-col" /><col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th k-header k-hierarchy-cell">
                                        </th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Title</span>
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
                                <col className="k-hierarchy-col" /><col />
                            </colgroup>
                            <tbody className="k-table-tbody">
                                <tr className="k-table-row k-master-row">
                                    <td className="k-table-td k-hierarchy-cell">
                                        <Icon icon="caret-alt-right" />
                                    </td>
                                    <td className="k-table-td">1</td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-alt k-master-row k-expanded">
                                    <td className="k-table-td k-hierarchy-cell">
                                        <Icon icon="caret-alt-down" />
                                    </td>
                                    <td className="k-table-td">2</td>
                                </tr>
                                <tr className="k-table-row k-detail-row">
                                    <td className="k-table-td k-hierarchy-cell"></td>
                                    <td className="k-table-td k-detail-cell" colSpan={1}>
                                        {/* hierarchy child content */}
                                        <div className="k-grid k-grid-md k-grid-no-scrollbar" style={{ height: "200px" }}>
                                            <div className="k-grid-header">
                                                <div className="k-grid-header-wrap">
                                                    <table className="k-table k-table-md k-grid-header-table">
                                                        <colgroup>
                                                            <col /><col />
                                                        </colgroup>
                                                        <thead className="k-table-thead">
                                                            <tr className="k-table-row">
                                                                <th className="k-table-th k-header">
                                                                    <span className="k-cell-inner">
                                                                        <span className="k-link">
                                                                            <span className="k-column-title">Title</span>
                                                                        </span>
                                                                    </span>
                                                                </th>
                                                                <th className="k-table-th k-header">
                                                                    <span className="k-cell-inner">
                                                                        <span className="k-link">
                                                                            <span className="k-column-title">Title</span>
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
                                                        <col /><col />
                                                    </colgroup>
                                                    <tbody className="k-table-tbody">
                                                        <tr className="k-table-row k-master-row">
                                                            <td className="k-table-td">Text</td>
                                                            <td className="k-table-td">Text</td>
                                                        </tr>
                                                        <tr className="k-table-row k-table-alt-row k-alt k-master-row">
                                                            <td className="k-table-td">Text</td>
                                                            <td className="k-table-td">Text</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

        </div>
    </>
);
