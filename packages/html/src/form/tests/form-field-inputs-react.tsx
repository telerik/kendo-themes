import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { ColorPicker } from '../../colorpicker';
import { FloatingLabel } from '../../floating-label';
import { Icon } from '../../icon';
import { MaskedTextbox } from '../../maskedtextbox';
import { NumericTextbox } from '../../numerictextbox';
import { RadioButton } from '../../radio';
import { Switch } from '../../switch';
import { Textbox } from '../../textbox';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    section {
        padding: 20px;
        border: 1px dashed gray;
    }
    .k-slider-horizontal {
        width: 100%;
        --kendo-slider-start: 0;
        --kendo-slider-end: 50;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Vertical Form (React)</span>
            <span>Horizontal Form (React)</span>

            <section>
                <form className="k-form k-form-md">

                    <div className="k-form-field">
                        <label className="k-label">Textbox:</label>
                        <Textbox />
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">Checkbox:</label>
                        <span>
                            <Checkbox />
                        </span>
                    </div>

                    <div className="k-form-field">
                        <span>
                            <Checkbox />
                            <label className="k-checkbox-label">Label after the box</label>
                        </span>
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">Radio (Y):</label>
                        <ul role="radiogroup" className="k-radio-list k-list-vertical">
                            <li className="k-radio-list-item">
                                <RadioButton />
                                <label className="k-radio-label">Female</label>
                            </li>
                            <li className="k-radio-list-item">
                                <RadioButton />
                                <label className="k-radio-label">Male</label>
                            </li>
                        </ul>
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">Radio (X):</label>
                        <ul role="radiogroup" className="k-radio-list k-list-horizontal">
                            <li className="k-radio-list-item">
                                <RadioButton />
                                <label className="k-radio-label">Female</label>
                            </li>
                            <li className="k-radio-list-item">
                                <RadioButton />
                                <label className="k-radio-label">Male</label>
                            </li>
                        </ul>
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">ColorPicker:</label>
                        <ColorPicker />
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">MaskedTextBox:</label>
                        <MaskedTextbox />
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">NumericTextBox:</label>
                        <NumericTextbox />
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">Switch:</label>
                        <Switch onLabel="On" offLabel="Off" checked />
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">Slider:</label>
                        <div className="k-slider k-slider-horizontal">
                            <Button icon="arrow-w" rounded="full" className="k-button-decrease"></Button>
                            <div className="k-slider-track-wrap">
                                <ul className="k-reset k-slider-items">
                                    <li className="k-tick k-tick-large">
                                        <span className="k-label">0</span>
                                    </li>
                                    <li className="k-tick"></li>
                                    <li className="k-tick"></li>
                                    <li className="k-tick"></li>
                                    <li className="k-tick"></li>
                                    <li className="k-tick k-tick-large">
                                        <span className="k-label">5</span>
                                    </li>
                                    <li className="k-tick"></li>
                                    <li className="k-tick"></li>
                                    <li className="k-tick"></li>
                                    <li className="k-tick"></li>
                                    <li className="k-tick k-tick-large">
                                        <span className="k-label">10</span>
                                    </li>
                                </ul>
                                <div className="k-slider-track">
                                    <div className="k-slider-selection"></div>
                                    <a href="#" className="k-draghandle k-draghandle-end"></a>
                                </div>
                            </div>
                            <Button icon="arrow-e" rounded="full" className="k-button-increase"></Button>
                        </div>
                    </div>

                    <div className="k-form-field">
                        <FloatingLabel label="FloatingLabel" empty>
                            <Textbox />
                        </FloatingLabel>
                    </div>

                    <div className="k-form-field">
                        <FloatingLabel label="FloatingLabel (focused)" empty focus>
                            <Textbox focus />
                        </FloatingLabel>
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">Upload</label>
                        <div className="k-widget k-upload">
                            <div className="k-dropzone">
                                <Button className="k-upload-button">Select files...</Button>
                                <div className="k-upload-status k-upload-status-total">
                                    <Icon name="check" />
                                    Done
                                </div>
                            </div>
                            <ul className="k-upload-files k-reset">
                                <li className="k-file k-file-success">
                                    <div className="k-file-single">
                                        <div className="k-progressbar" style={{ transition: "opacity 1s ease-in-out 0s", opacity: "0" }}>
                                            <span className="k-progress" style={{ width: '100%' }}></span>
                                        </div>
                                        <span className="k-file-group-wrapper">
                                            <Icon className="k-file-group" name="file-pdf" />
                                            <span className="k-file-state"></span>
                                        </span>
                                        <span className="k-file-name-size-wrapper">
                                            <span className="k-file-name">test long long long long long long long long long long long long long.pdf</span>
                                            <span className="k-file-validation-message !k-text-success">File(s) successfully uploaded.</span>
                                        </span>
                                        <strong className="k-upload-status">
                                            <Button fillMode="flat" icon="close" className="k-upload-action"></Button>
                                        </strong>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </form>
            </section>


            <section>
                <form className="k-form k-form-md k-form-horizontal">

                    <div className="k-form-field">
                        <label className="k-label">Textbox:</label>
                        <div className="k-form-field-wrap">
                            <Textbox />
                        </div>
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">Checkbox:</label>
                        <div className="k-form-field-wrap">
                            <span>
                                <Checkbox />
                            </span>
                        </div>
                    </div>

                    <div className="k-form-field">
                        <label className="k-label k-label-empty"></label>
                        <div className="k-form-field-wrap">
                            <span>
                                <Checkbox />
                                <label className="k-checkbox-label">Label after the box</label>
                            </span>
                        </div>
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">Radio (Y):</label>
                        <div className="k-form-field-wrap">
                            <ul role="radiogroup" className="k-radio-list k-list-vertical">
                                <li className="k-radio-list-item">
                                    <RadioButton />
                                    <label className="k-radio-label">Female</label>
                                </li>
                                <li className="k-radio-list-item">
                                    <RadioButton />
                                    <label className="k-radio-label">Male</label>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">Radio (X):</label>
                        <div className="k-form-field-wrap">
                            <ul role="radiogroup" className="k-radio-list k-list-horizontal">
                                <li className="k-radio-list-item">
                                    <RadioButton />
                                    <label className="k-radio-label">Female</label>
                                </li>
                                <li className="k-radio-list-item">
                                    <RadioButton />
                                    <label className="k-radio-label">Male</label>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">ColorPicker:</label>
                        <div className="k-form-field-wrap">
                            <ColorPicker />
                        </div>
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">MaskedTextBox:</label>
                        <div className="k-form-field-wrap">
                            <MaskedTextbox />
                        </div>
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">NumericTextBox:</label>
                        <div className="k-form-field-wrap">
                            <NumericTextbox />
                        </div>
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">Switch:</label>
                        <div className="k-form-field-wrap">
                            <Switch onLabel="On" offLabel="Off" checked />
                        </div>
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">Slider:</label>
                        <div className="k-form-field-wrap">
                            <div className="k-slider k-slider-horizontal">
                                <Button icon="arrow-w" rounded="full" className="k-button-decrease"></Button>
                                <div className="k-slider-track-wrap">
                                    <ul className="k-reset k-slider-items">
                                        <li className="k-tick k-tick-large">
                                            <span className="k-label">0</span>
                                        </li>
                                        <li className="k-tick"></li>
                                        <li className="k-tick"></li>
                                        <li className="k-tick"></li>
                                        <li className="k-tick"></li>
                                        <li className="k-tick k-tick-large">
                                            <span className="k-label">5</span>
                                        </li>
                                        <li className="k-tick"></li>
                                        <li className="k-tick"></li>
                                        <li className="k-tick"></li>
                                        <li className="k-tick"></li>
                                        <li className="k-tick k-tick-large">
                                            <span className="k-label">10</span>
                                        </li>
                                    </ul>
                                    <div className="k-slider-track">
                                        <div className="k-slider-selection"></div>
                                        <a href="#" className="k-draghandle k-draghandle-end"></a>
                                    </div>
                                </div>
                                <Button icon="arrow-e" rounded="full" className="k-button-increase"></Button>
                            </div>
                        </div>
                    </div>

                    <div className="k-form-field">
                        <span className="k-label k-label-empty"></span>
                        <div className="k-form-field-wrap">
                            <FloatingLabel label="FloatingLabel" empty>
                                <Textbox />
                            </FloatingLabel>
                        </div>
                    </div>

                    <div className="k-form-field">
                        <span className="k-label k-label-empty"></span>
                        <div className="k-form-field-wrap">
                            <FloatingLabel label="FloatingLabel (focused)" empty focus>
                                <Textbox focus />
                            </FloatingLabel>
                        </div>
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">Upload</label>
                        <div className="k-form-field-wrap">
                            <div className="k-widget k-upload">
                                <div className="k-dropzone">
                                    <Button className="k-upload-button">Select files...</Button>
                                    <div className="k-upload-status k-upload-status-total">
                                        <Icon name="check" />
                                        Done
                                    </div>
                                </div>
                                <ul className="k-upload-files k-reset">
                                    <li className="k-file k-file-success">
                                        <div className="k-file-single">
                                            <div className="k-progressbar" style={{ transition: "opacity 1s ease-in-out 0s", opacity: "0" }}>
                                                <span className="k-progress" style={{ width: '100%' }}></span>
                                            </div>
                                            <span className="k-file-group-wrapper">
                                                <Icon className="k-file-group" name="file-pdf" />
                                                <span className="k-file-state"></span>
                                            </span>
                                            <span className="k-file-name-size-wrapper">
                                                <span className="k-file-name">test long long long long long long long long long long long long long.pdf</span>
                                                <span className="k-file-validation-message !k-text-success">File(s) successfully uploaded.</span>
                                            </span>
                                            <strong className="k-upload-status">
                                                <Button fillMode="flat" icon="close" className="k-upload-action"></Button>
                                            </strong>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </form>
            </section>

        </div>
    </>
);
