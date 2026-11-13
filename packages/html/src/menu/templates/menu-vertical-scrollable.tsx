import { Menu, MenuItem } from "..";

export const MenuVerticalScrollable = (props) => (
    <Menu scrollable orientation="vertical" children={
            <>
                <MenuItem text="Item 1"></MenuItem>
                <MenuItem text="Item 2"></MenuItem>
                <MenuItem text="Item 3"></MenuItem>
                <MenuItem text="Item 4"></MenuItem>
                <MenuItem text="Item 5"></MenuItem>
            </>
    } {...props}/>
);
