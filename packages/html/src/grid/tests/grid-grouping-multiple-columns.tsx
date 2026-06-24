import { GridGroupingMultipleColumns, GridGroupingCheckboxMultipleColumns } from '../../grid';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid">

            <span>Grouping multiple columns</span>

            <GridGroupingMultipleColumns className="k-grid-no-scrollbar" />

            <span>Grouping checkbox multiple columns</span>

            <GridGroupingCheckboxMultipleColumns className="k-grid-no-scrollbar" />

        </div>
    </>
);
