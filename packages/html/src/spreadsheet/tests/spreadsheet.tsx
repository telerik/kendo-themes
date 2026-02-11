import { SpreadsheetActionBar } from '../spreadsheet-action-bar';
import { SpreadsheetHeader } from '../spreadsheet-header';
import { SpreadsheetSheetsBar } from '../spreadsheet-sheets-bar';
import { SpreadsheetView } from '../spreadsheet-view';
import { SpreadsheetNormal } from '../templates/spreadsheet-normal';

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
                    selection={
                        <div className="k-spreadsheet-selection k-single-selection" style={{ width: "101px", height: "31px", top: "125px", left: "30px" }} />
                    }
                    rowHeaderSelection={{ 3: "partial" }}
                    activeCellIndex={8}
                />
                <SpreadsheetSheetsBar />
            </SpreadsheetNormal>
        </div>
    </>
);
