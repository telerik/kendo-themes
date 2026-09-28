import { MenuList, MenuListItem } from "..";
import { Popup } from "../../popup";

const style = `
    .k-animation-container {
        position: relative;
        width: 500px;
    }
`;

export default () => (
  <>
    <style>{style}</style>
    <div id="test-area" className="k-d-grid k-grid-cols-1">
      <span>Actions - Normal</span>

      <section>
        <Popup className="k-menu-popup">
          <MenuList>
            <MenuListItem text="Item" actions={<kbd>⌘C</kbd>}></MenuListItem>
            <MenuListItem text="Item" actions={<kbd>⌘C</kbd>}></MenuListItem>
            <MenuListItem text="Item" actions={<kbd>⌘C</kbd>}></MenuListItem>
          </MenuList>
        </Popup>
      </section>

      <span>Actions - With icon after</span>

      <section>
        <Popup className="k-menu-popup">
          <MenuList>
            <MenuListItem text="Item" icon="folder" iconPosition="after" actions={<kbd>⌘C</kbd>}></MenuListItem>
            <MenuListItem text="Item" actions={<kbd>⌘C</kbd>}></MenuListItem>
            <MenuListItem text="Item" actions={<kbd>⌘C</kbd>}></MenuListItem>
          </MenuList>
        </Popup>
      </section>

      <span>Actions - One arrow</span>

      <section>
        <Popup className="k-menu-popup">
          <MenuList>
            <MenuListItem text="Item" icon="folder" iconPosition="after" actions={<kbd>⌘C</kbd>}></MenuListItem>
            <MenuListItem showArrow text="Item" actions={<kbd>⌘C</kbd>}></MenuListItem>
            <MenuListItem text="Item" actions={<kbd>⌘C</kbd>}></MenuListItem>
          </MenuList>
        </Popup>
      </section>

      <span>Actions - All arrows</span>

      <section>
        <Popup className="k-menu-popup">
          <MenuList>
            <MenuListItem showArrow text="Item" icon="folder" iconPosition="after"  actions={<kbd>⌘C</kbd>}></MenuListItem>
            <MenuListItem showArrow text="Item" actions={<kbd>⌘C</kbd>}></MenuListItem>
            <MenuListItem showArrow text="Item" actions={<kbd>⌘C</kbd>}></MenuListItem>
          </MenuList>
        </Popup>
      </section>
    </div>
  </>
);
