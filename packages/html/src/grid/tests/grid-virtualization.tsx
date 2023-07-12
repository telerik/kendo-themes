import { Skeleton } from "../../skeleton";

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span className="col-2">Grid with Virtualization</span>

            <section className="col-2">
                <div className="k-grid k-grid-md k-grid-virtual" style={{ height: "220px", width: "500px" }} >
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-grid-header-table k-table k-table-md">
                                <colgroup>
                                    <col style={{ width: "110px" }} />
                                    <col style={{ width: "110px" }} />
                                    <col style={{ width: "110px" }} />
                                    <col style={{ width: "110px" }} />
                                    <col style={{ width: "110px" }} />
                                    <col style={{ width: "110px" }} />
                                    <col style={{ width: "110px" }} />
                                    <col style={{ width: "110px" }} />
                                    <col style={{ width: "110px" }} />
                                    <col style={{ width: "110px" }} />
                                </colgroup>

                                <thead className="k-table-thead" >
                                    <tr className="k-table-row">
                                        <th className="k-header k-touch-action-none k-table-th ">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Field 1</span>
                                                </span>
                                            </span>
                                            <span className="k-column-resizer k-touch-action-none"></span>
                                        </th>
                                        <th className="k-header k-touch-action-none k-table-th ">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Field 2</span>
                                                </span>
                                            </span>
                                            <span className="k-column-resizer k-touch-action-none"></span>
                                        </th>
                                        <th className="k-header k-touch-action-none k-table-th">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Field 3</span>
                                                </span>
                                            </span>
                                            <span className="k-column-resizer k-touch-action-none"></span>
                                        </th>
                                        <th className="k-header k-touch-action-none k-table-th">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Field 4</span>
                                                </span>
                                            </span>
                                            <span className="k-column-resizer k-touch-action-none"></span>
                                        </th>
                                        <th className="k-header k-touch-action-none k-table-th ">

                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Field 5</span>
                                                </span>
                                            </span>
                                            <span className="k-column-resizer k-touch-action-none"></span>
                                        </th>
                                        <th className="k-header k-touch-action-none k-table-th">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Field 6</span>
                                                </span>
                                            </span>
                                            <span className="k-column-resizer k-touch-action-none"></span>
                                        </th>
                                        <th className="k-header k-touch-action-none k-table-th ">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Field 7</span>
                                                </span>
                                            </span>
                                            <span className="k-column-resizer k-touch-action-none"></span>
                                        </th>
                                        <th className="k-header k-touch-action-none k-table-th ">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Field 8</span>
                                                </span>
                                            </span>
                                            <span className="k-column-resizer k-touch-action-none"></span>
                                        </th>
                                        <th className="k-header k-touch-action-none k-table-th ">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Field 9</span>
                                                </span>
                                            </span>
                                            <span className="k-column-resizer k-touch-action-none"></span>
                                        </th>
                                        <th className="k-header k-touch-action-none k-table-th ">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Field 10</span>
                                                </span>
                                            </span>
                                            <span className="k-column-resizer k-touch-action-none"></span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>

                    <div className="k-grid-container">
                        <div className="k-grid-content k-virtual-scroller">
                            <div className="k-virtual-scroller-wrap">
                                <div className="k-virtual-scroller-content" style={{ transform: "translateY(-600px)" }}>
                                    <table data-role="grid" className="k-grid-table k-table k-table-md" style={{ height: "auto" }}>
                                        <colgroup>
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                        </colgroup>
                                        <tbody className="k-table-tbody" >
                                            <tr className="k-master-row k-table-row " style={{ height: "60px" }}>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                            </tr>
                                            <tr className="k-master-row k-table-row k-alt k-table-alt-row" style={{ height: "60px" }}>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                            </tr>
                                            <tr className="k-master-row k-table-row " style={{ height: "60px" }}>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                            </tr>
                                            <tr className="k-master-row k-table-row k-alt k-table-alt-row" style={{ height: "60px" }}>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                            </tr>
                                            <tr className="k-master-row k-table-row " style={{ height: "60px" }}>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                            </tr>
                                            <tr className="k-master-row k-table-row k-alt k-table-alt-row" style={{ height: "60px" }}>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                            </tr>
                                            <tr className="k-master-row k-table-row " style={{ height: "60px" }}>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                            </tr>
                                            <tr className="k-master-row k-table-row k-alt k-table-alt-row" style={{ height: "60px" }}>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                            </tr>
                                            <tr className="k-master-row k-table-row " style={{ height: "60px" }}>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                            </tr>
                                            <tr className="k-master-row k-table-row k-alt k-table-alt-row" style={{ height: "60px" }}>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                            </tr>
                                            <tr className="k-master-row k-table-row" style={{ height: "60px" }}>
                                                <td className="k-table-td">Row: 1, Col: 1</td>
                                                <td className="k-table-td">Row: 1, Col: 2</td>
                                                <td className="k-table-td">Row: 1, Col: 3</td>
                                                <td className="k-table-td">Row: 1, Col: 4</td>
                                                <td className="k-table-td">Row: 1, Col: 5</td>
                                                <td className="k-table-td">Row: 1, Col: 6</td>
                                                <td className="k-table-td">Row: 1, Col: 7</td>
                                                <td className="k-table-td">Row: 1, Col: 8</td>
                                                <td className="k-table-td">Row: 1, Col: 9</td>
                                                <td className="k-table-td">Row: 1, Col: 10</td>
                                            </tr>
                                            <tr className="k-master-row k-table-row k-alt k-table-alt-row" style={{ height: "60px" }}>
                                                <td className="k-table-td">Row: 2, Col: 1</td>
                                                <td className="k-table-td">Row: 2, Col: 2</td>
                                                <td className="k-table-td">Row: 2, Col: 3</td>
                                                <td className="k-table-td">Row: 2, Col: 4</td>
                                                <td className="k-table-td">Row: 2, Col: 5</td>
                                                <td className="k-table-td">Row: 2, Col: 6</td>
                                                <td className="k-table-td">Row: 2, Col: 7</td>
                                                <td className="k-table-td">Row: 2, Col: 8</td>
                                                <td className="k-table-td">Row: 2, Col: 9</td>
                                                <td className="k-table-td">Row: 2, Col: 10</td>
                                            </tr>
                                            <tr className="k-master-row k-table-row" style={{ height: "60px" }}>
                                                <td className="k-table-td">Row: 3, Col: 1</td>
                                                <td className="k-table-td">Row: 3, Col: 2</td>
                                                <td className="k-table-td">Row: 3, Col: 3</td>
                                                <td className="k-table-td">Row: 3, Col: 4</td>
                                                <td className="k-table-td">Row: 3, Col: 5</td>
                                                <td className="k-table-td">Row: 3, Col: 6</td>
                                                <td className="k-table-td">Row: 3, Col: 7</td>
                                                <td className="k-table-td">Row: 3, Col: 8</td>
                                                <td className="k-table-td">Row: 3, Col: 9</td>
                                                <td className="k-table-td">Row: 3, Col: 10</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="k-virtual-scroller-size" style={{ height: "30000px" }}></div>
                        </div>
                    </div>
                </div>
            </section>

            <span className="col-2">Grid with Virtualization RTL</span>

            <section className="col-2">
                <div className="k-grid k-grid-md k-grid-virtual" dir="rtl" style={{ height: "220px", width: "500px" }} >
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-grid-header-table k-table k-table-md">
                                <colgroup>
                                    <col style={{ width: "110px" }} />
                                    <col style={{ width: "110px" }} />
                                    <col style={{ width: "110px" }} />
                                    <col style={{ width: "110px" }} />
                                    <col style={{ width: "110px" }} />
                                    <col style={{ width: "110px" }} />
                                    <col style={{ width: "110px" }} />
                                    <col style={{ width: "110px" }} />
                                    <col style={{ width: "110px" }} />
                                    <col style={{ width: "110px" }} />
                                </colgroup>

                                <thead className="k-table-thead" >
                                    <tr className="k-table-row">
                                        <th className="k-header k-touch-action-none k-table-th ">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Field 1</span>
                                                </span>
                                            </span>
                                            <span className="k-column-resizer k-touch-action-none"></span>
                                        </th>
                                        <th className="k-header k-touch-action-none k-table-th ">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Field 2</span>
                                                </span>
                                            </span>
                                            <span className="k-column-resizer k-touch-action-none"></span>
                                        </th>
                                        <th className="k-header k-touch-action-none k-table-th">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Field 3</span>
                                                </span>
                                            </span>
                                            <span className="k-column-resizer k-touch-action-none"></span>
                                        </th>
                                        <th className="k-header k-touch-action-none k-table-th">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Field 4</span>
                                                </span>
                                            </span>
                                            <span className="k-column-resizer k-touch-action-none"></span>
                                        </th>
                                        <th className="k-header k-touch-action-none k-table-th ">

                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Field 5</span>
                                                </span>
                                            </span>
                                            <span className="k-column-resizer k-touch-action-none"></span>
                                        </th>
                                        <th className="k-header k-touch-action-none k-table-th">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Field 6</span>
                                                </span>
                                            </span>
                                            <span className="k-column-resizer k-touch-action-none"></span>
                                        </th>
                                        <th className="k-header k-touch-action-none k-table-th ">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Field 7</span>
                                                </span>
                                            </span>
                                            <span className="k-column-resizer k-touch-action-none"></span>
                                        </th>
                                        <th className="k-header k-touch-action-none k-table-th ">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Field 8</span>
                                                </span>
                                            </span>
                                            <span className="k-column-resizer k-touch-action-none"></span>
                                        </th>
                                        <th className="k-header k-touch-action-none k-table-th ">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Field 9</span>
                                                </span>
                                            </span>
                                            <span className="k-column-resizer k-touch-action-none"></span>
                                        </th>
                                        <th className="k-header k-touch-action-none k-table-th ">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Field 10</span>
                                                </span>
                                            </span>
                                            <span className="k-column-resizer k-touch-action-none"></span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>

                    <div className="k-grid-container">
                        <div className="k-grid-content k-virtual-scroller">
                            <div className="k-virtual-scroller-wrap">
                                <div className="k-virtual-scroller-content" style={{ transform: "translateY(-600px)" }}>
                                    <table data-role="grid" className="k-grid-table k-table k-table-md" style={{ height: "auto" }}>
                                        <colgroup>
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                        </colgroup>
                                        <tbody className="k-table-tbody" >
                                            <tr className="k-master-row k-table-row " style={{ height: "60px" }}>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                            </tr>
                                            <tr className="k-master-row k-table-row k-alt k-table-alt-row" style={{ height: "60px" }}>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                            </tr>
                                            <tr className="k-master-row k-table-row " style={{ height: "60px" }}>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                            </tr>
                                            <tr className="k-master-row k-table-row k-alt k-table-alt-row" style={{ height: "60px" }}>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                            </tr>
                                            <tr className="k-master-row k-table-row " style={{ height: "60px" }}>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                            </tr>
                                            <tr className="k-master-row k-table-row k-alt k-table-alt-row" style={{ height: "60px" }}>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                            </tr>
                                            <tr className="k-master-row k-table-row " style={{ height: "60px" }}>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                            </tr>
                                            <tr className="k-master-row k-table-row k-alt k-table-alt-row" style={{ height: "60px" }}>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                            </tr>
                                            <tr className="k-master-row k-table-row " style={{ height: "60px" }}>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                            </tr>
                                            <tr className="k-master-row k-table-row k-alt k-table-alt-row" style={{ height: "60px" }}>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                                <td className="k-table-td ">
                                                    <Skeleton animation={false} />
                                                </td>
                                            </tr>
                                            <tr className="k-master-row k-table-row" style={{ height: "60px" }}>
                                                <td className="k-table-td">Row: 1, Col: 1</td>
                                                <td className="k-table-td">Row: 1, Col: 2</td>
                                                <td className="k-table-td">Row: 1, Col: 3</td>
                                                <td className="k-table-td">Row: 1, Col: 4</td>
                                                <td className="k-table-td">Row: 1, Col: 5</td>
                                                <td className="k-table-td">Row: 1, Col: 6</td>
                                                <td className="k-table-td">Row: 1, Col: 7</td>
                                                <td className="k-table-td">Row: 1, Col: 8</td>
                                                <td className="k-table-td">Row: 1, Col: 9</td>
                                                <td className="k-table-td">Row: 1, Col: 10</td>
                                            </tr>
                                            <tr className="k-master-row k-table-row k-alt k-table-alt-row" style={{ height: "60px" }}>
                                                <td className="k-table-td">Row: 2, Col: 1</td>
                                                <td className="k-table-td">Row: 2, Col: 2</td>
                                                <td className="k-table-td">Row: 2, Col: 3</td>
                                                <td className="k-table-td">Row: 2, Col: 4</td>
                                                <td className="k-table-td">Row: 2, Col: 5</td>
                                                <td className="k-table-td">Row: 2, Col: 6</td>
                                                <td className="k-table-td">Row: 2, Col: 7</td>
                                                <td className="k-table-td">Row: 2, Col: 8</td>
                                                <td className="k-table-td">Row: 2, Col: 9</td>
                                                <td className="k-table-td">Row: 2, Col: 10</td>
                                            </tr>
                                            <tr className="k-master-row k-table-row" style={{ height: "60px" }}>
                                                <td className="k-table-td">Row: 3, Col: 1</td>
                                                <td className="k-table-td">Row: 3, Col: 2</td>
                                                <td className="k-table-td">Row: 3, Col: 3</td>
                                                <td className="k-table-td">Row: 3, Col: 4</td>
                                                <td className="k-table-td">Row: 3, Col: 5</td>
                                                <td className="k-table-td">Row: 3, Col: 6</td>
                                                <td className="k-table-td">Row: 3, Col: 7</td>
                                                <td className="k-table-td">Row: 3, Col: 8</td>
                                                <td className="k-table-td">Row: 3, Col: 9</td>
                                                <td className="k-table-td">Row: 3, Col: 10</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="k-virtual-scroller-size" style={{ height: "30000px" }}></div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
);
