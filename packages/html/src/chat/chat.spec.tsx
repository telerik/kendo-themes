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
    <IconButton key="paperclip" icon="paperclip-outline-alt-right" fillMode="clear" rounded="full" size="small" aria-label="Attach file" />
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
            <div className="k-message-list" role="log" aria-label="Message list" aria-live="polite">
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

Chat.ariaSpec = {
    selector: '.k-chat',
    rules: [
        // Message list
        { selector: '.k-message-list', attribute: 'role=log', usage: 'The role of the Chat message list must imply that there is a log (list) of messages.' },
        { selector: '.k-message-list', attribute: 'aria-label', usage: 'Announces the purpose of the Chat message list.' },
        { selector: '.k-message-list', attribute: 'aria-live=polite', usage: 'Announces new messages in the Chat message list.' },
        // Bubble
        { selector: '.k-bubble', attribute: 'tabindex=0', usage: 'The Chat bubble must be focusable.' },
        // Typing indicator
        { selector: '.k-bubble .k-typing-indicator', attribute: 'tabindex=-1', usage: 'The Chat bubble typing indicator should not be focusable.' },
        // Expandable indicator
        { selector: '.k-bubble-expandable-indicator', attribute: 'role=button', usage: 'The expandable indicator must have an appropriate role.' },
        { selector: '.k-bubble-expandable-indicator', attribute: 'aria-label or title', usage: 'The expandable indicator must be properly labelled.' },
        { selector: '.k-bubble-expandable-indicator', attribute: 'tabindex=0', usage: 'The expandable indicator must be part of the page tabsequence.' },
        // Reference close button
        { selector: '.k-message-reference>.k-button', attribute: 'aria-label or title', usage: 'The reference close button must be properly labelled.' },
        { selector: '.k-message-reference>.k-button', attribute: 'role=button or nodeName=button', usage: 'The reference close button must have an appropriate role.' },
        // Prompt box suffix buttons
        { selector: '.k-prompt-box-affix>.k-button', attribute: 'role=button or nodeName=button', usage: 'The buttons must have appropriate role.' },
        { selector: '.k-prompt-box-affix>.k-button', attribute: 'aria-label or title', usage: 'The buttons must be properly labelled.' },
        // Disabled send button
        { selector: '.k-prompt-box-affix>.k-button.k-disabled', attribute: 'disabled', usage: 'Announces the send action as disabled when necessary.' },
    ]
};

export default Chat;
