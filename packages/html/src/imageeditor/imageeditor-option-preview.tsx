import { classNames, stateClassNames, States } from '../misc';

export const IMAGEEDITOROPTIONPREVIEW_CLASSNAME = `k-imageeditor-option-preview`;

const states = [
    States.selected
];

const options = {};

export type KendoImageEditorOptionPreviewProps = {
    label?: string;
};

const defaultOptions = {};

export type KendoImageEditorOptionPreviewState = { [K in (typeof states)[number]]?: boolean };

export const ImageEditorOptionPreview = (
    props: KendoImageEditorOptionPreviewProps & KendoImageEditorOptionPreviewState & React.HTMLAttributes<HTMLDivElement>
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
                IMAGEEDITOROPTIONPREVIEW_CLASSNAME,
                stateClassNames(IMAGEEDITOROPTIONPREVIEW_CLASSNAME, { selected })
            )}
            role="button"
            aria-pressed={selected ? 'true' : 'false'}
        >
            {children ?? label}
        </div>
    );
};

ImageEditorOptionPreview.states = states;
ImageEditorOptionPreview.options = options;
ImageEditorOptionPreview.className = IMAGEEDITOROPTIONPREVIEW_CLASSNAME;
ImageEditorOptionPreview.moduleName = null;
ImageEditorOptionPreview.folderName = null;
ImageEditorOptionPreview.defaultOptions = defaultOptions;

export default ImageEditorOptionPreview;
