import { MenuItem, MenuSeparator, MenuList } from '../../menu';
import { Popup } from '../../popup';


const style = `
    .k-animation-container {
        width: min-content;
        position: relative;
        overflow: visible;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span>Button</span>
            <span>Menu button</span>
            <span>Split button</span>
            <span>Button group</span>

            <section>
                <Popup className="k-toolbar-popup k-menu-popup">
                    <MenuList>
                        <MenuItem text="Normal"></MenuItem>
                        <MenuItem text="Hover" hover></MenuItem>
                        <MenuItem text="Focus" focus></MenuItem>
                        <MenuItem text="Active" active></MenuItem>
                        <MenuItem text="Disabled" disabled></MenuItem>
                        <MenuItem text="Disabled focus" disabled focus></MenuItem>
                        <MenuSeparator></MenuSeparator>
                        <MenuItem text="Item after separator"></MenuItem>
                    </MenuList>
                </Popup>
            </section>
            <section>
                <Popup className="k-toolbar-popup k-menu-popup">
                    <MenuList>
                        <MenuItem text="MenuButton" disabled></MenuItem>
                        <MenuItem text="Normal" icon="plus"></MenuItem>
                        <MenuItem text="Hover" icon="plus" hover></MenuItem>
                        <MenuItem text="Focus" icon="plus" focus></MenuItem>
                        <MenuItem text="Active" icon="plus" active></MenuItem>
                        <MenuItem text="Disabled" icon="plus" disabled></MenuItem>
                        <MenuItem text="Disabled focus" icon="plus" disabled focus></MenuItem>
                    </MenuList>
                </Popup>
            </section>
            <section>
                <Popup className="k-toolbar-popup k-menu-popup">
                    <MenuList>
                        <MenuItem text="SplitButton"></MenuItem>
                        <MenuItem text="Normal" icon="plus"></MenuItem>
                        <MenuItem text="Hover" icon="plus" hover></MenuItem>
                        <MenuItem text="Focus" icon="plus" focus></MenuItem>
                        <MenuItem text="Active" icon="plus" active></MenuItem>
                        <MenuItem text="Disabled" icon="plus" disabled></MenuItem>
                        <MenuItem text="Disabled focus" icon="plus" disabled focus></MenuItem>
                    </MenuList>
                </Popup>
            </section>
            <section>
                <Popup className="k-toolbar-popup k-menu-popup">
                    <MenuList>
                        <MenuItem text="Normal"></MenuItem>
                        <MenuItem text="Hover" hover></MenuItem>
                        <MenuItem text="Focus" focus></MenuItem>
                        <MenuItem text="Active" active></MenuItem>
                        <MenuItem text="Disabled" disabled></MenuItem>
                        <MenuItem text="Disabled focus" disabled focus></MenuItem>
                    </MenuList>
                </Popup>
            </section>

            <span className="k-colspan-all k-col-span-full">rtl</span>
            <section className="k-rtl" dir="rtl">
                <Popup className="k-toolbar-popup k-menu-popup">
                    <MenuList>
                        <MenuItem text="Normal"></MenuItem>
                        <MenuItem text="Hover" hover></MenuItem>
                        <MenuItem text="Focus" focus></MenuItem>
                        <MenuItem text="Active" active></MenuItem>
                        <MenuItem text="Disabled" disabled></MenuItem>
                        <MenuItem text="Disabled focus" disabled focus></MenuItem>
                        <MenuSeparator></MenuSeparator>
                        <MenuItem text="Item after separator"></MenuItem>
                    </MenuList>
                </Popup>
            </section>
            <section className="k-rtl" dir="rtl">
                <Popup className="k-toolbar-popup k-menu-popup">
                    <MenuList>
                        <MenuItem text="MenuButton" disabled></MenuItem>
                        <MenuItem text="Normal" icon="plus"></MenuItem>
                        <MenuItem text="Hover" icon="plus" hover></MenuItem>
                        <MenuItem text="Focus" icon="plus" focus></MenuItem>
                        <MenuItem text="Active" icon="plus" active></MenuItem>
                        <MenuItem text="Disabled" icon="plus" disabled></MenuItem>
                        <MenuItem text="Disabled focus" icon="plus" disabled focus></MenuItem>
                    </MenuList>
                </Popup>
            </section>
            <section className="k-rtl" dir="rtl">
                <Popup className="k-toolbar-popup k-menu-popup">
                    <MenuList>
                        <MenuItem text="SplitButton"></MenuItem>
                        <MenuItem text="Normal" icon="plus"></MenuItem>
                        <MenuItem text="Hover" icon="plus" hover></MenuItem>
                        <MenuItem text="Focus" icon="plus" focus></MenuItem>
                        <MenuItem text="Active" icon="plus" active></MenuItem>
                        <MenuItem text="Disabled" icon="plus" disabled></MenuItem>
                        <MenuItem text="Disabled focus" icon="plus" disabled focus></MenuItem>
                    </MenuList>
                </Popup>
            </section>
            <section className="k-rtl" dir="rtl">
                <Popup className="k-toolbar-popup k-menu-popup">
                    <MenuList>
                        <MenuItem text="Normal"></MenuItem>
                        <MenuItem text="Hover" hover></MenuItem>
                        <MenuItem text="Focus" focus></MenuItem>
                        <MenuItem text="Active" active></MenuItem>
                        <MenuItem text="Disabled" disabled></MenuItem>
                        <MenuItem text="Disabled focus" disabled focus></MenuItem>
                    </MenuList>
                </Popup>
            </section>

        </div>
    </>
);
