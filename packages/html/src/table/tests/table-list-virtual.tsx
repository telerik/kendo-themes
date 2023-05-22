import { DataTable, TableBody, TableHeader, TableList, TableListRow, TableListTd, TableRow, TableTh, TableThead } from '../../table';


const style = `
    #test-area {
        max-width: 1200px;
    }
    .k-data-table {
        width: 372px;
    }
    .k-table-scroller {
        height: 200px;
    }
    .k-virtual-table .k-table-row {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>Table list virtual</span>

            <section>
                <DataTable size="medium">
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
                        <TableList virtualization>
                            <TableListRow>
                                <TableListTd text="1" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 1.2" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 1.3"></TableListTd>
                            </TableListRow>
                            <TableListRow alt>
                                <TableListTd text="2" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 2.2 (alt)" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 2.3"></TableListTd>
                            </TableListRow>
                            <TableListRow>
                                <TableListTd text="3" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 3.2" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 3.3"></TableListTd>
                            </TableListRow>
                            <TableListRow>
                                <TableListTd text="4" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 4.2" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 4.3"></TableListTd>
                            </TableListRow>
                            <TableListRow alt>
                                <TableListTd text="5" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 5.2 (alt)" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 5.3"></TableListTd>
                            </TableListRow>
                            <TableListRow>
                                <TableListTd text="6" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 6.2" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 6.3"></TableListTd>
                            </TableListRow>
                            <TableListRow>
                                <TableListTd text="7" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 7.2" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 7.3"></TableListTd>
                            </TableListRow>
                            <TableListRow>
                                <TableListTd text="8" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 8.2" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 8.3"></TableListTd>
                            </TableListRow>
                            <TableListRow>
                                <TableListTd text="9" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 9.2" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 9.3"></TableListTd>
                            </TableListRow>
                            <TableListRow>
                                <TableListTd text="10" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 10.2" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 10.3"></TableListTd>
                            </TableListRow>
                            <TableListRow>
                                <TableListTd text="11" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 11.2" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 11.3"></TableListTd>
                            </TableListRow>
                        </TableList>
                    </TableBody>
                </DataTable>
            </section>

        </div>
    </>
);
