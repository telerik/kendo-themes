import { Menu } from '../menu.spec';
import { MenuItem } from '../menu-item.spec';
import { MenuList } from '../menu-list.spec';
import { MenuListItem } from '../menu-list-item.spec';
import { Popup } from '../../popup';

export const MenuListItemActions = (props: any) => (
    <Menu
        popup={
            <Popup className="k-menu-popup" offset={{ left: "90px", top: "auto" }}>
                <MenuList id="submenu-popup-1">
                    <MenuListItem text="Copy" actions={<kbd>Ctrl+C</kbd>} />
                    <MenuListItem text="Paste" actions={<kbd>Ctrl+V</kbd>} />
                    <MenuListItem text="More actions" showArrow actions={<kbd>→</kbd>} />
                </MenuList>
            </Popup>
        }
        children={
            <>
                <MenuItem text="File" />
                <MenuItem text="Edit" showArrow arrowIconName="chevron-down" expanded aria-controls="submenu-popup-1" />
                <MenuItem text="View" />
                <MenuItem text="Help" />
            </>
        }
        {...props}
    />
);
