import { ImageEditor, ImageEditorPane, ImageEditorResizeHandles, ImageEditorRotateHandle, ImageEditorCanvas } from "..";
import { Button } from "../../button";
import { NumericTextbox } from "../../numerictextbox";
import { InputSuffixText } from "../../input";
import { Form, FormField, Fieldset } from "../../form";
import { Slider } from "../../slider";

export const ImageEditorRotate = ({ rotation = 0, adaptive, imageSrc, ...props }: any) => (
    <ImageEditor
        adaptive={adaptive}
        activeTool="Rotate"
        actionPane={
            <ImageEditorPane title="Rotate" adaptive={adaptive} confirmDisabled={rotation === 0} actions={
                <>
                    <Button disabled={rotation === 0}>Reset</Button>
                    <Button themeColor="primary" disabled={rotation === 0}>Apply</Button>
                </>
            }>
                <Form tag="div">
                    <FormField
                        label="Rotation"
                        editor={
                            <div className="k-imageeditor-field-row">
                                <Slider
                                    style={{ width: "170px", flex: "none", "--kendo-slider-start": 0, "--kendo-slider-end": (rotation + 45) / 90 * 100 } as React.CSSProperties}
                                    aria-label="Rotation"
                                    showButtons={false}
                                    showTicks={false}
                                    value={rotation}
                                    min={-45}
                                    max={45}
                                />
                                <NumericTextbox
                                    style={{ width: "72px", flex: "none" }}
                                    showClearButton={false}
                                    showSpinButton={false}
                                    separators={false}
                                    value={String(rotation)}
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
                                    <Button icon="rotate-right" aria-label="Rotate Right"></Button>
                                    <Button icon="rotate-left" aria-label="Rotate Left"></Button>
                                </div>
                            }
                        />
                        <FormField
                            label="Flip Options"
                            editor={
                                <div className="k-imageeditor-controls">
                                    <Button icon="flip-horizontal" aria-label="Flip Horizontal"></Button>
                                    <Button icon="flip-vertical" aria-label="Flip Vertical"></Button>
                                </div>
                            }
                        />
                    </Fieldset>
                </Form>
            </ImageEditorPane>
        }

        children={
            <>
                <ImageEditorCanvas adaptive={adaptive} imageSrc={imageSrc} />
                <div className="k-imageeditor-rotate">
                    <ImageEditorResizeHandles variant="scale" grid />
                    <ImageEditorRotateHandle />
                </div>
            </>
        }
        {...props} />
);
