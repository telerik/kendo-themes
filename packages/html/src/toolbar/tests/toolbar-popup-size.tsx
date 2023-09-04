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

            <span>Small</span>
            <span>Medium</span>
            <span>Large</span>
            { MenuList.options.size.map((size) => (
                <section>
                    <ToolbarPopup className="k-menu-popup">
                        <MenuList size={size}>
                            <MenuItem text="Item 1"></MenuItem>
                            <MenuItem text="Item 2"></MenuItem>
                            <MenuItem text="Item 3"></MenuItem>
                            <MenuSeparator></MenuSeparator>
                            <MenuItem text="Item after separator" icon="plus"></MenuItem>
                        </MenuList>
                    </ToolbarPopup>
                </section>
            ))}
        </div>
    </>
);
