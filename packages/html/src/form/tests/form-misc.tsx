import { Checkbox } from '../../checkbox';
import { Textbox } from '../../textbox';
import { Button } from '../../button';
import { Form, FormField } from '../../form';
import { FormButtons } from '../form-buttons.spec';


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
                <div className="k-messagebox k-messagebox-error">
                    Error: The quick brown fox jumps over the lazy dog.
                </div>

                <Form FormButtons={
                    <FormButtons>
                        <Button themeColor="primary">Submit</Button>
                        <Button>Clear</Button>
                    </FormButtons>
                } >
                    <FormField
                        label="Normal:"
                        optional
                        hint="Hint: hint message"
                        error="Error: error message"
                        editor={ <Textbox placeholder="Textbox..." /> }
                    />
                    <FormField
                        className="k-form-field-error"
                        label="Error:"
                        info="(field info)"
                        hint="Hint: hint message"
                        error="Error: error message"
                        editor={ <Textbox invalid placeholder="Textbox..." /> }
                    />
                    <FormField
                        disabled
                        label="Disabled:"
                        hint="Hint: hint message"
                        error="Error: error message"
                        editor={ <Textbox disabled value="Disabled" /> }
                    />
                    <FormField
                        label="Checkbox:"
                        hint="Hint: hint message"
                        error="Error: error message"
                        editor={ <Checkbox /> }
                    />
                    <FormField
                        hint="Hint: hint message"
                        error="Error: error message"
                        editor={
                            <>
                                <Checkbox />
                                <label className="k-checkbox-label">Label after the box</label>
                            </>
                        }
                    />

                </Form>
            </section>


            <section>
                <div className="k-messagebox k-messagebox-error">
                    Error: The quick brown fox jumps over the lazy dog.
                </div>

                <Form orientation="horizontal" FormButtons={
                    <>
                        <Button className="k-form-submit" themeColor="primary" focus>Submit</Button>
                        <Button className="k-form-clear">Clear</Button>
                    </>
                } >
                    <FormField
                        label="Normal:"
                        optional
                        hint="Hint: hint message"
                        error="Error: error message"
                        editor={ <Textbox placeholder="Textbox..." /> }
                    />

                    <FormField
                        className="k-form-field-error"
                        label="Error:"
                        info="(field info)"
                        hint="Hint: hint message"
                        error="Error: error message"
                        editor={ <Textbox invalid placeholder="Textbox..." /> }
                    />

                    <FormField
                        disabled
                        label="Disabled:"
                        hint="Hint: hint message"
                        error="Error: error message"
                        editor={ <Textbox disabled value="Disabled" /> }
                    />

                    <FormField
                        label="Checkbox:"
                        hint="Hint: hint message"
                        error="Error: error message"
                        editor={ <Checkbox /> }
                    />

                    <FormField
                        hint="Hint: hint message"
                        error="Error: error message"
                        editor={
                            <>
                                <Checkbox />
                                <label className="k-checkbox-label">Label after the box</label>
                            </>
                        }
                    />

                </Form>
            </section>

        </div>
    </>
);
