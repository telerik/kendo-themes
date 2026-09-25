import { ImageEditor, ImageEditorPane, ImageEditorOptionPreview, ImageEditorPreviewThumbnail } from "..";
import { Button } from "../../button";
import { Form, FormField } from "../../form";

const filtersSidebarItems = [
    <Button fillMode="flat" key="sidebar-button-1" icon="image-resize" aria-label="Resize"></Button>,
    <Button fillMode="flat" key="sidebar-button-2" icon="crop" aria-label="Crop"></Button>,
    <Button fillMode="flat" key="sidebar-button-3" icon="rotate" aria-label="Rotate"></Button>,
    <div className="k-separator" key="sidebar-separator-1"></div>,
    <Button fillMode="flat" key="sidebar-button-4" icon="free-text" aria-label="Text"></Button>,
    <Button fillMode="flat" key="sidebar-button-5" icon="shapes" aria-label="Shapes"></Button>,
    <div className="k-separator" key="sidebar-separator-2"></div>,
    <Button fillMode="flat" key="sidebar-button-6" icon="drop-half-pixelated" aria-label="Blur"></Button>,
    <Button fillMode="flat" key="sidebar-button-7" icon="sliders-horizontal" aria-label="Adjustments"></Button>,
    <Button fillMode="flat" key="sidebar-button-8" icon="circles-three-intersecting" selected aria-label="Filters"></Button>,
    <div className="k-separator" key="sidebar-separator-3"></div>,
    <Button fillMode="flat" key="sidebar-button-9" icon="frame-corners" aria-label="Frame"></Button>,
    <Button fillMode="flat" key="sidebar-button-10" icon="circle-half-tilted" aria-label="Shadow"></Button>
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
        <ImageEditorOptionPreview key={presetKey} selected={selected} aria-label={preset.label}>
            <ImageEditorPreviewThumbnail label={preset.label} />
        </ImageEditorOptionPreview>
    );
};

export const ImageEditorFilters = ({ preset = "greyscale", ...props }: any) => (
    <ImageEditor
        sidebarItems={filtersSidebarItems}
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
