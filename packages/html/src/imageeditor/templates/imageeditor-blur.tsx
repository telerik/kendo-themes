import { ImageEditor, ImageEditorPane } from "..";
import { Button } from "../../button";
import { NumericTextbox } from "../../numerictextbox";
import { Form, FormField } from "../../form";
import { RadioGroup, RadioItem, RadioButtonWithLabelAfter } from "../../radio";
import { SegmentedControl, SegmentedControlButton } from "../../segmented-control";
import { Slider } from "../../slider";


const blurSidebarItems = [
    <Button fillMode="flat" key="sidebar-button-1" icon="crop" aria-label="Crop"></Button>,
    <Button fillMode="flat" key="sidebar-button-2" icon="image-resize" aria-label="Resize"></Button>,
    <Button fillMode="flat" key="sidebar-button-3" icon="rotate" aria-label="Rotate"></Button>,
    <div className="k-separator" key="sidebar-separator-1"></div>,
    <Button fillMode="flat" key="sidebar-button-4" icon="free-text" aria-label="Text"></Button>,
    <Button fillMode="flat" key="sidebar-button-5" icon="shapes" aria-label="Shapes"></Button>,
    <div className="k-separator" key="sidebar-separator-2"></div>,
    <Button fillMode="flat" key="sidebar-button-6" icon="droplet" selected aria-label="Blur"></Button>,
    <Button fillMode="flat" key="sidebar-button-7" icon="sliders" aria-label="Adjustments"></Button>,
    <Button fillMode="flat" key="sidebar-button-8" icon="filter" aria-label="Filters"></Button>,
    <div className="k-separator" key="sidebar-separator-3"></div>,
    <Button fillMode="flat" key="sidebar-button-9" icon="borders-all" aria-label="Frame"></Button>,
    <Button fillMode="flat" key="sidebar-button-10" icon="bring-to-back" aria-label="Shadow"></Button>
];

export const ImageEditorBlur = ({ shape = "rectangular", intensity = 16, ...props }: any) => (
    <ImageEditor
        sidebarItems={blurSidebarItems}
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
