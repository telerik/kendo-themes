import { ImageEditor, ImageEditorPane } from "..";
import { Button } from "../../button";
import { NumericTextbox } from "../../numerictextbox";
import { Form, FormField } from "../../form";
import { Autocomplete } from "../../autocomplete";
import { RadioGroup, RadioItem, RadioButtonWithLabelAfter } from "../../radio";
import { SegmentedControl, SegmentedControlButton } from "../../segmented-control";
import { Slider } from "../../slider";
import { ToolbarSeparator, ToolbarItem } from "../../toolbar";


const blurSidebarItems = [
    <Button fillMode="flat" key="sidebar-button-1" icon="image-resize" aria-label="Resize"></Button>,
    <Button fillMode="flat" key="sidebar-button-2" icon="crop" aria-label="Crop"></Button>,
    <Button fillMode="flat" key="sidebar-button-3" icon="rotate" aria-label="Rotate"></Button>,
    <div className="k-separator" key="sidebar-separator-1"></div>,
    <Button fillMode="flat" key="sidebar-button-4" icon="free-text" aria-label="Text"></Button>,
    <Button fillMode="flat" key="sidebar-button-5" icon="shapes" aria-label="Shapes"></Button>,
    <div className="k-separator" key="sidebar-separator-2"></div>,
    <Button fillMode="flat" key="sidebar-button-6" icon="droplet" selected aria-label="Blur"></Button>,
    <Button fillMode="flat" key="sidebar-button-7" icon="sliders" aria-label="Adjustments"></Button>,
    <div className="k-separator" key="sidebar-separator-3"></div>,
    <Button fillMode="flat" key="sidebar-button-8" icon="image" aria-label="Filters"></Button>,
    <Button fillMode="flat" key="sidebar-button-9" icon="brightness-contrast" aria-label="Brightness / Contrast"></Button>
];

export const ImageEditorBlur = ({ shape = "rectangular", intensity = 16, ...props }: any) => (
    <ImageEditor
        sidebarItems={blurSidebarItems}
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
            <ImageEditorPane title="Blur" actions={
                <>
                    <Button>Reset</Button>
                    <Button themeColor="primary">Apply</Button>
                </>
            }>
                <SegmentedControl thumbStyles={{ width: "50%" }} stretched aria-label="Redaction Tool" style={{ flexShrink: 0 }}>
                    <SegmentedControlButton icon="blur" selected>Blur</SegmentedControlButton>
                    <SegmentedControlButton icon="grid">Pixelate</SegmentedControlButton>
                </SegmentedControl>

                <Form tag="div">
                    <FormField
                        label="Markee Tool Shape"
                        editor={
                            <RadioGroup layout="horizontal">
                                <RadioItem>
                                    <RadioButtonWithLabelAfter id="blur-shape-rectangular" name="blur-shape" checked={shape === "rectangular"}>Rectangular</RadioButtonWithLabelAfter>
                                </RadioItem>
                                <RadioItem>
                                    <RadioButtonWithLabelAfter id="blur-shape-elliptical" name="blur-shape" checked={shape === "elliptical"}>Elliptical</RadioButtonWithLabelAfter>
                                </RadioItem>
                            </RadioGroup>
                        }
                    />
                    <FormField
                        label="Blur Intensity"
                        editorId="blur-intensity"
                        editor={
                            <div className="k-d-flex k-gap-4 k-align-items-center">
                                <Slider
                                    className="k-flex-1"
                                    aria-label="Blur Intensity"
                                    showButtons={false}
                                    showTicks={false}
                                    value={intensity}
                                    min={0}
                                    max={100}
                                    style={{ "--kendo-slider-start": 0, "--kendo-slider-end": intensity } as React.CSSProperties}
                                />
                                <NumericTextbox
                                    id="blur-intensity"
                                    style={{ width: "80px", flex: "none" }}
                                    showClearButton={false}
                                    showSpinButton={false}
                                    value={String(intensity)}
                                />
                            </div>
                        }
                    />
                </Form>
            </ImageEditorPane>
        }

        children={
            <>
                <canvas width="494" height="307" role="img" aria-label="Image being edited" style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundSize: "cover", filter: "blur(8px)" }}></canvas>
                <div className="k-imageeditor-crop-overlay">
                    <div className="k-imageeditor-crop" style={{ borderStyle: "dashed" }}></div>
                </div>
            </>
        }
        {...props} />
);
