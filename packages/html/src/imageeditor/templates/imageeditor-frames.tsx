import { ImageEditor, ImageEditorPane, ImageEditorOptionPreview, ImageEditorPreviewThumbnail, ImageEditorCanvas } from "..";
import { IMAGEEDITOR_ADAPTIVE_CANVAS_SIZE, IMAGEEDITOR_CANVAS_SIZE } from "../constants";
import { Button } from "../../button";
import { NumericTextbox } from "../../numerictextbox";
import { ColorPicker } from "../../colorpicker";
import { DropdownList } from "../../dropdownlist";
import { Form, FormField, Fieldset } from "../../form";
import { Icon } from "../../icon";
import { Slider } from "../../slider";

export const ImageEditorFrames = ({
    style = "none",
    imageRoundness = 0,
    isPristine = style === "none" && imageRoundness === 0,
    framesAmount = 3,
    frameThickness = 0,
    frameRoundness = 0,
    offset = 0,
    strokeColor = "#b0e855",
    adaptive,
    canvas = adaptive ? IMAGEEDITOR_ADAPTIVE_CANVAS_SIZE : IMAGEEDITOR_CANVAS_SIZE,
    imageSrc,
    ...props
}: any) => (
    <ImageEditor
        adaptive={adaptive}
        activeTool="Frame"
        actionPane={
            <ImageEditorPane title="Frame" adaptive={adaptive} confirmDisabled={isPristine} actions={
                <>
                    <Button disabled={isPristine}>Reset</Button>
                    <Button themeColor="primary" disabled={isPristine}>Apply</Button>
                </>
            }>
                <Form tag="div">
                    <FormField
                        label="Frame Style"
                        editor={
                            <div className="k-imageeditor-option-grid">
                                <ImageEditorOptionPreview selected={style === "none"} aria-label="None">
                                    <ImageEditorPreviewThumbnail label="None" imageSrc={imageSrc} />
                                </ImageEditorOptionPreview>
                                <ImageEditorOptionPreview selected={style === "single"} aria-label="Single">
                                    <ImageEditorPreviewThumbnail label="Single" imageSrc={imageSrc} style={{ border: "3px dashed #b0e855", borderRadius: "4px" }} />
                                </ImageEditorOptionPreview>
                                <ImageEditorOptionPreview selected={style === "multiple"} aria-label="Multiple">
                                    <ImageEditorPreviewThumbnail label="Multiple" imageSrc={imageSrc} style={{ border: "3px dashed #b0e855", borderRadius: "4px" }}>
                                        <span style={{
                                            position: "absolute",
                                            inset: "6px",
                                            border: "3px dashed #b0e855",
                                            borderRadius: "1px",
                                            boxSizing: "border-box",
                                            pointerEvents: "none"
                                        }}></span>
                                    </ImageEditorPreviewThumbnail>
                                </ImageEditorOptionPreview>
                            </div>
                        }
                    />
                    <FormField
                        label="Image Roundness"
                        editorId="frame-image-roundness"
                        editor={
                            <div className="k-imageeditor-field-row">
                                <Slider style={{ flex: 1, "--kendo-slider-start": 0, "--kendo-slider-end": imageRoundness } as React.CSSProperties} aria-label="Image Roundness" showButtons={false} showTicks={false} value={imageRoundness} min={0} max={100} />
                                <NumericTextbox id="frame-image-roundness" style={{ width: "80px", flex: "none" }} showClearButton={false} showSpinButton={false} value={String(imageRoundness)} />
                            </div>
                        }
                    />
                    {style === "multiple" && (
                        <FormField
                            label="Frames Amount"
                            editorId="frame-frames-amount"
                            editor={
                                <NumericTextbox id="frame-frames-amount" showClearButton={false} showSpinButton={false} value={String(framesAmount)} />
                            }
                        />
                    )}
                    {style !== "none" && (
                        <>
                            <FormField
                                label="Frame Thickness"
                                editorId="frame-thickness"
                                editor={
                                    <div className="k-imageeditor-field-row">
                                        <Slider style={{ flex: 1, "--kendo-slider-start": 0, "--kendo-slider-end": frameThickness } as React.CSSProperties} aria-label="Frame Thickness" showButtons={false} showTicks={false} value={frameThickness} min={0} max={100} />
                                        <NumericTextbox id="frame-thickness" style={{ width: "80px", flex: "none" }} showClearButton={false} showSpinButton={false} value={String(frameThickness)} />
                                    </div>
                                }
                            />
                            <FormField
                                label="Frame Roundness"
                                editorId="frame-roundness"
                                editor={
                                    <div className="k-imageeditor-field-row">
                                        <Slider style={{ flex: 1, "--kendo-slider-start": 0, "--kendo-slider-end": frameRoundness } as React.CSSProperties} aria-label="Frame Roundness" showButtons={false} showTicks={false} value={frameRoundness} min={0} max={100} />
                                        <NumericTextbox id="frame-roundness" style={{ width: "80px", flex: "none" }} showClearButton={false} showSpinButton={false} value={String(frameRoundness)} />
                                    </div>
                                }
                            />
                            <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                                <FormField
                                    label="Stroke Type"
                                    editor={ <DropdownList id="frame-stroke-type" value="Dashed" aria-label="Stroke Type" /> }
                                />
                                <FormField
                                    label="Offset"
                                    editorId="frame-offset"
                                    editor={ <NumericTextbox id="frame-offset" showClearButton={false} showSpinButton={false} value={String(offset)} prefix={<Icon icon="max-width" />} /> }
                                />
                            </Fieldset>
                            <FormField
                                label="Stroke Color"
                                editor={ <ColorPicker id="frame-stroke-color" value={strokeColor} aria-label="Stroke Color" /> }
                            />
                        </>
                    )}
                </Form>
            </ImageEditorPane>
        }

        children={
            style === "none" ? (
                <ImageEditorCanvas {...canvas} imageSrc={imageSrc} style={{ borderRadius: `${imageRoundness}px` }} />
            ) : (
                <div style={{ position: "relative", width: `${canvas.width}px`, height: `${canvas.height}px` }}>
                    <ImageEditorCanvas {...canvas} imageSrc={imageSrc} style={{ position: "absolute", top: 0, left: 0, borderRadius: `${imageRoundness}px` }} />
                    {/* inner ring sits flush on the image edge, overlaying it */}
                    <div style={{
                        position: "absolute",
                        top: 0, left: 0,
                        width: `${canvas.width}px`, height: `${canvas.height}px`,
                        border: `${frameThickness}px dashed ${strokeColor}`,
                        borderRadius: `${frameRoundness}px`,
                        boxSizing: "border-box",
                        pointerEvents: "none"
                    }}></div>
                    {style === "multiple" && (
                        <div style={{
                            position: "absolute",
                            top: `${frameThickness + offset}px`, left: `${frameThickness + offset}px`,
                            width: `${canvas.width - (frameThickness + offset) * 2}px`, height: `${canvas.height - (frameThickness + offset) * 2}px`,
                            border: `${frameThickness}px dashed ${strokeColor}`,
                            borderRadius: `${Math.max(frameRoundness - frameThickness - offset, 0)}px`,
                            boxSizing: "border-box",
                            pointerEvents: "none"
                        }}></div>
                    )}
                </div>
            )
        }
        {...props} />
);
