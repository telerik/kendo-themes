import { Dropzone, KendoDropzoneProps } from '../dropzone.spec';
import { DropzoneNormal } from '../templates/dropzone-normal';

const options = Dropzone.options;
const states = Dropzone.states;
const defaults = Dropzone.defaultOptions;


const modifiers = [
    {
        name: 'note',
        title: 'Note',
    },
];
const variants = [];

export const DropzoneDemo = (
    props: KendoDropzoneProps & {
        modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
    }
) => {
    const { modifiers: mods, ...other } = props;

    let additionalProps: any = {};

    Object.keys(mods || {}).forEach((modifier) => {
        switch (modifier) {
            case 'note':
                additionalProps.note = mods?.[modifier] ? 'Only JPEG, PNG and SVG files are allowed.' : undefined;
                break;

            default:
                break;
        }
    });

    return (
        <DropzoneNormal style={{ width: '500px' }} {...other} {...additionalProps} />
    );
}


DropzoneDemo.options = options;
DropzoneDemo.states = states;
DropzoneDemo.variants = variants;
DropzoneDemo.defaultOptions = defaults;
DropzoneDemo.modifiers = modifiers;

export default DropzoneDemo;

