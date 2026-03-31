import { Button, IconButton } from '../button';
import { Icon } from '../icon';
import { Toolbar } from '../toolbar';
import { classNames, States } from '../misc';
import { ChatBubble } from './';

export const CHATMESSAGE_CLASSNAME = 'k-message';

const states = [
    States.hover,
    States.selected,
    States.active,
    States.focus
];

const options = {};

const defaultToolbarItems = [
    <Button icon="copy" fillMode="flat" aria-label="Copy"></Button>,
    <Button icon="arrow-rotate-cw-outline" fillMode="flat" aria-label="Retry"></Button>,
    <Button icon="download-light" fillMode="flat" aria-label="Download"></Button>,
];

const defaultOptions = {
    time: 'Thu Feb 08 2018',
    text: 'How can I help you?',
    status: 'Seen',
    toolbarItems: defaultToolbarItems,
    failed: 'Failed to send'
};

export type KendoChatMessageProps = {
    time?: null | string,
    text?: null | string | React.JSX.Element,
    content?: null | React.JSX.Element,
    status?: null | string,
    statusIcon?: string,
    toolbar?: boolean;
    toolbarItems?: React.JSX.Element | React.JSX.Element[];
    typing?: boolean;
    expandable?: boolean;
    expanded?: boolean;
    removed?: boolean;
    files?: React.JSX.Element | React.JSX.Element[];
    failed?: boolean | string,
};

export type KendoChatMessageState = { [K in (typeof states)[number]]?: boolean };

export const ChatMessage = (
    props: KendoChatMessageProps &
        KendoChatMessageState &
        Omit<React.HTMLAttributes<HTMLDivElement>, 'content'>
) => {
    const {
        time = defaultOptions.time,
        text = defaultOptions.text,
        content,
        status = defaultOptions.status,
        statusIcon,
        toolbarItems = defaultOptions.toolbarItems,
        hover,
        selected,
        active,
        focus,
        toolbar,
        typing,
        expandable,
        expanded,
        removed,
        files,
        failed,
        ...other
    } = props;

    const failedText = failed === true ? defaultOptions.failed : failed;

    return (
        <div
            {...other}
            className={classNames(
                CHATMESSAGE_CLASSNAME,
                props.className,
                {
                    'k-message-removed': removed,
                    'k-message-failed':  failed
                }
            )}>
            { failed && <IconButton className="k-resend-button" icon="arrow-rotate-cw-outline" size="xsmall" fillMode="clear" aria-label="Resend" />}
            <ChatBubble
                typing={typing}
                selected={selected}
                hover={hover}
                active={active}
                focus={focus}
                content={
                    <>
                        {content}
                        {text &&
                            <span className="k-chat-bubble-text">
                                {text}
                            </span>
                        }
                    </>
                }
                expandable={expandable}
                expanded={expanded}
                files={files}
            >
            </ChatBubble>
            <div className="k-message-info">
                {status &&
                    <span className="k-message-status">
                        {statusIcon && <Icon icon={statusIcon} size="xsmall" />}
                        {status}
                    </span>
                }

                {time && <time className="k-message-time">{time}</time>}
                { failed && <span className="k-message-failed-content">
                    { failed && <Icon icon="warning-triangle" size="xsmall" />}
                    { failed && <span className="k-message-failed-text">{failedText}</span>}
                </span>
                }
            </div>
            {toolbar &&
                <Toolbar className="k-chat-message-toolbar" fillMode="flat">
                    {toolbarItems}
                </Toolbar>
            }
        </div>
    );
};

ChatMessage.states = states;
ChatMessage.options = options;
ChatMessage.className = CHATMESSAGE_CLASSNAME;
ChatMessage.defaultOptions = defaultOptions;

export default ChatMessage;
