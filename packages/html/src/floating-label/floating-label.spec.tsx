import { classNames, stateClassNames, States } from '../misc';

import { KendoComponent } from '../_types/component';
export const FLOATINGLABEL_CLASSNAME = `k-floating-label-container`;

const states = [
    States.hover,
    States.focus,
    States.valid,
    States.invalid,
    States.empty,
    States.disabled
];

const options = {};

const defaultOptions = {};

export type FloatingLabelState = { [K in (typeof states)[number]]?: boolean };

export type KendoFloatingLabelProps = {
    label?: string;
    optional?: boolean;
};

export const FloatingLabel: KendoComponent<FloatingLabelState & KendoFloatingLabelProps & React.HTMLAttributes<HTMLSpanElement>> = (
    props: FloatingLabelState & KendoFloatingLabelProps & React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        hover,
        focus,
        disabled,
        invalid,
        valid,
        empty,
        label,
        optional,
        ...other
    } = props;

    return (
        <span
            {...other}
            className={classNames(
                props.className,
                FLOATINGLABEL_CLASSNAME,
                stateClassNames(FLOATINGLABEL_CLASSNAME, { hover, focus, disabled, empty, valid, invalid }),
            )}
        >
            {props.children}
            { label && (
                <label className="k-floating-label">
                    {label}
                    {optional && <span className="k-label-optional">(Optional)</span>}
                </label>
            )}
        </span>
    );
};

FloatingLabel.states = states;
FloatingLabel.options = options;
FloatingLabel.className = FLOATINGLABEL_CLASSNAME;
FloatingLabel.defaultOptions = defaultOptions;
FloatingLabel.moduleName = "floating-label";
FloatingLabel.folderName = "floating-label";

export default FloatingLabel;
