import { Popup } from '../../popup';
import { MenuList, MenuItem, MenuVertical, MenuNormal, MenuListItem, MenuSeparator } from '..';


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
                <MenuNormal>
                    <MenuItem first text="Normal"></MenuItem>
                    <MenuItem text="Hover" hover showArrow arrowIconName="caret-alt-down"></MenuItem>
                    <MenuSeparator></MenuSeparator>
                    <MenuItem text="Active" active showArrow arrowIconName="caret-alt-down"
                    popup={
                        <>
                            <Popup className="k-menu-popup" positionMode="fixed">
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
                    }></MenuItem>
                    <MenuItem text="Selected" selected showArrow arrowIconName="caret-alt-down"></MenuItem>
                    <MenuItem text="Focus" focus></MenuItem>
                    <MenuItem last text="Disabled" disabled></MenuItem>
                </MenuNormal>
            </section>

            <section>
                <MenuVertical>
                    <MenuItem first text="Normal"></MenuItem>
                    <MenuItem text="Hover" hover showArrow arrowIconName="caret-alt-down"></MenuItem>
                    <MenuSeparator></MenuSeparator>
                    <MenuItem text="Active" active showArrow arrowIconName="caret-alt-down"
                        popup={
                            <>
                                <Popup className="k-menu-popup" positionMode="fixed">
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
                        }></MenuItem>
                    <MenuItem text="Selected" selected showArrow arrowIconName="caret-alt-down"></MenuItem>
                    <MenuItem text="Focus" focus></MenuItem>
                    <MenuItem last text="Disabled" disabled></MenuItem>
                </MenuVertical>
            </section>
        </div>

    </>
);
