import { MenuItem, MenuNormal, MenuList, MenuListItem, MenuVertical } from "..";
import { Popup } from "../../popup";

const style = `
    .k-animation-container {
        position: relative;
    }
`;

export default () => (
  <>
    <style>{style}</style>
    <div id="test-area" className="k-d-grid k-grid-cols-3">
      <span>Horizontal - No icon</span>
      <span>Vertical - No icon</span>
      <span>Popup - No icon</span>

      <section>
        <MenuNormal>
          <MenuItem first text="Item"></MenuItem>
          <MenuItem first text="Item"></MenuItem>
          <MenuItem last text="Item"></MenuItem>
        </MenuNormal>
      </section>

      <section>
        <MenuVertical>
          <MenuItem first text="Item"></MenuItem>
          <MenuItem first text="Item"></MenuItem>
          <MenuItem last text="Item"></MenuItem>
        </MenuVertical>
      </section>

      <section>
        <Popup className="k-menu-popup">
          <MenuList>
            <MenuListItem first text="Item"></MenuListItem>
            <MenuListItem text="Item"></MenuListItem>
            <MenuListItem last text="Item"></MenuListItem>
          </MenuList>
        </Popup>
      </section>

      <span>Horizontal - One icon</span>
      <span>Vertical - One icon</span>
      <span>Popup - One icon</span>

      <section>
        <MenuNormal>
          <MenuItem first text="Item"></MenuItem>
          <MenuItem icon="folder" text="Item"></MenuItem>
          <MenuItem last text="Item"></MenuItem>
        </MenuNormal>
      </section>

      <section>
        <MenuVertical>
          <MenuItem first text="Item"></MenuItem>
          <MenuItem icon="folder" text="Item"></MenuItem>
          <MenuItem last text="Item"></MenuItem>
        </MenuVertical>
      </section>

      <section>
        <Popup className="k-menu-popup">
          <MenuList>
            <MenuListItem first text="Item"></MenuListItem>
            <MenuListItem icon="folder" text="Item"></MenuListItem>
            <MenuListItem last text="Item"></MenuListItem>
          </MenuList>
        </Popup>
      </section>

      <span>Horizontal - All icons</span>
      <span>Vertical - All icons</span>
      <span>Popup - All icons</span>

      <section>
        <MenuNormal>
          <MenuItem icon="folder" first text="Item"></MenuItem>
          <MenuItem icon="folder" text="Item"></MenuItem>
          <MenuItem icon="folder" last text="Item"></MenuItem>
        </MenuNormal>
      </section>

      <section>
        <MenuVertical>
          <MenuItem icon="folder" first text="Item"></MenuItem>
          <MenuItem icon="folder" text="Item"></MenuItem>
          <MenuItem icon="folder" last text="Item"></MenuItem>
        </MenuVertical>
      </section>

      <section>
        <Popup className="k-menu-popup">
          <MenuList>
            <MenuListItem icon="folder" first text="Item"></MenuListItem>
            <MenuListItem icon="folder" text="Item"></MenuListItem>
            <MenuListItem icon="folder" last text="Item"></MenuListItem>
          </MenuList>
        </Popup>
      </section>

      <span>Horizontal - After icons</span>
      <span>Vertical - After icons</span>
      <span>Popup - After icons</span>

      <section>
        <MenuNormal>
          <MenuItem icon="folder" iconPosition="after" first text="Item"></MenuItem>
          <MenuItem icon="folder" iconPosition="after" text="Item"></MenuItem>
          <MenuItem icon="folder" iconPosition="after" last text="Item"></MenuItem>
        </MenuNormal>
      </section>

      <section>
        <MenuVertical>
          <MenuItem icon="folder" iconPosition="after" first text="Item"></MenuItem>
          <MenuItem icon="folder" iconPosition="after" text="Item"></MenuItem>
          <MenuItem icon="folder" iconPosition="after" last text="Item"></MenuItem>
        </MenuVertical>
      </section>

      <section>
        <Popup className="k-menu-popup">
          <MenuList>
            <MenuListItem icon="folder" iconPosition="after" first text="Item"></MenuListItem>
            <MenuListItem icon="folder" iconPosition="after" text="Item"></MenuListItem>
            <MenuListItem icon="folder" iconPosition="after" last text="Item"></MenuListItem>
          </MenuList>
        </Popup>
      </section>
    </div>
  </>
);
