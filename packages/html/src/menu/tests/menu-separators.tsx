import { Popup } from '../../popup/popup.spec';
import { MenuList } from "../menu-list.spec";
import { MenuListItem } from "../menu-list-item.spec";
import { MenuNormal } from "../templates/menu-normal";
import { MenuVertical } from "../templates/menu-vertical";
import { MenuItem } from "../menu-item.spec";
import { MenuSeparator } from "../menu-separator.spec";

const style = `
    #test-area section {
        height: 300px;
    }

    .k-animation-container {
        position: absolute;
        top: 100%;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Horizontal Menu with Separators</span>
            <span>Vertical Menu with Separators</span>

            <section>
                <MenuNormal popup={
                        <>
                            <Popup className="k-menu-popup" offset={{ left: "175px", top: "auto" }}>
                                <MenuList>
                                    <MenuListItem first text="Disabled" disabled></MenuListItem>
                                    <MenuListItem text="Normal"></MenuListItem>
                                    <MenuListItem text="Hover" hover showArrow></MenuListItem>
                                    <MenuSeparator></MenuSeparator>
                                    <MenuListItem text="Active" active showArrow></MenuListItem>
                                    <MenuListItem text="Focus" focus></MenuListItem>
                                    <MenuListItem last text="Focus & Active" active focus></MenuListItem>
                                </MenuList>
                            </Popup>
                        </>
                    }>
                    <MenuItem first text="Normal"></MenuItem>
                    <MenuItem text="Hover" hover showArrow arrowIconName="caret-alt-down"></MenuItem>
                    <MenuSeparator></MenuSeparator>
                    <MenuItem text="Active" active showArrow arrowIconName="caret-alt-down"></MenuItem>
                    <MenuItem text="Selected" selected showArrow arrowIconName="caret-alt-down"></MenuItem>
                    <MenuItem text="Focus" focus></MenuItem>
                    <MenuItem last text="Disabled" disabled></MenuItem>
                </MenuNormal>
            </section>

            <section>
                <MenuVertical popup={
                        <>
                            <Popup className="k-menu-popup" offset={{ left: "520px", top: "160px" }}>
                                <MenuList>
                                    <MenuListItem first text="Disabled" disabled></MenuListItem>
                                    <MenuListItem text="Normal"></MenuListItem>
                                    <MenuListItem text="Hover" hover showArrow></MenuListItem>
                                    <MenuSeparator></MenuSeparator>
                                    <MenuListItem text="Active" active showArrow></MenuListItem>
                                    <MenuListItem text="Focus" focus></MenuListItem>
                                    <MenuListItem last text="Focus & Active" active focus></MenuListItem>
                                </MenuList>
                            </Popup>
                        </>
                    }>
                    <MenuItem first text="Normal"></MenuItem>
                    <MenuItem text="Hover" hover showArrow arrowIconName="caret-alt-down"></MenuItem>
                    <MenuSeparator></MenuSeparator>
                    <MenuItem text="Active" active showArrow arrowIconName="caret-alt-down"></MenuItem>
                    <MenuItem text="Selected" selected showArrow arrowIconName="caret-alt-down"></MenuItem>
                    <MenuItem text="Focus" focus></MenuItem>
                    <MenuItem last text="Disabled" disabled></MenuItem>
                </MenuVertical>
            </section>
        </div>

    </>
);
