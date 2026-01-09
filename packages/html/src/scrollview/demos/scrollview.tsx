import { ScrollView, KendoScrollViewProps } from '../scrollview.spec';
import { ScrollViewNormal } from '../templates/scrollview-normal';

const options = ScrollView.options;
const states = ScrollView.states;
const defaults = {
  ...ScrollView.defaultOptions,
  variant: 'normal',
};

const modifiers = [
  {
    name: 'pageable',
    title: 'Pageable',
  },
  {
    name: 'arrows',
    title: 'Show arrows',
  },
];

const variants = [
  {
    name: 'normal',
    title: 'Normal',
  },
  {
    name: 'light',
    title: 'Light',
  },
  {
    name: 'dark',
    title: 'Dark',
  },
];

export const ScrollviewDemo = (
  props: KendoScrollViewProps & { variant?: (typeof variants)[number]['name'] } & {
    modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
  }
) => {
  const { modifiers: mods, variant, ...other } = props;

  let additionalProps: any = {};

  Object.keys(mods || {}).forEach((modifier) => {
    switch (modifier) {
      case 'pageable':
        additionalProps.pager = mods?.[modifier] ? true : false;
        break;
      case 'arrows':
        additionalProps.arrows = mods?.[modifier] ? true : false;
        break;
      default:
        break;
    }
  });

  switch (variant) {
    case 'light':
    case 'dark':
      return (
        <ScrollViewNormal
          className="k-bg-primary-subtle"
          style={{ width: '467px', height: '307px' }}
          {...other}
          {...additionalProps}
          mode={variant}
        />
      );
    case 'normal':
    default:
      return (
        <ScrollViewNormal
          className="k-bg-primary-subtle"
          style={{ width: '467px', height: '307px' }}
          {...other}
          {...additionalProps}
        />
      );
  }
}


ScrollviewDemo.options = options;
ScrollviewDemo.states = states;
ScrollviewDemo.variants = variants;
ScrollviewDemo.defaultOptions = defaults;
ScrollviewDemo.modifiers = modifiers;

export default ScrollviewDemo;

