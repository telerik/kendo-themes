import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { ColorPicker } from '../../colorpicker';
import { FloatingLabel } from '../../floating-label';
import { MaskedTextbox } from '../../maskedtextbox';
import { NumericTextbox } from '../../numerictextbox';
import { RadioButtonLabel, RadioGroup, RadioItem } from '../../radio';
import { Switch } from '../../switch';
import { Textbox } from '../../textbox';
import { Upload, UploadFile } from '../../upload';
import { Form, FormField } from '../../form';


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

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Vertical Form</span>
            <span>Horizontal Form</span>

            <section>
                <Form>

                    <FormField
                        label="Textbox:"
                        editor={ <Textbox/> }
                    >
                    </FormField>

                    <FormField
                        label="Checkbox:"
                        editor={ <Checkbox/> }
                    >
                    </FormField>

                    <FormField
                        editor={
                            <>
                                <Checkbox/>
                                <label className="k-checkbox-label">Label after the box</label>
                            </>
                        }
                    >
                    </FormField>

                    <FormField
                        label="Radio (Y):"
                        editor={
                            <RadioGroup>
                                <RadioItem>
                                    <RadioButtonLabel>Male</RadioButtonLabel>
                                </RadioItem>
                                <RadioItem>
                                    <RadioButtonLabel>Female</RadioButtonLabel>
                                </RadioItem>
                            </RadioGroup>
                        }
                    >
                    </FormField>

                    <FormField
                        label="Radio (X):"
                        editor={
                            <RadioGroup layout="horizontal">
                                <RadioItem>
                                    <RadioButtonLabel>Male</RadioButtonLabel>
                                </RadioItem>
                                <RadioItem>
                                    <RadioButtonLabel>Female</RadioButtonLabel>
                                </RadioItem>
                            </RadioGroup>
                        }
                    >
                    </FormField>

                    <FormField
                        label="Colorpicker:"
                        editor={ <ColorPicker/> }
                    >
                    </FormField>

                    <FormField
                        label="MaskedTextBox:"
                        editor={ <MaskedTextbox/> }
                    >
                    </FormField>

                    <FormField
                        label="NumericTextBox:"
                        editor={ <NumericTextbox/> }
                    >
                    </FormField>

                    <FormField
                        label="Switch:"
                        editor={ <Switch onLabel="On" offLabel="Off" checked /> }
                    >
                    </FormField>

                    <FormField
                        label="Slider:"
                        editor={
                            <div className="k-slider k-slider-horizontal">
                                <Button icon="caret-alt-left" rounded="full" className="k-button-decrease"></Button>
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
                                <Button icon="caret-alt-right" rounded="full" className="k-button-increase"></Button>
                            </div>
                        }
                    >
                    </FormField>

                    <FormField
                        editor={
                            <FloatingLabel label="FloatingLabel" empty>
                                <Textbox />
                            </FloatingLabel>
                        }
                    >
                    </FormField>

                    <FormField
                        editor={
                            <FloatingLabel label="FloatingLabel (Focused)" empty focus>
                                <Textbox focus />
                            </FloatingLabel>
                        }
                    >
                    </FormField>

                    <FormField
                        label="Upload"
                        editor={
                            <Upload async status="done">
                                <UploadFile progress="100" status="success" validationMsg="File successfully uploaded." name="test long long long long long long long long long long long long long.pdf" icon="file-pdf"></UploadFile>
                            </Upload>
                        }
                    >
                    </FormField>

                </Form>
            </section>


            <section>
                <Form orientation="horizontal">

                    <FormField
                        label="Textbox:"
                        editor={ <Textbox/> }
                    >
                    </FormField>

                    <FormField
                        label="Checkbox:"
                        editor={ <Checkbox/> }
                    >
                    </FormField>

                    <FormField
                        editor={
                            <>
                                <Checkbox/>
                                <label className="k-checkbox-label">Label after the box</label>
                            </>
                        }
                    >
                    </FormField>

                    <FormField
                        label="Radio (Y):"
                        editor={
                            <RadioGroup>
                                <RadioItem>
                                    <RadioButtonLabel>Male</RadioButtonLabel>
                                </RadioItem>
                                <RadioItem>
                                    <RadioButtonLabel>Female</RadioButtonLabel>
                                </RadioItem>
                            </RadioGroup>
                        }
                    >
                    </FormField>

                    <FormField
                        label="Radio (X):"
                        editor={
                            <RadioGroup layout="horizontal">
                                <RadioItem>
                                    <RadioButtonLabel>Male</RadioButtonLabel>
                                </RadioItem>
                                <RadioItem>
                                    <RadioButtonLabel>Female</RadioButtonLabel>
                                </RadioItem>
                            </RadioGroup>
                        }
                    >
                    </FormField>

                    <FormField
                        label="Colorpicker:"
                        editor={ <ColorPicker/> }
                    >
                    </FormField>

                    <FormField
                        label="MaskedTextBox:"
                        editor={ <MaskedTextbox/> }
                    >
                    </FormField>

                    <FormField
                        label="NumericTextBox:"
                        editor={ <NumericTextbox/> }
                    >
                    </FormField>

                    <FormField
                        label="Switch:"
                        editor={ <Switch onLabel="On" offLabel="Off" checked /> }
                    >
                    </FormField>

                    <FormField
                        label="Slider"
                        editor={
                            <div className="k-slider k-slider-horizontal">
                                <Button icon="caret-alt-left" rounded="full" className="k-button-decrease"></Button>
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
                                <Button icon="caret-alt-right" rounded="full" className="k-button-increase"></Button>
                            </div>
                        }
                    >
                    </FormField>

                    <FormField
                        editor={
                            <FloatingLabel label="FloatingLabel" empty>
                                <Textbox />
                            </FloatingLabel>
                        }
                    >
                    </FormField>

                    <FormField
                        editor={
                            <FloatingLabel label="FloatingLabel (Focused)" empty focus>
                                <Textbox focus />
                            </FloatingLabel>
                        }
                    >
                    </FormField>

                    <FormField
                        label="Upload"
                        editor={
                            <Upload async status="done">
                                <UploadFile progress="100" status="success" validationMsg="File successfully uploaded." name="test long long long long long long long long long long long long long.pdf" icon="file-pdf"></UploadFile>
                            </Upload>
                        }
                    >
                    </FormField>

                </Form>
            </section>

        </div>
    </>
);
