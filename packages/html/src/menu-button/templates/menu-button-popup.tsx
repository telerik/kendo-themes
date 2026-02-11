import MenuButton from "../menu-button.spec";
import { MenuList } from '../../menu/menu-list.spec';
import { MenuListItem } from '../../menu/menu-list-item.spec';
import { Popup } from '../../popup/popup.spec';

export const MenuButtonPopup = (props) => (
    <>
        <MenuButton {...props}>button</MenuButton>
        <Popup className="k-menu-popup">
            <MenuList>
                <MenuListItem first text="Menu Item"></MenuListItem>
                <MenuListItem text="Menu Item"></MenuListItem>
                <MenuListItem last text="Menu Item"></MenuListItem>
            </MenuList>
        </Popup>
    </>
);
