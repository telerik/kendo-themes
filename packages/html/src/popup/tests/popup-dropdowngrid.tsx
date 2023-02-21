import React from 'react';
import ReactDOM from 'react-dom/client';
import { Table, TableBody, TableFooter, TableGroupRow, TableGroupStickyHeader, TableHeader, TableRow, TableTable, TableTd, TableTh, TableThead } from '../../table';
import { Popup } from '..';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    .k-animation-container {
        position: relative;
        overflow: visible;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>LTR</span>
            <span className="k-rtl">RTL</span>

            <section>
                <div className="k-animation-container k-animation-container-shown">
                    <div className="k-child-animation-container">
                        <Popup className="k-dropdowngrid-popup">
                            <Table size="medium">
                                <TableHeader>
                                    <colgroup>
                                        <col style={{ width: '50px' }} />
                                        <col style={{ width: '160px' }} />
                                        <col />
                                    </colgroup>
                                    <TableThead>
                                        <TableRow table>
                                            <TableTh text="ID" table></TableTh>
                                            <TableTh text="Name" table></TableTh>
                                            <TableTh text="Job Title" table></TableTh>
                                        </TableRow>
                                    </TableThead>
                                </TableHeader>
                                <TableGroupStickyHeader>
                                    <TableTh text="Initial group"></TableTh>
                                </TableGroupStickyHeader>
                                <TableBody>
                                    <TableTable>
                                        <TableRow>
                                            <TableTd text="1" style={{ width: '50px' }}></TableTd>
                                            <TableTd text="Data 1.2" style={{ width: '160px' }}></TableTd>
                                            <TableTd text="Data 1.3"></TableTd>
                                        </TableRow>
                                        <TableRow alt>
                                            <TableTd text="2" style={{ width: '50px' }}></TableTd>
                                            <TableTd text="Data 2.2 (alt)" style={{ width: '160px' }}></TableTd>
                                            <TableTd text="Data 2.3"></TableTd>
                                        </TableRow>
                                        <TableRow>
                                            <TableTd text="3" style={{ width: '50px' }}></TableTd>
                                            <TableTd text="Data 3.2" style={{ width: '160px' }}></TableTd>
                                            <TableTd text="Data 3.3"></TableTd>
                                        </TableRow>
                                        <TableGroupRow>
                                            <TableTh text="Group"></TableTh>
                                        </TableGroupRow>
                                        <TableRow>
                                            <TableTd text="4" style={{ width: '50px' }}></TableTd>
                                            <TableTd text="Data 4.2" style={{ width: '160px' }}></TableTd>
                                            <TableTd text="Data 4.3"></TableTd>
                                        </TableRow>
                                        <TableRow alt>
                                            <TableTd text="5" style={{ width: '50px' }}></TableTd>
                                            <TableTd text="Data 5.2 (alt)" style={{ width: '160px' }}></TableTd>
                                            <TableTd text="Data 5.3"></TableTd>
                                        </TableRow>
                                        <TableRow>
                                            <TableTd text="6" style={{ width: '50px' }}></TableTd>
                                            <TableTd text="Data 6.2" style={{ width: '160px' }}></TableTd>
                                            <TableTd text="Data 6.3"></TableTd>
                                        </TableRow>
                                    </TableTable>
                                </TableBody>
                                <TableFooter>
                                    <TableTd text="30 records in total"></TableTd>
                                </TableFooter>
                            </Table>
                        </Popup>
                    </div>
                </div>
            </section>

            <section className="k-rtl">
                <div className="k-animation-container k-animation-container-shown">
                    <div className="k-child-animation-container">
                        <Popup className="k-dropdowngrid-popup">
                            <Table size="medium">
                                <TableHeader>
                                    <colgroup>
                                        <col style={{ width: '50px' }} />
                                        <col style={{ width: '160px' }} />
                                        <col />
                                    </colgroup>
                                    <TableThead>
                                        <TableRow table>
                                            <TableTh text="ID" table></TableTh>
                                            <TableTh text="Name" table></TableTh>
                                            <TableTh text="Job Title" table></TableTh>
                                        </TableRow>
                                    </TableThead>
                                </TableHeader>
                                <TableGroupStickyHeader>
                                    <TableTh text="Initial group"></TableTh>
                                </TableGroupStickyHeader>
                                <TableBody>
                                    <TableTable>
                                        <TableRow>
                                            <TableTd text="1" style={{ width: '50px' }}></TableTd>
                                            <TableTd text="Data 1.2" style={{ width: '160px' }}></TableTd>
                                            <TableTd text="Data 1.3"></TableTd>
                                        </TableRow>
                                        <TableRow alt>
                                            <TableTd text="2" style={{ width: '50px' }}></TableTd>
                                            <TableTd text="Data 2.2 (alt)" style={{ width: '160px' }}></TableTd>
                                            <TableTd text="Data 2.3"></TableTd>
                                        </TableRow>
                                        <TableRow>
                                            <TableTd text="3" style={{ width: '50px' }}></TableTd>
                                            <TableTd text="Data 3.2" style={{ width: '160px' }}></TableTd>
                                            <TableTd text="Data 3.3"></TableTd>
                                        </TableRow>
                                        <TableGroupRow>
                                            <TableTh text="Group"></TableTh>
                                        </TableGroupRow>
                                        <TableRow>
                                            <TableTd text="4" style={{ width: '50px' }}></TableTd>
                                            <TableTd text="Data 4.2" style={{ width: '160px' }}></TableTd>
                                            <TableTd text="Data 4.3"></TableTd>
                                        </TableRow>
                                        <TableRow alt>
                                            <TableTd text="5" style={{ width: '50px' }}></TableTd>
                                            <TableTd text="Data 5.2 (alt)" style={{ width: '160px' }}></TableTd>
                                            <TableTd text="Data 5.3"></TableTd>
                                        </TableRow>
                                        <TableRow>
                                            <TableTd text="6" style={{ width: '50px' }}></TableTd>
                                            <TableTd text="Data 6.2" style={{ width: '160px' }}></TableTd>
                                            <TableTd text="Data 6.3"></TableTd>
                                        </TableRow>
                                    </TableTable>
                                </TableBody>
                                <TableFooter>
                                    <TableTd text="30 records in total"></TableTd>
                                </TableFooter>
                            </Table>
                        </Popup>
                    </div>
                </div>
            </section>

        </div>
    </>
);
