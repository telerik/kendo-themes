import { Textbox, KendoTextboxProps } from '../textbox.spec';
import { TextboxNormal } from '../templates/textbox-normal';
import { Icon } from '../../icon/icon.spec';
import { TextButton } from '../../button/templates/text-button';

const states = Textbox.states;
const defaults = Textbox.defaultOptions;
const options = Textbox.options;
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
    title: '`Clear` Button'
  }
];
const variants = [];

export const TextboxDemo = (
  props: KendoTextboxProps & {
    modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
  }
) => {
  const { modifiers: mods, ...other } = props;

  let additionalProps: KendoTextboxProps = {};

  Object.keys(mods || {}).forEach((modifier) => {
    switch (modifier) {
      case 'prefix':
        additionalProps.prefix = mods?.[modifier] ? <Icon icon="lock" /> : undefined;
        break;
      case 'suffix':
        additionalProps.suffix = mods?.[modifier] ? <TextButton size={other.size} fillMode="clear">Send</TextButton> : undefined;
        break;
      case 'clear-button':
        additionalProps.showClearButton = mods?.[modifier];
        break;
      default:
        break;
    }
  });

  return (
    <TextboxNormal value="Value" style={{ width: 300 }} {...other} {...additionalProps} />
  );
}


TextboxDemo.options = options;
TextboxDemo.states = states;
TextboxDemo.variants = variants;
TextboxDemo.defaultOptions = defaults;
TextboxDemo.modifiers = modifiers;

export default TextboxDemo;

