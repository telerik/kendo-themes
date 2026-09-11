import { Popup } from "../../popup";
import { MenuList, MenuItem, MenuNormal, MenuListItem } from "..";

const style = `
    .k-animation-container {
        position: relative;
    }
`;

export default () => (
  <>
    <style>{style}</style>
    <div id="test-area" className="k-d-grid k-grid-cols-1">
      <span>Horizontal Menu</span>
      <section>
        <MenuNormal popup={<></>}>
          <MenuItem icon="folder" first text="Normal" showArrow arrowIconName="chevron-down"></MenuItem>
          <MenuItem icon="folder" text="Hover" hover showArrow arrowIconName="chevron-down"></MenuItem>
          <MenuItem icon="folder" text="Active" active showArrow arrowIconName="chevron-down"></MenuItem>
          <MenuItem icon="folder" text="Focus" focus showArrow arrowIconName="chevron-down"></MenuItem>
          <MenuItem icon="folder" text="Focus + Active" focus active showArrow arrowIconName="chevron-down"></MenuItem>
          <MenuItem icon="folder" last text="Disabled" disabled showArrow arrowIconName="chevron-down"></MenuItem>
        </MenuNormal>
      </section>
      <span>Vertical Menu</span>
      <section>
        <MenuNormal orientation="vertical" popup={<></>}>
          <MenuItem icon="folder" first text="Normal" showArrow arrowIconName="chevron-right"></MenuItem>
          <MenuItem icon="folder" text="Hover" hover showArrow arrowIconName="chevron-right"></MenuItem>
          <MenuItem icon="folder" text="Active" active showArrow arrowIconName="chevron-right"></MenuItem>
          <MenuItem icon="folder" text="Focus" focus showArrow arrowIconName="chevron-right"></MenuItem>
          <MenuItem icon="folder" text="Focus + Active" focus active showArrow arrowIconName="chevron-right"></MenuItem>
          <MenuItem icon="folder" last text="Disabled" disabled showArrow arrowIconName="chevron-right"></MenuItem>
        </MenuNormal>
      </section>
      <span>Popup Menu</span>
      <section>
        <Popup className="k-menu-popup">
          <MenuList>
            <MenuListItem icon="folder" first text="Normal" showArrow></MenuListItem>
            <MenuListItem icon="folder" text="Hover" hover showArrow></MenuListItem>
            <MenuListItem icon="folder" text="Active" active showArrow></MenuListItem>
            <MenuListItem icon="folder" text="Focus" focus showArrow></MenuListItem>
            <MenuListItem icon="folder" text="Focus + Active" focus active showArrow></MenuListItem>
            <MenuListItem icon="folder" last text="Disabled" disabled showArrow></MenuListItem>
          </MenuList>
        </Popup>
      </section>
    </div>
  </>
);
