import { classNames, States, Size, Roundness, FillMode } from '../misc';
import { KendoComponent } from '../_types/component';
import { TEXTBOX_FOLDER_NAME, TEXTBOX_MODULE_NAME } from './constants';
import {
    Input,
    InputPrefix,
    InputSuffix,
    InputInnerInput,
    InputClearValue,
    InputLoadingIcon,
    InputValidationIcon,
    InputSeparator
} from '../input';

export const TEXTBOX_CLASSNAME = `k-textbox`;

const states = [
    States.hover,
    States.focus,
    States.valid,
    States.invalid,
    States.required,
    States.disabled,
    States.loading,
    States.readonly
];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.undefined, Roundness.none, Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.undefined, FillMode.solid, FillMode.flat, FillMode.outline ]
};

export type KendoTextboxOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoTextboxProps = KendoTextboxOptions & {
    prefix?: React.JSX.Element;
    suffix?: React.JSX.Element;
    separators?: boolean;
    type?: string;
    value?: string;
    placeholder?: string;
    autocomplete?: string;
    showClearButton?: boolean;
    showValidationIcon?: boolean;
};

export type KendoTextboxState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    showClearButton: true,
    showValidationIcon: true,
    separators: true
};

export const Textbox: KendoComponent<KendoTextboxProps & KendoTextboxState & Omit<React.HTMLAttributes<HTMLSpanElement>, 'prefix'>> = (
    props: KendoTextboxProps &
        KendoTextboxState &
        Omit<React.HTMLAttributes<HTMLSpanElement>, 'prefix'>
) => {
    const {
        size,
        rounded,
        fillMode,
        separators = defaultOptions.separators,
        showClearButton = defaultOptions.showClearButton,
        showValidationIcon = defaultOptions.showValidationIcon,
        prefix,
        suffix,
        type,
        value,
        placeholder,
        hover,
        focus,
        valid,
        invalid,
        required,
        loading,
        disabled,
        readonly,
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
            loading={loading}
            disabled={disabled}
            readonly={readonly}
            className={classNames(props.className, TEXTBOX_CLASSNAME)}
        >
            {prefix &&
            <>
                <InputPrefix>{prefix}</InputPrefix>
                {separators && <InputSeparator/>}
            </>
            }
            <InputInnerInput id={id} placeholder={placeholder} value={value} type={type} disabled={disabled} aria-label={ariaLabel} aria-describedby={ariaDescribedBy} aria-invalid={invalid ? 'true' : undefined} />
            { showValidationIcon && <InputValidationIcon
                valid={valid}
                invalid={invalid}
                loading={loading}
                disabled={disabled} />}
            <InputLoadingIcon
                loading={loading}
                disabled={disabled} />
            { showClearButton && <InputClearValue
                loading={loading}
                disabled={disabled}
                readonly={readonly}
                value={value} />}
            {suffix &&
            <>
                {separators && <InputSeparator/>}
                <InputSuffix>{suffix}</InputSuffix>
            </>
            }
        </Input>
    );
};

Textbox.states = states;
Textbox.options = options;
Textbox.className = TEXTBOX_CLASSNAME;
Textbox.defaultOptions = defaultOptions;
Textbox.moduleName = TEXTBOX_MODULE_NAME;
Textbox.folderName = TEXTBOX_FOLDER_NAME;

/**
 * Accessibility specification for Textbox.
 * @accessibility
 * - Uses semantic `<input>` element (role="textbox" implicit)
 * - Requires accessible name via label, aria-label, or aria-labelledby
 * - Disabled state uses native disabled attribute
 */
Textbox.ariaSpec = {
    selector: '.k-textbox',
    rules: [
        { selector: '.k-textbox > .k-input-inner', attribute: 'role=textbox or nodeName=input', usage: 'Describes the role of the component.' },
        { selector: '.k-textbox > .k-input-inner', attribute: 'label for or aria-label or aria-labelledby (when has accessible name)', usage: 'The input requires an accessible name (provided by consuming app).' },
        { selector: '.k-textbox > .k-input-inner', attribute: 'aria-invalid=true (when invalid)', usage: 'Rendered when the TextBox is in an invalid state.' },
        { selector: '.k-textbox > .k-input-inner', attribute: 'aria-describedby (when has hint or error)', usage: 'Points to the hint or error message for the input.' },
        { selector: '.k-textbox.k-disabled > .k-input-inner', attribute: 'disabled=disabled or aria-disabled=true', usage: 'Rendered when the TextBox is disabled.' },
    ]
};

export default Textbox;
