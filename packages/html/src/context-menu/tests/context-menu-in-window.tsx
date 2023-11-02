import { WindowNormal } from '../../window';
import { MenuItem, MenuList } from '../../menu';
import { Popup } from '../../popup';


const styles = `
    #test-area {
        height: 300px;
    }

    .k-animation-container {
        top: 50px;
        left: 100px;
        overflow: visible;
        z-index: 12000;
    }

    .k-window {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <section>
                <WindowNormal title="Window">
                    Target
                </WindowNormal>
                <Popup className="k-menu-popup">
                    <MenuList className="k-context-menu">
                        <MenuItem text="Item 1" showArrow></MenuItem>
                        <MenuItem text="Item 2" showArrow></MenuItem>
                        <MenuItem text="Item 3" showArrow></MenuItem>
                        <MenuItem text="Item 4" showArrow></MenuItem>
                        <MenuItem text="Item 5" showArrow></MenuItem>
                        <MenuItem text="Item 6" showArrow></MenuItem>
                    </MenuList>
                </Popup>
            </section>
        </div>
    </>
);
