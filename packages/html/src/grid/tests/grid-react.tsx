import { Icon } from '../../icon';
import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable, GridFooter, GridFooterTable } from '../../grid';
import { TableRow, TableThead, TableTbody, TableTfoot, TableTd } from '../../table';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <span>Interaction States</span>

            <section>
                <Grid style={{ height: "500px" }} _renderAriaRoot>
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable style={{ width: "1180px" }}>
                                <colgroup>
                                    <col width="60px" />
                                    <col width="90px" />
                                    <col width="300px" />
                                    <col width="120px" />
                                    <col width="120px" />
                                    <col width="120px" />
                                    <col width="120px" />
                                    <col width="250px" />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell sticky style={{ left: '0px', right: "240px" }}></GridHeaderCell>
                                        <GridHeaderCell columnTitle="ID"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Name"></GridHeaderCell>
                                        <GridHeaderCell sticky columnTitle="Price" style={{ left: "60px", right: "120px" }}></GridHeaderCell>
                                        <GridHeaderCell sticky columnTitle="In stock" style={{ left: "180px", right: '0px' }}></GridHeaderCell>
                                        <GridHeaderCell columnTitle="On order"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Discontinued"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Additional details"></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <GridContainer>
                        <GridContent className="k-virtual-content">
                            <div style={{ position: "relative" }}>
                                <GridTable style={{ width: "1180px" }}>
                                    <colgroup>
                                        <col width="60px" />
                                        <col width="90px" />
                                        <col width="300px" />
                                        <col width="120px" />
                                        <col width="120px" />
                                        <col width="120px" />
                                        <col width="120px" />
                                        <col width="250px" />
                                    </colgroup>
                                    <TableTbody>
                                        <TableRow className="k-master-row">
                                            <TableTd className="k-grid-content-sticky" style={{ left: '0px', right: "240px" }}>
                                                <Icon icon="unpin" />
                                            </TableTd>
                                            <TableTd>1</TableTd>
                                            <TableTd>Normal</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$18.00</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>39</TableTd>
                                            <TableTd>0</TableTd>
                                            <TableTd>false</TableTd>
                                            <TableTd>10 boxes x 20 bags</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row k-alt" alt>
                                            <TableTd className="k-grid-content-sticky k-selected" style={{ left: '0px', right: "240px" }}>
                                                <Icon icon="unpin" />
                                            </TableTd>
                                            <TableTd className="k-selected">2</TableTd>
                                            <TableTd>Drag Selection Alt</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$19.00</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>17</TableTd>
                                            <TableTd>40</TableTd>
                                            <TableTd>false</TableTd>
                                            <TableTd>24 - 12 oz bottles</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row">
                                            <TableTd className="k-grid-content-sticky k-selected" style={{ left: '0px', right: "240px" }}>
                                                <Icon icon="unpin" />
                                            </TableTd>
                                            <TableTd className="k-selected">3</TableTd>
                                            <TableTd>Drag Selection</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$10.00</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>13</TableTd>
                                            <TableTd>70</TableTd>
                                            <TableTd>false</TableTd>
                                            <TableTd>12 - 550 ml bottles</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row k-selected k-alt" alt>
                                            <TableTd className="k-grid-content-sticky k-selected" style={{ left: '0px', right: "240px" }}>
                                                <Icon icon="unpin" />
                                            </TableTd>
                                            <TableTd>4</TableTd>
                                            <TableTd>Row Selection Alt</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$22.00</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>53</TableTd>
                                            <TableTd>0</TableTd>
                                            <TableTd>false</TableTd>
                                            <TableTd>48 - 6 oz jars</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row k-selected">
                                            <TableTd className="k-grid-content-sticky k-selected" style={{ left: '0px', right: "240px" }}>
                                                <Icon icon="unpin" />
                                            </TableTd>
                                            <TableTd>5</TableTd>
                                            <TableTd>Row Selection</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$21.35</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>0</TableTd>
                                            <TableTd>0</TableTd>
                                            <TableTd>true</TableTd>
                                            <TableTd>36 boxes</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row k-hover k-alt" alt>
                                            <TableTd className="k-grid-content-sticky k-selected" style={{ left: '0px', right: "240px" }}>
                                                <Icon icon="unpin" />
                                            </TableTd>
                                            <TableTd className="k-selected">6</TableTd>
                                            <TableTd>Drag Selection Alt Hover</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$25.00</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>120</TableTd>
                                            <TableTd>0</TableTd>
                                            <TableTd>false</TableTd>
                                            <TableTd>12 - 8 oz jars</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row k-hover">
                                            <TableTd className="k-grid-content-sticky k-selected" style={{ left: '0px', right: "240px" }}>
                                                <Icon icon="unpin" />
                                            </TableTd>
                                            <TableTd className="k-selected">7</TableTd>
                                            <TableTd>Drag Selection Hover</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$30.00</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>15</TableTd>
                                            <TableTd>0</TableTd>
                                            <TableTd>false</TableTd>
                                            <TableTd>12 - 1 lb pkgs</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row k-hover k-alt" alt>
                                            <TableTd className="k-grid-content-sticky" style={{ left: '0px', right: "240px" }}>
                                                <Icon icon="unpin" />
                                            </TableTd>
                                            <TableTd>8</TableTd>
                                            <TableTd>Hover</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$40.00</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>6</TableTd>
                                            <TableTd>0</TableTd>
                                            <TableTd>false</TableTd>
                                            <TableTd>12 - 12 oz jars</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row">
                                            <TableTd className="k-grid-content-sticky k-focus" style={{ left: '0px', right: "240px" }}>
                                                <Icon icon="unpin" />
                                            </TableTd>
                                            <TableTd>9</TableTd>
                                            <TableTd>Focus sticky cell</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$97.00</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>29</TableTd>
                                            <TableTd>0</TableTd>
                                            <TableTd>true</TableTd>
                                            <TableTd>18 - 500 g pkgs.</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row k-alt" alt>
                                            <TableTd className="k-grid-content-sticky" style={{ left: '0px', right: "240px" }}>
                                                <Icon icon="unpin" />
                                            </TableTd>
                                            <TableTd className="k-focus">10</TableTd>
                                            <TableTd>Focus normal cell</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$31.00</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>31</TableTd>
                                            <TableTd>0</TableTd>
                                            <TableTd>false</TableTd>
                                            <TableTd>12 - 200 ml jars</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row">
                                            <TableTd className="k-grid-content-sticky" style={{ left: '0px', right: "240px" }}>
                                                <Icon icon="unpin" />
                                            </TableTd>
                                            <TableTd>11</TableTd>
                                            <TableTd>Queso Cabrales</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$21.00</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>22</TableTd>
                                            <TableTd>30</TableTd>
                                            <TableTd>false</TableTd>
                                            <TableTd>1 kg pkg.</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row k-alt" alt>
                                            <TableTd className="k-grid-content-sticky" style={{ left: '0px', right: "240px" }}>
                                                <Icon icon="unpin" />
                                            </TableTd>
                                            <TableTd>12</TableTd>
                                            <TableTd>Queso Manchego La Pastora</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$38.00</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>86</TableTd>
                                            <TableTd>0</TableTd>
                                            <TableTd>false</TableTd>
                                            <TableTd>10 - 500 g pkgs.</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row">
                                            <TableTd className="k-grid-content-sticky" style={{ left: '0px', right: "240px" }}>
                                                <Icon icon="unpin" />
                                            </TableTd>
                                            <TableTd>13</TableTd>
                                            <TableTd>Konbu</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$6.00</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>24</TableTd>
                                            <TableTd>30</TableTd>
                                            <TableTd>false</TableTd>
                                            <TableTd>2 kg box</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row k-alt" alt>
                                            <TableTd className="k-grid-content-sticky" style={{ left: '0px', right: "240px" }}>
                                                <Icon icon="unpin" />
                                            </TableTd>
                                            <TableTd>14</TableTd>
                                            <TableTd>Tofu</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$23.25</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>35</TableTd>
                                            <TableTd>0</TableTd>
                                            <TableTd>false</TableTd>
                                            <TableTd>40 - 100 g pkgs.</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row">
                                            <TableTd className="k-grid-content-sticky" style={{ left: '0px', right: "240px" }}>
                                                <Icon icon="unpin" />
                                            </TableTd>
                                            <TableTd>15</TableTd>
                                            <TableTd>Genen Shouyu</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: "60px", right: "120px" }}>$15.50</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: "180px", right: '0px' }}>39</TableTd>
                                            <TableTd>30</TableTd>
                                            <TableTd>false</TableTd>
                                            <TableTd>24 - 250 ml bottles</TableTd>
                                        </TableRow>
                                    </TableTbody>
                                </GridTable>
                            </div>
                            <div className="k-height-container">
                                <div></div>
                            </div>
                        </GridContent>
                    </GridContainer>
                    <GridFooter>
                        <div className="k-grid-footer-wrap">
                            <GridFooterTable style={{ width: "1180px" }}>
                                <colgroup>
                                    <col width="60px" />
                                    <col width="90px" />
                                    <col width="300px" />
                                    <col width="120px" />
                                    <col width="120px" />
                                    <col width="120px" />
                                    <col width="120px" />
                                    <col width="250px" />
                                </colgroup>
                                <TableTfoot>
                                    <TableRow>
                                        <TableTd className="k-grid-footer-sticky" style={{ left: '0px', right: "240px" }}></TableTd>
                                        <TableTd></TableTd>
                                        <TableTd></TableTd>
                                        <TableTd className="k-grid-footer-sticky" style={{ left: "60px", right: "120px" }}>avg: X</TableTd>
                                        <TableTd className="k-grid-footer-sticky" style={{ left: "180px", right: '0px' }}>total: Y</TableTd>
                                        <TableTd></TableTd>
                                        <TableTd></TableTd>
                                        <TableTd></TableTd>
                                    </TableRow>
                                </TableTfoot>
                            </GridFooterTable>
                        </div>
                    </GridFooter>
                </Grid>
            </section>
        </div>
    </>
);
