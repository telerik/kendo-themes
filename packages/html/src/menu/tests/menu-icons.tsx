import { MenuItem, MenuNormal, MenuList, MenuListItem } from "..";
import { Popup } from "../../popup";

const style = `
    #test-area section {
        height: 300px;
    }

    .k-animation-container {
        position: absolute;
    }
`;

export default () => (
  <>
    <style>{style}</style>
    <div id="test-area" className="k-d-grid k-grid-cols-1">
      <span>Horizontal Menu</span>
      <section>
        <MenuNormal
          popup={
            <>
              <Popup className="k-menu-popup" offset={{ left: "110px", top: "auto" }}>
                <MenuList>
                  <MenuListItem icon="folder" first text="Disabled" disabled></MenuListItem>
                  <MenuListItem icon="folder" text="Normal"></MenuListItem>
                  <MenuListItem icon="folder" text="Hover" hover showArrow></MenuListItem>
                  <MenuListItem icon="folder" text="Active" active showArrow></MenuListItem>
                  <MenuListItem icon="folder" text="Focus" focus></MenuListItem>
                  <MenuListItem icon="folder" last text="Focus & Active" active focus></MenuListItem>
                </MenuList>
              </Popup>
            </>
          }
        >
          <MenuItem first text="Normal" icon="folder"></MenuItem>
          <MenuItem text="Hover" hover icon="folder"></MenuItem>
          <MenuItem text="Active" icon="folder" active></MenuItem>
          <MenuItem text="Selected" selected icon="folder"></MenuItem>
          <MenuItem focus text="Focused" icon="folder"></MenuItem>
          <MenuItem last text="Disabled" icon="folder" disabled></MenuItem>
        </MenuNormal>
      </section>

      <span>Horizontal Menu RTL</span>

      <section>
        <MenuNormal
          dir="rtl"
          popup={
            <>
              <Popup className="k-menu-popup" offset={{ left: "780px", top: "auto" }} dir="rtl">
                <MenuList>
                  <MenuListItem icon="folder" first text="Disabled" disabled></MenuListItem>
                  <MenuListItem icon="folder" text="Normal"></MenuListItem>
                  <MenuListItem icon="folder" text="Hover" hover showArrow dir="rtl"></MenuListItem>
                  <MenuListItem icon="folder" text="Active" active showArrow dir="rtl"></MenuListItem>
                  <MenuListItem icon="folder" text="Focus" focus></MenuListItem>
                  <MenuListItem icon="folder" last text="Focus & Active" active focus></MenuListItem>
                </MenuList>
              </Popup>
            </>
          }
        >
          <MenuItem first text="Normal" icon="folder"></MenuItem>
          <MenuItem text="Hover" hover icon="folder"></MenuItem>
          <MenuItem text="Active" icon="folder" active></MenuItem>
          <MenuItem text="Selected" selected icon="folder"></MenuItem>
          <MenuItem focus text="Focused" icon="folder"></MenuItem>
          <MenuItem last text="Disabled" icon="folder" disabled></MenuItem>
        </MenuNormal>
      </section>

      <span>Horizontal Menu Icon After Text</span>

      <section>
        <MenuNormal
          popup={
            <>
              <Popup className="k-menu-popup" offset={{ left: "110px", top: "auto" }}>
                <MenuList>
                  <MenuListItem iconPosition="after" icon="folder" first text="Disabled" disabled></MenuListItem>
                  <MenuListItem iconPosition="after" icon="folder" text="Normal"></MenuListItem>
                  <MenuListItem iconPosition="after" icon="folder" text="Hover" hover showArrow arrowIconName="chevron-right"></MenuListItem>
                  <MenuListItem iconPosition="after" icon="folder" text="Active" active showArrow arrowIconName="chevron-right"></MenuListItem>
                  <MenuListItem iconPosition="after" icon="folder" text="Focus" focus></MenuListItem>
                  <MenuListItem iconPosition="after" icon="folder" last text="Focus & Active" active focus></MenuListItem>
                </MenuList>
              </Popup>
            </>
          }
        >
          <MenuItem first text="Normal" icon="folder" iconPosition="after"></MenuItem>
          <MenuItem text="Hover" hover icon="folder" iconPosition="after"></MenuItem>
          <MenuItem text="Active" icon="folder" active iconPosition="after"></MenuItem>
          <MenuItem text="Selected" selected icon="folder" iconPosition="after"></MenuItem>
          <MenuItem focus text="Focused" icon="folder" iconPosition="after"></MenuItem>
          <MenuItem last text="Disabled" icon="folder" disabled iconPosition="after"></MenuItem>
        </MenuNormal>
      </section>

      <span>Horizontal Menu RTL Icon After Text</span>

      <section>
        <MenuNormal
          dir="rtl"
          popup={
            <>
              <Popup className="k-menu-popup" offset={{ left: "780px", top: "auto" }} dir="rtl">
                <MenuList>
                  <MenuListItem iconPosition="after" icon="folder" first text="Disabled" disabled></MenuListItem>
                  <MenuListItem iconPosition="after" icon="folder" text="Normal"></MenuListItem>
                  <MenuListItem iconPosition="after" icon="folder" text="Hover" hover showArrow arrowIconName="chevron-left"></MenuListItem>
                  <MenuListItem iconPosition="after" icon="folder" text="Active" active showArrow arrowIconName="chevron-left"></MenuListItem>
                  <MenuListItem iconPosition="after" icon="folder" text="Focus" focus></MenuListItem>
                  <MenuListItem iconPosition="after" icon="folder" last text="Focus & Active" active focus></MenuListItem>
                </MenuList>
              </Popup>
            </>
          }
        >
          <MenuItem first text="Normal" icon="folder" iconPosition="after"></MenuItem>
          <MenuItem text="Hover" hover icon="folder" iconPosition="after"></MenuItem>
          <MenuItem text="Active" icon="folder" active iconPosition="after"></MenuItem>
          <MenuItem text="Selected" selected icon="folder" iconPosition="after"></MenuItem>
          <MenuItem focus text="Focused" icon="folder" iconPosition="after"></MenuItem>
          <MenuItem last text="Disabled" icon="folder" disabled iconPosition="after"></MenuItem>
        </MenuNormal>
      </section>
    </div>
  </>
);
