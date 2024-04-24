import { FileManagerBreadcrumb, FileManagerGrid, FileManagerTreeview, FilePreview } from '..';
import { BreadcrumbContainer, BreadcrumbItem, BreadcrumbLink } from '../../breadcrumb';
import { Icon } from '../../icon';
import { Splitter, SplitterPane } from '../../splitter';
import { TableRow, TableTbody, TableTd, TableThead } from '../../table';
import { TreeviewItem } from '../../treeview';
import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable } from "../../grid";


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>Grid View</span>
            <FileManagerGrid>
                <Splitter className="k-filemanager-splitter">
                    <SplitterPane className="k-filemanager-navigation" resizable={false} scrollable flexBasis="20%">
                        <FileManagerTreeview>
                            <TreeviewItem top bottom text="Folder" />
                        </FileManagerTreeview>
                    </SplitterPane>

                    <SplitterPane className="k-filemanager-content" scrollable>
                        <FileManagerBreadcrumb>
                            <BreadcrumbContainer>
                                <BreadcrumbItem root>
                                    <BreadcrumbLink root icon>
                                        <Icon icon="home" />
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbContainer>
                        </FileManagerBreadcrumb>

                        <Grid _renderAriaRoot className="k-filemanager-grid k-grid-display-block k-editable">
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
                                            <TableRow className="k-master-row k-alt" alt selected>
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
                </Splitter>
            </FileManagerGrid>

            <span>Grid View Resizing</span>
            <FileManagerGrid />

        </div>
    </>
);
