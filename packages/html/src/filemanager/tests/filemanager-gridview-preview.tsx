import { FilePreview, FileManagerBreadcrumb, FileManagerTreeview, FileInfo, FileManagerGridPreview } from '..';
import { Table, TableRow, TableTbody, TableTd, TableTh, TableThead } from '../..';
import { BreadcrumbContainer, BreadcrumbItem, BreadcrumbLink } from '../../breadcrumb';
import { Icon } from '../../icon';
import { Splitter, SplitterPane } from '../../splitter';
import { TreeviewItem } from '../../treeview';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>Preview - File info</span>
            <FileManagerGridPreview>
                <Splitter className="k-filemanager-splitter">
                    <SplitterPane className="k-filemanager-navigation" collapsible scrollable flexBasis="25%">
                        <FileManagerTreeview>
                            <TreeviewItem text="Folder" />
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

                        <div className="k-filemanager-grid k-grid k-grid-md k-grid-display-block k-editable">
                            <div className="k-grid-header">
                                <div className="k-grid-header-wrap k-auto-scrollable">
                                    <Table className="k-table-md k-grid-header-table">
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
                                                            <span className="k-column-title">Name</span>
                                                            <span className="k-sort-icon">
                                                                <Icon icon="sort-asc-small" />
                                                            </span>
                                                        </span>
                                                    </span>
                                                </TableTh>
                                                <TableTh className="k-header">
                                                    <span className="k-cell-inner">
                                                        <span className="k-link">
                                                            <span className="k-column-title">Date Created</span>
                                                        </span>
                                                    </span>
                                                </TableTh>
                                                <TableTh className="k-header">
                                                    <span className="k-cell-inner">
                                                        <span className="k-link">
                                                            <span className="k-column-title">File Size</span>
                                                        </span>
                                                    </span>
                                                </TableTh>
                                            </TableRow>
                                        </TableThead>
                                    </Table>

                                </div>
                            </div>
                            <div className="k-grid-content k-auto-scrollable">
                                <Table className="k-table-md k-grid-table k-selectable">
                                    <colgroup>
                                        <col className="k-sorted" />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <TableTbody>
                                        <TableRow>
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
                                </Table>
                            </div>
                        </div>
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
                            <TreeviewItem text="Folder" />
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

                        <div className="k-filemanager-grid k-grid k-grid-md k-grid-display-block k-editable">
                            <div className="k-grid-header">
                                <div className="k-grid-header-wrap k-auto-scrollable">
                                    <Table className="k-table-md k-grid-header-table">
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
                                                            <span className="k-column-title">Name</span>
                                                            <span className="k-sort-icon">
                                                                <Icon icon="sort-asc-small" />
                                                            </span>
                                                        </span>
                                                    </span>
                                                </TableTh>
                                                <TableTh className="k-header">
                                                    <span className="k-cell-inner">
                                                        <span className="k-link">
                                                            <span className="k-column-title">Date Created</span>
                                                        </span>
                                                    </span>
                                                </TableTh>
                                                <TableTh className="k-header">
                                                    <span className="k-cell-inner">
                                                        <span className="k-link">
                                                            <span className="k-column-title">File Size</span>
                                                        </span>
                                                    </span>
                                                </TableTh>
                                            </TableRow>
                                        </TableThead>
                                    </Table>

                                </div>
                            </div>
                            <div className="k-grid-content k-auto-scrollable">
                                <Table className="k-table-md k-grid-table k-selectable">
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
                                </Table>
                            </div>
                        </div>
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
