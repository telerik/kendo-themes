import { ImageEditor, ImageEditorPane, ImageEditorResizeHandles, ImageEditorCanvas } from "..";
import { Button } from "../../button";
import { CheckboxWithLabelAfter } from "../../checkbox";
import { NumericTextbox } from "../../numerictextbox";
import { Form, FormField, Fieldset } from "../../form";
import { Icon } from "../../icon";
import { RadioGroup, RadioItem, RadioButtonWithLabelAfter } from "../../radio";

export const ImageEditorResize = ({ scaleUnit = "percentage", modified = false, adaptive, imageSrc, ...props }: any) => (
    <ImageEditor
        adaptive={adaptive}
        activeTool="Resize"
        actionPane={
            <ImageEditorPane title="Resize" adaptive={adaptive} confirmDisabled={!modified} actions={
                <>
                    <Button disabled={!modified}>Reset</Button>
                    <Button themeColor="primary" disabled={!modified}>Apply</Button>
                </>
            }>
                <Form tag="div">
                    <FormField
                        label="Scale Unit"
                        editor={
                            <RadioGroup layout="horizontal">
                                <RadioItem>
                                    <RadioButtonWithLabelAfter id="resize-scale-unit-pixel" name="resize-scale-unit" checked={scaleUnit === "pixel"}>Pixel</RadioButtonWithLabelAfter>
                                </RadioItem>
                                <RadioItem>
                                    <RadioButtonWithLabelAfter id="resize-scale-unit-percentage" name="resize-scale-unit" checked={scaleUnit === "percentage"}>Percentage</RadioButtonWithLabelAfter>
                                </RadioItem>
                            </RadioGroup>
                        }
                    />
                    <Fieldset layout="grid" cols={2} gutters={{ cols: "8px" }}>
                        <FormField
                            label="Width"
                            editorId="resize-width"
                            editor={ <NumericTextbox id="resize-width" showClearButton={false} showSpinButton={false} value={scaleUnit === "percentage" ? "100%" : "494"} prefix={<Icon icon="arrows-left-right" />} /> }
                        />
                        <FormField
                            label="Height"
                            editorId="resize-height"
                            editor={ <NumericTextbox id="resize-height" showClearButton={false} showSpinButton={false} value={scaleUnit === "percentage" ? "100%" : "307"} prefix={<Icon icon="arrows-top-bottom" />} /> }
                        />
                    </Fieldset>
                    <FormField editor={ <CheckboxWithLabelAfter id="resize-lock" checked>Lock Aspect Ratio</CheckboxWithLabelAfter> } />
                </Form>
            </ImageEditorPane>
        }

        children={
            <>
                <ImageEditorCanvas adaptive={adaptive} imageSrc={imageSrc} />
                <div className="k-imageeditor-resize">
                    <ImageEditorResizeHandles variant="mixed" />
                </div>
            </>
        }
        {...props} />
);
