import { FormHint, KendoFormHintProps } from '../form-hint.spec';
import { Textbox } from '../../textbox';

const options = FormHint.options;
const states = FormHint.states;
const defaults = {
    ...FormHint.defaultOptions,
};
const variants = [];
const modifiers = [
    {
        name: 'showHint',
        title: 'Show Hint',
    },
];

export const FormHintDemo = (
    props: KendoFormHintProps & {
        modifiers?: { [key: string]: boolean };
    }
) => {
    const { modifiers: mods, ...other } = { ...defaults, ...props };
    const showHint = mods?.showHint ?? true;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <Textbox placeholder="Component" style={{ width: '200px' }} />
            {showHint && <FormHint {...other}>Hint text</FormHint>}
        </div>
    );
};

FormHintDemo.options = options;
FormHintDemo.states = states;
FormHintDemo.variants = variants;
FormHintDemo.defaultOptions = defaults;
FormHintDemo.modifiers = modifiers;
FormHintDemo.className = FormHint.className;

export default FormHintDemo;
