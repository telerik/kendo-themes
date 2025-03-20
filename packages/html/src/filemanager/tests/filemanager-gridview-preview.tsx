import { FilePreview, FileManagerBreadcrumb, FileManagerTreeview, FileInfo, FileManagerGridPreview } from '..';
import { BreadcrumbContainer, BreadcrumbItem, BreadcrumbLink } from '../../breadcrumb';
import { Icon } from '../../icon';
import { Splitter, SplitterPane } from '../../splitter';
import { TreeviewItem } from '../../treeview';
import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable } from "../../grid";
import { TableThead, TableRow, TableTbody, TableTd } from '../../table';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>Preview - File info</span>
            <FileManagerGridPreview>
                <Splitter className="k-filemanager-splitter">
                    <SplitterPane className="k-filemanager-navigation" collapsible scrollable flexBasis="25%">
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
                                                <GridHeaderCell columnTitle="Name" sortable></GridHeaderCell>
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

                    <SplitterPane className="k-filemanager-preview" collapsible scrollable flexBasis="25%">
                        <FileInfo selection="single" icon="file-image" name="file.png" fileType="Image" fileSize="72 KB" fileDateCreated="13/12/2019 12:22:04 PM" fileDateModified="13/12/2019 12:36:04 PM">
                        </FileInfo>
                    </SplitterPane>
                </Splitter>
            </FileManagerGridPreview>

            <span>Preview - No file selected</span>
            <FileManagerGridPreview />

            <span>Preview - Multiple files selected</span>
            <FileManagerGridPreview>
                <Splitter className="k-filemanager-splitter">
                    <SplitterPane className="k-filemanager-navigation" collapsible scrollable flexBasis="25%">
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
                                                <GridHeaderCell columnTitle="Name" sortable></GridHeaderCell>
                                                <GridHeaderCell columnTitle="Date Created"></GridHeaderCell>
                                                <GridHeaderCell columnTitle="File Size"></GridHeaderCell>
                                            </TableRow>
                                        </TableThead>
                                    </GridHeaderTable>

                                </div>
                            </GridHeader>
                            <GridContent className="k-auto-scrollable">
                                <GridTable className="k-selectable">
                                    <colgroup>
                                        <col className="k-sorted" />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <TableTbody>
                                        <TableRow selected>
                                            <TableTd>
                                                <FilePreview name="Folder" icon="folder" />
                                            </TableTd>
                                            <TableTd>13/12/2019 at 12:22:04 PM</TableTd>
                                            <TableTd>0</TableTd>
                                        </TableRow>
                                        <TableRow alt selected>
                                            <TableTd>
                                                <FilePreview name="file.png" icon="file" />
                                            </TableTd>
                                            <TableTd>13/12/2019 at 12:22:04 PM</TableTd>
                                            <TableTd>73289</TableTd>
                                        </TableRow>
                                    </TableTbody>
                                </GridTable>
                            </GridContent>
                        </Grid>
                    </SplitterPane>

                    <SplitterPane className="k-filemanager-preview" collapsible scrollable flexBasis="25%">
                        <FileInfo selection="multiple" name="2 items">
                        </FileInfo>
                    </SplitterPane>
                </Splitter>
            </FileManagerGridPreview>

        </div>
    </>
);
