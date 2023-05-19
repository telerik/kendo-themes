import { Button } from '../../button';
import { Icon } from '../../icon';
import { Pager } from '../../pager';
import { Toolbar } from '../../toolbar';
import { Table, TableThead, TableTbody, TableRow, TableTh, TableTd } from '../../table';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <section>
                <div className="k-grid k-grid-md k-grid-no-scrollbar">
                    <Toolbar className="k-grid-toolbar">
                        <Button className="k-toolbar-button" themeColor="primary">Add New</Button>
                    </Toolbar>
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <Table size="medium" className="k-grid-header-table" >
                                <colgroup>
                                    <col className="k-drag-col" />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <TableTh className="k-drag-cell k-header"></TableTh>
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
                                <col className="k-drag-col" />
                                <col />
                                <col />
                            </colgroup>
                            <TableTbody>
                                <TableRow className="k-master-row">
                                    <TableTd className="k-drag-cell"><Icon icon="reorder"/></TableTd>
                                    <TableTd>Chef Anton's Gumbo</TableTd>
                                    <TableTd>21.35</TableTd>
                                    <TableTd>0</TableTd>
                                    <TableTd>Condiments</TableTd>
                                </TableRow>
                                <TableRow alt>
                                    <TableTd className="k-drag-cell"><Icon icon="reorder"/></TableTd>
                                    <TableTd>Alice Mutton</TableTd>
                                    <TableTd>39</TableTd>
                                    <TableTd>0</TableTd>
                                    <TableTd>Meat/Poultry</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row">
                                    <TableTd className="k-drag-cell"><Icon icon="reorder"/></TableTd>
                                    <TableTd>Singaporean Hokkien Fried Mee</TableTd>
                                    <TableTd>123.79</TableTd>
                                    <TableTd>1</TableTd>
                                    <TableTd>Meat/Poultry</TableTd>
                                </TableRow>
                                <TableRow alt>
                                    <TableTd className="k-drag-cell"><Icon icon="reorder"/></TableTd>
                                    <TableTd>Gorgonzola Telino</TableTd>
                                    <TableTd>12.5</TableTd>
                                    <TableTd>0</TableTd>
                                    <TableTd>Meat/Poultry</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row">
                                    <TableTd className="k-drag-cell"><Icon icon="reorder"/></TableTd>
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
        </div>
    </>
);
