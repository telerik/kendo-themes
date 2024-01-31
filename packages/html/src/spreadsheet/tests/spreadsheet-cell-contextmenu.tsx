import { MenuList, MenuListItem, MenuSeparator } from "../../menu";
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
            <SpreadsheetNormal style={{ width: '100%' }}>
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
                <MenuList className="k-context-menu">
                    <MenuListItem text="Lock" icon="lock"></MenuListItem>
                    <MenuListItem text="Cut" icon="cut"></MenuListItem>
                    <MenuListItem text="Copy" icon="copy"></MenuListItem>
                    <MenuListItem text="Paste" icon="clipboard"></MenuListItem>
                    <MenuSeparator></MenuSeparator>
                    <MenuListItem text="Insert Link" icon="link"></MenuListItem>
                    <MenuListItem text="Insert Comment" icon="comment"></MenuListItem>
                </MenuList>
            </Popup>
        </div>
    </>
);
