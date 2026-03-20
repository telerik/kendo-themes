import { MenuButton } from '../menu-button.spec';
import { Button, KendoButtonProps } from '../../button/button.spec';
import { MenuList } from '../../menu/menu-list.spec';
import { MenuListItem } from '../../menu/menu-list-item.spec';
import { Popup } from '../../popup/popup.spec';
import { ReactElement } from 'react';

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
    <Popup className="k-menu-popup">
      <MenuList size={other.size}>
      <MenuListItem first text="Menu Item"></MenuListItem>
      <MenuListItem text="Menu Item"></MenuListItem>
      <MenuListItem last text="Menu Item"></MenuListItem>
      </MenuList>
    </Popup>
  );

  let button: ReactElement;
  switch (variant) {
    case 'icon-only':
      button = (
        <div>
          <MenuButton
            {...other}
            {...additionalProps}
            icon="star"
          />
        </div>
      );

      break;
    case 'icon-and-text':
      button = (
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

      break;
    case 'text':
    default:
      button = (
        <div>
          <MenuButton
            {...other}
            {...additionalProps}
          >
            Dropdown Button
          </MenuButton>
        </div>
      );

      break;
  }

  return (
    <>
      {button}
      {mods?.opened && popup}
    </>
  );
};


MenuButtonDemo.options = options;
MenuButtonDemo.states = states;
MenuButtonDemo.variants = variants;
MenuButtonDemo.defaultOptions = defaults;
MenuButtonDemo.modifiers = modifiers;
MenuButtonDemo.className = MenuButton.className;

export default MenuButtonDemo;

