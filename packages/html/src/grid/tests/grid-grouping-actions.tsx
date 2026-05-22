import { Popup } from "../../popup";
import { GridWithGrouping } from "../../grid";
import { MenuList, MenuListItem } from "../..";

const styles = `
    .k-animation-container {
        left: 200px;
        top: 62px;
    }

    .k-grouping-header .k-grouping-dropclue {
        left: 0;
    }
`;

export default () => (
  <>
    <style>{styles}</style>
    <div id="test-area">
      <section>
        <GridWithGrouping dropClue className="k-grid-no-scrollbar"></GridWithGrouping>
      </section>
      <Popup className="k-menu-popup">
        <MenuList id="submenu-popup-1">
          <MenuListItem icon="chevron-left" first text="Move previous"></MenuListItem>
          <MenuListItem icon="chevron-right" last text="Move next"></MenuListItem>
        </MenuList>
      </Popup>
    </div>
  </>
);
