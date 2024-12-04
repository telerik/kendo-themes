import { ImageEditor } from "..";
import { ButtonGroup, ToolbarItem, ToolbarSeparator } from "../..";
import { Button } from "../../button";
import { CheckboxWithLabelAfter } from "../../checkbox";
import { DropdownList } from "../../dropdownlist";
import { FormNormal, Fieldset, FormField } from "../../form";
import { NumericTextbox } from "../../numerictextbox";

export const ImageEditorCrop = (props: any) => (
    <ImageEditor
        toolbarItems={[
            <Button key="toolbar-button-1" icon="upload"></Button>,
            <Button key="toolbar-button-2" icon="download"></Button>,
            <ToolbarSeparator key="toolbar-separator-1"></ToolbarSeparator>,
            <Button key="toolbar-button-3" disabled icon="undo"></Button>,
            <Button key="toolbar-button-4" disabled icon="redo"></Button>,
            <ToolbarSeparator key="toolbar-separator-2"></ToolbarSeparator>,
            <Button key="toolbar-button-5" icon="crop"></Button>,
            <Button key="toolbar-button-6" icon="image-resize"></Button>,
            <Button key="toolbar-button-7" icon="zoom-in"></Button>,
            <Button key="toolbar-button-8" icon="zoom-out"></Button>,
            <ToolbarItem key="toolbar-item-1">
                <DropdownList value="Zoom options" />
            </ToolbarItem>
        ]}
        actionPane={
            <FormNormal tag="div" className="k-imageeditor-pane-form" formButtons={
                <>
                    <Button themeColor="primary" icon="check">Confirm</Button>
                    <Button icon="cancel-outline">Cancel</Button>
                </>
            }>
                <Fieldset layout="grid" legend="Crop Image" cols={2} gapX={2}>
                    <FormField
                        colSpan="2"
                        label="Aspect Ratio:"
                        editor={ <DropdownList value="Original ratio" /> }
                    />
                    <FormField
                        colSpan="2"
                        label="Orientation:"
                        editor={
                            <ButtonGroup>
                                <Button className="k-group-start" selected>Portrait</Button>
                                <Button className="k-group-end">Landscape</Button>
                            </ButtonGroup>
                        }
                    />
                    <FormField
                        colSpan="1"
                        label="Width:"
                        editor={ <NumericTextbox showClearButton={false} value="61" /> }
                    />
                    <FormField
                        colSpan="1"
                        label="Height:"
                        editor={ <NumericTextbox showClearButton={false} value="68" /> }
                    />
                   <FormField
                        colSpan="2"
                        editor={ <CheckboxWithLabelAfter>Lock aspect ratio</CheckboxWithLabelAfter> }
                    />
                </Fieldset>
            </FormNormal>
        }

        children={
            <>
                <canvas width="61" height="68"></canvas>
                <div className="k-imageeditor-crop-overlay">
                    <div className="k-imageeditor-crop" style={{ width: "61px", height: "68px" }}>
                        <span className="k-resize-handle k-resize-nw"></span>
                        <span className="k-resize-handle k-resize-n"></span>
                        <span className="k-resize-handle k-resize-ne"></span>
                        <span className="k-resize-handle k-resize-w"></span>
                        <span className="k-resize-handle k-resize-e"></span>
                        <span className="k-resize-handle k-resize-sw"></span>
                        <span className="k-resize-handle k-resize-s"></span>
                        <span className="k-resize-handle k-resize-se"></span>
                    </div>
                </div>
            </>
        }
        {...props} />
);
