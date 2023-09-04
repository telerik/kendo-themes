import { MenuItem, MenuSeparator, MenuList } from '../../menu';
import { ToolbarPopup } from '../../toolbar';


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
            <span>Normal</span>
            <span>With Icon</span>
            <span>With Separator</span>
            <section>
                <ToolbarPopup className="k-menu-popup">
                    <MenuList>
                        <MenuItem text="Item 1"></MenuItem>
                        <MenuItem text="Item 2"></MenuItem>
                        <MenuItem text="Item 3"></MenuItem>
                    </MenuList>
                </ToolbarPopup>
            </section>
            <section>
                <ToolbarPopup className="k-menu-popup">
                    <MenuList>
                        <MenuItem text="Item 1" icon="plus"></MenuItem>
                        <MenuItem text="Item 2" icon="plus"></MenuItem>
                        <MenuItem text="Item 3" icon="plus"></MenuItem>
                    </MenuList>
                </ToolbarPopup>
            </section>
            <section>
                <ToolbarPopup className="k-menu-popup">
                    <MenuList>
                        <MenuItem text="Item 1"></MenuItem>
                        <MenuItem text="Item 2"></MenuItem>
                        <MenuItem text="Item 3"></MenuItem>
                        <MenuSeparator></MenuSeparator>
                        <MenuItem text="Item after separator" icon="plus"></MenuItem>
                    </MenuList>
                </ToolbarPopup>
            </section>

            <span className="k-colspan-all k-col-span-full">rtl</span>
            <section className="k-rtl" dir="rtl">
                <ToolbarPopup className="k-menu-popup">
                    <MenuList>
                        <MenuItem text="Item 1"></MenuItem>
                        <MenuItem text="Item 2"></MenuItem>
                        <MenuItem text="Item 3"></MenuItem>
                    </MenuList>
                </ToolbarPopup>
            </section>
            <section className="k-rtl" dir="rtl">
                <ToolbarPopup className="k-menu-popup">
                    <MenuList>
                        <MenuItem text="Item 1" icon="plus"></MenuItem>
                        <MenuItem text="Item 2" icon="plus"></MenuItem>
                        <MenuItem text="Item 3" icon="plus"></MenuItem>
                    </MenuList>
                </ToolbarPopup>
            </section>
            <section className="k-rtl" dir="rtl">
                <ToolbarPopup className="k-menu-popup">
                    <MenuList>
                        <MenuItem text="Item 1"></MenuItem>
                        <MenuItem text="Item 2"></MenuItem>
                        <MenuItem text="Item 3"></MenuItem>
                        <MenuSeparator></MenuSeparator>
                        <MenuItem text="Item after separator" icon="plus"></MenuItem>
                    </MenuList>
                </ToolbarPopup>
            </section>
        </div>
    </>
);
