import { MenuListItem, MenuList } from '../../menu';
import { Popup } from '../../popup';


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
                    <MenuList className="k-context-menu">
                        <MenuListItem text="Item 1" selected showArrow></MenuListItem>
                        <MenuListItem text="Item 2"></MenuListItem>
                        <MenuListItem text="Item 3"></MenuListItem>
                    </MenuList>
                </Popup>


                <Popup className="k-menu-popup" offset={{ left: "100%", top: 0 }}>
                    <MenuList className="k-context-menu">
                        <MenuListItem text="Item 1.1"></MenuListItem>
                        <MenuListItem text="Item 1.2"></MenuListItem>
                    </MenuList>
                </Popup>
            </section>
        </div>
    </>
);
