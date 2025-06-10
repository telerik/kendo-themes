import { Checkbox } from '../../checkbox';
import { GridNormal, GridTable } from '../../grid';
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

    #test-area {
        max-width: 1240px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <section>
                <GridNormal pager={false} groupingHeader={false} className="k-grid-no-scrollbar">
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
                                <TableTh className="k-header k-sorted">Sorted Column</TableTh>
                                <TableTh className="k-header">Focused Cell</TableTh>
                                <TableTh className="k-header">Selected Cell</TableTh>
                                <TableTh className="k-header">Highlighted Cell</TableTh>
                                <TableTh className="k-header">Selected Highlighted Cell</TableTh>
                            </TableRow>
                        </TableThead>
                        <TableTbody>
                            <TableRow>
                                <TableTd>
                                    <Checkbox />
                                    <label className="k-checkbox-label"></label>
                                </TableTd>
                                <TableTd>Row</TableTd>
                                <TableTd>Sorted</TableTd>
                                <TableTd focus>Focused Cell</TableTd>
                                <TableTd selected>Selected Cell</TableTd>
                                <TableTd highlighted>Highlighted Cell</TableTd>
                                <TableTd selected highlighted>Selected + Highlighted Cell</TableTd>
                            </TableRow>
                            <TableRow alt>
                                <TableTd>
                                    <Checkbox />
                                    <label className="k-checkbox-label"></label>
                                </TableTd>
                                <TableTd>Alt Row</TableTd>
                                <TableTd>Sorted</TableTd>
                                <TableTd focus>Focused Cell</TableTd>
                                <TableTd selected>Selected Cell</TableTd>
                                <TableTd highlighted>Highlighted Cell</TableTd>
                                <TableTd selected highlighted>Selected + Highlighted Cell</TableTd>
                            </TableRow>
                        </TableTbody>
                        <TableTbody>
                            <TableRow hover>
                                <TableTd>
                                    <Checkbox />
                                    <label className="k-checkbox-label"></label>
                                </TableTd>
                                <TableTd>Hovered Row</TableTd>
                                <TableTd>Sorted</TableTd>
                                <TableTd focus>Focused Cell</TableTd>
                                <TableTd selected>Selected Cell</TableTd>
                                <TableTd highlighted>Highlighted Cell</TableTd>
                                <TableTd selected highlighted>Selected + Highlighted Cell</TableTd>
                            </TableRow>
                            <TableRow hover alt>
                                <TableTd>
                                    <Checkbox />
                                    <label className="k-checkbox-label"></label>
                                </TableTd>
                                <TableTd>Alt + Hovered Row</TableTd>
                                <TableTd>Sorted</TableTd>
                                <TableTd focus>Focused Cell</TableTd>
                                <TableTd selected>Selected Cell</TableTd>
                                <TableTd highlighted>Highlighted Cell</TableTd>
                                <TableTd selected highlighted>Selected + Highlighted Cell</TableTd>
                            </TableRow>
                        </TableTbody>
                        <TableTbody>
                            <TableRow focus>
                                <TableTd>
                                    <Checkbox />
                                    <label className="k-checkbox-label"></label>
                                </TableTd>
                                <TableTd>Focused Row</TableTd>
                                <TableTd>Sorted</TableTd>
                                <TableTd>N/A</TableTd>
                                <TableTd selected>Selected Cell</TableTd>
                                <TableTd highlighted>Highlighted Cell</TableTd>
                                <TableTd selected highlighted>Selected + Highlighted Cell</TableTd>
                            </TableRow>
                            <TableRow focus alt>
                                <TableTd>
                                    <Checkbox />
                                    <label className="k-checkbox-label"></label>
                                </TableTd>
                                <TableTd>Alt + Focused Row</TableTd>
                                <TableTd>Sorted</TableTd>
                                <TableTd>N/A</TableTd>
                                <TableTd selected>Selected Cell</TableTd>
                                <TableTd highlighted>Highlighted Cell</TableTd>
                                <TableTd selected highlighted>Selected + Highlighted Cell</TableTd>
                            </TableRow>
                        </TableTbody>
                        <TableTbody>
                            <TableRow selected>
                                <TableTd>
                                    <Checkbox checked />
                                    <label className="k-checkbox-label"></label>
                                </TableTd>
                                <TableTd>Selected Row</TableTd>
                                <TableTd>Sorted</TableTd>
                                <TableTd focus>Focused Cell</TableTd>
                                <TableTd>N/A</TableTd>
                                <TableTd highlighted>Highlighted Cell</TableTd>
                                <TableTd selected highlighted>Selected + Highlighted Cell</TableTd>
                            </TableRow>
                            <TableRow selected alt>
                                <TableTd>
                                    <Checkbox checked />
                                    <label className="k-checkbox-label"></label>
                                </TableTd>
                                <TableTd>Alt + Selected Row</TableTd>
                                <TableTd>Sorted</TableTd>
                                <TableTd focus>Focused Cell</TableTd>
                                <TableTd>N/A</TableTd>
                                <TableTd highlighted>Highlighted Cell</TableTd>
                                <TableTd selected highlighted>Selected + Highlighted Cell</TableTd>
                            </TableRow>
                        </TableTbody>
                        <TableTbody>
                            <TableRow hover selected>
                                <TableTd>
                                    <Checkbox checked />
                                    <label className="k-checkbox-label"></label>
                                </TableTd>
                                <TableTd>Hover + Selected Row Row</TableTd>
                                <TableTd>Sorted</TableTd>
                                <TableTd focus>Focused Cell</TableTd>
                                <TableTd>N/A</TableTd>
                                <TableTd highlighted>Highlighted Cell</TableTd>
                                <TableTd selected highlighted>Selected + Highlighted Cell</TableTd>
                            </TableRow>
                            <TableRow hover selected alt>
                                <TableTd>
                                    <Checkbox checked />
                                    <label className="k-checkbox-label"></label>
                                </TableTd>
                                <TableTd>Alt + Hover + Selected Row</TableTd>
                                <TableTd>Sorted</TableTd>
                                <TableTd focus>Focused Cell</TableTd>
                                <TableTd>N/A</TableTd>
                                <TableTd highlighted>Highlighted Cell</TableTd>
                                <TableTd selected highlighted>Selected + Highlighted Cell</TableTd>
                            </TableRow>
                        </TableTbody>
                        <TableTbody>
                            <TableRow highlighted>
                                <TableTd>
                                    <Checkbox />
                                    <label className="k-checkbox-label"></label>
                                </TableTd>
                                <TableTd>Highlighted Row</TableTd>
                                <TableTd>Sorted</TableTd>
                                <TableTd focus>Focused Cell</TableTd>
                                <TableTd selected>Selected Cell</TableTd>
                                <TableTd>N/A</TableTd>
                                <TableTd selected highlighted>Selected + Highlighted Cell</TableTd>
                            </TableRow>
                            <TableRow highlighted alt>
                                <TableTd>
                                    <Checkbox />
                                    <label className="k-checkbox-label"></label>
                                </TableTd>
                                <TableTd>Alt + Highlighted Row</TableTd>
                                <TableTd>Sorted</TableTd>
                                <TableTd focus>Focused Cell</TableTd>
                                <TableTd selected>Selected Cell</TableTd>
                                <TableTd>N/A</TableTd>
                                <TableTd selected highlighted>Selected + Highlighted Cell</TableTd>
                            </TableRow>
                        </TableTbody>
                        <TableTbody>
                            <TableRow hover highlighted>
                                <TableTd>
                                    <Checkbox />
                                    <label className="k-checkbox-label"></label>
                                </TableTd>
                                <TableTd>Hover + Highlighted Row</TableTd>
                                <TableTd>Sorted</TableTd>
                                <TableTd focus>Focused Cell</TableTd>
                                <TableTd selected>Selected Cell</TableTd>
                                <TableTd>N/A</TableTd>
                                <TableTd selected highlighted>Selected + Highlighted Cell</TableTd>
                            </TableRow>
                            <TableRow hover highlighted alt>
                                <TableTd>
                                    <Checkbox />
                                    <label className="k-checkbox-label"></label>
                                </TableTd>
                                <TableTd>Alt + Hover + Highlighted Row</TableTd>
                                <TableTd>Sorted</TableTd>
                                <TableTd focus>Focused Cell</TableTd>
                                <TableTd selected>Selected Cell</TableTd>
                                <TableTd>N/A</TableTd>
                                <TableTd selected highlighted>Selected + Highlighted Cell</TableTd>
                            </TableRow>
                        </TableTbody>
                        <TableTbody>
                            <TableRow selected highlighted>
                                <TableTd>
                                    <Checkbox checked />
                                    <label className="k-checkbox-label"></label>
                                </TableTd>
                                <TableTd>Highlighted + Selected Row</TableTd>
                                <TableTd>Sorted</TableTd>
                                <TableTd focus>Focused Cell</TableTd>
                                <TableTd selected>Selected Cell</TableTd>
                                <TableTd highlighted>Highlighted Cell</TableTd>
                                <TableTd>N/A</TableTd>
                            </TableRow>
                            <TableRow selected highlighted alt>
                                <TableTd>
                                    <Checkbox checked />
                                    <label className="k-checkbox-label"></label>
                                </TableTd>
                                <TableTd>Alt + Highlighted + Selected Row</TableTd>
                                <TableTd>Sorted</TableTd>
                                <TableTd focus>Focused Cell</TableTd>
                                <TableTd selected>Selected Cell</TableTd>
                                <TableTd highlighted>Highlighted Cell</TableTd>
                                <TableTd>N/A</TableTd>
                            </TableRow>
                        </TableTbody>
                        <TableTbody>
                            <TableRow hover selected highlighted>
                                <TableTd>
                                    <Checkbox checked />
                                    <label className="k-checkbox-label"></label>
                                </TableTd>
                                <TableTd>Hover + Highlighted + Selected Row</TableTd>
                                <TableTd>Sorted</TableTd>
                                <TableTd focus>Focused Cell</TableTd>
                                <TableTd selected>Selected Cell</TableTd>
                                <TableTd highlighted>Highlighted Cell</TableTd>
                                <TableTd>N/A</TableTd>
                            </TableRow>
                            <TableRow hover selected highlighted alt>
                                <TableTd>
                                    <Checkbox checked />
                                    <label className="k-checkbox-label"></label>
                                </TableTd>
                                <TableTd>Alt + Hover + Highlighted + Selected Row</TableTd>
                                <TableTd>Sorted</TableTd>
                                <TableTd focus>Focused Cell</TableTd>
                                <TableTd selected>Selected Cell</TableTd>
                                <TableTd highlighted>Highlighted Cell</TableTd>
                                <TableTd>N/A</TableTd>
                            </TableRow>
                        </TableTbody>
                    </GridTable>
                </GridNormal>
                <div className="k-marquee"><div className="k-marquee-color"></div></div>
            </section>

        </div>
    </>
);
