import { ImageEditor, ImageEditorPane, ImageEditorCanvas } from "..";
import { Button } from "../../button";
import { ToolbarSeparator } from "../../toolbar";
import { ButtonGroup } from "../../button-group";
import { NumericTextbox } from "../../numerictextbox";
import { ColorPicker } from "../../colorpicker";
import { DropdownList } from "../../dropdownlist";
import { Form, FormField, Fieldset } from "../../form";
import { Icon } from "../../icon";
import { InputSuffixText } from "../../input";
import { Slider } from "../../slider";
import { SegmentedControl, SegmentedControlButton } from "../../segmented-control";

export const ImageEditorInsertLine = ({
    selected = false,
    strokeColor = "#000000",
    strokeWidth = 4,
    strokeType = "Dotted",
    startPoint = "None",
    endPoint = "None",
    opacity = 100,
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
                <SegmentedControl thumbStyles={{ width: "50%", left: "50%" }} stretched aria-label="Shape or Line">
                    <SegmentedControlButton icon="shapes">Shape</SegmentedControlButton>
                    <SegmentedControlButton icon="shape-line" selected>Line</SegmentedControlButton>
                </SegmentedControl>

                <Form tag="div">
                    <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                        <FormField
                            label="Stroke Color"
                            editor={ <ColorPicker id="line-stroke-color" value={strokeColor} aria-label="Stroke Color" /> }
                        />
                        <FormField
                            label="Stroke Width"
                            editorId="line-stroke-width"
                            editor={ <NumericTextbox id="line-stroke-width" showClearButton={false} showSpinButton={false} value={String(strokeWidth)} prefix={<Icon icon="border-width" />} /> }
                        />
                    </Fieldset>
                    <FormField
                        label="Stroke Type"
                        editor={ <DropdownList id="line-stroke-type" value={strokeType} aria-label="Stroke Type" /> }
                    />
                    <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                        <FormField
                            label="Start Point"
                            editor={ <DropdownList id="line-start-point" value={startPoint} aria-label="Start Point" /> }
                        />
                        <FormField
                            label="End Point"
                            editor={ <DropdownList id="line-end-point" value={endPoint} aria-label="End Point" /> }
                        />
                    </Fieldset>
                    <FormField
                        label="Opacity"
                        editor={ <NumericTextbox id="line-opacity" showClearButton={false} showSpinButton={false} value={`${opacity}%`} prefix={<Icon icon="transparency" />} aria-label="Opacity" /> }
                    />
                    <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                        <FormField
                            label="Align"
                            editor={
                                <ButtonGroup disabled={!selected}>
                                    <Button disabled={!selected} className="k-group-start" icon="align-items-start" aria-label="Align Left"></Button>
                                    <Button disabled={!selected} icon="align-items-center" selected={selected} aria-label="Align Center"></Button>
                                    <Button disabled={!selected} className="k-group-end" icon="align-items-end" aria-label="Align Right"></Button>
                                </ButtonGroup>
                            }
                        />
                        <FormField
                            label="Align Vertical"
                            editor={
                                <ButtonGroup disabled={!selected}>
                                    <Button disabled={!selected} className="k-group-start" icon="align-items-start-alt" aria-label="Align Top"></Button>
                                    <Button disabled={!selected} icon="align-items-center-alt" selected={selected} aria-label="Align Middle"></Button>
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

export default ImageEditorInsertLine;
