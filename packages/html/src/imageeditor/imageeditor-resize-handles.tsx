export type ImageEditorResizeHandlesVariant = 'crop' | 'mixed' | 'scale';

export type ImageEditorResizeHandlesProps = {
    variant?: ImageEditorResizeHandlesVariant;
    grid?: boolean;
};

const defaultOptions = {
    variant: 'crop' as ImageEditorResizeHandlesVariant
};

// Shared corner+edge handle markup for Crop/Resize/Rotate/Insert-Text/Insert-Shape; variant picks which class (k-resize-handle vs k-scale-handle) each position renders.
export const ImageEditorResizeHandles = (props: ImageEditorResizeHandlesProps) => {
    const { variant = defaultOptions.variant, grid } = props;
    const cornerClassName = variant === 'crop' ? 'k-resize-handle' : 'k-scale-handle';
    const edgeClassName = variant === 'scale' ? 'k-scale-handle' : 'k-resize-handle';

    return (
        <>
            {grid && <div className="k-imageeditor-crop-grid"></div>}
            <span className={`${cornerClassName} k-resize-nw`}></span>
            <span className={`${cornerClassName} k-resize-ne`}></span>
            <span className={`${cornerClassName} k-resize-sw`}></span>
            <span className={`${cornerClassName} k-resize-se`}></span>
            <span className={`${edgeClassName} k-resize-n`}></span>
            <span className={`${edgeClassName} k-resize-s`}></span>
            <span className={`${edgeClassName} k-resize-w`}></span>
            <span className={`${edgeClassName} k-resize-e`}></span>
        </>
    );
};

ImageEditorResizeHandles.moduleName = null;
ImageEditorResizeHandles.folderName = null;
ImageEditorResizeHandles.defaultOptions = defaultOptions;

export default ImageEditorResizeHandles;
