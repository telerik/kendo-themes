import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Textbox } from '../../textbox';
import { Toolbar } from '../../toolbar';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid">
            <h3>Edit Row</h3>
            <div dir="ltr" className="k-grid k-grid-md">
                <Toolbar className="k-grid-toolbar">
                    <Button icon="plus">Add</Button>
                </Toolbar>
                <div className="k-grid-aria-root" role="grid">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-md k-grid-header-table">
                                <colgroup>
                                    <col style={{ width: '50px' }} />
                                    <col />
                                    <col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th k-header" rowSpan={1} colSpan={1}><Checkbox /></th>
                                        <th className="k-table-th k-header" rowSpan={1} colSpan={1}>
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Name</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header" rowSpan={1} colSpan={1}>
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
                            <div className="k-grid-table-wrap">
                                <table className="k-table k-table-md k-grid-table">
                                    <colgroup>
                                        <col style={{ width: '50px' }} />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody className="k-table-tbody">
                                        <tr className="k-table-row k-grid-edit-row" role="row">
                                            <td className="k-table-td k-touch-action-auto" colSpan={1}><Checkbox /></td>
                                            <td className="k-table-td k-touch-action-auto" colSpan={1}>
                                                <Textbox />
                                            </td>
                                            <td className="k-table-td k-touch-action-auto k-command-cell" colSpan={1}>
                                                <Button>Update</Button>
                                                <Button>Cancel</Button>
                                            </td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-alt">
                                            <td className="k-table-td k-touch-action-auto" colSpan={1}><Checkbox /></td>
                                            <td className="k-table-td k-touch-action-auto" colSpan={1}>Product2</td>
                                            <td className="k-table-td k-touch-action-auto k-command-cell" colSpan={1}>
                                                <Button>Edit</Button>
                                                <Button>Remove</Button>
                                            </td>
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
            <h3>New Row</h3>
            <div dir="ltr" className="k-grid k-grid-md">
                <Toolbar className="k-grid-toolbar">
                    <Button icon="plus">Add</Button>
                </Toolbar>
                <div className="k-grid-aria-root" role="grid">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-md k-grid-header-table">
                                <colgroup>
                                    <col style={{ width: '50px' }} />
                                    <col />
                                    <col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th k-header" rowSpan={1} colSpan={1}><Checkbox /></th>
                                        <th className="k-table-th k-header" rowSpan={1} colSpan={1}>
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Name</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header" rowSpan={1} colSpan={1}>
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
                            <div className="k-grid-table-wrap">
                                <table className="k-table k-table-md k-grid-table">
                                    <colgroup>
                                        <col style={{ width: '50px' }} />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody className="k-table-tbody">
                                        <tr className="k-table-row k-grid-add-row k-grid-edit-row" role="row">
                                            <td className="k-table-td" colSpan={1}></td>
                                            <td className="k-table-td" colSpan={1}>
                                                <Textbox />
                                            </td>
                                            <td className="k-table-td k-command-cell" colSpan={1}>
                                                <Button>Add</Button>
                                                <Button>Discard changes</Button>
                                            </td>
                                        </tr>
                                        <tr className="k-table-row">
                                            <td className="k-table-td k-touch-action-auto" colSpan={1}><Checkbox /></td>
                                            <td className="k-table-td k-touch-action-auto" colSpan={1}>Product1</td>
                                            <td className="k-table-td k-touch-action-auto k-command-cell" colSpan={1}>
                                                <Button>Edit</Button>
                                                <Button>Remove</Button>
                                            </td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-alt">
                                            <td className="k-table-td k-touch-action-auto" colSpan={1}><Checkbox /></td>
                                            <td className="k-table-td k-touch-action-auto" colSpan={1}>Product2</td>
                                            <td className="k-table-td k-touch-action-auto k-command-cell" colSpan={1}>
                                                <Button>Edit</Button>
                                                <Button>Remove</Button>
                                            </td>
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
        </div>
    </>
);
