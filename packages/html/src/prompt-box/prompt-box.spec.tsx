import { classNames, States, FillMode } from '../misc';
import { InputInnerInput } from '../input/input-inner-input';
import { InputInnerTextarea } from '../input/input-inner-textarea';
import { PROMPT_BOX_FOLDER_NAME, PROMPT_BOX_MODULE_NAME } from './constants';
import { IconButton } from '../button';
import { SpeechToTextButton } from '../speech-to-text-button';
import { KendoComponent } from '../_types/component';
export const PROMPT_BOX_CLASSNAME = `k-prompt-box`;

const states = [
    States.hover,
    States.focus,
    States.disabled
];

const options = {
    fillMode: [ FillMode.undefined, FillMode.solid, FillMode.flat, FillMode.outline ]
};

export type KendoPromptBoxOptions = {
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoPromptBoxProps = KendoPromptBoxOptions & {
    lineMode?: 'single' | 'multi' | 'auto';
    startAffix?: React.JSX.Element | React.JSX.Element[];
    endAffix?: React.JSX.Element | React.JSX.Element[];
    header?: React.JSX.Element | React.JSX.Element[];
    isExpanded?: boolean;
    value?: string;
    placeholder?: string;
    generating?: boolean;
};

export type KendoPromptBoxState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    lineMode: 'auto',
    isExpanded: false,
} as const;

/**
 * @aria {nodeName="input"} Ensures the input field has the proper textbox role.
 * @aria {aria-label} Provides an accessible label for the single-line input.
 * @aria {nodeName="textarea"} Ensures the textarea has the proper textbox role.
 * @aria {aria-label} Provides an accessible label for the textarea.
 * @aria {aria-multiline="true"} Indicates the textarea supports multiple lines of text.
 * @aria {nodeName="textarea"} Ensures the auto-mode textarea has the proper textbox role.
 * @aria {aria-label} Provides an accessible label for the auto-mode textarea.
 * @aria {aria-multiline="true"} Indicates the auto-mode textarea supports multiple lines of text.
 * @aria {aria-label} The send/stop button is labelled to indicate its current action.
 * @aria {aria-live="polite"} Announces the change in status of the send/stop button.
 */
export const PromptBox: KendoComponent<KendoPromptBoxProps & KendoPromptBoxState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoPromptBoxProps & KendoPromptBoxState & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        fillMode,
        lineMode = defaultOptions.lineMode,
        startAffix,
        endAffix,
        header,
        isExpanded = defaultOptions.isExpanded,
        className,
        children,
        value,
        placeholder,
        generating,
        hover,
        focus,
        disabled,
        ...other
    } = props;

    const isMultiline = lineMode === 'multi' || (lineMode === 'auto' && isExpanded);

    return (
        <div
            {...other}
            className={classNames(
                className,
                'k-input',
                PROMPT_BOX_CLASSNAME,
                {
                    [`${PROMPT_BOX_CLASSNAME}-singleline`]: lineMode === 'single',
                    [`${PROMPT_BOX_CLASSNAME}-multiline`]: isMultiline,
                    [`k-input-${fillMode}`]: fillMode,
                    'k-hover': hover,
                    'k-focus': focus,
                    'k-disabled': disabled
                }
            )}
        >
            {header && <div className={`${PROMPT_BOX_CLASSNAME}-header`}>{header}</div>}
            <div className={`${PROMPT_BOX_CLASSNAME}-content`}>
                {startAffix && <div className={`${PROMPT_BOX_CLASSNAME}-affix`}>{startAffix}</div>}
                {lineMode === 'single' ? (
                    <InputInnerInput
                        value={value}
                        placeholder={placeholder}
                        className={`${PROMPT_BOX_CLASSNAME}-input`}
                        type="text"
                        aria-label="Prompt input"
                    />
                ) : (
                    <InputInnerTextarea
                        value={value}
                        placeholder={placeholder}
                        className={`${PROMPT_BOX_CLASSNAME}-textarea`}
                        rows={lineMode === 'multi' || isExpanded ? 3 : 1}
                        aria-label="Prompt input"
                        aria-multiline="true"
                    />
                )}
                <div className={`${PROMPT_BOX_CLASSNAME}-affix`}>
                    {endAffix}
                    <SpeechToTextButton size="small" fillMode="flat" rounded="full"/>
                    <IconButton
                        icon={generating ? "stop" : "arrow-up"}
                        size="small"
                        rounded="full"
                        active={generating}
                        disabled={!value && !generating}
                        className={classNames({ "k-generating": generating })}
                        aria-label={generating ? "Stop generating" : "Send prompt"}
                        aria-live="polite"
                    />
                </div>
            </div>
            {children}
        </div>
    );
};

PromptBox.states = states;
PromptBox.options = options;
PromptBox.className = PROMPT_BOX_CLASSNAME;
PromptBox.defaultOptions = defaultOptions;
PromptBox.moduleName = PROMPT_BOX_MODULE_NAME;
PromptBox.folderName = PROMPT_BOX_FOLDER_NAME;

/**
 * @keyboard {Enter} Submits the prompt.
 * @keyboard {Shift + Enter} Inserts a new line in multi-line and auto modes
 * @keyboard {Tab} Moves focus to the next focusable element
 * @keyboard {Shift + Tab} Moves focus to the previous focusable element
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/ ARIA Authoring Practices Guide
 */

export default PromptBox;
