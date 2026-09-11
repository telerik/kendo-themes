import { ImageEditor, KendoImageEditorProps } from "..";
import { Button } from "../../button";
import { CheckboxWithLabelAfter } from "../../checkbox";
import { DropdownList } from "../../dropdownlist";
import { FormNormal, Fieldset, FormField } from "../../form";
import { NumericTextbox } from "../../numerictextbox";
import { ToolbarSeparator, ToolbarItem } from "../../toolbar";

const shapeButtons = [
    { icon: "rectangle-shape", label: "Rectangle", selected: true },
    { icon: "circle-shape", label: "Ellipse" },
    { icon: "hexagon-shape", label: "Rounded Rectangle" },
    { icon: "minus", label: "Line" },
    { icon: "arrow-right", label: "Arrow" }
];

const resizeHandleStyle = {
    position: "absolute" as const,
    width: "10px",
    height: "10px",
    border: "1px solid currentColor",
    background: "#fff"
};

const canvasShapes = [
    {
        key: "rounded-rectangle",
        style: {
            position: "absolute" as const,
            top: "40px",
            left: "72px",
            width: "220px",
            height: "132px",
            border: "4px solid #0058e9",
            background: "rgba(0, 88, 233, 0.18)",
            borderRadius: "16px"
        }
    },
    {
        key: "ellipse",
        style: {
            position: "absolute" as const,
            top: "218px",
            left: "106px",
            width: "128px",
            height: "128px",
            border: "4px solid #9b51e0",
            background: "rgba(155, 81, 224, 0.2)",
            borderRadius: "50%"
        }
    },
    {
        key: "arrow-line",
        style: {
            position: "absolute" as const,
            top: "116px",
            left: "342px",
            width: "190px",
            height: "0",
            borderTop: "6px solid #ff6358",
            transform: "rotate(-16deg)",
            transformOrigin: "left center"
        },
        arrowHeadStyle: {
            position: "absolute" as const,
            top: "-11px",
            right: "-2px",
            width: "0",
            height: "0",
            borderTop: "11px solid transparent",
            borderBottom: "11px solid transparent",
            borderLeft: "18px solid #ff6358"
        }
    }
];

const selectedShapeStyle = {
    position: "absolute" as const,
    top: "150px",
    left: "430px",
    width: "168px",
    height: "112px",
    border: "4px solid #0058e9",
    background: "rgba(0, 88, 233, 0.14)",
    color: "#0058e9",
    boxShadow: "0 0 0 2px #fff"
};

const resizeHandles = [
    { top: "-7px", left: "-7px" },
    { top: "-7px", left: "calc(50% - 5px)" },
    { top: "-7px", right: "-7px" },
    { top: "calc(50% - 5px)", left: "-7px" },
    { top: "calc(50% - 5px)", right: "-7px" },
    { bottom: "-7px", left: "-7px" },
    { bottom: "-7px", left: "calc(50% - 5px)" },
    { bottom: "-7px", right: "-7px" }
].map((handle) => ({
    ...handle,
    key: Object.entries(handle).map(([position, value]) => `${position}-${value}`).join("-")
}));

export type ImageEditorInsertShapesProps = KendoImageEditorProps & React.HTMLAttributes<HTMLDivElement>;

export const ImageEditorInsertShapes = (props: ImageEditorInsertShapesProps) => (
    <ImageEditor
        toolbarItems={[
            <Button key="toolbar-button-1" icon="upload" aria-label="Upload"></Button>,
            <Button key="toolbar-button-2" icon="download" aria-label="Download"></Button>,
            <ToolbarSeparator key="toolbar-separator-1"></ToolbarSeparator>,
            <Button key="toolbar-button-3" icon="undo" aria-label="Undo"></Button>,
            <Button key="toolbar-button-4" disabled icon="redo" aria-label="Redo"></Button>,
            <ToolbarSeparator key="toolbar-separator-2"></ToolbarSeparator>,
            <Button key="toolbar-button-5" icon="crop" aria-label="Crop"></Button>,
            <Button key="toolbar-button-6" icon="image-resize" aria-label="Resize"></Button>,
            <Button key="toolbar-button-7" selected aria-pressed="true" icon="shapes" aria-label="Insert shapes"></Button>,
            <Button key="toolbar-button-8" icon="zoom-in" aria-label="Zoom in"></Button>,
            <Button key="toolbar-button-9" icon="zoom-out" aria-label="Zoom out"></Button>,
            <ToolbarItem key="toolbar-item-1">
                <DropdownList value="Zoom options" aria-label="Zoom options" />
            </ToolbarItem>
        ]}
        actionPane={
            <FormNormal tag="div" className="k-imageeditor-pane-form" formButtons={
                <>
                    <Button themeColor="primary" icon="plus">Insert</Button>
                    <Button icon="cancel">Cancel</Button>
                </>
            }>
                <Fieldset layout="grid" legend="Insert Shape" cols={2} gutters={{ cols: "8px" }}>
                    <FormField
                        colSpan="2"
                        label="Preset:"
                        editor={
                            <div className="k-diagram-shapes-container">
                                {shapeButtons.map(({ icon, label, selected }) => (
                                    <Button
                                        key={label}
                                        icon={icon}
                                        fillMode="flat"
                                        selected={selected}
                                        aria-pressed={selected}
                                        aria-label={label}
                                    />
                                ))}
                            </div>
                        }
                    />
                    <FormField
                        colSpan="2"
                        label="Size:"
                        editor={ <DropdownList value="Large" aria-label="Shape size" /> }
                    />
                    <FormField
                        colSpan="1"
                        label="Fill:"
                        editor={ <DropdownList value="Primary 60%" aria-label="Fill color" /> }
                    />
                    <FormField
                        colSpan="1"
                        label="Stroke:"
                        editor={ <DropdownList value="Primary Dark" aria-label="Stroke color" /> }
                    />
                    <FormField
                        colSpan="1"
                        label="Border:"
                        editorId="shape-border-width"
                        editor={ <NumericTextbox id="shape-border-width" showClearButton={false} value="4" /> }
                    />
                    <FormField
                        colSpan="1"
                        label="Opacity:"
                        editorId="shape-opacity"
                        editor={ <NumericTextbox id="shape-opacity" showClearButton={false} value="60" /> }
                    />
                    <FormField
                        colSpan="2"
                        editor={ <CheckboxWithLabelAfter id="shape-lock">Lock proportions while resizing</CheckboxWithLabelAfter> }
                    />
                </Fieldset>
            </FormNormal>
        }
        children={
            <>
                <canvas
                    width="700"
                    height="400"
                    role="img"
                    aria-label="Image being edited with inserted rounded rectangle, ellipse, arrow, and selected rectangle shapes"
                    style={{
                        backgroundImage: "url('/packages/html/assets/sofia.jpg')",
                        backgroundPosition: "50px -350px"
                    }}
                ></canvas>
                <div
                    aria-hidden="true"
                    style={{
                        position: "absolute",
                        inset: 0
                    }}
                >
                    {canvasShapes.map(({ key, style, arrowHeadStyle }) => (
                        <div key={key} style={style}>
                            {arrowHeadStyle && <span style={arrowHeadStyle}></span>}
                        </div>
                    ))}
                    <div style={selectedShapeStyle}>
                        {resizeHandles.map(({ key, ...handle }) => (
                            <span key={key} style={{ ...resizeHandleStyle, ...handle }}></span>
                        ))}
                    </div>
                </div>
            </>
        }
        {...props} />
);
