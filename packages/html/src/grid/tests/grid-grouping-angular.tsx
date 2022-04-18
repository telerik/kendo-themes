import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid">
            <h3>Base</h3>
            <div dir="ltr" className="k-widget k-grid">
                <div className="k-grouping-header k-grouping-header-flex">
                    <div className="k-indicator-container"> Drag a column header and drop it here to group by that column </div>
                </div>
                <div className="k-grid-aria-root" role="grid">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table>
                                <colgroup>
                                    <col style={{ width: '50px' }} />
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <thead>
                                    <tr role="row">
                                        <th className="k-header" rowSpan={1} colSpan={1}><Checkbox /></th>
                                        <th className="k-header k-touch-action-none k-grid-draggable-header" rowSpan={1} colSpan={1}>ID</th>
                                        <th className="k-header k-touch-action-none k-grid-draggable-header" rowSpan={1} colSpan={1}>Name</th>
                                        <th className="k-header" rowSpan={1} colSpan={1}>Command</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-container">
                        <div className="k-grid-content k-virtual-content">
                            <div className="k-grid-table-wrap">
                                <table className="k-grid-table">
                                    <colgroup>
                                        <col style={{ width: '50px' }} />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody>
                                        <tr role="row">
                                            <td className="k-touch-action-auto" colSpan={1}><Checkbox /></td>
                                            <td className="k-touch-action-auto" colSpan={1}>1</td>
                                            <td className="k-touch-action-auto" colSpan={1}>Product1</td>
                                            <td className="k-touch-action-auto k-command-cell" colSpan={1}><Button icon="trash">Delete</Button></td>
                                        </tr>
                                        <tr className="k-alt" role="row">
                                            <td className="k-touch-action-auto" colSpan={1}><Checkbox /></td>
                                            <td className="k-touch-action-auto" colSpan={1}>2</td>
                                            <td className="k-touch-action-auto" colSpan={1}>Product2</td>
                                            <td className="k-touch-action-auto k-command-cell" colSpan={1}><Button icon="trash">Delete</Button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="k-height-container">
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h3>Single Group</h3>
            <div dir="ltr" className="k-widget k-grid">
                <div className="k-grouping-header k-grouping-header-flex">
                    <div className="k-indicator-container">
                        <div className="k-touch-action-none k-grid-draggable-header k-group-indicator">
                            <a className="k-link" href="#"><Icon name="sort-asc-sm" />ID</a>
                            <Button fillMode="flat" icon="close"></Button>
                        </div>
                    </div>
                    <div className="k-indicator-container">&nbsp;</div>
                </div>
                <div className="k-grid-aria-root" role="grid">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table>
                                <colgroup>
                                    <col className="k-group-col" />
                                    <col style={{ width: '50px' }} />
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <thead>
                                    <tr role="row">
                                        <th className="k-group-cell k-header"></th>
                                        <th className="k-header" rowSpan={1} colSpan={1}><Checkbox /></th>
                                        <th className="k-header k-touch-action-none k-grid-draggable-header" rowSpan={1} colSpan={1}>ID</th>
                                        <th className="k-header k-touch-action-none k-grid-draggable-header" rowSpan={1} colSpan={1}>Name</th>
                                        <th className="k-header" rowSpan={1} colSpan={1}>Command</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-container">
                        <div className="k-grid-content k-virtual-content">
                            <div className="k-grid-table-wrap">
                                <table className="k-grid-table">
                                    <colgroup>
                                        <col className="k-group-col" />
                                        <col style={{ width: '50px' }} />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody>
                                        <tr role="row" className="k-grouping-row">
                                            <td colSpan={5}>
                                                <p className="k-reset"><Icon name="collapse" /> ID: 1 </p>
                                            </td>
                                        </tr>
                                        <tr role="row">
                                            <td className="k-group-cell"></td>
                                            <td className="k-touch-action-auto" colSpan={1}><Checkbox /></td>
                                            <td className="k-touch-action-auto" colSpan={1}>1</td>
                                            <td className="k-touch-action-auto" colSpan={1}>Product1</td>
                                            <td className="k-touch-action-auto k-command-cell" colSpan={1}><Button icon="trash">Delete</Button></td>
                                        </tr>
                                        <tr role="row" className="k-grouping-row">
                                            <td colSpan={5}>
                                                <p className="k-reset"><Icon name="collapse" /> ID: 2 </p>
                                            </td>
                                        </tr>
                                        <tr className="k-alt" role="row">
                                            <td className="k-group-cell"></td>
                                            <td className="k-touch-action-auto" colSpan={1}><Checkbox /></td>
                                            <td className="k-touch-action-auto" colSpan={1}>2</td>
                                            <td className="k-touch-action-auto" colSpan={1}>Product2</td>
                                            <td className="k-touch-action-auto k-command-cell" colSpan={1}><Button icon="trash">Delete</Button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="k-height-container">
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h3>Two Groups</h3>
            <div dir="ltr" className="k-widget k-grid">
                <div className="k-grouping-header k-grouping-header-flex">
                    <div className="k-indicator-container">
                        <div className="k-touch-action-none k-grid-draggable-header k-group-indicator">
                            <a className="k-link" href="#"><Icon name="sort-asc-sm" />ID</a>
                            <Button fillMode="flat" icon="close"></Button>
                        </div>
                    </div>
                    <div className="k-indicator-container">
                        <div className="k-touch-action-none k-grid-draggable-header k-group-indicator">
                            <a className="k-link" href="#"><Icon name="sort-asc-sm" />Name</a>
                            <Button fillMode="flat" icon="close"></Button>
                        </div>
                    </div>
                    <div className="k-indicator-container">&nbsp;</div>
                </div>
                <div className="k-grid-aria-root" role="grid">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table>
                                <colgroup>
                                    <col className="k-group-col" />
                                    <col className="k-group-col" />
                                    <col style={{ width: '50px' }} />
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <thead>
                                    <tr role="row">
                                        <th className="k-group-cell k-header"></th>
                                        <th className="k-group-cell k-header"></th>
                                        <th className="k-header" rowSpan={1} colSpan={1}><Checkbox /></th>
                                        <th className="k-header k-touch-action-none k-grid-draggable-header" rowSpan={1} colSpan={1}>ID</th>
                                        <th className="k-header k-touch-action-none k-grid-draggable-header" rowSpan={1} colSpan={1}>Name</th>
                                        <th className="k-header" rowSpan={1} colSpan={1}>Command</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-container">
                        <div className="k-grid-content k-virtual-content">
                            <div className="k-grid-table-wrap">
                                <table className="k-grid-table">
                                    <colgroup>
                                        <col className="k-group-col" />
                                        <col className="k-group-col" />
                                        <col style={{ width: '50px' }} />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody>
                                        <tr role="row" className="k-grouping-row">
                                            <td colSpan={6}>
                                                <p className="k-reset"><Icon name="collapse" /> ID: 1 </p>
                                            </td>
                                        </tr>
                                        <tr role="row" className="k-grouping-row">
                                            <td className="k-group-cell"></td>
                                            <td colSpan={5}>
                                                <p className="k-reset"><Icon name="collapse" /> Name: Product1 </p>
                                            </td>
                                        </tr>
                                        <tr role="row">
                                            <td className="k-group-cell"></td>
                                            <td className="k-group-cell"></td>
                                            <td className="k-touch-action-auto" colSpan={1}><Checkbox /></td>
                                            <td className="k-touch-action-auto" colSpan={1}>1</td>
                                            <td className="k-touch-action-auto" colSpan={1}>Product1</td>
                                            <td className="k-touch-action-auto k-command-cell" colSpan={1}><Button icon="trash">Delete</Button></td>
                                        </tr>
                                        <tr role="row" className="k-grouping-row">
                                            <td colSpan={6}>
                                                <p className="k-reset"><Icon name="collapse" /> ID: 2 </p>
                                            </td>
                                        </tr>
                                        <tr role="row" className="k-grouping-row">
                                            <td className="k-group-cell"></td>
                                            <td colSpan={5}>
                                                <p className="k-reset"><Icon name="collapse" /> Name: Product2 </p>
                                            </td>
                                        </tr>
                                        <tr className="k-alt" role="row">
                                            <td className="k-group-cell"></td>
                                            <td className="k-group-cell"></td>
                                            <td className="k-touch-action-auto" colSpan={1}><Checkbox /></td>
                                            <td className="k-touch-action-auto" colSpan={1}>2</td>
                                            <td className="k-touch-action-auto" colSpan={1}>Product2</td>
                                            <td className="k-touch-action-auto k-command-cell" colSpan={1}><Button icon="trash">Delete</Button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="k-height-container">
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
