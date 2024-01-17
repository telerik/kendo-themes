import { Chip, ChipAction, ChipList } from '../../chip';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';
import { Popup } from '../../popup';
import { WindowNormal } from '../../window';
import { Button } from '../../button';
import { FormNormal, FormField } from '../../form';
import { Checkbox } from '../../checkbox';
import { Textbox } from '../../textbox';
import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable, GridToolbar, GridPager } from '../../grid';
import { ColumnMenuItem, ColumnMenuItemWrapper, ColumnMenuExpander, ColumnMenuNormal } from '../../column-menu';


const styles = `
    .k-animation-container,
    .k-popup {
        position: relative;
        overflow: visible;
        top: -114px;
        left: 254px;
    }
    .k-window {
        min-width: 400px;
        position: relative;
    }
    section .k-window {
        margin-inline-end: 16px;
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
                                    <TableRow>
                                        <GridHeaderCell sortable menu="column" columnTitle="Product Id"></GridHeaderCell>
                                        <GridHeaderCell sortable menu="column" columnTitle="Unit Price"></GridHeaderCell>
                                        <GridHeaderCell sortable menu="column" columnTitle="Discontinued"></GridHeaderCell>
                                        <GridHeaderCell sortable menu="column" columnTitle="Category"></GridHeaderCell>
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
                        <ColumnMenuExpander itemText="Resize column" itemIcon="arrows-left-right" expanderIcon="window-restore"/>
                        <ColumnMenuItem text="Autosize all columns" icon="display-inline-flex" />
                    </ColumnMenuItemWrapper>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuExpander itemText="Set column position" itemIcon="set-column-position" />
                    </ColumnMenuItemWrapper>
                </ColumnMenuNormal>
            </Popup>

            <section>
                <WindowNormal title="Column Width" actions={[ 'x' ]} className="k-grid-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Apply</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <FormNormal formButtons={null}>
                        <FormField
                            label="Value in px"
                            editor={ <Textbox value="412" /> }
                        >
                        </FormField>
                        <FormField
                            editor={
                                <>
                                    <Checkbox/>
                                    <label className="k-checkbox-label">Autofit to content</label>
                                </>
                            }
                        >
                        </FormField>
                    </FormNormal>
                </WindowNormal>
            </section>
        </div>
    </>
);
