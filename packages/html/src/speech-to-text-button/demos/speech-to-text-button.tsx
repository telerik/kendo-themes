import { SpeechToTextButton } from '../speech-to-text-button.spec';
import { Button, KendoButtonProps } from '../../button/button.spec';

const states = Button.states;
const defaults = {
  ...Button.defaultOptions,
  variant: 'normal',
};

const options = {
  ...Button.options,
  // Remove Clear and Link FillModes for the SpeechToText Button
  fillMode: Button.options.fillMode.filter((mode: string) => mode !== 'clear' && mode !== 'link'),
};


const modifiers = [
];

const variants = [
  {
    name: 'normal',
    title: 'Normal',
  },
  {
    name: 'listening',
    title: 'Listening',
  },
];

export const SpeechToTextButtonDemo = (
  props: KendoButtonProps & {
    variants?: { [key: (typeof variants)[number]['name']]: boolean };
  }
) => {
  const { variant, ...other } = { ...defaults, ...props };
  let additionalProps: any = {};

  if (variant === 'listening') {
    additionalProps.listening = true;
  }


  return <SpeechToTextButton {...other} {...additionalProps} />;
}


SpeechToTextButtonDemo.options = options;
SpeechToTextButtonDemo.states = states;
SpeechToTextButtonDemo.variants = variants;
SpeechToTextButtonDemo.defaultOptions = defaults;
SpeechToTextButtonDemo.modifiers = modifiers;

export default SpeechToTextButtonDemo;
