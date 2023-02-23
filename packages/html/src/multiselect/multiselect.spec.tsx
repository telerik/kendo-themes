import { classNames, States } from '../utils-new';
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
import { ChipList } from '../chip';

export const MULTISELECT_CLASSNAME = `k-multiselect`;

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
    size: [ "small", "medium", "large" ],
    rounded: [ "small", "medium", "large", "full" ],
    fillMode: [ "solid", "flat", "outline" ],
};

export type KendoMultiSelectOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoMultiSelectProps = KendoMultiSelectOptions & {
    prefix?: JSX.Element;
    suffix?: JSX.Element;
    type?: string;
    value?: string;
    placeholder?: string;
    tags?: JSX.Element;
    showArrowButton?: boolean;
};

export type KendoMultiSelectState = { [K in (typeof states)[number]]?: boolean };

export const MultiSelect = (
    props: KendoMultiSelectProps &
        KendoMultiSelectState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        prefix,
        suffix,
        value,
        placeholder,
        tags,
        size,
        rounded,
        fillMode,
        showArrowButton,
        hover,
        focus,
        valid,
        invalid,
        required,
        loading,
        disabled,
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
            className={classNames(props.className, MULTISELECT_CLASSNAME)}
        >
            <InputPrefix>{prefix}</InputPrefix>
            <div className="k-input-values">
                <ChipList size={size}>
                    <>
                        {tags}
                    </>
                </ChipList>
                <InputInnerInput placeholder={placeholder} value={value}/>
            </div>
            <InputSuffix>{suffix}</InputSuffix>
            <InputValidationIcon {...props} />
            <InputLoadingIcon {...props} />
            <InputClearValue value={tags ? 'value' : ''} {...props} />
            {showArrowButton && (
                <Button
                    className="k-input-button"
                    icon="arrow-s"
                    rounded={null}
                    size={size}
                    fillMode={fillMode}
                />
            )}
        </Input>
    );
};

MultiSelect.states = states;
MultiSelect.options = options;
MultiSelect.className = MULTISELECT_CLASSNAME;

export default MultiSelect;
