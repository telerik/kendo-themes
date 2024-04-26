import { MenuItem, MenuVertical, MenuVerticalScrollable } from '..';


const style = `
    .k-animation-container {
        position: relative;
        display: inline-block;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Vertical Menu</span>
            <span>Vertical Scrolling Menu</span>

            <section>
                <MenuVertical>
                    <MenuItem first text="Disabled" disabled></MenuItem>
                    <MenuItem text="Normal"></MenuItem>
                    <MenuItem text="Hover" hover showArrow></MenuItem>
                    <MenuItem text="Active" active showArrow></MenuItem>
                    <MenuItem text="Focus" focus></MenuItem>
                    <MenuItem text="Normal with icon" icon="folder" showArrow></MenuItem>
                    <MenuItem text="Hover with icon" icon="folder" hover showArrow></MenuItem>
                    <MenuItem text="Active with icon" icon="folder" active showArrow></MenuItem>
                    <MenuItem last text="Focus with icon" icon="folder" focus showArrow></MenuItem>
                </MenuVertical>
            </section>

            <section>
                <MenuVerticalScrollable style={{ height: "150px" }} />
            </section>
        </div>

    </>
);
