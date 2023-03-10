import React from 'react';
import ReactDOM from 'react-dom/client';
import { DataTable, TableBody, TableFooter, TableGroupStickyHeader, TableHeader, TableList, TableListGroupRow, TableListRow, TableListTd, TableListTh, TableRow, TableTh, TableThead } from '../../table';
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
                                <TableGroupStickyHeader>
                                    <TableListTh text="Initial group"></TableListTh>
                                </TableGroupStickyHeader>
                                <TableBody>
                                    <TableList>
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
                                        <TableListGroupRow>
                                            <TableListTh text="Group"></TableListTh>
                                        </TableListGroupRow>
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
                                    </TableList>
                                </TableBody>
                                <TableFooter>
                                    <TableListTd text="30 records in total"></TableListTd>
                                </TableFooter>
                            </DataTable>
                        </Popup>
                    </div>
                </div>
            </section>

            <section className="k-rtl">
                <div className="k-animation-container k-animation-container-shown">
                    <div className="k-child-animation-container">
                        <Popup className="k-dropdowngrid-popup">
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
                                <TableGroupStickyHeader>
                                    <TableListTh text="Initial group"></TableListTh>
                                </TableGroupStickyHeader>
                                <TableBody>
                                    <TableList>
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
                                        <TableListGroupRow>
                                            <TableListTh text="Group"></TableListTh>
                                        </TableListGroupRow>
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
                                    </TableList>
                                </TableBody>
                                <TableFooter>
                                    <TableListTd text="30 records in total"></TableListTd>
                                </TableFooter>
                            </DataTable>
                        </Popup>
                    </div>
                </div>
            </section>

        </div>
    </>
);
