import { ImageEditor, ImageEditorPane } from "..";
import { Button } from "../../button";
import { CheckboxWithLabelAfter } from "../../checkbox";
import { NumericTextbox } from "../../numerictextbox";
import { Form, FormField, Fieldset } from "../../form";
import { Icon } from "../../icon";
import { Autocomplete } from "../../autocomplete";
import { RadioGroup, RadioItem, RadioButtonWithLabelAfter } from "../../radio";
import { ToolbarSeparator, ToolbarItem, FloatingToolbar } from "../../toolbar";
import { Tooltip } from "../../tooltip";

export const ImageEditorResize = (props: any) => (
    <ImageEditor
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
                    <span className="k-scale-handle k-resize-nw"></span>
                    <span className="k-scale-handle k-resize-ne"></span>
                    <span className="k-scale-handle k-resize-sw"></span>
                    <span className="k-scale-handle k-resize-se"></span>
                    <span className="k-resize-handle k-resize-n"></span>
                    <span className="k-resize-handle k-resize-s"></span>
                    <span className="k-resize-handle k-resize-w"></span>
                    <span className="k-resize-handle k-resize-e"></span>
                </div>
                <FloatingToolbar style={{ position: "absolute", insetBlockEnd: "-64px", insetInlineEnd: "10px" }}>
                    <Button icon="flip-horizontal" aria-label="Flip Horizontal"></Button>
                    <Button icon="flip-vertical" aria-label="Flip Vertical"></Button>
                    <Button icon="download" aria-label="Download"></Button>
                    <Button icon="trash" aria-label="Delete"></Button>
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
