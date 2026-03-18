import { Button, KendoButtonOptions, KendoButtonProps, KendoButtonState } from '../button';
import { classNames } from "../misc";

export const SMART_BOX_SEND_BUTTON_CLASSNAME = "k-smart-box-send";

export type KendoSmartBoxSendButtonOptions = KendoButtonOptions;

export type KendoSmartBoxSendButtonState = KendoButtonState;

const defaultOptions = {
    processing: false,
};

export type KendoSmartBoxSendButtonProps = KendoButtonProps & KendoSmartBoxSendButtonOptions & {
    processing?: boolean;
}

export const SmartBoxSendButton = (
    props: KendoSmartBoxSendButtonProps &
        KendoSmartBoxSendButtonState &
        React.HTMLAttributes<HTMLButtonElement>
) => {
    const {
        processing = defaultOptions.processing,
        ...other
    } = props;

    return (
        <Button
            {...other}
            rounded="full"
            size="small"
            icon={processing ? "stop-sm" : "arrow-up-outline"}
            active={processing}
            togglable={processing || undefined}
            selected={processing || undefined}
            aria-label={processing ? "Stop processing" : "Send"}
            className={classNames(
                props.className,
                SMART_BOX_SEND_BUTTON_CLASSNAME,
                {
                    ["k-processing"]: processing,
                }
            )}
        >
        </Button>
    );
};

SmartBoxSendButton.states = Button.states;
SmartBoxSendButton.options = Button.options;
SmartBoxSendButton.className = SMART_BOX_SEND_BUTTON_CLASSNAME;
SmartBoxSendButton.defaultOptions = defaultOptions;

export default SmartBoxSendButton;
