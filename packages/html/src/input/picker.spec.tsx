import { classNames, optionClassNames, stateClassNames, States, Size, Roundness, FillMode } from '../misc';

import { KendoComponent } from '../_types/component';
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

const defaultOptions = {
    size: Size.medium,
    rounded: Roundness.medium,
    fillMode: FillMode.solid
};

export const Picker: KendoComponent<PickerOptions & PickerState & React.HTMLAttributes<HTMLSpanElement>> = (
    props: PickerOptions & PickerState & React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        hover,
        focus,
        disabled,
        invalid,
        valid,
        loading,
        readonly,
        size = defaultOptions.size,
        rounded = defaultOptions.rounded,
        fillMode = defaultOptions.fillMode,
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
Picker.defaultOptions = defaultOptions;
Picker.moduleName = "input";
Picker.folderName = Picker.moduleName;

export default Picker;
