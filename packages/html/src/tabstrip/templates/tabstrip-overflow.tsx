import { TabStrip, TabStripContent, TabStripItem } from "..";
import { MenuList, MenuListItem } from "../../menu";
import { Popup } from "../../popup";

const defaultTabStripItems = (
  <>
    <TabStripItem first value="Tab 1" />
    <TabStripItem value="Tab 2" />
    <TabStripItem active value="Tab 3" />
    <TabStripItem value="Tab 4" />
    <TabStripItem value="Tab 5" />
    <TabStripItem last value="Tab 6" />
  </>
);

const defaultPopup = (
  <MenuList>
    <MenuListItem first text="Tab 7" />
    <MenuListItem text="Tab 8" />
    <MenuListItem last text="Tab 9" />
  </MenuList>
);

export const TabStripOverflow = ({ children, showMenu = true, popupOffset = {}, tabStripItems, popup, ...other }: any) => (
  <>
    <TabStrip
      overflow
      tabStripItems={tabStripItems || defaultTabStripItems}
      {...other}
    >
      {children || (
        <TabStripContent active>
          <div>TabStrip Content</div>
        </TabStripContent>
      )}
    </TabStrip>
    {showMenu && (
      <Popup className="k-menu-popup" offset={popupOffset}>
        {popup || defaultPopup}
      </Popup>
    )}
  </>
);
