import { ImageEditor, ImageEditorPane } from "..";
import { Button } from "../../button";
import { NumericTextbox } from "../../numerictextbox";
import { Form, FormField } from "../../form";
import { Autocomplete } from "../../autocomplete";
import { Slider } from "../../slider";
import { ToolbarSeparator, ToolbarItem } from "../../toolbar";

const adjustmentsSidebarItems = [
    <Button fillMode="flat" key="sidebar-button-1" icon="image-resize" aria-label="Resize"></Button>,
    <Button fillMode="flat" key="sidebar-button-2" icon="crop" aria-label="Crop"></Button>,
    <Button fillMode="flat" key="sidebar-button-3" icon="rotate" aria-label="Rotate"></Button>,
    <div className="k-separator" key="sidebar-separator-1"></div>,
    <Button fillMode="flat" key="sidebar-button-4" icon="free-text" aria-label="Text"></Button>,
    <Button fillMode="flat" key="sidebar-button-5" icon="shapes" aria-label="Shapes"></Button>,
    <div className="k-separator" key="sidebar-separator-2"></div>,
    <Button fillMode="flat" key="sidebar-button-6" icon="droplet" aria-label="Blur"></Button>,
    <Button fillMode="flat" key="sidebar-button-7" icon="sliders" selected aria-label="Adjustments"></Button>,
    <div className="k-separator" key="sidebar-separator-3"></div>,
    <Button fillMode="flat" key="sidebar-button-8" icon="image" aria-label="Filters"></Button>,
    <Button fillMode="flat" key="sidebar-button-9" icon="brightness-contrast" aria-label="Brightness / Contrast"></Button>
];

const AdjustmentSlider = ({ id, label, value }: { id: string; label: string; value: number }) => (
    <FormField
        label={label}
        editorId={id}
        editor={
            <div className="k-d-flex k-gap-4 k-align-items-center">
                <Slider
                    className="k-flex-1"
                    aria-label={label}
                    showButtons={false}
                    showTicks={false}
                    value={value}
                    min={0}
                    max={100}
                    style={{ "--kendo-slider-start": 0, "--kendo-slider-end": value } as React.CSSProperties}
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
    brightness = 24,
    contrast = 24,
    saturation = 24,
    hue = 24,
    exposure = 24,
    blur = 24,
    opacity = 24,
    ...props
}: any) => (
    <ImageEditor
        sidebarItems={adjustmentsSidebarItems}
        toolbarItems={[
    <Button fillMode="flat" key="toolbar-button-1" icon="image-add" aria-label="Image Add"></Button>,
    <ToolbarSeparator key="toolbar-separator-1"></ToolbarSeparator>,
    <Button fillMode="flat" key="toolbar-button-2" icon="undo" aria-label="Undo"></Button>,
    <Button fillMode="flat" key="toolbar-button-3" icon="redo" aria-label="Redo"></Button>,
    <ToolbarSeparator key="toolbar-separator-2"></ToolbarSeparator>,
    <Button fillMode="flat" key="toolbar-button-4" icon="download" aria-label="Download"></Button>,
    <div className="k-spacer" key="toolbar-spacer"></div>,
     <Button fillMode="flat" key="toolbar-button-5" icon="zoom-in" aria-label="Zoom In"></Button>,
    <ToolbarItem key="toolbar-item-1">
        <Autocomplete fillMode="flat" value="Fit" aria-label="Zoom options" />
    </ToolbarItem>,
     <Button fillMode="flat" key="toolbar-button-6" icon="zoom-out" aria-label="Zoom Out"></Button>
        ]}
        actionPane={
            <ImageEditorPane title="Adjustments" actions={
                <>
                    <Button>Reset</Button>
                    <Button themeColor="primary">Apply</Button>
                </>
            }>
                <Form tag="div">
                    <AdjustmentSlider id="adjustments-brightness" label="Brightness" value={brightness} />
                    <AdjustmentSlider id="adjustments-contrast" label="Contrast" value={contrast} />
                    <AdjustmentSlider id="adjustments-saturation" label="Saturation" value={saturation} />
                    <AdjustmentSlider id="adjustments-hue" label="Hue" value={hue} />
                    <AdjustmentSlider id="adjustments-exposure" label="Exposure" value={exposure} />
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
