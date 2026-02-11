import { SplitButton } from "../split-button.spec";
import { MenuList } from '../../menu/menu-list.spec';
import { MenuListItem } from '../../menu/menu-list-item.spec';

export const SplitButtonPopup = (props) => (
    <SplitButton
        children="button"
        opened={true}
        popup={
            <MenuList>
                <MenuListItem first text="Menu Item"></MenuListItem>
                <MenuListItem text="Menu Item"></MenuListItem>
                <MenuListItem last text="Menu Item"></MenuListItem>
            </MenuList>
        }
        {...props}
    />
);
