import { ImageEditor, ImageEditorPane, ImageEditorAspectRatioPreview } from "..";
import { Button } from "../../button";
import { Form, FormField } from "../../form";
import { Autocomplete } from "../../autocomplete";
import { ToolbarSeparator, ToolbarItem } from "../../toolbar";

const filtersSidebarItems = [
    <Button fillMode="flat" key="sidebar-button-1" icon="image-resize" aria-label="Resize"></Button>,
    <Button fillMode="flat" key="sidebar-button-2" icon="crop" aria-label="Crop"></Button>,
    <Button fillMode="flat" key="sidebar-button-3" icon="rotate" aria-label="Rotate"></Button>,
    <div className="k-separator" key="sidebar-separator-1"></div>,
    <Button fillMode="flat" key="sidebar-button-4" icon="free-text" aria-label="Text"></Button>,
    <Button fillMode="flat" key="sidebar-button-5" icon="shapes" aria-label="Shapes"></Button>,
    <div className="k-separator" key="sidebar-separator-2"></div>,
    <Button fillMode="flat" key="sidebar-button-6" icon="droplet" aria-label="Blur"></Button>,
    <Button fillMode="flat" key="sidebar-button-7" icon="sliders" selected aria-label="Filters"></Button>,
    <div className="k-separator" key="sidebar-separator-3"></div>,
    <Button fillMode="flat" key="sidebar-button-8" icon="image" aria-label="Adjustments"></Button>,
    <Button fillMode="flat" key="sidebar-button-9" icon="brightness-contrast" aria-label="Brightness / Contrast"></Button>
];

export const filterPresets: { [key: string]: { label: string } } = {
    "none": { label: "None" },
    "black-white": { label: "Black and White" },
    "greyscale": { label: "Greyscale" },
    "sepia": { label: "Sepia" },
    "warm": { label: "Warm" },
    "cold": { label: "Cold" },
    "chrome": { label: "Chrome" },
    "invert": { label: "Invert" }
};

const FilterPreview = ({ presetKey, selected }: { presetKey: string; selected: boolean }) => {
    const preset = filterPresets[presetKey];

    return (
        <ImageEditorAspectRatioPreview key={presetKey} selected={selected} aria-label={preset.label}>
            <span
                aria-hidden="true"
                style={{
                    display: "block",
                    width: "100%",
                    height: "40px",
                    borderRadius: "2px",
                    backgroundImage: "url('/packages/html/assets/sofia.jpg')",
                    backgroundSize: "cover"
                }}
            ></span>
            <span style={{ marginBlockStart: "6px" }}>{preset.label}</span>
        </ImageEditorAspectRatioPreview>
    );
};

export const ImageEditorFilters = ({ preset = "greyscale", ...props }: any) => (
    <ImageEditor
        sidebarItems={filtersSidebarItems}
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
            <ImageEditorPane title="Filters" actions={
                <>
                    <Button>Reset</Button>
                    <Button themeColor="primary">Apply</Button>
                </>
            }>
                <Form tag="div">
                    <FormField
                        editor={
                            <div className="k-d-grid k-grid-cols-3 k-gap-3">
                                <FilterPreview presetKey="none" selected={preset === "none"} />
                            </div>
                        }
                    />
                    <FormField
                        label="Monochrome"
                        editor={
                            <div className="k-d-grid k-grid-cols-3 k-gap-3">
                                <FilterPreview presetKey="black-white" selected={preset === "black-white"} />
                                <FilterPreview presetKey="greyscale" selected={preset === "greyscale"} />
                                <FilterPreview presetKey="sepia" selected={preset === "sepia"} />
                            </div>
                        }
                    />
                    <FormField
                        label="Color Temperature & Mood"
                        editor={
                            <div className="k-d-grid k-grid-cols-3 k-gap-3">
                                <FilterPreview presetKey="warm" selected={preset === "warm"} />
                                <FilterPreview presetKey="cold" selected={preset === "cold"} />
                                <FilterPreview presetKey="chrome" selected={preset === "chrome"} />
                            </div>
                        }
                    />
                    <FormField
                        label="Color Reversal"
                        editor={
                            <div className="k-d-grid k-grid-cols-3 k-gap-3">
                                <FilterPreview presetKey="invert" selected={preset === "invert"} />
                            </div>
                        }
                    />
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
