import { IMAGEEDITOR_ADAPTIVE_CANVAS_SIZE, IMAGEEDITOR_CANVAS_SIZE } from './constants';

export type ImageEditorCanvasProps = React.CanvasHTMLAttributes<HTMLCanvasElement> & {
    imageSrc?: string;
    /** Uses the smaller mobile canvas size. */
    adaptive?: boolean;
};

/**
 * @aria {role="img"} Indicates the canvas role as an image.
 * @aria {aria-label|aria-labelledby} Provides an accessible name for the canvas by describing the image content.
 */
export const ImageEditorCanvas = (props: ImageEditorCanvasProps) => {
    const { imageSrc, adaptive, style, ...other } = props;

    return (
        <canvas
            role="img"
            aria-label="Image being edited"
            {...(adaptive ? IMAGEEDITOR_ADAPTIVE_CANVAS_SIZE : IMAGEEDITOR_CANVAS_SIZE)}
            {...other}
            style={{ ...(imageSrc && { backgroundImage: `url('${imageSrc}')` }), backgroundSize: "cover", ...style }}
        ></canvas>
    );
};

ImageEditorCanvas.moduleName = null;
ImageEditorCanvas.folderName = null;

export default ImageEditorCanvas;
