import { Menu, MenuItem, MenuList, MenuListItem } from "..";
import { Popup } from "../../popup";

export const MenuPopup = (props) => (
    <Menu  popup={
        <Popup className="k-menu-popup" offset={{ left: "90px", top: "auto" }}>
            <MenuList>
                <MenuListItem first text="Sub item 1"></MenuListItem>
                <MenuListItem text="Sub item 2" showArrow ></MenuListItem>
                <MenuListItem last text="Sub item 3"></MenuListItem>
            </MenuList>
        </Popup>
    } children={
        <>
            <MenuItem first text="Item 1"></MenuItem>
            <MenuItem showArrow arrowIconName="caret-alt-down" text="Item 2"></MenuItem>
            <MenuItem showArrow arrowIconName="caret-alt-down" text="Item 3"></MenuItem>
            <MenuItem text="Item 4"></MenuItem>
            <MenuItem last text="Item 5"></MenuItem>
        </>
    }
    {...props}
    />
);
