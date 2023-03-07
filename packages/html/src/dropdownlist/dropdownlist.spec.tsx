import { classNames, States, Size, Roundness, FillMode } from '../utils-new';
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
    States.loading
];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.solid, FillMode.flat, FillMode.outline ],
};

export type KendoDropdownListOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoDropdownListProps = KendoDropdownListOptions & {
    valueIconName?: string;
    arrowIconName?: string;
    prefix?: JSX.Element;
    suffix?: JSX.Element;
    value?: string;
    placeholder?: string;
    showValue?: boolean;
    list?: JSX.Element;
    opened?: boolean;
};

export type KendoDropdownListState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    showValue: true,
    arrowIconName: 'arrow-s'
};

export const DropdownList = (
    props: KendoDropdownListProps &
        KendoDropdownListState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        valueIconName,
        arrowIconName = defaultProps.arrowIconName,
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
        showValue = defaultProps.showValue,
        list,
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
                <InputValidationIcon {...props} />
                <InputLoadingIcon {...props} />
                <InputSuffix>{suffix}</InputSuffix>
                <Button
                    className="k-input-button"
                    icon={arrowIconName}
                    rounded={null}
                    size={props.size}
                    fillMode={props.fillMode}
                />
            </Picker>
            { opened && list &&
                <Popup>
                    {list}
                </Popup>
            }
        </>
    );
};

DropdownList.states = states;
DropdownList.options = options;
DropdownList.className = DROPDOWNLIST_CLASSNAME;

export default DropdownList;
