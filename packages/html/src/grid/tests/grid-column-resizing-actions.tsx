import { Chip, ChipAction, ChipList } from '../../chip';
import { Icon } from '../../icon';
import { Pager } from '../../pager';
import { Table, TableThead, TableTbody, TableRow, TableTh, TableTd } from '../../table';
import { Toolbar } from '../../toolbar';
import { Popup } from '../../popup';
import { WindowNormal } from '../../window';
import { Button } from '../../button';
import { FormNormal, FormField } from '../../form';
import { Checkbox } from '../../checkbox';
import { Textbox } from '../../textbox';

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
                <div className="k-grid k-grid-md k-grid-no-scrollbar">
                    <Toolbar className="k-grid-toolbar">
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
                    </Toolbar>
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <Table size="medium" className="k-grid-header-table" >
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <TableTh className="k-header k-sorted">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Product Id</span>
                                                    <span className="k-sort-icon"><Icon icon="sort-asc-small" /></span>
                                                </span>
                                                <a href="#" className="k-grid-header-menu k-grid-column-menu">
                                                    <Icon icon="more-vertical" />
                                                </a>
                                            </span>
                                        </TableTh>
                                        <TableTh className="k-header k-sorted">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Unit Price</span>
                                                    <span className="k-sort-icon"><Icon icon="sort-asc-small" /></span>
                                                </span>
                                                <a href="#" className="k-grid-header-menu k-grid-column-menu">
                                                    <Icon icon="more-vertical" />
                                                </a>
                                            </span>
                                        </TableTh>
                                        <TableTh className="k-header k-sorted">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Discontinued</span>
                                                    <span className="k-sort-icon"><Icon icon="sort-asc-small" /></span>
                                                </span>
                                                <a href="#" className="k-grid-header-menu k-grid-column-menu">
                                                    <Icon icon="more-vertical" />
                                                </a>
                                            </span>
                                        </TableTh>
                                        <TableTh className="k-header k-sorted">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Category</span>
                                                    <span className="k-sort-icon"><Icon icon="sort-asc-small" /></span>
                                                </span>
                                                <a href="#" className="k-grid-header-menu k-grid-column-menu">
                                                    <Icon icon="more-vertical" />
                                                </a>
                                            </span>
                                        </TableTh>
                                    </TableRow>
                                </TableThead>
                            </Table>
                        </div>
                    </div>
                    <div className="k-grid-content">
                        <Table size="medium" className="k-grid-table">
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
                                <TableRow alt>
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
                                <TableRow alt>
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
                        </Table>
                    </div>
                    <Pager refresh={false} className="k-grid-pager"/>
                </div>
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
