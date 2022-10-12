import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { DropdownList } from '../../dropdownlist';
import { Textbox } from '../../textbox';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Form Grid Layout</span>
            <span></span>

            <section>
                <form className="k-form k-form-md">

                    <fieldset className="k-form-fieldset">
                        <legend className="k-form-legend">Shipping Address</legend>

                        <div className="k-form-layout k-d-grid k-grid-cols-2" style={{ gap: "0px 16px" }}>
                            <div className="k-form-field k-colspan-1 k-col-span-1">
                                <label className="k-label k-form-label">Country</label>
                                <DropdownList value="France" />
                            </div>

                            <div className="k-form-field k-colspan-1 k-col-span-1">
                                <label className="k-label k-form-label">City</label>
                                <div className="k-form-field-wrap">
                                    <Textbox />
                                </div>
                            </div>

                            <div className="k-form-field k-colspan-2 k-col-span-2">
                                <label className="k-label k-form-label">Address Line</label>
                                <div className="k-form-field-wrap">
                                    <Textbox />
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <div className="k-form-buttons">
                        <Button themeColor="primary" className="k-form-submit">Submit</Button>
                        <Button className="k-form-clear">Clear</Button>
                    </div>

                </form>
            </section>

        </div>
    </>
);
