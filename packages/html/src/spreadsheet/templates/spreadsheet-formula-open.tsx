import { Spreadsheet } from "../spreadsheet.spec";
import { SpreadsheetActionBar } from "../spreadsheet-action-bar";
import { SpreadsheetHeader } from "../spreadsheet-header";
import { SpreadsheetSheetsBar } from "../spreadsheet-sheets-bar";
import { SpreadsheetView } from "../spreadsheet-view";

export const SpreadsheetFormulaOpen = (props) => (
    <Spreadsheet
        children={
            <>
                <SpreadsheetHeader />
                <SpreadsheetActionBar formulaExpanded />
                <SpreadsheetView
                    selection={
                        <div className="k-spreadsheet-selection k-single-selection" style={{ width: "880px", height: "71px", top: "30px", left: "30px" }} />
                    }
                    rowHeaderSelection={{ 1: "partial" }}
                    columnHeaderSelection={{ A: "partial", B: "partial", C: "partial", D: "partial", E: "partial", F: "partial", G: "partial" }}
                    activeCellIndex={0}
                />
                <SpreadsheetSheetsBar />
            </>
        }
        {...props}
    />
);
