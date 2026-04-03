import { Fieldset, Form, FormField } from "..";
import { Button } from "../../button";
import { DropdownList } from "../../dropdownlist";
import { RadioButton } from "../../radio";
import { Textbox } from "../../textbox";

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
                        editor={<DropdownList value="Dropdown List" size={size} aria-label="Label" />}
                    />
                    <FormField
                        label="City"
                        editor={
                            <ul className="k-radio-list k-list-horizontal">
                                <li className="k-radio-list-item">
                                    <RadioButton defaultChecked size={size} />
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
