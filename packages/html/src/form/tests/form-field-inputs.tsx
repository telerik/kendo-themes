import { Checkbox } from '../../checkbox';
import { ColorPicker } from '../../colorpicker';
import { FloatingLabel } from '../../floating-label';
import { MaskedTextbox } from '../../maskedtextbox';
import { NumericTextbox } from '../../numerictextbox';
import { RadioButtonWithLabelAfter, RadioGroupHorizontal, RadioGroupNormal, RadioItem } from '../../radio';
import { Switch } from '../../switch';
import { Textbox } from '../../textbox';
import { UploadChunk, UploadFile } from '../../upload';
import { FormField, FormHorizontal, FormNormal } from '../../form';
import { SliderNormal } from '../../slider';


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
                </FormHorizontal>
            </section>

        </div>
    </>
);
