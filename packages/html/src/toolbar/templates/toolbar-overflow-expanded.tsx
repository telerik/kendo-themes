import { Toolbar } from "../toolbar.spec";
import { Button } from '../../button';
import { ToolbarSeparator } from "../toolbar-separator";
import ToolbarPopup from "../toolbar-popup.spec";
import { MenuList, MenuListItem } from "../../menu";

export const ToolbarOverflowExpanded = (props) => (
    <>
        <Toolbar resizable children={[
            <Button key="toolbar-button">Button</Button>,
            <ToolbarSeparator key="sep" className="k-toolbar-button-separator" />,
            <Button key="overflow-btn"
                icon="more-vertical"
                className="k-toolbar-overflow-button"
                fillMode="flat"
                rounded="none"
                id="overflow-menu-btn"
                aria-label="More options"
                aria-haspopup="menu"
                aria-expanded="true"
                aria-controls="overflow-menu-group"
            ></Button>
        ]}
        {...props}>
        </Toolbar>
        <ToolbarPopup>
            <MenuList id="overflow-menu-group" aria-labelledby="overflow-menu-btn">
                <MenuListItem first text="Item 1" />
                <MenuListItem last text="Item 2" />
            </MenuList>
        </ToolbarPopup>
    </>
);
