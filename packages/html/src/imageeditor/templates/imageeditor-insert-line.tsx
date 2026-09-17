import { ImageEditor, ImageEditorPane } from "..";
import { Button } from "../../button";
import { ButtonGroup } from "../../button-group";
import { NumericTextbox } from "../../numerictextbox";
import { ColorPicker } from "../../colorpicker";
import { DropdownList } from "../../dropdownlist";
import { Form, FormField, Fieldset } from "../../form";
import { Icon } from "../../icon";
import { SegmentedControl, SegmentedControlButton } from "../../segmented-control";
import { FloatingToolbar } from "../../toolbar";

const insertLineSidebarItems = [
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

export const ImageEditorInsertLine = (props: any) => (
    <ImageEditor
        sidebarItems={insertLineSidebarItems}
        actionPane={
            <ImageEditorPane title="Shapes and Lines" actions={
                <>
                    <Button>Remove</Button>
                    <Button themeColor="primary">Insert</Button>
                </>
            }>
                <SegmentedControl thumbStyles={{ width: "50%", left: "50%" }} stretched aria-label="Shape or Line" style={{ flexShrink: 0 }}>
                    <SegmentedControlButton icon="shapes">Shape</SegmentedControlButton>
                    <SegmentedControlButton icon="shape-line" selected>Line</SegmentedControlButton>
                </SegmentedControl>

                <Form tag="div">
                    <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                        <FormField
                            label="Stroke Color"
                            editor={ <ColorPicker id="line-stroke-color" value="#b0e855" aria-label="Stroke Color" /> }
                        />
                        <FormField
                            label="Stroke Width"
                            editorId="line-stroke-width"
                            editor={ <NumericTextbox id="line-stroke-width" showSpinButton={false} value="8" prefix={<Icon icon="border-width" />} /> }
                        />
                    </Fieldset>
                    <FormField
                        label="Stroke Type"
                        editor={ <DropdownList id="line-stroke-type" value="Dotted" valueIconName="border-style" aria-label="Stroke Type" /> }
                    />
                    <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                        <FormField
                            label="Start Point"
                            editor={ <DropdownList id="line-start-point" value="Circle" valueIconName="circle" aria-label="Start Point" /> }
                        />
                        <FormField
                            label="End Point"
                            editor={ <DropdownList id="line-end-point" value="Diamond" valueIconName="rectangle-shape" aria-label="End Point" /> }
                        />
                    </Fieldset>
                    <FormField
                        label="Opacity"
                        editor={ <NumericTextbox id="line-opacity" showSpinButton={false} value="100%" prefix={<Icon icon="transparency" />} aria-label="Opacity" /> }
                    />
                    <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                        <FormField
                            label="Align"
                            editor={
                                <ButtonGroup>
                                    <Button className="k-group-start" icon="align-items-start" aria-label="Align Left"></Button>
                                    <Button icon="align-items-center" selected aria-label="Align Center"></Button>
                                    <Button className="k-group-end" icon="align-items-end" aria-label="Align Right"></Button>
                                </ButtonGroup>
                            }
                        />
                        <FormField
                            label="Align Vertical"
                            editor={
                                <ButtonGroup>
                                    <Button className="k-group-start" icon="align-items-start-alt" aria-label="Align Top"></Button>
                                    <Button icon="align-items-center-alt" selected aria-label="Align Middle"></Button>
                                    <Button className="k-group-end" icon="align-items-end-alt" aria-label="Align Bottom"></Button>
                                </ButtonGroup>
                            }
                        />
                    </Fieldset>
                </Form>
            </ImageEditorPane>
        }

        children={
            <>
                <canvas width="494" height="307" role="img" aria-label="Image being edited" style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundSize: "cover" }}></canvas>
                <div style={{ position: "absolute", top: "150px", left: "90px", width: "220px", height: "0" }}>
                    <div style={{
                        position: "absolute", left: "0", right: "0", top: "-1px", height: "2px",
                        background: "#5558e8"
                    }}></div>
                    <div style={{
                        position: "absolute", left: "0", right: "0", top: "-4px", height: "8px",
                        backgroundImage: "radial-gradient(circle, #b0e855 45%, transparent 46%)",
                        backgroundSize: "16px 8px", backgroundRepeat: "repeat-x", backgroundPosition: "left center"
                    }}></div>
                    <span style={{
                        position: "absolute", left: "-7px", top: "-7px",
                        width: "14px", height: "14px", borderRadius: "50%",
                        background: "#fff", border: "2px solid #5558e8", boxSizing: "border-box"
                    }}></span>
                    <span style={{
                        position: "absolute", right: "-9px", top: "-9px",
                        width: "18px", height: "18px", transform: "rotate(45deg)",
                        background: "#b0e855", border: "2px solid #5558e8", boxSizing: "border-box"
                    }}>
                        <span style={{
                            position: "absolute", left: "50%", top: "50%",
                            width: "5px", height: "5px", borderRadius: "50%",
                            background: "#fff", transform: "translate(-50%, -50%)"
                        }}></span>
                    </span>
                    <FloatingToolbar fillMode="flat" resizable offset={{ top: "36px", left: "-10px" }}>
                        <Button fillMode="flat" icon="copy" aria-label="Duplicate"></Button>
                        <Button fillMode="flat" icon="pencil" aria-label="Edit"></Button>
                        <Button fillMode="flat" icon="flip-horizontal" aria-label="Flip Horizontal"></Button>
                        <Button fillMode="flat" icon="flip-vertical" aria-label="Flip Vertical"></Button>
                        <Button fillMode="flat" icon="trash" aria-label="Delete"></Button>
                    </FloatingToolbar>
                </div>
            </>
        }
        {...props} />
);

export default ImageEditorInsertLine;
