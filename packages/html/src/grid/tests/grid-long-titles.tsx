import { GridNormal, GridHeader, GridHeaderTable, GridHeaderCell, } from '../../grid';
import { TableRow, TableThead } from '../../table';

const styles = `
    .section {
        max-width: 400px;
    }

    .sections-wrapper > .section {
        display: inline-block;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area">
            <div className="sections-wrapper">
                <div className="section">
                    <GridNormal pager={false} groupingHeader={false} _renderAriaRoot={false} className="k-grid-display-block k-grid-no-scrollbar" style={{ height: "60px" }}>
                        <GridHeader>
                            <div className="k-grid-header-wrap k-auto-scrollable">
                                <GridHeaderTable>
                                    <colgroup>
                                        <col />
                                    </colgroup>
                                    <TableThead>
                                        <TableRow>
                                            <GridHeaderCell active filterable menu="column" scope="col" columnTitle="Active Column Menu &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipiscing elit"></GridHeaderCell>
                                        </TableRow>
                                    </TableThead>
                                </GridHeaderTable>
                            </div>
                        </GridHeader>
                    </GridNormal>
                </div>

                <div className="section k-rtl">
                    <GridNormal pager={false} groupingHeader={false} _renderAriaRoot={false} className="k-grid-display-block k-grid-no-scrollbar" style={{ height: "60px" }}>
                        <GridHeader>
                            <div className="k-grid-header-wrap k-auto-scrollable">
                                <GridHeaderTable>
                                    <colgroup>
                                        <col />
                                    </colgroup>
                                    <TableThead>
                                        <TableRow>
                                            <GridHeaderCell filterable scope="col" menu="column" columnTitle="Lorem ipsum dolor sit amet consectetur adipiscing elit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; RTL Column Menu"></GridHeaderCell>
                                        </TableRow>
                                    </TableThead>
                                </GridHeaderTable>
                            </div>
                        </GridHeader>
                    </GridNormal>
                </div>

            </div>

            <div className="sections-wrapper">

                <div className="section">
                    <GridNormal pager={false} groupingHeader={false} _renderAriaRoot={false} className="k-grid-display-block k-grid-no-scrollbar" style={{ height: "60px" }}>
                        <GridHeader>
                            <div className="k-grid-header-wrap k-auto-scrollable">
                                <GridHeaderTable>
                                    <colgroup>
                                        <col />
                                    </colgroup>
                                    <TableThead>
                                        <TableRow>
                                            <GridHeaderCell scope="col" active menu="filter" columnTitle="Active Filterable &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipiscing elit"></GridHeaderCell>
                                        </TableRow>
                                    </TableThead>
                                </GridHeaderTable>
                            </div>
                        </GridHeader>
                    </GridNormal>
                </div>

                <div className="section k-rtl">
                    <GridNormal pager={false} groupingHeader={false} _renderAriaRoot={false} className="k-grid-display-block k-grid-no-scrollbar" style={{ height: "60px" }}>
                        <GridHeader>
                            <div className="k-grid-header-wrap k-auto-scrollable">
                                <GridHeaderTable>
                                    <colgroup>
                                        <col />
                                    </colgroup>
                                    <TableThead>
                                        <TableRow>
                                            <GridHeaderCell scope="col" menu="filter" columnTitle="Lorem ipsum dolor sit amet consectetur adipiscing elit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; RTL Filterable"></GridHeaderCell>
                                        </TableRow>
                                    </TableThead>
                                </GridHeaderTable>
                            </div>
                        </GridHeader>
                    </GridNormal>
                </div>

            </div>

            <div className="sections-wrapper">

                <div className="section">
                    <GridNormal pager={false} groupingHeader={false} _renderAriaRoot={false} className="k-grid-display-block k-grid-no-scrollbar" style={{ height: "60px" }}>
                        <GridHeader>
                            <div className="k-grid-header-wrap k-auto-scrollable">
                                <GridHeaderTable>
                                    <colgroup>
                                        <col />
                                    </colgroup>
                                    <TableThead>
                                        <TableRow>
                                            <GridHeaderCell filterable scope="col" menu="column" columnTitle="Sortable Column Menu &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipiscing elit"></GridHeaderCell>
                                        </TableRow>
                                    </TableThead>
                                </GridHeaderTable>
                            </div>
                        </GridHeader>
                    </GridNormal>
                </div>

                <div className="section k-rtl">
                    <GridNormal pager={false} groupingHeader={false} _renderAriaRoot={false} className="k-grid-display-block k-grid-no-scrollbar" style={{ height: "60px" }}>
                        <GridHeader>
                            <div className="k-grid-header-wrap k-auto-scrollable">
                                <GridHeaderTable>
                                    <colgroup>
                                        <col />
                                    </colgroup>
                                    <TableThead>
                                        <TableRow>
                                            <GridHeaderCell filterable scope="col" menu="column" columnTitle="Lorem ipsum dolor sit amet consectetur adipiscing elit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; RTL Sortable Column Menu"></GridHeaderCell>
                                        </TableRow>
                                    </TableThead>
                                </GridHeaderTable>
                            </div>
                        </GridHeader>
                    </GridNormal>
                </div>

            </div>

            <div className="sections-wrapper">

                <div className="section">
                    <GridNormal pager={false} groupingHeader={false} _renderAriaRoot={false} className="k-grid-display-block k-grid-no-scrollbar" style={{ height: "60px" }}>
                        <GridHeader>
                            <div className="k-grid-header-wrap k-auto-scrollable">
                                <GridHeaderTable>
                                    <colgroup>
                                        <col />
                                    </colgroup>
                                    <TableThead>
                                        <TableRow>
                                            <GridHeaderCell scope="col" menu="filter" columnTitle="Sortable Filterable &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipiscing elit"></GridHeaderCell>
                                        </TableRow>
                                    </TableThead>
                                </GridHeaderTable>
                            </div>
                        </GridHeader>
                    </GridNormal>
                </div>

                <div className="section k-rtl">
                    <GridNormal pager={false} groupingHeader={false} _renderAriaRoot={false} className="k-grid-display-block k-grid-no-scrollbar" style={{ height: "60px" }}>
                        <GridHeader>
                            <div className="k-grid-header-wrap k-auto-scrollable">
                                <GridHeaderTable>
                                    <colgroup>
                                        <col />
                                    </colgroup>
                                    <TableThead>
                                        <TableRow>
                                            <GridHeaderCell scope="col" menu="filter" columnTitle="Lorem ipsum dolor sit amet consectetur adipiscing elit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; RTL Sortable Filterable"></GridHeaderCell>
                                        </TableRow>
                                    </TableThead>
                                </GridHeaderTable>
                            </div>
                        </GridHeader>
                    </GridNormal>
                </div>

            </div>

            {/* Angular Specific */}
            <div className="sections-wrapper">
                <div className="section">
                    <GridNormal pager={false} groupingHeader={false} className="k-grid-no-scrollbar" style={{ height: "60px" }}>
                        {/* add padding-left or -right for scrollbar width */}
                        <GridHeader>
                            <div className="k-grid-header-wrap">
                                <GridHeaderTable>
                                    <colgroup>
                                        <col />
                                    </colgroup>
                                    <TableThead>
                                        <TableRow>
                                            <GridHeaderCell menu="filter" columnTitle="Angular Filterable &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipiscing elit"></GridHeaderCell>
                                        </TableRow>
                                    </TableThead>
                                </GridHeaderTable>
                            </div>
                        </GridHeader>
                    </GridNormal>
                </div>

                {/* Angular Specific */}
                <div className="section">
                    <GridNormal pager={false} groupingHeader={false} className="k-grid-no-scrollbar" dir="rtl" style={{ height: "60px" }}>
                        {/* add padding-left or -right for scrollbar width */}
                        <GridHeader>
                            <div className="k-grid-header-wrap">
                                <GridHeaderTable>
                                    <colgroup>
                                        <col />
                                    </colgroup>
                                    <TableThead>
                                        <TableRow>
                                            <GridHeaderCell menu="filter" columnTitle="Lorem ipsum dolor sit amet consectetur adipiscing elit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; RTL Angular Filterable"></GridHeaderCell>
                                        </TableRow>
                                    </TableThead>
                                </GridHeaderTable>
                            </div>
                        </GridHeader>
                    </GridNormal>
                </div>
            </div>

        </div>
    </>
);
