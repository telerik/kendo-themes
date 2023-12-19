import { Chip, ChipAction, ChipList } from '../../chip';
import { Icon } from '../../icon';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';
import { Popup } from '../../popup';
import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable, GridPager, GridToolbar } from '../../grid';

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

            <Popup id="discontinued" className="k-column-menu k-grid-columnmenu-popup">
                <div className="k-columnmenu-item-wrapper">
                    <div className="k-columnmenu-item">
                        <Icon icon="sort-asc-small" />Sort ascending
                    </div>
                    <div className="k-columnmenu-item">
                        <Icon icon="sort-desc-small" />Sort descending
                    </div>
                </div>
                <div className="k-columnmenu-item-wrapper">
                    <div className="k-expander">
                        <div className="k-columnmenu-item">
                            <Icon icon="columns"/>Columns
                            <span className="k-spacer"></span>
                            <span className="k-expander-indicator">
                                <Icon icon="chevron-down"/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="k-columnmenu-item-wrapper">
                    <div className="k-expander">
                        <div className="k-columnmenu-item">
                            <Icon icon="filter"/>Filter
                            <span className="k-spacer"></span>
                            <Icon icon="chevron-down"/>
                        </div>
                    </div>
                </div>
                <div className="k-columnmenu-item-wrapper">
                    <div className="k-columnmenu-item">
                        <Icon icon="group"/>Group column
                    </div>
                </div>
                <div className="k-columnmenu-item-wrapper">
                    <div className="k-columnmenu-item">
                        <Icon icon="max-width"/>Autosize this column
                    </div>
                    <div className="k-columnmenu-item">
                        <Icon icon="display-inline-flex"/>Autosize all columns
                    </div>
                </div>
                <div className="k-columnmenu-item-wrapper">
                    <div className="k-expander">
                        <div className="k-columnmenu-item">
                            <Icon icon="set-column-position" />Set column position
                            <span className="k-spacer"></span>
                            <span className="k-expander-indicator">
                                <Icon icon="chevron-up"/>
                            </span>
                        </div>
                        <div className="k-columnmenu-item-content k-columns-item">
                            <div className="k-column-list-wrapper">
                                <div className="k-column-list" style={{ maxHeight: "260px", overflowY: "hidden" }}>
                                    <div className="k-column-list-item">
                                        <Icon icon="lock"/>Lock column
                                    </div>
                                    <div className="k-column-list-item k-disabled">
                                        <Icon icon="unlock"/>Unlock column
                                    </div>
                                    <div className="k-column-list-item">
                                        <Icon icon="stick"/>Stick column
                                    </div>
                                    <div className="k-column-list-item k-disabled">
                                        <Icon icon="unstick"/>Unstick column
                                    </div>
                                    <div className="k-column-list-item">
                                        <Icon icon="caret-alt-left"/>Move previous
                                    </div>
                                    <div className="k-column-list-item">
                                        <Icon icon="caret-alt-right"/>Move next
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Popup>

            <Popup id="category" className="k-column-menu k-grid-columnmenu-popup">
                <div className="k-columnmenu-item-wrapper">
                    <div className="k-columnmenu-item">
                        <div className="k-column-list-item">
                            <Icon icon="caret-alt-left"/>Move previous
                        </div>
                        <div className="k-column-list-item k-disabled">
                            <Icon icon="caret-alt-right"/>Move next
                        </div>
                    </div>
                </div>
            </Popup>
        </div>
    </>
);
