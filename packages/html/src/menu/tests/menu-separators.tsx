import { Popup } from "../../popup";
import { MenuList, MenuItem, MenuVertical, MenuNormal, MenuListItem, MenuSeparator } from "..";

const style = `
    #test-area section {
        height: 300px;
    }

    .k-animation-container {
        position: relative;
    }
`;

export default () => (
  <>
    <style>{style}</style>
    <div id="test-area" className="k-d-grid k-grid-cols-3">
      <span>Horizontal Menu with Separators</span>
      <span>Vertical Menu with Separators</span>
      <span>Popup Menu with Separators</span>

      <section>
        <MenuNormal>
          <MenuItem first text="Item"></MenuItem>
          <MenuItem first text="Item"></MenuItem>
          <MenuSeparator></MenuSeparator>
          <MenuItem first text="Item"></MenuItem>
          <MenuItem last text="Item"></MenuItem>
        </MenuNormal>
      </section>

      <section>
        <MenuVertical>
          <MenuItem first text="Item"></MenuItem>
          <MenuItem first text="Item"></MenuItem>
          <MenuSeparator></MenuSeparator>
          <MenuItem first text="Item"></MenuItem>
          <MenuItem last text="Item"></MenuItem>
        </MenuVertical>
      </section>

      <section>
        <Popup className="k-menu-popup">
          <MenuList>
            <MenuListItem first text="Item"></MenuListItem>
            <MenuListItem text="Item"></MenuListItem>
            <MenuSeparator></MenuSeparator>
            <MenuListItem text="Item"></MenuListItem>
            <MenuListItem last text="Item"></MenuListItem>
          </MenuList>
        </Popup>
      </section>
    </div>
  </>
);
