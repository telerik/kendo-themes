import { classNames, stateClassNames, States } from '../misc';

export const IMAGEEDITORASPECTRATIOPREVIEW_CLASSNAME = `k-imageeditor-aspect-ratio-preview`;

const states = [
    States.selected
];

const options = {};

export type KendoImageEditorAspectRatioPreviewProps = {
    label?: string;
};

const defaultOptions = {};

export type KendoImageEditorAspectRatioPreviewState = { [K in (typeof states)[number]]?: boolean };

export const ImageEditorAspectRatioPreview = (
    props: KendoImageEditorAspectRatioPreviewProps & KendoImageEditorAspectRatioPreviewState & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        label,
        selected,
        children,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                IMAGEEDITORASPECTRATIOPREVIEW_CLASSNAME,
                stateClassNames(IMAGEEDITORASPECTRATIOPREVIEW_CLASSNAME, { selected })
            )}
            role="button"
            aria-pressed={selected ? 'true' : 'false'}
        >
            {children ?? label}
        </div>
    );
};

ImageEditorAspectRatioPreview.states = states;
ImageEditorAspectRatioPreview.options = options;
ImageEditorAspectRatioPreview.className = IMAGEEDITORASPECTRATIOPREVIEW_CLASSNAME;
ImageEditorAspectRatioPreview.moduleName = null;
ImageEditorAspectRatioPreview.folderName = null;
ImageEditorAspectRatioPreview.defaultOptions = defaultOptions;

export default ImageEditorAspectRatioPreview;
