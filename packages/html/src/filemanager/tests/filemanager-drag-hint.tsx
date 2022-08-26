import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Icon } from '../../icon';
import { Treeview, TreeviewItem } from '../../treeview';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #filemanager-draghint {
        position: absolute;
        left: 250px;
        top: 200px;
        z-index: 2;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>File Manager Drag Hint</span>
            <div className="k-widget k-filemanager">
                {/* Header */}
                <div className="k-filemanager-header">
                    <div className="k-filemanager-toolbar k-toolbar k-widget">
                        <Button>New Folder</Button>
                        <Button>Upload</Button>
                    </div>
                </div>

                <div className="k-filemanager-content-container" >
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
                                    <a className="k-breadcrumb-root-link k-breadcrumb-icon-link">
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
                                <div className="k-listview-item k-selected">
                                    <span className="k-file-preview"><Icon className="k-file-icon" name="file-image" /></span>
                                    <span className="k-file-name">file.png</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Preview */}
                    <div className="k-filemanager-preview k-hidden">
                    </div>
                </div>
            </div>

            <div className="k-filemanager-drag-hint k-drag-clue" id="filemanager-draghint">
                <Icon name="file" />
                <span>file.png</span>
            </div>

        </div>
    </>
);
