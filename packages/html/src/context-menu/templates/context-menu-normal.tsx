import { ContextMenu } from "..";
import { MenuListItem } from "../..";

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
