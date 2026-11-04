import { Menu } from '../menu.spec';
import { MenuItem } from '../menu-item.spec';
import { MenuGroupHeader } from '../menu-group-header';
import { MenuListItem } from '../menu-list-item.spec';
import { MenuSeparator } from '../menu-separator.spec';
import { MenuList } from '../menu-list.spec';
import { Popup } from '../../popup';

export const MenuListItemGrouping = (props: any) => (
    <Menu
        popup={
            <Popup className="k-menu-popup" offset={{ left: "90px", top: "auto" }}>
                <MenuList id="submenu-popup-1">
                    <MenuGroupHeader>File</MenuGroupHeader>
                    <MenuListItem text="New" />
                    <MenuListItem text="Open" />
                    <MenuSeparator />
                    <MenuGroupHeader>Share</MenuGroupHeader>
                    <MenuListItem text="Copy link" />
                    <MenuListItem text="Invite people" />
                </MenuList>
            </Popup>
        }
        children={
            <>
                <MenuItem text="Home" />
                <MenuItem text="File" showArrow arrowIconName="chevron-down" expanded aria-controls="submenu-popup-1" />
                <MenuItem text="View" />
                <MenuItem text="Help" />
            </>
        }
        {...props}
    />
);
