import { classNames, States, Size, Roundness, FillMode } from '../misc';
import {
    Input,
    InputInnerInput,
    InputClearValue,
    InputLoadingIcon,
    InputValidationIcon
} from '../input';
import { Icon } from '../icon';

export const SEARCHBOX_CLASSNAME = `k-searchbox`;

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
    fillMode: [ FillMode.solid, FillMode.flat, FillMode.outline ]
};

export type KendoSearchboxOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoSearchboxProps = KendoSearchboxOptions & {
    type?: string;
    value?: string;
    placeholder?: string;
    showIcon?: boolean;
    icon?: string;
};

export type KendoSearchboxState = { [K in (typeof states)[number]]?: boolean };

export const Searchbox = (
    props: KendoSearchboxProps &
        KendoSearchboxState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        showIcon = true,
        icon = "search",
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
            className={classNames(props.className, SEARCHBOX_CLASSNAME)}
        >
            { showIcon && (<Icon className="k-input-icon" icon={icon} />) }
            <InputInnerInput placeholder={placeholder} value={value} />
            <InputLoadingIcon {...props} />
            <InputValidationIcon {...props} />
            <InputClearValue {...props} />
        </Input>
    );
};

Searchbox.states = states;
Searchbox.options = options;
Searchbox.className = SEARCHBOX_CLASSNAME;

export default Searchbox;
