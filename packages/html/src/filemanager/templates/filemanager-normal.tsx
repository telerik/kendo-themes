import { FileManager, FileManagerBreadcrumb, FileManagerListView, FileManagerToolbar, FileManagerTreeview, FilePreview } from "..";
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

export const FileManagerNormal = (props) => (
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
                <Switch/>
            </div>
            <Searchbox className="k-filemanager-search-tool" placeholder="Search..." />
        </FileManagerToolbar>
    }
    children={
        <>
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

                    <FileManagerListView>
                        <ListViewItem>
                            <FilePreview name="Folder" icon="folder" size="xxxlarge"/>
                        </ListViewItem>
                        <ListViewItem>
                            <FilePreview name="file.png" icon="file-image" size="xxxlarge"/>
                        </ListViewItem>
                    </FileManagerListView>
                </SplitterPane>
            </Splitter>
        </>
    }
    {...props}>
    </FileManager>
);
