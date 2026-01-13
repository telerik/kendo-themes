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
      </section>
      <section>
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
