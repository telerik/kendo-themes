import { GridGroupingGroupsColumn, GridGroupingCheckboxGroupsColumn } from '../../grid';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid">

            <span>Grouping groups column</span>

            <GridGroupingGroupsColumn className="k-grid-no-scrollbar" />

            <span>Grouping checkbox groups column</span>

            <GridGroupingCheckboxGroupsColumn className="k-grid-no-scrollbar" />

        </div>
    </>
);
