import { classNames, optionClassNames, stateClassNames, States, Size, Roundness } from '../misc';

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

const options = {
    size: [ Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.small, Roundness.medium, Roundness.large, Roundness.full ]
};

export type CheckboxProps = CheckboxOptions & {
    id?: string;
};

export type CheckboxState = { [K in (typeof states)[number]]?: boolean };

export type CheckboxOptions = {
  size?: (typeof options.size)[number] | null;
  rounded?: (typeof options.rounded)[number] | null;
};

const defaultProps = {
    size: Size.medium,
    rounded: Roundness.medium
};

export const Checkbox = (
    props: CheckboxProps & CheckboxState & React.HTMLAttributes<HTMLInputElement>
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
Checkbox.defaultProps = defaultProps;

export default Checkbox;
