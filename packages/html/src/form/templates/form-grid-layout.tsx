import { Fieldset, Form, FormField } from "..";
import { DropdownList } from "../../dropdownlist";
import { Textbox } from "../../textbox";

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
