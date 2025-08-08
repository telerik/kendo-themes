import { Button } from '../button';
import { Icon } from '../icon';
import { classNames } from '../misc';

export const CHATMESSAGEREFERENCE_CLASSNAME = 'k-message-reference';

const options = {};

const defaultOptions = {
    type: "receiver"
};

export type KendoChatMessageReferenceProps = {
    content?: string | React.JSX.Element;
    closeable?: boolean;
    pinned?: boolean;
    type?: "receiver" | "sender";
};

export const ChatMessageReference = (
    props: KendoChatMessageReferenceProps &
        Omit<React.HTMLAttributes<HTMLDivElement>, 'content'>
) => {
    const {
        content,
        closeable,
        pinned,
        type = defaultOptions.type,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                CHATMESSAGEREFERENCE_CLASSNAME,
                props.className,
                {
                    [`${CHATMESSAGEREFERENCE_CLASSNAME}-${type}`]: type,
                    ['k-message-pinned']: pinned,
                }
            )}>
            {pinned && <Icon icon='pin' size="xlarge" />}
            <div className="k-message-reference-content">{content}</div>
            {closeable &&
                <>
                    <span className="k-spacer"></span>
                    <Button icon="x" fillMode="flat"></Button>
                </>}
        </div>
    );
};

ChatMessageReference.options = options;
ChatMessageReference.className = CHATMESSAGEREFERENCE_CLASSNAME;
ChatMessageReference.defaultOptions = defaultOptions;

export default ChatMessageReference;
