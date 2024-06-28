import { Menu, MenuItem } from "..";

export const MenuVertical = ({ ...other }: any) => (
    <Menu orientation="vertical" children={
        <>
            <MenuItem first text="Item 1"></MenuItem>
            <MenuItem showArrow text="Item 2"></MenuItem>
            <MenuItem showArrow text="Item 3"></MenuItem>
            <MenuItem text="Item 4"></MenuItem>
            <MenuItem text="Item 5"></MenuItem>
        </>
    }
    {...other}
    />
);

export default MenuVertical;
