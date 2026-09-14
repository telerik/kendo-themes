import { ImageEditor, ImageEditorPane, ImageEditorAspectRatioPreview } from "..";
import { Button } from "../../button";
import { NumericTextbox } from "../../numerictextbox";
import { ColorPicker } from "../../colorpicker";
import { DropdownList } from "../../dropdownlist";
import { Form, FormField, Fieldset } from "../../form";
import { Icon } from "../../icon";
import { Autocomplete } from "../../autocomplete";
import { Slider } from "../../slider";
import { ToolbarSeparator, ToolbarItem } from "../../toolbar";

// icon names below are Figma-only placeholders and are not yet part of the Kendo icon set
const framesSidebarItems = [
    <Button fillMode="flat" key="sidebar-button-1" icon="image-resize" aria-label="Resize"></Button>,
    <Button fillMode="flat" key="sidebar-button-2" icon="crop" aria-label="Crop"></Button>,
    <Button fillMode="flat" key="sidebar-button-3" icon="rotate" aria-label="Rotate"></Button>,
    <div className="k-separator" key="sidebar-separator-1"></div>,
    <Button fillMode="flat" key="sidebar-button-4" icon="free-text" aria-label="Text"></Button>,
    <Button fillMode="flat" key="sidebar-button-5" icon="shapes" aria-label="Shapes"></Button>,
    <div className="k-separator" key="sidebar-separator-2"></div>,
    <Button fillMode="flat" key="sidebar-button-6" icon="droplet" aria-label="Blur"></Button>,
    <Button fillMode="flat" key="sidebar-button-7" icon="sliders" aria-label="Adjustments"></Button>,
    <Button fillMode="flat" key="sidebar-button-8" icon="circles-three-intersecting" aria-label="Filters"></Button>,
    <div className="k-separator" key="sidebar-separator-3"></div>,
    <Button fillMode="flat" key="sidebar-button-9" icon="frame-corners" selected aria-label="Frame"></Button>,
    <Button fillMode="flat" key="sidebar-button-10" icon="circle-half-tilted" aria-label="Brightness / Contrast"></Button>
];

const FrameSlider = ({ id, label, value }: { id: string; label: string; value: number }) => (
    <FormField
        label={label}
        editorId={id}
        editor={
            <div className="k-d-flex k-gap-4 k-align-items-center">
                <Slider
                    className="k-flex-1"
                    aria-label={label}
                    showButtons={false}
                    showTicks={false}
                    value={value}
                    min={0}
                    max={100}
                    style={{ "--kendo-slider-start": 0, "--kendo-slider-end": value } as React.CSSProperties}
                />
                <NumericTextbox
                    id={id}
                    style={{ width: "80px", flex: "none" }}
                    showClearButton={false}
                    showSpinButton={false}
                    value={String(value)}
                />
            </div>
        }
    />
);

const frameStylePreviews: { [key: string]: React.CSSProperties } = {
    none: {},
    single: { border: "3px dashed #b0e855", borderRadius: "4px" },
    multiple: { border: "3px dashed #b0e855", borderRadius: "4px" }
};

const FrameStylePreview = ({ styleKey, label, selected }: { styleKey: string; label: string; selected: boolean }) => (
    <ImageEditorAspectRatioPreview selected={selected} aria-label={label}>
        <span
            aria-hidden="true"
            style={{
                position: "relative",
                display: "block",
                width: "100%",
                height: "40px",
                borderRadius: "2px",
                backgroundImage: "url('/packages/html/assets/sofia.jpg')",
                backgroundSize: "cover",
                boxSizing: "border-box",
                ...frameStylePreviews[styleKey]
            }}
        >
            {styleKey === "multiple" && (
                <span style={{
                    position: "absolute",
                    inset: "6px",
                    border: "3px dashed #b0e855",
                    borderRadius: "1px",
                    boxSizing: "border-box",
                    pointerEvents: "none"
                }}></span>
            )}
        </span>
        <span style={{ marginBlockStart: "6px" }}>{label}</span>
    </ImageEditorAspectRatioPreview>
);

export const ImageEditorFrames = ({
    style = "single",
    imageRoundness = 24,
    framesAmount = 3,
    frameThickness = 12,
    frameRoundness = style === "multiple" ? 40 : 16,
    offset = 12,
    strokeColor = "#b0e855",
    ...props
}: any) => {
    const framePadding = 0;

    return (
        <ImageEditor
            sidebarItems={framesSidebarItems}
            toolbarItems={[
        <Button fillMode="flat" key="toolbar-button-1" icon="image-add" aria-label="Image Add"></Button>,
        <ToolbarSeparator key="toolbar-separator-1"></ToolbarSeparator>,
        <Button fillMode="flat" key="toolbar-button-2" icon="undo" aria-label="Undo"></Button>,
        <Button fillMode="flat" key="toolbar-button-3" icon="redo" aria-label="Redo"></Button>,
        <ToolbarSeparator key="toolbar-separator-2"></ToolbarSeparator>,
        <Button fillMode="flat" key="toolbar-button-4" icon="download" aria-label="Download"></Button>,
        <div className="k-spacer" key="toolbar-spacer"></div>,
         <Button fillMode="flat" key="toolbar-button-5" icon="zoom-in" aria-label="Zoom In"></Button>,
        <ToolbarItem key="toolbar-item-1">
            <Autocomplete fillMode="flat" value="Fit" aria-label="Zoom options" />
        </ToolbarItem>,
         <Button fillMode="flat" key="toolbar-button-6" icon="zoom-out" aria-label="Zoom Out"></Button>
            ]}
            actionPane={
                <ImageEditorPane title="Frame" actions={
                    <>
                        <Button>Reset</Button>
                        <Button themeColor="primary">Apply</Button>
                    </>
                }>
                    <Form tag="div">
                        <FormField
                            label="Frame Style"
                            editor={
                                <div className="k-d-grid k-grid-cols-3 k-gap-3">
                                    <FrameStylePreview styleKey="none" label="None" selected={style === "none"} />
                                    <FrameStylePreview styleKey="single" label="Single" selected={style === "single"} />
                                    <FrameStylePreview styleKey="multiple" label="Multiple" selected={style === "multiple"} />
                                </div>
                            }
                        />
                        <FrameSlider id="frame-image-roundness" label="Image Roundness" value={imageRoundness} />
                        {style === "multiple" && (
                            <FormField
                                label="Frames Amount"
                                editorId="frame-frames-amount"
                                editor={
                                    <NumericTextbox id="frame-frames-amount" showClearButton={false} value={String(framesAmount)} />
                                }
                            />
                        )}
                        {style !== "none" && (
                            <>
                                <FrameSlider id="frame-thickness" label="Frame Thickness" value={frameThickness} />
                                <FrameSlider id="frame-roundness" label="Frame Roundness" value={frameRoundness} />
                                <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                                    <FormField
                                        label="Stroke Type"
                                        editor={ <DropdownList id="frame-stroke-type" value="Dashed" prefix={<Icon icon="border-style" />} aria-label="Stroke Type" /> }
                                    />
                                    <FormField
                                        label="Offset"
                                        editorId="frame-offset"
                                        editor={ <NumericTextbox id="frame-offset" showSpinButton={false} value={String(offset)} prefix={<Icon icon="max-width" />} /> }
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
                    <canvas width="494" height="307" role="img" aria-label="Image being edited" style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundSize: "cover", borderRadius: `${imageRoundness}px` }}></canvas>
                ) : (
                    <div style={{ position: "relative", width: `${494 + framePadding * 2}px`, height: `${307 + framePadding * 2}px` }}>
                        <canvas width="494" height="307" role="img" aria-label="Image being edited" style={{
                            position: "absolute", top: `${framePadding}px`, left: `${framePadding}px`,
                            backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundSize: "cover",
                            borderRadius: `${imageRoundness}px`
                        }}></canvas>
                        {/* inner ring sits flush on the image edge, overlaying it */}
                        <div style={{
                            position: "absolute",
                            top: `${framePadding}px`, left: `${framePadding}px`,
                            width: "494px", height: "307px",
                            border: `${frameThickness}px dashed ${strokeColor}`,
                            borderRadius: `${frameRoundness}px`,
                            boxSizing: "border-box",
                            pointerEvents: "none"
                        }}></div>
                        {style === "multiple" && (
                            <div style={{
                                position: "absolute",
                                top: `${framePadding + frameThickness + offset}px`, left: `${framePadding + frameThickness + offset}px`,
                                width: `${494 - (frameThickness + offset) * 2}px`, height: `${307 - (frameThickness + offset) * 2}px`,
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
};
