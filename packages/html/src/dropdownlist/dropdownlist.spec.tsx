import { classNames, States, Size, Roundness, FillMode } from '../misc';
import { Button } from '../button';
import {
    Picker,
    InputInnerSpan,
    InputLoadingIcon,
    InputPrefix,
    InputSuffix,
    InputValidationIcon
} from '../input';
import { Popup } from '../popup';

export const DROPDOWNLIST_CLASSNAME = `k-dropdownlist`;

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

export type KendoDropdownListOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoDropdownListProps = KendoDropdownListOptions & {
    valueIconName?: string;
    arrowIconName?: string;
    prefix?: React.JSX.Element;
    suffix?: React.JSX.Element;
    value?: string;
    placeholder?: string;
    showValue?: boolean;
    popup?: React.JSX.Element;
    opened?: boolean;
};

export type KendoDropdownListState = { [K in (typeof states)[number]]?: boolean };

export const DropdownList = (
    props: KendoDropdownListProps &
        KendoDropdownListState &
        Omit<React.HTMLAttributes<HTMLSpanElement>, 'prefix'>
) => {
    const {
        showValue = true,
        arrowIconName = 'caret-alt-down',
        size = Size.medium,
        rounded = Roundness.medium,
        fillMode = FillMode.solid,
        valueIconName,
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
        popup,
        opened,
        ...other
    } = props;


    return (
        <>
            <Picker
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
                    DROPDOWNLIST_CLASSNAME,
                    {
                        'k-icon-picker': !showValue && valueIconName
                    }
                )}
            >
                <InputPrefix>{prefix}</InputPrefix>
                <InputInnerSpan
                    placeholder={placeholder}
                    value={value}
                    showValue={showValue}
                    valueIconName={valueIconName}
                />
                <InputValidationIcon
                    valid={valid}
                    invalid={invalid}
                    loading={loading}
                    disabled={disabled} />
                <InputLoadingIcon
                    loading={loading}
                    disabled={disabled} />
                <InputSuffix>{suffix}</InputSuffix>
                <Button
                    className="k-input-button"
                    icon={arrowIconName}
                    rounded={null}
                    size={props.size}
                    fillMode={props.fillMode}
                />
            </Picker>
            { opened && popup &&
                <Popup className="k-list-container k-dropdownlist-popup">
                    {popup}
                </Popup>
            }
        </>
    );
};

DropdownList.states = states;
DropdownList.options = options;
DropdownList.className = DROPDOWNLIST_CLASSNAME;

export default DropdownList;
