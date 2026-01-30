import { Loader, KendoLoaderProps } from '../loader.spec';

const options = Loader.options;
const states = Loader.states;
const defaults = {
  ...Loader.defaultOptions,
  variant: 'infinite-spinner',
};
const variants = [
  {
    name: 'infinite-spinner',
    title: 'Infinite',
  },
  {
    name: 'pulsing',
    title: 'Pulsing',
  },
  {
    name: 'converging-spinner',
    title: 'Converging',
  },
];
const modifiers = [];

export const LoaderDemo = (props: KendoLoaderProps & { variant?: (typeof variants)[number]['name'] }) => {
  const { variant, ...other } = props;
  switch (variant) {
    case 'pulsing':
      return (
        <Loader animation="pulsing" {...other} />
      );
    case 'converging-spinner':
      return (
        <Loader animation="converging-spinner" {...other} />
      );
    case 'infinite-spinner':
    default:
      return (
        <Loader animation="infinite-spinner" {...other} />
      );
  }
}


LoaderDemo.options = options;
LoaderDemo.states = states;
LoaderDemo.variants = variants;
LoaderDemo.defaultOptions = defaults;
LoaderDemo.modifiers = modifiers;

export default LoaderDemo;

