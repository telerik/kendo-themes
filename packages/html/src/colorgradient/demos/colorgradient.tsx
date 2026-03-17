import { ColorGradient, KendoColorGradientProps } from '../color-gradient.spec';
import { ColorGradientNormal } from '../templates/colorgradient-normal';

const options = ColorGradient.options;
const states = ColorGradient.states;
const defaults = {
  ...ColorGradient.defaultOptions,
  variant: 'rgba',
};

const variants = [
    {
        name: 'rgba',
        title: 'RGBA',
    },
    {
        name: 'rgb',
        title: 'RGB',
    },
    {
        name: 'hex',
        title: 'HEX',
    },
];
const modifiers = [];

export const ColorgradientDemo = (props: KendoColorGradientProps & { variant?: (typeof variants)[number]['name'] }) => {
    const { variant, ...other } = props;

    switch (variant) {
        case 'hex':
            return (
                <ColorGradientNormal {...other} mode={variant} />
            );
        case 'rgb':
            return (
                <ColorGradientNormal {...other} mode={variant} />
            );
        case 'rgba':
        default:
            return (
                <ColorGradientNormal {...other} mode={variant} />
            );
    }
}


ColorgradientDemo.options = options;
ColorgradientDemo.states = states;
ColorgradientDemo.variants = variants;
ColorgradientDemo.defaultOptions = defaults;
ColorgradientDemo.modifiers = modifiers;
ColorgradientDemo.className = ColorGradient.className;

export default ColorgradientDemo;

