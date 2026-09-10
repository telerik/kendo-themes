import { MenuList, MenuListItem, MenuGroupHeader, MenuSeparator } from "..";
import { Popup } from "../../popup";

const style = `
    .k-animation-container {
        position: relative;
    }
`;

export default () => (
  <>
    <style>{style}</style>
    <div id="test-area" className="k-d-grid k-grid-cols-2">
      <Popup className="k-menu-popup">
        <MenuList>
          <MenuGroupHeader>Group 1</MenuGroupHeader>
          <MenuListItem text="Sub item 1.1"></MenuListItem>
          <MenuListItem text="Sub item 1.2"></MenuListItem>
          <MenuSeparator></MenuSeparator>
          <MenuGroupHeader>Group 2</MenuGroupHeader>
          <MenuListItem text="Sub item 2.1"></MenuListItem>
          <MenuListItem last text="Sub item 2.2"></MenuListItem>
        </MenuList>
      </Popup>

      <Popup className="k-menu-popup">
        <MenuList>
          <MenuGroupHeader groupIconName="folder">Group 1</MenuGroupHeader>
          <MenuListItem text="Sub item 1.1"></MenuListItem>
          <MenuListItem text="Sub item 1.2"></MenuListItem>
          <MenuSeparator></MenuSeparator>
          <MenuGroupHeader groupIconName="gear">Group 2</MenuGroupHeader>
          <MenuListItem text="Sub item 2.1"></MenuListItem>
          <MenuListItem last text="Sub item 2.2"></MenuListItem>
        </MenuList>
      </Popup>
    </div>
  </>
);
