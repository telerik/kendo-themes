import { classNames } from '../misc';
import { Textbox } from '../textbox';
import { Textarea } from '../textarea';
import { IconButton } from '../button';


export const PROMPT_INPUT_CLASSNAME = `k-prompt-input`;

const options = {
    lineMode: [ 'single', 'multi', 'auto' ]
};

export type KendoPromptInputOptions = {
    lineMode?: (typeof options.lineMode)[number];
    isExpanded?: boolean;
    tools?: React.JSX.Element | React.JSX.Element[];
};

export type KendoPromptInputProps = KendoPromptInputOptions & {
};

const defaultOptions = {
    lineMode: 'auto',
} as const;

export const PromptInput = (
    props: KendoPromptInputProps & Omit<React.HTMLAttributes<HTMLSpanElement>, 'prefix'>
) => {
    const {
        lineMode = defaultOptions.lineMode,
        isExpanded,
        ...other
    } = props;

    // Single line mode - render Textbox
    if (lineMode === 'single') {
        return (
            <Textbox
                {...other}
                className={classNames(
                    props.className,
                    PROMPT_INPUT_CLASSNAME,
                    `${PROMPT_INPUT_CLASSNAME}-single`,

                )}
                separators={false}
                prefix={
                    <>
                        <IconButton icon="search" fillMode="clear" />
                    </>
                }
                suffix={
                    <>
                        <IconButton icon="arrow-up" fillMode="solid" rounded="full" />
                    </>
                }
            />
        );
    }

    // Multiline mode - render Textarea with vertical flow
    if (lineMode === 'multi') {
        return (
            <Textarea
                {...other}
                flow="vertical"
                affixesOrientation="horizontal"
                resize='none'
                rows={3}
                prefixSeparator={false}
                suffixSeparator={false}
                className={classNames(
                    props.className,
                    PROMPT_INPUT_CLASSNAME,
                    `${PROMPT_INPUT_CLASSNAME}-multiline`,

                )}
                suffix={
                    <>
                        <IconButton icon="search" fillMode="clear" />
                        <span className="k-spacer" />
                        <IconButton icon="arrow-up" fillMode="solid" rounded="full" />
                    </>
                }
            />
        );
    }

    // Auto mode expanded
    if (lineMode === 'auto' && isExpanded) {
        return (
            <Textarea
                {...other}
                flow="vertical"
                affixesOrientation="horizontal"
                resize='none'
                rows={3}
                prefixSeparator={false}
                suffixSeparator={false}
                className={classNames(
                    props.className,
                    PROMPT_INPUT_CLASSNAME,
                    `${PROMPT_INPUT_CLASSNAME}-multiline`,
                )}
                suffix={
                    <>
                        <IconButton icon="search" fillMode="clear" />
                        <span className="k-spacer" />
                        <IconButton icon="arrow-up" fillMode="solid" rounded="full" />
                    </>
                }
            />
        );
    }

    // Auto mode collapsed
    if (lineMode === 'auto') {
        return (
            <Textarea
                {...other}
                flow="horizontal"
                affixesOrientation="horizontal"
                resize='none'
                rows={1}
                prefixSeparator={false}
                suffixSeparator={false}
                className={classNames(
                    props.className,
                    PROMPT_INPUT_CLASSNAME,
                    `${PROMPT_INPUT_CLASSNAME}-single`,
                )}
                prefix={
                    <>
                        <IconButton icon="search" fillMode="clear" />
                    </>
                }
                suffix={
                    <>
                        <IconButton icon="arrow-up" fillMode="solid" rounded="full" />
                    </>
                }
            />
        );
    }
};

PromptInput.options = options;
PromptInput.className = PROMPT_INPUT_CLASSNAME;
PromptInput.defaultOptions = defaultOptions;

export default PromptInput;
