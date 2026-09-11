import { MenuList, MenuListItem } from "../../menu";
import { Popup } from "../../popup";

const style = `
    #test-area {
        grid-template-columns: 120px 1fr 1fr 1fr 1fr;
    }
    .k-animation-container {
        position: relative;
        overflow: visible;
    }
`;

export default () => (
  <>
    <style>{style}</style>
    <div id="test-area" className="k-d-grid">
      <span></span>

      {MenuList.options.size.map((size: string) => (
        <span>{`${size}`}</span>
      ))}

      <span>Normal</span>

      {MenuList.options.size.map((size: any, i: number) => (
        <section key={i}>
          <Popup className="k-menu-popup">
            <MenuList size={size}>
              <MenuListItem first text="Normal"></MenuListItem>
              <MenuListItem text="Hover" hover></MenuListItem>
              <MenuListItem text="Focus" focus></MenuListItem>
              <MenuListItem text="Active" active></MenuListItem>
              <MenuListItem text="Focus & Active" active focus></MenuListItem>
              <MenuListItem last text="Disabled" disabled></MenuListItem>
            </MenuList>
          </Popup>
        </section>
      ))}

      <span>With arrow</span>

      {MenuList.options.size.map((size: any, i: number) => (
        <section key={i}>
          <Popup className="k-menu-popup">
            <MenuList size={size}>
              <MenuListItem first text="Normal" showArrow></MenuListItem>
              <MenuListItem text="Hover" hover showArrow></MenuListItem>
              <MenuListItem text="Focus" focus showArrow></MenuListItem>
              <MenuListItem text="Active" active showArrow></MenuListItem>
              <MenuListItem text="Focus & Active" active focus showArrow></MenuListItem>
              <MenuListItem last text="Disabled" disabled showArrow></MenuListItem>
            </MenuList>
          </Popup>
        </section>
      ))}
    </div>
  </>
);
