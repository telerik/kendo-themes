import { OneTimePasswordNormal } from '../templates/otp-normal';
import { OneTimePasswordNoSpace } from '../templates/otp-no-space';
import { OneTimePasswordGroups } from '../templates/otp-groups';
import { OneTimePasswordGroupsNoSpace } from '../templates/otp-groups-no-space';
import { Textbox } from '../../textbox/textbox.spec';

const options = Textbox.options;
const states = Textbox.states;
const defaults = {
  ...Textbox.defaultOptions,
  variant: 'normal',
};

const variants = [
  {
    name: 'normal',
    title: 'Normal',
  },
  {
    name: 'grouping',
    title: 'Grouping',
  },
];

const modifiers = [
  {
    name: 'no-space',
    title: 'No Space',
  }
];

export const OtpDemo = (
  props: { variant?: (typeof variants)[number]['name'] } & {
    modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
  }
) => {
  const { variant, modifiers: mods, ...other } = { ...defaults, ...props };

  let hasSpace = true;

  Object.keys(mods || {}).forEach((modifier) => {
    switch (modifier) {
      case 'no-space': {
        hasSpace = mods?.[modifier] ? false : true;
      }
        return;
    }
  });

  switch (variant) {
    case 'grouping':
      return (
        hasSpace ? (<OneTimePasswordGroups {...other} />) : (<OneTimePasswordGroupsNoSpace {...other} />)
      );
    case 'normal':
    default:
      return (
        hasSpace ? (<OneTimePasswordNormal {...other} />) : (<OneTimePasswordNoSpace {...other} />)
      );
  }
}


OtpDemo.options = options;
OtpDemo.states = states;
OtpDemo.variants = variants;
OtpDemo.defaultOptions = defaults;
OtpDemo.modifiers = modifiers;

export default OtpDemo;

