import { classNames, States, Size, Roundness, FillMode } from '../misc';
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

export const DROPDOWNGRID_CLASSNAME = `k-dropdowngrid`;

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

const defaultProps = {
    size: Input.defaultProps.size,
    rounded: Input.defaultProps.rounded,
    fillMode: Input.defaultProps.fillMode
};

export type KendoDropdownGridOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoDropdownGridProps = KendoDropdownGridOptions & {
    prefix?: JSX.Element;
    suffix?: JSX.Element;
    type?: string;
    value?: string;
    placeholder?: string;
    autocomplete?: string;
    popup?: JSX.Element;
    opened?: boolean;
};

export type KendoDropdownGridState = { [K in (typeof states)[number]]?: boolean };

export const DropdownGrid = (
    props: KendoDropdownGridProps &
        KendoDropdownGridState &
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
        popup,
        opened,
        readonly,
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
                readonly={readonly}
                className={classNames(
                    props.className,
                    DROPDOWNGRID_CLASSNAME,
                    'k-combobox'
                )}
            >
                <InputPrefix>{prefix}</InputPrefix>
                <InputInnerInput placeholder={placeholder} value={value} />
                <InputValidationIcon
                    valid={valid}
                    invalid={invalid}
                    loading={loading}
                    disabled={disabled} />
                <InputLoadingIcon
                    loading={loading}
                    disabled={disabled} />
                <InputClearValue
                    loading={loading}
                    disabled={disabled}
                    readonly={readonly}
                    value={value} />
                <InputSuffix>{suffix}</InputSuffix>
                <Button
                    className="k-input-button"
                    icon="caret-alt-down"
                    rounded={null}
                    size={size}
                    fillMode={fillMode}
                />
            </Input>
            { opened && popup &&
                <Popup className="k-dropdowngrid-popup">
                    {popup}
                </Popup>
            }
        </>
    );
};

DropdownGrid.states = states;
DropdownGrid.options = options;
DropdownGrid.className = DROPDOWNGRID_CLASSNAME;
DropdownGrid.defaultProps = defaultProps;

export default DropdownGrid;
