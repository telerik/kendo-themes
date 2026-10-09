import { classNames } from '../misc';

export const IMAGEEDITOROPTIONLIST_CLASSNAME = `k-imageeditor-option-list`;

export type KendoImageEditorOptionListProps = {
    scrollable?: boolean;
    scrollingPosition?: 'start' | 'end' | 'both';
};

const defaultOptions = {
    scrollable: false,
};

export const ImageEditorOptionList = (
    props: KendoImageEditorOptionListProps & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        scrollable = defaultOptions.scrollable,
        scrollingPosition,
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
                    [`${IMAGEEDITOROPTIONLIST_CLASSNAME}-scrollable-${scrollingPosition}`]: scrollingPosition && scrollingPosition !== 'both',
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
