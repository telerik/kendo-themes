import { ImageEditor, ImageEditorPane } from "..";
import { Button } from "../../button";
import { NumericTextbox } from "../../numerictextbox";
import { ColorPicker } from "../../colorpicker";
import { Form, FormField, Fieldset } from "../../form";
import { Icon } from "../../icon";
import { InputPrefixText } from "../../input";
import { Autocomplete } from "../../autocomplete";
import { ToolbarSeparator, ToolbarItem } from "../../toolbar";

const shadowSidebarItems = [
    <Button fillMode="flat" key="sidebar-button-1" icon="image-resize" aria-label="Resize"></Button>,
    <Button fillMode="flat" key="sidebar-button-2" icon="crop" aria-label="Crop"></Button>,
    <Button fillMode="flat" key="sidebar-button-3" icon="rotate" aria-label="Rotate"></Button>,
    <div className="k-separator" key="sidebar-separator-1"></div>,
    <Button fillMode="flat" key="sidebar-button-4" icon="free-text" aria-label="Text"></Button>,
    <Button fillMode="flat" key="sidebar-button-5" icon="shapes" aria-label="Shapes"></Button>,
    <div className="k-separator" key="sidebar-separator-2"></div>,
    <Button fillMode="flat" key="sidebar-button-6" icon="droplet" aria-label="Blur"></Button>,
    <Button fillMode="flat" key="sidebar-button-7" icon="sliders" aria-label="Adjustments"></Button>,
    <Button fillMode="flat" key="sidebar-button-8" icon="circles-three-intersecting" aria-label="Filters"></Button>,
    <div className="k-separator" key="sidebar-separator-3"></div>,
    <Button fillMode="flat" key="sidebar-button-9" icon="frame-corners" aria-label="Frame"></Button>,
    <Button fillMode="flat" key="sidebar-button-10" icon="circle-half-tilted" selected aria-label="Shadow"></Button>
];

const hexToRgba = (hex: string, alphaPercent: number) => {
    const value = hex.replace("#", "");
    const r = parseInt(value.substring(0, 2), 16);
    const g = parseInt(value.substring(2, 4), 16);
    const b = parseInt(value.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alphaPercent / 100})`;
};

export const ImageEditorShadow = ({
    positionX = 2,
    positionY = -4,
    blur = 32,
    spread = 12,
    color = "#232a36",
    opacity = 32,
    ...props
}: any) => (
    <ImageEditor
        sidebarItems={shadowSidebarItems}
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
            <ImageEditorPane title="Shadow" actions={
                <>
                    <Button>Reset</Button>
                    <Button themeColor="primary">Apply</Button>
                </>
            }>
                <Form tag="div">
                    <FormField
                        label="Position"
                        editor={
                            <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                                <NumericTextbox id="shadow-position-x" showSpinButton={false} value={String(positionX)} prefix={<InputPrefixText>X</InputPrefixText>} aria-label="Position X" />
                                <NumericTextbox id="shadow-position-y" showSpinButton={false} value={String(positionY)} prefix={<InputPrefixText>Y</InputPrefixText>} aria-label="Position Y" />
                            </Fieldset>
                        }
                    />
                    <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                        <FormField
                            label="Blur"
                            editorId="shadow-blur"
                            editor={ <NumericTextbox id="shadow-blur" showSpinButton={false} value={String(blur)} prefix={<Icon icon="blur" />} /> }
                        />
                        <FormField
                            label="Spread"
                            editorId="shadow-spread"
                            editor={ <NumericTextbox id="shadow-spread" showSpinButton={false} value={String(spread)} prefix={<Icon icon="brightness-contrast" />} /> }
                        />
                    </Fieldset>
                    <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                        <FormField
                            label="Color"
                            editor={ <ColorPicker id="shadow-color" value={color} aria-label="Color" /> }
                        />
                        <FormField
                            label="Opacity"
                            editorId="shadow-opacity"
                            editor={ <NumericTextbox id="shadow-opacity" showSpinButton={false} value={`${opacity}%`} prefix={<Icon icon="transparency" />} /> }
                        />
                    </Fieldset>
                </Form>
            </ImageEditorPane>
        }

        children={
            <canvas width="494" height="307" role="img" aria-label="Image being edited" style={{
                backgroundImage: "url('/packages/html/assets/sofia.jpg')",
                backgroundSize: "cover",
                boxShadow: `${positionX}px ${positionY}px ${blur}px ${spread}px ${hexToRgba(color, opacity)}`
            }}></canvas>
        }
        {...props} />
);
