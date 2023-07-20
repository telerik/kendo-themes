import { Textarea } from '../../textarea';
import { Textbox } from '../../textbox';
import { Form, FormField, Fieldset } from '../../form';


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
                <Form>

                    <Fieldset legend="Please fill in the fields:">
                        <FormField label="First Name:" editor={ <Textbox /> }></FormField>
                        <FormField label="Last Name:" editor={ <Textbox /> }></FormField>
                    </Fieldset>

                    <Fieldset legend="Please fill in your address details:">
                        <FormField label="City:" editor={ <Textbox /> }></FormField>
                        <FormField label="Address:" editor={ <Textarea /> }></FormField>
                    </Fieldset>
                </Form>
            </section>


            <section>
                <Form orientation="horizontal">

                    <Fieldset legend="Please fill in the fields:">
                        <FormField label="First Name:" editor={ <Textbox /> }></FormField>
                        <FormField label="Last Name:" editor={ <Textbox /> }></FormField>
                    </Fieldset>

                    <Fieldset legend="Please fill in your address details:">
                        <FormField label="City:" editor={ <Textbox /> }></FormField>
                        <FormField label="Address:" editor={ <Textarea rows={3} /> }></FormField>
                    </Fieldset>
                </Form>
            </section>

        </div>
    </>
);
