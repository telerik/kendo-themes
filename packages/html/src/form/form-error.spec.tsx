import { classNames } from '../misc';

export const FORMERROR_CLASSNAME = 'k-form-error';

const states = [];

const options = {};

export type KendoFormErrorProps = {
    text?: string;
};

const defaultOptions = {};

export const FormError = (
    props: KendoFormErrorProps & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        text,
        children,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                FORMERROR_CLASSNAME
            )}
        >
            {text || children}
        </div>
    );
};

FormError.states = states;
FormError.options = options;
FormError.className = FORMERROR_CLASSNAME;
FormError.defaultOptions = defaultOptions;

export default FormError;
