import { ImageEditor, ImageEditorPane } from "..";
import { Button } from "../../button";
import { ButtonGroup } from "../../button-group";
import { NumericTextbox } from "../../numerictextbox";
import { ColorPicker } from "../../colorpicker";
import { DropdownList } from "../../dropdownlist";
import { Form, FormField, Fieldset } from "../../form";
import { Icon } from "../../icon";
import { InputSuffixText } from "../../input";
import { Slider } from "../../slider";
import { SegmentedControl, SegmentedControlButton } from "../../segmented-control";

const insertLineSidebarItems = [
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

export const ImageEditorInsertLine = ({
    selected = false,
    strokeColor = "#000000",
    strokeWidth = 4,
    strokeType = "Dotted",
    startPoint = "None",
    endPoint = "None",
    opacity = 100,
    ...props
}: any) => (
    <ImageEditor
        sidebarItems={insertLineSidebarItems}
        actionPane={
            <ImageEditorPane title="Shapes and Lines" actions={
                <>
                    <Button>Remove</Button>
                    <Button themeColor="primary">Insert</Button>
                </>
            }>
                <SegmentedControl thumbStyles={{ width: "50%", left: "50%" }} stretched aria-label="Shape or Line" style={{ flexShrink: 0 }}>
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
                            editor={ <NumericTextbox id="line-stroke-width" showSpinButton={false} value={String(strokeWidth)} prefix={<Icon icon="border-width" />} /> }
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
                        editor={ <NumericTextbox id="line-opacity" showSpinButton={false} value={`${opacity}%`} prefix={<Icon icon="transparency" />} aria-label="Opacity" /> }
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
            <canvas width="494" height="307" role="img" aria-label="Image being edited" style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundSize: "cover" }}></canvas>
        }
        {...props} />
);

export default ImageEditorInsertLine;
