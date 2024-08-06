import { classNames, stateClassNames, States } from '../misc';
import { Avatar } from '../avatar';

export const CHATMESSAGEGROUP_CLASSNAME = 'k-message-group';

const states = [
    States.selected
];

const options = {};

export type KendoChatMessageGroupProps = {
    alt?: boolean;
    author?: string;
    avatar?: null | string;
};

export type KendoChatMessageGroupState = { [K in (typeof states)[number]]?: boolean };

export const ChatMessageGroup = (
    props: KendoChatMessageGroupProps &
        KendoChatMessageGroupState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        author = "Bruv",
        avatar = "/packages/html/assets/avatar.jpg",
        alt = false,
        selected,
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
                    'k-alt': alt,
                    'k-no-avatar': !avatar
                }
            )}>
            { author && <p className="k-author">{author}</p> }
            { avatar && <Avatar type="image"><img src={avatar} /></Avatar> }
            {props.children}
        </div>
    );
};

ChatMessageGroup.states = states;
ChatMessageGroup.options = options;
ChatMessageGroup.className = CHATMESSAGEGROUP_CLASSNAME;

export default ChatMessageGroup;
