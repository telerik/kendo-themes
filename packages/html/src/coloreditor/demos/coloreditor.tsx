import { ColorEditor, ColorEditorGroup, ColorEditorPaletteGroup, KendoColorEditorProps } from '..';

const options = ColorEditor.options;
const states = ColorEditor.states;
const defaults = {
    ...ColorEditor.defaultOptions,
    variant: 'gradient',
};

const variants = [
    {
        name: 'gradient',
        title: 'Gradient',
    },
    {
        name: 'palette',
        title: 'Palette',
    },
];

const modifiers = [];

export const ColoreditorDemo = (props: KendoColorEditorProps & { variant?: (typeof variants)[number]['name'] }) => {
    const { variant, ...other } = props;

    switch (variant) {
        case 'palette':
            return (
                <ColorEditorPaletteGroup {...other} color="white" />
            );
        case 'gradient':
        default:
            return (
                <ColorEditorGroup {...other} color="rgba(183, 118 , 118, 1.00)" />
            );
    }
}


ColoreditorDemo.options = options;
ColoreditorDemo.states = states;
ColoreditorDemo.variants = variants;
ColoreditorDemo.defaultOptions = defaults;
ColoreditorDemo.modifiers = modifiers;

export default ColoreditorDemo;

