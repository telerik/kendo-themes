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
                <MenuList id={listId} role="list">
                    <MenuListItem first text="Menu Item" role="listitem"></MenuListItem>
                    <MenuListItem text="Menu Item" role="listitem"></MenuListItem>
                    <MenuListItem last text="Menu Item" role="listitem"></MenuListItem>
                </MenuList>
            }
            {...props}
        />
    );
};
