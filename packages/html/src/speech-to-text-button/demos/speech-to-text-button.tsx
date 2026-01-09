import { SpeechToTextButton } from '../speech-to-text-button.spec';
import { Button, KendoButtonProps } from '../../button';

const states = Button.states;
const defaults = Button.defaultOptions;
const options = {
  ...Button.options,
  // Remove Clear and Link FillModes for the SpeechToText Button
  fillMode: Button.options.fillMode.filter((mode: string) => mode !== 'clear' && mode !== 'link'),
};


const modifiers = [
  {
    name: 'listening',
    title: 'Listening',
  },
];
const variants = [];

export const SpeechToTextButtonDemo = (
  props: KendoButtonProps & {
    modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
  }
) => {
  const { modifiers: mods, ...other } = { ...defaults, ...props };
  let additionalProps: any = {};

  Object.keys(mods || {}).forEach((modifier) => {
    switch (modifier) {
      case 'listening':
        additionalProps.listening = mods?.[modifier] ? true : false;
        break;
      default:
        break;
    }
  });

  return <SpeechToTextButton {...other} {...additionalProps} />;
}


SpeechToTextButtonDemo.options = options;
SpeechToTextButtonDemo.states = states;
SpeechToTextButtonDemo.variants = variants;
SpeechToTextButtonDemo.defaultOptions = defaults;
SpeechToTextButtonDemo.modifiers = modifiers;

export default SpeechToTextButtonDemo;

