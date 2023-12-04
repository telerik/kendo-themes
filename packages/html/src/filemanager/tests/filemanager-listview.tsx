import { BreadcrumbRoot, BreadcrumbContainer, BreadcrumbItem, BreadcrumbLink } from '../../breadcrumb';
import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { Icon } from '../../icon';
import { Toolbar } from '../../toolbar';
import { Treeview, TreeviewItem } from '../../treeview';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>File Manager List View</span>
            <div className="k-widget k-filemanager">
                {/* Header */}
                <div className="k-filemanager-header">
                    <Toolbar className="k-filemanager-toolbar">
                        <Button>New Folder</Button>
                        <Button>Upload</Button>
                        <ButtonGroup>
                            <Button icon="grid-layout" selected></Button>
                            <Button icon="grid"></Button>
                        </ButtonGroup>
                    </Toolbar>
                </div>

                <div className="k-filemanager-content-container">
                    {/* Navigation */}
                    <div className="k-filemanager-navigation">
                        <Treeview className="k-filemanager-treeview">
                            <TreeviewItem text="Folder" />
                        </Treeview>
                    </div>

                    {/* Content */}
                    <div className="k-filemanager-content">
                        <BreadcrumbRoot className="k-filemanager-breadcrumb">
                            <BreadcrumbContainer>
                                <BreadcrumbItem root>
                                    <BreadcrumbLink root icon>
                                        <Icon icon="home" />
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbContainer>
                        </BreadcrumbRoot>

                        {/* View */}
                        <div className="k-widget k-listview k-selectable k-filemanager-listview">
                            <div className="k-listview-content k-d-flex k-flex-row k-flex-wrap">
                                <div className="k-listview-item">
                                    <span className="k-file-preview"><Icon className="k-file-icon" icon="folder" size="xxxlarge" /></span>
                                    <span className="k-file-name">Folder</span>
                                </div>
                                <div className="k-listview-item">
                                    <span className="k-file-preview"><Icon className="k-file-icon" icon="file-image" size="xxxlarge" /></span>
                                    <span className="k-file-name">file.png</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Preview */}
                    <div className="k-filemanager-preview" hidden></div>
                </div>
            </div>

            <span>ListView View Resizing</span>
            <div className="k-widget k-filemanager">
                {/* Header */}
                <div className="k-filemanager-header">
                    <Toolbar className="k-filemanager-toolbar">
                        <Button>New Folder</Button>
                        <Button>Upload</Button>
                        <ButtonGroup>
                            <Button icon="grid-layout" selected></Button>
                            <Button icon="grid"></Button>
                        </ButtonGroup>
                    </Toolbar>
                </div>

                <div className="k-filemanager-content-container">
                    {/* Navigation */}
                    <div className="k-filemanager-navigation" style={{ width: "234px" }}>
                        <Treeview className="k-filemanager-treeview">
                            <TreeviewItem text="Folder" />
                        </Treeview>
                    </div>

                    {/* Resizing Handle */}
                    <div className="k-splitbar k-splitbar-horizontal k-splitbar-draggable-horizontal k-filemanager-splitbar-navigation k-focus">
                        <span className="k-resize-handle"></span>
                    </div>

                    {/* Content */}
                    <div className="k-filemanager-content">
                        <BreadcrumbRoot className="k-filemanager-breadcrumb">
                            <BreadcrumbContainer>
                                <BreadcrumbItem root>
                                    <BreadcrumbLink root icon>
                                        <Icon icon="home" />
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbContainer>
                        </BreadcrumbRoot>

                        {/* View */}
                        <div className="k-widget k-listview k-selectable k-filemanager-listview">
                            <div className="k-listview-content k-d-flex k-flex-row k-flex-wrap">
                                <div className="k-listview-item">
                                    <span className="k-file-preview"><Icon className="k-file-icon" icon="folder" size="xxxlarge" /></span>
                                    <span className="k-file-name">Folder</span>
                                </div>
                                <div className="k-listview-item">
                                    <span className="k-file-preview"><Icon className="k-file-icon" icon="file-image" size="xxxlarge" /></span>
                                    <span className="k-file-name">file.png</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Preview */}
                    <div className="k-filemanager-preview" hidden></div>
                </div>
            </div>

        </div>
    </>
);
