import { classNames } from '../misc';

export const IMAGEEDITOROPTIONLIST_CLASSNAME = `k-imageeditor-option-list`;

export type KendoImageEditorOptionListProps = {
    scrollable?: boolean;
    scrollableStart?: boolean;
    scrollableEnd?: boolean;
    scrollableBoth?: boolean;
};

const defaultOptions = {
    scrollable: false,
    scrollableStart: false,
    scrollableEnd: false,
    scrollableBoth: false,
};

export const ImageEditorOptionList = (
    props: KendoImageEditorOptionListProps & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        scrollable = defaultOptions.scrollable,
        scrollableStart = defaultOptions.scrollableStart,
        scrollableEnd = defaultOptions.scrollableEnd,
        scrollableBoth = defaultOptions.scrollableBoth,
        children,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                IMAGEEDITOROPTIONLIST_CLASSNAME,
                {
                    [`${IMAGEEDITOROPTIONLIST_CLASSNAME}-scrollable`]: scrollable,
                    [`${IMAGEEDITOROPTIONLIST_CLASSNAME}-scrollable-start`]: scrollableStart,
                    [`${IMAGEEDITOROPTIONLIST_CLASSNAME}-scrollable-end`]: scrollableEnd,
                    [`${IMAGEEDITOROPTIONLIST_CLASSNAME}-scrollable-both`]: scrollableBoth,
                }
            )}
        >
            <div className="k-imageeditor-option-list-items">
                {children}
            </div>
        </div>
    );
};

ImageEditorOptionList.className = IMAGEEDITOROPTIONLIST_CLASSNAME;
ImageEditorOptionList.moduleName = null;
ImageEditorOptionList.folderName = null;
ImageEditorOptionList.defaultOptions = defaultOptions;

export default ImageEditorOptionList;
