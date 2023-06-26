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
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>Small</span>
            <span>Medium</span>
            <span>Large</span>

            <section>
                <Popup className="k-toolbar-popup k-menu-popup">
                    <MenuList size="small">
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
                    <MenuList size="medium">
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
                    <MenuList size="large">
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

        </div>
    </>
);
