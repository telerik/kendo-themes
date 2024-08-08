import { classNames, stateClassNames, States } from '../misc';

export const CHATMESSAGE_CLASSNAME = 'k-message';

const states = [
    States.selected
];

const options = {};

const defaultOptions = {
    time: 'Thu Feb 08 2018',
    text: 'How can I help you?',
    status: 'Seen'
};

export type KendoChatMessageProps = {
    time?: string,
    text?: string,
    status?: string
};

export type KendoChatMessageState = { [K in (typeof states)[number]]?: boolean };

export const ChatMessage = (
    props: KendoChatMessageProps &
        KendoChatMessageState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        time = defaultOptions.time,
        text = defaultOptions.text,
        status = defaultOptions.status,
        selected,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                CHATMESSAGE_CLASSNAME,
                props.className,
                stateClassNames(CHATMESSAGE_CLASSNAME, { selected })
            )}>
            <time className="k-message-time">{time}</time>
            <div className="k-chat-bubble">{text}</div>
            <span className="k-message-status">{status}</span>
        </div>
    );
};

ChatMessage.states = states;
ChatMessage.options = options;
ChatMessage.className = CHATMESSAGE_CLASSNAME;
ChatMessage.defaultOptions = defaultOptions;

export default ChatMessage;
