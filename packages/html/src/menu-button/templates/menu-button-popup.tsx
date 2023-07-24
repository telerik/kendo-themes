import MenuButton from "../menu-button.spec";
import { MenuList, MenuItem } from '../../menu';

export const MenuButtonPopup = (props) => (
    <MenuButton
        children="button"
        opened={true}
        popup={
            <MenuList>
                <MenuItem text="Menu Item"></MenuItem>
                <MenuItem text="Menu Item"></MenuItem>
                <MenuItem text="Menu Item"></MenuItem>
            </MenuList>
        }
        {...props}
    />
);