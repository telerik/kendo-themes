import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { DropdownList } from '../../dropdownlist';
import { NumericTextbox } from '../../numerictextbox';
import { Textbox } from '../../textbox';
import { Toolbar } from '../../toolbar';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid">
            <h3>Base</h3>
            <div dir="ltr" className="k-widget k-grid">
                <div className="k-grid-aria-root" role="grid">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table>
                                <colgroup>
                                    <col style={{ width: '50px' }} />
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <thead>
                                    <tr role="row">
                                        <th className="k-header" rowSpan={1} colSpan={1}><Checkbox /></th>
                                        <th className="k-header" rowSpan={1} colSpan={1}>ID</th>
                                        <th className="k-header" rowSpan={1} colSpan={1}>Name</th>
                                        <th className="k-header" rowSpan={1} colSpan={1}>Command</th>
                                    </tr>
                                    <tr role="row" className="k-filter-row">
                                        <td></td>
                                        <td>
                                            <div className="k-filtercell">
                                                <div className="k-filtercell-wrapper">
                                                    <NumericTextbox />
                                                    <div className="k-filtercell-operator">
                                                        <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                        {' '}
                                                        <Button icon="filter-clear" disabled></Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="k-filtercell">
                                                <div className="k-filtercell-wrapper">
                                                    <Textbox />
                                                    <div className="k-filtercell-operator">
                                                        <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                        {' '}
                                                        <Button icon="filter-clear" disabled></Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td></td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-container">
                        <div className="k-grid-content k-virtual-content">
                            <div className="k-grid-table-wrap">
                                <table className="k-grid-table">
                                    <colgroup>
                                        <col style={{ width: '50px' }} />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody>
                                        <tr role="row">
                                            <td className="k-touch-action-auto" colSpan={1}><Checkbox /></td>
                                            <td className="k-touch-action-auto" colSpan={1}>1</td>
                                            <td className="k-touch-action-auto" colSpan={1}>Product1</td>
                                            <td className="k-touch-action-auto k-command-cell" colSpan={1}><Button icon="trash">Delete</Button></td>
                                        </tr>
                                        <tr className="k-alt" role="row">
                                            <td className="k-touch-action-auto" colSpan={1}><Checkbox /></td>
                                            <td className="k-touch-action-auto" colSpan={1}>2</td>
                                            <td className="k-touch-action-auto" colSpan={1}>Product2</td>
                                            <td className="k-touch-action-auto k-command-cell" colSpan={1}><Button icon="trash">Delete</Button></td>
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
            <h3>With Toolbar</h3>
            <div dir="ltr" className="k-widget k-grid">
                <Toolbar className="k-grid-toolbar">
                    <Button icon="add">Add</Button>
                </Toolbar>
                <div className="k-grid-aria-root" role="grid">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table>
                                <colgroup>
                                    <col style={{ width: '50px' }} />
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <thead>
                                    <tr role="row">
                                        <th className="k-header" rowSpan={1} colSpan={1}><Checkbox /></th>
                                        <th className="k-header" rowSpan={1} colSpan={1}><span className="k-cell-inner"><span className="k-link"><span className="k-column-title">ID</span><span></span></span><span className="k-sort-status" role="status" style={{ position: "absolute", left: "-10000px" }}></span></span></th>
                                        <th className="k-header" rowSpan={1} colSpan={1}><span className="k-cell-inner"><span className="k-link"><span className="k-column-title">Name</span><span></span></span><span className="k-sort-status" role="status" style={{ position: "absolute", left: "-10000px" }}></span></span></th>
                                        <th className="k-header" rowSpan={1} colSpan={1}>Command</th>
                                    </tr>
                                    <tr role="row" className="k-filter-row">
                                        <td></td>
                                        <td>
                                            <div className="k-filtercell">
                                                <div className="k-filtercell-wrapper">
                                                    <NumericTextbox />
                                                    <div className="k-filtercell-operator">
                                                        <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                        {' '}
                                                        <Button icon="filter-clear" disabled></Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="k-filtercell">
                                                <div className="k-filtercell-wrapper">
                                                    <Textbox />
                                                    <div className="k-filtercell-operator">
                                                        <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                        {' '}
                                                        <Button icon="filter-clear" disabled></Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td></td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-container">
                        <div className="k-grid-content k-virtual-content">
                            <div className="k-grid-table-wrap">
                                <table className="k-grid-table">
                                    <colgroup>
                                        <col style={{ width: '50px' }} />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody>
                                        <tr role="row">
                                            <td className="k-touch-action-auto" colSpan={1}><Checkbox /></td>
                                            <td className="k-touch-action-auto" colSpan={1}>1</td>
                                            <td className="k-touch-action-auto" colSpan={1}>Product1</td>
                                            <td className="k-touch-action-auto k-command-cell" colSpan={1}><Button icon="trash">Delete</Button></td>
                                        </tr>
                                        <tr className="k-alt" role="row">
                                            <td className="k-touch-action-auto" colSpan={1}><Checkbox /></td>
                                            <td className="k-touch-action-auto" colSpan={1}>2</td>
                                            <td className="k-touch-action-auto" colSpan={1}>Product2</td>
                                            <td className="k-touch-action-auto k-command-cell" colSpan={1}><Button icon="trash">Delete</Button></td>
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
