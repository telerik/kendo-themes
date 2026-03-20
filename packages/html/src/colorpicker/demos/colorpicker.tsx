import { ColorEditor } from "../../coloreditor";
import ColorPicker, { KendoColorPickerProps } from "../colorpicker.spec";
import { ColorPickerNormal } from "../templates/colorpicker-normal";

const options = ColorPicker.options;
const states = ColorPicker.states;
const defaults = {
    ...ColorPicker.defaultOptions,
    variant: 'color',
};

const variants = [
    {
        name: 'color',
        title: 'Color',
        default: true,
    },
    {
        name: 'no color',
        title: 'No color',
    },
    {
        name: 'icon',
        title: 'Icon',
    },
];

const modifiers = [
    {
        name: 'opened',
        title: 'Opened',
    },
];

export const ColorpickerDemo = (props: KendoColorPickerProps & { variant?: (typeof variants)[number]['name'] } & {
    modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
}
) => {
    const { variant, modifiers: mods, ...other } = { ...defaults, ...props };

    let additionalProps: any = {};

    Object.keys(mods || {}).forEach((modifier) => {
        switch (modifier) {
            case 'opened':
                additionalProps.opened = mods?.[modifier] ? true : false;
                additionalProps.popup = mods?.[modifier] ? <ColorEditor size={other.size} color="rgba(183, 118 , 118, 1.00)" group /> : '';
                break;
            default:
                break;
        }
    });

    const placeholderStyles = additionalProps.opened ? { width: '272px', height: '390px' } : {}

    switch (variant) {
        case 'no color':
            return (
                <div style={placeholderStyles}>
                    <ColorPickerNormal {...other} {...additionalProps} />
                </div>
            );
        case 'icon':
            return (
                <div style={placeholderStyles}>
                    <ColorPickerNormal value="rgba(183, 118 , 118, 1.00)" valueIconName="edit-tools" {...other} {...additionalProps} />
                </div>
            );
        case 'color':
        default:
            return (
                <div style={placeholderStyles}>
                    <ColorPickerNormal value="rgba(183, 118 , 118, 1.00)" {...other} {...additionalProps} />
                </div>
            );
    }
}

ColorpickerDemo.options = options;
ColorpickerDemo.states = states;
ColorpickerDemo.variants = variants;
ColorpickerDemo.defaultOptions = defaults;
ColorpickerDemo.modifiers = modifiers;
ColorpickerDemo.className = ColorPicker.className;

export default ColorpickerDemo;
