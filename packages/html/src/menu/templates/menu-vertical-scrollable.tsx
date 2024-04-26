import { Menu, MenuItem } from "..";
import { Button } from "../../button";

export const MenuVerticalScrollable = ({ wrapperStyles, ...other }: any) => (
    <div className="k-menu-scroll-wrapper" style={wrapperStyles}>
        <Menu orientation="vertical" children={
            <>
                <MenuItem first text="Item 1"></MenuItem>
                <MenuItem showArrow text="Item 2"></MenuItem>
                <MenuItem showArrow text="Item 3"></MenuItem>
                <MenuItem text="Item 4"></MenuItem>
                <MenuItem text="Item 5"></MenuItem>
            </>
        } {...other}/>
        <Button icon="caret-alt-up" className="k-menu-scroll-button k-scroll-up"></Button>
        <Button icon="caret-alt-down" className="k-menu-scroll-button k-scroll-down"></Button>
    </div>
);
