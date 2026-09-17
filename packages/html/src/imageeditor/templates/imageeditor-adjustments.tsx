import { ImageEditor, ImageEditorPane } from "..";
import { Button } from "../../button";
import { NumericTextbox } from "../../numerictextbox";
import { Form, FormField } from "../../form";
import { Slider } from "../../slider";

const adjustmentsSidebarItems = [
    <Button fillMode="flat" key="sidebar-button-1" icon="crop" aria-label="Crop"></Button>,
    <Button fillMode="flat" key="sidebar-button-2" icon="image-resize" aria-label="Resize"></Button>,
    <Button fillMode="flat" key="sidebar-button-3" icon="rotate" aria-label="Rotate"></Button>,
    <div className="k-separator" key="sidebar-separator-1"></div>,
    <Button fillMode="flat" key="sidebar-button-4" icon="free-text" aria-label="Text"></Button>,
    <Button fillMode="flat" key="sidebar-button-5" icon="shapes" aria-label="Shapes"></Button>,
    <div className="k-separator" key="sidebar-separator-2"></div>,
    <Button fillMode="flat" key="sidebar-button-6" icon="droplet" aria-label="Blur"></Button>,
    <Button fillMode="flat" key="sidebar-button-7" icon="sliders" selected aria-label="Adjustments"></Button>,
    <Button fillMode="flat" key="sidebar-button-8" icon="filter" aria-label="Filters"></Button>,
    <div className="k-separator" key="sidebar-separator-3"></div>,
    <Button fillMode="flat" key="sidebar-button-9" icon="borders-all" aria-label="Frame"></Button>,
    <Button fillMode="flat" key="sidebar-button-10" icon="bring-to-back" aria-label="Shadow"></Button>
];

const AdjustmentSlider = ({ id, label, value, min = 0, max = 100 }: { id: string; label: string; value: number; min?: number; max?: number }) => (
    <FormField
        label={label}
        editorId={id}
        editor={
            <div className="k-imageeditor-adjustment-editor">
                <Slider
                    className="k-imageeditor-adjustment-slider"
                    aria-label={label}
                    showButtons={false}
                    showTicks={false}
                    value={value}
                    min={min}
                    max={max}
                    style={{ "--kendo-slider-start": min < 0 ? 0 : min, "--kendo-slider-end": value } as React.CSSProperties}
                />
                <NumericTextbox
                    id={id}
                    style={{ width: "80px", flex: "none" }}
                    showClearButton={false}
                    showSpinButton={false}
                    value={String(value)}
                />
            </div>
        }
    />
);

export const ImageEditorAdjustments = ({
    brightness = 0,
    contrast = 0,
    saturation = 0,
    hue = 0,
    exposure = 0,
    blur = 24,
    opacity = 24,
    ...props
}: any) => (
    <ImageEditor
        sidebarItems={adjustmentsSidebarItems}
        actionPane={
            <ImageEditorPane title="Adjustments" actions={
                <>
                    <Button>Reset</Button>
                    <Button themeColor="primary">Apply</Button>
                </>
            }>
                <Form tag="div">
                    <AdjustmentSlider id="adjustments-brightness" label="Brightness" value={brightness} min={-100} max={100} />
                    <AdjustmentSlider id="adjustments-contrast" label="Contrast" value={contrast} min={-100} max={100} />
                    <AdjustmentSlider id="adjustments-saturation" label="Saturation" value={saturation} min={-100} max={100} />
                    <AdjustmentSlider id="adjustments-hue" label="Hue" value={hue} min={-100} max={100} />
                    <AdjustmentSlider id="adjustments-exposure" label="Exposure" value={exposure} min={-100} max={100} />
                    <AdjustmentSlider id="adjustments-blur" label="Blur" value={blur} />
                    <AdjustmentSlider id="adjustments-opacity" label="Opacity" value={opacity} />
                </Form>
            </ImageEditorPane>
        }

        children={
            <>
                <canvas width="494" height="307" role="img" aria-label="Image being edited" style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundSize: "cover" }}></canvas>
            </>
        }
        {...props} />
);
