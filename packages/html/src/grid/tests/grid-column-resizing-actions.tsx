import { Chip, ChipAction, ChipList } from '../../chip';
import { Icon } from '../../icon';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';
import { Popup } from '../../popup';
import { WindowNormal } from '../../window';
import { Button } from '../../button';
import { FormNormal, FormField } from '../../form';
import { Checkbox } from '../../checkbox';
import { Textbox } from '../../textbox';
import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable, GridToolbar, GridPager } from '../../grid';

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

            <Popup className="k-column-menu k-grid-columnmenu-popup">
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
                            <span className="k-expander-indicator">
                                <Icon icon="chevron-down"/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="k-columnmenu-item-wrapper">
                    <div className="k-columnmenu-item">
                        <Icon icon="group" />Group column
                    </div>
                </div>
                <div className="k-columnmenu-item-wrapper">
                    <div className="k-expander">
                        <div className="k-columnmenu-item">
                            <Icon icon="arrows-left-right"/>Resize column
                            <span className="k-spacer"></span>
                            <span className="k-expander-indicator">
                                <Icon icon="window-restore"/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="k-columnmenu-item-wrapper">
                    <div className="k-columnmenu-item">
                        <Icon icon="group" />Autosize all columns
                    </div>
                </div>
                <div className="k-columnmenu-item-wrapper">
                    <div className="k-expander">
                        <div className="k-columnmenu-item">
                            <Icon icon="set-column-position" />Set column position
                            <span className="k-spacer"></span>
                            <span className="k-expander-indicator">
                                <Icon icon="chevron-down" />
                            </span>
                        </div>
                    </div>
                </div>
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
