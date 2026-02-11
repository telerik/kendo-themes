import { MenuListItem } from "../../menu/menu-list-item.spec";
import { MenuSeparator } from "../../menu/menu-separator.spec";
import { Popup } from "../../popup/popup.spec";
import { SpreadsheetActionBar } from "../spreadsheet-action-bar";
import { SpreadsheetHeader } from "../spreadsheet-header";
import { SpreadsheetNormal } from "../templates/spreadsheet-normal";
import { SpreadsheetSheetsBar } from "../spreadsheet-sheets-bar";
import { SpreadsheetView } from "../spreadsheet-view";
import { ContextMenuNormal } from "../../context-menu/templates/context-menu-normal";

const style = `
    #test-area {
        max-width: 1150px;
    }

    .k-spreadsheet-cell,
    .k-spreadsheet-formula-input {
        white-space: normal !important;
    }

    #spreadsheet-context-menu-cell {
        position: absolute;
        top: 270px;
        left: 700px;
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
                    selection={<div className="k-spreadsheet-selection k-single-selection" style={{ width: "65px", height: "31px", top: "125px", left: "845px" }}></div>}
                    rowHeaderSelection={{ 3: "partial" }}
                    columnHeaderSelection={{ G: "partial" }}
                    activeCellIndex={14}
                />
                <SpreadsheetSheetsBar />
            </SpreadsheetNormal>

            <Popup id="spreadsheet-context-menu-cell" className="k-menu-popup k-context-menu-popup">
                <ContextMenuNormal>
                    <MenuListItem first text="Lock" icon="lock"></MenuListItem>
                    <MenuListItem text="Cut" icon="cut"></MenuListItem>
                    <MenuListItem text="Copy" icon="copy"></MenuListItem>
                    <MenuListItem text="Paste" icon="clipboard"></MenuListItem>
                    <MenuSeparator></MenuSeparator>
                    <MenuListItem text="Insert Link" icon="link"></MenuListItem>
                    <MenuListItem last text="Insert Comment" icon="comment"></MenuListItem>
                </ContextMenuNormal>
            </Popup>
        </div>
    </>
);
