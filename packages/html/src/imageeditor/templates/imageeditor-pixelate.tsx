import { ImageEditor, ImageEditorPane } from "..";
import { Button } from "../../button";
import { NumericTextbox } from "../../numerictextbox";
import { Form, FormField } from "../../form";
import { RadioGroup, RadioItem, RadioButtonWithLabelAfter } from "../../radio";
import { SegmentedControl, SegmentedControlButton } from "../../segmented-control";
import { Slider } from "../../slider";


const pixelateSidebarItems = [
    <Button fillMode="flat" key="sidebar-button-1" icon="image-resize" aria-label="Resize"></Button>,
    <Button fillMode="flat" key="sidebar-button-2" icon="crop" aria-label="Crop"></Button>,
    <Button fillMode="flat" key="sidebar-button-3" icon="rotate" aria-label="Rotate"></Button>,
    <div className="k-separator" key="sidebar-separator-1"></div>,
    <Button fillMode="flat" key="sidebar-button-4" icon="free-text" aria-label="Text"></Button>,
    <Button fillMode="flat" key="sidebar-button-5" icon="shapes" aria-label="Shapes"></Button>,
    <div className="k-separator" key="sidebar-separator-2"></div>,
    <Button fillMode="flat" key="sidebar-button-6" icon="drop-half-pixelated" selected aria-label="Blur"></Button>,
    <Button fillMode="flat" key="sidebar-button-7" icon="sliders-horizontal" aria-label="Adjustments"></Button>,
    <Button fillMode="flat" key="sidebar-button-8" icon="circles-three-intersecting" aria-label="Filters"></Button>,
    <div className="k-separator" key="sidebar-separator-3"></div>,
    <Button fillMode="flat" key="sidebar-button-9" icon="frame-corners" aria-label="Frame"></Button>,
    <Button fillMode="flat" key="sidebar-button-10" icon="circle-half-tilted" aria-label="Shadow"></Button>
];

export const ImageEditorPixelate = ({ shape = "rectangular", intensity = 24, ...props }: any) => (
    <ImageEditor
        sidebarItems={pixelateSidebarItems}
        actionPane={
            <ImageEditorPane title="Pixelate" actions={
                <>
                    <Button>Reset</Button>
                    <Button themeColor="primary">Apply</Button>
                </>
            }>
                <SegmentedControl thumbStyles={{ width: "50%", left: "50%" }} stretched aria-label="Redaction Tool" style={{ flexShrink: 0 }}>
                    <SegmentedControlButton icon="blur">Blur</SegmentedControlButton>
                    <SegmentedControlButton icon="grid" selected>Pixelate</SegmentedControlButton>
                </SegmentedControl>

                <Form tag="div">
                    <FormField
                        label="Marquee Tool Shape"
                        editor={
                            <RadioGroup layout="horizontal">
                                <RadioItem>
                                    <RadioButtonWithLabelAfter id="pixelate-shape-rectangular" name="pixelate-shape" checked={shape === "rectangular"}>Rectangular</RadioButtonWithLabelAfter>
                                </RadioItem>
                                <RadioItem>
                                    <RadioButtonWithLabelAfter id="pixelate-shape-elliptical" name="pixelate-shape" checked={shape === "elliptical"}>Elliptical</RadioButtonWithLabelAfter>
                                </RadioItem>
                            </RadioGroup>
                        }
                    />
                    <FormField
                        label="Pixelate Intensity"
                        editorId="pixelate-intensity"
                        editor={
                            <div className="k-d-flex k-gap-4 k-align-items-center">
                                <Slider
                                    className="k-flex-1"
                                    aria-label="Pixelate Intensity"
                                    showButtons={false}
                                    showTicks={false}
                                    value={intensity}
                                    min={0}
                                    max={100}
                                    style={{ "--kendo-slider-start": 0, "--kendo-slider-end": intensity } as React.CSSProperties}
                                />
                                <NumericTextbox
                                    id="pixelate-intensity"
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
                <canvas width="494" height="307" role="img" aria-label="Image being edited" style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundSize: "cover" }}></canvas>
                <div className="k-imageeditor-crop-overlay">
                    <div className="k-imageeditor-crop" style={{ borderStyle: "dashed" }}></div>
                </div>
            </>
        }
        {...props} />
);
