import { classNames, States, Size, Roundness, FillMode } from '../utils';
import {
    Input,
    InputPrefix,
    InputSuffix,
    InputInnerInput,
    InputClearValue,
    InputLoadingIcon,
    InputValidationIcon
} from '../input';
import { Button } from '../button';
import { Popup } from '../popup';

export const COMBOBOX_CLASSNAME = `k-combobox`;

const states = [
    States.hover,
    States.focus,
    States.valid,
    States.invalid,
    States.loading,
    States.required,
    States.disabled,
];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.solid, FillMode.flat, FillMode.outline ],
};

export type KendoComboboxOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoComboboxProps = KendoComboboxOptions & {
    prefix?: JSX.Element;
    suffix?: JSX.Element;
    value?: string;
    placeholder?: string;
    list?: JSX.Element;
    opened?: boolean;
};

export type KendoComboboxState = { [K in (typeof states)[number]]?: boolean };

export const Combobox = (
    props: KendoComboboxProps &
        KendoComboboxState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        prefix,
        suffix,
        value,
        placeholder,
        size,
        rounded,
        fillMode,
        hover,
        focus,
        valid,
        invalid,
        required,
        loading,
        disabled,
        list,
        opened,
        ...other
    } = props;


    return (
        <>
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
                className={classNames(props.className, COMBOBOX_CLASSNAME)}
            >
                <InputPrefix>{prefix}</InputPrefix>
                <InputInnerInput placeholder={placeholder} value={value} />
                <InputValidationIcon {...props} />
                <InputLoadingIcon {...props} />
                <InputClearValue {...props} />
                <InputSuffix>{suffix}</InputSuffix>
                <Button
                    className="k-input-button"
                    icon="caret-alt-down"
                    rounded={null}
                    size={size}
                    fillMode={fillMode}
                />
            </Input>
            { opened && list &&
                <Popup>
                    {list}
                </Popup>
            }
        </>
    );
};

Combobox.states = states;
Combobox.options = options;
Combobox.className = COMBOBOX_CLASSNAME;

export default Combobox;
