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

            <div className="k-widget k-grid k-grid-no-scrollbar">
                <div className="k-grid-aria-root">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table>
                                <colgroup>
                                    <col style={{ width: "68px" }} /><col /><col /><col /><col />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th className="k-header"></th>
                                        <th className="k-header">Autocomplete</th>
                                        <th className="k-header">Combobox</th>
                                        <th className="k-header">Dropdown</th>
                                        <th className="k-header">Multiselect</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-container">
                        <div className="k-grid-content">
                            <div>
                                <table className="k-grid-table">
                                    <colgroup>
                                        <col style={{ width: "68px" }} /><col /><col /><col /><col />
                                    </colgroup>
                                    <tbody>
                                        <tr className="k-grid-edit-row">
                                            <td>LTR</td>
                                            <td><Autocomplete placeholder="Autocomplete..." /></td>
                                            <td><Combobox placeholder="Combobox..." /></td>
                                            <td><DropdownList placeholder="DropdownList..." /></td>
                                            <td><MultiSelect placeholder="Multiselect..." /></td>
                                        </tr>
                                        <tr className="k-alt k-grid-edit-row">
                                            <td>RTL</td>
                                            <td><Autocomplete placeholder="Autocomplete..." className="k-rtl" /></td>
                                            <td><Combobox placeholder="Combobox..." className="k-rtl" /></td>
                                            <td><DropdownList placeholder="DropdownList..." className="k-rtl" /></td>
                                            <td><MultiSelect placeholder="Multiselect..." className="k-rtl" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div >
                </div>
            </div>

            <div className="k-widget k-grid k-grid-no-scrollbar">
                <div className="k-grid-aria-root" style={{ overflow: "visible" }}>
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table>
                                <colgroup>
                                    <col style={{ width: "68px" }} /><col /><col /><col /><col />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th className="k-header"></th>
                                        <th className="k-header">Datepicker</th>
                                        <th className="k-header">Timepicker</th>
                                        <th className="k-header">Datetime</th>
                                        <th className="k-header">Dateinput</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-container" style={{ overflow: "visible" }}>
                        <div className="k-grid-content" style={{ overflow: "visible" }}>
                            <div>
                                <table className="k-grid-table">
                                    <colgroup>
                                        <col style={{ width: "68px" }} /><col /><col /><col /><col />
                                    </colgroup>
                                    <tbody>
                                        <tr className="k-grid-edit-row">
                                            <td>LTR</td>
                                            <td><DatePicker placeholder="DatePicker..." /></td>
                                            <td><TimePicker placeholder="TimePicker..." /></td>
                                            <td><DateTimePicker placeholder="DateTimePicker..." /></td>
                                            <td><DateInput placeholder="DateInput..." /></td>
                                        </tr>
                                        <tr className="k-alt k-grid-edit-row">
                                            <td>RTL</td>
                                            <td><DatePicker placeholder="DatePicker..." className="k-rtl"/></td>
                                            <td><TimePicker placeholder="TimePicker..." className="k-rtl" /></td>
                                            <td><DateTimePicker placeholder="DateTimePicker..." className="k-rtl" /></td>
                                            <td><DateInput placeholder="DateInput..." className="k-rtl" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div >
                </div>
            </div>

            <div className="k-widget k-grid k-grid-no-scrollbar">
                <div className="k-grid-aria-root">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table>
                                <colgroup>
                                    <col style={{ width: "68px" }} /><col /><col /><col />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th className="k-header"></th>
                                        <th className="k-header">Numeric</th>
                                        <th className="k-header">Switch</th>
                                        <th className="k-header"></th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-container">
                        <div className="k-grid-content">
                            <div>
                                <table className="k-grid-table">
                                    <colgroup>
                                        <col style={{ width: "68px" }} /><col /><col /><col />
                                    </colgroup>
                                    <tbody>
                                        <tr className="k-grid-edit-row">
                                            <td>LTR</td>
                                            <td>
                                                <NumericTextbox placeholder="Numeric..." />
                                            </td>
                                            <td>
                                                <Switch checked />
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr className="k-alt k-grid-edit-row">
                                            <td>RTL</td>
                                            <td>
                                                <NumericTextbox placeholder="Numeric..." className="k-rtl" />
                                            </td>
                                            <td>
                                                <Switch checked className="k-rtl" />
                                            </td>
                                            <td></td>
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
