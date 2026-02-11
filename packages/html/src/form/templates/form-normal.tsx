import { Fieldset } from '../fieldset';
import { Form } from '../form.spec';
import { FormField } from '../form-field';
import { Button } from "../../button/button.spec";
import { DropdownList } from "../../dropdownlist/dropdownlist.spec";
import { RadioButton } from "../../radio/radio.spec";
import { Textbox } from "../../textbox/textbox.spec";

export const FormNormal = (props: any) => {
    const { size, children, ...other } = props;
    return (
        <Form
            formButtons={
                <>
                    <Button className="k-form-submit" themeColor="primary" size={size}>Submit</Button>
                    <Button className="k-form-clear" size={size}>Clear</Button>
                </>
            }
            size={size}
            {...other}
        >
            { children ||
                <Fieldset legend="Form Legend">
                    <FormField label="Label" editor={<Textbox size={size} />} />
                    <FormField
                        label="Label"
                        hint="Hint text"
                        editor={<DropdownList value="Dropdown List" size={size} />}
                    />
                    <FormField
                        label="City"
                        editor={
                            <ul className="k-radio-list k-list-horizontal">
                                <li className="k-radio-list-item">
                                    <RadioButton checked={true} size={size} />
                                    <label className="k-radio-label">Label</label>
                                </li>
                                <li className="k-radio-list-item">
                                    <RadioButton size={size} />
                                    <label className="k-radio-label">Label</label>
                                </li>
                                <li className="k-radio-list-item">
                                    <RadioButton size={size} />
                                    <label className="k-radio-label">Label</label>
                                </li>
                            </ul>
                        }
                    />
                </Fieldset>
            }
        </Form>
    );
};
