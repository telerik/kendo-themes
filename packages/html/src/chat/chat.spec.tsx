import { classNames } from '../misc';
import { IconButton } from '../button';
import { IconFloatingActionButton } from '../fab';
import { PromptBox, KendoPromptBoxProps } from '../prompt-box';
import { KendoComponent } from '../_types/component';
import { CHAT_FOLDER_NAME, CHAT_MODULE_NAME } from './constants';
const CHAT_CLASSNAME = 'k-chat';

const states = [];

const options = {};

export type KendoChatProps = {
    header?: React.JSX.Element;
    dir?: "ltr" | "rtl",
    suggestedActions?: React.JSX.Element,
    files?: React.JSX.Element,
    pinned?: string | React.JSX.Element,
    replied?: string | React.JSX.Element,
    generating?: boolean;
    tools?: React.JSX.Element | React.JSX.Element[];
    value?: string;
    empty?: boolean;
    scrollToBottom?: boolean;
    scrollbar?: boolean;
    promptBoxProps?: Partial<KendoPromptBoxProps>;
}

const defaultTools = <>
    <IconButton key="paperclip" icon="paperclip-outline-alt-right" fillMode="clear" rounded="full" />
    <div className="k-spacer"></div>
</>;

const defaultOptions = {
    tools: defaultTools,
};

export const Chat: KendoComponent<KendoChatProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoChatProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        header,
        dir,
        suggestedActions,
        files,
        pinned,
        replied,
        generating,
        tools = defaultOptions.tools,
        value,
        empty,
        scrollToBottom,
        scrollbar,
        promptBoxProps,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                CHAT_CLASSNAME,
                props.className
            )} dir={dir}>
            {header}
            <div className="k-message-list">
                {pinned}
                <div className={classNames("k-message-list-content",
                        empty && "k-message-list-content-empty"
                )}>
                    {props.children}
                </div>
                {scrollToBottom && <div className="k-chat-scroll-to-bottom-container">
                        <IconFloatingActionButton themeColor="light" icon="arrow-down-outline" size="small" />
                    </div>}
            </div>
            {scrollbar && <div className="k-separator"></div>}
            <div className="k-message-box-wrapper">
                {suggestedActions}
                <PromptBox
                    lineMode='multi'
                    placeholder="Type a message"
                    generating={generating}
                    value={value}
                    header={
                        files || replied ?
                            <>
                                {replied}
                                {files}
                            </>
                            : undefined
                    }
                    endAffix={tools}
                    {...promptBoxProps}
                />
            </div>
        </div>

    );
};

Chat.states = states;
Chat.options = options;
Chat.className = CHAT_CLASSNAME;
Chat.defaultOptions = defaultOptions;
Chat.moduleName = CHAT_MODULE_NAME;
Chat.folderName = CHAT_FOLDER_NAME;

export default Chat;
