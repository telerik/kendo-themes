import { Textarea, KendoTextareaProps } from '../textarea.spec';
import { Icon } from '../../icon/icon.spec';

const options = Textarea.options;
const states = Textarea.states;
const defaults = {
  ...Textarea.defaultOptions,
  variant: 'vertical',
};

const variants = [
  {
    name: 'vertical',
    title: 'Flow vertical',
  },
  {
    name: 'horizontal',
    title: 'Flow horizontal',
  }
];

const modifiers = [
  {
    name: 'prefix',
    title: 'Prefix',
  },
  {
    name: 'suffix',
    title: 'Suffix',
  },
];

export const TextareaDemo = (
  props: KendoTextareaProps & { variant?: (typeof variants)[number]['name'] } &
  { modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean }; }
) => {
  const { variant, modifiers: mods, ...other } = { ...defaults, ...props };

  let additionalProps: KendoTextareaProps = {
    resize: "y"
  };

  Object.keys(mods || {}).forEach((modifier) => {
    switch (modifier) {
      case 'prefix':
        additionalProps.prefix = mods?.[modifier] ? <Icon icon="comment" /> : undefined;
        break;
      case 'suffix':
        additionalProps.suffix = mods?.[modifier] ? <Icon icon="volume-up" /> : undefined;
        break;
      default:
        break;
    }
  });

  switch (variant) {
    case 'horizontal':
      return (
        <Textarea flow="horizontal" placeholder="Enter text..." style={{ width: 300 }} {...other} {...additionalProps} />
      );
    case 'vertical':
    default:
      return (
        <Textarea flow="vertical" placeholder="Enter text..." style={{ width: 300 }} {...other} {...additionalProps} />
      );
  }
}


TextareaDemo.options = options;
TextareaDemo.states = states;
TextareaDemo.variants = variants;
TextareaDemo.defaultOptions = defaults;
TextareaDemo.modifiers = modifiers;

export default TextareaDemo;

