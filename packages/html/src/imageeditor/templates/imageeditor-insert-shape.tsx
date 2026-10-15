import { ImageEditor, ImageEditorPane, ImageEditorOptionList, ImageEditorOptionPreview } from "..";
import { Button } from "../../button";
import { ButtonGroup } from "../../button-group";
import { Combobox } from "../../combobox";
import { NumericTextbox } from "../../numerictextbox";
import { ColorPicker } from "../../colorpicker";
import { Form, FormField, Fieldset } from "../../form";
import { Icon } from "../../icon";
import { InputSuffixText } from "../../input";
import { Slider } from "../../slider";
import { SegmentedControl, SegmentedControlButton } from "../../segmented-control";

const insertShapeSidebarItems = [
    <Button fillMode="flat" key="sidebar-button-1" icon="image-resize" aria-label="Resize"></Button>,
    <Button fillMode="flat" key="sidebar-button-2" icon="crop" aria-label="Crop"></Button>,
    <Button fillMode="flat" key="sidebar-button-3" icon="rotate" aria-label="Rotate"></Button>,
    <div className="k-separator" key="sidebar-separator-1"></div>,
    <Button fillMode="flat" key="sidebar-button-4" icon="free-text" aria-label="Text"></Button>,
    <Button fillMode="flat" key="sidebar-button-5" icon="shapes" selected aria-label="Shapes"></Button>,
    <div className="k-separator" key="sidebar-separator-2"></div>,
    <Button fillMode="flat" key="sidebar-button-6" icon="drop-half-pixelated" aria-label="Blur"></Button>,
    <Button fillMode="flat" key="sidebar-button-7" icon="sliders-horizontal" aria-label="Adjustments"></Button>,
    <Button fillMode="flat" key="sidebar-button-8" icon="circles-three-intersecting" aria-label="Filters"></Button>,
    <div className="k-separator" key="sidebar-separator-3"></div>,
    <Button fillMode="flat" key="sidebar-button-9" icon="frame-corners" aria-label="Frame"></Button>,
    <Button fillMode="flat" key="sidebar-button-10" icon="circle-half-tilted" aria-label="Shadow"></Button>
];

const shapeTypes = [
    { label: "Square", icon: "checkbox" },
    { label: "Rectangle", icon: "rectangle-shape" },
    { label: "Circle", icon: "circle-shape" },
    { label: "Oval", icon: "oval-shape" },
    { label: "Triangle", icon: "kpi-status-hold" },
    { label: "Star", icon: "star" },
    { label: "Heart", icon: "heart" },
    { label: "Diamond", icon: "kpi-status-deny" },
    { label: "Hexagon", icon: "hexagon-shape" },
    { label: "Pentagon", icon: "pentagon-shape" },
    { label: "Arrow", icon: "arrow-right" }
];

export const ImageEditorInsertShape = ({
    selected = false,
    shapeType = "Oval",
    strokeColor = "#000000",
    strokeWidth = 2,
    fillColor = "#ffffff93",
    textColor = "#000000",
    fontFamily = "Trebuchet MS",
    fontSize = 48,
    alignment = "center",
    ...props
}: any) => (
    <ImageEditor
        sidebarItems={insertShapeSidebarItems}
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
                            <ImageEditorOptionList scrollable scrollingPosition="both">
                                {shapeTypes.map((shape) => (
                                    <ImageEditorOptionPreview key={shape.label} selected={shape.label === shapeType}>
                                        <div className="k-imageeditor-option-content">
                                            <Icon icon={shape.icon} />
                                            <span className="k-imageeditor-option-label">{shape.label}</span>
                                        </div>
                                    </ImageEditorOptionPreview>
                                ))}
                            </ImageEditorOptionList>
                        }
                    />
                    <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                        <FormField
                            label="Stroke Color"
                            editor={ <ColorPicker id="shape-stroke-color" value={strokeColor} aria-label="Stroke Color" /> }
                        />
                        <FormField
                            label="Stroke Width"
                            editorId="shape-stroke-width"
                            editor={ <NumericTextbox id="shape-stroke-width" showSpinButton={false} value={String(strokeWidth)} prefix={<Icon icon="border-width" />} /> }
                        />
                    </Fieldset>
                    <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                        <FormField
                            label="Fill Color"
                            editor={ <ColorPicker id="shape-fill-color" value={fillColor} valueIconName="droplet" aria-label="Fill Color" /> }
                        />
                        <FormField
                            label="Text Color"
                            editor={ <ColorPicker disabled={!selected} id="shape-text-color" value={textColor} valueIconName="foreground-color" aria-label="Text Color" /> }
                        />
                    </Fieldset>
                    <FormField
                        label="Font Family"
                        editorId="shape-font-family"
                        editor={ <Combobox disabled={!selected} id="shape-font-family" prefix={<Icon icon="font-family" />} value={fontFamily} /> }
                    />
                    <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                        <FormField
                            label="Font Size"
                            editorId="shape-font-size"
                            editor={ <NumericTextbox disabled={!selected} id="shape-font-size" showSpinButton={false} value={String(fontSize)} prefix={<Icon icon="font-size" />} /> }
                        />
                        <FormField
                            label="Alignment"
                            editor={
                                <ButtonGroup disabled={!selected}>
                                    <Button disabled={!selected} className="k-group-start" icon="align-left" selected={alignment === "left"} aria-label="Align Left"></Button>
                                    <Button disabled={!selected} icon="align-center" selected={alignment === "center"} aria-label="Align Center"></Button>
                                    <Button disabled={!selected} className="k-group-end" icon="align-right" selected={alignment === "right"} aria-label="Align Right"></Button>
                                </ButtonGroup>
                            }
                        />
                    </Fieldset>
                    <FormField
                        label="Format"
                        editor={
                            <div className="k-imageeditor-controls">
                                <Button disabled={!selected} icon="bold" aria-label="Bold"></Button>
                                <Button disabled={!selected} icon="italic" aria-label="Italic"></Button>
                                <Button disabled={!selected} icon="underline" aria-label="Underline"></Button>
                                <Button disabled={!selected} icon="strikethrough" aria-label="Strikethrough"></Button>
                                <Button disabled={!selected} icon="convert-uppercase" aria-label="Uppercase"></Button>
                                <Button disabled={!selected} icon="convert-lowercase" aria-label="Lowercase"></Button>
                            </div>
                        }
                    />
                    <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                        <FormField
                            label="Align Horizontal"
                            editor={
                                <ButtonGroup disabled={!selected}>
                                    <Button disabled={!selected} className="k-group-start" icon="align-items-start" aria-label="Align Left"></Button>
                                    <Button disabled={!selected} icon="align-items-center" aria-label="Align Center"></Button>
                                    <Button disabled={!selected} className="k-group-end" icon="align-items-end" aria-label="Align Right"></Button>
                                </ButtonGroup>
                            }
                        />
                        <FormField
                            label="Align Vertical"
                            editor={
                                <ButtonGroup disabled={!selected}>
                                    <Button disabled={!selected} className="k-group-start" icon="align-items-start-alt" aria-label="Align Top"></Button>
                                    <Button disabled={!selected} icon="align-items-center-alt" aria-label="Align Middle"></Button>
                                    <Button disabled={!selected} className="k-group-end" icon="align-items-end-alt" aria-label="Align Bottom"></Button>
                                </ButtonGroup>
                            }
                        />
                    </Fieldset>
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
                    <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                        <FormField
                            label="Rotate Options"
                            editor={
                                <div className="k-imageeditor-controls">
                                    <Button disabled={!selected} icon="rotate-right" aria-label="Rotate Right"></Button>
                                    <Button disabled={!selected} icon="rotate-left" aria-label="Rotate Left"></Button>
                                </div>
                            }
                        />
                        <FormField
                            label="Flip Options"
                            editor={
                                <div className="k-imageeditor-controls">
                                    <Button disabled={!selected} icon="flip-horizontal" aria-label="Flip Horizontal"></Button>
                                    <Button disabled={!selected} icon="flip-vertical" aria-label="Flip Vertical"></Button>
                                </div>
                            }
                        />
                    </Fieldset>
                </Form>
            </ImageEditorPane>
        }

        children={
            <canvas width="494" height="307" role="img" aria-label="Image being edited" style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundSize: "cover" }}></canvas>
        }
        {...props} />
);

export default ImageEditorInsertShape;
