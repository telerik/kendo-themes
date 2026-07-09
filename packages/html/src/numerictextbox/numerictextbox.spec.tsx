import { classNames, States, Size, Roundness, FillMode } from '../misc';
import {
    Input,
    InputInnerInput,
    InputClearValue,
    InputLoadingIcon,
    InputValidationIcon,
    InputSuffix,
    InputPrefix,
    InputSeparator
} from '../input';
import { SpinButton } from '../spinbutton';

import { KendoComponent } from '../_types/component';
import { NUMERICTEXTBOX_FOLDER_NAME, NUMERICTEXTBOX_MODULE_NAME } from './constants';
export const NUMERICTEXTBOX_CLASSNAME = `k-numerictextbox`;

const states = [
    States.hover,
    States.focus,
    States.valid,
    States.invalid,
    States.loading,
    States.required,
    States.disabled,
    States.readonly
];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.undefined, Roundness.none, Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.undefined, FillMode.solid, FillMode.flat, FillMode.outline ]
};

export type KendoNumericTextboxOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoNumericTextboxProps = KendoNumericTextboxOptions & {
    prefix?: React.JSX.Element;
    suffix?: React.JSX.Element;
    separators?: boolean;
    value?: string;
    placeholder?: string;
    showSpinButton?: boolean;
    showClearButton?: boolean;
};

export type KendoNumericTextboxState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    showSpinButton: true,
    showClearButton: true,
    separators: true
};

/**
 * @aria {role="spinbutton"} Announces the spin button capabilities of the NumericTextBox.
 * @aria {aria-label|aria-labelledby} The input requires an accessible name (provided by consuming app).
 * @aria {aria-valuenow} Announces the current value of the component.
 * @aria {aria-valuemin} Announces the minimum allowed value.
 * @aria {aria-valuemax} Announces the maximum allowed value.
 * @aria {aria-invalid="true"} Rendered when the NumericTextBox is in an invalid state.
 * @aria {aria-describedby} Points to the hint or error message.
 * @aria {aria-disabled="true"} Rendered when the NumericTextBox is disabled.
 * @aria {role="button"} Describes the role of the spin buttons.
 * @aria {aria-label} The button element requires discernible text.
 */
export const NumericTextbox: KendoComponent<KendoNumericTextboxProps & KendoNumericTextboxState & React.HTMLAttributes<HTMLSpanElement>> = (
    props: KendoNumericTextboxProps &
        KendoNumericTextboxState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        size,
        rounded,
        fillMode,
        separators = defaultOptions.separators,
        showClearButton = defaultOptions.showClearButton,
        showSpinButton = defaultOptions.showSpinButton,
        prefix,
        suffix,
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
            className={classNames(props.className, NUMERICTEXTBOX_CLASSNAME)}
        >
            {prefix &&
                <>
                    <InputPrefix>{prefix}</InputPrefix>
                    {separators && <InputSeparator/>}
                </>
            }
                        <InputInnerInput id={id} placeholder={placeholder} value={value} role="spinbutton" disabled={disabled} aria-label={ariaLabel} aria-describedby={ariaDescribedBy} aria-invalid={invalid ? 'true' : undefined} />
            <InputValidationIcon
                valid={valid}
                invalid={invalid}
                loading={loading}
                disabled={disabled} />
            <InputLoadingIcon
                loading={loading}
                disabled={disabled} />
            {showClearButton && <InputClearValue
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

NumericTextbox.states = states;
NumericTextbox.options = options;
NumericTextbox.className = NUMERICTEXTBOX_CLASSNAME;
NumericTextbox.defaultOptions = defaultOptions;
NumericTextbox.moduleName = NUMERICTEXTBOX_MODULE_NAME;
NumericTextbox.folderName = NUMERICTEXTBOX_FOLDER_NAME;

/**
 * @keyboard {ArrowUp} Increases the value of the focused NumericTextBox with the step.
 * @keyboard {ArrowDown} Decreases the value of the focused NumericTextBox with the step.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/ WAI-ARIA Authoring Practices: Spinbutton Pattern
 */

export default NumericTextbox;
