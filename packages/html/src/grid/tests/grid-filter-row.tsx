import React from 'react';
import ReactDOM from 'react-dom/client';
import { Autocomplete } from '../../autocomplete';
import { Button } from '../../button';
import { ColorPicker } from '../../colorpicker';
import { Combobox } from '../../combobox';
import { DatePicker } from '../../datepicker';
import { DateTimePicker } from '../../datetimepicker';
import { DropdownList } from '../../dropdownlist';
import { NumericTextbox } from '../../numerictextbox';
import { Textbox } from '../../textbox';
import { TimePicker } from '../../timepicker';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <div className="section">
                <div id="grid" className="k-grid k-widget k-grid-display-block k-grid-no-scrollbar">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap k-auto-scrollable">
                            <table>
                                <colgroup>
                                    <col />
                                </colgroup>
                                <thead>
                                    <tr className="k-filter-row">
                                        <th>
                                            <span className="k-filtercell">
                                                <span>
                                                    <ColorPicker />
                                                    <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                    <Button icon="filter-clear" disabled></Button>
                                                </span>
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
            <div></div>

            <div className="section">
                <div id="grid" className="k-grid k-widget k-grid-display-block k-grid-no-scrollbar">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap k-auto-scrollable">
                            <table>
                                <colgroup>
                                    <col />
                                </colgroup>
                                <thead>
                                    <tr className="k-filter-row">
                                        <th>
                                            <span className="k-filtercell">
                                                <span>
                                                    <Autocomplete placeholder="Autocomplete..." />
                                                    <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                    <Button icon="filter-clear" disabled></Button>
                                                </span>
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div id="grid" className="k-grid k-widget k-grid-display-block k-grid-no-scrollbar">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap k-auto-scrollable">
                            <table>
                                <colgroup>
                                    <col />
                                </colgroup>
                                <thead>
                                    <tr className="k-filter-row">
                                        <th>
                                            <span className="k-filtercell">
                                                <span>
                                                    <Combobox placeholder="Combobox..." />
                                                    <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                    <Button icon="filter-clear" disabled></Button>
                                                </span>
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div id="grid" className="k-grid k-widget k-grid-display-block k-grid-no-scrollbar">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap k-auto-scrollable">
                            <table>
                                <colgroup>
                                    <col />
                                </colgroup>
                                <thead>
                                    <tr className="k-filter-row">
                                        <th>
                                            <span className="k-filtercell">
                                                <span>
                                                    <DropdownList placeholder="DropdownList..." />
                                                    <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                    <Button icon="filter-clear" disabled></Button>
                                                </span>
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div id="grid" className="k-grid k-widget k-grid-display-block k-grid-no-scrollbar">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap k-auto-scrollable">
                            <table>
                                <colgroup>
                                    <col />
                                </colgroup>
                                <thead>
                                    <tr className="k-filter-row">
                                        <th>
                                            <span className="k-filtercell">
                                                <span>
                                                    <NumericTextbox placeholder="Numeric..." />
                                                    <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                    <Button icon="filter-clear" disabled></Button>
                                                </span>
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div id="grid" className="k-grid k-widget k-grid-display-block k-grid-no-scrollbar">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap k-auto-scrollable">
                            <table>
                                <colgroup>
                                    <col />
                                </colgroup>
                                <thead>
                                    <tr className="k-filter-row">
                                        <th>
                                            <span className="k-filtercell">
                                                <span>
                                                    <Textbox placeholder="Textbox..." />
                                                    <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                    <Button icon="filter-clear" disabled></Button>
                                                </span>
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div></div>

            <div className="section">
                <div id="grid" className="k-grid k-widget k-grid-display-block k-grid-no-scrollbar">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap k-auto-scrollable">
                            <table>
                                <colgroup>
                                    <col />
                                </colgroup>
                                <thead>
                                    <tr className="k-filter-row">
                                        <th>
                                            <span className="k-filtercell">
                                                <span>
                                                    <DatePicker placeholder="Datepicker..." />
                                                    <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                    <Button icon="filter-clear" disabled></Button>
                                                </span>
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div id="grid" className="k-grid k-widget k-grid-display-block k-grid-no-scrollbar">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap k-auto-scrollable">
                            <table>
                                <colgroup>
                                    <col />
                                </colgroup>
                                <thead>
                                    <tr className="k-filter-row">
                                        <th>
                                            <span className="k-filtercell">
                                                <span>
                                                    <TimePicker placeholder="TimePicker..." />
                                                    <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                    <Button icon="filter-clear" disabled></Button>
                                                </span>
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div id="grid" className="k-grid k-widget k-grid-display-block k-grid-no-scrollbar">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap k-auto-scrollable">
                            <table>
                                <colgroup>
                                    <col />
                                </colgroup>
                                <thead>
                                    <tr className="k-filter-row">
                                        <th>
                                            <span className="k-filtercell">
                                                <span>
                                                    <DateTimePicker placeholder="DateTimePicker..." />
                                                    <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                    <Button icon="filter-clear" disabled></Button>
                                                </span>
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
);
