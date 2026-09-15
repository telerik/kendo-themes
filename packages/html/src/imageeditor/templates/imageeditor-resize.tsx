import { ImageEditor, ImageEditorPane, ImageEditorResizeHandles } from "..";
import { Button } from "../../button";
import { CheckboxWithLabelAfter } from "../../checkbox";
import { NumericTextbox } from "../../numerictextbox";
import { Form, FormField, Fieldset } from "../../form";
import { Icon } from "../../icon";
import { RadioGroup, RadioItem, RadioButtonWithLabelAfter } from "../../radio";
import { FloatingToolbar } from "../../toolbar";
import { Tooltip } from "../../tooltip";

const resizeSidebarItems = [
    <Button fillMode="flat" key="sidebar-button-1" icon="crop" aria-label="Crop"></Button>,
    <Button fillMode="flat" key="sidebar-button-2" icon="image-resize" selected aria-label="Resize"></Button>,
    <Button fillMode="flat" key="sidebar-button-3" icon="rotate" aria-label="Rotate"></Button>,
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

export const ImageEditorResize = (props: any) => (
    <ImageEditor
        sidebarItems={resizeSidebarItems}
        actionPane={
            <ImageEditorPane title="Resize" actions={
                <>
                    <Button>Reset</Button>
                    <Button themeColor="primary">Apply</Button>
                </>
            }>
                <Form tag="div">
                    <FormField
                        label="Scale Unit"
                        editor={
                            <RadioGroup layout="horizontal">
                                <RadioItem>
                                    <RadioButtonWithLabelAfter id="resize-scale-unit-pixel" name="resize-scale-unit" checked>Pixel</RadioButtonWithLabelAfter>
                                </RadioItem>
                                <RadioItem>
                                    <RadioButtonWithLabelAfter id="resize-scale-unit-percentage" name="resize-scale-unit">Percentage</RadioButtonWithLabelAfter>
                                </RadioItem>
                            </RadioGroup>
                        }
                    />
                    <Fieldset layout="grid" cols={2} gutters={{ cols: "8px" }}>
                        <FormField
                            label="Width"
                            editorId="resize-width"
                            editor={ <NumericTextbox id="resize-width" showClearButton={false} value="494" prefix={<Icon icon="arrows-left-right" />} /> }
                        />
                        <FormField
                            label="Height"
                            editorId="resize-height"
                            editor={ <NumericTextbox id="resize-height" showClearButton={false} value="307" prefix={<Icon icon="arrows-top-bottom" />} /> }
                        />
                    </Fieldset>
                    <FormField editor={ <CheckboxWithLabelAfter id="resize-lock" checked>Lock Aspect Ratio</CheckboxWithLabelAfter> } />
                </Form>
            </ImageEditorPane>
        }

        children={
            <>
                <canvas width="494" height="307" role="img" aria-label="Image being edited" style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundSize: "cover" }}></canvas>
                <div className="k-imageeditor-resize">
                    <ImageEditorResizeHandles variant="mixed" />
                </div>
                <FloatingToolbar fillMode="flat" style={{ position: "absolute", insetBlockEnd: "-64px", insetInlineEnd: "10px" }}>
                    <Button fillMode="flat" icon="flip-horizontal" aria-label="Flip Horizontal"></Button>
                    <Button fillMode="flat" icon="flip-vertical" aria-label="Flip Vertical"></Button>
                    <Button fillMode="flat" icon="download" aria-label="Download"></Button>
                    <Button fillMode="flat" icon="trash" aria-label="Delete"></Button>
                </FloatingToolbar>
                <Tooltip
                    themeColor="inverse"
                    style={{ position: "absolute", insetBlockEnd: "-52px", insetInlineEnd: "0" }}
                    content={
                        <>
                            <div>W: 494</div>
                            <div>H: 307</div>
                        </>
                    }
                ></Tooltip>
            </>
        }
        {...props} />
);
