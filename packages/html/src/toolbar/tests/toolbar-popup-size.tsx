import { MenuListItem } from '../../menu/menu-list-item.spec';
import { MenuSeparator } from '../../menu/menu-separator.spec';
import { MenuList } from '../../menu/menu-list.spec';
import { ToolbarPopup } from '../../toolbar/toolbar-popup.spec';


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

            <span>undefined</span>
            <span>Small</span>
            <span>Medium</span>
            <span>Large</span>
            { MenuList.options.size.map((size) => (
                <section>
                    <ToolbarPopup className="k-menu-popup">
                        <MenuList size={size}>
                            <MenuListItem first text="Item 1"></MenuListItem>
                            <MenuListItem text="Item 2"></MenuListItem>
                            <MenuListItem text="Item 3"></MenuListItem>
                            <MenuSeparator></MenuSeparator>
                            <MenuListItem last text="Item after separator" icon="plus"></MenuListItem>
                        </MenuList>
                    </ToolbarPopup>
                </section>
            ))}
        </div>
    </>
);
