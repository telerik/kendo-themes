import { TableRow } from '../../table/table-row';
import { TableTh } from '../../table/table-th.spec';
import { DataTable } from '../../table/data-table.spec';
import { TableBody } from '../../table/table-body';
import { TableFooter } from '../../table/table-footer.spec';
import { TableHeader } from '../../table/table-header.spec';
import { TableList } from '../../table/table-list.spec';
import { TableListRow } from '../../table/table-list-row';
import { TableListTd } from '../../table/table-list-td';
import { TableThead } from '../../table/table-thead';
import { TableGroupHeader } from '../../table/table-group-header';


const style = `
    #test-area {
        max-width: 1200px;
    }
    .k-data-table {
        width: 372px;
    }
    .k-table-scroller {
        max-height: 200px;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>Table list small</span>
            <span>Table list medium</span>
            <span>Table list large</span>

            <section>
                <DataTable size="small">
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
                            <TableGroupHeader>
                                <TableTh text="Initial group" colspan="3"></TableTh>
                            </TableGroupHeader>
                        </TableThead>
                    </TableHeader>
                    <TableBody>
                        <TableList>
                            <TableListRow>
                                <TableListTd text="1" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 1.2" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 1.3"></TableListTd>
                                <TableListTd className="k-table-spacer-td"></TableListTd>
                            </TableListRow>
                            <TableListRow alt>
                                <TableListTd text="2" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 2.2 (alt)" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 2.3"></TableListTd>
                                <TableListTd className="k-table-spacer-td"></TableListTd>
                            </TableListRow>
                            <TableListRow className="k-first">
                                <TableListTd text="3" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 3.2" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 3.3"></TableListTd>
                                <TableListTd className="k-table-group-td"><span>Group</span></TableListTd>
                            </TableListRow>
                            <TableListRow alt>
                                <TableListTd text="4" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 4.2 (alt)" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 4.3"></TableListTd>
                                <TableListTd className="k-table-spacer-td"></TableListTd>
                            </TableListRow>
                            <TableListRow>
                                <TableListTd text="5" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 5.2" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 5.3"></TableListTd>
                                <TableListTd className="k-table-spacer-td"></TableListTd>
                            </TableListRow>
                            <TableListRow alt>
                                <TableListTd text="6" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 6.2 (alt)" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 6.3"></TableListTd>
                                <TableListTd className="k-table-spacer-td"></TableListTd>
                            </TableListRow>
                        </TableList>
                    </TableBody>
                    <TableFooter>
                        <TableListTd text="30 records in total"></TableListTd>
                    </TableFooter>
                </DataTable>
            </section>

            <section>
                <DataTable>
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
                            <TableGroupHeader>
                                <TableTh text="Initial group" colspan="3"></TableTh>
                            </TableGroupHeader>
                        </TableThead>
                    </TableHeader>
                    <TableBody>
                        <TableList>
                            <TableListRow>
                                <TableListTd text="1" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 1.2" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 1.3"></TableListTd>
                                <TableListTd className="k-table-spacer-td"></TableListTd>
                            </TableListRow>
                            <TableListRow alt>
                                <TableListTd text="2" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 2.2 (alt)" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 2.3"></TableListTd>
                                <TableListTd className="k-table-spacer-td"></TableListTd>
                            </TableListRow>
                            <TableListRow className="k-first">
                                <TableListTd text="3" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 3.2" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 3.3"></TableListTd>
                                <TableListTd className="k-table-group-td"><span>Group</span></TableListTd>
                            </TableListRow>
                            <TableListRow alt>
                                <TableListTd text="4" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 4.2 (alt)" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 4.3"></TableListTd>
                                <TableListTd className="k-table-spacer-td"></TableListTd>
                            </TableListRow>
                            <TableListRow>
                                <TableListTd text="5" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 5.2" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 5.3"></TableListTd>
                                <TableListTd className="k-table-spacer-td"></TableListTd>
                            </TableListRow>
                            <TableListRow alt>
                                <TableListTd text="6" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 6.2 (alt)" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 6.3"></TableListTd>
                                <TableListTd className="k-table-spacer-td"></TableListTd>
                            </TableListRow>
                        </TableList>
                    </TableBody>
                    <TableFooter>
                        <TableListTd text="30 records in total"></TableListTd>
                    </TableFooter>
                </DataTable>
            </section>

            <section>
                <DataTable size="large">
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
                            <TableGroupHeader>
                                <TableTh text="Initial group" colspan="3"></TableTh>
                            </TableGroupHeader>
                        </TableThead>
                    </TableHeader>
                    <TableBody>
                        <TableList>
                            <TableListRow>
                                <TableListTd text="1" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 1.2" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 1.3"></TableListTd>
                                <TableListTd className="k-table-spacer-td"></TableListTd>
                            </TableListRow>
                            <TableListRow alt>
                                <TableListTd text="2" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 2.2 (alt)" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 2.3"></TableListTd>
                                <TableListTd className="k-table-spacer-td"></TableListTd>
                            </TableListRow>
                            <TableListRow className="k-first">
                                <TableListTd text="3" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 3.2" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 3.3"></TableListTd>
                                <TableListTd className="k-table-group-td"><span>Group</span></TableListTd>
                            </TableListRow>
                            <TableListRow alt>
                                <TableListTd text="4" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 4.2 (alt)" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 4.3"></TableListTd>
                                <TableListTd className="k-table-spacer-td"></TableListTd>
                            </TableListRow>
                            <TableListRow>
                                <TableListTd text="5" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 5.2" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 5.3"></TableListTd>
                                <TableListTd className="k-table-spacer-td"></TableListTd>
                            </TableListRow>
                            <TableListRow alt>
                                <TableListTd text="6" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 6.2 (alt)" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 6.3"></TableListTd>
                                <TableListTd className="k-table-spacer-td"></TableListTd>
                            </TableListRow>
                        </TableList>
                    </TableBody>
                    <TableFooter>
                        <TableListTd text="30 records in total"></TableListTd>
                    </TableFooter>
                </DataTable>
            </section>

        </div>
    </>
);
