import { BreadcrumbRoot, BreadcrumbContainer, BreadcrumbItem, BreadcrumbLink } from '../../breadcrumb';
import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { Icon } from '../../icon';
import { Toolbar } from '../../toolbar';
import { Treeview, TreeviewItem } from '../../treeview';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>File Manager Grid View</span>
            <div className="k-widget k-filemanager">
                {/* Header */}
                <div className="k-filemanager-header">
                    <Toolbar className="k-filemanager-toolbar" resizable>
                        <Button>New Folder</Button>
                        <Button>Upload</Button>
                        <ButtonGroup>
                            <Button icon="grid-layout"></Button>
                            <Button icon="grid" selected></Button>
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
                        <div className="k-filemanager-grid k-grid k-grid-md k-grid-display-block k-editable">
                            <div className="k-grid-header">
                                <div className="k-grid-header-wrap k-auto-scrollable">
                                    <table className="k-table k-table-md k-grid-header-table">
                                        <colgroup>
                                            <col />
                                            <col />
                                            <col />
                                        </colgroup>
                                        <thead className="k-table-thead">
                                            <tr className="k-table-row">
                                                <th className="k-table-th k-header k-sorted">
                                                    <span className="k-cell-inner">
                                                        <span className="k-link">
                                                            <span className="k-column-title">Name</span>
                                                            <span className="k-sort-icon">
                                                                <Icon icon="sort-asc-small" />
                                                            </span>
                                                        </span>
                                                    </span>
                                                </th>
                                                <th className="k-table-th k-header">
                                                    <span className="k-cell-inner">
                                                        <span className="k-link">
                                                            <span className="k-column-title">Date Created</span>
                                                        </span>
                                                    </span>
                                                </th>
                                                <th className="k-table-th k-header">
                                                    <span className="k-cell-inner">
                                                        <span className="k-link">
                                                            <span className="k-column-title">File Size</span>
                                                        </span>
                                                    </span>
                                                </th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                            <div className="k-grid-content k-auto-scrollable">
                                <table className="k-table k-table-md k-grid-table k-selectable">
                                    <colgroup>
                                        <col className="k-sorted" />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody className="k-table-tbody">
                                        <tr className="k-table-row">
                                            <td className="k-table-td">
                                                <span className="k-file-preview"><Icon className="k-file-icon" icon="folder" /></span>
                                                <span className="k-file-name">Folder</span>
                                            </td>
                                            <td className="k-table-td">13/12/2019 at 12:22:04 PM</td>
                                            <td className="k-table-td">0</td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-alt">
                                            <td className="k-table-td">
                                                <span className="k-file-preview"><Icon className="k-file-icon" icon="file" /></span>
                                                <span className="k-file-name">file.png</span>
                                            </td>
                                            <td className="k-table-td">13/12/2019 at 12:22:04 PM</td>
                                            <td className="k-table-td">73289</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                    {/* Preview */}
                    <div className="k-filemanager-preview" hidden></div>
                </div>
            </div>

            <span>File Manager Grid View Resizing</span>
            <div className="k-widget k-filemanager">
                {/* Header */}
                <div className="k-filemanager-header">
                    <Toolbar className="k-filemanager-toolbar" resizable>
                        <Button>New Folder</Button>
                        <Button>Upload</Button>
                        <ButtonGroup>
                            <Button icon="grid-layout"></Button>
                            <Button icon="grid" selected></Button>
                        </ButtonGroup>
                    </Toolbar>
                </div>

                <div className="k-filemanager-content-container">
                    {/* Navigation */}
                    <div className="k-filemanager-navigation" style={{ width: "234px" }}>
                        <div className="k-filemanager-navigation-container">
                            <Treeview className="k-filemanager-treeview">
                                <TreeviewItem text="Folder" />
                            </Treeview>
                        </div>
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
                        <div className="k-filemanager-view k-filemanager-view-grid">
                            <div className="k-filemanager-grid k-grid k-grid-md k-grid-display-block k-editable">
                                <div className="k-grid-header">
                                    <div className="k-grid-header-wrap k-auto-scrollable">
                                        <table className="k-table k-table-md k-grid-header-table">
                                            <colgroup>
                                                <col />
                                                <col />
                                                <col />
                                            </colgroup>
                                            <thead className="k-table-thead">
                                                <tr className="k-table-row">
                                                    <th className="k-table-th k-header k-sorted">
                                                        <span className="k-cell-inner">
                                                            <span className="k-link">
                                                                <span className="k-column-title">Name</span>
                                                                <span className="k-sort-icon">
                                                                    <Icon icon="sort-asc-small" />
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </th>
                                                    <th className="k-table-th k-header">
                                                        <span className="k-cell-inner">
                                                            <span className="k-link">
                                                                <span className="k-column-title">Date Created</span>
                                                            </span>
                                                        </span>
                                                    </th>
                                                    <th className="k-table-th k-header">
                                                        <span className="k-cell-inner">
                                                            <span className="k-link">
                                                                <span className="k-column-title">File Size</span>
                                                            </span>
                                                        </span>
                                                    </th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                                <div className="k-grid-content k-auto-scrollable">
                                    <table className="k-table k-table-md k-grid-table k-selectable">
                                        <colgroup>
                                            <col className="k-sorted" />
                                            <col />
                                            <col />
                                        </colgroup>
                                        <tbody className="k-table-tbody">
                                            <tr className="k-table-row">
                                                <td className="k-table-td">
                                                    <span className="k-file-preview"><Icon className="k-file-icon" icon="folder" /></span>
                                                    <span className="k-file-name">Folder</span>
                                                </td>
                                                <td className="k-table-td">13/12/2019 at 12:22:04 PM</td>
                                                <td className="k-table-td">0</td>
                                            </tr>
                                            <tr className="k-table-row k-table-alt-row k-alt">
                                                <td className="k-table-td">
                                                    <span className="k-file-preview"><Icon className="k-file-icon" icon="file" /></span>
                                                    <span className="k-file-name">file.png</span>
                                                </td>
                                                <td className="k-table-td">13/12/2019 at 12:22:04 PM</td>
                                                <td className="k-table-td">73289</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Preview */}
                    <div className="k-filemanager-preview" hidden>
                    </div>
                </div>
            </div>

        </div>
    </>
);
