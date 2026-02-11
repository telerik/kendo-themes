import { Icon } from "../../icon/icon.spec";
import { SpreadsheetActionBar } from "../spreadsheet-action-bar";
import { SpreadsheetHeader } from "../spreadsheet-header";
import { SpreadsheetNormal } from "../templates/spreadsheet-normal";
import { SpreadsheetSheetsBar } from "../spreadsheet-sheets-bar";
import { SpreadsheetView } from "../spreadsheet-view";

const style = `
    #test-area {
        max-width: 1150px;
    }

    .k-spreadsheet-cell,
    .k-spreadsheet-formula-input {
        white-space: normal !important;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area">
            <SpreadsheetNormal>
                <SpreadsheetHeader />
                <SpreadsheetActionBar />
                <SpreadsheetView
                    filter={
                        <>
                            <div className="k-filter-range" style={{ width: "331px", height: "271px", top: "125px", left: "130px" }}></div>
                            <span className="k-spreadsheet-filter" style={{ left: "318px", top: "129px" }}>
                                <Icon icon="filter" />
                            </span>
                            <span className="k-spreadsheet-filter" style={{ left: "433px", top: "129px" }}>
                                <Icon icon="filter-sort-asc-small" />
                            </span>
                        </>
                    }
                    columnHeaderSelection={{ C: "partial" }}
                    rowHeaderSelection={{ 3: "partial" }}
                />
                <SpreadsheetSheetsBar />
            </SpreadsheetNormal>
        </div>
    </>
);
