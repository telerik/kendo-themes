import { classNames } from '../misc';

export const FORMHINT_CLASSNAME = 'k-form-hint';

const states = [];

const options = {};

export type KendoFormHintProps = {
    text?: string;
};

const defaultOptions = {};

export const FormHint = (
    props: KendoFormHintProps & React.HTMLAttributes<HTMLDivElement>
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
                FORMHINT_CLASSNAME
            )}
        >
            {text || children}
        </div>
    );
};

FormHint.states = states;
FormHint.options = options;
FormHint.className = FORMHINT_CLASSNAME;
FormHint.defaultOptions = defaultOptions;

export default FormHint;
