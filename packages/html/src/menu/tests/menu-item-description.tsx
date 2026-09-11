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
      <span>Description</span>

      <section>
        <Popup className="k-menu-popup">
          <MenuList>
            <MenuListItem first text="Normal" description="Description goes here here here here here here"></MenuListItem>
            <MenuListItem text="Normal" description="Description goes here here here here here here"></MenuListItem>
            <MenuListItem text="Normal very very very very very very very very very very very very very very very very long" description="Description goes here very very very very very very very very very very very very very very very very very very very very very very very very long"></MenuListItem>
          </MenuList>
        </Popup>
      </section>

      <span>Description + One Icon</span>

      <section>
        <Popup className="k-menu-popup">
          <MenuList>
            <MenuListItem text="Normal" description="Description goes here here here here here here"></MenuListItem>
            <MenuListItem icon="folder" first text="Icon" description="Description goes here here here here here here"></MenuListItem>
            <MenuListItem text="Normal" description="Description goes here here here here here here"></MenuListItem>
          </MenuList>
        </Popup>
      </section>

      <span>Description + All Icons</span>

      <section>
        <Popup className="k-menu-popup">
          <MenuList>
            <MenuListItem icon="folder" first text="Icon" description="Description goes here here here here here here"></MenuListItem>
            <MenuListItem icon="folder" text="Icon" description="Description goes here here here here here here"></MenuListItem>
            <MenuListItem icon="folder" text="Icon" description="Description goes here here here here here here"></MenuListItem>
          </MenuList>
        </Popup>
      </section>

      <span>Description + Icons After</span>

      <section>
        <Popup className="k-menu-popup">
          <MenuList>
            <MenuListItem icon="folder" first text="Icon" iconPosition="after" description="Description goes here here here here here here"></MenuListItem>
            <MenuListItem icon="folder" text="Icon" iconPosition="after" description="Description goes here here here here here here"></MenuListItem>
            <MenuListItem icon="folder" text="Icon" iconPosition="after" description="Description goes here here here here here here"></MenuListItem>
          </MenuList>
        </Popup>
      </section>
    </div>
  </>
);
