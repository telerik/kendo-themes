import { Menu, KendoMenuProps } from '../menu.spec';
import { MenuList } from '../menu-list.spec';
import { MenuListItem } from '../menu-list-item.spec';
import { MenuSeparator } from '../menu-separator.spec';
import { MenuNormal } from '../templates/menu-normal';
import { Popup } from '../../popup';

const options = {
    ...Menu.options,
    scrollable: { type: 'boolean' },
};
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
        name: 'opened',
        title: 'Opened',
    },
];

export const MenuDemo = (
    props: KendoMenuProps & { variant?: (typeof variants)[number]['name'] } & {
        modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
    }
) => {
    const { variant, modifiers: mods, ...other } = { ...defaults, ...props };

    let additionalProps: any = {};
    const popupOffset = variant === 'vertical'
        ? { left: "200px", top: "30px" }
        : { left: "90px", top: "auto" };

    Object.keys(mods || {}).forEach((modifier) => {
        switch (modifier) {
            case 'opened':
                additionalProps.opened = mods?.[modifier] ? true : false;
                additionalProps.popup = mods?.[modifier] ? (
                    <Popup className="k-menu-popup" offset={popupOffset}>
                        <MenuList>
                            <MenuListItem text="Item 1"></MenuListItem>
                            <MenuListItem text="Item 2"></MenuListItem>
                            <MenuSeparator></MenuSeparator>
                            <MenuListItem text="Item 3"></MenuListItem>
                        </MenuList>
                    </Popup>) : null;

                break;
        }
    });

    switch (variant) {
        case 'vertical':
            return (
                <MenuNormal {...other} {...additionalProps} orientation="vertical" style={{ width: "200px" }}></MenuNormal>
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
MenuDemo.className = Menu.className;

export default MenuDemo;

