import { Menu, MenuItem } from "..";
import { Button } from "../../button";

export const MenuScrollable = ({ wrapperStyles, ...other }: any) => (
    <div className="k-menu-scroll-wrapper" style={wrapperStyles}>
        <Menu children={
            <>
                <MenuItem first text="Item 1"></MenuItem>
                <MenuItem showArrow arrowIconName="caret-alt-down" text="Item 2"></MenuItem>
                <MenuItem showArrow arrowIconName="caret-alt-down" text="Item 3"></MenuItem>
                <MenuItem text="Item 4"></MenuItem>
                <MenuItem last text="Item 5"></MenuItem>
            </>
        } {...other}/>
        <Button icon="caret-alt-left" className="k-menu-scroll-button k-scroll-left"></Button>
        <Button icon="caret-alt-right" className="k-menu-scroll-button k-scroll-right"></Button>
    </div>
);
