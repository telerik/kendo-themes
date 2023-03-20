import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Textbox } from '../../textbox';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    section {
        padding: 20px;
        border: 1px dashed gray;
    }

    .test-heading {
        margin: 0 0 20px;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Vertical Form (React)</span>
            <span>Horizontal Form (React)</span>

            <section>
                <div className="k-messagebox k-messagebox-error">
                    Error: The quick brown fox jumps over the lazy dog.
                </div>

                <form className="k-form k-form-md k-form-vertical">

                    <div className="k-form-field">
                        <label className="k-label">Normal:<span className="k-label-optional">(Optional)</span></label>
                        <Textbox placeholder="Textbox..." />
                        <div className="k-form-hint k-text-start">Hint: hint message</div>
                        <div className="k-form-error k-text-start">Error: error message</div>
                    </div>

                    <div className="k-form-field">
                        <label className="k-label !k-text-error">Error:<span className="k-field-info">(field info)</span></label>
                        <Textbox placeholder="Textbox..." invalid />
                        <div className="k-form-hint k-text-end">Hint: hint message</div>
                        <div className="k-form-error k-text-end">Error: error message</div>
                    </div>

                    <div className="k-form-field">
                        <label className="k-label k-text-disabled">Disabled:</label>
                        <Textbox value="Disabled" disabled />
                        <div className="k-form-hint k-text-start">Hint: hint message</div>
                        <div className="k-form-error k-text-start">Error: error message</div>
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">Checkbox:</label>
                        <span>
                            <Checkbox />
                        </span>
                        <div className="k-form-hint k-text-start">Hint: hint message</div>
                        <div className="k-form-error k-text-start">Error: error message</div>
                    </div>

                    <div className="k-form-field">
                        <span>
                            <Checkbox />
                            <label className="k-Checkbox-label">Label after the box</label>
                        </span>
                        <div className="k-form-hint k-text-start">Hint: hint message</div>
                        <div className="k-form-error k-text-start">Error: error message</div>
                    </div>

                    <div className="k-form-buttons">
                        <Button themeColor="primary" className="k-form-submit">Submit</Button>
                        <Button className="k-form-clear">Clear</Button>
                    </div>

                </form>
            </section>


            <section>
                <div className="k-messagebox k-messagebox-error">
                    Error: The quick brown fox jumps over the lazy dog.
                </div>

                <form className="k-form k-form-md k-form-horizontal">

                    <div className="k-form-field">
                        <label className="k-label">Normal:<span className="k-label-optional">(Optional)</span></label>
                        <div className="k-form-field-wrap">
                            <Textbox placeholder="Textbox..." invalid />
                            <div className="k-form-hint k-text-start">Hint: hint message</div>
                            <div className="k-form-error k-text-start">Error: error message</div>
                        </div>
                    </div>

                    <div className="k-form-field">
                        <label className="k-label !k-text-error">Error:<span className="k-field-info">(field info)</span></label>
                        <div className="k-form-field-wrap">
                            <Textbox placeholder="Textbox..." />
                            <div className="k-form-hint k-text-end">Hint: hint message</div>
                            <div className="k-form-error k-text-end">Error: error message</div>
                        </div>
                    </div>

                    <div className="k-form-field">
                        <label className="k-label k-text-disabled">Disabled:</label>
                        <div className="k-form-field-wrap">
                            <Textbox value="Disabled" disabled />
                            <div className="k-form-hint k-text-start">Hint: hint message</div>
                            <div className="k-form-error k-text-start">Error: error message</div>
                        </div>
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">Checkbox:</label>
                        <div className="k-form-field-wrap">
                            <span>
                                <Checkbox />
                            </span>
                            <div className="k-form-hint k-text-start">Hint: hint message</div>
                            <div className="k-form-error k-text-start">Error: error message</div>
                        </div>
                    </div>

                    <div className="k-form-field">
                        <label className="k-label k-label-empty"></label>
                        <div className="k-form-field-wrap">
                            <span>
                                <Checkbox />
                                <label className="k-checkbox-label">Label after the box</label>
                            </span>
                            <div className="k-form-hint k-text-start">Hint: hint message</div>
                            <div className="k-form-error k-text-start">Error: error message</div>
                        </div>
                    </div>

                    <div className="k-form-buttons">
                        <Button themeColor="primary" className="k-form-submit" focus>Submit</Button>
                        <Button className="k-form-clear">Clear</Button>
                    </div>
                </form>
            </section>

        </div>
    </>
);
