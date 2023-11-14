import { BreadcrumbContainer, BreadcrumbItem, BreadcrumbLink, BreadcrumbRoot } from '../../breadcrumb';
import { Button } from '../../button';
import { Icon } from '../../icon';
import { MenuItem, MenuList } from '../../menu';
import { Popup } from '../../popup';
import { Toolbar } from '../../toolbar';
import { Treeview, TreeviewItem } from '../../treeview';


const styles = `
    #filemanager-context-menu {
        position: absolute;
        top: 200px;
        left: 270px;
        z-index: 2;
        overflow: visible;
    }
`;

export default () =>(
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
                                    <span className="k-file-preview"><Icon className="k-file-icon" icon="folder" size="xxxlarge"/></span>
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

            <Popup id="filemanager-context-menu" className="k-menu-popup k-context-menu-popup">
                <MenuList>
                    <MenuItem text="Rename" icon="pencil"></MenuItem>
                    <MenuItem text="Delete" icon="trash"></MenuItem>
                </MenuList>
            </Popup>

        </div>
    </>
);
