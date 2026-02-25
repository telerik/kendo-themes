import { ButtonGroup } from '../button-group.spec';
import { Button, KendoButtonProps } from '../../button';

const options = Button.options;
const states = Button.states;
const defaults = {
  ...Button.defaultOptions,
  variant: 'text-button',
};

const variants = [
  {
    name: 'icon-button',
    title: 'Icon Only',
  },
  {
    name: 'text-button',
    title: 'Text',
  },
  {
    name: 'icon-text-button',
    title: 'Icon Text',
  },
];
const modifiers = [];

export const ButtonGroupDemo = (
  props: KendoButtonProps & { variant?: (typeof variants)[number]['name'] }
) => {
  const { variant, ...other } = props;

  if (variant === 'icon-button') {
    return (
      <ButtonGroup>
        <Button {...other} icon="star"></Button>
        <Button {...other} icon="star"></Button>
        <Button {...other} icon="star"></Button>
      </ButtonGroup>
    );
  } else if (variant === 'icon-text-button') {
    return (
      <ButtonGroup>
        <Button {...other} icon="star">First</Button>
        <Button {...other} icon="star">Middle</Button>
        <Button {...other} icon="star">Last</Button>
      </ButtonGroup>
    );
  }

  return (
    <ButtonGroup>
      <Button {...other}>First</Button>
      <Button {...other}>Middle</Button>
      <Button {...other}>Last</Button>
    </ButtonGroup>
  );
}


ButtonGroupDemo.options = options;
ButtonGroupDemo.states = states;
ButtonGroupDemo.variants = variants;
ButtonGroupDemo.defaultOptions = defaults;
ButtonGroupDemo.modifiers = modifiers;

export default ButtonGroupDemo;

