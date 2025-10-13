import { classNames } from "../misc";
import { Icon } from '../icon';

export const CHATEVENT_CLASSNAME = `k-chat-event`;

const defaultOptions = {
    icon: "trash",
    text: "You deleted Chat history."
};

export type KendoChatEvent = {
    icon?: string;
    text?: string;
};

export const ChatEvent = (
    props: KendoChatEvent & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        icon = defaultOptions.icon,
        text = defaultOptions.text,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                CHATEVENT_CLASSNAME
            )}
        >
            {icon && <Icon className="k-chat-event-icon" icon={icon} size="xsmall" /> }
            {text && <span className="k-chat-event-text">{text}</span>}
        </div>
    )
};

ChatEvent.className = CHATEVENT_CLASSNAME;
ChatEvent.defaultOptions = defaultOptions;

export default ChatEvent;
