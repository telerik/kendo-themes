import { TableThead, TableRow, TableTbody, TableTd } from "../../table";
import GridHeaderCell from "../grid-header-cell.spec";
import { GridTable } from "../grid-table.spec";
import Grid from "../grid.spec";

export const NonScrollableGrid = ({ theadClassName, ...other }: any) => (
    <Grid _renderAriaRoot {...other}>
        <GridTable role="none">
            <colgroup>
                <col />
                <col />
                <col />
            </colgroup>
            <TableThead className={theadClassName} role="rowgroup">
                <TableRow role="row">
                    <GridHeaderCell sortable sorted resizable menu="filter" columnTitle="Name" role="columnheader" aria-haspopup="dialog"></GridHeaderCell>
                    <GridHeaderCell sortable resizable menu="filter" columnTitle="City" role="columnheader" aria-haspopup="dialog"></GridHeaderCell>
                    <GridHeaderCell sortable resizable menu="filter" active columnTitle="Title" role="columnheader" aria-haspopup="dialog"></GridHeaderCell>
                </TableRow>
            </TableThead>
            <TableTbody role="rowgroup">
                <TableRow className="k-master-row" role="row">
                    <TableTd role="gridcell">Michael Buchanan</TableTd>
                    <TableTd role="gridcell">Redmond</TableTd>
                    <TableTd role="gridcell">CEO</TableTd>
                </TableRow>
                <TableRow className="k-master-row" alt role="row">
                    <TableTd role="gridcell">Nancy Davolio</TableTd>
                    <TableTd role="gridcell">London</TableTd>
                    <TableTd role="gridcell">Sales Representative</TableTd>
                </TableRow>
            </TableTbody>
        </GridTable>
    </Grid>
);