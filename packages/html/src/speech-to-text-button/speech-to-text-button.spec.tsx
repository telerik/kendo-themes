import { Button, KendoButtonOptions, KendoButtonProps, KendoButtonState } from '../button';
import { classNames } from "../misc";

import { KendoComponent } from '../_types/component';
import { SPEECH_TO_TEXT_BUTTON_FOLDER_NAME, SPEECH_TO_TEXT_BUTTON_MODULE_NAME } from './constants';
export const SPEECH_TO_TEXT_BUTTON_CLASSNAME = "k-speech-to-text-button";

export type KendoSpeechToTextButtonOptions = KendoButtonOptions;

export type KendoSpeechToTextButtonState = KendoButtonState;

const defaultOptions = {
    icon: "microphone",
};

export type KendoSpeechToTextButtonProps = KendoButtonProps & KendoSpeechToTextButtonOptions &  {
    listening?: boolean;
}

/**
 * @aria {role="button"} If the used element is not <button>, explicitly set its role to button.
 * @aria {aria-pressed} Announces the toggle behaviour of the button.
 * @aria {aria-label} Accessible name for the speech-to-text button.
 * @ux {Recording} Pressing the button starts audio recording.
 * @ux {Stop} Pressing the button again or after a silence timeout stops recording.
 * @ux {Transcription} Converts the recorded audio into text.
 * @ux {Status} Visual feedback indicates whether the button is idle, recording, or processing.
 */
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

/**
 * @keyboard {Enter or Space} Triggers a click action on the Button. Toggles the active listening state of the Button.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/button/ WAI-ARIA Authoring Practices: Button Pattern
 */

export default SpeechToTextButton;
