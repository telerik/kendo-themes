import { ImageEditor, ImageEditorPane, ImageEditorCanvas } from "..";
import { Button } from "../../button";
import { NumericTextbox } from "../../numerictextbox";
import { Form, FormField } from "../../form";
import { RadioGroup, RadioItem, RadioButtonWithLabelAfter } from "../../radio";
import { SegmentedControl, SegmentedControlButton } from "../../segmented-control";
import { Slider } from "../../slider";
import { InputSuffixText } from "../../input";


export const ImageEditorPixelate = ({ selected = false, shape = "elliptical", intensity = 0, adaptive, imageSrc, ...props }: any) => (
    <ImageEditor
        adaptive={adaptive}
        activeTool="Blur"
        actionPane={
            <ImageEditorPane title="Pixelate" adaptive={adaptive} confirmDisabled={!selected} actions={
                <>
                    <Button disabled={!selected}>Reset</Button>
                    <Button themeColor="primary" disabled={!selected}>Apply</Button>
                </>
            }>
                <SegmentedControl thumbStyles={{ width: "50%", left: "50%" }} stretched aria-label="Redaction Tool">
                    <SegmentedControlButton icon="blur">Blur</SegmentedControlButton>
                    <SegmentedControlButton icon="grid" selected>Pixelate</SegmentedControlButton>
                </SegmentedControl>

                <Form tag="div">
                    <FormField
                        label="Marquee Tool Shape"
                        editor={
                            <RadioGroup layout="horizontal">
                                <RadioItem>
                                    <RadioButtonWithLabelAfter id="pixelate-shape-rectangular" name="pixelate-shape" checked={shape === "rectangular"}>Rectangular</RadioButtonWithLabelAfter>
                                </RadioItem>
                                <RadioItem>
                                    <RadioButtonWithLabelAfter id="pixelate-shape-elliptical" name="pixelate-shape" checked={shape === "elliptical"}>Elliptical</RadioButtonWithLabelAfter>
                                </RadioItem>
                            </RadioGroup>
                        }
                    />
                    <FormField
                        label="Pixelate Intensity"
                        editorId="pixelate-intensity"
                        editor={
                            <div className="k-imageeditor-field-row">
                                <Slider
                                    style={{ flex: 1, "--kendo-slider-start": 0, "--kendo-slider-end": intensity } as React.CSSProperties}
                                    aria-label="Pixelate Intensity"
                                    showButtons={false}
                                    showTicks={false}
                                    value={intensity}
                                    min={0}
                                    max={100}
                                />
                                <NumericTextbox
                                    id="pixelate-intensity"
                                    style={{ width: "80px", flex: "none" }}
                                    showClearButton={false}
                                    showSpinButton={false}
                                    value={String(intensity)}
                                />
                            </div>
                        }
                    />
                    <FormField
                        label="Rotation"
                        editor={
                            <div className="k-imageeditor-field-row">
                                <Slider
                                    disabled={!selected}
                                    style={{ flex: 1 }}
                                    aria-label="Rotation"
                                    showButtons={false}
                                    showTicks={false}
                                    value={0}
                                    min={0}
                                    max={360}
                                />
                                <NumericTextbox
                                    disabled={!selected}
                                    style={{ width: "80px", flex: "none" }}
                                    aria-label="Rotation angle"
                                    showClearButton={false}
                                    showSpinButton={false}
                                    separators={false}
                                    value="0"
                                    suffix={<InputSuffixText>°</InputSuffixText>}
                                />
                            </div>
                        }
                    />
                </Form>
            </ImageEditorPane>
        }

        children={
            <ImageEditorCanvas adaptive={adaptive} imageSrc={imageSrc} />
        }
        {...props} />
);
