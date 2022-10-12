import React from 'react';
import ReactDOM from 'react-dom/client';
import { Autocomplete } from '../../autocomplete';
import { Chip, ChipAction } from '../../chip';
import { Combobox } from '../../combobox';
import { DropdownList } from '../../dropdownlist';
import { MultiSelect } from '../../multiselect';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    section {
        padding: 20px;
        border: 1px dashed gray;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Vertical Form (Angular)</span>
            <span>Horizontal Form (Angular)</span>

            <section>
                <form className="k-form k-form-md k-form-vertical">

                    <div className="k-form-field">
                        <label className="k-label">AutoComplete:</label>
                        <div>
                            <Autocomplete placeholder="Autocomplete..." />
                        </div>
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">ComboBox:</label>
                        <div>
                            <Combobox placeholder="Combobox..." />
                        </div>
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">DropDownList:</label>
                        <div>
                            <DropdownList placeholder="DropdownList..." />
                        </div>
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">MultiSelect:</label>
                        <div>
                            <MultiSelect
                                tags={(
                                    <Chip text="Female" actions={ <ChipAction type="remove"/> } />
                                )}
                            />
                        </div>
                    </div>

                </form>
            </section>


            <section>
                <form className="k-form k-form-md k-form-horizontal">

                    <div className="k-form-field">
                        <label className="k-label">AutoComplete:</label>
                        <div className="k-form-field-wrap">
                            <Autocomplete placeholder="Autocomplete..." />
                        </div>
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">ComboBox:</label>
                        <div className="k-form-field-wrap">
                            <Combobox placeholder="Combobox..." />
                        </div>
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">DropDownList:</label>
                        <div className="k-form-field-wrap">
                            <DropdownList placeholder="DropdownList..." />
                        </div>
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">MultiSelect:</label>
                        <div className="k-form-field-wrap">
                            <MultiSelect
                                tags={(
                                    <Chip text="Female" actions={ <ChipAction type="remove"/> } />
                                )}
                            />
                        </div>
                    </div>

                </form>
            </section>

        </div>
    </>
);
