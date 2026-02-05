import { Menu, KendoMenuProps } from '../menu.spec';
import { MenuNormal } from '../templates/menu-normal';

const options = Menu.options;
const states = Menu.states;
const defaults = {
  ...Menu.defaultOptions,
  variant: 'horizontal',
};

const variants = [
    {
        name: 'horizontal',
        title: 'Horizontal',
    },
    {
        name: 'vertical',
        title: 'Vertical',
    },
];

const modifiers = [
    {
        name: 'scrollable',
        title: 'Scrollable',
    },
];

export const MenuDemo = (
    props: KendoMenuProps & { variant?: (typeof variants)[number]['name'] } & {
        modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
    }
) => {
    const { variant, modifiers: mods, ...other } = { ...defaults, ...props };

    let additionalProps: any = {};

    Object.keys(mods || {}).forEach((modifier) => {
        switch (modifier) {
            case 'scrollable': {
                additionalProps.scrollable = mods?.[modifier] ? true : false;
            }
        }
    });

    switch (variant) {
        case 'vertical':
            return (
                <MenuNormal {...other} {...additionalProps} orientation="vertical" style={{width: "200px"}}></MenuNormal>
            );
        case 'horizontal':
        default:
            return (
                <MenuNormal {...other} {...additionalProps}></MenuNormal>
            );
    }
}


MenuDemo.options = options;
MenuDemo.states = states;
MenuDemo.variants = variants;
MenuDemo.defaultOptions = defaults;
MenuDemo.modifiers = modifiers;

export default MenuDemo;

