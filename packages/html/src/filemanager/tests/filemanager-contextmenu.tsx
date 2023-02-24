import ReactDOM from 'react-dom/client';
import { Breadcrumb, BreadcrumbContainer, BreadcrumbItem, BreadcrumbLink } from '../../breadcrumb';
import { Button } from '../../button';
import { Icon } from '../../icon';
import { MenuItem, MenuList } from '../../menu';
import { Popup } from '../../popup';
import { Toolbar } from '../../toolbar';
import { Treeview, TreeviewItem } from '../../treeview';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #filemanager-context-menu {
        position: absolute;
        top: 200px;
        left: 270px;
        z-index: 2;
        overflow: visible;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>File Manager ContextMenu</span>
            <div className="k-widget k-filemanager">
                {/* Header */}
                <div className="k-filemanager-header">
                    <Toolbar className="k-filemanager-toolbar">
                        <Button>New Folder</Button>
                        <Button>Upload</Button>
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
                        <Breadcrumb className="k-filemanager-breadcrumb">
                            <BreadcrumbContainer>
                                <BreadcrumbItem root>
                                    <BreadcrumbLink root icon>
                                        <Icon name="home" />
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbContainer>
                        </Breadcrumb>

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

            <div className="k-animation-container k-context-menu-popup" id="filemanager-context-menu">
                <Popup className="k-menu-popup">
                    <MenuList>
                        <MenuItem text="Rename" icon="pencil"></MenuItem>
                        <MenuItem text="Delete" icon="trash"></MenuItem>
                    </MenuList>
                </Popup>
            </div>

        </div>
    </>
);
