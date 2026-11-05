import { Menu } from '../menu.spec';
import { MenuItem } from '../menu-item.spec';
import { MenuListItem } from '../menu-list-item.spec';
import { MenuList } from '../menu-list.spec';
import { Popup } from '../../popup';

export const MenuListItemIcons = (props: any) => (
    <Menu
        popup={
            <Popup className="k-menu-popup" offset={{ left: "90px", top: "auto" }}>
                <MenuList id="submenu-popup-1">
                    <MenuListItem icon="folder" text="Icon before text" />
                    <MenuListItem icon="folder" iconPosition="after" text="Icon after text" />
                </MenuList>
            </Popup>
        }
        children={
            <>
                <MenuItem text="Home" />
                <MenuItem text="Items" showArrow arrowIconName="chevron-down" expanded aria-controls="submenu-popup-1" />
                <MenuItem text="View" />
                <MenuItem text="Help" />
            </>
        }
        {...props}
    />
);
