import React from 'react';
import { classNames } from '../misc';
import { Tooltip } from '../tooltip';
import { SpreadsheetRowHeader, SpreadsheetColumnHeader, SpreadsheetData } from '.';

export const SPREADSHEETVIEW_CLASSNAME = `k-spreadsheet-view`;

const states = [];

const options = {};

export type KendoSpreadsheetViewProps = {
    rowHeaderSelection?: {[key: string]: "partial" | "full" | null };
    columnHeaderSelection?: {[key: string]: "partial" | "full" | null };
    filter?: React.JSX.Element;
    selection?: React.JSX.Element;
    selectionHighlight?: React.JSX.Element;
    cellEditor?: React.JSX.Element;
    activeCellIndex?: number;

};

export const SpreadsheetView = (
    props: KendoSpreadsheetViewProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        selectionHighlight,
        rowHeaderSelection,
        columnHeaderSelection,
        cellEditor,
        activeCellIndex,
        selection,
        filter,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                SPREADSHEETVIEW_CLASSNAME,
                props.className
            )}>
            <div className="k-spreadsheet-fixed-container">
                <div style={{ top: 0, left: 0, height: "100%", width: "100%" }} className="k-spreadsheet-pane k-top k-left">
                    <SpreadsheetData activeCellIndex={activeCellIndex} style={{ position: "relative", left: "30px", top: "30px" }} />
                    <div className="k-selection-wrapper">
                        {selection}
                    </div>

                    <div className="k-auto-fill-wrapper"></div>
                    <div className="k-selection-wrapper">
                        {selectionHighlight}
                    </div>

                    <div className="k-filter-wrapper">
                        {filter}
                    </div>
                    <SpreadsheetRowHeader configureSelection={rowHeaderSelection} style={{ width: "30px", top: "30px" }} />
                    <SpreadsheetColumnHeader configureSelection={columnHeaderSelection} style={{ top: "0px", left: "30px", width: "1199px", height: "30px" }} />
                </div>

                {cellEditor}
                <div style={{ width: "30px", height: "30px" }} className="k-spreadsheet-top-corner"></div>
            </div>


            <div className="k-spreadsheet-scroller">
                <div className="k-spreadsheet-view-size" style={{ height: "6080px", width: "3663px" }}></div>
            </div>


            <div className="k-spreadsheet-clipboard">
                <table style={{ left: "0px", top: "0px", height: "30px", width: "100px" }} className="kendo-clipboard-eb8ea401-ab97-4190-8fb2-b3b83b299a9f" role="presentation">
                    <colgroup>
                        <col style={{ width: "100px" }}></col>
                    </colgroup>
                    <tbody>
                        <tr style={{ height: "30px" }}>
                            <td style={{ backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", borderColor: "rgb(255, 255, 255)" }}>216321</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {!cellEditor &&
                <div className="k-spreadsheet-cell-editor k-spreadsheet-formula-input" data-role="formulainput" style={{ whiteSpace: "pre" }}>216321</div>
            }
            <Tooltip content="A1" style={{ position: "absolute", display: "none" }} />
            <div className="k-list-group-sticky-header" style={{ display: "none" }}></div>
            <div className="k-list-content k-list-scroller" unselectable="on"></div>
        </div>
    );
};

SpreadsheetView.states = states;
SpreadsheetView.options = options;
SpreadsheetView.className = SPREADSHEETVIEW_CLASSNAME;

export default SpreadsheetView;
