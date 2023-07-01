import { classNames } from '../misc';

const CHATQUICKREPLY_CLASSNAME = 'k-quick-replies';

const states = [];

const options = {};

const defaultOptions = {
    actions: [ 'Quick', 'Reply', 'Another quick', 'Reply with different length' ]
};


export type KendoChatQuickRepliesOptions = {
    actions?: Array<string>;
};

export const ChatQuickReply = (
    props: KendoChatQuickRepliesOptions &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        actions = defaultOptions.actions,
        ...other
    } = props;

    const children: JSX.Element[] = [];

    if (actions) {
        actions.map((action, index) => {
            children.push(
                <span className="k-quick-reply" key={index}>{action}</span>
            );
        });
    }

    return (
        <div
            {...other}
            className={classNames(
                CHATQUICKREPLY_CLASSNAME,
                props.className
            )}>
            {children}
        </div>
    );
};

ChatQuickReply.states = states;
ChatQuickReply.options = options;
ChatQuickReply.className = CHATQUICKREPLY_CLASSNAME;
ChatQuickReply.defaultOptions = defaultOptions;

export default ChatQuickReply;
