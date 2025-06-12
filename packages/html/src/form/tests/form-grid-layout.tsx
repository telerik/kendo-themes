import { CheckboxWithLabelAfter } from '../../checkbox';
import { DropdownList } from '../../dropdownlist';
import { Fieldset, FormField, FormGridLayout } from '../../form';
import { RadioButton } from '../../radio';
import { Textbox } from '../../textbox';

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

            <span>Form Grid Layout</span>
            <span></span>

            <section>
                <FormGridLayout cols={2} gapX={4} gapY={3}>
                    <Fieldset legend="Form Legend" layout="grid" cols={1} gapY={3}>
                        <FormField label="Label" editor={<Textbox />} />
                        <FormField
                            label="Label"
                            hint="Hint text"
                            editor={<DropdownList value="Dropdown List" />}
                        />
                        <FormField
                            label="Radio List"
                            editor={
                                <ul className="k-radio-list k-list-horizontal">
                                    <li className="k-radio-list-item">
                                        <RadioButton checked={true} />
                                        <label className="k-radio-label">Label</label>
                                    </li>
                                    <li className="k-radio-list-item">
                                        <RadioButton />
                                        <label className="k-radio-label">Label</label>
                                    </li>
                                    <li className="k-radio-list-item">
                                        <RadioButton />
                                        <label className="k-radio-label">Label</label>
                                    </li>
                                </ul>
                            }
                        />
                    </Fieldset>
                    <Fieldset legend="Form Legend" layout="grid" cols={2} gapX={4} gapY={3}>
                        <FormField label="Label" editor={<Textbox />} />
                        <FormField
                            label="Label"
                            editor={<DropdownList value="Dropdown List" />}
                        />
                        <FormField
                            label="Checkbox"
                            editor={
                                <CheckboxWithLabelAfter checked >Checked</CheckboxWithLabelAfter>
                            }
                        />
                    </Fieldset>
                        <Fieldset legend="Form Legend" layout="grid" cols={2} gapX={4} gapY={3} colSpan={2}>
                            <FormField label="Label" editor={<Textbox />} />
                            <FormField
                                label="Label"
                                hint="Hint text"
                                editor={<DropdownList value="Dropdown List" />}
                            />
                            <FormField colSpan={2}
                                label="Radio List"
                                editor={
                                    <ul className="k-radio-list k-list-horizontal">
                                        <li className="k-radio-list-item">
                                            <RadioButton checked={true} />
                                            <label className="k-radio-label">Label</label>
                                        </li>
                                        <li className="k-radio-list-item">
                                            <RadioButton />
                                            <label className="k-radio-label">Label</label>
                                        </li>
                                        <li className="k-radio-list-item">
                                            <RadioButton />
                                            <label className="k-radio-label">Label</label>
                                        </li>
                                        <li className="k-radio-list-item">
                                            <RadioButton />
                                            <label className="k-radio-label">Label</label>
                                        </li>
                                        <li className="k-radio-list-item">
                                            <RadioButton />
                                            <label className="k-radio-label">Label</label>
                                        </li>
                                    </ul>
                                }
                            />
                    </Fieldset>
                </FormGridLayout>
            </section>
        </div>
    </>
);
