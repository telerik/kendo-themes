import { TableNative, TableRow, TableTbody, TableTd, TableTh, TableThead } from '../../table';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Native table</span>
            <span></span>

            <section>
                <TableNative size="medium">
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
                        <TableRow>
                            <TableTd text="1"></TableTd>
                            <TableTd text="Normal"></TableTd>
                            <TableTd text="Data 1.3"></TableTd>
                        </TableRow>
                        <TableRow alt>
                            <TableTd text="2"></TableTd>
                            <TableTd text="Normal (alt)"></TableTd>
                            <TableTd text="Data 2.3"></TableTd>
                        </TableRow>
                        <TableRow hover>
                            <TableTd text="3"></TableTd>
                            <TableTd text="Hover"></TableTd>
                            <TableTd text="Data 3.3"></TableTd>
                        </TableRow>
                        <TableRow alt hover>
                            <TableTd text="4"></TableTd>
                            <TableTd text="Hover (alt)"></TableTd>
                            <TableTd text="Data 4.3"></TableTd>
                        </TableRow>
                        <TableRow focus>
                            <TableTd text="5"></TableTd>
                            <TableTd text="Focus (alt)"></TableTd>
                            <TableTd text="Data 5.3"></TableTd>
                        </TableRow>
                        <TableRow alt focus>
                            <TableTd text="6"></TableTd>
                            <TableTd text="Focus (even)"></TableTd>
                            <TableTd text="Data 6.3"></TableTd>
                        </TableRow>
                        <TableRow selected>
                            <TableTd text="7"></TableTd>
                            <TableTd text="Selected"></TableTd>
                            <TableTd text="Data 7.3"></TableTd>
                        </TableRow>
                        <TableRow alt selected>
                            <TableTd text="8"></TableTd>
                            <TableTd text="Selected (alt)"></TableTd>
                            <TableTd text="Data 8.3"></TableTd>
                        </TableRow>
                        <TableRow focus selected>
                            <TableTd text="9"></TableTd>
                            <TableTd text="Focus selected"></TableTd>
                            <TableTd text="Data 9.3"></TableTd>
                        </TableRow>
                        <TableRow alt focus selected>
                            <TableTd text="10"></TableTd>
                            <TableTd text="Focus selected (alt)"></TableTd>
                            <TableTd text="Data 10.3"></TableTd>
                        </TableRow>
                    </TableTbody>
                </TableNative>
            </section>
        </div>
    </>
);
