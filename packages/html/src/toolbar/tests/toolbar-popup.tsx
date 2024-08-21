import { MenuListItem, MenuSeparator, MenuList } from '../../menu';
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
                        <MenuListItem first text="Item 1"></MenuListItem>
                        <MenuListItem text="Item 2"></MenuListItem>
                        <MenuListItem last text="Item 3"></MenuListItem>
                    </MenuList>
                </ToolbarPopup>
            </section>
            <section>
                <ToolbarPopup className="k-menu-popup">
                    <MenuList>
                        <MenuListItem first text="Item 1" icon="plus"></MenuListItem>
                        <MenuListItem text="Item 2" icon="plus"></MenuListItem>
                        <MenuListItem last text="Item 3" icon="plus"></MenuListItem>
                    </MenuList>
                </ToolbarPopup>
            </section>
            <section>
                <ToolbarPopup className="k-menu-popup">
                    <MenuList>
                        <MenuListItem first text="Item 1"></MenuListItem>
                        <MenuListItem text="Item 2"></MenuListItem>
                        <MenuListItem text="Item 3"></MenuListItem>
                        <MenuSeparator></MenuSeparator>
                        <MenuListItem last text="Item after separator" icon="plus"></MenuListItem>
                    </MenuList>
                </ToolbarPopup>
            </section>

            <span className="k-colspan-all k-col-span-full">rtl</span>
            <section className="k-rtl" dir="rtl">
                <ToolbarPopup className="k-menu-popup">
                    <MenuList>
                        <MenuListItem first text="Item 1"></MenuListItem>
                        <MenuListItem text="Item 2"></MenuListItem>
                        <MenuListItem last text="Item 3"></MenuListItem>
                    </MenuList>
                </ToolbarPopup>
            </section>
            <section className="k-rtl" dir="rtl">
                <ToolbarPopup className="k-menu-popup">
                    <MenuList>
                        <MenuListItem first text="Item 1" icon="plus"></MenuListItem>
                        <MenuListItem text="Item 2" icon="plus"></MenuListItem>
                        <MenuListItem last text="Item 3" icon="plus"></MenuListItem>
                    </MenuList>
                </ToolbarPopup>
            </section>
            <section className="k-rtl" dir="rtl">
                <ToolbarPopup className="k-menu-popup">
                    <MenuList>
                        <MenuListItem first text="Item 1"></MenuListItem>
                        <MenuListItem text="Item 2"></MenuListItem>
                        <MenuListItem text="Item 3"></MenuListItem>
                        <MenuSeparator></MenuSeparator>
                        <MenuListItem last text="Item after separator" icon="plus"></MenuListItem>
                    </MenuList>
                </ToolbarPopup>
            </section>
        </div>
    </>
);
