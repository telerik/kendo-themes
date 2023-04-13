import ReactDOM from 'react-dom/client';
import { Window } from '../../window';
import { DropdownList } from '../../dropdownlist';
import { Toolbar } from '../../toolbar';
import { Button } from '../../button';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-window {
        min-width: 580px;
        min-height: 500px;
        position: relative;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <Window title="Edit task" actions={[ 'window-minimize', 'window-maximize', 'close' ]} actionButtons={
                    <>
                        <Button icon="save" themeColor="primary">Save</Button>
                        <Button icon="cancel">Cancel</Button>
                        <span className="k-spacer"></span>
                        <Button icon="delete" fillMode="flat" themeColor="primary">Delete</Button>
                    </>
                }>
                    <div className="k-tabstrip k-tabstrip-top">
                        <div className="k-tabstrip-items-wrapper k-hstack">
                            <ul className="k-reset k-tabstrip-items">
                                <li className="k-item k-first">
                                    <span className="k-link">General</span>
                                </li>
                                <li className="k-item">
                                    <span className="k-link">Resources</span>
                                </li>
                                <li className="k-item k-active">
                                    <span className="k-link">Predecessors</span>
                                </li>
                                <li className="k-item k-last">
                                    <span className="k-link">Successors</span>
                                </li>
                            </ul>
                        </div>
                        <div className="k-tabstrip-content k-active">
                            <div className="k-grid k-grid-md k-grid-no-scrollbar">
                                <Toolbar className="k-grid-toolbar">
                                    <Button icon="add">Add</Button>
                                    <Button icon="minus">Remove</Button>
                                </Toolbar>
                                <div className="k-grid-header">
                                    <div className="k-grid-header-wrap">
                                        <table className="k-table k-table-md k-grid-header-table">
                                            <colgroup>
                                                <col/>
                                                <col/>
                                            </colgroup>
                                            <thead className="k-table-thead">
                                                <tr className="k-table-row">
                                                    <th className="k-table-th k-header">
                                                        <span className="k-cell-inner">
                                                            <span className="k-link">
                                                                <span className="k-column-title">Name</span>
                                                                <span className="k-sort-icon"><Icon name="sort-asc-small" /></span>
                                                            </span>
                                                        </span>
                                                    </th>
                                                    <th className="k-table-th k-header">
                                                        <span className="k-cell-inner">
                                                            <span className="k-link">
                                                                <span className="k-column-title">Type</span>
                                                                <span className="k-sort-icon"><Icon name="sort-asc-small" /></span>
                                                            </span>
                                                        </span>
                                                    </th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                                <div className="k-grid-content">
                                    <table className="k-table k-table-md k-grid-table">
                                        <colgroup>
                                            <col/>
                                            <col/>
                                        </colgroup>
                                        <tbody className="k-table-tbody">
                                            <tr className="k-table-row">
                                                <td className="k-table-td">
                                                    <DropdownList placeholder="-Select task-"/>
                                                </td>
                                                <td className="k-table-td">
                                                    <DropdownList placeholder="Finish-Start"/>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </Window>
            </section>

        </div>
    </>
);
