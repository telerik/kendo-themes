import { FileManager, FileManagerBreadcrumb, FileManagerToolbar, FileManagerTreeview, FilePreview } from "..";
import { BreadcrumbContainer, BreadcrumbItem, BreadcrumbLink } from "../../breadcrumb";
import { Button } from "../../button";
import { ButtonGroup } from "../../button-group";
import { Icon } from "../../icon";
import { Searchbox } from "../../searchbox";
import { SplitButton } from "../../split-button";
import { Splitter, SplitterPane } from "../../splitter";
import { Switch } from "../../switch";
import { TableThead, TableRow, TableTbody, TableTd } from "../../table";
import { TreeviewItem } from "../../treeview";
import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable } from "../../grid";

export const FileManagerGrid = (props) => (
    <FileManager toolbar={
        <FileManagerToolbar>
            <Button>New Folder</Button>
            <Button>Upload</Button>
            <ButtonGroup>
                <Button className="k-group-start" icon="sort-asc-small"></Button>
                <Button className="k-group-end" icon="sort-desc-small"></Button>
            </ButtonGroup>
            <SplitButton text="Sort By" />
            <ButtonGroup>
                <Button className="k-group-start" icon="grid-layout" selected></Button>
                <Button className="k-group-end" icon="grid"></Button>
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
                        <TreeviewItem top text="Folder" />
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
                                </GridTable>
                            </GridContent>
                        </GridContainer>
                    </Grid>
                </SplitterPane>
            </Splitter>
        </>
    }
    {...props}>
    </FileManager>
);
