import { Textarea } from '../../textarea';
import { Textbox } from '../../textbox';
import { FormField, Fieldset, FormNormal, FormHorizontal } from '../../form';


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
                    <Fieldset legend="Please fill in the fields:">
                        <FormField label="First Name:" editor={ <Textbox /> }></FormField>
                        <FormField label="Last Name:" editor={ <Textbox /> }></FormField>
                    </Fieldset>

                    <Fieldset legend="Please fill in your address details:">
                        <FormField label="City:" editor={ <Textbox /> }></FormField>
                        <FormField label="Address:" editor={ <Textarea /> }></FormField>
                    </Fieldset>
                </FormNormal>
            </section>


            <section>
                <FormHorizontal
                    formButtons={null}
                >
                    <Fieldset legend="Please fill in the fields:">
                        <FormField label="First Name:" editor={ <Textbox /> }></FormField>
                        <FormField label="Last Name:" editor={ <Textbox /> }></FormField>
                    </Fieldset>

                    <Fieldset legend="Please fill in your address details:">
                        <FormField label="City:" editor={ <Textbox /> }></FormField>
                        <FormField label="Address:" editor={ <Textarea rows={3} /> }></FormField>
                    </Fieldset>
                </FormHorizontal>
            </section>

        </div>
    </>
);
