import { MenuButton } from '../menu-button.spec';
import { Button, KendoButtonProps } from '../../button';
import { MenuList, MenuListItem } from '../../menu';

const states = Button.states;
const defaults = {
  ...Button.defaultOptions,
  variant: 'text',
};
const options = Button.options;
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

export const MenuButtonDemo = (
  props: KendoButtonProps & { variant?: (typeof variants)[number]['name'] } &
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
          <MenuButton
            {...other}
            {...additionalProps}
            icon="star"
          />
        </div>
      );
    case 'icon-and-text':
      return (
        <div>
          <MenuButton
            {...other}
            {...additionalProps}
            icon="star"
          >
            Dropdown Button
          </MenuButton>
        </div>
      );
    case 'text':
    default:
      return (
        <div>
          <MenuButton
            {...other}
            {...additionalProps}
          >
            Dropdown Button
          </MenuButton>
        </div>
      );
  }
}


MenuButtonDemo.options = options;
MenuButtonDemo.states = states;
MenuButtonDemo.variants = variants;
MenuButtonDemo.defaultOptions = defaults;
MenuButtonDemo.modifiers = modifiers;

export default MenuButtonDemo;

