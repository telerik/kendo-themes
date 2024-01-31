import { Spreadsheet, SpreadsheetActionBar, SpreadsheetHeader, SpreadsheetSheetsBar, SpreadsheetView } from "..";
import { Button } from "../..";

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
            <Spreadsheet style={{ width: '100%' }}>
                <SpreadsheetHeader
                    toolbarItems={[ <Button icon="formula-fx" fillMode="flat">Insert Formula</Button> ]}
                    menuItems={[
                        <li className="k-item k-menu-item k-first">
                            <span className="k-link k-menu-link">File</span>
                        </li>,
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Home</span>
                        </li>,
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Insert</span>
                        </li>,
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Format</span>
                        </li>,
                        <li className="k-item k-menu-item k-active">
                            <span className="k-link k-menu-link">Formulas</span>
                        </li>,
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Data</span>
                        </li>,
                        <li className="k-item k-menu-item k-last">
                            <span className="k-link k-menu-link">View</span>
                        </li>,
                    ]}
                />
                <SpreadsheetActionBar
                    formula={
                        <>
                            <span className="k-syntax-startexp">=</span>
                            <span className="k-syntax-func">SUM</span>
                            <span className="k-syntax-punc">(</span>
                            <span className="k-syntax-ref k-series-a">C3</span>
                            <span className="k-syntax-op">+</span>
                            <span className="k-syntax-ref k-series-a">C4</span>
                            <span className="k-syntax-punc">)</span>
                        </>
                    }
                />
                <SpreadsheetView
                    cellEditor={
                        <div className="k-spreadsheet-cell-editor k-spreadsheet-formula-input" data-role="formulainput" style={{ whiteSpace: "pre", top: "156px", left: "576px", width: "114px", height: "29px", display: "flex", alignItems: "center" }}>
                            <span className="k-syntax-startexp">=</span>
                            <span className="k-syntax-func">SUM</span>
                            <span className="k-syntax-punc">(</span>
                            <span className="k-syntax-ref k-series-a">C3</span>
                            <span className="k-syntax-op">+</span>
                            <span className="k-syntax-ref k-series-a">C4</span>
                            <span className="k-syntax-punc">)</span>
                        </div>
                    }
                    selection={
                        <div className="k-spreadsheet-selection k-single-selection" style={{ width: "116px", height: "31px", top: "155px", left: "575px" }}></div>
                    }
                    selectionHighlight={
                        <>
                            <div className="k-spreadsheet-selection-highlight k-series-a" style={{ width: "116px", height: "31px", top: "125px", left: "345px" }}></div>
                            <div className="k-spreadsheet-selection-highlight k-series-b" style={{ width: "116px", height: "31px", top: "155px", left: "345px" }}></div>
                        </>
                    }
                    columnHeaderSelection={{ E: "partial" }}
                    rowHeaderSelection={{ 4: "partial" }}
                    activeCellIndex={19}
                />
                <SpreadsheetSheetsBar />
            </Spreadsheet>
        </div>
    </>
);
