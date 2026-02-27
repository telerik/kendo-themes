import { ContextMenu } from "../context-menu.spec";
import { MenuListItem } from "../../menu/menu-list-item.spec";
import { MenuList } from "../../menu/menu-list.spec";
import { Popup } from "../../popup";

export const ContextMenuExpanded = (props) => (
    <>
        <ContextMenu
            children={[
                <MenuListItem first key="menu-item-1" text="Item 1" focus />,
                <MenuListItem key="menu-item-2" text="Item 2" showArrow expanded aria-controls="ctx-submenu-1" />,
                <MenuListItem key="menu-item-3" text="Item 3" disabled />,
                <MenuListItem last key="menu-item-4" text="Item 4" />
            ]}
            {...props}
        />
        <Popup className="k-menu-popup" offset={{ left: "90px", top: "auto" }}>
            <MenuList id="ctx-submenu-1">
                <MenuListItem first text="Sub item 1" />
                <MenuListItem last text="Sub item 2" />
            </MenuList>
        </Popup>
    </>
);
