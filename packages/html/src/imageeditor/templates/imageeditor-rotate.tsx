import { ImageEditor, ImageEditorPane, ImageEditorResizeHandles } from "..";
import { Button } from "../../button";
import { NumericTextbox } from "../../numerictextbox";
import { InputSuffixText } from "../../input";
import { Form, FormField, Fieldset } from "../../form";
import { Slider } from "../../slider";

const rotateSidebarItems = [
    <Button fillMode="flat" key="sidebar-button-1" icon="crop" aria-label="Crop"></Button>,
    <Button fillMode="flat" key="sidebar-button-2" icon="image-resize" aria-label="Resize"></Button>,
    <Button fillMode="flat" key="sidebar-button-3" icon="rotate" selected aria-label="Rotate"></Button>,
    <div className="k-separator" key="sidebar-separator-1"></div>,
    <Button fillMode="flat" key="sidebar-button-4" icon="free-text" aria-label="Text"></Button>,
    <Button fillMode="flat" key="sidebar-button-5" icon="shapes" aria-label="Shapes"></Button>,
    <div className="k-separator" key="sidebar-separator-2"></div>,
    <Button fillMode="flat" key="sidebar-button-6" icon="droplet" aria-label="Blur"></Button>,
    <Button fillMode="flat" key="sidebar-button-7" icon="sliders" aria-label="Adjustments"></Button>,
    <Button fillMode="flat" key="sidebar-button-8" icon="filter" aria-label="Filters"></Button>,
    <div className="k-separator" key="sidebar-separator-3"></div>,
    <Button fillMode="flat" key="sidebar-button-9" icon="borders-all" aria-label="Frame"></Button>,
    <Button fillMode="flat" key="sidebar-button-10" icon="bring-to-back" aria-label="Shadow"></Button>
];

export const ImageEditorRotate = (props: any) => (
    <ImageEditor
        sidebarItems={rotateSidebarItems}
        actionPane={
            <ImageEditorPane title="Rotate" actions={
                <>
                    <Button>Reset</Button>
                    <Button themeColor="primary">Apply</Button>
                </>
            }>
                <Form tag="div">
                    <FormField
                        label="Rotation"
                        editor={
                            <div className="k-d-flex k-gap-4 k-align-items-center">
                                <Slider
                                    style={{ width: "170px", flex: "none" }}
                                    aria-label="Rotation"
                                    showButtons={false}
                                    showTicks={false}
                                    value={85}
                                    min={0}
                                    max={360}
                                />
                                <NumericTextbox
                                    style={{ width: "72px", flex: "none" }}
                                    showClearButton={false}
                                    showSpinButton={false}
                                    separators={false}
                                    value="85"
                                    suffix={<InputSuffixText>°</InputSuffixText>}
                                />
                            </div>
                        }
                    />
                    <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                        <FormField
                            label="Rotate Options"
                            editor={
                                <div className="k-d-flex k-gap-2">
                                    <Button icon="rotate-right" aria-label="Rotate Right"></Button>
                                    <Button icon="rotate-left" aria-label="Rotate Left"></Button>
                                </div>
                            }
                        />
                        <FormField
                            label="Flip Options"
                            editor={
                                <div className="k-d-flex k-gap-2">
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
                <canvas width="494" height="307" role="img" aria-label="Image being edited" style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundSize: "cover" }}></canvas>
                <div className="k-imageeditor-rotate">
                    <ImageEditorResizeHandles variant="scale" grid />
                </div>
            </>
        }
        {...props} />
);
