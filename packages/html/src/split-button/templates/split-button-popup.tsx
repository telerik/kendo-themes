import { SplitButton } from "../split-button.spec";
import { MenuList, MenuListItem } from '../../menu';

export const SplitButtonPopup = (props) => {
    const { id = 'split-button', ...other } = props;

    return (
        <SplitButton
            id={id}
            children="button"
            opened={true}
            popup={
                <MenuList id={`${id}-menu`} role="list">
                    <MenuListItem first text="Menu Item" role="listitem"></MenuListItem>
                    <MenuListItem text="Menu Item" role="listitem"></MenuListItem>
                    <MenuListItem last text="Menu Item" role="listitem"></MenuListItem>
                </MenuList>
            }
            {...other}
        />
    );
};
