import { Menu, MenuItem } from "..";

export const MenuScrollable = (props) => (
        <Menu scrollable children={
            <>
                <MenuItem first text="Item 1"></MenuItem>
                <MenuItem text="Item 2"></MenuItem>
                <MenuItem text="Item 3"></MenuItem>
                <MenuItem text="Item 4"></MenuItem>
                <MenuItem last text="Item 5"></MenuItem>
            </>
        } {...props}/>
);
