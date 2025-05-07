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

export type FloatingLabelState = { [K in (typeof states)[number]]?: boolean };

export type KendoFloatingLabelProps = {
    label?: string;
    optional?: boolean;
    position?: 'outside' | 'inside'  | 'border';
};

const defaultOptions = {
    position: 'outside'
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
        optional,
        position = defaultOptions.position,
        ...other
    } = props;

    return (
        <span
            {...other}
            className={classNames(
                props.className,
                FLOATINGLABEL_CLASSNAME,
                position && `k-label-position-${position}`,
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

export default FloatingLabel;
