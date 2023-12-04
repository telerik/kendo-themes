import { Checkbox } from '../../checkbox';
import { Textbox } from '../../textbox';
import { FormField, FormHorizontal, FormNormal } from '../../form';


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
                <FormNormal>
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
                </FormNormal>
            </section>


            <section>
                <div className="k-messagebox k-messagebox-error">
                        Error: The quick brown fox jumps over the lazy dog.
                </div>
                <FormHorizontal>
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
                </FormHorizontal>
            </section>

        </div>
    </>
);
