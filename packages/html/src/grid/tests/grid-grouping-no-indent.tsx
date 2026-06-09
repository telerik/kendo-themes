import { GridGroupingNoIndent, GridGroupingCheckboxNoIndent } from '../../grid';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid">

            <span>Grouping no indent</span>

            <GridGroupingNoIndent className="k-grid-no-scrollbar" />

            <span>Grouping checkbox no indent</span>

            <GridGroupingCheckboxNoIndent className="k-grid-no-scrollbar" />

        </div>
    </>
);
