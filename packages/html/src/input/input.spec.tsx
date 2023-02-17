import { classNames, optionClassNames, stateClassNames, States } from '../utils-new';

export const INPUT_CLASSNAME = `k-input`;

export const states = [
    States.hover,
    States.focus,
    States.valid,
    States.invalid,
    States.required,
    States.disabled,
    States.loading,
];

export const options = {
    size: [ "small", "medium", "large" ],
    rounded: [ "small", "medium", "large", "full" ],
    fillMode: [ "solid", "flat", "outline" ],
};

export type InputState = { [K in (typeof states)[number]]?: boolean };
export type InputOptions = {
  size?: (typeof options.size)[number] | null;
  rounded?: (typeof options.rounded)[number] | null;
  fillMode?: (typeof options.fillMode)[number] | null;
};

export const defaultProps = {
    size: "medium",
    rounded: "medium",
    fillMode: "solid",
};

export const Input = (
    props: InputOptions & InputState & React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        hover,
        focus,
        disabled,
        invalid,
        valid,
        loading,
        size = defaultProps.size,
        rounded = defaultProps.rounded,
        fillMode = defaultProps.fillMode,
        ...other
    } = props;

    return (
        <span
            {...other}
            className={classNames(
                props.className,
                INPUT_CLASSNAME,
                optionClassNames(INPUT_CLASSNAME, { size, rounded, fillMode }),
                stateClassNames(INPUT_CLASSNAME, { hover, focus, disabled, invalid, valid, loading }),
            )}
        />
    );
};

Input.states = states;
Input.options = options;
Input.className = INPUT_CLASSNAME;

export default Input;
