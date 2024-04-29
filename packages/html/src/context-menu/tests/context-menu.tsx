import { MenuListItem } from '../../menu';
import { Popup } from '../../popup';
import { ContextMenuNormal } from '../templates/context-menu-normal';


const styles = `
    .wrap {
        position: relative;
        width: min-content;
    }

    .k-animation-container:first-of-type {
        width: min-content;
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <section className="wrap">
                <Popup className="k-menu-popup">
                    <ContextMenuNormal>
                        <MenuListItem text="Item 1" selected showArrow></MenuListItem>
                        <MenuListItem text="Item 2"></MenuListItem>
                        <MenuListItem text="Item 3"></MenuListItem>
                    </ContextMenuNormal>
                </Popup>


                <Popup className="k-menu-popup" offset={{ left: "100%", top: 0 }}>
                    <ContextMenuNormal>
                        <MenuListItem text="Item 1.1"></MenuListItem>
                        <MenuListItem text="Item 1.2"></MenuListItem>
                    </ContextMenuNormal>
                </Popup>
            </section>
        </div>
    </>
);
