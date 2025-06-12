import { Fieldset, Form, FormField } from "..";
import { DropdownList } from "../../dropdownlist";
import { Textbox } from "../../textbox";

export const FormGridLayout = ({ cols, gapX, gapY, ...other }: any) => (
    <Form layout="grid" cols={cols} gapX={gapX} gapY={gapY}
        children={[
            <>
                <Fieldset legend="Form Legend" layout="grid" cols={1} gapY={3}>
                    <FormField label="Label" editor={<Textbox />} />
                </Fieldset>
                <Fieldset legend="Form Legend" layout="grid" cols={1} gapX={4} gapY={3}>
                    <FormField label="Label" editor={<Textbox />} />
                </Fieldset>
                 <Fieldset legend="Form Legend" layout="grid" cols={2} gapX={4} gapY={3} colSpan={2}>
                    <FormField label="Label" colSpan={2} editor={<DropdownList />} />
                </Fieldset>
            </>
        ]}
        {...other}
    >
    </Form>
);
