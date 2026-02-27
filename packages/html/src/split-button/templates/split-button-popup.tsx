import { SplitButton } from "../split-button.spec";
import { MenuList, MenuListItem } from '../../menu';
import { nextId } from '../../misc';

export const SplitButtonPopup = (props) => {
    const listId = nextId('menu-group');
    return (
        <SplitButton
            children="button"
            opened={true}
            popupId={listId}
            popup={
                <MenuList id={listId}>
                    <MenuListItem first text="Menu Item"></MenuListItem>
                    <MenuListItem text="Menu Item"></MenuListItem>
                    <MenuListItem last text="Menu Item"></MenuListItem>
                </MenuList>
            }
            {...props}
        />
    );
};
