import { NumericTextbox, KendoNumericTextboxProps } from '../numerictextbox.spec';
import { NumericTextboxNormal } from '../templates/numerictextbox-normal';
import { DropdownList } from '../../dropdownlist/dropdownlist.spec';
import { InputSuffixText } from '../../input/input-suffix-text';

const states = NumericTextbox.states;
const defaults = NumericTextbox.defaultOptions;
const options = NumericTextbox.options;
const modifiers = [
  {
    name: 'prefix',
    title: 'Prefix',
  },
  {
    name: 'suffix',
    title: 'Suffix',
  },
  {
    name: 'clear-button',
    title: '`Clear` Button',
  },
  {
    name: 'spin-button',
    title: '`Spin` Button',
  },
];
const variants = [];

export const NumerictextboxDemo = (
  props: KendoNumericTextboxProps & {
    modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
  }
) => {
  const { modifiers: mods, ...other } = props;

  let additionalProps: KendoNumericTextboxProps = {};

  Object.keys(mods || {}).forEach((modifier) => {
    switch (modifier) {
      case 'prefix':
        additionalProps.prefix = mods?.[modifier] ? <DropdownList size={other.size} fillMode="flat" value="mm"></DropdownList> : undefined;
        break;
      case 'suffix':
        additionalProps.suffix = mods?.[modifier] ? <InputSuffixText>mm</InputSuffixText> : undefined;
        break;
      case 'clear-button':
        additionalProps.showClearButton = mods?.[modifier];
        break;
      case 'spin-button':
        additionalProps.showSpinButton = mods?.[modifier];
        break;
      default:
        break;
    }
  });

  return (
    <NumericTextboxNormal value="Value" style={{ width: 300 }} {...other} {...additionalProps} />
  );
}


NumerictextboxDemo.options = options;
NumerictextboxDemo.states = states;
NumerictextboxDemo.variants = variants;
NumerictextboxDemo.defaultOptions = defaults;
NumerictextboxDemo.modifiers = modifiers;

export default NumerictextboxDemo;

