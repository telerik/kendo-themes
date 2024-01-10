import { FilePreview, FileManagerBreadcrumb, FileManagerTreeview, FileInfo, FileManagerListView, FileManagerPreview } from '..';
import { ListViewItem } from '../..';
import { BreadcrumbContainer, BreadcrumbItem, BreadcrumbLink } from '../../breadcrumb';
import { Icon } from '../../icon';
import { Splitter, SplitterPane } from '../../splitter';
import { TreeviewItem } from '../../treeview';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>Preview - File info</span>
            <FileManagerPreview>
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

                        <FileManagerListView>
                            <ListViewItem>
                                <FilePreview name="Folder" icon="folder" size="xxxlarge"/>
                            </ListViewItem>
                            <ListViewItem selected>
                                <FilePreview name="file.png" icon="file-image" size="xxxlarge"/>
                            </ListViewItem>
                        </FileManagerListView>
                    </SplitterPane>

                    <SplitterPane className="k-filemanager-preview" collapsible scrollable flexBasis="25%">
                        <FileInfo selection="single" icon="file-image" name="file.png" fileType="Image" fileSize="72 KB" fileDateCreated="13/12/2019 12:22:04 PM" fileDateModified="13/12/2019 12:36:04 PM">
                        </FileInfo>
                    </SplitterPane>
                </Splitter>
            </FileManagerPreview>

            <span>Preview - No file selected</span>
            <FileManagerPreview />

            <span>Preview - Multiple files selected</span>
            <FileManagerPreview>
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

                        <FileManagerListView>
                            <ListViewItem selected>
                                <FilePreview name="Folder" icon="folder" size="xxxlarge"/>
                            </ListViewItem>
                            <ListViewItem selected>
                                <FilePreview name="file.png" icon="file-image" size="xxxlarge"/>
                            </ListViewItem>
                        </FileManagerListView>
                    </SplitterPane>

                    <SplitterPane className="k-filemanager-preview" collapsible scrollable flexBasis="25%">
                        <FileInfo selection="multiple" name="2 items">
                        </FileInfo>
                    </SplitterPane>
                </Splitter>
            </FileManagerPreview>

        </div>
    </>
);
