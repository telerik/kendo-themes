import MenuButton from "../menu-button.spec";
import { MenuList, MenuListItem } from '../../menu';
import { Popup } from '../../popup';
import { nextId } from '../../misc';

export const MenuButtonPopup = (props) => {
    const listId = nextId('menu-group');
    return (
        <>
            <MenuButton expanded aria-controls={listId} {...props}>button</MenuButton>
            <Popup className="k-menu-popup">
                <MenuList id={listId} role="list">
                    <MenuListItem first text="Menu Item" role="listitem"></MenuListItem>
                    <MenuListItem text="Menu Item" role="listitem"></MenuListItem>
                    <MenuListItem last text="Menu Item" role="listitem"></MenuListItem>
                </MenuList>
            </Popup>
        </>
    );
};
