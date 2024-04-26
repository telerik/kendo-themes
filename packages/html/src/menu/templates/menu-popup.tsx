import { Menu, MenuItem, MenuList, MenuListItem } from "..";
import { Popup } from "../../popup";

export const MenuPopup = ({ ...other }: any) => (
    <Menu children={
        <>
            <MenuItem first text="Item 1"></MenuItem>
            <MenuItem showArrow arrowIconName="caret-alt-down" text="Item 2"></MenuItem>
            <MenuItem showArrow arrowIconName="caret-alt-down" text="Item 3"
                popup={
                    <>
                        <Popup className="k-menu-popup" positionMode="fixed">
                            <MenuList>
                                <MenuListItem first text="Sub item 1"></MenuListItem>
                                <MenuListItem text="Sub item 2"showArrow ></MenuListItem>
                                <MenuListItem last text="Sub item 3"></MenuListItem>
                            </MenuList>
                        </Popup>
                    </>
                }
            ></MenuItem>
            <MenuItem text="Item 4"></MenuItem>
            <MenuItem text="Item 5"></MenuItem>
        </>
    }
    {...other}
    />
);
