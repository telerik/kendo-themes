import { FormError, KendoFormErrorProps } from '../form-error.spec';
import { Textbox } from '../../textbox';

const options = FormError.options;
const states = FormError.states;
const defaults = {
    ...FormError.defaultOptions,
};
const variants = [];
const modifiers = [
    {
        name: 'showError',
        title: 'Show Error',
    },
];

export const FormErrorDemo = (
    props: KendoFormErrorProps & {
        modifiers?: { [key: string]: boolean };
    }
) => {
    const { modifiers: mods, ...other } = { ...defaults, ...props };
    const showError = mods?.showError ?? true;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <Textbox placeholder="Component" invalid={showError} style={{ width: '200px' }} />
            {showError && <FormError {...other}>Error text</FormError>}
        </div>
    );
};

FormErrorDemo.options = options;
FormErrorDemo.states = states;
FormErrorDemo.variants = variants;
FormErrorDemo.defaultOptions = defaults;
FormErrorDemo.modifiers = modifiers;
FormErrorDemo.className = FormError.className;

export default FormErrorDemo;
