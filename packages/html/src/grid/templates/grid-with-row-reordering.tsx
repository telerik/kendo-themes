import { Icon } from '../../icon';
import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable, GridPager } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';

export const GridWithRowReordering = ({ contentClassName, ...other }: any) => (
    <Grid _renderAriaRoot
        pager={( <GridPager pageSizes={false} refresh={false} /> )}
        children={(
            <>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col className="k-drag-col" />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell className="k-drag-cell"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Product Id"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Unit Price"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Discontinued"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Category"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent className={contentClassName}>
                        <GridTable>
                            <colgroup>
                                <col className="k-drag-col" />
                                <col />
                                <col />
                            </colgroup>
                            <TableTbody>
                                <TableRow className="k-master-row">
                                    <TableTd className="k-drag-cell"><Icon icon="reorder"/></TableTd>
                                    <TableTd>Chef Anton's Gumbo</TableTd>
                                    <TableTd>21.35</TableTd>
                                    <TableTd>false</TableTd>
                                    <TableTd>Condiments</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row k-alt" alt>
                                    <TableTd className="k-drag-cell"><Icon icon="reorder"/></TableTd>
                                    <TableTd>Alice Mutton</TableTd>
                                    <TableTd>39</TableTd>
                                    <TableTd>false</TableTd>
                                    <TableTd>Meat/Poultry</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row">
                                    <TableTd className="k-drag-cell"><Icon icon="reorder"/></TableTd>
                                    <TableTd>Singaporean Hokkien Fried Mee</TableTd>
                                    <TableTd>123.79</TableTd>
                                    <TableTd>true</TableTd>
                                    <TableTd>Meat/Poultry</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row k-alt" alt>
                                    <TableTd className="k-drag-cell"><Icon icon="reorder"/></TableTd>
                                    <TableTd>Gorgonzola Telino</TableTd>
                                    <TableTd>12.5</TableTd>
                                    <TableTd>false</TableTd>
                                    <TableTd>Meat/Poultry</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row">
                                    <TableTd className="k-drag-cell"><Icon icon="reorder"/></TableTd>
                                    <TableTd>Perth Pasties</TableTd>
                                    <TableTd>32.8</TableTd>
                                    <TableTd>false</TableTd>
                                    <TableTd>Meat/Poultry</TableTd>
                                </TableRow>
                            </TableTbody>
                        </GridTable>
                    </GridContent>
                </GridContainer>
            </>
        )}
        {...other}>

    </Grid>
);

export default GridWithRowReordering;
