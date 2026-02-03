import { classNames } from "../misc";

export const FILE_BOX_WRAPPER_CLASSNAME = `k-file-box-wrapper`;

const defaultOptions = {
    layout: 'horizontal'
};

export type KendoFileBoxWrapper = {
    layout?: "horizontal" | "wrap" | "vertical";
    scrollingPosition?: "start" | "end" | "both";
};

export const FileBoxWrapper = (
    props: KendoFileBoxWrapper & React.HTMLAttributes<HTMLUListElement>
) => {
    const {
        layout = defaultOptions.layout,
        scrollingPosition,
        ...other
    } = props;

    const listElement = (
        <ul
            {...other}
            role="list"
            aria-label={other['aria-label'] || 'Attached files'}
            className={classNames(
                props.className,
                FILE_BOX_WRAPPER_CLASSNAME,
                {
                    [`k-files-vertical`]: layout === "vertical",
                    [`k-files-wrap`]: layout === "wrap",
                    [`${FILE_BOX_WRAPPER_CLASSNAME}-scrollable-start`]: layout === "horizontal" && (scrollingPosition === 'start' || scrollingPosition === 'both'),
                    [`${FILE_BOX_WRAPPER_CLASSNAME}-scrollable-end`]: layout === "horizontal" && (scrollingPosition === 'end' || scrollingPosition === 'both')
                }
            )}
        >
            {props.children}
        </ul>
    );

    // For horizontal layout, wrap the list in a scroll container
    // This preserves valid list structure (li elements are direct children of ul)
    if (layout === "horizontal") {
        return (
            <div className="k-files-scroll">
                {listElement}
            </div>
        );
    }

    return listElement;
};

FileBoxWrapper.className = FILE_BOX_WRAPPER_CLASSNAME;
FileBoxWrapper.defaultOptions = defaultOptions;

export default FileBoxWrapper;
