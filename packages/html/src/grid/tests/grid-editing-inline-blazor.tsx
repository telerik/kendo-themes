import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Textbox } from '../../textbox';
import { Toolbar } from '../../toolbar';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid">
            <h3>Edit Row</h3>
            <div className="k-grid k-grid-md telerik-blazor">
                <Toolbar className="k-grid-toolbar">
                    <Button icon="plus">Add</Button>
                </Toolbar>
                <div className="k-grid-header">
                    <div className="k-grid-header-wrap">
                        <table className="k-table k-table-md k-grid-header-table" role="grid">
                            <colgroup>
                                <col style={{ width: "65px" }} />
                                <col />
                                <col />
                            </colgroup>
                            <thead className="k-table-thead">
                                <tr className="k-table-row">
                                    <th className="k-table-th k-header" colSpan={1}>
                                        <Checkbox />
                                    </th>
                                    <th className="k-table-th k-header" colSpan={1}>
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Name</span>
                                            </span>
                                        </span>
                                    </th>
                                    <th className="k-table-th k-header" colSpan={1}>
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Command</span>
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
                        <div style={{ position: "relative" }}>
                            <div className="k-virtual-position">
                                <table role="grid" className="k-table k-table-md k-grid-table" style={{ height: 'auto' }}>
                                    <colgroup>
                                        <col style={{ width: "65px" }} />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody className="k-table-tbody">
                                        <tr className="k-table-row k-master-row k-grid-edit-row">
                                            <td className="k-table-td" colSpan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </td>
                                            <td className="k-table-td k-grid-edit-cell" colSpan={0}>
                                                <Textbox />
                                            </td>
                                            <td className="k-table-td k-command-cell" colSpan={0}>
                                                <span className="k-d-flex k-gap-1">
                                                    <Button icon="save">Update</Button>
                                                    <Button icon="cancel">Cancel</Button>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-master-row k-alt">
                                            <td className="k-table-td" colSpan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </td>
                                            <td className="k-table-td" colSpan={0}>
                                                Product2
                                            </td>
                                            <td className="k-table-td k-command-cell" colSpan={0}>
                                                <span className="k-d-flex k-gap-1">
                                                    <Button icon="pencil">Edit</Button>
                                                    <Button icon="trash">Delete</Button>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="k-height-container">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <h3>New Row</h3>
            <div className="k-grid k-grid-md telerik-blazor">
                <Toolbar className="k-grid-toolbar">
                    <Button icon="plus">Add</Button>
                </Toolbar>
                <div className="k-grid-header">
                    <div className="k-grid-header-wrap">
                        <table className="k-table k-table-md k-grid-header-table" role="grid">
                            <colgroup>
                                <col style={{ width: "65px" }} />
                                <col />
                                <col />
                            </colgroup>
                            <thead className="k-table-thead">
                                <tr className="k-table-row">
                                    <th className="k-table-th k-header" colSpan={1}>
                                        <Checkbox />
                                    </th>
                                    <th className="k-table-th k-header" colSpan={1}>
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Name</span>
                                            </span>
                                        </span>
                                    </th>
                                    <th className="k-table-th k-header" colSpan={1}>
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Command</span>
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
                        <div style={{ position: "relative" }}>
                            <div className="k-virtual-position">
                                <table role="grid" className="k-table k-table-md k-grid-table" style={{ height: 'auto' }}>
                                    <colgroup>
                                        <col style={{ width: "65px" }} />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody className="k-table-tbody">
                                        <tr className="k-table-row k-master-row k-grid-add-row k-grid-edit-row">
                                            <td className="k-table-td" colSpan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </td>
                                            <td className="k-table-td k-grid-edit-cell" colSpan={0}>
                                                <Textbox />
                                            </td>
                                            <td className="k-table-td k-command-cell" colSpan={0}>
                                                <span className="k-d-flex k-gap-1">
                                                    <Button icon="save">Update</Button>
                                                    <Button icon="cancel">Cancel</Button>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="k-table-row k-master-row">
                                            <td className="k-table-td" colSpan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </td>
                                            <td className="k-table-td" colSpan={0}>
                                                Product1
                                            </td>
                                            <td className="k-table-td k-command-cell" colSpan={0}>
                                                <span className="k-d-flex k-gap-1">
                                                    <Button icon="pencil">Edit</Button>
                                                    <Button icon="trash">Delete</Button>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-master-row k-alt">
                                            <td className="k-table-td" colSpan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </td>
                                            <td className="k-table-td" colSpan={0}>
                                                Product2
                                            </td>
                                            <td className="k-table-td k-command-cell" colSpan={0}>
                                                <span className="k-d-flex k-gap-1">
                                                    <Button icon="pencil">Edit</Button>
                                                    <Button icon="trash">Delete</Button>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="k-height-container">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
