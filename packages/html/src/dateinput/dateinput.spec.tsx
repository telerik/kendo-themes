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
    size: [ Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.solid, FillMode.flat, FillMode.outline ]
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
    size: Input.defaultOptions.size,
    rounded: Input.defaultOptions.rounded,
    fillMode: Input.defaultOptions.fillMode
};

export const DateInput: KendoComponent<KendoDateInputProps & KendoDateInputState & React.HTMLAttributes<HTMLSpanElement>> = (
    props: KendoDateInputProps &
        KendoDateInputState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        size = defaultOptions.size,
        rounded = defaultOptions.rounded,
        fillMode = defaultOptions.fillMode,
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
            <InputInnerInput placeholder={placeholder} value={value} />
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
                />
            )}
        </Input>
    );
};

DateInput.states = states;
DateInput.options = options;
DateInput.className = DATEINPUT_CLASSNAME;
DateInput.defaultOptions = defaultOptions;
DateInput.moduleName = "date-input";
DateInput.folderName = "dateinput";

export default DateInput;
