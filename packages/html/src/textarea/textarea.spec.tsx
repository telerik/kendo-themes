import { classNames, States } from '../utils-new';
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
    States.disabled,
    States.loading
];

const options = {
    size: [ "small", "medium", "large" ],
    rounded: [ "small", "medium", "large", "full" ],
    fillMode: [ "solid", "flat", "outline" ],
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
            className={classNames(props.className, TEXTAREA_CLASSNAME)}
        >
            <InputInnerTextarea
                className="!k-overflow-auto"
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

export default Textarea;
