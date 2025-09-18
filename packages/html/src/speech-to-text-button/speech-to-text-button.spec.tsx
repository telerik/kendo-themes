import { Button, KendoButtonOptions, KendoButtonProps, KendoButtonState } from '../button';
import { classNames } from "../misc";

import { KendoComponent } from '../_types/component';
export const SPEECH_TO_TEXT_BUTTON_CLASSNAME = "k-speech-to-text-button";

export type KendoSpeechToTextButtonOptions = KendoButtonOptions;

export type KendoSpeechToTextButtonState = KendoButtonState;

const defaultOptions = {
    icon: "microphone-outline",
};

export type KendoSpeechToTextButtonProps = KendoButtonProps & KendoSpeechToTextButtonOptions &  {
    listening?: boolean;
}

export const SpeechToTextButton: KendoComponent<KendoSpeechToTextButtonProps & KendoSpeechToTextButtonState & React.HTMLAttributes<HTMLButtonElement>> = (
    props: KendoSpeechToTextButtonProps &
        KendoSpeechToTextButtonState &
        React.HTMLAttributes<HTMLButtonElement>
) => {
    const {
        listening = false,
        icon = defaultOptions.icon,
        ...other
    } = props;

    return (
        <Button
            {...other}
            icon={listening ? "stop-sm" : icon}
            className={classNames(
                props.className,
                SPEECH_TO_TEXT_BUTTON_CLASSNAME,
                {
                    ["k-listening"]: listening,
                }
            )}
        >
        </Button>
    );
};

SpeechToTextButton.states = Button.states;
SpeechToTextButton.options = Button.options;
SpeechToTextButton.className = SPEECH_TO_TEXT_BUTTON_CLASSNAME;
SpeechToTextButton.defaultOptions = defaultOptions;
SpeechToTextButton.moduleName = "speech-to-text-button";
SpeechToTextButton.folderName = SpeechToTextButton.moduleName;

export default SpeechToTextButton;
