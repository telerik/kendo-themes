import { classNames, optionClassNames, stateClassNames, States } from '../utils-new';

export const CHECKBOX_CLASSNAME = `k-checkbox`;

const states = [
    States.hover,
    States.focus,
    States.valid,
    States.invalid,
    States.required,
    States.disabled,
    States.checked,
    States.indeterminate
];

export const options = {
    size: [ "small", "medium", "large" ],
    rounded: [ "small", "medium", "large", "full" ],
};

export type CheckboxProps = CheckboxOptions & {
    id?: string;
};

export type CheckboxState = { [K in (typeof states)[number]]?: boolean };

export type CheckboxOptions = {
  size?: (typeof options.size)[number] | null;
  rounded?: (typeof options.rounded)[number] | null;
};

export const defaultProps = {
    size: "medium",
    rounded: "medium",
};

export const Checkbox = (
    props: CheckboxProps & CheckboxState & React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        id,
        checked,
        indeterminate,
        hover,
        focus,
        disabled,
        invalid,
        valid,
        required,
        size = defaultProps.size,
        rounded = defaultProps.rounded,
        ...other
    } = props;

    return (
        <span className="k-checkbox-wrap">
            <input
                {...other}
                id={id}
                type="checkbox"
                checked={checked}
                required={required}
                className={classNames(
                    props.className,
                    CHECKBOX_CLASSNAME,
                    optionClassNames(CHECKBOX_CLASSNAME, { size, rounded }),
                    stateClassNames(CHECKBOX_CLASSNAME, { hover, focus, disabled, invalid, valid, indeterminate, checked }),
                )}
            />
        </span>
    );
};

Checkbox.states = states;
Checkbox.options = options;
Checkbox.className = CHECKBOX_CLASSNAME;

export default Checkbox;
