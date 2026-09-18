import { classNames } from '../misc';

export const IMAGEEDITOROPTIONLIST_CLASSNAME = `k-imageeditor-option-list`;

export type KendoImageEditorOptionListProps = {
    scrollable?: boolean;
    scrollableStart?: boolean;
    scrollableEnd?: boolean;
};

const defaultOptions = {
    scrollable: false,
    scrollableStart: false,
    scrollableEnd: false,
};

export const ImageEditorOptionList = (
    props: KendoImageEditorOptionListProps & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        scrollable = defaultOptions.scrollable,
        scrollableStart = defaultOptions.scrollableStart,
        scrollableEnd = defaultOptions.scrollableEnd,
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
