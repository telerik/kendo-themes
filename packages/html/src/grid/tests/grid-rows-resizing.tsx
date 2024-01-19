import { Button } from '../../button';
import { Toolbar } from '../../toolbar';
import { Searchbox } from '../../searchbox';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span className="col-2">Resizing Row / Hover</span>

            <section className="col-2">
                <div className="k-grid k-grid-md k-grid-display-block">
                    <Toolbar className="k-grid-toolbar">
                        <Button className="k-toolbar-button" icon="plus">Add new record</Button>
                        <span className="k-spacer"></span>
                        <Searchbox className="k-grid-search" placeholder="Search..."/>
                    </Toolbar>
                    <div className="k-grid-header" style={{ padding: "0" }}>
                        <div className="k-grid-header-wrap k-auto-scrollable">
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
                                                    <span className="k-column-title">Header Cell</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Header Cell</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Header Cell</span>
                                                </span>
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-content k-auto-scrollable" style={{ overflowY: "visible" }}>
                        <table className="k-table k-table-md k-grid-table">
                            <colgroup>
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <tbody className="k-table-tbody">
                                <tr className="k-table-row k-master-row k-hover">
                                    <td className="k-table-td">Grid Cell</td>
                                    <td className="k-table-td" style={{ whiteSpace: "nowrap" }}>Grid Cell with loooooong text that spans on multiple rows</td>
                                    <td className="k-table-td k-command-cell">
                                        <Button themeColor="primary">Edit</Button>
                                        <Button>Remove</Button>
                                    </td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-master-row k-alt">
                                    <td className="k-table-td">Grid Cell</td>
                                    <td className="k-table-td">Grid Cell</td>
                                    <td className="k-table-td k-command-cell">
                                        <Button themeColor="primary">Edit</Button>
                                        <Button>Remove</Button>
                                    </td>
                                </tr>
                                <tr className="k-table-row k-master-row">
                                    <td className="k-table-td">Grid Cell</td>
                                    <td className="k-table-td">Grid Cell</td>
                                    <td className="k-table-td k-command-cell">
                                        <Button themeColor="primary">Edit</Button>
                                        <Button>Remove</Button>
                                    </td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-master-row k-alt">
                                    <td className="k-table-td">Grid Cell</td>
                                    <td className="k-table-td">Grid Cell</td>
                                    <td className="k-table-td k-command-cell">
                                        <Button themeColor="primary">Edit</Button>
                                        <Button>Remove</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <span className="k-resizer-wrap k-hover" style={{ top: "34px" }}>
                            <span className="k-row-resizer"></span>
                        </span>
                    </div>
                </div>
            </section>

            <span className="col-2">Resizing Row / Drag</span>

            <section className="col-2">
                <div className="k-grid k-grid-md k-grid-display-block">
                    <Toolbar className="k-grid-toolbar">
                        <Button className="k-toolbar-button" icon="plus">Add new record</Button>
                        <span className="k-spacer"></span>
                        <Searchbox className="k-grid-search" placeholder="Search..."/>
                    </Toolbar>
                    <div className="k-grid-header" style={{ padding: "0" }}>
                        <div className="k-grid-header-wrap k-auto-scrollable">
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
                                                    <span className="k-column-title">Header Cell</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Header Cell</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Header Cell</span>
                                                </span>
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-content k-auto-scrollable" style={{ overflowY: "visible" }}>
                        <table className="k-table k-table-md k-grid-table">
                            <colgroup>
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <tbody className="k-table-tbody">
                                <tr className="k-table-row k-master-row k-hover">
                                    <td className="k-table-td">Grid Cell</td>
                                    <td className="k-table-td" style={{ whiteSpace: "unset" }}>Grid Cell with loooooong text that spans on multiple rows</td>
                                    <td className="k-table-td k-command-cell">
                                        <Button themeColor="primary">Edit</Button>
                                        <Button>Remove</Button>
                                    </td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-master-row k-alt">
                                    <td className="k-table-td">Grid Cell</td>
                                    <td className="k-table-td">Grid Cell</td>
                                    <td className="k-table-td k-command-cell">
                                        <Button themeColor="primary">Edit</Button>
                                        <Button>Remove</Button>
                                    </td>
                                </tr>
                                <tr className="k-table-row k-master-row">
                                    <td className="k-table-td">Grid Cell</td>
                                    <td className="k-table-td">Grid Cell</td>
                                    <td className="k-table-td k-command-cell">
                                        <Button themeColor="primary">Edit</Button>
                                        <Button>Remove</Button>
                                    </td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-master-row k-alt">
                                    <td className="k-table-td">Grid Cell</td>
                                    <td className="k-table-td">Grid Cell</td>
                                    <td className="k-table-td k-command-cell">
                                        <Button themeColor="primary">Edit</Button>
                                        <Button>Remove</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <span className="k-resizer-wrap k-active" style={{ top: "54px" }}>
                            <span className="k-row-resizer"></span>
                        </span>
                    </div>
                </div>
            </section>
        </div>
    </>
);
