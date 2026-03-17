import { ButtonGroup, KendoButtonGroupProps } from '../button-group.spec';
import { Button } from '../../button';

const options = {
  ...Button.options,
  ...ButtonGroup.options,
};

const states = Button.states;
const defaults = {
  ...Button.defaultOptions,
  ...ButtonGroup.defaultOptions,
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
  props: KendoButtonGroupProps & { variant?: (typeof variants)[number]['name'], className?: string }
) => {
  const { variant, className, ...other } = props;

  if (variant === 'icon-button') {
    return (
      <ButtonGroup fillMode={other.fillMode} className={className}>
        <Button {...other} icon="star"></Button>
        <Button {...other} icon="star"></Button>
        <Button {...other} icon="star"></Button>
      </ButtonGroup>
    );
  } else if (variant === 'icon-text-button') {
    return (
      <ButtonGroup fillMode={other.fillMode} className={className}>
        <Button {...other} icon="star">First</Button>
        <Button {...other} icon="star">Middle</Button>
        <Button {...other} icon="star">Last</Button>
      </ButtonGroup>
    );
  }

  return (
    <ButtonGroup fillMode={other.fillMode} className={className}>
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
ButtonGroupDemo.className = ButtonGroup.className;

export default ButtonGroupDemo;

