import { MaskedTextbox, KendoMaskedTextboxProps } from '../maskedtextbox.spec';
import { MaskedTextboxNormal } from '../templates/maskedtextbox-normal';
import { Icon } from '../../icon';
import { DropdownList } from '../../dropdownlist';

const states = MaskedTextbox.states;
const defaults = MaskedTextbox.defaultOptions;
const options = MaskedTextbox.options;
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
];
const variants = [];

export const MaskedtextboxDemo = (
  props: KendoMaskedTextboxProps & {
    modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
  }
) => {
  const { modifiers: mods, ...other } = props;

  let additionalProps: KendoMaskedTextboxProps = {};

  Object.keys(mods || {}).forEach((modifier) => {
    switch (modifier) {
      case 'prefix':
        additionalProps.prefix = mods?.[modifier] ? <DropdownList size={other.size} value="Choose" fillMode="flat" /> : undefined;
        break;
      case 'suffix':
        additionalProps.suffix = mods?.[modifier] ? <Icon icon="lock" /> : undefined;
        break;
      case 'clear-button':
        additionalProps.showClearButton = mods?.[modifier];
        break;
      default:
        break;
    }
  });

  return (
    <MaskedTextboxNormal value="Value" style={{ width: 300 }} {...other} {...additionalProps} />
  );
}


MaskedtextboxDemo.options = options;
MaskedtextboxDemo.states = states;
MaskedtextboxDemo.variants = variants;
MaskedtextboxDemo.defaultOptions = defaults;
MaskedtextboxDemo.modifiers = modifiers;

export default MaskedtextboxDemo;

