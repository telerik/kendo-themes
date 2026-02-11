import { FileManager } from "../filemanager.spec";
import { FileManagerToolbar } from "../filemanager-toolbar.spec";
import { FileManagerTreeview } from "../filemanager-treeview.spec";
import { FileManagerBreadcrumb } from "../filemanager-breadcrumb.spec";
import { FileManagerListView } from "../filemanager-listview.spec";
import { FilePreview } from "../file-preview";
import { FileInfo } from "../file-info";
import { BreadcrumbContainer } from "../../breadcrumb/breadcrumb-container";
import { BreadcrumbItem } from "../../breadcrumb/breadcrumb-item";
import { BreadcrumbLink } from "../../breadcrumb/breadcrumb-link";
import { Button } from "../../button/button.spec";
import { ButtonGroup } from "../../button-group/button-group.spec";
import { Icon } from "../../icon/icon.spec";
import { ListViewItem } from "../../listview/listview-item.spec";
import { Searchbox } from "../../searchbox/searchbox.spec";
import { SplitButton } from "../../split-button/split-button.spec";
import { Splitter } from "../../splitter/splitter.spec";
import { SplitterPane } from "../../splitter/splitter-pane";
import { Switch } from "../../switch/switch.spec";
import { TreeviewItem } from "../../treeview/treeview-item.spec";

export const FileManagerPreview = (props) => (
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
                <Button className="k-group-start" icon="grid"></Button>
                <Button className="k-group-end" icon="grid-layout" selected></Button>
            </ButtonGroup>
            <div className="k-spacer"></div>
            <div className="k-filemanager-details-toggle">
                <label>View Details</label>
                <Switch checked/>
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

                    <FileManagerListView>
                        <ListViewItem>
                            <FilePreview name="Folder" icon="folder" size="xxxlarge"/>
                        </ListViewItem>
                        <ListViewItem>
                            <FilePreview name="file.png" icon="file-image" size="xxxlarge"/>
                        </ListViewItem>
                    </FileManagerListView>
                </SplitterPane>,

                <SplitterPane className="k-filemanager-preview" collapsible scrollable flexBasis="25%" key="pane-3">
                    <FileInfo selection="none" name="No File Selected">
                    </FileInfo>
                </SplitterPane>
            ]} />
        </>
    }
    {...props}>
    </FileManager>
);
