import React from 'react';
import ReactDOM from 'react-dom/client';
import { Table, TableGroupRow, TableRow, TableTbody, TableTd, TableTfoot, TableTh, TableThead } from '../../table';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
#test-area {
    max-width: 1200px;
}
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>Native table small</span>
            <span>Native table medium</span>
            <span>Native table large</span>

            <section>
                <Table size="small">
                    <colgroup>
                        <col style={{ width: '50px' }} />
                        <col />
                        <col />
                    </colgroup>
                    <TableThead>
                        <TableRow>
                            <TableTh text="ID"></TableTh>
                            <TableTh text="Name"></TableTh>
                            <TableTh text="Job Title"></TableTh>
                        </TableRow>
                    </TableThead>
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
                    <TableTfoot>
                        <TableRow>
                            <TableTd text="30 records in total" colspan="3"></TableTd>
                        </TableRow>
                    </TableTfoot>
                </Table>
            </section>

            <section>
                <Table size="medium">
                    <colgroup>
                        <col style={{ width: '50px' }} />
                        <col />
                        <col />
                    </colgroup>
                    <TableThead>
                        <TableRow>
                            <TableTh text="ID"></TableTh>
                            <TableTh text="Name"></TableTh>
                            <TableTh text="Job Title"></TableTh>
                        </TableRow>
                    </TableThead>
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
                    <TableTfoot>
                        <TableRow>
                            <TableTd text="30 records in total" colspan="3"></TableTd>
                        </TableRow>
                    </TableTfoot>
                </Table>
            </section>

            <section>
                <Table size="large">
                    <colgroup>
                        <col style={{ width: '50px' }} />
                        <col />
                        <col />
                    </colgroup>
                    <TableThead>
                        <TableRow>
                            <TableTh text="ID"></TableTh>
                            <TableTh text="Name"></TableTh>
                            <TableTh text="Job Title"></TableTh>
                        </TableRow>
                    </TableThead>
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
                    <TableTfoot>
                        <TableRow>
                            <TableTd text="30 records in total" colspan="3"></TableTd>
                        </TableRow>
                    </TableTfoot>
                </Table>
            </section>

        </div>
    </>
);
