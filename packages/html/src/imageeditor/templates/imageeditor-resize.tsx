import { ImageEditor } from "..";
import { Button } from "../../button";
import { CheckboxWithLabelAfter } from "../../checkbox";
import { DropdownList } from "../../dropdownlist";
import { FormNormal, Fieldset, FormField } from "../../form";
import { NumericTextbox } from "../../numerictextbox";
import { ToolbarSeparator, ToolbarItem } from "../../toolbar";

export const ImageEditorResize = (props: any) => (
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
                    <Button themeColor="primary">Confirm</Button>
                    <Button>Cancel</Button>
                </>
            }>
                <Fieldset layout="grid" legend="Resize Image" cols={2} gapX={2}>
                    <FormField
                        colSpan="1"
                        label="Width:"
                        editor={ <NumericTextbox showClearButton={false} value="61" /> }
                    />
                    <FormField
                        colSpan="1"
                        label="&nbsp;"
                        editor={ <DropdownList value="Pixels" /> }
                    />
                    <FormField
                        colSpan="1"
                        label="Height:"
                        editor={ <NumericTextbox showClearButton={false} value="68" /> }
                    />
                    <FormField
                        colSpan="1"
                        label="&nbsp;"
                        editor={ <DropdownList value="Pixels" /> }
                    />
                    <FormField
                        colSpan="2"
                        editor={ <CheckboxWithLabelAfter>Lock aspect ratio</CheckboxWithLabelAfter> }
                    />
                </Fieldset>
            </FormNormal>
        }

        children={
            <canvas width="61" height="68"></canvas>
        }
        {...props} />
);
