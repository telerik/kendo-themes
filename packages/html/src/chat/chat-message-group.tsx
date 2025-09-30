import { classNames, stateClassNames, States } from '../misc';
import { Avatar } from '../avatar';

export const CHATMESSAGEGROUP_CLASSNAME = 'k-message-group';

const states = [
    States.selected
];

const options = {};

const defaultOptions = {
    author: "Bruv",
    avatar: "/packages/html/assets/avatar.jpg",
    type: "receiver"
};

export type KendoChatMessageGroupProps = {
    type?: "receiver" | "sender";
    author?: null | string;
    avatar?: null | string;
    status?: null | boolean;
    fullWidth?: boolean;
};

export type KendoChatMessageGroupState = { [K in (typeof states)[number]]?: boolean };

export const ChatMessageGroup = (
    props: KendoChatMessageGroupProps &
        KendoChatMessageGroupState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        type = defaultOptions.type,
        author = defaultOptions.author,
        avatar = defaultOptions.avatar,
        status,
        selected,
        fullWidth,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                CHATMESSAGEGROUP_CLASSNAME,
                props.className,
                stateClassNames( CHATMESSAGEGROUP_CLASSNAME, { selected } ),
                {
                    [`${CHATMESSAGEGROUP_CLASSNAME}-${type}`]: type,
                    'k-no-avatar': !avatar,
                    [`${CHATMESSAGEGROUP_CLASSNAME}-full-width`]: fullWidth
                }
            )}>
            { avatar && !status && <Avatar type="image"><img src={avatar} /></Avatar> }
            { status && avatar &&
                <div className="k-chat-user-status-wrapper">
                    <Avatar type="image"><img src={avatar} /></Avatar>
                    <div className="k-chat-user-status"></div>
                </div>
            }
            <div className="k-message-group-content">
                { author && <span className="k-message-author">{author}</span> }
                {props.children}
            </div>
        </div>
    );
};

ChatMessageGroup.states = states;
ChatMessageGroup.options = options;
ChatMessageGroup.className = CHATMESSAGEGROUP_CLASSNAME;
ChatMessageGroup.defaultOptions = defaultOptions;

export default ChatMessageGroup;
