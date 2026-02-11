import { ContextMenuNormal } from '../templates/context-menu-normal';
import { WindowNormal } from '../../window/templates/window-normal';
import { MenuListItem } from '../../menu/menu-list-item.spec';
import { Popup } from '../../popup/popup.spec';


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
                    <ContextMenuNormal>
                        <MenuListItem first text="Item 1" showArrow></MenuListItem>
                        <MenuListItem text="Item 2" showArrow></MenuListItem>
                        <MenuListItem text="Item 3" showArrow></MenuListItem>
                        <MenuListItem text="Item 4" showArrow></MenuListItem>
                        <MenuListItem text="Item 5" showArrow></MenuListItem>
                        <MenuListItem last text="Item 6" showArrow></MenuListItem>
                    </ContextMenuNormal>
                </Popup>
            </section>
        </div>
    </>
);
