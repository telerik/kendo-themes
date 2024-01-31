import { Menu, MenuItem } from '..';
import { Button } from '../../button';


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
                <Menu orientation="vertical">
                    <MenuItem first text="Disabled" disabled></MenuItem>
                    <MenuItem text="Normal"></MenuItem>
                    <MenuItem text="Hover" hover showArrow></MenuItem>
                    <MenuItem text="Active" active showArrow></MenuItem>
                    <MenuItem text="Focus" focus></MenuItem>
                    <MenuItem text="Normal with icon" icon="folder" showArrow></MenuItem>
                    <MenuItem text="Hover with icon" icon="folder" hover showArrow></MenuItem>
                    <MenuItem text="Active with icon" icon="folder" active showArrow></MenuItem>
                    <MenuItem last text="Focus with icon" icon="folder" focus showArrow></MenuItem>
                </Menu>
            </section>

            <section>
                <div className="k-menu-scroll-wrapper vertical">
                    <Menu orientation="vertical" style={{ height: "150px" }} >
                        <MenuItem first text="Item 1"></MenuItem>
                        <MenuItem text="Item 2"></MenuItem>
                        <MenuItem text="Item 3"></MenuItem>
                        <MenuItem text="Item 4"></MenuItem>
                        <MenuItem text="Item 5"></MenuItem>
                        <MenuItem last text="Item 6"></MenuItem>
                    </Menu>
                    <Button icon="caret-alt-up" className="k-menu-scroll-button k-scroll-up"></Button>
                    <Button icon="caret-alt-down" className="k-menu-scroll-button k-scroll-down"></Button>
                </div>
            </section>
        </div>

    </>
);
