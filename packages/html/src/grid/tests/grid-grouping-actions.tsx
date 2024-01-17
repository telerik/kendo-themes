import { Chip, ChipAction, ChipList } from '../../chip';
import { Icon } from '../../icon';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';
import { Popup } from '../../popup';
import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable, GridToolbar, GridPager } from '../../grid';
import { ColumnMenuItem, ColumnMenuItemWrapper, ColumnMenuNormal } from '../../column-menu';


const styles = `
    .k-animation-container,
    .k-popup {
        position: relative;
        overflow: visible;
        top: -139px;
        left: 120px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area">
            <section>
                <Grid className="k-grid-no-scrollbar" toolbar={(
                    <GridToolbar>
                        <ChipList>
                            <Chip text="Units in Stock" icon="sort-asc-small" actions={
                                <>
                                    <ChipAction type="more"/>
                                    <ChipAction type="remove"/>
                                </>
                            } />
                            <Chip text="Category" icon="sort-desc-small" actions={
                                <>
                                    <ChipAction type="more"/>
                                    <ChipAction type="remove"/>
                                </>
                            } />
                        </ChipList>
                    </GridToolbar>
                )} pager={(
                    <GridPager refresh={false} />
                )}>
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable>
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell sortable columnTitle="Product Id" menu="column"></GridHeaderCell>
                                        <GridHeaderCell sortable columnTitle="Unit Price" menu="column"></GridHeaderCell>
                                        <GridHeaderCell sortable columnTitle="Discontinued" menu="column"></GridHeaderCell>
                                        <GridHeaderCell sortable columnTitle="Category" menu="column"></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <GridContainer>
                        <GridContent>
                            <GridTable>
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-master-row">
                                        <TableTd>Chef Anton's Gumbo</TableTd>
                                        <TableTd>21.35</TableTd>
                                        <TableTd>0</TableTd>
                                        <TableTd>Condiments</TableTd>
                                    </TableRow>
                                    <TableRow className="k-alt" alt>
                                        <TableTd>Alice Mutton</TableTd>
                                        <TableTd>39</TableTd>
                                        <TableTd>0</TableTd>
                                        <TableTd>Meat/Poultry</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row">
                                        <TableTd>Singaporean Hokkien Fried Mee</TableTd>
                                        <TableTd>123.79</TableTd>
                                        <TableTd>1</TableTd>
                                        <TableTd>Meat/Poultry</TableTd>
                                    </TableRow>
                                    <TableRow className="k-alt" alt>
                                        <TableTd>Gorgonzola Telino</TableTd>
                                        <TableTd>12.5</TableTd>
                                        <TableTd>0</TableTd>
                                        <TableTd>Meat/Poultry</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row">
                                        <TableTd>Perth Pasties</TableTd>
                                        <TableTd>32.8</TableTd>
                                        <TableTd>0</TableTd>
                                        <TableTd>Meat/Poultry</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </GridContent>
                    </GridContainer>
                </Grid>
            </section>

            <Popup className="k-grid-columnmenu-popup">
                <ColumnMenuNormal>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuItem>
                            <div className="k-column-list-item">
                                <Icon icon="caret-alt-left"/>Move previous
                            </div>
                            <div className="k-column-list-item k-disabled">
                                <Icon icon="caret-alt-right"/>Move next
                            </div>
                        </ColumnMenuItem>
                    </ColumnMenuItemWrapper>
                </ColumnMenuNormal>
            </Popup>
        </div>
    </>
);


