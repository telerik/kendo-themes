import { Popup } from '../../popup';
import { MenuList, MenuItem, MenuNormal, MenuListItem, MenuScrollable } from '../../menu';


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
                <MenuNormal>
                    <MenuItem first text="Disabled" disabled></MenuItem>
                    <MenuItem text="Normal"></MenuItem>
                    <MenuItem text="Hover" hover showArrow arrowIconName="caret-alt-down"></MenuItem>
                    <MenuItem text="Active" active showArrow arrowIconName="caret-alt-down"
                        popup={
                            <>
                                <Popup className="k-menu-popup" positionMode="fixed">
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
                        }
                    />
                    <MenuItem text="Focus" focus></MenuItem>
                    <MenuItem last text="Normal" icon="folder"></MenuItem>
                </MenuNormal>
            </section>

            <section>
                <MenuScrollable wrapperStyles={{ width: "300px" }}/>
            </section>

            <span>Horizontal Menu RTL</span>
            <span></span>

            <section>
                <MenuNormal dir="rtl">
                    <MenuItem first text="Disabled" disabled></MenuItem>
                    <MenuItem text="Normal"></MenuItem>
                    <MenuItem text="Hover" hover showArrow arrowIconName="caret-alt-down"></MenuItem>
                    <MenuItem text="Active" active showArrow arrowIconName="caret-alt-down"
                        popup={
                            <>
                                <Popup className="k-menu-popup" positionMode="fixed">
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
                        }
                    />
                    <MenuItem text="Focus" focus></MenuItem>
                    <MenuItem last text="Normal" icon="folder"></MenuItem>
                </MenuNormal>
            </section>
        </div>

    </>
);
