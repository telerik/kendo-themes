import { TreeviewItem, TreeviewNormal } from "../..";
import { DropdownTreePopup } from "../../dropdowntree/templates/dropdowntree-popup";
import { DropdownTreeFiltering } from "../../dropdowntree/templates/dropdowntree-filtering";

const styles = `
    .k-animation-container {
        position: relative;
    }
`;

export default () => (
  <>
    <style>{styles}</style>
    <div id="test-area" className="k-d-grid k-grid-cols-3">
      <span>DropdownTree</span>
      <span>DropdownTree Filtering</span>
      <span>DropdownTree Treeview States</span>

      <div>
        <DropdownTreePopup value="Opened" />
      </div>

      <div>
        <DropdownTreeFiltering value="Filtering" />
      </div>

      <div>
        <DropdownTreePopup
          value="Opened"
          popup={
            <TreeviewNormal ariaLabel="States treeview">
              <TreeviewItem showCheckbox text="Hover" hover />
              <TreeviewItem showCheckbox text="Focus" focus />
              <TreeviewItem showCheckbox text="Hover + Focus" hover focus />
              <TreeviewItem showCheckbox checked text="Checked" />
              <TreeviewItem showCheckbox text="Selected" selected />
              <TreeviewItem showCheckbox checked text="Checked + Selected" selected />
              <TreeviewItem showCheckbox checked text="^ Hover" selected hover />
              <TreeviewItem showCheckbox checked text="^ Focus" selected focus />
              <TreeviewItem showCheckbox checked text="^ Hover + Focus" selected hover focus />
              <TreeviewItem showCheckbox text="Disabled" disabled />
              <TreeviewItem showCheckbox text="Disabled + Focus" disabled focus />
              <TreeviewItem showCheckbox leafClassName="k-treeview-load-more-button" text="Load more..." />
            </TreeviewNormal>
          }
        />
      </div>

      <span>DropdownTree RTL</span>
      <span>DropdownTree Filtering RTL</span>
      <span>DropdownTree Treeview States RTL</span>
      <div>
        <DropdownTreePopup value="Opened" dir="rtl" />
      </div>

      <div>
        <DropdownTreeFiltering value="Filtering" dir="rtl" />
      </div>

      <div>
        <DropdownTreePopup
          dir="rtl"
          value="Opened"
          popup={
            <TreeviewNormal dir="rtl">
              <TreeviewItem showCheckbox text="Hover" hover />
              <TreeviewItem showCheckbox text="Focus" focus />
              <TreeviewItem showCheckbox text="Hover + Focus" hover focus />
              <TreeviewItem showCheckbox checked text="Checked" />
              <TreeviewItem showCheckbox text="Selected" selected />
              <TreeviewItem showCheckbox checked text="Checked + Selected" selected />
              <TreeviewItem showCheckbox checked text="^ Hover" selected hover />
              <TreeviewItem showCheckbox checked text="^ Focus" selected focus />
              <TreeviewItem showCheckbox checked text="^ Hover + Focus" selected hover focus />
              <TreeviewItem showCheckbox text="Disabled" disabled />
              <TreeviewItem showCheckbox text="Disabled + Focus" disabled focus />
              <TreeviewItem showCheckbox leafClassName="k-treeview-load-more-button" text="Load more..." />
            </TreeviewNormal>
          }
        />
      </div>
    </div>
  </>
);
