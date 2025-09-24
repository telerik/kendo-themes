import { classNames, optionClassNames, stateClassNames, States, Size, Roundness } from '../misc';

import { KendoComponent } from '../_types/component';
import { CHECKBOX_FOLDER_NAME, CHECKBOX_MODULE_NAME } from './constants';
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

const defaultOptions = {
    size: Size.medium,
    rounded: Roundness.medium
};

export const Checkbox: KendoComponent<CheckboxProps & CheckboxState & React.HTMLAttributes<HTMLInputElement>> = (
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
        size = defaultOptions.size,
        rounded = defaultOptions.rounded,
        ...other
    } = props;

    return (
        <span className="k-checkbox-wrap">
            <input
                {...other}
                id={id}
                type="checkbox"
                defaultChecked={checked}
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
Checkbox.defaultOptions = defaultOptions;
Checkbox.moduleName = CHECKBOX_MODULE_NAME;
Checkbox.folderName = CHECKBOX_FOLDER_NAME;

export default Checkbox;
