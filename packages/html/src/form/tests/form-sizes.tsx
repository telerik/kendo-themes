import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { DropdownList } from '../../dropdownlist';
import { Textbox } from '../../textbox';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = { border: '1px solid grey', padding: '10px' };

root.render(
    <>
        <div id="test-area">
            <div>Form Sizes</div>
            <br />
            <div style={{ display: 'flex', gap: '20px' }}>
                <section style={styles}>
                    <div><strong>sm</strong></div>
                    <br />
                    <form className="k-form k-form-sm">

                        <fieldset className="k-form-fieldset">
                            <legend className="k-form-legend">Shipping Address</legend>

                            <div className="k-form-layout k-d-grid k-grid-cols-2 k-gap-x-2">
                                <div className="k-form-field k-colspan-1 k-col-span-1">
                                    <label className="k-label k-form-label">Country</label>
                                    <DropdownList value="France" size="small" />
                                </div>

                                <div className="k-form-field k-colspan-1 k-col-span-1">
                                    <label className="k-label k-form-label">City</label>
                                    <div className="k-form-field-wrap">
                                        <Textbox size="small" />
                                    </div>
                                </div>

                                <div className="k-form-field k-form-field-error k-colspan-2 k-col-span-2">
                                    <label className="k-label k-form-label">Address Line</label>
                                    <div className="k-form-field-wrap">
                                        <Textbox size="small" />
                                        <span className="k-form-error"><div>Address Line is required</div></span>
                                    </div>
                                </div>
                            </div>
                        </fieldset>

                        <div className="k-form-buttons">
                            <Button themeColor="primary" className="k-form-submit" size="small">Submit</Button>
                            <Button className="k-form-clear" size="small">Clear</Button>
                        </div>

                    </form>
                </section>

                <section style={styles}>
                    <div><strong>md</strong></div>
                    <br />
                    <form className="k-form k-form-md">

                        <fieldset className="k-form-fieldset">
                            <legend className="k-form-legend">Shipping Address</legend>

                            <div className="k-form-layout k-d-grid k-grid-cols-2 k-gap-x-2">
                                <div className="k-form-field k-colspan-1 k-col-span-1">
                                    <label className="k-label k-form-label">Country</label>
                                    <DropdownList value="France" size="medium" />
                                </div>

                                <div className="k-form-field k-colspan-1 k-col-span-1">
                                    <label className="k-label k-form-label">City</label>
                                    <div className="k-form-field-wrap">
                                        <Textbox size="medium" />
                                    </div>
                                </div>

                                <div className="k-form-field k-form-field-error k-colspan-2 k-col-span-2">
                                    <label className="k-label k-form-label">Address Line</label>
                                    <div className="k-form-field-wrap">
                                        <Textbox size="medium" />
                                        <span className="k-form-error"><div>Address Line is required</div></span>
                                    </div>
                                </div>
                            </div>
                        </fieldset>

                        <div className="k-form-buttons">
                            <Button themeColor="primary" className="k-form-submit" size="medium">Submit</Button>
                            <Button className="k-form-clear" size="medium">Clear</Button>
                        </div>

                    </form>
                </section>

                <section style={styles}>
                    <div><strong>lg</strong></div>
                    <br />
                    <form className="k-form k-form-lg">

                        <fieldset className="k-form-fieldset">
                            <legend className="k-form-legend">Shipping Address</legend>

                            <div className="k-form-layout k-d-grid k-grid-cols-2 k-gap-x-2">
                                <div className="k-form-field k-colspan-1 k-col-span-1">
                                    <label className="k-label k-form-label">Country</label>
                                    <DropdownList value="France" size="large" />
                                </div>

                                <div className="k-form-field k-colspan-1 k-col-span-1">
                                    <label className="k-label k-form-label">City</label>
                                    <div className="k-form-field-wrap">
                                        <Textbox size="large" />
                                    </div>
                                </div>

                                <div className="k-form-field k-form-field-error k-colspan-2 k-col-span-2">
                                    <label className="k-label k-form-label">Address Line</label>
                                    <div className="k-form-field-wrap">
                                        <Textbox size="large" />
                                        <span className="k-form-error"><div>Address Line is required</div></span>
                                    </div>
                                </div>
                            </div>
                        </fieldset>

                        <div className="k-form-buttons">
                            <Button themeColor="primary" size="large">Submit</Button>
                            <Button size="large">Clear</Button>
                        </div>

                    </form>
                </section>
            </div>
        </div>
    </>
);
