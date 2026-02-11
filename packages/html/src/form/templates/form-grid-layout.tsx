import { Fieldset } from '../fieldset';
import { Form } from '../form.spec';
import { FormField } from '../form-field';
import { DropdownList } from "../../dropdownlist/dropdownlist.spec";
import { Textbox } from "../../textbox/textbox.spec";

export const FormGridLayout = (props: any) => {
    const { cols = 2, gutters, children, ...other } = props;
    return (
        <Form layout="grid" cols={cols} gutters={gutters} {...other}>
            { children ||
                <>
                    <Fieldset legend="Form Legend" layout="grid" cols={1} gutters={{rows: "12px"}}>
                        <FormField label="Label" editor={<Textbox />} />
                    </Fieldset>
                    <Fieldset legend="Form Legend" layout="grid" cols={1} gutters={{cols: "16px", rows: "12px"}}>
                        <FormField label="Label" editor={<Textbox />} />
                    </Fieldset>
                    <Fieldset legend="Form Legend" layout="grid" cols={2} gutters={{cols: "16px", rows: "12px"}} colSpan={2}>
                        <FormField label="Label" colSpan={2} editor={<DropdownList />} />
                    </Fieldset>
                </>
            }
        </Form>
    );
};
