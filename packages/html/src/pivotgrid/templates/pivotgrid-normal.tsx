import { nextId } from '../../misc';
import { PivotGrid, PivotGridCell, PivotGridRow, PivotGridTable, PivotGridTbody } from "../";

export const PivotGridNormal = (props) => {

    // Empty cell ID
    const emptyCellId = nextId('pivotgrid-empty');

    // Column header cell IDs (3 rows x varying cols)
    const chR0C0 = nextId('ch'); // Categories expanded
    const chR0C1 = nextId('ch'); // Categories Total
    const chR1C0 = nextId('ch'); // Seafood
    const chR1C1 = nextId('ch'); // Beverages
    const chR2C0 = nextId('ch'); // Products collapsed
    const chR2C1 = nextId('ch'); // Products collapsed
    const chR2C2 = nextId('ch'); // Products Total

    // Data cell IDs (6 rows x 3 cols)
    const dc: string[][] = [];
    for (let r = 0; r < 6; r++) {
        dc[r] = [];
        for (let c = 0; c < 3; c++) {
            dc[r][c] = nextId('dc');
        }
    }

    return (
        <PivotGrid
            style={{ gridTemplateRows: "111px 1fr", gridTemplateColumns: "369px 1fr" }}
            emptyCell={
                <div className="k-pivotgrid-empty-cell" role="none">
                    <table role="none"><thead role="none"><tr role="none"><th
                        id={emptyCellId}>
                        <span className="k-sr-only">PivotGrid component. Use the arrow keys to navigate.</span>
                    </th></tr></thead></table>
                </div>
            }
            columnHeaders={
                <PivotGridTable role="none">
                    <colgroup>
                        <col width="200" />
                        <col width="200" />
                        <col width="200" />
                    </colgroup>
                    <PivotGridTbody role="rowgroup">
                        <PivotGridRow role="row" aria-owns={`${emptyCellId} ${chR0C0} ${chR0C1}`}>
                            <PivotGridCell as="th" colSpan={2} toggle="up" headerTitle="Categories" headerRootCell role="columnheader" aria-expanded="true" id={chR0C0} />
                            <PivotGridCell as="th" colSpan={1} rowSpan={2} headerTitle="Categories" headerRootCell headerTotalCell role="columnheader" id={chR0C1} />
                        </PivotGridRow>
                        <PivotGridRow role="row">
                            <PivotGridCell as="th" colSpan={1} headerTitle="Seafood" role="columnheader" id={chR1C0} />
                            <PivotGridCell as="th" colSpan={1} headerTitle="Beverages" role="columnheader" id={chR1C1} />
                        </PivotGridRow>
                        <PivotGridRow role="row">
                            <PivotGridCell as="th" colSpan={1} toggle="down" headerTitle="Products" headerRootCell role="columnheader" aria-expanded="false" id={chR2C0} />
                            <PivotGridCell as="th" colSpan={1} toggle="down" headerTitle="Products" headerRootCell role="columnheader" aria-expanded="false" id={chR2C1} />
                            <PivotGridCell as="th" colSpan={1} headerTitle="Products" headerRootCell headerTotalCell role="columnheader" id={chR2C2} />
                        </PivotGridRow>
                    </PivotGridTbody>
                </PivotGridTable>
            }
            rowHeaders={
                <PivotGridTable role="none">
                    <colgroup>
                        <col />
                        <col />
                        <col />
                    </colgroup>
                    <PivotGridTbody role="rowgroup">
                        <PivotGridRow role="row" aria-owns={`${dc[0][0]} ${dc[0][1]} ${dc[0][2]}`}>
                            <PivotGridCell as="th" colSpan={1} rowSpan={5} toggle="up" headerTitle="Regions" headerRootCell role="rowheader" aria-expanded="true" />
                            <PivotGridCell as="th" colSpan={1} headerTitle="South America" role="rowheader" />
                            <PivotGridCell as="th" colSpan={1} rowSpan={1} toggle="down" headerTitle="Countries" headerRootCell role="rowheader" aria-expanded="false" />
                        </PivotGridRow>
                        <PivotGridRow role="row" aria-owns={`${dc[1][0]} ${dc[1][1]} ${dc[1][2]}`}>
                            <PivotGridCell as="th" colSpan={1} headerTitle="North America" role="rowheader" />
                            <PivotGridCell as="th" colSpan={1} rowSpan={1} toggle="down" headerTitle="Countries" headerRootCell role="rowheader" aria-expanded="false" />
                        </PivotGridRow>
                        <PivotGridRow role="row" aria-owns={`${dc[2][0]} ${dc[2][1]} ${dc[2][2]}`}>
                            <PivotGridCell as="th" colSpan={1} headerTitle="Europe" role="rowheader" />
                            <PivotGridCell as="th" colSpan={1} rowSpan={1} toggle="down" headerTitle="Countries" headerRootCell role="rowheader" aria-expanded="false" />
                        </PivotGridRow>
                        <PivotGridRow role="row" aria-owns={`${dc[3][0]} ${dc[3][1]} ${dc[3][2]}`}>
                            <PivotGridCell as="th" colSpan={1} headerTitle="Asia" role="rowheader" />
                            <PivotGridCell as="th" colSpan={1} rowSpan={1} toggle="down" headerTitle="Countries" headerRootCell role="rowheader" aria-expanded="false" />
                        </PivotGridRow>
                        <PivotGridRow role="row" aria-owns={`${dc[4][0]} ${dc[4][1]} ${dc[4][2]}`}>
                            <PivotGridCell as="th" colSpan={1} headerTitle="Africa" role="rowheader" />
                            <PivotGridCell as="th" colSpan={1} rowSpan={1} toggle="down" headerTitle="Countries" headerRootCell role="rowheader" aria-expanded="false" />
                        </PivotGridRow>
                        <PivotGridRow role="row" aria-owns={`${dc[5][0]} ${dc[5][1]} ${dc[5][2]}`}>
                            <PivotGridCell as="th" colSpan={2} headerTitle="Regions" headerRootCell headerTotalCell role="rowheader" />
                            <PivotGridCell as="th" colSpan={1} rowSpan={1} headerTitle="Countries" headerRootCell headerTotalCell role="rowheader" />
                        </PivotGridRow>
                    </PivotGridTbody>
                </PivotGridTable>
            }
            children={
                <PivotGridTable role="none">
                    <colgroup>
                        <col width="200" />
                        <col width="200" />
                        <col width="200" />
                    </colgroup>
                    <PivotGridTbody role="none">
                        <PivotGridRow role="none">
                            <PivotGridCell as="td" role="gridcell" colSpan={1} content="1847.00" id={dc[0][0]} aria-describedby={`${chR1C0} ${chR0C0} ${chR2C0}`} />
                            <PivotGridCell as="td" role="gridcell" colSpan={1} content="1488.00" id={dc[0][1]} aria-describedby={`${chR1C1} ${chR0C0} ${chR2C1}`} />
                            <PivotGridCell as="td" role="gridcell" colSpan={1} content="3335.00" totalCell id={dc[0][2]} aria-describedby={`${chR0C1} ${chR2C2}`} />
                        </PivotGridRow>
                        <PivotGridRow role="none">
                            <PivotGridCell as="td" role="gridcell" colSpan={1} content="1998.00" id={dc[1][0]} aria-describedby={`${chR1C0} ${chR0C0} ${chR2C0}`} />
                            <PivotGridCell as="td" role="gridcell" colSpan={1} content="1406.00" id={dc[1][1]} aria-describedby={`${chR1C1} ${chR0C0} ${chR2C1}`} />
                            <PivotGridCell as="td" role="gridcell" colSpan={1} content="3404.00" totalCell id={dc[1][2]} aria-describedby={`${chR0C1} ${chR2C2}`} />
                        </PivotGridRow>
                        <PivotGridRow role="none">
                            <PivotGridCell as="td" role="gridcell" colSpan={1} content="2065.00" id={dc[2][0]} aria-describedby={`${chR1C0} ${chR0C0} ${chR2C0}`} />
                            <PivotGridCell as="td" role="gridcell" colSpan={1} content="1242.00" id={dc[2][1]} aria-describedby={`${chR1C1} ${chR0C0} ${chR2C1}`} />
                            <PivotGridCell as="td" role="gridcell" colSpan={1} content="3307.00" totalCell id={dc[2][2]} aria-describedby={`${chR0C1} ${chR2C2}`} />
                        </PivotGridRow>
                        <PivotGridRow role="none">
                            <PivotGridCell as="td" role="gridcell" colSpan={1} content="1830.00" id={dc[3][0]} aria-describedby={`${chR1C0} ${chR0C0} ${chR2C0}`} />
                            <PivotGridCell as="td" role="gridcell" colSpan={1} content="1579.00" id={dc[3][1]} aria-describedby={`${chR1C1} ${chR0C0} ${chR2C1}`} />
                            <PivotGridCell as="td" role="gridcell" colSpan={1} content="3409.00" totalCell id={dc[3][2]} aria-describedby={`${chR0C1} ${chR2C2}`} />
                        </PivotGridRow>
                        <PivotGridRow role="none">
                            <PivotGridCell as="td" role="gridcell" colSpan={1} content="2005.00" id={dc[4][0]} aria-describedby={`${chR1C0} ${chR0C0} ${chR2C0}`} />
                            <PivotGridCell as="td" role="gridcell" colSpan={1} content="1441.00" id={dc[4][1]} aria-describedby={`${chR1C1} ${chR0C0} ${chR2C1}`} />
                            <PivotGridCell as="td" role="gridcell" colSpan={1} content="3446.00" totalCell id={dc[4][2]} aria-describedby={`${chR0C1} ${chR2C2}`} />
                        </PivotGridRow>
                        <PivotGridRow role="none">
                            <PivotGridCell as="td" role="gridcell" colSpan={1} content="9745.00" totalCell id={dc[5][0]} aria-describedby={`${chR1C0} ${chR0C0} ${chR2C0}`} />
                            <PivotGridCell as="td" role="gridcell" colSpan={1} content="7156.00" totalCell id={dc[5][1]} aria-describedby={`${chR1C1} ${chR0C0} ${chR2C1}`} />
                            <PivotGridCell as="td" role="gridcell" colSpan={1} content="16901.00" totalCell id={dc[5][2]} aria-describedby={`${chR0C1} ${chR2C2}`} />
                        </PivotGridRow>
                    </PivotGridTbody>
                </PivotGridTable>
            }
            {...props}
        />
    );
};
