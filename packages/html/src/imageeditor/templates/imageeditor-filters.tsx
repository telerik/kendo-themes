import { ImageEditor, ImageEditorPane, ImageEditorOptionPreview, ImageEditorPreviewThumbnail, ImageEditorCanvas } from "..";
import { Button } from "../../button";
import { Form, FormField } from "../../form";

export const ImageEditorFilters = ({ preset = "none", adaptive, imageSrc, ...props }: any) => (
    <ImageEditor
        adaptive={adaptive}
        activeTool="Filters"
        actionPane={
            <ImageEditorPane title="Filters" adaptive={adaptive} confirmDisabled={preset === "none"} actions={
                <>
                    <Button disabled={preset === "none"}>Reset</Button>
                    <Button themeColor="primary" disabled={preset === "none"}>Apply</Button>
                </>
            }>
                <Form tag="div">
                    <FormField
                        editor={
                            <div className="k-imageeditor-option-grid">
                                <ImageEditorOptionPreview selected={preset === "none"} aria-label="None">
                                    <ImageEditorPreviewThumbnail label="None" imageSrc={imageSrc} />
                                </ImageEditorOptionPreview>
                            </div>
                        }
                    />
                    <FormField
                        label="Monochrome"
                        editor={
                            <div className="k-imageeditor-option-grid">
                                <ImageEditorOptionPreview selected={preset === "black-white"} aria-label="Black and White">
                                    <ImageEditorPreviewThumbnail label="Black and White" imageSrc={imageSrc} />
                                </ImageEditorOptionPreview>
                                <ImageEditorOptionPreview selected={preset === "greyscale"} aria-label="Greyscale">
                                    <ImageEditorPreviewThumbnail label="Greyscale" imageSrc={imageSrc} />
                                </ImageEditorOptionPreview>
                                <ImageEditorOptionPreview selected={preset === "sepia"} aria-label="Sepia">
                                    <ImageEditorPreviewThumbnail label="Sepia" imageSrc={imageSrc} />
                                </ImageEditorOptionPreview>
                            </div>
                        }
                    />
                    <FormField
                        label="Color Temperature & Mood"
                        editor={
                            <div className="k-imageeditor-option-grid">
                                <ImageEditorOptionPreview selected={preset === "warm"} aria-label="Warm">
                                    <ImageEditorPreviewThumbnail label="Warm" imageSrc={imageSrc} />
                                </ImageEditorOptionPreview>
                                <ImageEditorOptionPreview selected={preset === "cold"} aria-label="Cold">
                                    <ImageEditorPreviewThumbnail label="Cold" imageSrc={imageSrc} />
                                </ImageEditorOptionPreview>
                                <ImageEditorOptionPreview selected={preset === "chrome"} aria-label="Chrome">
                                    <ImageEditorPreviewThumbnail label="Chrome" imageSrc={imageSrc} />
                                </ImageEditorOptionPreview>
                            </div>
                        }
                    />
                    <FormField
                        label="Color Reversal"
                        editor={
                            <div className="k-imageeditor-option-grid">
                                <ImageEditorOptionPreview selected={preset === "invert"} aria-label="Invert">
                                    <ImageEditorPreviewThumbnail label="Invert" imageSrc={imageSrc} />
                                </ImageEditorOptionPreview>
                            </div>
                        }
                    />
                </Form>
            </ImageEditorPane>
        }

        children={
            <>
                <ImageEditorCanvas adaptive={adaptive} imageSrc={imageSrc} />
            </>
        }
        {...props} />
);
