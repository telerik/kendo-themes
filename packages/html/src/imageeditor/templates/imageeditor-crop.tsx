import { ImageEditor, ImageEditorPane, ImageEditorOptionList, ImageEditorOptionPreview, ImageEditorResizeHandles } from "..";
import { Button } from "../../button";
import { CheckboxWithLabelAfter } from "../../checkbox";
import { NumericTextbox } from "../../numerictextbox";
import { Form, FormField, Fieldset } from "../../form";
import { Icon } from "../../icon";
import { RadioGroup, RadioItem, RadioButtonWithLabelAfter } from "../../radio";

const cropSidebarItems = [
    <Button fillMode="flat" key="sidebar-button-1" icon="crop" selected aria-label="Crop"></Button>,
    <Button fillMode="flat" key="sidebar-button-2" icon="image-resize" aria-label="Resize"></Button>,
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

export const ImageEditorCrop = (props: any) => (
    <ImageEditor
        sidebarItems={cropSidebarItems}
        actionPane={
            <ImageEditorPane title="Crop" actions={
                <>
                    <Button>Reset</Button>
                    <Button themeColor="primary">Apply</Button>
                </>
            }>
                <Form tag="div">
                    <FormField
                        label="Orientation"
                        editor={
                            <RadioGroup layout="horizontal">
                                <RadioItem>
                                    <RadioButtonWithLabelAfter id="crop-orientation-landscape" name="crop-orientation" checked>Landscape</RadioButtonWithLabelAfter>
                                </RadioItem>
                                <RadioItem>
                                    <RadioButtonWithLabelAfter id="crop-orientation-portrait" name="crop-orientation">Portrait</RadioButtonWithLabelAfter>
                                </RadioItem>
                            </RadioGroup>
                        }
                    />
                    <FormField
                        label="Aspect Ratio"
                        editor={
                            <ImageEditorOptionList scrollable scrollableEnd>
                                <ImageEditorOptionPreview label="Original" />
                                <ImageEditorOptionPreview label="1:1" />
                                <ImageEditorOptionPreview label="3:2" />
                                <ImageEditorOptionPreview label="4:3" />
                                <ImageEditorOptionPreview label="5:4" />
                                <ImageEditorOptionPreview label="7:5" />
                                <ImageEditorOptionPreview label="16:9" />
                                <ImageEditorOptionPreview label="Custom" />
                            </ImageEditorOptionList>
                        }
                    />
                    <Fieldset layout="grid" cols={2} gutters={{ cols: "8px" }}>
                        <FormField
                            label="Width"
                            editorId="crop-width"
                            editor={ <NumericTextbox id="crop-width" showClearButton={false} value="400" prefix={<Icon icon="arrows-left-right" />} /> }
                        />
                        <FormField
                            label="Height"
                            editorId="crop-height"
                            editor={ <NumericTextbox id="crop-height" showClearButton={false} value="360" prefix={<Icon icon="arrows-top-bottom" />} /> }
                        />
                    </Fieldset>
                    <FormField editor={ <CheckboxWithLabelAfter id="crop-lock" checked>Lock Aspect Ratio</CheckboxWithLabelAfter> } />
                </Form>
            </ImageEditorPane>
        }

        children={
            <>
                <canvas width="61" height="68" role="img" aria-label="Image being edited"></canvas>
                <div className="k-imageeditor-crop-overlay">
                    <div className="k-imageeditor-crop" style={{ width: "61px", height: "68px" }}>
                        <ImageEditorResizeHandles variant="crop" grid />
                    </div>
                </div>
            </>
        }
        {...props} />
);

