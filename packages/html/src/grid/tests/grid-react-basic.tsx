import { Checkbox } from '../../checkbox';
import { GridNormal, GridHeader, GridHeaderTable, GridContainer, GridContent, GridTable, GridHeaderCell } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <span>Basic Grid</span>
            <section>
                <GridNormal groupingHeader={false} pager={false} style={{ height: "500px" }}>
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable>
                                <colgroup>
                                    <col width="40px" />
                                    <col width="300px" />
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell colspan={1} rowspan={1} columnTitle="ID"></GridHeaderCell>
                                        <GridHeaderCell colspan={1} rowspan={1} columnTitle="Name"></GridHeaderCell>
                                        <GridHeaderCell colspan={1} rowspan={1} columnTitle="CategoryName"></GridHeaderCell>
                                        <GridHeaderCell colspan={1} rowspan={1} columnTitle="Price"></GridHeaderCell>
                                        <GridHeaderCell colspan={1} rowspan={1} columnTitle="In stock"></GridHeaderCell>
                                        <GridHeaderCell colspan={1} rowspan={1} columnTitle="Discontinued"></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <GridContainer>
                        <GridContent>
                            <div style={{ position: "relative" }}>
                                <GridTable>
                                    <colgroup>
                                        <col width="40px"/>
                                        <col width="300px" />
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <TableTbody>
                                        <TableRow className="k-master-row">
                                            <TableTd colspan={1}>1</TableTd>
                                            <TableTd colspan={1}>Chai</TableTd>
                                            <TableTd colspan={1}>Beverages</TableTd>
                                            <TableTd colspan={1}>18</TableTd>
                                            <TableTd colspan={1}>39</TableTd>
                                            <TableTd><Checkbox /></TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" alt>
                                            <TableTd colspan={1}>2</TableTd>
                                            <TableTd colspan={1}>Chang</TableTd>
                                            <TableTd colspan={1}>Beverages</TableTd>
                                            <TableTd colspan={1}>19</TableTd>
                                            <TableTd colspan={1}>17</TableTd>
                                            <TableTd><Checkbox /></TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row">
                                            <TableTd colspan={1}>3</TableTd>
                                            <TableTd colspan={1}>Aniseed Syrup</TableTd>
                                            <TableTd colspan={1}>Condiments</TableTd>
                                            <TableTd colspan={1}>10</TableTd>
                                            <TableTd colspan={1}>13</TableTd>
                                            <TableTd><Checkbox /></TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" alt>
                                            <TableTd colspan={1}>4</TableTd>
                                            <TableTd colspan={1}>Chef Anton&apos;s Cajun Seasoning</TableTd>
                                            <TableTd colspan={1}>Condiments</TableTd>
                                            <TableTd colspan={1}>22</TableTd>
                                            <TableTd colspan={1}>53</TableTd>
                                            <TableTd><Checkbox /></TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row">
                                            <TableTd colspan={1}>5</TableTd>
                                            <TableTd colspan={1}>Chef Anton&apos;s Gumbo Mix</TableTd>
                                            <TableTd colspan={1}>Condiments</TableTd>
                                            <TableTd colspan={1}>21.35</TableTd>
                                            <TableTd colspan={1}>0</TableTd>
                                            <TableTd><Checkbox /></TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" alt>
                                            <TableTd colspan={1}>6</TableTd>
                                            <TableTd colspan={1}>Grandma&apos;s Boysenberry Spread</TableTd>
                                            <TableTd colspan={1}>Condiments</TableTd>
                                            <TableTd colspan={1}>25</TableTd>
                                            <TableTd colspan={1}>120</TableTd>
                                            <TableTd><Checkbox /></TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row">
                                            <TableTd colspan={1}>7</TableTd>
                                            <TableTd colspan={1}>Uncle Bob&apos;s Organic Dried Pears</TableTd>
                                            <TableTd colspan={1}>Produce</TableTd>
                                            <TableTd colspan={1}>30</TableTd>
                                            <TableTd colspan={1}>15</TableTd>
                                            <TableTd><Checkbox /></TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" alt>
                                            <TableTd colspan={1}>8</TableTd>
                                            <TableTd colspan={1}>Northwoods Cranberry Sauce</TableTd>
                                            <TableTd colspan={1}>Condiments</TableTd>
                                            <TableTd colspan={1}>40</TableTd>
                                            <TableTd colspan={1}>6</TableTd>
                                            <TableTd><Checkbox /></TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row">
                                            <TableTd colspan={1}>9</TableTd>
                                            <TableTd colspan={1}>Mishi Kobe Niku</TableTd>
                                            <TableTd colspan={1}>Meat/Poultry</TableTd>
                                            <TableTd colspan={1}>97</TableTd>
                                            <TableTd colspan={1}>29</TableTd>
                                            <TableTd><Checkbox /></TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" alt>
                                            <TableTd colspan={1}>10</TableTd>
                                            <TableTd colspan={1}>Ikura</TableTd>
                                            <TableTd colspan={1}>Seafood</TableTd>
                                            <TableTd colspan={1}>31</TableTd>
                                            <TableTd colspan={1}>31</TableTd>
                                            <TableTd><Checkbox /></TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row">
                                            <TableTd colspan={1}>11</TableTd>
                                            <TableTd colspan={1}>Queso Cabrales</TableTd>
                                            <TableTd colspan={1}>Dairy Products</TableTd>
                                            <TableTd colspan={1}>21</TableTd>
                                            <TableTd colspan={1}>22</TableTd>
                                            <TableTd><Checkbox /></TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" alt>
                                            <TableTd colspan={1}>12</TableTd>
                                            <TableTd colspan={1}>Queso Manchego La Pastora</TableTd>
                                            <TableTd colspan={1}>Dairy Products</TableTd>
                                            <TableTd colspan={1}>38</TableTd>
                                            <TableTd colspan={1}>86</TableTd>
                                            <TableTd><Checkbox /></TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row">
                                            <TableTd colspan={1}>13</TableTd>
                                            <TableTd colspan={1}>Konbu</TableTd>
                                            <TableTd colspan={1}>Seafood</TableTd>
                                            <TableTd colspan={1}>6</TableTd>
                                            <TableTd colspan={1}>24</TableTd>
                                            <TableTd><Checkbox /></TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" alt>
                                            <TableTd colspan={1}>14</TableTd>
                                            <TableTd colspan={1}>Tofu</TableTd>
                                            <TableTd colspan={1}>Produce</TableTd>
                                            <TableTd colspan={1}>23.25</TableTd>
                                            <TableTd colspan={1}>35</TableTd>
                                            <TableTd><Checkbox /></TableTd>
                                        </TableRow>
                                    </TableTbody>
                                </GridTable>
                            </div>
                        </GridContent>
                    </GridContainer>
                </GridNormal>
            </section>

        </div>
    </>
);
