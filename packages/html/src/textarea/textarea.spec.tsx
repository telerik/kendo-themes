import { classNames, States, Size, Roundness, FillMode } from '../misc';
import { KendoComponent } from '../_types/component';
import { TEXTAREA_FOLDER_NAME, TEXTAREA_MODULE_NAME } from './constants';
import {
    Input,
    InputInnerTextarea,
    InputPrefix,
    InputSeparator,
    InputSuffix,
} from '../input';

export const TEXTAREA_CLASSNAME = `k-textarea`;

const states = [
    States.hover,
    States.focus,
    States.valid,
    States.invalid,
    States.required,
    States.disabled
];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.undefined, Roundness.none, Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.undefined, FillMode.solid, FillMode.flat, FillMode.outline ]
};

export type KendoTextareaOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
    resize?: "x" | "y" | "both" | "none";
};

export type KendoTextareaProps = KendoTextareaOptions & {
    prefix?: React.JSX.Element;
    suffix?: React.JSX.Element;
    prefixSeparator?: boolean;
    suffixSeparator?: boolean;
    rows?: number;
    value?: string;
    placeholder?: string;
    flow?: "vertical" | "horizontal";
    affixesOrientation?: "vertical" | "horizontal";
};

export type KendoTextareaState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    flow: "vertical",
    affixesOrientation: "horizontal",
    resize: "both",
    prefixSeparator: true,
    suffixSeparator: true
} as const;

export const Textarea: KendoComponent<KendoTextareaProps & KendoTextareaState & Omit<React.HTMLAttributes<HTMLSpanElement>, 'prefix'>> = (
    props: KendoTextareaProps &
        KendoTextareaState &
       Omit<React.HTMLAttributes<HTMLSpanElement>, 'prefix'>
) => {
    const {
        size,
        rounded,
        fillMode,
        prefixSeparator = defaultOptions.prefixSeparator,
        suffixSeparator = defaultOptions.prefixSeparator,
        affixesOrientation = defaultOptions.affixesOrientation,
        flow = defaultOptions.flow,
        resize = defaultOptions.resize,
        prefix,
        suffix,
        rows,
        value,
        placeholder,
        hover,
        focus,
        valid,
        invalid,
        required,
        disabled,
        id,
        'aria-label': ariaLabel,
        'aria-describedby': ariaDescribedBy,
        ...other
    } = props;


    return (
        <Input
            {...other}
            size={size}
            rounded={rounded}
            fillMode={fillMode}
            hover={hover}
            focus={focus}
            valid={valid}
            invalid={invalid}
            required={required}
            disabled={disabled}
            className={
                classNames(
                    props.className,
                    TEXTAREA_CLASSNAME,
                    {
                        [`!k-flex-col`]: flow === "vertical",
                        [`!k-flex-row`]: flow === "horizontal"
                    }
                )
            }
        >
            {prefix &&
            <>
                <InputPrefix
                    className={classNames({
                        ["!k-align-items-start"]: flow === affixesOrientation
                    })}
                    direction={affixesOrientation} >
                    {prefix}
                </InputPrefix>
                {prefixSeparator && <InputSeparator direction={flow === "horizontal" ? "vertical" : "horizontal"}/>}
            </>
            }
            <InputInnerTextarea
                className={classNames(
                    "!k-overflow-auto",
                    {
                        ["!k-flex-none"]: flow === "vertical",
                        ["k-resize-x"]: resize === "x",
                        ["k-resize-y"]: resize === "y",
                        ["k-resize"]: resize === "both",
                        ["k-resize-none"]: resize === "none"
                    }
                )}
                value={value}
                placeholder={placeholder}
                rows={rows}
                disabled={disabled}
                id={id}
                aria-label={ariaLabel}
                aria-describedby={ariaDescribedBy}
                aria-invalid={invalid ? 'true' : undefined}
            />
            {suffix &&
            <>
                {suffixSeparator && <InputSeparator direction={flow === "horizontal" ? "vertical" : "horizontal"}/>}
                <InputSuffix
                    className={classNames({
                        ["!k-align-items-start"]: flow === affixesOrientation
                    })}
                    direction={affixesOrientation}>
                    {suffix}
                </InputSuffix>
            </>
            }
        </Input>
    );
};

Textarea.states = states;
Textarea.options = options;
Textarea.className = TEXTAREA_CLASSNAME;
Textarea.defaultOptions = defaultOptions;
Textarea.moduleName = TEXTAREA_MODULE_NAME;
Textarea.folderName = TEXTAREA_FOLDER_NAME;

/**
 * Accessibility specification for Textarea.
 * @accessibility
 * - Uses semantic `<textarea>` element (role="textbox" implicit, multiline)
 * - Requires accessible name via label, aria-label, or aria-labelledby
 * - Disabled state uses native disabled attribute
 */
Textarea.ariaSpec = {
    selector: '.k-textarea',
    rules: [
        { selector: '.k-textarea > .k-input-inner', attribute: 'role=textbox or nodeName=textarea', usage: 'Describes the role of the component.' },
        { selector: '.k-textarea > .k-input-inner', attribute: 'label for or aria-label or aria-labelledby (when has accessible name)', usage: 'The textarea requires an accessible name (provided by consuming app).' },
        { selector: '.k-textarea > .k-input-inner', attribute: 'aria-multiline=true (when role=textbox)', usage: 'Required on role=textbox to indicate multi-line behavior. Implicit on native <textarea>, so not needed there.' },
        { selector: '.k-textarea > .k-input-inner', attribute: 'aria-invalid=true (when invalid)', usage: 'Rendered only when the TextArea is in a form and announces the invalid state.' },
        { selector: '.k-textarea > .k-input-inner', attribute: 'aria-describedby (when has hint or error)', usage: 'Points to the hint or error message for the textarea.' },
        { selector: '.k-textarea.k-disabled > .k-input-inner', attribute: 'disabled=disabled or aria-disabled=true', usage: 'Rendered only when the TextArea is disabled.' },
    ]
};

export default Textarea;
