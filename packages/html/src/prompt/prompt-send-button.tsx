import { Button, KendoButtonOptions, KendoButtonState } from '../button';
import { classNames } from "../misc";

const PROMPT_SEND_BUTTON_CLASS = 'k-prompt-send';

export type KendoPromptSendButtonOptions = KendoButtonOptions;

export type KendoPromptSendButtonState = KendoButtonState;

const defaultOptions = {
    generating: false,
};

export type KendoPromptSendButtonProps = KendoButtonOptions & KendoPromptSendButtonState & {
    generating?: boolean;
};

export const PromptSendButton = (
    props: KendoPromptSendButtonProps &
        React.HTMLAttributes<HTMLButtonElement>
) => {
    const {
        generating = defaultOptions.generating,
        ...other
    } = props;

    return (
        <Button
            {...other}
            className={classNames(
                props.className,
                PROMPT_SEND_BUTTON_CLASS,
                {
                    ['k-generating']: generating,
                }
            )}
            icon={generating ? 'stop-sm' : 'paper-plane'}
            active={generating}
            fillMode="flat"
        >
        </Button>
    );
};

PromptSendButton.states = Button.states;
PromptSendButton.options = Button.options;
PromptSendButton.className = PROMPT_SEND_BUTTON_CLASS;
PromptSendButton.defaultOptions = defaultOptions;

export default PromptSendButton;
