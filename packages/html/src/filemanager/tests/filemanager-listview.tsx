import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { Icon } from '../../icon';
import { Toolbar } from '../../toolbar';
import { Treeview, TreeviewItem } from '../../treeview';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
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
                        <nav className="k-filemanager-breadcrumb k-widget k-breadcrumb">
                            <ol className="k-breadcrumb-container">
                                <li className="k-breadcrumb-item k-breadcrumb-root-item">
                                    <a className="k-breadcrumb-root-link  k-breadcrumb-icon-link">
                                        <Icon name="home" />
                                    </a>
                                </li>
                            </ol>
                        </nav>

                        {/* View */}
                        <div className="k-widget k-listview k-selectable k-filemanager-listview">
                            <div className="k-listview-content k-d-flex k-flex-row k-flex-wrap">
                                <div className="k-listview-item">
                                    <span className="k-file-preview"><Icon className="k-file-icon" name="folder" /></span>
                                    <span className="k-file-name">Folder</span>
                                </div>
                                <div className="k-listview-item">
                                    <span className="k-file-preview"><Icon className="k-file-icon" name="file-image" /></span>
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
                        <nav className="k-filemanager-breadcrumb k-widget k-breadcrumb">
                            <ol className="k-breadcrumb-container">
                                <li className="k-breadcrumb-item k-breadcrumb-root-item">
                                    <a className="k-breadcrumb-root-link  k-breadcrumb-icon-link">
                                        <Icon name="home" />
                                    </a>
                                </li>
                            </ol>
                        </nav>

                        {/* View */}
                        <div className="k-widget k-listview k-selectable k-filemanager-listview">
                            <div className="k-listview-content k-d-flex k-flex-row k-flex-wrap">
                                <div className="k-listview-item">
                                    <span className="k-file-preview"><Icon className="k-file-icon" name="folder" /></span>
                                    <span className="k-file-name">Folder</span>
                                </div>
                                <div className="k-listview-item">
                                    <span className="k-file-preview"><Icon className="k-file-icon" name="file-image" /></span>
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
