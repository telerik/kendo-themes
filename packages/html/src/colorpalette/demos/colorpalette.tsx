import { ColorPalette, KendoColorPaletteProps } from '../colorpalette.spec';
import { ColorPaletteNormal } from '../templates/colorpalette-normal';

const options = ColorPalette.options;
const states = ColorPalette.states;
const defaults = {
  ...ColorPalette.defaultOptions,
  variant: 'basic',
};

const variants = [
  {
    name: 'basic',
    title: 'Basic',
  },
  {
    name: 'monochrome',
    title: 'Monochrome',
  },
];

const colorPalettes = {
  basic: {
    colors: ['#000000', '#7f7f7f', '#880015', '#ed1c24', '#ff7f27', '#fff200', '#22b14c', '#00a2e8', '#3f48cc', '#a349a4', '#ffffff', '#c3c3c3', '#b97a57', '#ffaec9', '#ffc90e', '#efe4b0', '#b5e61d', '#99d9ea', '#7092be', '#c8bfe7'],
    columns: 10
  },
  monochrome: {
    colors: ['#000000', '#1a1a1a', '#333333', '#4d4d4d', '#666666', '#808080', '#999999', '#b3b3b3', '#cccccc', '#e6e6e6', '#f2f2f2', '#ffffff'],
    columns: 12
  }
};
const modifiers = [];

export const ColorpaletteDemo = (props: KendoColorPaletteProps & { variant?: (typeof variants)[number]['name'] }) => {
  const { variant = 'basic', ...other } = props;
  const palette = colorPalettes[variant as keyof typeof colorPalettes];

  return (
    <ColorPaletteNormal columns={palette.columns} palette={palette} {...other} />
  );
}


ColorpaletteDemo.options = options;
ColorpaletteDemo.states = states;
ColorpaletteDemo.variants = variants;
ColorpaletteDemo.defaultOptions = defaults;
ColorpaletteDemo.modifiers = modifiers;
ColorpaletteDemo.className = ColorPalette.className;

export default ColorpaletteDemo;

