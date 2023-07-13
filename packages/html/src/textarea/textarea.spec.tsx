import { classNames, States, Size, Roundness, FillMode } from '../misc';
import {
    Input,
    InputInnerTextarea
} from '../input';

export const TEXTAREA_CLASSNAME = `k-textarea`;

const states = [
    States.hover,
    States.focus,
    States.valid,
    States.invalid,
    States.required,
    States.disabled
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

export type KendoTextareaOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoTextareaProps = KendoTextareaOptions & {
    rows?: number;
    value?: string;
    placeholder?: string;
};

export type KendoTextareaState = { [K in (typeof states)[number]]?: boolean };

export const Textarea = (
    props: KendoTextareaProps &
        KendoTextareaState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        rows,
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
            disabled={disabled}
            className={classNames(props.className, TEXTAREA_CLASSNAME)}
        >
            <InputInnerTextarea
                className={classNames(
                    "!k-overflow-auto",
                )}
                value={value}
                placeholder={placeholder}
                rows={rows}
            />
        </Input>
    );
};

Textarea.states = states;
Textarea.options = options;
Textarea.className = TEXTAREA_CLASSNAME;
Textarea.defaultProps = defaultProps;

export default Textarea;
