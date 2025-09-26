import { classNames, optionClassNames, stateClassNames, States, Size, Roundness, FillMode } from '../misc';

import { KendoComponent } from '../_types/component';
import { INPUT_FOLDER_NAME, INPUT_MODULE_NAME } from './constants';
export const INPUT_CLASSNAME = `k-input`;

export const states = [
    States.hover,
    States.focus,
    States.valid,
    States.invalid,
    States.required,
    States.disabled,
    States.loading,
    States.readonly
];

export const options = {
    size: [ Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.none, Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.solid, FillMode.flat, FillMode.outline ]
};

export type InputState = { [K in (typeof states)[number]]?: boolean };
export type InputOptions = {
  size?: (typeof options.size)[number] | null;
  rounded?: (typeof options.rounded)[number] | null;
  fillMode?: (typeof options.fillMode)[number] | null;
};

export const defaultOptions = {};

export const Input: KendoComponent<InputOptions & InputState & React.HTMLAttributes<HTMLSpanElement>> = (
    props: InputOptions & InputState & React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        hover,
        focus,
        disabled,
        invalid,
        valid,
        loading,
        readonly,
        size,
        rounded,
        fillMode,
        ...other
    } = props;

    return (
        <span
            {...other}
            className={classNames(
                props.className,
                INPUT_CLASSNAME,
                optionClassNames(INPUT_CLASSNAME, { size, rounded, fillMode }),
                stateClassNames(INPUT_CLASSNAME, { hover, focus, disabled, invalid, valid, loading, readonly }),
            )}
        />
    );
};

Input.states = states;
Input.options = options;
Input.className = INPUT_CLASSNAME;
Input.defaultOptions = defaultOptions;
Input.moduleName = INPUT_MODULE_NAME;
Input.folderName = INPUT_FOLDER_NAME;

export default Input;
