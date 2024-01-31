import { Button } from '../../button';
import { Popup } from '../../popup';
import { MenuList, MenuItem, Menu, MenuListItem } from '../../menu';


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

            <span>Horizontal Menu</span>
            <span>Horizontal Scrolling Menu</span>

            <section>
                <Menu>
                    <MenuItem first text="Disabled" disabled></MenuItem>
                    <MenuItem text="Normal"></MenuItem>
                    <MenuItem text="Hover" hover showArrow arrowIconName="caret-alt-down"></MenuItem>
                    <MenuItem text="Active" active showArrow arrowIconName="caret-alt-down"
                        popup={
                            <>
                                <Popup className="k-menu-popup" positionMode="fixed">
                                    <MenuList>
                                        <MenuListItem text="Disabled" disabled></MenuListItem>
                                        <MenuListItem text="Normal"></MenuListItem>
                                        <MenuListItem text="Hover" hover showArrow></MenuListItem>
                                        <MenuListItem text="Active" active showArrow></MenuListItem>
                                        <MenuListItem text="Focus" focus></MenuListItem>
                                        <MenuListItem text="Focus & Active" active focus></MenuListItem>
                                    </MenuList>
                                </Popup>
                            </>
                        }
                    />
                    <MenuItem text="Focus" focus></MenuItem>
                    <MenuItem last text="Normal" icon="folder"></MenuItem>
                </Menu>
            </section>

            <section>
                <div className="k-menu-scroll-wrapper horizontal" style={{ width: "300px" }}>
                    <Menu>
                        <MenuItem first text="Item 1"></MenuItem>
                        <MenuItem text="Item 2"></MenuItem>
                        <MenuItem text="Item 3"></MenuItem>
                        <MenuItem text="Item 4"></MenuItem>
                        <MenuItem text="Item 5"></MenuItem>
                        <MenuItem last text="Item 6"></MenuItem>
                    </Menu>
                    <Button icon="caret-alt-left" className="k-menu-scroll-button k-scroll-left"></Button>
                    <Button icon="caret-alt-right" className="k-menu-scroll-button k-scroll-right"></Button>
                </div>
            </section>

            <span>Horizontal Menu RTL</span>
            <span></span>

            <section>
                <Menu dir="rtl">
                    <MenuItem first text="Disabled" disabled></MenuItem>
                    <MenuItem text="Normal"></MenuItem>
                    <MenuItem text="Hover" hover showArrow arrowIconName="caret-alt-down"></MenuItem>
                    <MenuItem text="Active" active showArrow arrowIconName="caret-alt-down"
                        popup={
                            <>
                                <Popup className="k-menu-popup" positionMode="fixed">
                                    <MenuList dir="rtl">
                                        <MenuListItem text="Disabled" disabled></MenuListItem>
                                        <MenuListItem text="Normal"></MenuListItem>
                                        <MenuListItem text="Hover" hover showArrow></MenuListItem>
                                        <MenuListItem text="Active" active showArrow></MenuListItem>
                                        <MenuListItem text="Focus" focus></MenuListItem>
                                        <MenuListItem text="Focus & Active" active focus></MenuListItem>
                                    </MenuList>
                                </Popup>
                            </>
                        }
                    />
                    <MenuItem text="Focus" focus></MenuItem>
                    <MenuItem last text="Normal" icon="folder"></MenuItem>
                </Menu>
            </section>
        </div>

    </>
);
