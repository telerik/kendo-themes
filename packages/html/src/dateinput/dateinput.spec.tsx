import { classNames, States, Size, Roundness, FillMode } from '../misc';
import {
    Input,
    InputClearValue,
    InputInnerInput,
    InputLoadingIcon,
    InputValidationIcon
} from '../input';
import { SpinButton } from '../spinbutton';

import { KendoComponent } from '../_types/component';
import { DATEINPUT_FOLDER_NAME, DATEINPUT_MODULE_NAME } from './constants';
export const DATEINPUT_CLASSNAME = `k-dateinput`;

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

export type KendoDateInputOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoDateInputProps = KendoDateInputOptions & {
    value?: string;
    placeholder?: string;
    showSpinButton?: boolean;
    showClearButton?: boolean;
};

export type KendoDateInputState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
};

export const DateInput: KendoComponent<KendoDateInputProps & KendoDateInputState & React.HTMLAttributes<HTMLSpanElement>> = (
    props: KendoDateInputProps &
        KendoDateInputState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        size,
        rounded,
        fillMode,
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
        showClearButton,
        showSpinButton,
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
            className={classNames(props.className, DATEINPUT_CLASSNAME)}
        >
            <InputInnerInput id={id} placeholder={placeholder} value={value} disabled={disabled} aria-label={ariaLabel} aria-describedby={ariaDescribedBy} aria-invalid={invalid ? 'true' : undefined} />
            <InputValidationIcon
                valid={valid}
                invalid={invalid}
                loading={loading}
                disabled={disabled} />
            <InputLoadingIcon
                loading={loading}
                disabled={disabled} />
            { showClearButton && <InputClearValue
                loading={loading}
                disabled={disabled}
                readonly={readonly}
                value={value} />}
            {showSpinButton && (
                <SpinButton
                    className="k-input-spinner"
                    size={size}
                    fillMode={fillMode}
                    disabled={disabled}
                />
            )}
        </Input>
    );
};

DateInput.states = states;
DateInput.options = options;
DateInput.className = DATEINPUT_CLASSNAME;
DateInput.defaultOptions = defaultOptions;
DateInput.moduleName = DATEINPUT_MODULE_NAME;
DateInput.folderName = DATEINPUT_FOLDER_NAME;

/**
 * Accessibility specification for DateInput.
 * @accessibility
 * - Uses semantic `<input>` element (role="textbox" implicit)
 * - Requires accessible name via label, aria-label, or aria-labelledby
 * - Disabled state uses native disabled attribute
 */
DateInput.ariaSpec = {
    selector: '.k-dateinput',
    rules: [
        { selector: '.k-dateinput > .k-input-inner', attribute: 'role=textbox or nodeName=input', usage: 'The element should be an input or have role="textbox".' },
        { selector: '.k-dateinput > .k-input-inner', attribute: 'label for or aria-label or aria-labelledby (when has accessible name)', usage: 'The input requires an accessible name (provided by consuming app).' },
        { selector: '.k-dateinput > .k-input-inner', attribute: 'tabindex=0', usage: 'The element should be focusable.' },
        { selector: '.k-dateinput > .k-input-inner', attribute: 'aria-invalid=true (when invalid)', usage: 'Rendered when the DateInput is in an invalid state.' },
        { selector: '.k-dateinput > .k-input-inner', attribute: 'aria-describedby (when has hint or error)', usage: 'Points to the hint or error message.' },
        { selector: '.k-dateinput > .k-input-inner', attribute: 'readonly=readonly or aria-readonly=true (when readonly)', usage: 'Rendered when the DateInput is readonly.' },
        { selector: '.k-dateinput.k-disabled > .k-input-inner', attribute: 'disabled=disabled or aria-disabled=true', usage: 'Rendered when the DateInput is disabled.' },
    ]
};

export default DateInput;
