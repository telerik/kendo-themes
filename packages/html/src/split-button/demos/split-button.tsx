import { SplitButton, KendoSplitButtonProps } from '../split-button.spec';
import { MenuList, MenuListItem } from '../../menu';

const states = SplitButton.states;
const defaults = {
  ...SplitButton.defaultOptions,
  variant: 'text',
};
const options = SplitButton.options;
const variants = [
  {
    name: 'icon-only',
    title: 'Icon Only',
  },
  {
    name: 'icon-and-text',
    title: 'Icon & Text',
  },
  {
    name: 'text',
    title: 'Text',
  },
];

const modifiers = [
  {
    name: 'opened',
    title: 'Opened',
  },
];

export const SplitButtonDemo = (
  props: KendoSplitButtonProps & { variant?: (typeof variants)[number]['name'] } &
  { modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean } }
) => {
  const { variant, modifiers: mods, ...other } = { ...defaults, ...props };

  let additionalProps: any = {};

  const popup = (
    <MenuList size={other.size}>
      <MenuListItem first text="Menu Item"></MenuListItem>
      <MenuListItem text="Menu Item"></MenuListItem>
      <MenuListItem last text="Menu Item"></MenuListItem>
    </MenuList>
  );

  Object.keys(mods || {}).forEach((modifier) => {
    switch (modifier) {
      case 'opened':
        additionalProps.opened = mods?.[modifier] ? true : false;
        additionalProps.popup = mods?.[modifier] ? popup : '';
        break;
      default:
        break;
    }
  });

  switch (variant) {
    case 'icon-only':
      return (
        <div>
          <SplitButton
            {...other}
            {...additionalProps}
            icon="star"
          />
        </div>
      );
    case 'icon-and-text':
      return (
        <div>
          <SplitButton
            {...other}
            {...additionalProps}
            icon="star"
          >
            Split Button
          </SplitButton>
        </div>

      );
    case 'text':
    default:
      return (
        <div>
          <SplitButton
            {...other}
            {...additionalProps}
          >
            Split Button
          </SplitButton>
        </div>
      );
  }
}


SplitButtonDemo.options = options;
SplitButtonDemo.states = states;
SplitButtonDemo.variants = variants;
SplitButtonDemo.defaultOptions = defaults;
SplitButtonDemo.modifiers = modifiers;

export default SplitButtonDemo;

