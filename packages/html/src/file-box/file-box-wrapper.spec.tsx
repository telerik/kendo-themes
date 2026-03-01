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

    return (
        <ul
            role="list"
            aria-label="Attached files"
            {...other}
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
            {layout === "horizontal" ? (
                <div className="k-files-scroll">
                    {props.children}
                </div>
            ) : (
                props.children
            )}
        </ul>
    )
};

FileBoxWrapper.className = FILE_BOX_WRAPPER_CLASSNAME;
FileBoxWrapper.defaultOptions = defaultOptions;

export default FileBoxWrapper;
