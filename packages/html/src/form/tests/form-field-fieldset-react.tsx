import React from 'react';
import ReactDOM from 'react-dom/client';
import { Textarea } from '../../textarea';
import { Textbox } from '../../textbox';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    section {
        padding: 20px;
        border: 1px dashed gray;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Vertical Form (React)</span>
            <span>Horizontal Form (React)</span>

            <section>
                <form className="k-form k-form-md k-form-vertical">

                    <fieldset className="k-form-fieldset">
                        <legend className="k-form-legend">Please fill in the fields:</legend>
                        <div className="k-form-field">
                            <label className="k-label">First Name:</label>
                            <Textbox />
                        </div>

                        <div className="k-form-field">
                            <label className="k-label">Last Name:</label>
                            <Textbox />
                        </div>
                    </fieldset>

                    <fieldset className="k-form-fieldset">
                        <legend className="k-form-legend">Please fill in your address details:</legend>
                        <div className="k-form-field">
                            <label className="k-label">City:</label>
                            <Textbox />
                        </div>

                        <div className="k-form-field">
                            <label className="k-label">Address:</label>
                            <Textarea></Textarea>
                        </div>
                    </fieldset>

                </form>
            </section>


            <section>
                <form className="k-form k-form-md k-form-horizontal">

                    <fieldset className="k-form-fieldset">
                        <legend className="k-form-legend">Please fill in the fields:</legend>
                        <div className="k-form-field">
                            <label className="k-label">First Name:</label>
                            <div className="k-form-field-wrap">
                                <Textbox />
                            </div>
                        </div>

                        <div className="k-form-field">
                            <label className="k-label">Last Name:</label>
                            <div className="k-form-field-wrap">
                                <Textbox />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="k-form-fieldset">
                        <legend className="k-form-legend">Please fill in your address details:</legend>
                        <div className="k-form-field">
                            <label className="k-label">City:</label>
                            <div className="k-form-field-wrap">
                                <Textbox />
                            </div>
                        </div>

                        <div className="k-form-field">
                            <label className="k-label">Address:</label>
                            <div className="k-form-field-wrap">
                                <Textarea rows={3}></Textarea>
                            </div>
                        </div>
                    </fieldset>

                </form>
            </section>

        </div>
    </>
);
