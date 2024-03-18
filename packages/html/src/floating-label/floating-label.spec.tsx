import { classNames, stateClassNames, States } from '../misc';

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

const defaultProps = {};

export type FloatingLabelState = { [K in (typeof states)[number]]?: boolean };

export type KendoFloatingLabelProps = {
    label?: string;
};

export const FloatingLabel = (
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
                </label>
            )}
        </span>
    );
};

FloatingLabel.states = states;
FloatingLabel.options = options;
FloatingLabel.className = FLOATINGLABEL_CLASSNAME;
FloatingLabel.defaultProps = defaultProps;

export default FloatingLabel;
