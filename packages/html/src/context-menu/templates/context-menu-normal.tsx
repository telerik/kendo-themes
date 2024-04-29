import { ContextMenu } from "..";
import { MenuListItem } from "../..";

export const ContextMenuNormal = (props) => (
    <ContextMenu
        children={
            <>
                <MenuListItem text="Item 1" showArrow />
                <MenuListItem text="Item 2" />
                <MenuListItem text="Item 3" />
            </>
        }
        {...props}
    />
);
