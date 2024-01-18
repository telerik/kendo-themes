import { Icon } from '../../icon';
import { Button } from '../../button';
import { DropdownList } from '../../dropdownlist';
import { DatePicker } from '../../datepicker';
import { NumericTextbox } from '../../numerictextbox';
import { Textbox } from '../../textbox';
import { TreeList } from '../../treelist';
import { GridTable } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd, TableTh } from '../../table';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid">
            <section>
                <span>React Treelist</span>
                <TreeList className="k-treelist-scrollable">
                    <GridTable>
                        <colgroup>
                            <col style={{ width: "200px" }} />
                            <col style={{ width: "300px" }} />
                            <col style={{ width: "100px" }} />
                            <col style={{ width: "400px" }} />
                            <col style={{ width: "100px" }} />
                        </colgroup>
                        <TableThead className="k-grid-header">
                            <TableRow>
                                <TableTh className="k-header">
                                    <a className="k-link">id</a>
                                </TableTh>
                                <TableTh className="k-header">
                                    <a className="k-link">text</a>
                                </TableTh>
                                <TableTh className="k-header">
                                    <a className="k-link">price</a>
                                </TableTh>
                                <TableTh className="k-header">
                                    <a className="k-link">manufactured</a>
                                </TableTh>
                                <TableTh className="k-header">
                                    <a className="k-link">discontinued</a>
                                </TableTh>
                            </TableRow>
                            <TableRow className="k-filter-row">
                                <TableTh></TableTh>
                                <TableTh>
                                    <div className="k-filtercell">
                                        <span>
                                            <Textbox />
                                            <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                            <Button icon="filter-clear" disabled></Button>
                                        </span>
                                    </div>
                                </TableTh>
                                <TableTh>
                                    <div className="k-filtercell">
                                        <span>
                                            <NumericTextbox />
                                            <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                            <Button icon="filter-clear" disabled></Button>
                                        </span>
                                    </div>
                                </TableTh>
                                <TableTh>
                                    <div className="k-filtercell">
                                        <span>
                                            <DatePicker />
                                            <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                            <Button icon="filter-clear" disabled></Button>
                                        </span>
                                    </div>
                                </TableTh>
                                <TableTh>
                                    <div className="k-filtercell">
                                        <span>
                                            <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                            <Button icon="filter-clear" disabled></Button>
                                        </span>
                                    </div>
                                </TableTh>
                            </TableRow>
                        </TableThead>
                        <TableTbody>
                            <TableRow className="k-master-row">
                                <TableTd>
                                    <Icon className="k-treelist-toggle" icon="caret-alt-down" />
                                    1
                                </TableTd>
                                <TableTd>Furniture</TableTd>
                                <TableTd>4</TableTd>
                                <TableTd>8/12/1996</TableTd>
                                <TableTd>false</TableTd>
                            </TableRow>
                            <TableRow className="k-master-row">
                                <TableTd>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    1.1
                                </TableTd>
                                <TableTd>Tables &amp; Chairs</TableTd>
                                <TableTd>123</TableTd>
                                <TableTd>8/12/1996</TableTd>
                                <TableTd>false</TableTd>
                            </TableRow>
                            <TableRow className="k-master-row">
                                <TableTd>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    1.2
                                </TableTd>
                                <TableTd>Sofas</TableTd>
                                <TableTd>213</TableTd>
                                <TableTd>8/12/1996</TableTd>
                                <TableTd>true</TableTd>
                            </TableRow>
                            <TableRow className="k-master-row">
                                <TableTd>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    1.3
                                </TableTd>
                                <TableTd>Occasional Furniture</TableTd>
                                <TableTd>42</TableTd>
                                <TableTd>8/12/1996</TableTd>
                                <TableTd>false</TableTd>
                            </TableRow>
                            <TableRow className="k-master-row">
                                <TableTd>
                                    <Icon className="k-treelist-toggle" icon="caret-alt-down" />
                                    2
                                </TableTd>
                                <TableTd>Decor</TableTd>
                                <TableTd>2</TableTd>
                                <TableTd>8/12/1996</TableTd>
                                <TableTd>false</TableTd>
                            </TableRow>
                            <TableRow className="k-master-row">
                                <TableTd>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    2.1
                                </TableTd>
                                <TableTd>Bed Linen</TableTd>
                                <TableTd>12</TableTd>
                                <TableTd>8/12/1996</TableTd>
                                <TableTd>false</TableTd>
                            </TableRow>
                            <TableRow className="k-master-row">
                                <TableTd>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="caret-alt-down" />
                                    2.2
                                </TableTd>
                                <TableTd>Curtains &amp; Blinds</TableTd>
                                <TableTd>1</TableTd>
                                <TableTd>8/12/1996</TableTd>
                                <TableTd>true</TableTd>
                            </TableRow>
                            <TableRow className="k-master-row">
                                <TableTd>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    2.2.1
                                </TableTd>
                                <TableTd>Carpets</TableTd>
                                <TableTd>54</TableTd>
                                <TableTd>8/12/1996</TableTd>
                                <TableTd>true</TableTd>
                            </TableRow>
                        </TableTbody>
                    </GridTable>
                </TreeList>
            </section>
        </div>
    </>
);
