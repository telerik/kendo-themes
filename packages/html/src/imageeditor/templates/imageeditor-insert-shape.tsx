import { ImageEditor, ImageEditorPane, ImageEditorOptionList, ImageEditorOptionPreview, ImageEditorCanvas } from "..";
import { Button } from "../../button";
import { ToolbarSeparator } from "../../toolbar";
import { ButtonGroup } from "../../button-group";
import { Combobox } from "../../combobox";
import { NumericTextbox } from "../../numerictextbox";
import { ColorPicker } from "../../colorpicker";
import { Form, FormField, Fieldset } from "../../form";
import { Icon } from "../../icon";
import { InputSuffixText } from "../../input";
import { Slider } from "../../slider";
import { SegmentedControl, SegmentedControlButton } from "../../segmented-control";

export const ImageEditorInsertShape = ({
    selected = false,
    shapeType = "Oval",
    strokeColor = "#000000",
    strokeWidth = 2,
    fillColor = "#ffffff93",
    textColor = "#000000",
    fontFamily = "Trebuchet MS",
    fontSize = 48,
    alignment,
    adaptive,
    imageSrc,
    ...props
}: any) => (
    <ImageEditor
        adaptive={adaptive}
        activeTool="Shapes"
        toolbarItems={adaptive && selected ? (
            <>
                <Button fillMode="flat" icon="squares-overlapping-plus" aria-label="Duplicate"></Button>
                <Button fillMode="flat" icon="pencil" aria-label="Edit"></Button>
                <ToolbarSeparator></ToolbarSeparator>
                <Button fillMode="flat" icon="flip-horizontal" aria-label="Flip Horizontal"></Button>
                <Button fillMode="flat" icon="flip-vertical" aria-label="Flip Vertical"></Button>
                <ToolbarSeparator></ToolbarSeparator>
                <Button fillMode="flat" icon="trash" aria-label="Delete"></Button>
            </>
        ) : undefined}
        actionPane={
            <ImageEditorPane title="Shapes and Lines" adaptive={adaptive} confirmDisabled={!selected} actions={
                <>
                    <Button disabled={!selected}>Remove</Button>
                    <Button themeColor="primary" disabled={!selected}>Insert</Button>
                </>
            }>
                <SegmentedControl thumbStyles={{ width: "50%" }} stretched aria-label="Shape or Line">
                    <SegmentedControlButton icon="shapes" selected>Shape</SegmentedControlButton>
                    <SegmentedControlButton icon="shape-line">Line</SegmentedControlButton>
                </SegmentedControl>

                <Form tag="div">
                    <FormField
                        label="Type"
                        editor={
                            <ImageEditorOptionList scrollable>
                                <ImageEditorOptionPreview selected={shapeType === "Square"}>
                                    <div className="k-imageeditor-option-content">
                                        <Icon icon="checkbox" />
                                        <span className="k-imageeditor-option-label">Square</span>
                                    </div>
                                </ImageEditorOptionPreview>
                                <ImageEditorOptionPreview selected={shapeType === "Rectangle"}>
                                    <div className="k-imageeditor-option-content">
                                        <Icon icon="rectangle-shape" />
                                        <span className="k-imageeditor-option-label">Rectangle</span>
                                    </div>
                                </ImageEditorOptionPreview>
                                <ImageEditorOptionPreview selected={shapeType === "Circle"}>
                                    <div className="k-imageeditor-option-content">
                                        <Icon icon="circle-shape" />
                                        <span className="k-imageeditor-option-label">Circle</span>
                                    </div>
                                </ImageEditorOptionPreview>
                                <ImageEditorOptionPreview selected={shapeType === "Oval"}>
                                    <div className="k-imageeditor-option-content">
                                        <Icon icon="oval-shape" />
                                        <span className="k-imageeditor-option-label">Oval</span>
                                    </div>
                                </ImageEditorOptionPreview>
                                <ImageEditorOptionPreview selected={shapeType === "Triangle"}>
                                    <div className="k-imageeditor-option-content">
                                        <Icon icon="kpi-status-hold" />
                                        <span className="k-imageeditor-option-label">Triangle</span>
                                    </div>
                                </ImageEditorOptionPreview>
                                <ImageEditorOptionPreview selected={shapeType === "Star"}>
                                    <div className="k-imageeditor-option-content">
                                        <Icon icon="star" />
                                        <span className="k-imageeditor-option-label">Star</span>
                                    </div>
                                </ImageEditorOptionPreview>
                                <ImageEditorOptionPreview selected={shapeType === "Heart"}>
                                    <div className="k-imageeditor-option-content">
                                        <Icon icon="heart" />
                                        <span className="k-imageeditor-option-label">Heart</span>
                                    </div>
                                </ImageEditorOptionPreview>
                                <ImageEditorOptionPreview selected={shapeType === "Diamond"}>
                                    <div className="k-imageeditor-option-content">
                                        <Icon icon="kpi-status-deny" />
                                        <span className="k-imageeditor-option-label">Diamond</span>
                                    </div>
                                </ImageEditorOptionPreview>
                                <ImageEditorOptionPreview selected={shapeType === "Hexagon"}>
                                    <div className="k-imageeditor-option-content">
                                        <Icon icon="hexagon-shape" />
                                        <span className="k-imageeditor-option-label">Hexagon</span>
                                    </div>
                                </ImageEditorOptionPreview>
                                <ImageEditorOptionPreview selected={shapeType === "Pentagon"}>
                                    <div className="k-imageeditor-option-content">
                                        <Icon icon="pentagon-shape" />
                                        <span className="k-imageeditor-option-label">Pentagon</span>
                                    </div>
                                </ImageEditorOptionPreview>
                                <ImageEditorOptionPreview selected={shapeType === "Arrow"}>
                                    <div className="k-imageeditor-option-content">
                                        <Icon icon="arrow-right" />
                                        <span className="k-imageeditor-option-label">Arrow</span>
                                    </div>
                                </ImageEditorOptionPreview>
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
                            editor={ <NumericTextbox id="shape-stroke-width" showClearButton={false} showSpinButton={false} value={String(strokeWidth)} prefix={<Icon icon="border-width" />} /> }
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
                        editor={ <Combobox disabled={!selected} id="shape-font-family" showClearButton={false} prefix={<Icon icon="font-family" />} value={fontFamily} /> }
                    />
                    <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                        <FormField
                            label="Font Size"
                            editorId="shape-font-size"
                            editor={ <NumericTextbox disabled={!selected} id="shape-font-size" showClearButton={false} showSpinButton={false} value={String(fontSize)} prefix={<Icon icon="font-size" />} /> }
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
            <ImageEditorCanvas adaptive={adaptive} imageSrc={imageSrc} />
        }
        {...props} />
);

export default ImageEditorInsertShape;
