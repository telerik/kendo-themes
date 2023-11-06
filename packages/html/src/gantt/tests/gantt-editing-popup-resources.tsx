import { WindowNormal } from '../../window';
import { NumericTextbox } from '../../numerictextbox';
import { DropdownList } from '../../dropdownlist';
import { Toolbar } from '../../toolbar';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Icon } from '../../icon';


const styles = `
    .k-window {
        min-width: 580px;
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <WindowNormal title="Edit task" actionButtons={
                    <>
                        <Button icon="save" themeColor="primary">Save</Button>
                        <Button icon="cancel">Cancel</Button>
                        <span className="k-spacer"></span>
                        <Button icon="trash" fillMode="flat" themeColor="primary">Delete</Button>
                    </>
                }>
                    <div className="k-tabstrip k-tabstrip-top">
                        <div className="k-tabstrip-items-wrapper k-hstack">
                            <ul className="k-reset k-tabstrip-items">
                                <li className="k-item k-first">
                                    <span className="k-link">General</span>
                                </li>
                                <li className="k-item k-active">
                                    <span className="k-link">Resources</span>
                                </li>
                                <li className="k-item">
                                    <span className="k-link">Predecessors</span>
                                </li>
                                <li className="k-item k-last">
                                    <span className="k-link">Successors</span>
                                </li>
                            </ul>
                        </div>
                        <div className="k-tabstrip-content k-active">
                            <div className="k-grid k-grid-md k-grid-no-scrollbar">
                                <Toolbar className="k-grid-toolbar">
                                    <Button icon="plus">Add</Button>
                                    <Button icon="minus">Remove</Button>
                                </Toolbar>
                                <div className="k-grid-header">
                                    <div className="k-grid-header-wrap">
                                        <table className="k-table k-table-md k-grid-header-table">
                                            <colgroup>
                                                <col style={{ width: "42px" }}/>
                                                <col/>
                                                <col/>
                                            </colgroup>
                                            <thead className="k-table-thead">
                                                <tr className="k-table-row">
                                                    <th className="k-table-th k-header">
                                                        <span className="k-checkbox-wrap">
                                                            <Checkbox />
                                                        </span>
                                                        <label className="k-checkbox-label"></label>
                                                    </th>
                                                    <th className="k-table-th k-header k-filterable">
                                                        <span className="k-cell-inner">
                                                            <span className="k-link">
                                                                <span className="k-column-title">Resources</span>
                                                                <span className="k-sort-icon"><Icon icon="sort-asc-small" /></span>
                                                            </span>
                                                            <div><a href="#" className="k-grid-filter-menu k-grid-header-menu"><Icon icon="filter" /></a></div>
                                                        </span>
                                                    </th>
                                                    <th className="k-table-th k-header k-filterable">
                                                        <span className="k-cell-inner">
                                                            <span className="k-link">
                                                                <span className="k-column-title">Units</span>
                                                                <span className="k-sort-icon"><Icon icon="sort-asc-small" /></span>
                                                            </span>
                                                            <div><a href="#" className="k-grid-filter-menu k-grid-header-menu"><Icon icon="filter" /></a></div>
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
                                            <col style={{ width: "42px" }}/>
                                            <col/>
                                            <col/>
                                        </colgroup>
                                        <tbody className="k-table-tbody">
                                            <tr className="k-table-row">
                                                <td className="k-table-td">
                                                    <span className="k-checkbox-wrap">
                                                        <Checkbox />
                                                        <label className="k-checkbox-label"></label>
                                                    </span>
                                                </td>
                                                <td className="k-table-td">
                                                    <DropdownList placeholder="-Select resource-"/>
                                                </td>
                                                <td className="k-table-td">
                                                    <NumericTextbox value="40"/>
                                                </td>
                                            </tr>
                                            <tr className="k-table-row k-table-alt-row k-alt">
                                                <td className="k-table-td">
                                                    <span className="k-checkbox-wrap">
                                                        <Checkbox />
                                                        <label className="k-checkbox-label"></label>
                                                    </span>
                                                </td>
                                                <td className="k-table-td">Grid Cell</td>
                                                <td className="k-table-td">Grid Cell</td>
                                            </tr>
                                            <tr className="k-table-row">
                                                <td className="k-table-td">
                                                    <span className="k-checkbox-wrap">
                                                        <Checkbox />
                                                        <label className="k-checkbox-label"></label>
                                                    </span>
                                                </td>
                                                <td className="k-table-td">Grid Cell</td>
                                                <td className="k-table-td">Grid Cell</td>
                                            </tr>
                                            <tr className="k-table-row k-table-alt-row k-alt">
                                                <td className="k-table-td">
                                                    <span className="k-checkbox-wrap">
                                                        <Checkbox />
                                                        <label className="k-checkbox-label"></label>
                                                    </span>
                                                </td>
                                                <td className="k-table-td">Grid Cell</td>
                                                <td className="k-table-td">Grid Cell</td>
                                            </tr>
                                            <tr className="k-table-row">
                                                <td className="k-table-td">
                                                    <span className="k-checkbox-wrap">
                                                        <Checkbox />
                                                        <label className="k-checkbox-label"></label>
                                                    </span>
                                                </td>
                                                <td className="k-table-td">Grid Cell</td>
                                                <td className="k-table-td">Grid Cell</td>
                                            </tr>
                                            <tr className="k-table-row k-table-alt-row k-alt">
                                                <td className="k-table-td">
                                                    <span className="k-checkbox-wrap">
                                                        <Checkbox />
                                                        <label className="k-checkbox-label"></label>
                                                    </span>
                                                </td>
                                                <td className="k-table-td">Grid Cell</td>
                                                <td className="k-table-td">Grid Cell</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </WindowNormal>
            </section>

        </div>
    </>
);
