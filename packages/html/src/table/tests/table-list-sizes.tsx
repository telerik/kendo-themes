import { DataTable, DataTableList } from "../../table";

const style = `
    .k-table-scroller {
        max-height: 200px;
    }
`;

export default () => (
  <>
    <style>{style}</style>
    <div id="test-area" className="k-d-grid k-grid-cols-4">
      {DataTable.options.size.map((size) => (
        <div>
          <span>Table list {size || "default"}</span>
          <DataTableList size={size} />
        </div>
      ))}
    </div>
  </>
);
