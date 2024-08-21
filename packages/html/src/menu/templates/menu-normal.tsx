import { Menu, MenuItem } from "..";

export const MenuNormal = (props) => (
    <Menu children={
        <>
            <MenuItem first text="Item 1"></MenuItem>
            <MenuItem showArrow arrowIconName="caret-alt-down" text="Item 2"></MenuItem>
            <MenuItem showArrow arrowIconName="caret-alt-down" text="Item 3"></MenuItem>
            <MenuItem text="Item 4"></MenuItem>
            <MenuItem last text="Item 5"></MenuItem>
        </>
    }
    {...props}
    />
);
