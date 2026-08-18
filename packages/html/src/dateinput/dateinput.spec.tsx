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

/**
 * @aria {role="textbox"} The element should be an input or have role="textbox".
 * @aria {aria-label|aria-labelledby} The input requires an accessible name (provided by consuming app).
 * @aria {tabindex="0"} The element should be focusable.
 * @aria {aria-invalid="true"} Rendered when the DateInput is in an invalid state.
 * @aria {aria-describedby} Points to the hint or error message.
 * @aria {aria-readonly="true"} Rendered when the DateInput is readonly.
 * @aria {aria-disabled="true"} Rendered when the DateInput is disabled.
 * @ux {Segment editing} Each date part (day, month, year) is focused and edited independently.
 * @ux {Spin} Arrow keys increment or decrement the focused date segment.
 * @ux {Format placeholder} The expected date format is shown as placeholder text.
 * @ux {Validation} Invalid values trigger an error visual state.
 * @ux {Disabled state} When disabled, the input is non-interactive.
 */
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
 * @keyboard {ArrowUp} Increases the value of the date segment that is highlighted.
 * @keyboard {ArrowDown} Decreases the value of the date segment that is highlighted.
 * @keyboard {ArrowLeft} Moves to previous date segment in the input.
 * @keyboard {ArrowRight} Moves to next date segment in the input.
 * @keyboard {Backspace or Delete} Deletes value of the date segment.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/example-index/dialog-modal/datepicker-dialog.html ARIA practices Date Picker Dialog Example
 */

export default DateInput;
