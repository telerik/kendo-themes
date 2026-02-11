import { FileManagerTreeview } from '../filemanager-treeview.spec';
import { FileManagerBreadcrumb } from '../filemanager-breadcrumb.spec';
import { FileInfo } from '../file-info';
import { FilePreview } from '../file-preview';
import { FileManagerPreview } from '../templates/filemanager-preview';
import { FileManagerListView } from '../filemanager-listview.spec';
import { BreadcrumbContainer } from '../../breadcrumb/breadcrumb-container';
import { BreadcrumbItem } from '../../breadcrumb/breadcrumb-item';
import { BreadcrumbLink } from '../../breadcrumb/breadcrumb-link';
import { Icon } from '../../icon/icon.spec';
import { ListViewItem } from '../../listview/listview-item.spec';
import { Splitter } from '../../splitter/splitter.spec';
import { SplitterPane } from '../../splitter/splitter-pane';
import { TreeviewItem } from '../../treeview/treeview-item.spec';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>Preview - File info</span>
            <FileManagerPreview>
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
                            <ListViewItem selected>
                                <FilePreview name="file.png" icon="file-image" size="xxxlarge"/>
                            </ListViewItem>
                        </FileManagerListView>
                    </SplitterPane>,

                    <SplitterPane className="k-filemanager-preview" collapsible scrollable flexBasis="25%" key="pane-3">
                        <FileInfo selection="single" icon="file-image" name="file.png" fileType="Image" fileSize="72 KB" fileDateCreated="13/12/2019 12:22:04 PM" fileDateModified="13/12/2019 12:36:04 PM">
                        </FileInfo>
                    </SplitterPane>
                ]} />
            </FileManagerPreview>

            <span>Preview - No file selected</span>
            <FileManagerPreview />

            <span>Preview - Multiple files selected</span>
            <FileManagerPreview>
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
                            <ListViewItem selected>
                                <FilePreview name="Folder" icon="folder" size="xxxlarge"/>
                            </ListViewItem>
                            <ListViewItem selected>
                                <FilePreview name="file.png" icon="file-image" size="xxxlarge"/>
                            </ListViewItem>
                        </FileManagerListView>
                    </SplitterPane>,

                    <SplitterPane className="k-filemanager-preview" collapsible scrollable flexBasis="25%" key="pane-3">
                        <FileInfo selection="multiple" name="2 items">
                        </FileInfo>
                    </SplitterPane>
                ]} />
            </FileManagerPreview>

        </div>
    </>
);
