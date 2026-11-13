import { ImageEditor, ImageEditorPane, ImageEditorCanvas } from "..";
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

export const ImageEditorInsertText = ({
    selected = false,
    fontFamily = "Trebuchet MS",
    fontSize = 48,
    alignment = "center",
    fillColor = "#000000",
    opacity = 100,
    adaptive,
    imageSrc,
    ...props
}: any) => (
    <ImageEditor
        adaptive={adaptive}
        activeTool="Text"
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
            <ImageEditorPane title="Text" adaptive={adaptive} confirmDisabled={!selected} actions={
                <>
                    <Button disabled={!selected}>Remove</Button>
                    <Button themeColor="primary" disabled={!selected}>Insert</Button>
                </>
            }>
                <Form tag="div">
                    <FormField
                        label="Font Family"
                        editorId="text-font-family"
                        editor={ <Combobox id="text-font-family" showClearButton={false} prefix={<Icon icon="font-family" />} value={fontFamily} /> }
                    />
                    <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                        <FormField
                            label="Font Size"
                            editorId="text-font-size"
                            editor={ <NumericTextbox id="text-font-size" showClearButton={false} showSpinButton={false} value={String(fontSize)} prefix={<Icon icon="font-size" />} /> }
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
                            editor={ <NumericTextbox id="text-opacity" showClearButton={false} showSpinButton={false} value={`${opacity}%`} prefix={<Icon icon="transparency" />} aria-label="Text Opacity" /> }
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
            <ImageEditorCanvas adaptive={adaptive} imageSrc={imageSrc} />
        }
        {...props} />
);

export default ImageEditorInsertText;
