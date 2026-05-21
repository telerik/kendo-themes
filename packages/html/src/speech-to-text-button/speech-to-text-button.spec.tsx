import { Button, KendoButtonOptions, KendoButtonProps, KendoButtonState } from '../button';
import { classNames } from "../misc";

import { KendoComponent } from '../_types/component';
import { SPEECH_TO_TEXT_BUTTON_FOLDER_NAME, SPEECH_TO_TEXT_BUTTON_MODULE_NAME } from './constants';
import a11ySpec from './behavior/accessibility.json';
export const SPEECH_TO_TEXT_BUTTON_CLASSNAME = "k-speech-to-text-button";

export type KendoSpeechToTextButtonOptions = KendoButtonOptions;

export type KendoSpeechToTextButtonState = KendoButtonState;

const defaultOptions = {
    icon: "microphone",
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
            icon={listening ? "stop" : icon}
            className={classNames(
                props.className,
                SPEECH_TO_TEXT_BUTTON_CLASSNAME,
                {
                    ["k-listening"]: listening,
                }
            )}
            aria-pressed={listening ? 'true' : 'false'}
            aria-label={listening ? 'Stop listening' : 'Start listening'}
        >
        </Button>
    );
};

SpeechToTextButton.states = Button.states;
SpeechToTextButton.options = Button.options;
SpeechToTextButton.className = SPEECH_TO_TEXT_BUTTON_CLASSNAME;
SpeechToTextButton.defaultOptions = defaultOptions;
SpeechToTextButton.moduleName = SPEECH_TO_TEXT_BUTTON_MODULE_NAME;
SpeechToTextButton.folderName = SPEECH_TO_TEXT_BUTTON_FOLDER_NAME;

SpeechToTextButton.ariaSpec = a11ySpec.ariaSpec;

export default SpeechToTextButton;
