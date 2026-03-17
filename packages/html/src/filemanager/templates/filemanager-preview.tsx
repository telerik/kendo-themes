import { FileInfo, FileManager, FileManagerBreadcrumb, FileManagerListView, FileManagerToolbar, FileManagerTreeview, FilePreview } from "..";
import { BreadcrumbContainer, BreadcrumbItem, BreadcrumbLink } from "../../breadcrumb";
import { Button } from "../../button";
import { ButtonGroup } from "../../button-group";
import { Icon } from "../../icon";
import { ListViewItem } from "../../listview";
import { Searchbox } from "../../searchbox";
import { SplitButton } from "../../split-button";
import { Splitter, SplitterPane } from "../../splitter";
import { Switch } from "../../switch";
import { TreeviewItem } from "../../treeview";

export const FileManagerPreview = (props) => (
    <FileManager toolbar={
        <FileManagerToolbar>
            <Button>New Folder</Button>
            <Button>Upload</Button>
            <ButtonGroup>
                <Button className="k-group-start" icon="sort-asc-small" aria-label="Sort ascending"></Button>
                <Button className="k-group-end" icon="sort-desc-small" aria-label="Sort descending"></Button>
            </ButtonGroup>
            <SplitButton text="Sort By" />
            <ButtonGroup>
                <Button className="k-group-start" icon="grid" aria-label="Grid view"></Button>
                <Button className="k-group-end" icon="grid-layout" selected aria-label="List view"></Button>
            </ButtonGroup>
            <div className="k-spacer"></div>
            <div className="k-filemanager-details-toggle">
                <label>View Details</label>
                <Switch checked aria-label="View Details"/>
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
                                <BreadcrumbLink root icon aria-label="Home">
                                    <Icon icon="home" />
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbContainer>
                    </FileManagerBreadcrumb>

                    <FileManagerListView>
                        <ListViewItem itemRole="option" ariaSetSize={2} ariaPosInSet={1} tabIndex={0}>
                            <FilePreview name="Folder" icon="folder" size="xxxlarge"/>
                        </ListViewItem>
                        <ListViewItem itemRole="option" ariaSetSize={2} ariaPosInSet={2} tabIndex={-1}>
                            <FilePreview name="file.png" icon="file-image" size="xxxlarge"/>
                        </ListViewItem>
                    </FileManagerListView>
                </SplitterPane>,

                <SplitterPane className="k-filemanager-preview" collapsible scrollable flexBasis="25%" key="pane-3" tabIndex={0}>
                    <FileInfo selection="none" name="No File Selected">
                    </FileInfo>
                </SplitterPane>
            ]} />
        </>
    }
    {...props}>
    </FileManager>
);
