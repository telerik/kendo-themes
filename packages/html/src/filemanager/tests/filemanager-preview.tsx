import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Icon } from '../../icon';
import { Treeview, TreeviewItem } from '../../treeview';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>Preview Pane</span>
            <div className="k-widget k-filemanager">
                {/* Header */}
                <div className="k-filemanager-header">
                    <div className="k-filemanager-toolbar k-toolbar k-widget">
                        <Button>New Folder</Button>
                        <Button>Upload</Button>
                    </div>
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
                        <div className="k-filemanager-grid k-grid k-widget k-grid-display-block k-editable">
                            <div className="k-grid-header">
                                <div className="k-grid-header-wrap k-auto-scrollable">
                                    <table>
                                        <colgroup>
                                            <col />
                                            <col />
                                            <col />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th className="k-header k-sorted">
                                                    <a className="k-link">Name <Icon name="sort-asc-sm" /></a>
                                                </th>
                                                <th className="k-header">
                                                    <a className="k-link">Date Created</a>
                                                </th>
                                                <th className="k-header">
                                                    <a className="k-link">File Size</a>
                                                </th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                            <div className="k-grid-content k-auto-scrollable">
                                <table className="k-selectable">
                                    <colgroup>
                                        <col className="k-sorted" />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span className="k-file-preview"><Icon className="k-file-icon" name="folder" /></span>
                                                <span className="k-file-name">Folder</span>
                                            </td>
                                            <td>13/12/2019 at 12:22:04 PM</td>
                                            <td>0</td>
                                        </tr>
                                        <tr className="k-alt k-selected">
                                            <td>
                                                <span className="k-file-preview"><Icon className="k-file-icon" name="file" /></span>
                                                <span className="k-file-name">file.png</span>
                                            </td>
                                            <td>13/12/2019 at 12:22:04 PM</td>
                                            <td>73289</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Preview */}
                    <div className="k-filemanager-preview">
                        <div className="k-file-info">
                            <span className="k-file-preview"><Icon className="k-file-icon" name="file-image" /></span>
                            <span className="k-file-name k-single-file-selected">file.png</span>
                            <dl className="k-file-meta">
                                <dt className="k-file-meta-label">Type: </dt>
                                <dd className="k-file-meta-value k-file-type">image</dd>
                                <dd className="k-line-break"></dd>
                                <dt className="k-file-meta-label">Size: </dt>
                                <dd className="k-file-meta-value k-file-size">72 KB</dd>
                                <dd className="k-line-break"></dd>
                                <dt className="k-file-meta-label">Date Created: </dt>
                                <dd className="k-file-meta-value k-file-created">12/24/2019 1:57:36 PM</dd>
                                <dd className="k-line-break"></dd>
                                <dt className="k-file-meta-label">Date Modified: </dt>
                                <dd className="k-file-meta-value k-file-modified">11/25/2019 3:23:45 PM</dd>
                                <dd className="k-line-break"></dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>

            <span>Preview Pane Resizable</span>
            <div className="k-widget k-filemanager">
                {/* Header */}
                <div className="k-filemanager-header">
                    <div className="k-filemanager-toolbar k-toolbar k-widget">
                        <Button>New Folder</Button>
                        <Button>Upload</Button>
                    </div>
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
                        <div className="k-filemanager-grid k-grid k-widget k-grid-display-block k-editable">
                            <div className="k-grid-header">
                                <div className="k-grid-header-wrap k-auto-scrollable">
                                    <table>
                                        <colgroup>
                                            <col />
                                            <col />
                                            <col />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th className="k-header k-sorted">
                                                    <a className="k-link">Name <Icon name="sort-asc-sm" /></a>
                                                </th>
                                                <th className="k-header">
                                                    <a className="k-link">Date Created</a>
                                                </th>
                                                <th className="k-header">
                                                    <a className="k-link">File Size</a>
                                                </th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                            <div className="k-grid-content k-auto-scrollable">
                                <table className="k-selectable">
                                    <colgroup>
                                        <col className="k-sorted" />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span className="k-file-preview"><Icon className="k-file-icon" name="folder" /></span>
                                                <span className="k-file-name">Folder</span>
                                            </td>
                                            <td>13/12/2019 at 12:22:04 PM</td>
                                            <td>0</td>
                                        </tr>
                                        <tr className="k-alt">
                                            <td>
                                                <span className="k-file-preview"><Icon className="k-file-icon" name="file" /></span>
                                                <span className="k-file-name">file.png</span>
                                            </td>
                                            <td>13/12/2019 at 12:22:04 PM</td>
                                            <td>73289</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Resizing Handle */}
                    <div className="k-splitbar k-splitbar-horizontal k-splitbar-draggable-horizontal k-filemanager-splitbar-navigation k-focus">
                        <span className="k-resize-handle"></span>
                    </div>

                    {/* Preview */}
                    <div className="k-filemanager-preview" style={{ width: "234px" }}>
                        <div className="k-file-info">
                            <span className="k-file-preview"><Icon className="k-file-icon" name="none" /></span>
                            <span className="k-file-name k-no-file-selected">No File Selected</span>
                        </div>
                    </div>
                </div>
            </div>

            <span>Multiple Files Selected</span>
            <div className="k-widget k-filemanager">
                {/* Header */}
                <div className="k-filemanager-header">
                    <div className="k-filemanager-toolbar k-toolbar k-widget">
                        <Button>New Folder</Button>
                        <Button>Upload</Button>
                    </div>
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
                        <div className="k-filemanager-grid k-grid k-widget k-grid-display-block k-editable">
                            <div className="k-grid-header">
                                <div className="k-grid-header-wrap k-auto-scrollable">
                                    <table>
                                        <colgroup>
                                            <col />
                                            <col />
                                            <col />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th className="k-header k-sorted">
                                                    <a className="k-link">Name <Icon name="sort-asc-sm" /></a>
                                                </th>
                                                <th className="k-header">
                                                    <a className="k-link">Date Created</a>
                                                </th>
                                                <th className="k-header">
                                                    <a className="k-link">File Size</a>
                                                </th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                            <div className="k-grid-content k-auto-scrollable">
                                <table className="k-selectable">
                                    <colgroup>
                                        <col className="k-sorted" />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody>
                                        <tr className="k-selected">
                                            <td>
                                                <span className="k-file-preview"><Icon className="k-file-icon" name="folder" /></span>
                                                <span className="k-file-name">Folder</span>
                                            </td>
                                            <td>13/12/2019 at 12:22:04 PM</td>
                                            <td>0</td>
                                        </tr>
                                        <tr className="k-alt k-selected">
                                            <td>
                                                <span className="k-file-preview"><Icon className="k-file-icon" name="file" /></span>
                                                <span className="k-file-name">file.png</span>
                                            </td>
                                            <td>13/12/2019 at 12:22:04 PM</td>
                                            <td>73289</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Preview */}
                    <div className="k-filemanager-preview">
                        <div className="k-file-info">
                            <span className="k-file-preview"><Icon className="k-file-icon" name="file" /></span>
                            <span className="k-file-name k-multiple-files-selected">3 items</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
);
