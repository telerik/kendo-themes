import { classNames, optionClassNames, stateClassNames, States, Size } from '../misc';

import { KendoComponent } from '../_types/component';
export const RADIOBUTTON_CLASSNAME = `k-radio`;

const states = [
    States.hover,
    States.focus,
    States.valid,
    States.invalid,
    States.required,
    States.disabled,
    States.checked
];

const options = {
    size: [ Size.small, Size.medium, Size.large ]
};

export type RadioButtonProps = RadioButtonOptions & {
    id?: string;
};

export type RadioButtonState = { [K in (typeof states)[number]]?: boolean };

export type RadioButtonOptions = {
  size?: (typeof options.size)[number] | null;
};

const defaultOptions = {
    size: Size.medium
};

export const RadioButton: KendoComponent<RadioButtonProps & RadioButtonState & React.HTMLAttributes<HTMLInputElement>> = (
    props: RadioButtonProps & RadioButtonState & React.HTMLAttributes<HTMLInputElement>
) => {
    const {
        id,
        checked,
        hover,
        focus,
        disabled,
        invalid,
        valid,
        required,
        size = defaultOptions.size,
        ...other
    } = props;

    return (
        <span className="k-radio-wrap">
            <input
                {...other}
                id={id}
                type="radio"
                checked={checked}
                required={required}
                className={classNames(
                    props.className,
                    RADIOBUTTON_CLASSNAME,
                    optionClassNames(RADIOBUTTON_CLASSNAME, { size }),
                    stateClassNames(RADIOBUTTON_CLASSNAME, { hover, focus, disabled, invalid, valid, checked }),
                )}
            />
        </span>
    );
};

RadioButton.states = states;
RadioButton.options = options;
RadioButton.className = RADIOBUTTON_CLASSNAME;
RadioButton.defaultOptions = defaultOptions;

export default RadioButton;
