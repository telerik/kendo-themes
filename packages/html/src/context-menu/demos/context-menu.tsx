import { ContextMenuNormal } from '../templates/context-menu-normal';
import { Menu, KendoMenuProps } from '../../menu/menu.spec';
import { MenuListItem } from '../../menu/menu-list-item.spec';
import { MenuSeparator } from '../../menu/menu-separator.spec';

const options = Menu.options;
const states = Menu.states;
const defaults = {
  ...Menu.defaultOptions,
  variant: 'normal',
};

const variants = [
    {
        name: 'normal',
        title: 'Normal',
    },
    {
        name: 'separators',
        title: 'With separator',
    },
];
const modifiers = [];

export const ContextMenuDemo = (
    props: KendoMenuProps & { variant?: (typeof variants)[number]['name'] }
) => {
    const { variant, ...other } = { ...defaults, ...props };

    switch (variant) {
        case 'separators':
            return (
                <ContextMenuNormal {...other} style={{width: "130px"}}>
                    <MenuListItem first key="menu-item-1" text="Item 1" showArrow />
                    <MenuSeparator></MenuSeparator>
                    <MenuListItem key="menu-item-2" text="Item 2" />
                    <MenuListItem last key="menu-item-3" text="Item 3" />
                </ContextMenuNormal>
            );
        case 'normal':
        default:
            return (
                <ContextMenuNormal {...other} style={{width: "130px"}}></ContextMenuNormal>
            );
    }
}


ContextMenuDemo.options = options;
ContextMenuDemo.states = states;
ContextMenuDemo.variants = variants;
ContextMenuDemo.defaultOptions = defaults;
ContextMenuDemo.modifiers = modifiers;

export default ContextMenuDemo;

