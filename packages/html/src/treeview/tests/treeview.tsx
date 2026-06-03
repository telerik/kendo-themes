import { TreeviewItem, TreeviewNormal, TreeviewHierarchy, TreeviewIcons, TreeviewCheckboxes } from "../../treeview";

const style = `
    #test-area {
        grid-template-columns: 250px 250px auto auto;
    }

    .k-treeview {
        border: 1px dotted black;
    }
`;

export default () => (
  <>
    <style>{style}</style>
    <div id="test-area" className="k-d-grid k-grid-cols-4">
      <span>states</span>
      <span>states (rtl)</span>
      <span>hierarchy</span>
      <span>hierarchy (rtl)</span>

      <section>
        <TreeviewNormal>
          <TreeviewItem hasChildren showCheckbox text="Hover" hover />
          <TreeviewItem hasChildren showCheckbox text="Focus" focus />
          <TreeviewItem hasChildren showCheckbox text="Hover + Focus" hover focus />
          <TreeviewItem hasChildren showCheckbox checked text="Checked" />
          <TreeviewItem hasChildren showCheckbox text="Selected" selected />
          <TreeviewItem hasChildren showCheckbox checked text="Checked + Selected" selected />
          <TreeviewItem hasChildren showCheckbox checked text="^ Hover" selected hover />
          <TreeviewItem hasChildren showCheckbox checked text="^ Focus" selected focus />
          <TreeviewItem hasChildren showCheckbox checked text="^ Hover + Focus" selected hover focus />
          <TreeviewItem hasChildren showCheckbox text="Disabled" disabled />
          <TreeviewItem hasChildren showCheckbox text="Disabled + Focus" disabled focus />
          <TreeviewItem text="Loading" loading />
          <TreeviewItem leafClassName="k-treeview-load-more-button" text="Load more..." />
        </TreeviewNormal>
      </section>
      <section>
        <TreeviewNormal dir="rtl">
          <TreeviewItem hasChildren showCheckbox text="Hover" hover />
          <TreeviewItem hasChildren showCheckbox text="Focus" focus />
          <TreeviewItem hasChildren showCheckbox text="Hover + Focus" hover focus />
          <TreeviewItem hasChildren showCheckbox checked text="Checked" />
          <TreeviewItem hasChildren showCheckbox text="Selected" selected />
          <TreeviewItem hasChildren showCheckbox checked text="Checked + Selected" selected />
          <TreeviewItem hasChildren showCheckbox checked text="^ Hover" selected hover />
          <TreeviewItem hasChildren showCheckbox checked text="^ Focus" selected focus />
          <TreeviewItem hasChildren showCheckbox checked text="^ Hover + Focus" selected hover focus />
          <TreeviewItem hasChildren showCheckbox text="Disabled" disabled />
          <TreeviewItem hasChildren showCheckbox text="Disabled + Focus" disabled focus />
          <TreeviewItem text="Loading" loading />
          <TreeviewItem leafClassName="k-treeview-load-more-button" text="Load more..." />
        </TreeviewNormal>
      </section>
      <section>
        <TreeviewHierarchy />
      </section>
      <section>
        <TreeviewHierarchy dir="rtl" />
      </section>

      <span>icons</span>
      <span>icons (rtl)</span>
      <span>checkboxes</span>
      <span>checkboxes (rtl)</span>

      <section>
        <TreeviewIcons />
      </section>
      <section>
        <TreeviewIcons dir="rtl" />
      </section>

      <section>
        <TreeviewCheckboxes />
      </section>
      <section>
        <TreeviewCheckboxes dir="rtl" />
      </section>
    </div>
  </>
);
