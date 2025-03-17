import { Popup } from '../../popup';
import { MenuList, MenuItem, MenuNormal, MenuListItem, MenuScrollable } from '../../menu';


const style = `
    #test-area {
        grid-template-columns: auto auto;
    }

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
        <div id="test-area" className="k-d-grid k-grid-cols-2 ">

            <span>Horizontal Menu</span>
            <span>Horizontal Scrolling Menu</span>

            <section>
                <MenuNormal popup={
                    <>
                        <Popup className="k-menu-popup" offset={{ left: "165px", top: "auto" }}>
                            <MenuList>
                                <MenuListItem first text="Disabled" disabled></MenuListItem>
                                <MenuListItem text="Normal"></MenuListItem>
                                <MenuListItem text="Hover" hover showArrow></MenuListItem>
                                <MenuListItem text="Active" active showArrow></MenuListItem>
                                <MenuListItem text="Focus" focus></MenuListItem>
                                <MenuListItem last text="Focus & Active" active focus></MenuListItem>
                            </MenuList>
                        </Popup>
                        <Popup className="k-menu-popup" offset={{ left: "300px", top: "175px" }}>
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
                    <MenuItem first text="Normal"></MenuItem>
                    <MenuItem text="Hover" hover showArrow arrowIconName="caret-alt-down"></MenuItem>
                    <MenuItem text="Active" active showArrow arrowIconName="caret-alt-down"></MenuItem>
                    <MenuItem text="Selected" selected showArrow arrowIconName="caret-alt-down"></MenuItem>
                    <MenuItem text="Focus" focus></MenuItem>
                    <MenuItem last text="Disabled" disabled></MenuItem>
                </MenuNormal>
            </section>

            <section>
                <MenuScrollable wrapperStyles={{ width: "300px" }}/>
            </section>

            <span>Horizontal Menu RTL</span>
            <span></span>

            <section>
                <MenuNormal dir="rtl" popup={
                        <>
                            <Popup className="k-menu-popup" offset={{ left: "220px", top: "auto" }} dir="rtl">
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
                    <MenuItem first text="Normal"></MenuItem>
                    <MenuItem text="Hover" hover showArrow arrowIconName="caret-alt-down"></MenuItem>
                    <MenuItem text="Active" active showArrow arrowIconName="caret-alt-down"></MenuItem>
                    <MenuItem text="Selected" selected showArrow arrowIconName="caret-alt-down"></MenuItem>
                    <MenuItem text="Focus" focus></MenuItem>
                    <MenuItem last text="Disabled" disabled></MenuItem>
                </MenuNormal>
            </section>
        </div>

    </>
);
