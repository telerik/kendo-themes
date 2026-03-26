import { Button, KendoButtonOptions, KendoButtonProps, KendoButtonState } from '../button';
import { classNames } from "../misc";

import { KendoComponent } from '../_types/component';
import { SPEECH_TO_TEXT_BUTTON_FOLDER_NAME, SPEECH_TO_TEXT_BUTTON_MODULE_NAME } from './constants';
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
 * @see Button ariaSpec for base button accessibility
 */
SpeechToTextButton.ariaSpec = {
    selector: '.k-speech-to-text-button',
    seeAlso: ['button'],
    rules: [
        { selector: '.k-button.k-speech-to-text-button', attribute: 'role=button or nodeName=button', usage: 'If the used element is not <button>, explicitly set its role to button.' },
        { selector: '.k-button.k-speech-to-text-button', attribute: 'aria-pressed', usage: 'Announces the toggle behaviour of the button.' },
        { selector: '.k-button.k-speech-to-text-button', attribute: 'aria-label', usage: 'Accessible name for the speech-to-text button.' },
    ]
};

export default SpeechToTextButton;
