import { Chip, ChipAction, ChipList } from '../../chip';
import { Icon } from '../../icon';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';
import { Popup } from '../../popup';
import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable, GridPager, GridToolbar } from '../../grid';
import { ColumnMenuItem, ColumnMenuItemWrapper, ColumnMenuExpander, ColumnMenuNormal } from '../../column-menu';

const styles = `
    .k-animation-container,
    .k-popup {
        position: relative;
        overflow: visible;
    }

    #discontinued {
        top: -114px;
        left: 254px;
    }

    #category {
        top: -337px;
        left: 120px;
    }
`;

export default () =>(
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
                                    <GridHeaderCell sortable menu="column" columnTitle="Product Id"></GridHeaderCell>
                                    <GridHeaderCell sortable menu="column" columnTitle="Unit Price"></GridHeaderCell>
                                    <GridHeaderCell sortable menu="column" columnTitle="Discontinued"></GridHeaderCell>
                                    <GridHeaderCell sortable menu="column" columnTitle="Category"></GridHeaderCell>
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

            <Popup id="discontinued" className="k-grid-columnmenu-popup">
                <ColumnMenuNormal>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuItem text="Sort ascending" icon="sort-asc-small" />
                        <ColumnMenuItem text="Sort descending" icon="sort-desc-small" />
                    </ColumnMenuItemWrapper>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuExpander itemText="Columns" itemIcon="columns" />
                    </ColumnMenuItemWrapper>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuExpander itemText="Filter" itemIcon="filter" />
                    </ColumnMenuItemWrapper>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuItem text="Group column" icon="group" />
                    </ColumnMenuItemWrapper>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuItem text="Autosize this column" icon="max-width" />
                        <ColumnMenuItem text="Autosize all columns" icon="display-inline-flex" />
                    </ColumnMenuItemWrapper>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuExpander itemText="Set column position" itemIcon="set-column-position" expanded={true} itemContent={
                            <>
                                <div className="k-column-list-wrapper">
                                    <div className="k-column-list" style={{ maxHeight: "260px", overflowY: "hidden" }}>
                                        <div className="k-column-list-item">
                                            <Icon icon="lock" />Lock column
                                        </div>
                                        <div className="k-column-list-item k-disabled">
                                            <Icon icon="unlock" />Unlock column
                                        </div>
                                        <div className="k-column-list-item">
                                            <Icon icon="stick" />Stick column
                                        </div>
                                        <div className="k-column-list-item k-disabled">
                                            <Icon icon="unstick" />Unstick column
                                        </div>
                                        <div className="k-column-list-item">
                                            <Icon icon="caret-alt-left" />Move previous
                                        </div>
                                        <div className="k-column-list-item">
                                            <Icon icon="caret-alt-right" />Move next
                                        </div>
                                    </div>
                                </div>
                            </>
                        }/>
                    </ColumnMenuItemWrapper>
                </ColumnMenuNormal>
            </Popup>

            <Popup id="category" className="k-grid-columnmenu-popup">
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
