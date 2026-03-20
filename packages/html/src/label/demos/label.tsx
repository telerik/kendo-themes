import { Label, KendoLabelProps, KendoLabelState } from '../label.spec';
import { Textbox } from '../../textbox';

const options = Label.options;
const states = Label.states;
const defaults = { 
    ...Label.defaultOptions,
    variant: 'default',
};
const variants = [
    {
        name: 'default',
        title: 'Default',
    },
    {
        name: 'optional',
        title: 'Optional',
    },
    {
        name: 'info',
        title: 'Info',
    },
];
const modifiers = [];

export const LabelDemo = (
    props: KendoLabelProps &
        KendoLabelState & {
            variant?: (typeof variants)[number]['name'];
        }
) => {
    const { variant = 'default', ...other } = { ...defaults, ...props };

    let additionalProps: KendoLabelProps = {};

    switch (variant) {
        case 'optional':
            additionalProps.optional = true;
            break;
        case 'info':
            additionalProps.info = '(field info)';
            break;
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <Label {...other} {...additionalProps}>Label</Label>
            <Textbox placeholder="Component" style={{ width: '200px' }} />
        </div>
    );
};

LabelDemo.options = options;
LabelDemo.states = states;
LabelDemo.variants = variants;
LabelDemo.defaultOptions = defaults;
LabelDemo.modifiers = modifiers;
LabelDemo.className = Label.className;

export default LabelDemo;
