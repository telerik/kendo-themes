import MenuButton from "../menu-button.spec";
import { MenuList, MenuListItem } from '../../menu';

export const MenuButtonPopup = (props) => (
    <MenuButton
        children="button"
        opened={true}
        popup={
            <MenuList>
                <MenuListItem text="Menu Item"></MenuListItem>
                <MenuListItem text="Menu Item"></MenuListItem>
                <MenuListItem text="Menu Item"></MenuListItem>
            </MenuList>
        }
        {...props}
    />
);
