import { Pager, KendoPagerProps } from '../pager.spec';

const options = Pager.options;
const states = Pager.states;
const defaults = {
  ...Pager.defaultOptions,
  variant: 'numeric',
};
const variants = [
  {
    name: 'numeric',
    title: 'Numeric',
  },
  {
    name: 'input',
    title: 'Input',
  },
];
const modifiers = [];

export const PagerDemo = (
  props: KendoPagerProps & { variant?: (typeof variants)[number]['name'] }
) => {
  const { variant, ...other } = props;

  switch (variant) {
    //TODO: Add the respective Templates to Pager element (PagerInput, PagerNumeric)
    case 'input':
      return <Pager {...other} type="input" />;
    case 'numeric':
    default:
      return <Pager {...other} type="numeric" />;
  }
}


PagerDemo.options = options;
PagerDemo.states = states;
PagerDemo.variants = variants;
PagerDemo.defaultOptions = defaults;
PagerDemo.modifiers = modifiers;

export default PagerDemo;

