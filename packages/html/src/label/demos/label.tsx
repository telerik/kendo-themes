import { Label, KendoLabelProps, KendoLabelState } from '../label.spec';
import { Textbox } from '../../textbox';

const options = Label.options;
const states = Label.states;
const defaults = Label.defaultOptions;
const variants = [];
const modifiers = [
    {
        name: 'optional',
        title: 'Optional',
    },
    {
        name: 'info',
        title: 'Info',
    },
];

export const LabelDemo = (
    props: KendoLabelProps &
        KendoLabelState & {
            modifiers?: { [key: string]: boolean };
        }
) => {
    const { modifiers: mods, ...other } = { ...defaults, ...props };

    let additionalProps: KendoLabelProps = {};

    Object.keys(mods || {}).forEach((modifier) => {
        switch (modifier) {
            case 'optional': {
                additionalProps.optional = mods?.[modifier] ? true : false;
                break;
            }
            case 'info': {
                additionalProps.info = mods?.[modifier] ? '(field info)' : undefined;
                break;
            }
        }
    });

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

export default LabelDemo;
