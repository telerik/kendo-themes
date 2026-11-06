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
import { Button } from '../button';
import { SpinButton, KendoSpinButtonProps } from '../spinbutton';

import { KendoComponent } from '../_types/component';
import { NUMERICTEXTBOX_FOLDER_NAME, NUMERICTEXTBOX_MODULE_NAME } from './constants';
export const NUMERICTEXTBOX_CLASSNAME = `k-numerictextbox`;
const KENDO_DECREASE_LABEL = 'Decrease value';
const KENDO_INCREASE_LABEL = 'Increase value';

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
    horizontal?: boolean;
    split?: boolean;
    increaseState?: KendoSpinButtonProps['increaseState'];
    decreaseState?: KendoSpinButtonProps['decreaseState'];
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
 * @ux {Spin buttons} Up and down arrow buttons increment and decrement the value. With `horizontal`, the buttons are arranged side by side.
 * @ux {Min / Max} Enforces a configurable minimum and maximum value.
 * @ux {Step} The increment step size is configurable.
 * @ux {Format} The value is displayed using the configured number format.
 * @ux {Disabled state} When disabled, the input and spin buttons are non-interactive.
 */
export const NumericTextbox: KendoComponent<KendoNumericTextboxProps & KendoNumericTextboxState & Omit<React.HTMLAttributes<HTMLSpanElement>, 'prefix'>> = (
    props: KendoNumericTextboxProps &
        KendoNumericTextboxState &
        Omit<React.HTMLAttributes<HTMLSpanElement>, 'prefix'>
) => {
    const {
        size,
        rounded,
        fillMode,
        separators = defaultOptions.separators,
        showClearButton = defaultOptions.showClearButton,
        showSpinButton = defaultOptions.showSpinButton,
        horizontal,
        split,
        increaseState,
        decreaseState,
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
            className={classNames(props.className, NUMERICTEXTBOX_CLASSNAME, { 'k-numeric-textbox-horizontal': horizontal, 'k-numeric-textbox-split': split })}
        >
            {split && showSpinButton && (
                <Button
                    className="k-spinner-decrease"
                    icon="minus"
                    size={size}
                    fillMode={fillMode}
                    disabled={disabled}
                    {...decreaseState}
                    aria-label={KENDO_DECREASE_LABEL} />
            )}
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
            {showClearButton && !split && <InputClearValue
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
            {split && showSpinButton && (
                <Button
                    className="k-spinner-increase"
                    icon="plus"
                    size={size}
                    fillMode={fillMode}
                    disabled={disabled}
                    {...increaseState}
                    aria-label={KENDO_INCREASE_LABEL} />
            )}
            {!split && showSpinButton && (
                <SpinButton
                    className="k-input-spinner"
                    size={size}
                    fillMode={fillMode}
                    disabled={disabled}
                    increaseState={increaseState}
                    decreaseState={decreaseState}
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
