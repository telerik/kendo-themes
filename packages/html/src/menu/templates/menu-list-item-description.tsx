import { Menu } from '../menu.spec';
import { MenuItem } from '../menu-item.spec';
import { MenuList } from '../menu-list.spec';
import { MenuListItem } from '../menu-list-item.spec';
import { Popup } from '../../popup';

export const MenuListItemDescription = (props: any) => (
    <Menu
        popup={
            <Popup className="k-menu-popup" offset={{ left: "90px", top: "auto" }}>
                <MenuList id="submenu-popup-1">
                    <MenuListItem text="New document" description="Create a blank document" />
                    <MenuListItem text="Open" description="Browse your files" />
                    <MenuListItem text="Recent files" description="View recently opened files" />
                </MenuList>
            </Popup>
        }
        children={
            <>
                <MenuItem text="Home" />
                <MenuItem text="Documents" showArrow arrowIconName="chevron-down" expanded aria-controls="submenu-popup-1" />
                <MenuItem text="Settings" />
                <MenuItem text="Help" />
            </>
        }
        {...props}
    />
);
