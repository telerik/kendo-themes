import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { NumericTextbox } from '../../numerictextbox';
import { Textbox } from '../../textbox';
import { Toolbar } from '../../toolbar';
import { TooltipNormal } from '../../tooltip';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid">

            <div className="k-grid k-grid-md k-grid-no-scrollbar">
                <Toolbar className="k-grid-toolbar">
                    <Button>Add new</Button>
                    <Button>Save Changes</Button>
                    <Button>Cancel Changes</Button>
                </Toolbar>
                <div className="k-grid-aria-root">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-md k-grid-header-table">
                                <colgroup>
                                    <col /><col /><col /><col style={{ width: "300px" }} />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Name</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Price</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Available</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header"></th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-container">
                        <div className="k-grid-content">
                            <div>
                                <table className="k-table k-table-md k-grid-table">
                                    <colgroup>
                                        <col /><col /><col /><col style={{ width: "300px" }} />
                                    </colgroup>
                                    <tbody className="k-table-tbody">
                                        <tr className="k-table-row k-grid-add-row k-grid-edit-row">
                                            <td className="k-table-td">
                                                <Textbox value="Towel" />
                                            </td>
                                            <td className="k-table-td">
                                                <NumericTextbox value="42" />
                                            </td>
                                            <td className="k-table-td"><Checkbox /></td>
                                            <td className="k-table-td k-command-cell">
                                                <Button>Add</Button>
                                                <Button>Cancel</Button>
                                            </td>
                                        </tr>
                                        <tr className="k-table-row">
                                            <td className="k-table-td">Chai</td>
                                            <td className="k-table-td">18</td>
                                            <td className="k-table-td">false</td>
                                            <td className="k-table-td k-command-cell">
                                                <Button>Remove</Button>
                                            </td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-alt">
                                            <td className="k-table-td">Chang</td>
                                            <td className="k-table-td">19</td>
                                            <td className="k-table-td">false</td>
                                            <td className="k-table-td k-command-cell">
                                                <Button>Remove</Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="k-grid k-grid-md k-grid-no-scrollbar">
                <Toolbar className="k-grid-toolbar">
                    <Button icon="plus">Add new record</Button>
                </Toolbar>
                <div className="k-grid-header">
                    <div className="k-grid-header-wrap">
                        <table className="k-table k-table-md k-grid-header-table">
                            <colgroup>
                                <col /><col /><col /><col style={{ width: "300px" }} />
                            </colgroup>
                            <thead className="k-table-thead">
                                <tr className="k-table-row">
                                    <th scope="col" className="k-table-th k-header">
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Name</span>
                                            </span>
                                        </span>
                                    </th>
                                    <th scope="col" className="k-table-th k-header">
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Price</span>
                                            </span>
                                        </span>
                                    </th>
                                    <th scope="col" className="k-table-th k-header">
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Available</span>
                                            </span>
                                        </span>
                                    </th>
                                    <th scope="col" className="k-table-th k-header">&nbsp;</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <div className="k-grid-content">
                    <table className="k-table k-table-md k-grid-table" style={{ height: 'auto' }}>
                        <colgroup>
                            <col /><col /><col /><col style={{ width: "300px" }} />
                        </colgroup>
                        <tbody className="k-table-tbody">
                            <tr className="k-table-row k-grid-edit-row">
                                <td className="k-table-td">
                                    <Textbox value="Towel" required />
                                </td>
                                <td className="k-table-td">
                                    <NumericTextbox invalid />
                                    <TooltipNormal className="k-validator-tooltip k-invalid-msg"
                                        themeColor="error"
                                        callout="top"
                                        icon="exclamation-circle"
                                        content="Price"
                                    />
                                </td>
                                <td className="k-table-td"><Checkbox id="e77452cd-b3b5-4dc9-8210-17007584b695" /><label className="k-checkbox-label" htmlFor="e77452cd-b3b5-4dc9-8210-17007584b695"></label></td>
                                <td className="k-table-td k-command-cell">
                                    <Button icon="check" themeColor="primary">Update</Button>
                                    <Button icon="cancel">Cancel</Button>
                                </td>
                            </tr>
                            <tr className="k-table-row k-table-alt-row k-alt k-grid-edit-row">
                                <td className="k-table-td k-dirty-cell">
                                    <span className="k-dirty"></span>
                                    LongSingleWordTestLongSingleWordTestLongSingleWordTestLongSingleWordTest
                                </td>
                                <td className="k-table-td">18</td>
                                <td className="k-table-td">false</td>
                                <td className="k-table-td k-command-cell">
                                    <Button icon="pencil">Edit</Button>
                                    <Button icon="x">Delete</Button>
                                </td>
                            </tr>
                            <tr className="k-table-row">
                                <td className="k-table-td">Chang</td>
                                <td className="k-table-td">19</td>
                                <td className="k-table-td">false</td>
                                <td className="k-table-td k-command-cell">
                                    <Button icon="pencil">Edit</Button>
                                    <Button icon="x">Delete</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
);
