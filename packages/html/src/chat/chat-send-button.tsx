import { Button, KendoButtonOptions, KendoButtonProps, KendoButtonState } from '../button';
import { classNames } from "../misc";

export const CHAT_SEND_BUTTON_CLASSNAME = "k-chat-send";

export type KendoChatSendButtonOptions = KendoButtonOptions;

export type KendoChatSendButtonState = KendoButtonState;

const defaultOptions = {
    generating: false,
};

export type KendoChatSendButtonProps = KendoButtonProps & KendoChatSendButtonOptions & {
    generating?: boolean;
}

export const ChatSendButton = (
    props: KendoChatSendButtonProps &
        KendoChatSendButtonState &
        React.HTMLAttributes<HTMLButtonElement>
) => {
    const {
        generating = defaultOptions.generating,
        ...other
    } = props;

    return (
        <Button
            {...other}
            fillMode="solid"
            themeColor="primary"
            rounded="full"
            icon={generating ? "stop-sm" : "paper-plane"}
            active={generating}
            className={classNames(
                props.className,
                CHAT_SEND_BUTTON_CLASSNAME,
                {
                    ["k-generating"]: generating,
                }
            )}
        >
        </Button>
    );
};

ChatSendButton.states = Button.states;
ChatSendButton.options = Button.options;
ChatSendButton.className = CHAT_SEND_BUTTON_CLASSNAME;
ChatSendButton.defaultOptions = defaultOptions;

export default ChatSendButton;
