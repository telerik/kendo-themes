import { FileManagerTreeview } from '../filemanager-treeview.spec';
import { FileManagerBreadcrumb } from '../filemanager-breadcrumb.spec';
import { FilePreview } from '../file-preview';
import { FileManagerGrid } from '../templates/filemanager-grid';
import { BreadcrumbContainer } from '../../breadcrumb/breadcrumb-container';
import { BreadcrumbItem } from '../../breadcrumb/breadcrumb-item';
import { BreadcrumbLink } from '../../breadcrumb/breadcrumb-link';
import { Icon } from '../../icon/icon.spec';
import { Splitter } from '../../splitter/splitter.spec';
import { SplitterPane } from '../../splitter/splitter-pane';
import { TableRow } from '../../table/table-row';
import { TableTbody } from '../../table/table-tbody';
import { TableTd } from '../../table/table-td';
import { TableThead } from '../../table/table-thead';
import { TreeviewItem } from '../../treeview/treeview-item.spec';
import { Grid } from '../../grid/grid.spec';
import { GridHeader } from '../../grid/grid-header.spec';
import { GridHeaderTable } from '../../grid/grid-header-table.spec';
import { GridHeaderCell } from '../../grid/grid-header-cell.spec';
import { GridContainer } from '../../grid/grid-container.spec';
import { GridContent } from '../../grid/grid-content.spec';
import { GridTable } from '../../grid/grid-table.spec';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>Grid View</span>
            <FileManagerGrid>
                <Splitter className="k-filemanager-splitter" panes={[
                    <SplitterPane className="k-filemanager-navigation" resizable={false} scrollable flexBasis="20%" key="pane-1">
                        <FileManagerTreeview>
                            <TreeviewItem text="Folder" />
                        </FileManagerTreeview>
                    </SplitterPane>,

                    <SplitterPane className="k-filemanager-content" scrollable key="pane-2">
                        <FileManagerBreadcrumb>
                            <BreadcrumbContainer>
                                <BreadcrumbItem root>
                                    <BreadcrumbLink root icon>
                                        <Icon icon="home" />
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbContainer>
                        </FileManagerBreadcrumb>

                        <Grid _renderAriaRoot className="k-filemanager-grid k-grid-display-block">
                            <GridHeader>
                                <div className="k-grid-header-wrap k-auto-scrollable">
                                    <GridHeaderTable>
                                        <colgroup>
                                            <col />
                                            <col />
                                            <col />
                                        </colgroup>
                                        <TableThead>
                                            <TableRow>
                                                <GridHeaderCell columnTitle="Name" sortable ></GridHeaderCell>
                                                <GridHeaderCell columnTitle="Date Created"></GridHeaderCell>
                                                <GridHeaderCell columnTitle="File Size"></GridHeaderCell>
                                            </TableRow>
                                        </TableThead>
                                    </GridHeaderTable>

                                </div>
                            </GridHeader>
                            <GridContainer>
                                <GridContent className="k-auto-scrollable">
                                    <GridTable className="k-selectable">
                                        <colgroup>
                                            <col className="k-sorted" />
                                            <col />
                                            <col />
                                        </colgroup>
                                        <TableTbody>
                                            <TableRow className="k-master-row">
                                                <TableTd>
                                                    <FilePreview name="Folder" icon="folder" />
                                                </TableTd>
                                                <TableTd>13/12/2019 at 12:22:04 PM</TableTd>
                                                <TableTd>0</TableTd>
                                            </TableRow>
                                            <TableRow className="k-master-row" alt selected>
                                                <TableTd>
                                                    <FilePreview name="file.png" icon="file" />
                                                </TableTd>
                                                <TableTd>13/12/2019 at 12:22:04 PM</TableTd>
                                                <TableTd>73289</TableTd>
                                            </TableRow>
                                        </TableTbody>
                                    </GridTable>
                                </GridContent>
                            </GridContainer>
                        </Grid>
                    </SplitterPane>
                ]} />
            </FileManagerGrid>

            <span>Grid View Resizing</span>
            <FileManagerGrid />

        </div>
    </>
);
