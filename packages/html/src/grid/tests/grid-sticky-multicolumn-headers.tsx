import { GridNormal, GridHeader, GridHeaderTable, GridHeaderCell } from '../../grid';
import { TableThead, TableRow } from '../../table';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid">
            <span>LTR</span>
            <GridNormal pager={false} groupingHeader={false} className="test-grid k-grid-display-block k-grid-no-scrollbar" style={{ height: "300px", width: "800px" }}>
                <GridHeader>
                    <div className="k-grid-header-wrap k-auto-scrollable">
                        <GridHeaderTable>
                            <colgroup>
                                <col style={{ width: "200px" }} />
                                <col style={{ width: "100px" }} />
                                <col style={{ width: "100px" }} />
                                <col style={{ width: "100px" }} />
                                <col style={{ width: "100px" }} />
                                <col style={{ width: "1000px" }} />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell rowspan={4} columnTitle="Contact Name"></GridHeaderCell>
                                    <GridHeaderCell colspan={4} columnTitle="Contact Info" sticky style={{ left: "0px", right: "0px" }}></GridHeaderCell>
                                    <GridHeaderCell rowspan={4} columnTitle="Phone"></GridHeaderCell>
                                </TableRow>
                                <TableRow>
                                    <GridHeaderCell rowspan={3} columnTitle="Contact Title" sticky className="k-first" style={{ left: "0px", right: "300px" }}></GridHeaderCell>
                                    <GridHeaderCell colspan={3} columnTitle="Location" sticky className="k-grid-no-left-border" style={{ left: "100px", right: "0px" }}></GridHeaderCell>
                                </TableRow>
                                <TableRow>
                                    <GridHeaderCell colspan={2} columnTitle="Test" sticky className="k-grid-no-left-border k-first" style={{ left: "100px", right: "100px" }}></GridHeaderCell>
                                    <GridHeaderCell rowspan={2} columnTitle="City" sticky className="k-grid-no-left-border" style={{ left: "300px", right: "0px" }}></GridHeaderCell>
                                </TableRow>
                                <TableRow>
                                    <GridHeaderCell columnTitle="Fax" sticky className="k-grid-no-left-border k-first" style={{ left: "100px", right: "200px" }}></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Country" sticky className="k-grid-no-left-border" style={{ left: "200px", right: "100px" }}></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
            </GridNormal>

            <span>RTL</span>
            <div className="k-rtl k-d-flex k-justify-content-end">
                <GridNormal pager={false} groupingHeader={false} className="test-grid k-grid-display-block k-grid-no-scrollbar" style={{ height: "300px", width: "800px" }}>
                    <GridHeader>
                        <div className="k-grid-header-wrap k-auto-scrollable">
                            <GridHeaderTable>
                                <colgroup>
                                    <col style={{ width: "200px" }} />
                                    <col style={{ width: "100px" }} />
                                    <col style={{ width: "100px" }} />
                                    <col style={{ width: "100px" }} />
                                    <col style={{ width: "100px" }} />
                                    <col style={{ width: "1000px" }} />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell rowspan={4} columnTitle="Contact Name"></GridHeaderCell>
                                        <GridHeaderCell colspan={4} columnTitle="Contact Info" sticky style={{ left: "0px", right: "0px" }}></GridHeaderCell>
                                        <GridHeaderCell rowspan={4} columnTitle="Phone"></GridHeaderCell>
                                    </TableRow>
                                    <TableRow>
                                        <GridHeaderCell rowspan={3} columnTitle="Contact Title" sticky className="k-first" style={{ left: "300px", right: "0px" }}></GridHeaderCell>
                                        <GridHeaderCell colspan={3} columnTitle="Location" sticky className="k-grid-no-left-border" style={{ left: "0px", right: "100px" }}></GridHeaderCell>
                                    </TableRow>
                                    <TableRow>
                                        <GridHeaderCell colspan={2} columnTitle="Test" sticky className="k-grid-no-left-border k-first" style={{ left: "100px", right: "100px" }}></GridHeaderCell>
                                        <GridHeaderCell rowspan={2} columnTitle="City" sticky className="k-grid-no-left-border" style={{ left: "0px", right: "300px" }}></GridHeaderCell>
                                    </TableRow>
                                    <TableRow>
                                        <GridHeaderCell columnTitle="Fax" sticky className="k-grid-no-left-border k-first" style={{ left: "200px", right: "100px" }}></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Country" sticky className="k-grid-no-left-border" style={{ left: "100px", right: "200px" }}></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                </GridNormal>
            </div>

        </div>
    </>
);
