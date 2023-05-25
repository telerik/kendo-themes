import { MenuList, MenuItem } from '../../menu';
import { Popup } from '../../popup';


const style = `
    #test-area {
        grid-template-columns: 120px 1fr 1fr 1fr;
    }
    .k-animation-container {
        width: min-content;
        position: relative;
        overflow: visible;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span></span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            <span>no arrow</span>
            <section>
                <Popup className="k-menu-popup">
                    <MenuList size="small">
                        <MenuItem text="Normal"></MenuItem>
                        <MenuItem text="Hover" hover></MenuItem>
                        <MenuItem text="Focus" focus></MenuItem>
                        <MenuItem text="Active" active></MenuItem>
                        <MenuItem text="Focus & Active" active focus></MenuItem>
                        <MenuItem text="Disabled" disabled></MenuItem>
                    </MenuList>
                </Popup>
            </section>

            <section>
                <Popup className="k-menu-popup">
                    <MenuList>
                        <MenuItem text="Normal"></MenuItem>
                        <MenuItem text="Hover" hover></MenuItem>
                        <MenuItem text="Focus" focus></MenuItem>
                        <MenuItem text="Active" active></MenuItem>
                        <MenuItem text="Focus & Active" active focus></MenuItem>
                        <MenuItem text="Disabled" disabled></MenuItem>
                    </MenuList>
                </Popup>
            </section>

            <section>
                <Popup className="k-menu-popup">
                    <MenuList size="large">
                        <MenuItem text="Normal"></MenuItem>
                        <MenuItem text="Hover" hover></MenuItem>
                        <MenuItem text="Focus" focus></MenuItem>
                        <MenuItem text="Active" active></MenuItem>
                        <MenuItem text="Focus & Active" active focus></MenuItem>
                        <MenuItem text="Disabled" disabled></MenuItem>
                    </MenuList>
                </Popup>
            </section>

            <span>default arrow</span>
            <section>
                <Popup className="k-menu-popup">
                    <MenuList size="small">
                        <MenuItem text="Normal" showArrow></MenuItem>
                        <MenuItem text="No arrow"></MenuItem>
                        <MenuItem text="With icon" icon="folder" showArrow></MenuItem>
                    </MenuList>
                </Popup>
            </section>

            <section>
                <Popup className="k-menu-popup">
                    <MenuList>
                        <MenuItem text="Normal" showArrow></MenuItem>
                        <MenuItem text="No arrow"></MenuItem>
                        <MenuItem text="With icon" icon="folder" showArrow></MenuItem>
                    </MenuList>
                </Popup>
            </section>

            <section>
                <Popup className="k-menu-popup">
                    <MenuList size="large">
                        <MenuItem text="Normal" showArrow></MenuItem>
                        <MenuItem text="No arrow"></MenuItem>
                        <MenuItem text="With icon" icon="folder" showArrow></MenuItem>
                    </MenuList>
                </Popup>
            </section>

            <span>custom arrow</span>
            <section>
                <Popup className="k-menu-popup">
                    <MenuList size="small">
                        <MenuItem text="Normal" showArrow arrowIconName="chevron-right"></MenuItem>
                        <MenuItem text="No arrow"></MenuItem>
                        <MenuItem text="With icon" icon="folder" showArrow arrowIconName="chevron-right"></MenuItem>
                    </MenuList>
                </Popup>
            </section>

            <section>
                <Popup className="k-menu-popup">
                    <MenuList>
                        <MenuItem text="Normal" showArrow arrowIconName="chevron-right"></MenuItem>
                        <MenuItem text="No arrow"></MenuItem>
                        <MenuItem text="With icon" icon="folder" showArrow arrowIconName="chevron-right"></MenuItem>
                    </MenuList>
                </Popup>
            </section>

            <section>
                <Popup className="k-menu-popup">
                    <MenuList size="large">
                        <MenuItem text="Normal" showArrow arrowIconName="chevron-right"></MenuItem>
                        <MenuItem text="No arrow"></MenuItem>
                        <MenuItem text="With icon" icon="folder" showArrow arrowIconName="chevron-right"></MenuItem>
                    </MenuList>
                </Popup>
            </section>

        </div>

    </>
);
