import { DataTable } from '../../table/data-table.spec';
import { Table } from '../../table/table.spec';
import { TableBody } from '../../table/table-body';
import { TableFooter } from '../../table/table-footer.spec';
import { TableGroupRow } from '../../table/table-group-row';
import { TableHeader } from '../../table/table-header.spec';
import { TableRow } from '../../table/table-row';
import { TableTbody } from '../../table/table-tbody';
import { TableTd } from '../../table/table-td';
import { TableTfoot } from '../../table/table-tfoot';
import { TableTh } from '../../table/table-th.spec';
import { TableThead } from '../../table/table-thead';

export const DataTableNormal = (props) => (
    <DataTable {...props}>
        <TableHeader>
            <colgroup>
                <col style={{ width: '50px' }} />
                <col style={{ width: '160px' }} />
                <col />
            </colgroup>
            <TableThead>
                <TableRow>
                    <TableTh text="ID"></TableTh>
                    <TableTh text="Name"></TableTh>
                    <TableTh text="Job Title"></TableTh>
                </TableRow>
            </TableThead>
        </TableHeader>
        <TableBody>
            <Table>
                <colgroup>
                    <col style={{ width: '50px' }} />
                    <col style={{ width: '160px' }} />
                    <col />
                </colgroup>
                <TableTbody>
                    <TableGroupRow>
                        <TableTh text="Group row" colspan="3"></TableTh>
                    </TableGroupRow>
                    <TableRow>
                        <TableTd text="1"></TableTd>
                        <TableTd text="Data 1.2"></TableTd>
                        <TableTd text="Data 1.3"></TableTd>
                    </TableRow>
                    <TableRow alt>
                        <TableTd text="2"></TableTd>
                        <TableTd text="Data 2.2 (alt)"></TableTd>
                        <TableTd text="Data 2.3"></TableTd>
                    </TableRow>
                    <TableRow>
                        <TableTd text="3"></TableTd>
                        <TableTd text="Data 3.2"></TableTd>
                        <TableTd text="Data 3.3"></TableTd>
                    </TableRow>
                    <TableGroupRow>
                        <TableTh text="Group row" colspan="3"></TableTh>
                    </TableGroupRow>
                    <TableRow>
                        <TableTd text="4"></TableTd>
                        <TableTd text="Data 4.2"></TableTd>
                        <TableTd text="Data 4.3"></TableTd>
                    </TableRow>
                    <TableRow alt>
                        <TableTd text="5"></TableTd>
                        <TableTd text="Data 5.2 (alt)"></TableTd>
                        <TableTd text="Data 5.3"></TableTd>
                    </TableRow>
                    <TableRow>
                        <TableTd text="6"></TableTd>
                        <TableTd text="Data 6.2"></TableTd>
                        <TableTd text="Data 6.3"></TableTd>
                    </TableRow>
                </TableTbody>
            </Table>
        </TableBody>
        <TableFooter>
            <Table>
                <TableTfoot>
                    <TableRow>
                        <TableTd text="30 records in total"></TableTd>
                    </TableRow>
                </TableTfoot>
            </Table>
        </TableFooter>
    </DataTable>
);
