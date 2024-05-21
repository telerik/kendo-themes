import { PivotGrid, PivotGridCell, PivotGridRow, PivotGridTable, PivotGridTbody } from "../";

export const PivotGridNormal = (props) => (
    <PivotGrid
        style={{ gridTemplateRows: "111px 1fr", gridTemplateColumns: "369px 1fr" }}
        columnHeaders={
            <PivotGridTable>
                <colgroup>
                    <col width="200" />
                    <col width="200" />
                    <col width="200" />
                </colgroup>
                <PivotGridTbody>
                    <PivotGridRow >
                        <PivotGridCell as="th" colSpan={2} toggle="up" headerTitle="Categories" headerRootCell/>
                        <PivotGridCell as="th" colSpan={1} rowSpan={2} headerTitle="Categories" headerRootCell headerTotalCell/>
                    </PivotGridRow>
                    <PivotGridRow>
                        <PivotGridCell as="th" colSpan={1} headerTitle="Seafood"/>
                        <PivotGridCell as="th" colSpan={1} headerTitle="Beverages"/>
                    </PivotGridRow>
                    <PivotGridRow>
                        <PivotGridCell as="th" colSpan={1} toggle="down" headerTitle="Products" headerRootCell/>
                        <PivotGridCell as="th" colSpan={1} toggle="down" headerTitle="Products" headerRootCell/>
                        <PivotGridCell as="th" colSpan={1} headerTitle="Products" headerRootCell headerTotalCell/>
                    </PivotGridRow>
                </PivotGridTbody>
            </PivotGridTable>
        }
        rowHeaders={
            <PivotGridTable>
                <colgroup>
                    <col />
                    <col />
                    <col />
                </colgroup>
                <PivotGridTbody>
                    <PivotGridRow>
                        <PivotGridCell as="th" colSpan={1} rowSpan={5} toggle="up" headerTitle="Regions" headerRootCell />
                        <PivotGridCell as="th" colSpan={1} headerTitle="South America" />
                        <PivotGridCell as="th" colSpan={1} rowSpan={1} toggle="down" headerTitle="Countries" headerRootCell />
                    </PivotGridRow>
                    <PivotGridRow>
                        <PivotGridCell as="th" colSpan={1} headerTitle="North America" />
                        <PivotGridCell as="th" colSpan={1} rowSpan={1} toggle="down" headerTitle="Countries" headerRootCell />
                    </PivotGridRow>
                    <PivotGridRow>
                        <PivotGridCell as="th" colSpan={1} headerTitle="Europe" />
                        <PivotGridCell as="th" colSpan={1} rowSpan={1} toggle="down" headerTitle="Countries" headerRootCell />
                    </PivotGridRow>
                    <PivotGridRow>
                        <PivotGridCell as="th" colSpan={1} headerTitle="Asia" />
                        <PivotGridCell as="th" colSpan={1} rowSpan={1} toggle="down" headerTitle="Countries" headerRootCell />
                    </PivotGridRow>
                    <PivotGridRow>
                        <PivotGridCell as="th" colSpan={1} headerTitle="Africa" />
                        <PivotGridCell as="th" colSpan={1} rowSpan={1} toggle="down" headerTitle="Countries" headerRootCell />
                    </PivotGridRow>
                    <PivotGridRow>
                        <PivotGridCell as="th" colSpan={2} headerTitle="Regions" headerRootCell headerTotalCell />
                        <PivotGridCell as="th" colSpan={1} rowSpan={1} headerTitle="Countries" headerRootCell headerTotalCell />
                    </PivotGridRow>
                </PivotGridTbody>
            </PivotGridTable>
        }
        children={
            <PivotGridTable>
                <colgroup>
                    <col width="200" />
                    <col width="200" />
                    <col width="200" />
                </colgroup>
                <PivotGridTbody>
                    <PivotGridRow>
                        <PivotGridCell as="td" colSpan={1} content="1847.00" />
                        <PivotGridCell as="td" colSpan={1} content="1488.00" />
                        <PivotGridCell as="td" colSpan={1} content="3335.00" totalCell />
                    </PivotGridRow>
                    <PivotGridRow>
                        <PivotGridCell as="td" colSpan={1} content="1998.00" />
                        <PivotGridCell as="td" colSpan={1} content="1406.00" />
                        <PivotGridCell as="td" colSpan={1} content="3404.00" totalCell />
                    </PivotGridRow>
                    <PivotGridRow>
                        <PivotGridCell as="td" colSpan={1} content="2065.00" />
                        <PivotGridCell as="td" colSpan={1} content="1242.00" />
                        <PivotGridCell as="td" colSpan={1} content="3307.00" totalCell />
                    </PivotGridRow>
                    <PivotGridRow>
                        <PivotGridCell as="td" colSpan={1} content="1830.00" />
                        <PivotGridCell as="td" colSpan={1} content="1579.00" />
                        <PivotGridCell as="td" colSpan={1} content="3409.00" totalCell />
                    </PivotGridRow>
                    <PivotGridRow>
                        <PivotGridCell as="td" colSpan={1} content="2005.00" />
                        <PivotGridCell as="td" colSpan={1} content="1441.00" />
                        <PivotGridCell as="td" colSpan={1} content="3446.00" totalCell />
                    </PivotGridRow>
                    <PivotGridRow>
                        <PivotGridCell as="td" colSpan={1} content="9745.00" totalCell />
                        <PivotGridCell as="td" colSpan={1} content="7156.00" totalCell />
                        <PivotGridCell as="td" colSpan={1} content="16901.00" totalCell />
                    </PivotGridRow>
                </PivotGridTbody>
            </PivotGridTable>
        }
        {...props}
    />
);
