import { classNames } from "../misc";

export const CHATFILEWRAPPER_CLASSNAME = `k-chat-file-wrapper`;

const defaultOptions = {
    layout: 'vertical'
};

export type KendoChatFileWrapper = {
    layout?: "vertical" | "horizontal" | "wrap";
};

export const ChatFileWrapper = (
    props: KendoChatFileWrapper & React.HTMLAttributes<HTMLUListElement>
) => {
    const {
        layout = defaultOptions.layout,
        ...other
    } = props;

    return (
        <ul
            {...other}
            className={classNames(
                props.className,
                CHATFILEWRAPPER_CLASSNAME,
                {
                    [`k-chat-files-horizontal`]: layout === "horizontal",
                    [`k-chat-files-wrap`]: layout === "wrap"
                }
            )}
        >
            {props.children}
        </ul>
    )
};

ChatFileWrapper.className = CHATFILEWRAPPER_CLASSNAME;
ChatFileWrapper.defaultOptions = defaultOptions;

export default ChatFileWrapper;
