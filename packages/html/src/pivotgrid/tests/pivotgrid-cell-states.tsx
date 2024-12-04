import { PivotGridCell, PivotGridNormal, PivotGridRow, PivotGridTable, PivotGridTbody } from '..';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <section>
                <PivotGridNormal
                    emptyCell={
                        <span className="k-pivotgrid-empty-cell k-focus">
                            <span className="k-sr-only">PivotGrid component. Use the arrow keys to navigate.</span>
                        </span>
                    }
                    rowHeaders={
                        <PivotGridTable>
                            <colgroup>
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <PivotGridTbody>
                                <PivotGridRow hover>
                                    <PivotGridCell as="th" rowSpan={5} toggle="up" headerTitle="Regions" headerRootCell />
                                    <PivotGridCell as="th" colSpan={1} headerTitle="South America" />
                                    <PivotGridCell as="th" rowSpan={1} toggle="down" headerTitle="Countries" headerRootCell />
                                </PivotGridRow>
                                <PivotGridRow selected>
                                    <PivotGridCell as="th" colSpan={1} headerTitle="North America" />
                                    <PivotGridCell as="th" rowSpan={1} toggle="down" headerTitle="Countries" headerRootCell />
                                </PivotGridRow>
                                <PivotGridRow hover selected>
                                    <PivotGridCell as="th" colSpan={1} headerTitle="Europe" />
                                    <PivotGridCell as="th" rowSpan={1} toggle="down" headerTitle="Countries" headerRootCell />
                                </PivotGridRow>
                                <PivotGridRow>
                                    <PivotGridCell focus as="th" colSpan={1} headerTitle="Asia" />
                                    <PivotGridCell focus as="th" rowSpan={1} toggle="down" headerTitle="Countries" headerRootCell />
                                </PivotGridRow>
                                <PivotGridRow>
                                    <PivotGridCell selected as="th" colSpan={1} headerTitle="Africa" />
                                    <PivotGridCell selected as="th" rowSpan={1} toggle="down" headerTitle="Countries" headerRootCell />
                                </PivotGridRow>
                                <PivotGridRow>
                                    <PivotGridCell focus as="th" colSpan={2} headerTitle="Regions" headerRootCell headerTotalCell />
                                    <PivotGridCell selected as="th" rowSpan={1} headerTitle="Countries" headerRootCell headerTotalCell />
                                </PivotGridRow>
                            </PivotGridTbody>
                        </PivotGridTable>
                    }
                >
                    <PivotGridTable>
                        <colgroup>
                            <col width="200" />
                            <col width="200" />
                            <col width="200" />
                        </colgroup>
                        <PivotGridTbody>
                            <PivotGridRow hover>
                                <PivotGridCell as="td" colSpan={1} content="1847.00" />
                                <PivotGridCell as="td" colSpan={1} content="1488.00" />
                                <PivotGridCell as="td" colSpan={1} content="3335.00" totalCell />
                            </PivotGridRow>
                            <PivotGridRow selected>
                                <PivotGridCell as="td" colSpan={1} content="1998.00" />
                                <PivotGridCell as="td" colSpan={1} content="1406.00" />
                                <PivotGridCell as="td" colSpan={1} content="3404.00" totalCell />
                            </PivotGridRow>
                            <PivotGridRow hover selected>
                                <PivotGridCell as="td" colSpan={1} content="2065.00" />
                                <PivotGridCell as="td" colSpan={1} content="1242.00" />
                                <PivotGridCell as="td" colSpan={1} content="3307.00" totalCell />
                            </PivotGridRow>
                            <PivotGridRow>
                                <PivotGridCell as="td" colSpan={1} content="1830.00" />
                                <PivotGridCell focus as="td" colSpan={1} content="1579.00" />
                                <PivotGridCell focus as="td" colSpan={1} content="3409.00" totalCell />
                            </PivotGridRow>
                            <PivotGridRow>
                                <PivotGridCell as="td" colSpan={1} content="2005.00" />
                                <PivotGridCell selected as="td" colSpan={1} content="1441.00" />
                                <PivotGridCell selected as="td" colSpan={1} content="3446.00" totalCell />
                            </PivotGridRow>
                            <PivotGridRow>
                                <PivotGridCell as="td" colSpan={1} content="9745.00" totalCell />
                                <PivotGridCell as="td" colSpan={1} content="7156.00" totalCell />
                                <PivotGridCell as="td" colSpan={1} content="16901.00" totalCell />
                            </PivotGridRow>
                        </PivotGridTbody>
                    </PivotGridTable>
                </PivotGridNormal>
            </section>
        </div>
    </>
);
