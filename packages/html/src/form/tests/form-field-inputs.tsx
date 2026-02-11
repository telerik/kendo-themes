import { Checkbox } from '../../checkbox/checkbox.spec';
import { ColorPicker } from '../../colorpicker/colorpicker.spec';
import { FloatingLabel } from '../../floating-label/floating-label.spec';
import { MaskedTextbox } from '../../maskedtextbox/maskedtextbox.spec';
import { NumericTextbox } from '../../numerictextbox/numerictextbox.spec';
import { RadioButtonWithLabelAfter } from '../../radio/templates/radio-with-label-after';
import { RadioGroupHorizontal } from '../../radio/templates/radio-group-horizontal';
import { RadioGroupNormal } from '../../radio/templates/radio-group-normal';
import { RadioItem } from '../../radio/radio-item.spec';
import { Switch } from '../../switch/switch.spec';
import { Textbox } from '../../textbox/textbox.spec';
import { UploadChunk } from '../../upload/templates/upload-chunk';
import { UploadFile } from '../../upload/upload-file';
import { FormField } from '../../form/form-field';
import { FormNormal } from '../../form/templates/form-normal';
import { FormHorizontal } from '../../form/templates/form-horizontal';
import { SliderNormal } from '../../slider/templates/slider-normal';


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
                <FormNormal
                    formButtons={null}
                >
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
                            <RadioGroupNormal>
                                <RadioItem>
                                    <RadioButtonWithLabelAfter>Male</RadioButtonWithLabelAfter>
                                </RadioItem>
                                <RadioItem>
                                    <RadioButtonWithLabelAfter>Female</RadioButtonWithLabelAfter>
                                </RadioItem>
                            </RadioGroupNormal>
                        }
                    >
                    </FormField>

                    <FormField
                        label="Radio (X):"
                        editor={
                            <RadioGroupHorizontal>
                                <RadioItem>
                                    <RadioButtonWithLabelAfter>Male</RadioButtonWithLabelAfter>
                                </RadioItem>
                                <RadioItem>
                                    <RadioButtonWithLabelAfter>Female</RadioButtonWithLabelAfter>
                                </RadioItem>
                            </RadioGroupHorizontal>
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
                            <SliderNormal />
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
                            <UploadChunk status="done">
                                <UploadFile progress="100" status="success" validationMsg="File successfully uploaded." name="test long long long long long long long long long long long long long.pdf" icon="file-pdf"></UploadFile>
                            </UploadChunk>
                        }
                    >
                    </FormField>
                </FormNormal>
            </section>


            <section>
                <FormHorizontal
                    formButtons={null}
                >
                    <FormField
                        orientation="horizontal"
                        label="Textbox:"
                        editor={ <Textbox/> }
                    >
                    </FormField>

                    <FormField
                        orientation="horizontal"
                        label="Checkbox:"
                        editor={ <Checkbox/> }
                    >
                    </FormField>

                    <FormField
                        orientation="horizontal"
                        editor={
                            <>
                                <Checkbox/>
                                <label className="k-checkbox-label">Label after the box</label>
                            </>
                        }
                    >
                    </FormField>

                    <FormField
                        orientation="horizontal"
                        label="Radio (Y):"
                        editor={
                            <RadioGroupNormal>
                                <RadioItem>
                                    <RadioButtonWithLabelAfter>Male</RadioButtonWithLabelAfter>
                                </RadioItem>
                                <RadioItem>
                                    <RadioButtonWithLabelAfter>Female</RadioButtonWithLabelAfter>
                                </RadioItem>
                            </RadioGroupNormal>
                        }
                    >
                    </FormField>

                    <FormField
                        orientation="horizontal"
                        label="Radio (X):"
                        editor={
                            <RadioGroupHorizontal>
                                <RadioItem>
                                    <RadioButtonWithLabelAfter>Male</RadioButtonWithLabelAfter>
                                </RadioItem>
                                <RadioItem>
                                    <RadioButtonWithLabelAfter>Female</RadioButtonWithLabelAfter>
                                </RadioItem>
                            </RadioGroupHorizontal>
                        }
                    >
                    </FormField>

                    <FormField
                        orientation="horizontal"
                        label="Colorpicker:"
                        editor={ <ColorPicker/> }
                    >
                    </FormField>

                    <FormField
                        orientation="horizontal"
                        label="MaskedTextBox:"
                        editor={ <MaskedTextbox/> }
                    >
                    </FormField>

                    <FormField
                        orientation="horizontal"
                        label="NumericTextBox:"
                        editor={ <NumericTextbox/> }
                    >
                    </FormField>

                    <FormField
                        orientation="horizontal"
                        label="Switch:"
                        editor={ <Switch onLabel="On" offLabel="Off" checked /> }
                    >
                    </FormField>

                    <FormField
                        orientation="horizontal"
                        label="Slider:"
                        editor={
                            <SliderNormal />
                        }
                    >
                    </FormField>

                    <FormField
                        orientation="horizontal"
                        editor={
                            <FloatingLabel label="FloatingLabel" empty>
                                <Textbox />
                            </FloatingLabel>
                        }
                    >
                    </FormField>

                    <FormField
                        orientation="horizontal"
                        editor={
                            <FloatingLabel label="FloatingLabel (Focused)" empty focus>
                                <Textbox focus />
                            </FloatingLabel>
                        }
                    >
                    </FormField>

                    <FormField
                        orientation="horizontal"
                        label="Upload"
                        editor={
                            <UploadChunk status="done">
                                <UploadFile progress="100" status="success" validationMsg="File successfully uploaded." name="test long long long long long long long long long long long long long.pdf" icon="file-pdf"></UploadFile>
                            </UploadChunk>
                        }
                    >
                    </FormField>
                </FormHorizontal>
            </section>

        </div>
    </>
);
