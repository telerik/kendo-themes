import { classNames, States, Size, Roundness, FillMode } from '../utils';
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

export const DROPDOWNTREE_CLASSNAME = `k-dropdowntree`;

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

export type KendoDropdownTreeOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoDropdownTreeProps = KendoDropdownTreeOptions & {
    valueIconName?: string;
    arrowIconName?: string;
    prefix?: JSX.Element;
    suffix?: JSX.Element;
    value?: string;
    placeholder?: string;
    showValue?: boolean;
    popup?: JSX.Element;
    opened?: boolean;
};

export type KendoDropdownTreeState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    showValue: true,
    arrowIconName: 'arrow-s'
};

export const DropdownTree = (
    props: KendoDropdownTreeProps &
        KendoDropdownTreeState &
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
                className={classNames(
                    props.className,
                    DROPDOWNTREE_CLASSNAME,
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
            { opened && popup &&
                <Popup className="k-dropdowntree-popup">
                    {popup}
                </Popup>
            }
        </>
    );
};

DropdownTree.states = states;
DropdownTree.options = options;
DropdownTree.className = DROPDOWNTREE_CLASSNAME;

export default DropdownTree;
