import { MenuList, MenuListItem } from "../../menu";
import { Popup } from "../../popup";
import { SpreadsheetActionBar, SpreadsheetHeader, SpreadsheetNormal, SpreadsheetSheetsBar, SpreadsheetView } from "..";

const style = `
    #test-area {
        max-width: 1150px;
    }

    .k-spreadsheet-cell,
    .k-spreadsheet-formula-input {
        white-space: normal !important;
    }

    #spreadsheet-context-menu-row {
        position: absolute;
        top: 260px;
        left: 15px;
        z-index: 2;
        overflow: visible;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <SpreadsheetNormal>
                <SpreadsheetHeader />
                <SpreadsheetActionBar />
                <SpreadsheetView
                    selection={
                        <div className="k-spreadsheet-selection k-single-selection" style={{ width: "1000px", height: "31px", top: "125px", left: "0px" }} />
                    }
                    columnHeaderSelection={{ A: "partial", B: "partial", C: "partial", D: "partial", E: "partial", F: "partial", G: "partial", H: "partial", I: "partial", J: "partial", K: "partial", L: "partial" }}
                    rowHeaderSelection={{ 3: "full" }}
                />
                <SpreadsheetSheetsBar />
            </SpreadsheetNormal>

            <Popup id="spreadsheet-context-menu-row" className="k-menu-popup k-context-menu-popup">
                <MenuList className="k-context-menu">
                    <MenuListItem text="Lock Cells"></MenuListItem>
                    <MenuListItem text="Cut"></MenuListItem>
                    <MenuListItem text="Copy"></MenuListItem>
                    <MenuListItem text="Paste"></MenuListItem>
                    <MenuListItem text="Insert Row" showArrow></MenuListItem>
                    <MenuListItem text="Delete Row"></MenuListItem>
                    <MenuListItem text="Hide Row"></MenuListItem>
                </MenuList>
            </Popup>
        </div>
    </>
);
