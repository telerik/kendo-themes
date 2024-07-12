import { classNames } from '../misc';

const CHATQUICKREPLIES_CLASSNAME = 'k-quick-replies';

const states = [];

const options = {};

const defaultOptions = {};

export const ChatQuickReplies = (
    props: React.HTMLAttributes<HTMLDivElement>
) => {
    const { ...other } = props;

    return (
        <div
            {...other}
            className={classNames(
                CHATQUICKREPLIES_CLASSNAME,
                props.className
            )}>
            {props.children}
        </div>
    );
};

ChatQuickReplies.states = states;
ChatQuickReplies.options = options;
ChatQuickReplies.className = CHATQUICKREPLIES_CLASSNAME;
ChatQuickReplies.defaultOptions = defaultOptions;

export default ChatQuickReplies;
