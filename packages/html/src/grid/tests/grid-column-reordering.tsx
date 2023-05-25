import { Chip, ChipAction, ChipList } from '../../chip';
import { Icon } from '../../icon';
import { Pager } from '../../pager';
import { Table, TableThead, TableTbody, TableRow, TableTh, TableTd } from '../../table';
import { Toolbar } from '../../toolbar';
import { Popup } from '../../popup';

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
                                            </span>
                                            <a href="#" className="k-grid-header-menu k-grid-column-menu">
                                                <Icon icon="more-vertical" />
                                            </a>
                                        </TableTh>
                                        <TableTh className="k-header k-sorted">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Unit Price</span>
                                                    <span className="k-sort-icon"><Icon icon="sort-asc-small" /></span>
                                                </span>
                                            </span>
                                            <a href="#" className="k-grid-header-menu k-grid-column-menu">
                                                <Icon icon="more-vertical" />
                                            </a>
                                        </TableTh>
                                        <TableTh className="k-header k-sorted">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Discontinued</span>
                                                    <span className="k-sort-icon"><Icon icon="sort-asc-small" /></span>
                                                </span>
                                            </span>
                                            <a href="#" className="k-grid-header-menu k-grid-column-menu">
                                                <Icon icon="more-vertical" />
                                            </a>
                                        </TableTh>
                                        <TableTh className="k-header k-sorted">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Category</span>
                                                    <span className="k-sort-icon"><Icon icon="sort-asc-small" /></span>
                                                </span>
                                            </span>
                                            <a href="#" className="k-grid-header-menu k-grid-column-menu">
                                                <Icon icon="more-vertical" />
                                            </a>
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

            <Popup id="discontinued" className="k-column-menu k-grid-columnmenu-popup">
                <div className="k-columnmenu-item-wrapper">
                    <div className="k-columnmenu-item">
                        <Icon icon="group"/>Group column
                    </div>
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
                        <div className="k-columnmenu-item">
                            <Icon icon="max-width"/>Autosize This Column
                        </div>
                        <div className="k-columnmenu-item">
                            <Icon icon="display-inline-flex"/>Autosize All Columns
                        </div>
                    </div>
                    <div className="k-columnmenu-item-wrapper">
                        <div className="k-expander">
                            <div className="k-columnmenu-item">
                                <Icon icon="set-column-position" />Set Column Position
                                <span className="k-spacer"></span>
                                <span className="k-expander-indicator">
                                    <Icon icon="chevron-up"/>
                                </span>
                            </div>
                            <div className="k-columnmenu-item-content k-columns-item">
                                <div className="k-column-list-wrapper">
                                    <div className="k-column-list" style={{ maxHeight: "260px", overflowY: "hidden" }}>
                                        <div className="k-column-list-item">
                                            <Icon icon="lock"/>Lock Column
                                        </div>
                                        <div className="k-column-list-item k-disabled">
                                            <Icon icon="unlock"/>Unlock Column
                                        </div>
                                        <div className="k-column-list-item">
                                            <Icon icon="stick"/>Stick Column
                                        </div>
                                        <div className="k-column-list-item k-disabled">
                                            <Icon icon="unstick"/>Unstick Column
                                        </div>
                                        <div className="k-column-list-item">
                                            <Icon icon="caret-alt-left"/>Move Previous
                                        </div>
                                        <div className="k-column-list-item">
                                            <Icon icon="caret-alt-right"/>Move Next
                                        </div>
                                    </div>
                                </div>
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
                </div>
            </Popup>

            <Popup id="category" className="k-column-menu k-grid-columnmenu-popup">
                <div className="k-columnmenu-item-wrapper">
                    <div className="k-columnmenu-item">
                        <div className="k-column-list-item">
                            <Icon icon="caret-alt-left"/>Move Previous
                        </div>
                        <div className="k-column-list-item">
                            <Icon icon="caret-alt-right"/>Move Next
                        </div>
                    </div>
                </div>
            </Popup>
        </div>
    </>
);
