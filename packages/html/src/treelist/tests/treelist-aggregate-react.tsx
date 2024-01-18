import { Icon } from '../../icon';
import { TreeList } from '../../treelist';
import { GridTable } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd, TableTh } from '../../table';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid">
            <section>
                <span>React</span>
                <TreeList className="k-treelist-scrollable">
                    <GridTable>
                        <colgroup>
                            <col style={{ width: "34%" }} />
                            <col style={{ width: "33%" }} />
                            <col style={{ width: "33%" }} />
                        </colgroup>
                        <TableThead className="k-grid-header">
                            <TableRow>
                                <TableTh colspan={1} rowspan={1} className="k-header" style={{ top: '0px' }}><a className="k-link">Name</a></TableTh>
                                <TableTh colspan={1} rowspan={1} className="k-header" style={{ top: '0px' }}><a className="k-link">Position</a></TableTh>
                                <TableTh colspan={1} rowspan={1} className="k-header" style={{ top: '0px' }}><a className="k-link">Hire Date</a></TableTh>
                            </TableRow>
                        </TableThead>
                        <TableTbody>
                            <TableRow className="k-master-row">
                                <TableTd className="k-text-nowrap" colspan={1}>
                                    <Icon className="k-treelist-toggle" icon="caret-alt-down" />
                                    Daryl Sweeney
                                </TableTd>
                                <TableTd colspan={1}>CEO</TableTd>
                                <TableTd colspan={1}>March 7, 2012</TableTd>
                            </TableRow>
                            <TableRow className="k-master-row">
                                <TableTd className=" k-text-nowrap" colspan={1}><Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="caret-alt-right" />
                                    Guy Wooten
                                </TableTd>
                                <TableTd colspan={1}>Chief Technical Officer</TableTd>
                                <TableTd colspan={1}>April 3, 2010</TableTd>
                            </TableRow>
                            <TableRow className="k-master-row">
                                <TableTd className="k-text-nowrap" colspan={1}><Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="caret-alt-right" />
                                    Priscilla Frank
                                </TableTd>
                                <TableTd colspan={1}>Chief Product Officer</TableTd>
                                <TableTd colspan={1}>December 30, 2014</TableTd>
                            </TableRow>
                            <TableRow className="k-master-row">
                                <TableTd className="k-text-nowrap" colspan={1}><Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="caret-alt-down" />
                                    Anika Vega
                                </TableTd>
                                <TableTd colspan={1}>Chief Process Officer</TableTd>
                                <TableTd colspan={1}>March 25, 2010</TableTd>
                            </TableRow>
                            <TableRow className="k-master-row">
                                <TableTd className="k-text-nowrap" colspan={1}><Icon className="k-treelist-toggle" icon="none"></Icon><Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="caret-alt-right" />
                                    Vernon Ballard
                                </TableTd>
                                <TableTd colspan={1}>Director Facilities</TableTd>
                                <TableTd colspan={1}>July 26, 2015</TableTd>
                            </TableRow>
                            <TableRow className="k-group-footer">
                                <TableTd className="k-text-nowrap" colspan={1}><Icon className="k-treelist-toggle" icon="none"></Icon><Icon className="k-treelist-toggle" icon="none"></Icon><Icon className="k-treelist-toggle" icon="none"></Icon>7 employee(s)</TableTd>
                                <TableTd colspan={1}></TableTd>
                                <TableTd colspan={1}>Last employee hired on August 30, 2015</TableTd>
                            </TableRow>
                            <TableRow className="k-master-row">
                                <TableTd className="k-text-nowrap" colspan={1}><Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="caret-alt-right" />
                                    Nevada Hart
                                </TableTd>
                                <TableTd colspan={1}>Chief Financial Officer</TableTd>
                                <TableTd colspan={1}>September 17, 2015</TableTd>
                            </TableRow>
                            <TableRow className="k-master-row">
                                <TableTd className="k-text-nowrap" colspan={1}><Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="caret-alt-right" />
                                    Hunter Fry
                                </TableTd>
                                <TableTd colspan={1}>General Counsel</TableTd>
                                <TableTd colspan={1}>March 12, 2011</TableTd>
                            </TableRow>
                            <TableRow className="k-group-footer">
                                <TableTd className="k-text-nowrap" colspan={1}><Icon className="k-treelist-toggle" icon="none"></Icon><Icon className="k-treelist-toggle" icon="none"></Icon>98 employee(s)</TableTd>
                                <TableTd colspan={1}></TableTd>
                                <TableTd colspan={1}>Last employee hired on September 17, 2015</TableTd>
                            </TableRow>
                            <TableRow className="k-group-footer">
                                <TableTd className="k-text-nowrap" colspan={1}><Icon className="k-treelist-toggle" icon="none"></Icon>99 employee(s)</TableTd>
                                <TableTd colspan={1}></TableTd>
                                <TableTd colspan={1} className="k-table-TableTd">Last employee hired on September 17, 2015</TableTd>
                            </TableRow>
                        </TableTbody>
                    </GridTable>
                </TreeList>
            </section>
        </div>
    </>
);
