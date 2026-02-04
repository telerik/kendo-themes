import { classNames, stateClassNames, States } from '../misc';
import { Label } from '../label/label.spec';
import { FormHint } from './form-hint.spec';
import { FormError } from './form-error.spec';

export const FORMFIELD_CLASSNAME = 'k-form-field';

const states = [
    States.disabled
];

export type KendoFormFieldProps = {
    label?: null | string;
    orientation?: string;
    optional?: boolean;
    editor?: React.JSX.Element | string;
    hint?: null | string;
    error?: null | string;
    info?: null | string;
    disabled?: boolean;
    dir?: "ltr" | "rtl";
    colSpan?: string | number;
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
        dir,
        colSpan
    } = props;

    return (
        <div
            className={classNames(
                FORMFIELD_CLASSNAME,
                props.className,
                stateClassNames(FORMFIELD_CLASSNAME, { disabled }),
                {
                    [`k-col-span-${colSpan}`]: colSpan
                }
            )} dir={dir}>
            {label &&
                <Label className="k-form-label" optional={optional} info={info ? "(field info)" : undefined}>
                    {label}
                </Label>
            }
            { orientation === 'horizontal' && !label && <span className="k-label k-form-label k-label-empty"></span> }
            <div className="k-form-field-wrap">
                {editor}
                {hint && <FormHint>{hint}</FormHint>}
                {error && <FormError>{error}</FormError>}
            </div>
        </div>
    );
};

FormField.states = states;
FormField.className = FORMFIELD_CLASSNAME;

export default FormField;

