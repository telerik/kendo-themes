import { Switch, KendoSwitchProps } from '../switch.spec';

const options = Switch.options;
const states = Switch.states;
const defaults = {
  ...Switch.defaultOptions,
  variant: 'on',
};

const variants = [
  {
    name: 'on',
    title: 'On'
  },
  {
    name: 'off',
    title: 'Off',
  }
];
const modifiers = [];

export const SwitchDemo = (
  props: KendoSwitchProps & { variant?: (typeof variants)[number]['name'] }
) => {

  const { variant, ...other } = props;

  switch (variant) {
    case 'off':
      return <Switch checked={false} onLabel={'On'} offLabel={'Off'} {...other} />;
    case 'on':
    default:
      return <Switch checked={true} onLabel={'On'} offLabel={'Off'} {...other} />;
  }
}


SwitchDemo.options = options;
SwitchDemo.states = states;
SwitchDemo.variants = variants;
SwitchDemo.defaultOptions = defaults;
SwitchDemo.modifiers = modifiers;
SwitchDemo.className = Switch.className;

export default SwitchDemo;

