import React from 'react';
import ReactDOM from 'react-dom/client';
import { Autocomplete } from '../../autocomplete';
import { Combobox } from '../../combobox';
import { DateInput } from '../../dateinput';
import { DatePicker } from '../../datepicker';
import { DateTimePicker } from '../../datetimepicker';
import { DropdownList } from '../../dropdownlist';
import { MultiSelect } from '../../multiselect';
import { NumericTextbox } from '../../numerictextbox';
import { Switch } from '../../switch';
import { TimePicker } from '../../timepicker';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid">

            <div className="k-grid k-grid-md k-grid-no-scrollbar">
                <div className="k-grid-aria-root">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-md k-grid-header-table">
                                <colgroup>
                                    <col style={{ width: "68px" }} /><col /><col /><col /><col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th k-header"></th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Autocomplete</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Combobox</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Dropdown</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Multiselect</span>
                                                </span>
                                            </span>
                                        </th>
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
                                        <col style={{ width: "68px" }} /><col /><col /><col /><col />
                                    </colgroup>
                                    <tbody className="k-table-tbody">
                                        <tr className="k-table-row k-grid-edit-row">
                                            <td className="k-table-td">LTR</td>
                                            <td className="k-table-td"><Autocomplete placeholder="Autocomplete..." /></td>
                                            <td className="k-table-td"><Combobox placeholder="Combobox..." /></td>
                                            <td className="k-table-td"><DropdownList placeholder="DropdownList..." /></td>
                                            <td className="k-table-td"><MultiSelect placeholder="Multiselect..." /></td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-alt k-grid-edit-row">
                                            <td className="k-table-td">RTL</td>
                                            <td className="k-table-td"><Autocomplete placeholder="Autocomplete..." className="k-rtl" /></td>
                                            <td className="k-table-td"><Combobox placeholder="Combobox..." className="k-rtl" /></td>
                                            <td className="k-table-td"><DropdownList placeholder="DropdownList..." className="k-rtl" /></td>
                                            <td className="k-table-td"><MultiSelect placeholder="Multiselect..." className="k-rtl" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div >
                </div>
            </div>

            <div className="k-grid k-grid-md k-grid-no-scrollbar">
                <div className="k-grid-aria-root" style={{ overflow: "visible" }}>
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-md k-grid-header-table">
                                <colgroup>
                                    <col style={{ width: "68px" }} /><col /><col /><col /><col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th k-header"></th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Datepicker</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Timepicker</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Datetime</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Dateinput</span>
                                                </span>
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-container" style={{ overflow: "visible" }}>
                        <div className="k-grid-content" style={{ overflow: "visible" }}>
                            <div>
                                <table className="k-table k-table-md k-grid-table">
                                    <colgroup>
                                        <col style={{ width: "68px" }} /><col /><col /><col /><col />
                                    </colgroup>
                                    <tbody className="k-table-tbody">
                                        <tr className="k-table-row k-grid-edit-row">
                                            <td className="k-table-td">LTR</td>
                                            <td className="k-table-td"><DatePicker placeholder="DatePicker..." /></td>
                                            <td className="k-table-td"><TimePicker placeholder="TimePicker..." /></td>
                                            <td className="k-table-td"><DateTimePicker placeholder="DateTimePicker..." /></td>
                                            <td className="k-table-td"><DateInput placeholder="DateInput..." /></td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-alt k-grid-edit-row">
                                            <td className="k-table-td">RTL</td>
                                            <td className="k-table-td"><DatePicker placeholder="DatePicker..." className="k-rtl"/></td>
                                            <td className="k-table-td"><TimePicker placeholder="TimePicker..." className="k-rtl" /></td>
                                            <td className="k-table-td"><DateTimePicker placeholder="DateTimePicker..." className="k-rtl" /></td>
                                            <td className="k-table-td"><DateInput placeholder="DateInput..." className="k-rtl" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div >
                </div>
            </div>

            <div className="k-grid k-grid-md k-grid-no-scrollbar">
                <div className="k-grid-aria-root">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-md k-grid-header-table">
                                <colgroup>
                                    <col style={{ width: "68px" }} /><col /><col /><col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th k-header"></th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Numeric</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Switch</span>
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
                                        <col style={{ width: "68px" }} /><col /><col /><col />
                                    </colgroup>
                                    <tbody className="k-table-tbody">
                                        <tr className="k-table-row k-grid-edit-row">
                                            <td className="k-table-td">LTR</td>
                                            <td className="k-table-td">
                                                <NumericTextbox placeholder="Numeric..." />
                                            </td>
                                            <td className="k-table-td">
                                                <Switch checked />
                                            </td>
                                            <td className="k-table-td"></td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-alt k-grid-edit-row">
                                            <td className="k-table-td">RTL</td>
                                            <td className="k-table-td">
                                                <NumericTextbox placeholder="Numeric..." className="k-rtl" />
                                            </td>
                                            <td className="k-table-td">
                                                <Switch checked className="k-rtl" />
                                            </td>
                                            <td className="k-table-td"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div >
                </div>
            </div>

        </div>
    </>
);
