import { ImageEditor, ImageEditorPane, ImageEditorOptionList, ImageEditorOptionPreview, ImageEditorResizeHandles } from '..';
import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { Combobox } from '../../combobox';
import { NumericTextbox } from '../../numerictextbox';
import { ColorPicker } from '../../colorpicker';
import { Form, FormField, Fieldset } from '../../form';
import { Icon } from '../../icon';
import { SegmentedControl, SegmentedControlButton } from '../../segmented-control';
import { ToolbarSeparator } from '../../toolbar';

// Mobile top toolbar has no zoom-level combobox - just the 6 core icon actions, split into two edge-aligned groups
const mobileToolbarItems = [
    <Button fillMode="flat" key="mobile-toolbar-button-1" icon="image-add" aria-label="Image Add"></Button>,
    <ToolbarSeparator key="mobile-toolbar-separator-1"></ToolbarSeparator>,
    <Button fillMode="flat" key="mobile-toolbar-button-2" icon="undo" aria-label="Undo"></Button>,
    <Button fillMode="flat" key="mobile-toolbar-button-3" icon="redo" aria-label="Redo"></Button>,
    <ToolbarSeparator key="mobile-toolbar-separator-2"></ToolbarSeparator>,
    <Button fillMode="flat" key="mobile-toolbar-button-4" icon="download" aria-label="Download"></Button>,
    <div className="k-spacer" key="mobile-toolbar-spacer"></div>,
    <Button fillMode="flat" key="mobile-toolbar-button-5" icon="zoom-in" aria-label="Zoom In"></Button>,
    <Button fillMode="flat" key="mobile-toolbar-button-6" icon="zoom-out" aria-label="Zoom Out"></Button>
];

// Same 5 actions as the desktop FloatingToolbar (imageeditor-insert-shape.tsx) - on mobile they dock at the top instead of floating over the canvas
const contextualToolbarItems = [
    <Button fillMode="flat" key="contextual-button-1" icon="copy" aria-label="Duplicate"></Button>,
    <Button fillMode="flat" key="contextual-button-2" icon="pencil" aria-label="Edit"></Button>,
    <ToolbarSeparator key="contextual-separator-1"></ToolbarSeparator>,
    <Button fillMode="flat" key="contextual-button-3" icon="flip-horizontal" aria-label="Flip Horizontal"></Button>,
    <Button fillMode="flat" key="contextual-button-4" icon="flip-vertical" aria-label="Flip Vertical"></Button>,
    <ToolbarSeparator key="contextual-separator-2"></ToolbarSeparator>,
    <Button fillMode="flat" key="contextual-button-5" icon="trash" aria-label="Delete"></Button>
];

const shapeSidebarItems = [
    <Button fillMode="flat" key="sidebar-button-1" icon="crop" aria-label="Crop"></Button>,
    <Button fillMode="flat" key="sidebar-button-2" icon="image-resize" aria-label="Resize"></Button>,
    <Button fillMode="flat" key="sidebar-button-3" icon="rotate" aria-label="Rotate"></Button>,
    <div className="k-separator" key="sidebar-separator-1"></div>,
    <Button fillMode="flat" key="sidebar-button-4" icon="free-text" aria-label="Text"></Button>,
    <Button fillMode="flat" key="sidebar-button-5" icon="shapes" selected aria-label="Shapes"></Button>,
    <div className="k-separator" key="sidebar-separator-2"></div>,
    <Button fillMode="flat" key="sidebar-button-6" icon="droplet" aria-label="Blur"></Button>,
    <Button fillMode="flat" key="sidebar-button-7" icon="sliders" aria-label="Adjustments"></Button>,
    <Button fillMode="flat" key="sidebar-button-8" icon="filter" aria-label="Filters"></Button>,
    <div className="k-separator" key="sidebar-separator-3"></div>,
    <Button fillMode="flat" key="sidebar-button-9" icon="borders-all" aria-label="Frame"></Button>,
    <Button fillMode="flat" key="sidebar-button-10" icon="bring-to-back" aria-label="Shadow"></Button>
];

const shapeTypes = [
    "Circle",
    "Oval",
    "Square",
    "Rectangle",
    "Triangle",
    "Star",
    "Heart",
    "Diamond"
];

const styles = `
    #test-area {
        display: flex;
        gap: 24px;
        flex-wrap: wrap;
    }
    #test-area .k-imageeditor-adaptive {
        width: 360px;
        height: 800px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area">

            <div>
                <h4>Mobile / Adaptive / Unselected Tool</h4>
                <ImageEditor adaptive toolbarItems={mobileToolbarItems}>
                    <canvas width="326" height="203" role="img" aria-label="Image being edited" style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}></canvas>
                </ImageEditor>
            </div>

            <div>
                <h4>Mobile / Adaptive / Selected Tool / Panel Opened</h4>
                <ImageEditor
                    adaptive
                    toolbarItems={contextualToolbarItems}
                    sidebarItems={shapeSidebarItems}
                    actionPane={
                        <ImageEditorPane adaptive title="Shape">
                            <SegmentedControl thumbStyles={{ width: "50%" }} stretched aria-label="Shape or Line" style={{ flexShrink: 0 }}>
                                <SegmentedControlButton icon="shapes" selected>Shape</SegmentedControlButton>
                                <SegmentedControlButton icon="shape-line">Line</SegmentedControlButton>
                            </SegmentedControl>

                            <Form tag="div">
                                <FormField
                                    label="Type"
                                    editor={
                                        <ImageEditorOptionList scrollable scrollableEnd>
                                            {shapeTypes.map((label) => (
                                                <ImageEditorOptionPreview key={label} label={label} selected={label === "Oval"} />
                                            ))}
                                        </ImageEditorOptionList>
                                    }
                                />
                                <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                                    <FormField
                                        label="Stroke Color"
                                        editor={ <ColorPicker id="mobile-shape-stroke-color" value="#b0e855" aria-label="Stroke Color" /> }
                                    />
                                    <FormField
                                        label="Stroke Width"
                                        editorId="mobile-shape-stroke-width"
                                        editor={ <NumericTextbox id="mobile-shape-stroke-width" showSpinButton={false} value="8" prefix={<Icon icon="border-width" />} /> }
                                    />
                                </Fieldset>
                                <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                                    <FormField
                                        label="Fill Color"
                                        editor={ <ColorPicker id="mobile-shape-fill-color" value="#eae382" valueIconName="droplet" aria-label="Fill Color" /> }
                                    />
                                    <FormField
                                        label="Text Color"
                                        editor={ <ColorPicker id="mobile-shape-text-color" value="#706903" valueIconName="foreground-color" aria-label="Text Color" /> }
                                    />
                                </Fieldset>
                                <FormField
                                    label="Font Family"
                                    editorId="mobile-shape-font-family"
                                    editor={ <Combobox id="mobile-shape-font-family" prefix={<Icon icon="font-family" />} value="Trebuchet MS" /> }
                                />
                                <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                                    <FormField
                                        label="Font Size"
                                        editorId="mobile-shape-font-size"
                                        editor={ <NumericTextbox id="mobile-shape-font-size" showSpinButton={false} value="24" prefix={<Icon icon="font-size" />} /> }
                                    />
                                    <FormField
                                        label="Alignment"
                                        editor={
                                            <ButtonGroup>
                                                <Button className="k-group-start" icon="align-left" aria-label="Align Left"></Button>
                                                <Button icon="align-center" selected aria-label="Align Center"></Button>
                                                <Button className="k-group-end" icon="align-right" aria-label="Align Right"></Button>
                                            </ButtonGroup>
                                        }
                                    />
                                </Fieldset>
                                <FormField
                                    label="Format"
                                    editor={
                                        <div className="k-d-flex k-gap-2">
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
                                        label="Align Horizontal"
                                        editor={
                                            <ButtonGroup>
                                                <Button className="k-group-start" icon="align-items-start" aria-label="Align Left"></Button>
                                                <Button icon="align-items-center" aria-label="Align Center"></Button>
                                                <Button className="k-group-end" icon="align-items-end" aria-label="Align Right"></Button>
                                            </ButtonGroup>
                                        }
                                    />
                                    <FormField
                                        label="Align Vertical"
                                        editor={
                                            <ButtonGroup>
                                                <Button className="k-group-start" icon="align-items-start-alt" aria-label="Align Top"></Button>
                                                <Button icon="align-items-center-alt" aria-label="Align Middle"></Button>
                                                <Button className="k-group-end" icon="align-items-end-alt" aria-label="Align Bottom"></Button>
                                            </ButtonGroup>
                                        }
                                    />
                                </Fieldset>
                            </Form>
                        </ImageEditorPane>
                    }
                >
                    <canvas width="326" height="203" role="img" aria-label="Image being edited" style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}></canvas>
                    <div className="k-imageeditor-resize" style={{ width: "165px", height: "54px", top: "75px", left: "81px" }}>
                        <div style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                            background: "#eae382",
                            border: "2px solid #b0e855",
                            boxSizing: "border-box"
                        }}>
                            <p style={{
                                margin: 0,
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontFamily: "'Trebuchet MS', sans-serif",
                                fontSize: "16px",
                                lineHeight: 1,
                                color: "#706903",
                                whiteSpace: "nowrap"
                            }}>Shape text</p>
                        </div>
                        <ImageEditorResizeHandles variant="mixed" />
                    </div>
                </ImageEditor>
            </div>

            <div>
                <h4>Tablet / Adaptive / Selected Tool / Panel Opened</h4>
                <ImageEditor
                    adaptive
                    style={{ width: "768px", height: "1024px" }}
                    toolbarItems={contextualToolbarItems}
                    sidebarItems={shapeSidebarItems}
                    actionPane={
                        <ImageEditorPane adaptive title="Shape">
                            <SegmentedControl thumbStyles={{ width: "50%" }} stretched aria-label="Shape or Line" style={{ flexShrink: 0 }}>
                                <SegmentedControlButton icon="shapes" selected>Shape</SegmentedControlButton>
                                <SegmentedControlButton icon="shape-line">Line</SegmentedControlButton>
                            </SegmentedControl>

                            <Form tag="div">
                                <FormField
                                    label="Type"
                                    editor={
                                        <ImageEditorOptionList scrollable scrollableEnd>
                                            {shapeTypes.map((label) => (
                                                <ImageEditorOptionPreview key={label} label={label} selected={label === "Oval"} />
                                            ))}
                                        </ImageEditorOptionList>
                                    }
                                />
                                <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                                    <FormField
                                        label="Stroke Color"
                                        editor={ <ColorPicker id="tablet-shape-stroke-color" value="#b0e855" aria-label="Stroke Color" /> }
                                    />
                                    <FormField
                                        label="Stroke Width"
                                        editorId="tablet-shape-stroke-width"
                                        editor={ <NumericTextbox id="tablet-shape-stroke-width" showSpinButton={false} value="8" prefix={<Icon icon="border-width" />} /> }
                                    />
                                </Fieldset>
                                <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                                    <FormField
                                        label="Fill Color"
                                        editor={ <ColorPicker id="tablet-shape-fill-color" value="#eae382" valueIconName="droplet" aria-label="Fill Color" /> }
                                    />
                                    <FormField
                                        label="Text Color"
                                        editor={ <ColorPicker id="tablet-shape-text-color" value="#706903" valueIconName="foreground-color" aria-label="Text Color" /> }
                                    />
                                </Fieldset>
                                <FormField
                                    label="Font Family"
                                    editorId="tablet-shape-font-family"
                                    editor={ <Combobox id="tablet-shape-font-family" prefix={<Icon icon="font-family" />} value="Trebuchet MS" /> }
                                />
                                <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                                    <FormField
                                        label="Font Size"
                                        editorId="tablet-shape-font-size"
                                        editor={ <NumericTextbox id="tablet-shape-font-size" showSpinButton={false} value="24" prefix={<Icon icon="font-size" />} /> }
                                    />
                                    <FormField
                                        label="Alignment"
                                        editor={
                                            <ButtonGroup>
                                                <Button className="k-group-start" icon="align-left" aria-label="Align Left"></Button>
                                                <Button icon="align-center" selected aria-label="Align Center"></Button>
                                                <Button className="k-group-end" icon="align-right" aria-label="Align Right"></Button>
                                            </ButtonGroup>
                                        }
                                    />
                                </Fieldset>
                                <FormField
                                    label="Format"
                                    editor={
                                        <div className="k-d-flex k-gap-2">
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
                                        label="Align Horizontal"
                                        editor={
                                            <ButtonGroup>
                                                <Button className="k-group-start" icon="align-items-start" aria-label="Align Left"></Button>
                                                <Button icon="align-items-center" aria-label="Align Center"></Button>
                                                <Button className="k-group-end" icon="align-items-end" aria-label="Align Right"></Button>
                                            </ButtonGroup>
                                        }
                                    />
                                    <FormField
                                        label="Align Vertical"
                                        editor={
                                            <ButtonGroup>
                                                <Button className="k-group-start" icon="align-items-start-alt" aria-label="Align Top"></Button>
                                                <Button icon="align-items-center-alt" aria-label="Align Middle"></Button>
                                                <Button className="k-group-end" icon="align-items-end-alt" aria-label="Align Bottom"></Button>
                                            </ButtonGroup>
                                        }
                                    />
                                </Fieldset>
                            </Form>
                        </ImageEditorPane>
                    }
                >
                    <canvas width="720" height="393" role="img" aria-label="Image being edited" style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}></canvas>
                    <div className="k-imageeditor-resize" style={{ width: "234px", height: "77px", top: "156px", left: "243px" }}>
                        <div style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                            background: "#eae382",
                            border: "2px solid #b0e855",
                            boxSizing: "border-box"
                        }}>
                            <p style={{
                                margin: 0,
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontFamily: "'Trebuchet MS', sans-serif",
                                fontSize: "16px",
                                lineHeight: 1,
                                color: "#706903",
                                whiteSpace: "nowrap"
                            }}>Shape text</p>
                        </div>
                        <ImageEditorResizeHandles variant="mixed" />
                    </div>
                </ImageEditor>
            </div>

        </div>
    </>
);
