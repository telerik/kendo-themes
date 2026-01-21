import MenuButton from "../menu-button.spec";
import { MenuList, MenuListItem } from '../../menu';
import { Popup } from '../../popup';

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
