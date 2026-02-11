import { Autocomplete } from '../../autocomplete/autocomplete.spec';
import { Chip } from '../../chip/chip.spec';
import { ChipAction } from '../../chip/chip-action';
import { Combobox } from '../../combobox/combobox.spec';
import { DropdownList } from '../../dropdownlist/dropdownlist.spec';
import { MultiSelect } from '../../multiselect/multiselect.spec';
import { FormField } from '../../form/form-field';
import { FormNormal } from '../../form/templates/form-normal';
import { FormHorizontal } from '../../form/templates/form-horizontal';


const styles = `
    section {
        padding: 20px;
        border: 1px dashed gray;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Vertical Form</span>
            <span>Horizontal Form</span>

            <section>
                <FormNormal
                    formButtons={null}
                >
                    <FormField
                        label="AutoComplete:"
                        editor={
                            <Autocomplete placeholder="Autocomplete..." />
                        }
                    >
                    </FormField>

                    <FormField
                        label="ComboBox:"
                        editor={
                            <Combobox placeholder="Combobox..." />
                        }
                    >
                    </FormField>

                    <FormField
                        label="DropDownList:"
                        editor={
                            <DropdownList placeholder="DropdownList..." />
                        }
                    >
                    </FormField>

                    <FormField
                        label="MultiSelect:"
                        editor={
                            <MultiSelect
                                tags={(
                                    <Chip text="Female" actions={ <ChipAction type="remove"/> } />
                                )}
                            />
                        }
                    >
                    </FormField>
                </FormNormal>
            </section>


            <section>
                <FormHorizontal
                    formButtons={null}
                >
                    <FormField
                        orientation="horizontal"
                        label="AutoComplete:"
                        editor={
                            <Autocomplete placeholder="Autocomplete..." />
                        }
                    >
                    </FormField>

                    <FormField
                        orientation="horizontal"
                        label="ComboBox:"
                        editor={
                            <Combobox placeholder="Combobox..." />
                        }
                    >
                    </FormField>

                    <FormField
                        orientation="horizontal"
                        label="DropDownList:"
                        editor={
                            <DropdownList placeholder="DropdownList..." />
                        }
                    >
                    </FormField>

                    <FormField
                        orientation="horizontal"
                        label="MultiSelect:"
                        editor={
                            <MultiSelect
                                tags={(
                                    <Chip text="Female" actions={ <ChipAction type="remove"/> } />
                                )}
                            />
                        }
                    >
                    </FormField>
                </FormHorizontal>
            </section>

        </div>
    </>
);
