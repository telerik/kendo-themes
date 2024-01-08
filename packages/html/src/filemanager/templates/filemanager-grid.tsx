import { FileManager, FileManagerBreadcrumb, FileManagerToolbar, FileManagerTreeview, FilePreview } from "..";
import { BreadcrumbContainer, BreadcrumbItem, BreadcrumbLink } from "../../breadcrumb";
import { Button } from "../../button";
import { ButtonGroup } from "../../button-group";
import { Icon } from "../../icon";
import { Searchbox } from "../../searchbox";
import { SplitButton } from "../../split-button";
import { Splitter, SplitterPane } from "../../splitter";
import { Switch } from "../../switch";
import { Table, TableThead, TableRow, TableTh, TableTbody, TableTd } from "../../table";
import { TreeviewItem } from "../../treeview";

export const FileManagerGrid = (props) => (
    <FileManager toolbar={
        <FileManagerToolbar>
            <Button>New Folder</Button>
            <Button>Upload</Button>
            <ButtonGroup>
                <Button icon="sort-asc-small"></Button>
                <Button icon="sort-desc-small"></Button>
            </ButtonGroup>
            <SplitButton text="Sort By" />
            <ButtonGroup>
                <Button icon="grid-layout" selected></Button>
                <Button icon="grid"></Button>
            </ButtonGroup>
            <div className="k-spacer"></div>
            <div className="k-filemanager-details-toggle">
                <label>View Details</label>
                <Switch />
            </div>
            <Searchbox className="k-filemanager-search-tool" placeholder="Search..." />
        </FileManagerToolbar>
    }
    children={
        <>
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
                                    <TableRow alt>
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
            </Splitter>
        </>
    }
    {...props}>
    </FileManager>
);
