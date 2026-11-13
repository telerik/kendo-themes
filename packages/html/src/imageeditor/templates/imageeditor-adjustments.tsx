import { ImageEditor, ImageEditorPane, ImageEditorCanvas } from "..";
import { Button } from "../../button";
import { NumericTextbox } from "../../numerictextbox";
import { Form, FormField } from "../../form";
import { Slider } from "../../slider";

export const ImageEditorAdjustments = ({
    brightness = 0,
    contrast = 0,
    saturation = 0,
    hue = 0,
    exposure = 0,
    blur = 0,
    opacity = 100,
    isPristine = brightness === 0 && contrast === 0 && saturation === 0 && hue === 0 && exposure === 0 && blur === 0 && opacity === 100,
    adaptive,
    imageSrc,
    ...props
}: any) => (
    <ImageEditor
        adaptive={adaptive}
        activeTool="Adjustments"
        actionPane={
            <ImageEditorPane title="Adjustments" adaptive={adaptive} confirmDisabled={isPristine} actions={
                <>
                    <Button disabled={isPristine}>Reset</Button>
                    <Button themeColor="primary" disabled={isPristine}>Apply</Button>
                </>
            }>
                <Form tag="div">
                    <FormField
                        label="Brightness"
                        editorId="adjustments-brightness"
                        editor={
                            <div className="k-imageeditor-adjustment-editor">
                                <Slider className="k-imageeditor-adjustment-slider" aria-label="Brightness" showButtons={false} showTicks={false} value={brightness} min={-100} max={100} style={{ "--kendo-slider-start": 0, "--kendo-slider-end": (brightness + 100) / 2 } as React.CSSProperties} />
                                <NumericTextbox id="adjustments-brightness" style={{ width: "80px", flex: "none" }} showClearButton={false} showSpinButton={false} value={String(brightness)} />
                            </div>
                        }
                    />
                    <FormField
                        label="Contrast"
                        editorId="adjustments-contrast"
                        editor={
                            <div className="k-imageeditor-adjustment-editor">
                                <Slider className="k-imageeditor-adjustment-slider" aria-label="Contrast" showButtons={false} showTicks={false} value={contrast} min={-100} max={100} style={{ "--kendo-slider-start": 0, "--kendo-slider-end": (contrast + 100) / 2 } as React.CSSProperties} />
                                <NumericTextbox id="adjustments-contrast" style={{ width: "80px", flex: "none" }} showClearButton={false} showSpinButton={false} value={String(contrast)} />
                            </div>
                        }
                    />
                    <FormField
                        label="Saturation"
                        editorId="adjustments-saturation"
                        editor={
                            <div className="k-imageeditor-adjustment-editor">
                                <Slider className="k-imageeditor-adjustment-slider" aria-label="Saturation" showButtons={false} showTicks={false} value={saturation} min={-100} max={100} style={{ "--kendo-slider-start": 0, "--kendo-slider-end": (saturation + 100) / 2 } as React.CSSProperties} />
                                <NumericTextbox id="adjustments-saturation" style={{ width: "80px", flex: "none" }} showClearButton={false} showSpinButton={false} value={String(saturation)} />
                            </div>
                        }
                    />
                    <FormField
                        label="Hue"
                        editorId="adjustments-hue"
                        editor={
                            <div className="k-imageeditor-adjustment-editor">
                                <Slider className="k-imageeditor-adjustment-slider" aria-label="Hue" showButtons={false} showTicks={false} value={hue} min={-100} max={100} style={{ "--kendo-slider-start": 0, "--kendo-slider-end": (hue + 100) / 2 } as React.CSSProperties} />
                                <NumericTextbox id="adjustments-hue" style={{ width: "80px", flex: "none" }} showClearButton={false} showSpinButton={false} value={String(hue)} />
                            </div>
                        }
                    />
                    <FormField
                        label="Exposure"
                        editorId="adjustments-exposure"
                        editor={
                            <div className="k-imageeditor-adjustment-editor">
                                <Slider className="k-imageeditor-adjustment-slider" aria-label="Exposure" showButtons={false} showTicks={false} value={exposure} min={-100} max={100} style={{ "--kendo-slider-start": 0, "--kendo-slider-end": (exposure + 100) / 2 } as React.CSSProperties} />
                                <NumericTextbox id="adjustments-exposure" style={{ width: "80px", flex: "none" }} showClearButton={false} showSpinButton={false} value={String(exposure)} />
                            </div>
                        }
                    />
                    <FormField
                        label="Blur"
                        editorId="adjustments-blur"
                        editor={
                            <div className="k-imageeditor-adjustment-editor">
                                <Slider className="k-imageeditor-adjustment-slider" aria-label="Blur" showButtons={false} showTicks={false} value={blur} min={0} max={100} style={{ "--kendo-slider-start": 0, "--kendo-slider-end": blur } as React.CSSProperties} />
                                <NumericTextbox id="adjustments-blur" style={{ width: "80px", flex: "none" }} showClearButton={false} showSpinButton={false} value={String(blur)} />
                            </div>
                        }
                    />
                    <FormField
                        label="Opacity"
                        editorId="adjustments-opacity"
                        editor={
                            <div className="k-imageeditor-adjustment-editor">
                                <Slider className="k-imageeditor-adjustment-slider" aria-label="Opacity" showButtons={false} showTicks={false} value={opacity} min={0} max={100} style={{ "--kendo-slider-start": 0, "--kendo-slider-end": opacity } as React.CSSProperties} />
                                <NumericTextbox id="adjustments-opacity" style={{ width: "80px", flex: "none" }} showClearButton={false} showSpinButton={false} value={String(opacity)} />
                            </div>
                        }
                    />
                </Form>
            </ImageEditorPane>
        }

        children={
            <>
                <ImageEditorCanvas adaptive={adaptive} imageSrc={imageSrc} />
            </>
        }
        {...props} />
);
