import { ImageEditor, ImageEditorPane } from "..";
import { Button } from "../../button";
import { ButtonGroup } from "../../button-group";
import { Combobox } from "../../combobox";
import { NumericTextbox } from "../../numerictextbox";
import { ColorPicker } from "../../colorpicker";
import { Form, FormField, Fieldset } from "../../form";
import { Icon } from "../../icon";
import { InputSuffixText } from "../../input";
import { Slider } from "../../slider";

const insertTextSidebarItems = [
    <Button fillMode="flat" key="sidebar-button-1" icon="image-resize" aria-label="Resize"></Button>,
    <Button fillMode="flat" key="sidebar-button-2" icon="crop" aria-label="Crop"></Button>,
    <Button fillMode="flat" key="sidebar-button-3" icon="rotate" aria-label="Rotate"></Button>,
    <div className="k-separator" key="sidebar-separator-1"></div>,
    <Button fillMode="flat" key="sidebar-button-4" icon="free-text" selected aria-label="Text"></Button>,
    <Button fillMode="flat" key="sidebar-button-5" icon="shapes" aria-label="Shapes"></Button>,
    <div className="k-separator" key="sidebar-separator-2"></div>,
    <Button fillMode="flat" key="sidebar-button-6" icon="drop-half-pixelated" aria-label="Blur"></Button>,
    <Button fillMode="flat" key="sidebar-button-7" icon="sliders-horizontal" aria-label="Adjustments"></Button>,
    <Button fillMode="flat" key="sidebar-button-8" icon="circles-three-intersecting" aria-label="Filters"></Button>,
    <div className="k-separator" key="sidebar-separator-3"></div>,
    <Button fillMode="flat" key="sidebar-button-9" icon="frame-corners" aria-label="Frame"></Button>,
    <Button fillMode="flat" key="sidebar-button-10" icon="circle-half-tilted" aria-label="Shadow"></Button>
];

export const ImageEditorInsertText = ({
    selected = false,
    fontFamily = "Trebuchet MS",
    fontSize = 48,
    alignment = "center",
    fillColor = "#000000",
    opacity = 100,
    ...props
}: any) => (
    <ImageEditor
        sidebarItems={insertTextSidebarItems}
        actionPane={
            <ImageEditorPane title="Text" actions={
                <>
                    <Button>Remove</Button>
                    <Button themeColor="primary">Insert</Button>
                </>
            }>
                <Form tag="div">
                    <FormField
                        label="Font Family"
                        editorId="text-font-family"
                        editor={ <Combobox id="text-font-family" prefix={<Icon icon="font-family" />} value={fontFamily} /> }
                    />
                    <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                        <FormField
                            label="Font Size"
                            editorId="text-font-size"
                            editor={ <NumericTextbox id="text-font-size" showSpinButton={false} value={String(fontSize)} prefix={<Icon icon="font-size" />} /> }
                        />
                        <FormField
                            label="Alignment"
                            editor={
                                <ButtonGroup>
                                    <Button className="k-group-start" icon="align-left" selected={alignment === "left"} aria-label="Align Left"></Button>
                                    <Button icon="align-center" selected={alignment === "center"} aria-label="Align Center"></Button>
                                    <Button className="k-group-end" icon="align-right" selected={alignment === "right"} aria-label="Align Right"></Button>
                                </ButtonGroup>
                            }
                        />
                    </Fieldset>
                    <FormField
                        label="Format"
                        editor={
                            <div className="k-imageeditor-controls">
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
                            label="Fill Color"
                            editor={ <ColorPicker id="text-fill-color" value={fillColor} valueIconName="foreground-color" aria-label="Fill Color" /> }
                        />
                        <FormField
                            label="Text Opacity"
                            editor={ <NumericTextbox id="text-opacity" showSpinButton={false} value={`${opacity}%`} prefix={<Icon icon="transparency" />} aria-label="Text Opacity" /> }
                        />
                    </Fieldset>
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

export default ImageEditorInsertText;
