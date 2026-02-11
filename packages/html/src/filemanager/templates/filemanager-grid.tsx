import { FileManager } from "../filemanager.spec";
import { FileManagerToolbar } from "../filemanager-toolbar.spec";
import { FileManagerTreeview } from "../filemanager-treeview.spec";
import { FileManagerBreadcrumb } from "../filemanager-breadcrumb.spec";
import { FilePreview } from "../file-preview";
import { BreadcrumbContainer } from "../../breadcrumb/breadcrumb-container";
import { BreadcrumbItem } from "../../breadcrumb/breadcrumb-item";
import { BreadcrumbLink } from "../../breadcrumb/breadcrumb-link";
import { Button } from "../../button/button.spec";
import { ButtonGroup } from "../../button-group/button-group.spec";
import { Icon } from "../../icon/icon.spec";
import { Searchbox } from "../../searchbox/searchbox.spec";
import { SplitButton } from "../../split-button/split-button.spec";
import { Splitter } from "../../splitter/splitter.spec";
import { SplitterPane } from "../../splitter/splitter-pane";
import { Switch } from "../../switch/switch.spec";
import { TableThead } from '../../table/table-thead';
import { TableRow } from '../../table/table-row';
import { TableTbody } from '../../table/table-tbody';
import { TableTd } from '../../table/table-td';
import { TreeviewItem } from "../../treeview/treeview-item.spec";
import { Grid } from "../../grid/grid.spec";
import { GridHeader } from "../../grid/grid-header.spec";
import { GridHeaderTable } from "../../grid/grid-header-table.spec";
import { GridHeaderCell } from "../../grid/grid-header-cell.spec";
import { GridContainer } from "../../grid/grid-container.spec";
import { GridContent } from "../../grid/grid-content.spec";
import { GridTable } from "../../grid/grid-table.spec";

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
                <Button className="k-group-start" icon="grid" selected></Button>
                <Button className="k-group-end" icon="grid-layout"></Button>
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
            <Splitter className="k-filemanager-splitter" panes={[
                <SplitterPane className="k-filemanager-navigation" collapsible scrollable flexBasis="25%" key="pane-1">
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
                                        <TableRow className="k-master-row" alt>
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
        </>
    }
    {...props}>
    </FileManager>
);
