export type ImageEditorPreviewThumbnailProps = {
    label?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
};

const defaultOptions = {};

// Generic thumbnail + caption pair used inside preview cards (aspect ratio, filters, frame style, ...);
// not tied to any particular preview card component so it can be reused wherever a small image preview is needed.
export const ImageEditorPreviewThumbnail = (props: ImageEditorPreviewThumbnailProps) => {
    const { label, style, children } = props;

    return (
        <>
            <span
                aria-hidden="true"
                style={{
                    position: "relative",
                    display: "block",
                    width: "100%",
                    height: "40px",
                    borderRadius: "2px",
                    backgroundImage: "url('/packages/html/assets/sofia.jpg')",
                    backgroundSize: "cover",
                    boxSizing: "border-box",
                    ...style
                }}
            >
                {children}
            </span>
            {label && <span style={{ marginBlockStart: "6px" }}>{label}</span>}
        </>
    );
};

ImageEditorPreviewThumbnail.moduleName = null;
ImageEditorPreviewThumbnail.folderName = null;
ImageEditorPreviewThumbnail.defaultOptions = defaultOptions;

export default ImageEditorPreviewThumbnail;
