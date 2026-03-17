import { DateInput, KendoDateInputProps } from '../dateinput.spec';
import { DateInputNormal } from '../templates/dateinput-normal';

const options = DateInput.options;
const states = DateInput.states;
const defaults = DateInput.defaultOptions;
const modifiers = [
  {
    name: 'spin-button',
    title: '`Spin` Button',
  },
];
const variants = [];

export const DateinputDemo = (
  props: KendoDateInputProps & {
    modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
  }
) => {
  const { modifiers: mods, ...other } = props;

  let additionalProps: any = {};

  Object.keys(mods || {}).forEach((modifier) => {
    switch (modifier) {
      case 'spin-button':
        additionalProps.showSpinButton = mods?.[modifier] ? true : false;
        break;
    }
  });

  return (
    <DateInputNormal value={'2/04/2021'} style={{ width: "300px" }} {...other} {...additionalProps} />
  );
}


DateinputDemo.options = options;
DateinputDemo.states = states;
DateinputDemo.variants = variants;
DateinputDemo.defaultOptions = defaults;
DateinputDemo.modifiers = modifiers;
DateinputDemo.className = DateInput.className;

export default DateinputDemo;

