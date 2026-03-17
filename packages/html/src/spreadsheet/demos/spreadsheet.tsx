import { SpreadsheetNormal } from '../templates/spreadsheet-normal';
import { SpreadsheetHeader } from '../spreadsheet-header';
import { SpreadsheetActionBar } from '../spreadsheet-action-bar';
import { SpreadsheetSheetsBar } from '../spreadsheet-sheets-bar';
import { SpreadsheetView } from '../spreadsheet-view';
import { Spreadsheet } from '../spreadsheet.spec';

const options = {};
const states = [];
const variants = [];
const defaults = {};
const modifiers = [];

export const SpreadsheetDemo = () => {
  return (
    <SpreadsheetNormal style={{ height: "415px", width: "80%" }}>
      <SpreadsheetHeader />
      <SpreadsheetActionBar />
      <SpreadsheetView
        selection={
          <div className="k-spreadsheet-selection k-single-selection" style={{ width: "101px", height: "31px", top: "125px", left: "30px" }} />
        }
        rowHeaderSelection={{ 3: "partial" }}
        columnHeaderSelection={{ A: "partial"}}
        activeCellIndex={8}
      />
      <SpreadsheetSheetsBar />
    </SpreadsheetNormal>
  );
}


SpreadsheetDemo.options = options;
SpreadsheetDemo.states = states;
SpreadsheetDemo.variants = variants;
SpreadsheetDemo.defaultOptions = defaults;
SpreadsheetDemo.modifiers = modifiers;
SpreadsheetDemo.className = Spreadsheet.className;

export default SpreadsheetDemo;

