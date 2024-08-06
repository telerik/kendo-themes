import { classNames, optionClassNames, stateClassNames, States, Size, Roundness, FillMode } from '../misc';

export const PICKER_CLASSNAME = `k-picker`;

export const pickerStates = [
    States.hover,
    States.focus,
    States.valid,
    States.invalid,
    States.required,
    States.disabled,
    States.loading,
    States.readonly
];

export const pickerOptions = {
    size: [ Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.solid, FillMode.flat, FillMode.outline ]
};

export type PickerState = { [K in (typeof pickerStates)[number]]?: boolean };

export type PickerOptions = {
  size?: (typeof pickerOptions.size)[number] | null;
  rounded?: (typeof pickerOptions.rounded)[number] | null;
  fillMode?: (typeof pickerOptions.fillMode)[number] | null;
};

export const Picker = (
    props: PickerOptions & PickerState & React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        size = Size.medium,
        rounded = Roundness.medium,
        fillMode = FillMode.solid,
        hover,
        focus,
        disabled,
        invalid,
        valid,
        loading,
        readonly,
        ...other
    } = props;

    return (
        <span
            {...other}
            className={classNames(
                props.className,
                PICKER_CLASSNAME,
                optionClassNames(PICKER_CLASSNAME, { size, rounded, fillMode }),
                stateClassNames(PICKER_CLASSNAME, { hover, focus, disabled, invalid, valid, loading, readonly }),
            )}>
            {props.children}
        </span>
    );
};

Picker.states = pickerStates;
Picker.options = pickerOptions;
Picker.className = PICKER_CLASSNAME;

export default Picker;
