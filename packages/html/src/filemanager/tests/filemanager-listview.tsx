import { FileManagerTreeview } from '../filemanager-treeview.spec';
import { FileManagerBreadcrumb } from '../filemanager-breadcrumb.spec';
import { FilePreview } from '../file-preview';
import { FileManagerListView } from '../filemanager-listview.spec';
import { FileManagerNormal } from '../templates/filemanager-normal';
import { BreadcrumbContainer } from '../../breadcrumb/breadcrumb-container';
import { BreadcrumbItem } from '../../breadcrumb/breadcrumb-item';
import { BreadcrumbLink } from '../../breadcrumb/breadcrumb-link';
import { Icon } from '../../icon/icon.spec';
import { ListViewItem } from '../../listview/listview-item.spec';
import { TreeviewItem } from '../../treeview/treeview-item.spec';
import { Splitter } from '../../splitter/splitter.spec';
import { SplitterPane } from '../../splitter/splitter-pane';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>List View</span>
            <FileManagerNormal>
                <Splitter className="k-filemanager-splitter" panes={[
                    <SplitterPane className="k-filemanager-navigation" resizable={false} scrollable flexBasis="20%" key="pane-1">
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
                    </SplitterPane>
                ]} />
            </FileManagerNormal>

            <span>ListView View Resizing</span>
            <FileManagerNormal />

        </div>
    </>
);
