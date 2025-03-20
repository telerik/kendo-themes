import { ContextMenu } from "../context-menu.spec";
import { MenuListItem } from "../../menu/menu-list-item.spec";

export const ContextMenuNormal = (props) => (
    <ContextMenu
        children={[
            <MenuListItem first key="menu-item-1" text="Item 1" showArrow />,
            <MenuListItem key="menu-item-2" text="Item 2" />,
            <MenuListItem last key="menu-item-3" text="Item 3" />
        ]}
        {...props}
    />
);
