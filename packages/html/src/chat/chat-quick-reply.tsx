import { classNames, stateClassNames, States } from '../misc';

const CHATQUICKREPLY_CLASSNAME = 'k-quick-reply';

const states = [
    States.focus,
    States.hover
];

const options = {};

const defaultOptions = {};

export type KendoChatQuickReplyProps = {
  text?: string;
};

export type KendoChatQuickReplyState = { [K in (typeof states)[number]]?: boolean };

export const ChatQuickReply = (
    props: KendoChatQuickReplyProps &
        KendoChatQuickReplyState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        focus,
        hover,
        text
    } = props;

    return (
        <span
            className={classNames(
                CHATQUICKREPLY_CLASSNAME,
                stateClassNames(CHATQUICKREPLY_CLASSNAME, {
                    focus,
                    hover
                })
            )}>
            {text}
        </span>
    );
};

ChatQuickReply.states = states;
ChatQuickReply.options = options;
ChatQuickReply.className = CHATQUICKREPLY_CLASSNAME;
ChatQuickReply.defaultOptions = defaultOptions;

export default ChatQuickReply;
