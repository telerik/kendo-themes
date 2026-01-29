import MenuButton from "../menu-button.spec";
import { MenuList, MenuListItem } from '../../menu';
import { Popup } from '../../popup';

export const MenuButtonPopup = (props) => {
    const { id = 'menu-button', ...other } = props;

    return (
        <>
            <MenuButton id={id} opened {...other}>button</MenuButton>
            <Popup className="k-menu-popup">
                <MenuList id={`${id}-menu`} role="list">
                    <MenuListItem first text="Menu Item" role="listitem"></MenuListItem>
                    <MenuListItem text="Menu Item" role="listitem"></MenuListItem>
                    <MenuListItem last text="Menu Item" role="listitem"></MenuListItem>
                </MenuList>
            </Popup>
        </>
    );
};
