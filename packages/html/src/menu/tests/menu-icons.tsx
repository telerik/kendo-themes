import { MenuItem, MenuNormal, MenuList, MenuListItem } from '..';
import { Popup } from '../..';

const style = `
    #test-area section {
        height: 300px;
    }

    .k-animation-container {
        position: absolute;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Horizontal Menu</span>
            <span>Horizontal Menu RTL</span>

            <section>
                <MenuNormal popup={
                        <>
                            <Popup className="k-menu-popup" offset={{ left: "110px", top: "auto" }}>
                                <MenuList>
                                    <MenuListItem first text="Disabled" disabled></MenuListItem>
                                    <MenuListItem text="Normal"></MenuListItem>
                                    <MenuListItem text="Hover" hover showArrow></MenuListItem>
                                    <MenuListItem text="Active" active showArrow></MenuListItem>
                                    <MenuListItem text="Focus" focus></MenuListItem>
                                    <MenuListItem last text="Focus & Active" active focus></MenuListItem>
                                </MenuList>
                            </Popup>
                        </>
                    }>
                    <MenuItem first text="Normal" icon="folder"></MenuItem>
                    <MenuItem text="Active" icon="folder" active showArrow arrowIconName="caret-alt-down"></MenuItem>
                    <MenuItem last selected text="Selected" icon="folder"></MenuItem>
                </MenuNormal>
            </section>

            <section>
                <MenuNormal dir="rtl"  popup={
                        <>
                            <Popup className="k-menu-popup" offset={{ left: "780px", top: "auto" }} dir="rtl">
                                <MenuList dir="rtl">
                                    <MenuListItem first text="Disabled" disabled></MenuListItem>
                                    <MenuListItem text="Normal"></MenuListItem>
                                    <MenuListItem text="Hover" hover showArrow></MenuListItem>
                                    <MenuListItem text="Active" active showArrow></MenuListItem>
                                    <MenuListItem text="Focus" focus></MenuListItem>
                                    <MenuListItem last text="Focus & Active" active focus></MenuListItem>
                                </MenuList>
                            </Popup>
                        </>
                    }>
                    <MenuItem first text="Normal" icon="folder"></MenuItem>
                    <MenuItem text="Active" icon="folder" active showArrow arrowIconName="caret-alt-down"></MenuItem>
                    <MenuItem last selected text="Selected" icon="folder"></MenuItem>
                </MenuNormal>
            </section>

            <span>Horizontal Menu Custom Expand Icon</span>
            <span>Horizontal Menu RTL Expand Icon</span>

            <section>
                <MenuNormal popup={
                        <>
                            <Popup className="k-menu-popup" offset={{ left: "110px", top: "auto" }}>
                                <MenuList>
                                    <MenuListItem first text="Disabled" disabled></MenuListItem>
                                    <MenuListItem text="Normal"></MenuListItem>
                                    <MenuListItem text="Hover" hover showArrow arrowIconName="chevron-right"></MenuListItem>
                                    <MenuListItem text="Active" active showArrow arrowIconName="chevron-right"></MenuListItem>
                                    <MenuListItem text="Focus" focus></MenuListItem>
                                    <MenuListItem last text="Focus & Active" active focus></MenuListItem>
                                </MenuList>
                            </Popup>
                        </>
                    }>
                    <MenuItem first text="Normal" icon="folder"></MenuItem>
                    <MenuItem text="Active" icon="folder" active showArrow arrowIconName="chevron-down"></MenuItem>
                    <MenuItem last selected text="Selected" icon="folder"></MenuItem>
                </MenuNormal>
            </section>

            <section>
                <MenuNormal dir="rtl"  popup={
                        <>
                            <Popup className="k-menu-popup" offset={{ left: "780px", top: "auto" }} dir="rtl">
                                <MenuList dir="rtl">
                                    <MenuListItem first text="Disabled" disabled></MenuListItem>
                                    <MenuListItem text="Normal"></MenuListItem>
                                    <MenuListItem text="Hover" hover showArrow arrowIconName="chevron-left"></MenuListItem>
                                    <MenuListItem text="Active" active showArrow arrowIconName="chevron-left"></MenuListItem>
                                    <MenuListItem text="Focus" focus></MenuListItem>
                                    <MenuListItem last text="Focus & Active" active focus></MenuListItem>
                                </MenuList>
                            </Popup>
                        </>
                    }>
                    <MenuItem first text="Normal" icon="folder"></MenuItem>
                    <MenuItem text="Active" icon="folder" active showArrow arrowIconName="chevron-down"></MenuItem>
                    <MenuItem last selected text="Selected" icon="folder"></MenuItem>
                </MenuNormal>
            </section>

            <span>Horizontal Menu Icon After Text</span>
            <span>Horizontal Menu RTL Icon After Text</span>

            <section>
                <MenuNormal popup={
                        <>
                            <Popup className="k-menu-popup" offset={{ left: "110px", top: "auto" }}>
                                <MenuList>
                                    <MenuListItem first text="Disabled" disabled></MenuListItem>
                                    <MenuListItem text="Normal"></MenuListItem>
                                    <MenuListItem text="Hover" hover showArrow arrowIconName="chevron-right"></MenuListItem>
                                    <MenuListItem text="Active" active showArrow arrowIconName="chevron-right"></MenuListItem>
                                    <MenuListItem text="Focus" focus></MenuListItem>
                                    <MenuListItem last text="Focus & Active" active focus></MenuListItem>
                                </MenuList>
                            </Popup>
                        </>
                    }>
                    <MenuItem first text="Normal" icon="folder" iconPosition="after"></MenuItem>
                    <MenuItem text="Active" icon="folder" iconPosition="after" active showArrow arrowIconName="chevron-down"></MenuItem>
                    <MenuItem last selected text="Selected" icon="folder" iconPosition="after"></MenuItem>
                </MenuNormal>
            </section>

            <section>
                <MenuNormal dir="rtl" popup={
                        <>
                            <Popup className="k-menu-popup" offset={{ left: "780px", top: "auto" }} dir="rtl">
                                <MenuList dir="rtl">
                                    <MenuListItem first text="Disabled" disabled></MenuListItem>
                                    <MenuListItem text="Normal"></MenuListItem>
                                    <MenuListItem text="Hover" hover showArrow arrowIconName="chevron-left"></MenuListItem>
                                    <MenuListItem text="Active" active showArrow arrowIconName="chevron-left"></MenuListItem>
                                    <MenuListItem text="Focus" focus></MenuListItem>
                                    <MenuListItem last text="Focus & Active" active focus></MenuListItem>
                                </MenuList>
                            </Popup>
                        </>
                    }>
                    <MenuItem first text="Normal" icon="folder" iconPosition="after"></MenuItem>
                    <MenuItem text="Active" icon="folder" iconPosition="after" active showArrow arrowIconName="chevron-down"></MenuItem>
                    <MenuItem last selected text="Selected" icon="folder" iconPosition="after" showArrow arrowIconName="chevron-down"></MenuItem>
                </MenuNormal>
            </section>
        </div>

    </>
);
