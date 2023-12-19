import { Checkbox } from '../../checkbox';
import { Grid, GridTable } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTh, TableTd } from '../../table';


const styles = `
    section {
        position: relative;
    }
    .k-marquee {
        width: 100px;
        height: 50px;
        left: 100px;
        top: 50px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <section>
                <Grid className="k-grid-no-scrollbar">
                    <GridTable>
                        <colgroup>
                            <col style={{ width: '50px' }} /><col /><col className="k-sorted" /><col /><col />
                        </colgroup>
                        <TableThead className="k-grid-header">
                            <TableRow>
                                <TableTh>
                                    <Checkbox />
                                    <label className="k-checkbox-label"></label>
                                </TableTh>
                                <TableTh className="k-header">Base</TableTh>
                                <TableTh className="k-header k-sorted">Sorted</TableTh>
                                <TableTh className="k-header">Focus</TableTh>
                                <TableTh className="k-header">Selected</TableTh>
                            </TableRow>
                        </TableThead>
                        <TableTbody>
                            <TableRow>
                                <TableTd>
                                    <Checkbox />
                                    <label className="k-checkbox-label"></label>
                                </TableTd>
                                <TableTd>Normal row</TableTd>
                                <TableTd>Sorted</TableTd>
                                <TableTd className="k-focus">Focus</TableTd>
                                <TableTd className="k-selected">Selected</TableTd>
                            </TableRow>
                            <TableRow className="k-alt" alt>
                                <TableTd>
                                    <Checkbox />
                                    <label className="k-checkbox-label"></label>
                                </TableTd>
                                <TableTd>Alt row</TableTd>
                                <TableTd>Sorted</TableTd>
                                <TableTd className="k-focus">Alt + Focus</TableTd>
                                <TableTd className="k-selected">Alt + Selected</TableTd>
                            </TableRow>
                        </TableTbody>
                        <TableTbody>
                            <TableRow className="k-hover">
                                <TableTd>
                                    <Checkbox />
                                    <label className="k-checkbox-label"></label>
                                </TableTd>
                                <TableTd>Sorted</TableTd>
                                <TableTd>Hovered row</TableTd>
                                <TableTd className="k-focus">Hover + Focus</TableTd>
                                <TableTd className="k-selected">Hover + Selected</TableTd>
                            </TableRow>
                            <TableRow className="k-hover k-alt" alt>
                                <TableTd>
                                    <Checkbox />
                                    <label className="k-checkbox-label"></label>
                                </TableTd>
                                <TableTd>Alt hovered row</TableTd>
                                <TableTd>Sorted</TableTd>
                                <TableTd className="k-focus">Alt + Hover + Focus</TableTd>
                                <TableTd className="k-selected">Alt + Hover + Selected</TableTd>
                            </TableRow>
                        </TableTbody>
                        <TableTbody>
                            <TableRow className="k-focus">
                                <TableTd>
                                    <Checkbox />
                                    <label className="k-checkbox-label"></label>
                                </TableTd>
                                <TableTd>Focused row</TableTd>
                                <TableTd>Sorted</TableTd>
                                <TableTd>N/A</TableTd>
                                <TableTd className="k-selected">Focus + Selected</TableTd>
                            </TableRow>
                            <TableRow className="k-focus k-alt" alt>
                                <TableTd>
                                    <Checkbox />
                                    <label className="k-checkbox-label"></label>
                                </TableTd>
                                <TableTd>Alt focused row</TableTd>
                                <TableTd>Sorted</TableTd>
                                <TableTd>N/A</TableTd>
                                <TableTd className="k-selected">Alt + Focus + Selected</TableTd>
                            </TableRow>
                        </TableTbody>
                        <TableTbody>
                            <TableRow className="k-selected">
                                <TableTd>
                                    <Checkbox checked />
                                    <label className="k-checkbox-label"></label>
                                </TableTd>
                                <TableTd>Selected row</TableTd>
                                <TableTd>Sorted</TableTd>
                                <TableTd className="k-focus">Selected + Focus</TableTd>
                                <TableTd>N/A</TableTd>
                            </TableRow>
                            <TableRow className="k-selected k-alt" alt>
                                <TableTd>
                                    <Checkbox checked />
                                    <label className="k-checkbox-label"></label>
                                </TableTd>
                                <TableTd>Alt selected row</TableTd>
                                <TableTd>Sorted</TableTd>
                                <TableTd className="k-focus">Alt + Selected + Focus</TableTd>
                                <TableTd>N/A</TableTd>
                            </TableRow>
                        </TableTbody>
                        <TableTbody>
                            <TableRow className="k-hover k-selected">
                                <TableTd>
                                    <Checkbox checked />
                                    <label className="k-checkbox-label"></label>
                                </TableTd>
                                <TableTd>Hover + Selected row</TableTd>
                                <TableTd>Sorted</TableTd>
                                <TableTd className="k-focus">Hover + Selected + Focus</TableTd>
                                <TableTd>N/A</TableTd>
                            </TableRow>
                            <TableRow className="k-hover k-selected k-alt" alt>
                                <TableTd>
                                    <Checkbox checked />
                                    <label className="k-checkbox-label"></label>
                                </TableTd>
                                <TableTd>Alt + Hover selected row</TableTd>
                                <TableTd>Sorted</TableTd>
                                <TableTd className="k-focus">Alt + Hover + Selected + Focus</TableTd>
                                <TableTd>N/A</TableTd>
                            </TableRow>
                        </TableTbody>
                    </GridTable>
                </Grid>
                <div className="k-marquee"><div className="k-marquee-color"></div></div>
            </section>

        </div>
    </>
);
