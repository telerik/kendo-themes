import { classNames, stateClassNames, States } from '../misc';

export const FORMFIELD_CLASSNAME = 'k-form-field';

const states = [
    States.disabled
];

export type KendoFormFieldProps = {
    label?: null | string;
    orientation?: string;
    optional?: boolean;
    editor?: JSX.Element | string;
    hint?: null | string;
    error?: null | string;
    info?: null | string;
    disabled?: boolean;
    dir?: "ltr" | "rtl";
};

export type KendoFormFieldState = { [K in (typeof states)[number]]?: boolean };


export const FormField = (
    props: KendoFormFieldProps &
        KendoFormFieldState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        label,
        orientation,
        optional,
        editor,
        hint,
        error,
        info,
        disabled,
        dir
    } = props;

    return (
        <div
            className={classNames(
                FORMFIELD_CLASSNAME,
                props.className,
                stateClassNames(FORMFIELD_CLASSNAME, { disabled })
            )} dir={dir}>
            {label &&
                            <label className={classNames(
                                'k-label',
                                'k-form-label'
                            )}>
                                {label}
                                {optional && <span className="k-label-optional">(Optional)</span>}
                                {info && <span className="k-field-info">(field info)</span>}
                            </label>
            }
            { orientation === 'horizontal' && !label && <span className="k-label k-form-label k-label-empty"></span> }
            <div className="k-form-field-wrap">
                {editor}
                {hint && <div className="k-form-hint">{hint}</div>}
                {error && <div className="k-form-error">{error}</div>}
            </div>
        </div>
    );
};

FormField.className = FORMFIELD_CLASSNAME;

export default FormField;

