import { MenuList } from "../menu-list.spec";
import { MenuListItem } from "../menu-list-item.spec";
import { Popup } from '../../popup/popup.spec';


const style = `
    #test-area {
        grid-template-columns: 120px 1fr 1fr 1fr 1fr;
    }
    .k-animation-container {
        width: min-content;
        position: relative;
        overflow: visible;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>

            {MenuList.options.size.map((size) => (
                <span>{`${size}`}</span>
            ))}

            <span>no arrow</span>

            {MenuList.options.size.map((size, i) => (
                <section key={i}>
                    <Popup className="k-menu-popup">
                        <MenuList size={size}>
                            <MenuListItem first text="Normal"></MenuListItem>
                            <MenuListItem text="Hover" hover></MenuListItem>
                            <MenuListItem text="Focus" focus></MenuListItem>
                            <MenuListItem text="Active" active></MenuListItem>
                            <MenuListItem text="Focus & Active" active focus></MenuListItem>
                            <MenuListItem last text="Disabled" disabled></MenuListItem>
                        </MenuList>
                    </Popup>
                </section>
            ))}

            <span>default arrow</span>

            {MenuList.options.size.map((size, i) => (
                <section key={i}>
                    <Popup className="k-menu-popup">
                        <MenuList size={size}>
                            <MenuListItem first text="Normal" showArrow></MenuListItem>
                            <MenuListItem text="No arrow"></MenuListItem>
                            <MenuListItem last text="With icon" icon="folder" showArrow></MenuListItem>
                        </MenuList>
                    </Popup>
                </section>
            ))}

            <span>custom arrow</span>

            {MenuList.options.size.map((size, i) => (
            <section key={i}>
                <Popup className="k-menu-popup">
                    <MenuList size={size}>
                        <MenuListItem first text="Normal" showArrow arrowIconName="chevron-right"></MenuListItem>
                        <MenuListItem text="No arrow"></MenuListItem>
                        <MenuListItem last text="With icon" icon="folder" showArrow arrowIconName="chevron-right"></MenuListItem>
                    </MenuList>
                </Popup>
            </section>
            ))}

        </div>

    </>
);
