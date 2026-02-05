import { classNames, States, FillMode } from '../misc';
import { InputInnerInput } from '../input/input-inner-input';
import { InputInnerTextarea } from '../input/input-inner-textarea';
import { PROMPT_BOX_FOLDER_NAME, PROMPT_BOX_MODULE_NAME } from './constants';
import { IconButton } from '../button';
import { SpeechToTextButton } from '../speech-to-text-button';

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

export const PromptBox = (
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
                    />
                ) : (
                    <InputInnerTextarea
                        value={value}
                        placeholder={placeholder}
                        className={`${PROMPT_BOX_CLASSNAME}-textarea`}
                        rows={lineMode === 'multi' || isExpanded ? 3 : 1}
                    />
                )}
                {endAffix && <div className={`${PROMPT_BOX_CLASSNAME}-affix`}>
                    {endAffix}
                    <SpeechToTextButton size="small" fillMode="flat" />
                    <IconButton
                        icon={generating ? "stop-sm" : "arrow-up-outline"}
                        size="small"
                        rounded="full"
                        active={generating}
                        disabled={!value && !generating}
                        className={classNames({ "k-generating": generating })}
                    />
                </div>}
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

export default PromptBox;
