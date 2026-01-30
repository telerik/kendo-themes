import { Button, KendoButtonProps } from '../button.spec';
import { IconButton } from '../templates/icon-button';
import { IconTextButton } from '../templates/icon-text-button';
import { TextButton } from '../templates/text-button';

const options = Button.options;
const states = Button.states;
const defaults = {
  ...Button.defaultOptions,
  variant: 'text',
};

const variants = [
  {
    name: 'icon-only',
    title: 'Icon Only',
  },
  {
    name: 'icon-and-text',
    title: 'Icon & Text',
  },
  {
    name: 'text',
    title: 'Text',
  },
];

const modifiers: any[] = [];

export const ButtonDemo = (
  props: KendoButtonProps & { variant?: any }) => {
  const { variant, ...other } = props;

  switch (variant) {
    case 'icon-only':
      return <IconButton {...other} icon="star" />

    case 'icon-and-text':
      return <IconTextButton {...other} icon="star" children="Button" />;

    case 'text':
    default:
      return <TextButton {...other} children="Button" />;
  }
}

ButtonDemo.options = options;
ButtonDemo.states = states;
ButtonDemo.variants = variants;
ButtonDemo.defaultOptions = defaults;
ButtonDemo.modifiers = modifiers;

export default ButtonDemo;
