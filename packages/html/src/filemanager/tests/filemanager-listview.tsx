import { FileManagerBreadcrumb, FileManagerListView, FileManagerNormal, FileManagerTreeview, FilePreview } from '../../filemanager';
import { BreadcrumbContainer, BreadcrumbItem, BreadcrumbLink } from '../../breadcrumb';
import { Icon } from '../../icon';
import { ListViewItem } from '../../listview';
import { TreeviewItem } from '../../treeview';
import { Splitter, SplitterPane } from '../../splitter';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>List View</span>
            <FileManagerNormal>
                <Splitter className="k-filemanager-splitter">
                    <SplitterPane className="k-filemanager-navigation" resizable={false} scrollable flexBasis="20%">
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
                            <ListViewItem selected>
                                <FilePreview name="file.png" icon="file-image" size="xxxlarge"/>
                            </ListViewItem>
                        </FileManagerListView>
                    </SplitterPane>
                </Splitter>
            </FileManagerNormal>

            <span>ListView View Resizing</span>
            <FileManagerNormal />

        </div>
    </>
);
