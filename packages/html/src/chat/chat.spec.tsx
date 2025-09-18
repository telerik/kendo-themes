import { classNames } from '../misc';
import { Textarea } from '../textarea';
import { IconButton } from '../button';
import { ChatSendButton } from './';
import { SpeechToTextButton } from '../speech-to-text-button';

import { KendoComponent } from '../_types/component';
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
}

const defaultTools = <>
    <SpeechToTextButton fillMode="clear" />
    <IconButton key="paperclip" icon="paperclip" fillMode="clear" />
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
            {pinned}
            <div className="k-message-list k-avatars">
                <div className="k-message-list-content">
                    {props.children}
                </div>
            </div>
            <div className="k-message-box-wrapper">
                {suggestedActions}
                <Textarea
                    className="k-message-box"
                    placeholder="Type a message"
                    value={value}
                    prefixSeparator={false}
                    suffixSeparator={false}
                    rows={1}
                    resize="none"
                    prefix={
                        files || replied ?
                            <>
                                {replied}
                                {files}
                            </>
                            : undefined
                    }
                    suffix={
                        <>
                            {tools}
                            <span className="k-spacer" />
                            <ChatSendButton generating={generating} disabled={!value && !generating} />
                        </>
                    }
                />
            </div>
        </div>

    );
};

Chat.states = states;
Chat.options = options;
Chat.className = CHAT_CLASSNAME;
Chat.defaultOptions = defaultOptions;
Chat.moduleName = "chat";
Chat.folderName = Chat.moduleName;

export default Chat;
