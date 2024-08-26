import { SplitButton } from "../split-button.spec";
import { MenuList, MenuListItem } from '../../menu';

export const SplitButtonPopup = (props) => (
    <SplitButton
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

export default SplitButtonPopup;
