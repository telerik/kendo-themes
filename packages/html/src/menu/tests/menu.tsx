import { Popup } from "../../popup";
import { MenuList, MenuItem, MenuNormal, MenuListItem } from "../../menu";

const style = `
    #test-area {
        grid-template-columns: auto auto;
    }

    #test-area section {
        height: 250px;
    }

    .k-animation-container {
        position: absolute;
    }
`;

export default () => (
  <>
    <style>{style}</style>
    <div id="test-area" className="k-d-grid k-grid-cols-2 ">
      <span>Horizontal Menu</span>
      <span>Horizontal Menu - RTL</span>

      <section>
        <MenuNormal
          popup={
            <>
              <Popup className="k-menu-popup" offset={{ left: "125px", top: "auto" }}>
                <MenuList>
                  <MenuListItem first text="Item"></MenuListItem>
                  <MenuListItem text="Item" showArrow></MenuListItem>
                  <MenuListItem last text="Item"></MenuListItem>
                </MenuList>
              </Popup>
            </>
          }
        >
          <MenuItem first text="Item"></MenuItem>
          <MenuItem text="Item"></MenuItem>
          <MenuItem text="Item" showArrow arrowIconName="chevron-down"></MenuItem>
          <MenuItem text="Item"></MenuItem>
          <MenuItem last text="Item"></MenuItem>
        </MenuNormal>
      </section>

      <section>
        <MenuNormal
          dir="rtl"
          popup={
            <>
              <Popup className="k-menu-popup" offset={{ left: "825px", top: "auto" }}>
                <MenuList>
                  <MenuListItem first text="Item"></MenuListItem>
                  <MenuListItem text="Item" showArrow></MenuListItem>
                  <MenuListItem last text="Item"></MenuListItem>
                </MenuList>
              </Popup>
            </>
          }
        >
          <MenuItem first text="Item"></MenuItem>
          <MenuItem text="Item"></MenuItem>
          <MenuItem text="Item" showArrow arrowIconName="chevron-down"></MenuItem>
          <MenuItem text="Item"></MenuItem>
          <MenuItem last text="Item"></MenuItem>
        </MenuNormal>
      </section>

      <span>Vertical Menu</span>
      <span>Vertical Menu - RTL</span>

      <section>
        <MenuNormal orientation="vertical">
          <MenuItem first text="Item"></MenuItem>
          <MenuItem text="Item"></MenuItem>
          <MenuItem text="Item" showArrow arrowIconName="chevron-right"></MenuItem>
          <MenuItem text="Item"></MenuItem>
          <MenuItem last text="Item"></MenuItem>
        </MenuNormal>
      </section>

      <section>
        <MenuNormal dir="rtl" orientation="vertical">
          <MenuItem first text="Item"></MenuItem>
          <MenuItem text="Item"></MenuItem>
          <MenuItem text="Item" showArrow arrowIconName="chevron-left"></MenuItem>
          <MenuItem text="Item"></MenuItem>
          <MenuItem last text="Item"></MenuItem>
        </MenuNormal>
      </section>
    </div>
  </>
);
