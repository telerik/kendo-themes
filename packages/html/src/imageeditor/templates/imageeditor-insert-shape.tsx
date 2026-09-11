import { ImageEditor, ImageEditorPane, ImageEditorAspectRatioPreview } from "..";
import { Button } from "../../button";
import { ButtonGroup } from "../../button-group";
import { Combobox } from "../../combobox";
import { NumericTextbox } from "../../numerictextbox";
import { ColorPicker } from "../../colorpicker";
import { Form, FormField, Fieldset } from "../../form";
import { Icon } from "../../icon";
import { Autocomplete } from "../../autocomplete";
import { SegmentedControl, SegmentedControlButton } from "../../segmented-control";
import { ToolbarSeparator, ToolbarItem, FloatingToolbar } from "../../toolbar";

const insertShapeSidebarItems = [
    <Button fillMode="flat" key="sidebar-button-1" icon="image-resize" aria-label="Resize"></Button>,
    <Button fillMode="flat" key="sidebar-button-2" icon="crop" aria-label="Crop"></Button>,
    <Button fillMode="flat" key="sidebar-button-3" icon="rotate" aria-label="Rotate"></Button>,
    <div className="k-separator" key="sidebar-separator-1"></div>,
    <Button fillMode="flat" key="sidebar-button-4" icon="free-text" aria-label="Text"></Button>,
    <Button fillMode="flat" key="sidebar-button-5" icon="shapes" selected aria-label="Shapes"></Button>,
    <div className="k-separator" key="sidebar-separator-2"></div>,
    <Button fillMode="flat" key="sidebar-button-6" icon="droplet" aria-label="Overlay"></Button>,
    <Button fillMode="flat" key="sidebar-button-7" icon="sliders" aria-label="Adjustments"></Button>,
    <div className="k-separator" key="sidebar-separator-3"></div>,
    <Button fillMode="flat" key="sidebar-button-8" icon="image" aria-label="Filters"></Button>,
    <Button fillMode="flat" key="sidebar-button-9" icon="brightness-contrast" aria-label="Brightness / Contrast"></Button>
];

const shapeTypes = [
    "Circle",
    "Oval",
    "Square",
    "Rectangle",
    "Triangle",
    "Star",
    "Heart",
    "Diamond",
    "Hexagon",
    "Pentagon",
    "Arrow",
    "Line"
];

export const ImageEditorInsertShape = (props: any) => (
    <ImageEditor
        sidebarItems={insertShapeSidebarItems}
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
            <ImageEditorPane title="Shapes and Lines" actions={
                <>
                    <Button>Remove</Button>
                    <Button themeColor="primary">Insert</Button>
                </>
            }>
                <SegmentedControl thumbStyles={{ width: "50%" }} stretched aria-label="Shape or Line" style={{ flexShrink: 0 }}>
                    <SegmentedControlButton icon="shapes" selected>Shape</SegmentedControlButton>
                    <SegmentedControlButton icon="shape-line">Line</SegmentedControlButton>
                </SegmentedControl>

                <Form tag="div">
                    <FormField
                        label="Type"
                        editor={
                            <div className="k-imageeditor-aspect-ratio-options k-imageeditor-aspect-ratio-options-scrollable k-imageeditor-aspect-ratio-options-scrollable-end">
                                <div className="k-imageeditor-aspect-ratio-options-list">
                                    {shapeTypes.map((label) => (
                                        <ImageEditorAspectRatioPreview key={label} label={label} selected={label === "Oval"} />
                                    ))}
                                </div>
                            </div>
                        }
                    />
                    <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                        <FormField
                            label="Stroke Color"
                            editor={ <ColorPicker id="shape-stroke-color" value="#b0e855" aria-label="Stroke Color" /> }
                        />
                        <FormField
                            label="Stroke Width"
                            editorId="shape-stroke-width"
                            editor={ <NumericTextbox id="shape-stroke-width" showSpinButton={false} value="8" prefix={<Icon icon="border-width" />} /> }
                        />
                    </Fieldset>
                    <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                        <FormField
                            label="Fill Color"
                            editor={ <ColorPicker id="shape-fill-color" value="#eae382" valueIconName="droplet" aria-label="Fill Color" /> }
                        />
                        <FormField
                            label="Text Color"
                            editor={ <ColorPicker id="shape-text-color" value="#706903" valueIconName="foreground-color" aria-label="Text Color" /> }
                        />
                    </Fieldset>
                    <FormField
                        label="Font Family"
                        editorId="shape-font-family"
                        editor={ <Combobox id="shape-font-family" prefix={<Icon icon="font-family" />} value="Trebuchet MS" /> }
                    />
                    <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                        <FormField
                            label="Font Size"
                            editorId="shape-font-size"
                            editor={ <NumericTextbox id="shape-font-size" showSpinButton={false} value="24" prefix={<Icon icon="font-size" />} /> }
                        />
                        <FormField
                            label="Alignment"
                            editor={
                                <ButtonGroup>
                                    <Button className="k-group-start" icon="align-left" aria-label="Align Left"></Button>
                                    <Button icon="align-center" selected aria-label="Align Center"></Button>
                                    <Button className="k-group-end" icon="align-right" aria-label="Align Right"></Button>
                                </ButtonGroup>
                            }
                        />
                    </Fieldset>
                    <FormField
                        label="Format"
                        editor={
                            <div className="k-d-flex k-gap-2">
                                <Button icon="bold" aria-label="Bold"></Button>
                                <Button icon="italic" aria-label="Italic"></Button>
                                <Button icon="underline" aria-label="Underline"></Button>
                                <Button icon="strikethrough" aria-label="Strikethrough"></Button>
                                <Button icon="convert-uppercase" aria-label="Uppercase"></Button>
                                <Button icon="convert-lowercase" aria-label="Lowercase"></Button>
                            </div>
                        }
                    />
                    <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                        <FormField
                            label="Align Horizontal"
                            editor={
                                <ButtonGroup>
                                    <Button className="k-group-start" icon="align-items-start" aria-label="Align Left"></Button>
                                    <Button icon="align-items-center" aria-label="Align Center"></Button>
                                    <Button className="k-group-end" icon="align-items-end" aria-label="Align Right"></Button>
                                </ButtonGroup>
                            }
                        />
                        <FormField
                            label="Align Vertical"
                            editor={
                                <ButtonGroup>
                                    <Button className="k-group-start" icon="align-items-start-alt" aria-label="Align Top"></Button>
                                    <Button icon="align-items-center-alt" aria-label="Align Middle"></Button>
                                    <Button className="k-group-end" icon="align-items-end-alt" aria-label="Align Bottom"></Button>
                                </ButtonGroup>
                            }
                        />
                    </Fieldset>
                </Form>
            </ImageEditorPane>
        }

        children={
            <>
                <canvas width="494" height="307" role="img" aria-label="Image being edited" style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundSize: "cover" }}></canvas>
                <div className="k-imageeditor-resize" style={{ width: "165px", height: "54px", top: "140px", left: "165px" }}>
                    <div style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        background: "#eae382",
                        border: "2px solid #b0e855",
                        boxSizing: "border-box"
                    }}>
                        <p style={{
                            margin: 0,
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: "'Trebuchet MS', sans-serif",
                            fontSize: "16px",
                            lineHeight: 1,
                            color: "#706903",
                            whiteSpace: "nowrap"
                        }}>Shape text</p>
                    </div>
                    <span className="k-scale-handle k-resize-nw"></span>
                    <span className="k-scale-handle k-resize-ne"></span>
                    <span className="k-scale-handle k-resize-sw"></span>
                    <span className="k-scale-handle k-resize-se"></span>
                    <span className="k-resize-handle k-resize-n"></span>
                    <span className="k-resize-handle k-resize-s"></span>
                    <span className="k-resize-handle k-resize-w"></span>
                    <span className="k-resize-handle k-resize-e"></span>
                    <FloatingToolbar resizable offset={{ top: "62px", left: "0" }}>
                        <Button icon="copy" aria-label="Duplicate"></Button>
                        <Button icon="pencil" aria-label="Edit"></Button>
                        <Button icon="flip-horizontal" aria-label="Flip Horizontal"></Button>
                        <Button icon="flip-vertical" aria-label="Flip Vertical"></Button>
                        <Button icon="trash" aria-label="Delete"></Button>
                    </FloatingToolbar>
                </div>
            </>
        }
        {...props} />
);

export default ImageEditorInsertShape;
