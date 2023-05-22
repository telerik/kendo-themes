import { Autocomplete } from '../../autocomplete';
import { Chip, ChipAction } from '../../chip';
import { Combobox } from '../../combobox';
import { DropdownList } from '../../dropdownlist';
import { MultiSelect } from '../../multiselect';
import { Form, FormField } from '../../form';


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
                <Form orientation="vertical">

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

                </Form>
            </section>


            <section>
                <Form orientation="horizontal">

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

                </Form>
            </section>

        </div>
    </>
);
