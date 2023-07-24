import { SplitButton } from "../split-button.spec";
import { MenuList, MenuItem } from '../../menu';

export const SplitButtonPopup = (props) => (
    <SplitButton
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
